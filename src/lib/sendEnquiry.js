import emailjs from "@emailjs/browser"
import { emailAddress } from "../data/site"

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function emailJsConfigured() {
  return Boolean(serviceId && templateId && publicKey)
}

function enquiryParams(values) {
  const name = values.name.trim()
  const fromEmail = values.email.trim()
  return {
    from_name: name,
    name,
    from_email: fromEmail,
    email: fromEmail,
    phone: values.phone.trim(),
    company: values.company.trim(),
    service: values.service,
    budget: values.budget || "Not specified",
    message: values.description.trim(),
  }
}

export async function sendEnquiry(values, { acknowledgementOnly = false } = {}) {
  if (!emailJsConfigured()) {
    throw new Error("Email delivery is not configured.")
  }

  const details = enquiryParams(values)
  const options = { publicKey }

  if (!acknowledgementOnly) {
    await emailjs.send(
      serviceId,
      templateId,
      {
        ...details,
        to_email: emailAddress,
        reply_to: details.from_email,
      },
      options,
    )
  }

  if (autoReplyTemplateId) {
    try {
      await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        {
          ...details,
          to_email: details.from_email,
          email: details.from_email,
          reply_to: emailAddress,
        },
        options,
      )
    } catch (error) {
      error.businessDelivered = true
      throw error
    }
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
