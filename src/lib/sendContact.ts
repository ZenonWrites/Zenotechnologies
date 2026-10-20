export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
  /** Honeypot — real users never see or fill this. */
  botcheck: string;
}

// In dev, Vite proxies /api to the Express server (see vite.config.ts).
// In production, either serve the API on the same origin, or set
// VITE_CONTACT_API_URL=https://api.yourdomain.com/api/contact
const API_URL: string = import.meta.env.VITE_CONTACT_API_URL ?? "/api/contact";

export async function sendContact(payload: ContactPayload): Promise<void> {
  let res: Response;

  try {
    res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, source: window.location.href }),
    });
  } catch {
    throw new Error("Can't reach the server. Check your connection and try again.");
  }

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.error ?? "Your message wasn't sent. Please try again.");
  }
}
