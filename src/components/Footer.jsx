import { ArrowUpRight } from "lucide-react"
import { emailAddress, footerLinks, linkedInUrl, whatsappNumber, whatsappUrl } from "../data/site"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-site gap-10 md:grid-cols-[1.3fr_0.7fr_0.9fr]">
        <div>
          <Logo className="h-14 w-auto" loading="lazy" />
          <p className="mt-5 max-w-[220px] text-lg font-medium leading-snug">
            Building Digital Experiences That Matter.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-mute">Explore</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/80 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-mute">Let&apos;s connect</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`mailto:${emailAddress}`} className="transition hover:text-white">
                {emailAddress}
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                {whatsappNumber}
              </a>
            </li>
            <li>Kerala, India</li>
            <li>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-lilac transition hover:text-white"
              >
                LinkedIn
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-site flex-col gap-3 border-t border-white/10 pt-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 NexLance. All Rights Reserved.</p>
        <p>Designed & developed by Gautham Krishna V</p>
      </div>
    </footer>
  )
}
