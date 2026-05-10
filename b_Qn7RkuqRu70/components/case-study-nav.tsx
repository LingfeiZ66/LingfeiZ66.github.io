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
  const [activeId, setActiveId] = useState<string>("")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (sections.length === 0) return

    // Track which sections are currently intersecting
    const intersecting = new Map<string, number>()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.set(entry.target.id, entry.intersectionRatio)
          } else {
            intersecting.delete(entry.target.id)
          }
        })

        if (intersecting.size > 0) {
          // Pick the section with the top-most position on screen
          let topMostId = ""
          let topMostY = Infinity
          intersecting.forEach((_, id) => {
            const el = document.getElementById(id)
            if (el) {
              const rect = el.getBoundingClientRect()
              if (rect.top < topMostY) {
                topMostY = rect.top
                topMostId = id
              }
            }
          })
          if (topMostId) setActiveId(topMostId)
        }
      },
      {
        rootMargin: "-10% 0px -60% 0px",
        threshold: [0, 0.1, 0.5, 1],
      }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    // Set initial active section
    if (sections[0]) setActiveId(sections[0].id)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [sections])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80 // account for sticky header
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
      setActiveId(id)
    }
  }

  if (sections.length === 0) return null

  return (
    <aside className="hidden xl:block w-56 shrink-0">
      <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          On this page
        </p>
        <ul className="space-y-1">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={cn(
                    "group flex w-full items-start gap-2.5 rounded-md px-3 py-1.5 text-left text-sm transition-colors duration-150",
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {/* Active indicator bar */}
                  <span
                    className={cn(
                      "mt-1.5 h-3.5 w-0.5 shrink-0 rounded-full transition-all duration-200",
                      isActive
                        ? "bg-primary"
                        : "bg-transparent group-hover:bg-muted-foreground/40"
                    )}
                  />
                  <span className="leading-snug">{label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
