import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { marqueeItems } from "../data/site"
import { WhatsAppIcon } from "./WhatsAppIcon"
import { whatsappUrl } from "../data/site"
import Logo from "./Logo"

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-brand/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 size-[420px] rounded-full bg-[#4c1d95]/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-site items-center gap-14 px-5 pb-8 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-6 lg:pt-20">
        <div>
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-mute"
            custom={0}
            variants={fade}
            initial={reduce ? false : "hidden"}
            animate="show"
          >
            <Sparkles className="size-3.5 text-lilac" aria-hidden="true" />
            Freelance Web Developer | Kerala, India
          </motion.p>

          <motion.h1
            className="mt-6 max-w-xl text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.35rem]"
            custom={0.08}
            variants={fade}
            initial={reduce ? false : "hidden"}
            animate="show"
          >
            <span className="block">Your Business</span>
            <span className="block">Deserves</span>
            <span className="gradient-text block">More Than Just</span>
            <span className="gradient-text block">a Website.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-mute sm:text-[17px]"
            custom={0.16}
            variants={fade}
            initial={reduce ? false : "hidden"}
            animate="show"
          >
            I design and develop modern, responsive websites that help businesses build their
            online presence, connect with customers and grow digitally.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            custom={0.24}
            variants={fade}
            initial={reduce ? false : "hidden"}
            animate="show"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-between gap-3 rounded-xl bg-brand px-5 py-3.5 text-sm font-medium text-white shadow-glow transition hover:bg-[#8a45ff] sm:justify-center"
            >
              Start Your Project
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.06] sm:justify-center"
            >
              Explore My Work
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3"
            custom={0.32}
            variants={fade}
            initial={reduce ? false : "hidden"}
            animate="show"
          >
            <p className="inline-flex items-center gap-2 text-sm text-mute">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:hidden" />
                <span className="relative size-2 rounded-full bg-emerald-400" />
              </span>
              Available for Freelance Projects
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <WhatsAppIcon className="size-4 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[560px]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlowRing />
          <div className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0c16] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3 text-[11px] text-white/40">
              <span className="size-2 rounded-full bg-[#3a3348]" />
              <span className="size-2 rounded-full bg-[#3a3348]" />
              <span className="size-2 rounded-full bg-[#3a3348]" />
              <span className="pl-2">nexlance.dev / your next digital experience</span>
            </div>
            <div className="relative flex min-h-[280px] items-center justify-center bg-[radial-gradient(circle_at_50%_45%,rgba(120,46,255,0.28),transparent_62%)] px-6 py-12 sm:min-h-[340px]">
              <Logo className="h-auto w-[min(100%,280px)]" />
            </div>
          </div>

          <motion.div
            className="absolute -left-2 top-16 z-20 hidden max-w-[190px] rounded-2xl border border-white/10 bg-[#14131c]/80 p-3 text-xs leading-relaxed text-white/85 shadow-xl backdrop-blur-xl sm:block"
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="inline-flex items-center gap-1.5 text-white">
              <Sparkles className="size-3.5 text-lilac" aria-hidden="true" />
              Thoughtfully designed.
            </p>
            <p className="mt-1 text-mute">Built for your business.</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-3 right-4 z-20 hidden rounded-2xl border border-white/10 bg-[#14131c]/85 px-4 py-3 font-mono text-[11px] shadow-xl backdrop-blur-xl sm:block"
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[10px] tracking-[0.16em] text-lilac">&lt;/&gt; BUILT WITH PURPOSE</p>
            <p className="mt-1 text-white/90">
              <span className="text-lilac">const</span> idea = await launch();
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mt-10 border-y border-white/5 py-4">
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-10 pr-10">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <p
                key={`${item}-${index}`}
                className="flex items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-white/45"
              >
                <span className={index % marqueeItems.length === 0 ? "text-white/70" : ""}>
                  {index % marqueeItems.length === 0 ? "Good design. Great development." : item}
                </span>
                <Sparkles className="size-3 text-lilac/80" aria-hidden="true" />
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GlowRing() {
  return (
    <svg
      viewBox="0 0 420 280"
      className="pointer-events-none absolute -right-4 -top-20 z-0 w-[280px] sm:-right-8 sm:-top-24 sm:w-[360px]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="torus" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5f3ff" />
          <stop offset="28%" stopColor="#c4b5fd" />
          <stop offset="62%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
      </defs>
      <ellipse cx="230" cy="118" rx="128" ry="78" fill="none" stroke="url(#torus)" strokeWidth="36" />
      <ellipse cx="214" cy="104" rx="112" ry="64" fill="none" stroke="#ffffff" strokeWidth="7" opacity="0.35" />
    </svg>
  )
}
