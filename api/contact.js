// Vercel Serverless Function → POST /api/contact
// Lives in /api at the project root (next to package.json, NOT inside /src).
// Zero dependencies. Also imported by server/dev.js for local development.

const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

// Best-effort rate limit. Serverless instances don't share memory, so this
// stops bursts hitting a warm instance but is not a hard guarantee.
// For a strict limit, use Upstash Redis (Vercel Marketplace).
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();

  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

// Telegram's HTML parse mode breaks on raw < > &, and user input is untrusted.
const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function getIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  const first = (Array.isArray(fwd) ? fwd[0] : fwd ?? "").split(",")[0].trim();
  return first || req.socket?.remoteAddress || "unknown";
}

function parseBody(req) {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body ?? {};
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  // Read env at request time (not at import time) so local dev and Vercel both work.
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variable");
    return res
      .status(500)
      .json({ error: "The contact form is temporarily unavailable. Please try again later." });
  }

  const body = parseBody(req);

  // Honeypot: bots fill the hidden field, people never see it.
  // Pretend success so bots don't learn they were caught.
  if (clean(body.botcheck, 100)) return res.status(200).json({ ok: true });

  if (isRateLimited(getIp(req))) {
    return res
      .status(429)
      .json({ error: "Too many messages from this connection. Try again in a few minutes." });
  }

  const name = clean(body.name, 100);
  const phone = clean(body.phone, 30);
  const email = clean(body.email, 200);
  const message = clean(body.message, 2000);
  const source = clean(body.source, 300);

  if (!/^[+()\d\s\-.]{5,30}$/.test(phone)) {
    return res.status(400).json({ error: "Enter a valid phone number, for example +1 312 340 0323." });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address, or leave the field empty." });
  }

  const text = [
    "📩 <b>New inquiry</b>",
    "",
    `<b>Name:</b> ${escapeHtml(name) || "—"}`,
    `<b>Phone:</b> ${escapeHtml(phone)}`,
    `<b>Email:</b> ${escapeHtml(email) || "—"}`,
    "",
    "<b>Message:</b>",
    escapeHtml(message) || "—",
    ...(source ? ["", `<i>${escapeHtml(source)}</i>`] : []),
  ].join("\n");

  try {
    const tg = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      // Don't let a slow Telegram hold the function open until Vercel's own timeout.
      signal: AbortSignal.timeout(8000),
    });

    if (!tg.ok) {
      // Logged server-side only (Vercel → Logs). Never leak Telegram's reply to the browser.
      console.error("Telegram error:", tg.status, await tg.text());
      return res
        .status(502)
        .json({ error: "Your message couldn't be delivered. Please try again shortly." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Telegram request failed:", err);
    return res
      .status(502)
      .json({ error: "Your message couldn't be delivered. Please try again shortly." });
  }
}