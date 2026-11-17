import vscodeLogo from "../assets/vscode.svg"
import { toolkitCategories } from "../data/toolkit"
import Reveal from "./Reveal"
import SectionLabel from "./SectionLabel"

function markColor(hex) {
  const value = Number.parseInt(hex, 16)
  const red = (value >> 16) & 255
  const green = (value >> 8) & 255
  const blue = value & 255
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255
  return luminance < 0.18 ? "#F4F4F5" : `#${hex}`
}

function TechMark({ item }) {
  if (item.asset === "vscode") {
    return <img src={vscodeLogo} alt="" width="28" height="28" className="size-7" />
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7" fill={markColor(item.hex)}>
      <path d={item.path} />
    </svg>
  )
}

export default function Toolkit() {
  return (
    <section id="toolkit" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 size-[460px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <Reveal>
          <SectionLabel>06 / How the work gets built</SectionLabel>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            My Developer Toolkit
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">
            The technologies, tools and platforms I use to design, develop and bring digital
            experiences to life.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {toolkitCategories.map((category) => (
            <div key={category.id}>
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                {category.title}
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {category.items.map((item) => (
                  <li key={item.name} className="min-w-0">
                    <div className="group flex h-full min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-[#100f18] px-3.5 py-3 transition duration-300 hover:border-brand/55 hover:shadow-[0_0_24px_rgba(120,46,255,0.16)] motion-safe:hover:-translate-y-0.5">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/[0.04] transition duration-300 motion-safe:group-hover:scale-110">
                        <TechMark item={item} />
                      </span>
                      <span className="min-w-0 text-sm font-medium text-white">{item.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
