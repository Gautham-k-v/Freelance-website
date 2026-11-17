import { ArrowUpRight } from "lucide-react"
import { projects } from "../data/site"
import Reveal from "./Reveal"
import SectionLabel from "./SectionLabel"

export default function Portfolio() {
  return (
    <section id="work" className="scroll-mt-24 bg-panel/40 py-24 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Reveal>
          <SectionLabel>02 / Selected work</SectionLabel>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Turning Ideas Into Digital Experiences.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute">
            Live websites, plus a frontend prototype for a lending desk. Each card opens the
            deployed project.
          </p>
        </Reveal>

        <div className="mt-12 grid min-w-0 gap-6 sm:gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <article className="min-w-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live website: ${project.name}`}
                  className="group block overflow-hidden rounded-[22px] border border-white/10 bg-[#0e0d14] shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:border-brand/60 hover:shadow-[0_20px_60px_rgba(120,46,255,0.16)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#100f18]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      width="1440"
                      height="900"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition duration-500 ease-out motion-safe:group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute bottom-4 left-4 inline-flex translate-y-2 items-center gap-1.5 rounded-full border border-white/15 bg-[#080810]/75 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      View Live Website
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-lilac">
                      {project.kicker}
                    </p>
                    <h3 className="mt-2 text-2xl font-medium">{project.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white transition duration-300 group-hover:text-lilac">
                      View Live Website
                      <ArrowUpRight
                        className="size-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
