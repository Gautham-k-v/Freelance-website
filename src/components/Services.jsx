import { motion } from "framer-motion"
import {
  AppWindow,
  ArrowUpRight,
  Briefcase,
  LayoutGrid,
  MousePointer2,
  RefreshCw,
  ShoppingCart,
} from "lucide-react"
import { services } from "../data/site"
import { useEnquiry } from "../context/EnquiryContext"
import Reveal from "./Reveal"
import SectionLabel from "./SectionLabel"

const icons = {
  window: AppWindow,
  pointer: MousePointer2,
  cart: ShoppingCart,
  briefcase: Briefcase,
  grid: LayoutGrid,
  refresh: RefreshCw,
}

export default function Services() {
  const { chooseService } = useEnquiry()

  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionLabel>01 / What I do</SectionLabel>
            <h2 className="mt-4 max-w-md text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              What I Can Build
              <br />
              For You
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-md text-sm leading-relaxed text-mute lg:ml-auto lg:text-right">
              From a simple business website to a complete digital platform, I help turn ideas into
              functional digital experiences.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon]
            return (
              <Reveal key={service.id} delay={index * 0.04}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-[#100f18] p-6 transition hover:border-brand/70 hover:bg-[#151226] hover:shadow-[0_0_40px_rgba(120,46,255,0.14)]"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="size-5 text-white/80" aria-hidden="true" />
                    <span className="text-xs text-white/30">{service.number}</span>
                  </div>
                  <h3 className="mt-10 text-xl font-medium">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{service.description}</p>
                  <button
                    type="button"
                    onClick={() => chooseService(service.title)}
                    aria-label={`Explore ${service.title}`}
                    className="mt-8 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-lilac transition group-hover:text-white"
                  >
                    Explore the possibilities
                    <ArrowUpRight className="size-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
