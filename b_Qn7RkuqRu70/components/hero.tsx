import type React from "react"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Download } from "lucide-react"
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
  return (
    <section id="home" aria-labelledby="hero-title" className="pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="container mx-auto flex flex-col gap-14 px-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="flex min-w-0 flex-col gap-10">
          <div className="hero-reveal flex items-center gap-4" style={reveal(0)}>
            <span className="relative size-9 shrink-0 overflow-hidden border border-border lg:hidden">
              <Image src={PORTRAIT_URL} alt="" fill sizes="36px" className="object-cover" priority />
            </span>
            <StatusIndicator>Player 01 · Product Designer · Open to roles</StatusIndicator>
          </div>

          <h1
            id="hero-title"
            className="hero-reveal font-semibold uppercase leading-[0.88] tracking-[-0.04em] text-[clamp(3.25rem,10vw,8rem)]"
            style={reveal(1)}
          >
            Lingfei Zhan
          </h1>

          <p
            className="hero-reveal max-w-2xl text-pretty text-2xl font-medium leading-snug text-foreground md:text-3xl"
            style={reveal(2)}
          >
            I design clear, human experiences for{" "}
            <span className="underline decoration-primary decoration-2 underline-offset-[6px]">complex systems</span>{" "}
            — AI products, hardware, and digital health.
          </p>

          <div className="hero-reveal flex flex-col gap-6 sm:flex-row sm:items-center" style={reveal(3)}>
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
            <ul className="flex items-center gap-6 text-sm">
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
                  className="link-underline text-muted-foreground hover:text-foreground"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <figure className="hero-reveal group hidden w-64 shrink-0 lg:block" style={reveal(4)}>
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <Image
              src={PORTRAIT_URL}
              alt="Portrait of Lingfei Zhan"
              fill
              sizes="256px"
              priority
              className="object-cover grayscale transition-[filter] duration-700 ease-out group-hover:grayscale-0"
            />
          </div>
          <figcaption className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span>P1 — Lingfei</span>
            <span>San Diego</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
