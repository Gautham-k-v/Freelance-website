import { useMemo, useRef, useState } from "react"
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react"
import { budgetOptions, emailAddress, services, whatsappNumber, whatsappUrl } from "../data/site"
import { useEnquiry } from "../context/EnquiryContext"
import { buildMailto, sendEnquiry } from "../lib/sendEnquiry"
import { WhatsAppIcon } from "./WhatsAppIcon"
import Reveal from "./Reveal"
import SectionLabel from "./SectionLabel"

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  description: "",
}

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = "Enter your full name."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address."
  }
  const digits = values.phone.replace(/\D/g, "")
  if (digits.length < 10 || digits.length > 15) errors.phone = "Enter a valid phone number."
  if (!values.company.trim()) errors.company = "Enter your business or company name."
  if (!values.service) errors.service = "Select a service."
  if (values.description.trim().length < 20) {
    errors.description = "Share a little more about the project (at least 20 characters)."
  }
  return errors
}

const fieldClass = (invalid) =>
  `w-full rounded-xl border bg-[#0c0b13] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#8d8d98] ${
    invalid
      ? "border-red-400/80 focus:border-red-300"
      : "border-white/10 focus:border-brand"
  }`

export default function Contact() {
  const { service, setService } = useEnquiry()
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")
  const [notice, setNotice] = useState("")
  const [honey, setHoney] = useState("")
  const sendingRef = useRef(false)
  const businessDeliveredRef = useRef(false)
  const selectedService = service || values.service

  const mailto = useMemo(
    () => buildMailto({ ...values, service: selectedService }),
    [values, selectedService],
  )

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (name === "service") setService(value)
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    if (sendingRef.current) return
    const nextErrors = validate({ ...values, service: selectedService })
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus("invalid")
      return
    }
    if (honey) return

    sendingRef.current = true
    setNotice("")
    setStatus("sending")
    try {
      await sendEnquiry(
        { ...values, service: selectedService },
        { acknowledgementOnly: businessDeliveredRef.current },
      )
      businessDeliveredRef.current = false
      setStatus("success")
    } catch (error) {
      console.error(
        "[EmailJS] Form submission failed.",
        {
          stage: error?.stage || (error?.businessDelivered ? "Customer auto-reply" : "Admin enquiry"),
          status: error?.status ?? null,
          text: error?.text || error?.message || String(error),
        },
        error,
      )
      if (error?.businessDelivered) businessDeliveredRef.current = true
      setNotice(
        error?.businessDelivered
          ? "Your enquiry reached me, but the confirmation email could not be sent. Try Again resends only that confirmation."
          : "",
      )
      setStatus("error")
    } finally {
      sendingRef.current = false
    }
  }

  function reset() {
    setValues(emptyForm)
    setErrors({})
    setStatus("idle")
    setNotice("")
    setService("")
    businessDeliveredRef.current = false
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-panel/40 py-24 sm:py-28">
      <div className="mx-auto grid max-w-site items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionLabel>07 / Let&apos;s make it happen</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Have a Project
            <br />
            in Mind?
          </h2>
          <p className="mt-5 max-w-sm text-mute">
            Let&apos;s discuss your idea and build something great together.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-mute">
            <span className="size-2 rounded-full bg-emerald-400" />
            Available for Freelance Projects
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full max-w-sm items-center justify-between rounded-2xl border border-white/10 bg-[#17151f] px-4 py-3.5 text-sm text-white transition hover:border-white/20"
          >
            <span className="inline-flex items-center gap-2">
              <WhatsAppIcon className="size-4 text-emerald-400" />
              Chat on WhatsApp
            </span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${emailAddress}`}
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-white"
          >
            {emailAddress}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <p className="mt-3 text-sm text-mute">WhatsApp: {whatsappNumber}</p>
          <p className="text-sm text-mute">Kerala, India</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[28px] border border-white/10 bg-[#100f18] p-5 sm:p-7">
            {status === "success" ? (
              <SuccessState onReset={reset} />
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3 className="text-xl font-medium">Tell me about your project</h3>
                <p className="mt-1 text-xs text-mute">* Required fields · Project budget is optional</p>

                <div aria-live="polite">
                  {status === "invalid" && (
                    <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                      Please check your details. Review the highlighted fields and try again.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                      {notice ||
                        "Your enquiry couldn't be sent. Your details are saved here. Please try again or email me directly."}
                    </p>
                  )}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" name="name" error={errors.name} required>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={values.name}
                      onChange={update}
                      className={fieldClass(errors.name)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                  </Field>
                  <Field label="Email Address" name="email" error={errors.email} required>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={values.email}
                      onChange={update}
                      className={fieldClass(errors.email)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                  </Field>
                  <Field label="Phone Number" name="phone" error={errors.phone} required>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 00000 00000"
                      value={values.phone}
                      onChange={update}
                      className={fieldClass(errors.phone)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                  </Field>
                  <Field label="Business / Company Name" name="company" error={errors.company} required>
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Your business or company"
                      value={values.company}
                      onChange={update}
                      className={fieldClass(errors.company)}
                      aria-invalid={Boolean(errors.company)}
                      aria-describedby={errors.company ? "company-error" : undefined}
                    />
                  </Field>
                  <Field label="Service Interested In" name="service" error={errors.service} required>
                    <select
                      id="service"
                      name="service"
                      value={selectedService}
                      onChange={update}
                      className={fieldClass(errors.service)}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? "service-error" : undefined}
                    >
                      <option value="">Select a service</option>
                      {services.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Project Budget (Optional)" name="budget">
                    <select
                      id="budget"
                      name="budget"
                      value={values.budget}
                      onChange={update}
                      className={fieldClass(false)}
                    >
                      <option value="">Select your budget</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Project Description" name="description" error={errors.description} required>
                    <textarea
                      id="description"
                      name="description"
                      rows="5"
                      placeholder="Tell me about your idea, goals and the features you have in mind..."
                      value={values.description}
                      onChange={update}
                      className={`${fieldClass(errors.description)} resize-y`}
                      aria-invalid={Boolean(errors.description)}
                      aria-describedby={errors.description ? "description-error" : undefined}
                    />
                  </Field>
                </div>

                <div className="absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true">
                  <label>
                    Company website
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      value={honey}
                      onChange={(event) => setHoney(event.target.value)}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-5 inline-flex w-full items-center justify-between rounded-xl bg-brand px-5 py-3.5 text-sm font-medium text-white shadow-glow transition hover:bg-[#8a45ff] disabled:cursor-wait disabled:opacity-80"
                >
                  {status === "sending"
                    ? "Sending enquiry..."
                    : status === "error"
                      ? "Try Again"
                      : "Send Project Enquiry"}
                  {status === "sending" ? (
                    <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  )}
                </button>

                {status === "error" && (
                  <a href={mailto} className="mt-3 inline-flex text-sm text-lilac hover:text-white">
                    Email me directly
                  </a>
                )}

                <p className="mt-3 text-xs text-mute">Your details are used only to respond to your enquiry.</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, error, required, children }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-white/90">
        {label}
        {required && <span className="text-lilac"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}

function SuccessState({ onReset }) {
  return (
    <div className="py-8 text-center sm:py-12" role="status">
      <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
        <Check className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-2xl font-medium">Your enquiry has been sent.</h3>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-mute">
        Thank you for reaching out. I&apos;ll be in touch at this email address to discuss your project.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-medium text-white"
      >
        Send another enquiry
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </button>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-1.5 text-sm text-lilac hover:text-white"
      >
        Continue on WhatsApp
        <ArrowUpRight className="size-3.5" aria-hidden="true" />
      </a>
    </div>
  )
}
