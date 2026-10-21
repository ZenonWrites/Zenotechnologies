// LOCAL DEVELOPMENT ONLY — Vercel doesn't use this file.
// It mounts the exact same handler that Vercel runs in production,
// so what you test locally is what gets deployed.
//
// Run:   node server/dev.js        (needs: npm i -D express dotenv)
// Reads: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID from your local .env

import "dotenv/config";
import express from "express";
import handler from "../api/contact.js";

const PORT = process.env.PORT ?? 3001;

const app = express();
app.set("trust proxy", 1);
app.use(express.json({ limit: "10kb" }));
app.all("/api/contact", handler);

app.listen(PORT, () =>
  console.log(`Local contact API on http://localhost:${PORT}/api/contact`)
);