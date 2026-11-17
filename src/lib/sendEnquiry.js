import emailjs from "@emailjs/browser"
import { emailAddress } from "../data/site"

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId =
  import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID ||
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const autoReplyTemplateId =
  import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID ||
  import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID
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

function reportFailure(stage, error) {
  const status = error?.status
  const text = error?.text || error?.message || "EmailJS request failed"
  console.error(`[EmailJS] ${stage} failed.`, { status, text })
  const failure = error && typeof error === "object" ? error : new Error(text)
  failure.stage = stage
  failure.status = status
  failure.text = text
  return failure
}

export async function sendEnquiry(values, { acknowledgementOnly = false } = {}) {
  const missing = []
  if (!serviceId) missing.push("VITE_EMAILJS_SERVICE_ID")
  if (!templateId) missing.push("VITE_EMAILJS_CONTACT_TEMPLATE_ID")
  if (!publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY")
  if (missing.length) {
    const error = new Error("Email delivery is not configured.")
    error.stage = "configuration"
    console.error("[EmailJS] Production build is missing environment variables.", { missing })
    throw error
  }

  const details = enquiryParams(values)
  const options = { publicKey }

  if (!acknowledgementOnly) {
    try {
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
    } catch (error) {
      throw reportFailure("Admin enquiry", error)
    }
  }

  if (!autoReplyTemplateId) {
    console.error("[EmailJS] Customer auto-reply was skipped.", {
      missing: "VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID",
    })
    const error = new Error("Customer acknowledgement is not configured.")
    error.stage = "Customer auto-reply"
    error.businessDelivered = true
    throw error
  }

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
    const failure = reportFailure("Customer auto-reply", error)
    failure.businessDelivered = true
    throw failure
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
