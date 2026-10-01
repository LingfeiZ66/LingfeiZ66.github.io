"use client"

import { ArrowUp, ArrowUpRight, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatusIndicator } from "@/components/status-indicator"
import { RESUME_URL } from "@/components/site-header"
import { EMAIL, LINKEDIN_URL } from "@/components/hero"

function replay() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
}

export function FinalCta() {
  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-4xl flex-col gap-10 border-t border-border pt-16 md:pt-20">
          <div className="flex flex-col gap-6">
            <p className="eyebrow flex items-center gap-3">
              <span className="text-foreground">Ch. 05</span>
              <span aria-hidden="true" className="h-px w-8 bg-border" />
              <span>Final level</span>
            </p>
            <h2 className="text-balance text-4xl uppercase md:text-7xl">{"What's our next mission?"}</h2>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {"I'm currently exploring Product Design and UX Design opportunities."}
            </p>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="group flex w-fit items-center gap-3 text-2xl font-medium text-foreground md:text-4xl"
          >
            <span className="link-underline">{EMAIL}</span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-6 w-6 text-muted-foreground transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground md:h-8 md:w-8"
            />
          </a>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${EMAIL}`}>
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={RESUME_URL} download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <StatusIndicator>Available for new missions</StatusIndicator>
            <button
              type="button"
              onClick={replay}
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors duration-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Replay
              <ArrowUp
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-fast group-hover:-translate-y-0.5"
              />
              <span className="sr-only">(back to top)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
