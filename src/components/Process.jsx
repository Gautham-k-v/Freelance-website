import { steps } from "../data/site"
import Reveal from "./Reveal"
import SectionLabel from "./SectionLabel"

export default function Process() {
  return (
    <section className="bg-panel/40 py-24 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Reveal>
          <SectionLabel>04 / A simple, collaborative process</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            From Idea To Launch
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="pointer-events-none absolute bottom-6 left-[21px] top-5 w-px bg-white/10 sm:hidden"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-px bg-gradient-to-r from-brand/80 via-white/15 to-white/10 lg:block"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06} className="contents">
              <li className="relative flex gap-4 lg:block">
                <span
                  className={`relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                    index === 0
                      ? "bg-brand text-white shadow-glow"
                      : "border border-brand/50 bg-ink text-lilac"
                  }`}
                >
                  {step.number}
                </span>
                <div className="lg:mt-6">
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-mute">{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
