// Run with:  node server/index.js
// Needs:     npm i express cors dotenv      (Node 18+ for built-in fetch)
// Requires "type": "module" in package.json (the Vite template already sets it).

// import "dotenv/config";
import express from "express";
import cors from "cors";



const {
  TELEGRAM_BOT_TOKEN="8688561256:AAGQi01Qk85jv0M9jDJhvaGoQpYafW5v8u8",
  TELEGRAM_CHAT_ID="-5462519978",
  PORT = 3001,
  ALLOWED_ORIGINS = "http://localhost:5173",
} = process.env;

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in .env");
  process.exit(1);
}

const app = express();
app.set("trust proxy", 1); // so req.ip is the real client IP behind a proxy/host
app.use(express.json({ limit: "10kb" }));
app.use(cors({ origin: ALLOWED_ORIGINS.split(",").map((o) => o.trim()) }));

// ——— Tiny in-memory rate limit: 5 submissions per IP per 10 minutes ———
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of hits) {
    const recent = times.filter((t) => now - t < WINDOW_MS);
    if (recent.length) hits.set(ip, recent);
    else hits.delete(ip);
  }
}, WINDOW_MS).unref();

// ——— Helpers ———
const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

// Telegram's HTML parse mode breaks on raw < > &, and user input is untrusted.
const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

app.post("/api/contact", async (req, res) => {
  const body = req.body ?? {};

  // Honeypot: bots fill the hidden field, humans never see it.
  // Pretend success so bots don't learn they were caught.
  if (clean(body.botcheck, 100)) return res.json({ ok: true });

  if (isRateLimited(req.ip)) {
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
    const tg = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }
    );

    if (!tg.ok) {
      // Logged server-side only — never leak Telegram's response to the browser.
      console.error("Telegram error:", tg.status, await tg.text());
      return res.status(502).json({ error: "Your message couldn't be delivered. Please try again shortly." });
    }

    res.json({ ok: true });
  } catch (err) {
    console.error("Telegram request failed:", err);
    res.status(502).json({ error: "Your message couldn't be delivered. Please try again shortly." });
  }
});

app.listen(PORT, () => console.log(`Contact API listening on http://localhost:${PORT}`));
