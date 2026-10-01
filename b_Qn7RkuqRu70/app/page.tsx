"use client"

import { SiteHeader } from "@/components/site-header"
import { PlayerProfile } from "@/components/player-profile"
import { BeyondTheScreen } from "@/components/beyond-the-screen"
import { Hero } from "@/components/hero"
import { SelectedWork } from "@/components/selected-work"
import { Achievements } from "@/components/achievements"
import { FinalCta } from "@/components/final-cta"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        <section aria-label="Skills" className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            {/* Rolling Skills Marquee */}
            <div className="relative mt-20 overflow-hidden border-y border-border py-5">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-marquee">
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="flex gap-4 pr-4">
                    {[
                      "Figma",
                      "User Research",
                      "Usability Testing",
                      "Wireframing",
                      "Prototyping",
                      "Interaction Design",
                      "Information Architecture",
                      "Accessibility",
                      "Heuristic Evaluation",
                      "Survey Design",
                      "Interviewing",
                      "HTML/CSS",
                      "Python",
                      "Visual Design",
                      "Typography",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="whitespace-nowrap rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted-foreground transition-colors duration-fast hover:border-foreground/40 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SelectedWork />

        <PlayerProfile />
        <BeyondTheScreen />

        <Achievements />
        <FinalCta />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lingfei Zhan. All rights reserved.
          </p>
          <p className="eyebrow" title="↑ ↑ ↓ ↓ ← → ← → B A">
            Thanks for playing
          </p>
        </div>
      </footer>
    </div>
  )
}

