"use client"

import type React from "react"
import { useRef } from "react"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatusIndicator } from "@/components/status-indicator"
import { RESUME_URL } from "@/components/site-header"

export const LINKEDIN_URL = "https://www.linkedin.com/in/lingfei-zhan"
export const EMAIL = "lingfeiz66@gmail.com"

const PORTRAIT_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14f59bf9d76da53bf1c7d06a428246d9-cE4prZ7eI4jAH9Al96TFQtIvqUv2qa.png"

function reveal(step: number): React.CSSProperties {
  return { "--reveal-step": step } as React.CSSProperties
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const frameRef = useRef<number | null>(null)

  // Writes pointer position to CSS variables; rAF keeps it to one style write per frame.
  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || frameRef.current !== null) return
    const { clientX, clientY } = event
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      section.style.setProperty("--spot-x", `${clientX - rect.left}px`)
      section.style.setProperty("--spot-y", `${clientY - rect.top}px`)
    })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      aria-labelledby="hero-title"
      className="hero-spotlight relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24"
    >
      <div className="container relative mx-auto flex flex-col gap-10 px-4">
        <div className="hero-reveal flex flex-wrap items-center gap-x-4 gap-y-3" style={reveal(0)}>
          <div className="flex items-center gap-3">
            <span className="relative size-9 overflow-hidden rounded-full border border-border">
              <Image src={PORTRAIT_URL} alt="" fill sizes="36px" className="object-cover" priority />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Player 01</span>
          </div>
          <span aria-hidden="true" className="hero-progress hidden h-px w-16 bg-border sm:block" />
          <StatusIndicator>Currently exploring new opportunities</StatusIndicator>
        </div>

        <div className="flex flex-col gap-6">
          <h1
            id="hero-title"
            className="hero-reveal text-balance font-semibold uppercase leading-[0.88] tracking-[-0.04em] text-[clamp(3.25rem,11vw,8.5rem)]"
            style={reveal(1)}
          >
            Lingfei Zhan
          </h1>
          <p className="hero-reveal eyebrow text-sm" style={reveal(2)}>
            Product Designer
          </p>
        </div>

        <div className="flex max-w-2xl flex-col gap-4">
          <p
            className="hero-reveal text-pretty text-2xl font-medium leading-snug text-foreground md:text-3xl"
            style={reveal(3)}
          >
            I design clear, human experiences for{" "}
            <span className="gradient-text">complex systems.</span>
          </p>
          <p className="hero-reveal text-pretty text-base leading-relaxed text-muted-foreground md:text-lg" style={reveal(4)}>
            My work spans AI products, emerging technology, and human-centered experiences, from early
            research to high-fidelity design.
          </p>
        </div>

        <div className="hero-reveal flex flex-col gap-6 sm:flex-row sm:items-center" style={reveal(5)}>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="group">
              <a href="#work">
                View Work
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform duration-base ease-out group-hover:translate-x-0.5"
                />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={RESUME_URL} download>
                <Download aria-hidden="true" />
                Resume
              </a>
            </Button>
          </div>
          <ul className="flex items-center gap-5 text-sm">
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
              >
                LinkedIn
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="link-underline inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <Mail aria-hidden="true" className="size-3.5" />
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
