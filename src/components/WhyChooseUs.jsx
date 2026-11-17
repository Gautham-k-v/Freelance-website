import { MessageCircle, Smartphone, Sparkles, Zap } from "lucide-react"
import { reasons } from "../data/site"
import Reveal from "./Reveal"
import SectionLabel from "./SectionLabel"

const icons = {
  spark: Sparkles,
  phone: Smartphone,
  zap: Zap,
  message: MessageCircle,
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Reveal>
          <SectionLabel>03 / The NexLance difference</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Why Work With NexLance?
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = icons[reason.icon]
            return (
              <Reveal key={reason.title} delay={index * 0.05}>
                <article className="h-full rounded-3xl border border-white/10 bg-[#100f18] p-6 transition hover:border-brand/50">
                  <Icon className="size-5 text-lilac" aria-hidden="true" />
                  <h3 className="mt-8 text-lg font-medium">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{reason.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
