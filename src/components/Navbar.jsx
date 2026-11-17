import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { navLinks } from "../data/site"
import Logo from "./Logo"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled || open
          ? "border-white/10 bg-ink/80 backdrop-blur-xl"
          : "border-transparent bg-ink/50 backdrop-blur-md"
      }`}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[76px] max-w-site items-center justify-between px-5 sm:px-8">
        <a href="#home" className="shrink-0 rounded-md" onClick={close}>
          <Logo className="h-11 w-auto sm:h-12" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm transition hover:text-white ${
                active === link.id ? "text-white" : "text-mute"
              }`}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-sm font-medium text-white shadow-glow transition hover:bg-[#8a45ff] sm:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-white/10 bg-[#0c0b14] px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-2 py-3 text-lg text-white/90 hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={close}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-medium text-white sm:hidden"
          >
            Let&apos;s Talk
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  )
}
