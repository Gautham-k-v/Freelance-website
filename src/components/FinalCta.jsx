import { ArrowUpRight } from "lucide-react"
import { whatsappUrl } from "../data/site"
import { WhatsAppIcon } from "./WhatsAppIcon"
import Reveal from "./Reveal"

export default function FinalCta() {
  return (
    <section className="px-5 py-8 sm:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-site overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#6d28d9] via-brand to-[#4c1d95] px-6 py-14 text-center shadow-[0_30px_80px_rgba(120,46,255,0.25)] sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
            Your next chapter starts here
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Let&apos;s Build Something That Moves Your Business Forward.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/80 sm:text-base">
            Your next big idea deserves a great digital experience. Let&apos;s make it happen.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-ink sm:w-auto"
            >
              Start a Project
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-ink/80 px-5 py-3 text-sm font-medium text-white sm:w-auto"
            >
              <WhatsAppIcon className="size-4 text-emerald-400" />
              Chat on WhatsApp
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
