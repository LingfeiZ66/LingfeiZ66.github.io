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
        <SelectedWork />
        <PlayerProfile />
        <BeyondTheScreen />
        <Achievements />
        <FinalCta />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground md:text-left" title="↑ ↑ ↓ ↓ ← → ← → B A">
            © {new Date().getFullYear()} Lingfei Zhan
          </p>
        </div>
      </footer>
    </div>
  )
}
