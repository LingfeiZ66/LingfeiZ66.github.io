"use client"

import { ArrowUp, ArrowUpRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RESUME_URL } from "@/components/site-header"
import { EMAIL, LINKEDIN_URL } from "@/components/hero"

function replay() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
}

export function FinalCta() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 border-t border-border pt-16 md:pt-20">
          <h2 id="contact-heading" className="text-balance text-4xl uppercase md:text-7xl">
            {"What's our next mission?"}
          </h2>

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

          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="outline">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={RESUME_URL} download>
                  <Download aria-hidden="true" className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            <button
              type="button"
              onClick={replay}
              className="group inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors duration-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Back to top
              <ArrowUp
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-fast group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
