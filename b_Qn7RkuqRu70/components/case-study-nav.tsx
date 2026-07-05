"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export interface NavSection {
  id: string
  label: string
}

interface CaseStudyNavProps {
  sections: NavSection[]
}

export function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "")
  const placeholderRef = useRef<HTMLDivElement>(null)
  const [navLeft, setNavLeft] = useState<number | null>(null)
  const [navTop, setNavTop] = useState(80)

  // Compute left offset from the placeholder and top from the sticky header
  useEffect(() => {
    const update = () => {
      if (!placeholderRef.current) return
      const rect = placeholderRef.current.getBoundingClientRect()
      // Use the viewport-left of the placeholder, which is stable
      // rect.left is a viewport coordinate — correct for position:fixed
      setNavLeft(rect.left)

      // Measure the actual sticky header height
      const header = document.querySelector("header")
      const headerHeight = header ? header.getBoundingClientRect().height : 64
      // Extra room so the nav clears the "Back to Home" button below the header
      setNavTop(headerHeight + 160)
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // Scroll tracker — mark the last section whose top edge passed the threshold
  useEffect(() => {
    if (sections.length === 0) return
    const OFFSET = 130

    const onScroll = () => {
      let current = sections[0].id
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= OFFSET) current = id
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [sections])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const header = document.querySelector("header")
    const headerHeight = header ? header.getBoundingClientRect().height : 64
    const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 16
    window.scrollTo({ top: y, behavior: "smooth" })
    setActiveId(id)
  }

  if (sections.length === 0) return null

  return (
    <>
      {/* Placeholder keeps the flex space reserved */}
      <div
        ref={placeholderRef}
        className="hidden lg:block w-52 shrink-0"
        aria-hidden="true"
      />

      {/* Fixed nav anchored to the placeholder's left edge */}
      {navLeft !== null && (
        <nav
          aria-label="On this page"
          className="hidden lg:flex flex-col fixed z-40"
          style={{ left: navLeft, top: navTop, width: 208 }}
        >
          <p className="mb-3 px-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
            On this page
          </p>
          <ul
            className="flex flex-col overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 10rem)" }}
          >
            {sections.map(({ id, label }) => {
              const isActive = activeId === id
              return (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={cn(
                      "group relative flex w-full items-center py-1.5 pr-2 text-left text-[13px] transition-colors duration-150",
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {/* Active indicator bar */}
                    <span
                      className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-full transition-all duration-200",
                        isActive
                          ? "h-full bg-primary opacity-100"
                          : "h-0 bg-primary opacity-0 group-hover:h-3 group-hover:bg-muted-foreground/40 group-hover:opacity-100"
                      )}
                    />
                    <span className="pl-4 leading-snug">{label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </>
  )
}
