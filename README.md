# NexLance

Freelance web development site for NexLance, built with React, Vite and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

The static site is written to `dist/`.

## Contact form

Enquiries are addressed to **codextech2025@gmail.com**.

### EmailJS

The form sends two EmailJS templates:

1. `VITE_EMAILJS_CONTACT_TEMPLATE_ID` notifies `codextech2025@gmail.com`. Set that template’s To email to `codextech2025@gmail.com` and Reply-To to `{{from_email}}`.
2. `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID` acknowledges the customer. Set that template’s To email to `{{email}}`.

Also set `VITE_EMAILJS_SERVICE_ID` and `VITE_EMAILJS_PUBLIC_KEY`. Both templates receive `from_name`, `name`, `from_email`, `email`, `phone`, `company`, `service`, `budget`, `message`, `to_email`, and `reply_to`.

Copy `.env.example` to `.env`, fill in the public values, and restart the dev server. Add the same four variables in Vercel, then redeploy. Vite copies them into the site during the build, so adding them after a deployment does nothing until the next build. Do not put the EmailJS private key in `.env` or in the frontend. `.env` is gitignored.

If sending fails, the form keeps what was typed and offers **Email me directly**, which opens a prefilled email to `codextech2025@gmail.com`. A second click while a request is in progress is ignored. If the business email succeeds and only the acknowledgement fails, Try Again resends the acknowledgement.

## Project links

Live project URLs and preview images live in `src/data/site.js`. Each card opens its deployed site in a new tab. SAAJ Finance is a frontend prototype only.

## WhatsApp

The floating button, the hero link, the contact section and the final call to action all open WhatsApp at +91 8590909416 with a prefilled message.
