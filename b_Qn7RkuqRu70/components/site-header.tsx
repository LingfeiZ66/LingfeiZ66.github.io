"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export const RESUME_URL =
  "https://blobs.vusercontent.net/blob/Resume-Lingfei%20Zhan%202026-9BaMPLPsS9bbnLNbdIZ7o7ovpj9oGY.pdf"

const NAV_ITEMS = [
  { id: "home", index: "00", label: "Home" },
  { id: "work", index: "01", label: "Projects" },
  { id: "about", index: "02", label: "About" },
  { id: "beyond", index: "03", label: "Creative" },
  { id: "experience", index: "04", label: "Experience" },
  { id: "contact", index: "05", label: "Contact" },
] as const

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string>("home")

  useEffect(() => {
    if (!enabled) return
    const elements = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: "-30% 0px -60% 0px" },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [enabled])

  return enabled ? active : null
}

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const active = useActiveSection(isHome)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  const hrefFor = (id: string) => (id === "home" ? "/" : `/#${id}`)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="Lingfei Zhan, home">
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-md border border-border font-mono text-[11px] font-semibold transition-transform duration-base ease-spring group-hover:-translate-y-0.5 group-hover:-rotate-6"
          >
            LZ
          </span>
          <span className="text-sm font-semibold tracking-tight">Lingfei Zhan</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <Link
                key={item.id}
                href={hrefFor(item.id)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "group flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors duration-fast",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px] transition-colors duration-fast",
                    isActive ? "text-primary" : "text-muted-foreground/60 group-hover:text-primary",
                  )}
                >
                  {item.index}
                </span>
                <span className="link-underline">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm">
            <a href={RESUME_URL} download>
              <Download aria-hidden="true" />
              Resume
            </a>
          </Button>
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        </Button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="absolute inset-x-0 top-full flex flex-col border-b border-border bg-background px-4 pb-6 pt-2 animate-fade-up md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={hrefFor(item.id)}
              onClick={() => setMenuOpen(false)}
              aria-current={active === item.id ? "location" : undefined}
              className="flex items-baseline gap-3 border-b border-border py-4 text-lg font-medium"
            >
              <span className="font-mono text-xs text-primary">{item.index}</span>
              {item.label}
            </Link>
          ))}
          <div className="flex items-center justify-between gap-4 pt-6">
            <Button asChild className="flex-1">
              <a href={RESUME_URL} download>
                <Download aria-hidden="true" />
                Resume
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </nav>
      )}

      <span aria-hidden="true" className="scroll-progress" />
    </header>
  )
}
