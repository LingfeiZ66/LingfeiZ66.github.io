"use client"

import { useEffect, useState } from "react"
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

  useEffect(() => {
    if (sections.length === 0) return

    const OFFSET = 120 // px from top of viewport to consider a section "active"

    const handleScroll = () => {
      // Find the last section whose top edge is above the offset threshold
      let currentId = sections[0].id
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= OFFSET) {
          currentId = id
        }
      }
      setActiveId(currentId)
    }

    // Set initial state
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const HEADER_HEIGHT = 80
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT
    window.scrollTo({ top, behavior: "smooth" })
    setActiveId(id)
  }

  if (sections.length === 0) return null

  return (
    <aside className="hidden lg:block w-52 shrink-0">
      <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70 px-1">
          On this page
        </p>
        <ul className="flex flex-col">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={cn(
                    "group relative flex w-full items-center gap-3 py-1.5 pr-3 text-left text-sm transition-all duration-200",
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {/* Left indicator line */}
                  <span
                    className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-full transition-all duration-200",
                      isActive
                        ? "h-5 bg-primary"
                        : "h-3 bg-transparent group-hover:bg-muted-foreground/30"
                    )}
                  />
                  <span className="pl-4 leading-snug">{label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
