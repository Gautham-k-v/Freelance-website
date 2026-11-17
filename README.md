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

### EmailJS (recommended once you want your own template)

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Connect the Gmail account that should receive enquiries.
3. Create an email template that includes these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company}}`
   - `{{service}}`
   - `{{budget}}`
   - `{{message}}`
   - `{{to_email}}`
4. Set the template recipient to `codextech2025@gmail.com` and Reply-To to `{{from_email}}`.
5. Copy `.env.example` to `.env` and fill in the service ID, template ID and **public** key.
6. Restart the dev server.

Do not put the EmailJS private key in `.env` or anywhere in this frontend. The public key is safe to ship. `.env` is gitignored.

### Before EmailJS is configured

If the three `VITE_EMAILJS_*` values are empty, the form sends through [FormSubmit](https://formsubmit.co) to the same Gmail address. The first submission sends a confirmation email from FormSubmit. Open that email and activate the form once. The site tells you when that step is still waiting. After activation, enquiries arrive in the inbox.

If delivery fails, the form keeps what was typed and offers **Email me directly**, which opens a prefilled email to `codextech2025@gmail.com`.

## Project links

Live project URLs and preview images live in `src/data/site.js`. Each card opens its deployed site in a new tab. SAAJ Finance is a frontend prototype only.

## WhatsApp

The floating button, the hero link, the contact section and the final call to action all open WhatsApp at +91 8590909416 with a prefilled message.
