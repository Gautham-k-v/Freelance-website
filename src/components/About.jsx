import { ArrowUpRight, CornerDownRight } from "lucide-react"
import { linkedInUrl } from "../data/site"
import Reveal from "./Reveal"
import SectionLabel from "./SectionLabel"

const lines = [
  { n: "01", html: '<span class="text-lilac">const</span> developer = {' },
  { n: "02", html: '  name: <span class="text-[#ddd6fe]">"Gautham Krishna V"</span>,' },
  { n: "03", html: '  location: <span class="text-[#ddd6fe]">"Kerala, India"</span>,' },
  { n: "04", html: '  focus: <span class="text-[#ddd6fe]">"Web development"</span>,' },
  { n: "05", html: '  mindset: <span class="text-[#ddd6fe]">"Always learning"</span>,' },
  { n: "06", html: '  mission: <span class="text-[#ddd6fe]">"Build with purpose"</span>' },
  { n: "07", html: "};" },
  { n: "08", html: "" },
  {
    n: "09",
    html: '<span class="text-lilac">ideas</span>.map(buildSomethingGreat);',
  },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Reveal>
          <SectionLabel>05 / The person behind the pixels</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Behind NexLance</h2>
        </Reveal>

        <div className="mt-12 grid min-w-0 items-start gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal className="min-w-0">
            <div className="min-w-0 overflow-hidden rounded-[28px] border border-white/10 bg-[#100f18] p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-2 text-[11px] text-white/40">
                <span className="size-2 rounded-full bg-[#3a3348]" />
                <span className="size-2 rounded-full bg-[#3a3348]" />
                <span className="size-2 rounded-full bg-[#3a3348]" />
                <span className="pl-2">nexlance / developer.js</span>
              </div>
              <pre className="min-w-0 overflow-x-auto font-mono text-[10.5px] leading-6 text-white/80 min-[360px]:text-[13px] min-[360px]:leading-7">
                {lines.map((line) => (
                  <div key={line.n} className="flex gap-2.5 min-[360px]:gap-4">
                    <span className="w-6 shrink-0 text-white/25">{line.n}</span>
                    <code dangerouslySetInnerHTML={{ __html: line.html || " " }} />
                  </div>
                ))}
              </pre>
              <div className="mt-8 border-t border-white/5 pt-5">
                <p className="text-sm font-medium tracking-[0.14em]">GAUTHAM KRISHNA V</p>
                <p className="mt-1 text-sm text-mute">Founder & Developer, NexLance</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/75">
                  <CornerDownRight className="size-4 text-lilac" aria-hidden="true" />
                  Turning curiosity into digital experiences.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5 text-[15px] leading-relaxed text-white/80 sm:text-base">
              <p>Hey, I&apos;m Gautham Krishna, a freelance web developer from Kerala, India.</p>
              <p>
                I enjoy building modern websites and digital solutions that solve real-world business
                problems.
              </p>
              <p>
                I&apos;m continuously exploring new technologies, improving my development skills and
                experimenting with AI-powered development tools to create better digital experiences.
              </p>
              <p>
                NexLance is my initiative to help businesses and individuals establish a strong digital
                presence.
              </p>
            </div>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-white transition hover:text-lilac"
            >
              Connect on LinkedIn
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
