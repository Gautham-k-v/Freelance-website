import emailjs from "@emailjs/browser"
import { emailAddress } from "../data/site"

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function emailJsConfigured() {
  return Boolean(serviceId && templateId && publicKey)
}

export async function sendEnquiry(values) {
  const payload = {
    from_name: values.name.trim(),
    from_email: values.email.trim(),
    phone: values.phone.trim(),
    company: values.company.trim(),
    service: values.service,
    budget: values.budget || "Not specified",
    message: values.description.trim(),
    to_email: emailAddress,
  }

  if (emailJsConfigured()) {
    await emailjs.send(serviceId, templateId, payload, { publicKey })
    return
  }

  const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.from_name,
      email: payload.from_email,
      phone: payload.phone,
      company: payload.company,
      service: payload.service,
      budget: payload.budget,
      message: payload.message,
      _subject: `NexLance enquiry from ${payload.from_name}`,
      _template: "table",
      _captcha: "false",
      _replyto: payload.from_email,
    }),
  })

  const data = await response.json().catch(() => ({}))
  const failed = !response.ok || data.success === false || data.success === "false"
  if (failed) {
    const error = new Error(data.message || "The enquiry could not be delivered.")
    error.activation = /activat/i.test(error.message)
    throw error
  }
}

export function buildMailto(values) {
  const subject = `Project enquiry from ${values.name || "NexLance website"}`
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Business: ${values.company}`,
    `Service: ${values.service}`,
    `Budget: ${values.budget || "Not specified"}`,
    "",
    values.description,
  ].join("\n")

  return `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
