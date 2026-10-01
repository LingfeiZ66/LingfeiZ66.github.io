import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="flex flex-col gap-4">
            <Button variant="ghost" size="sm" className="w-fit" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">All Projects</h1>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
              A collection of my work across various industries and design challenges.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-12">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/finance-app" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Finance App Redesign"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Finance App Redesign</h3>
                <p className="mt-2 text-muted-foreground">
                  Reimagining a personal finance application with improved usability and visual design.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">UX Research</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">UI Design</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Prototyping</div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/health-tracker" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Health Tracker App"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Health Tracker App</h3>
                <p className="mt-2 text-muted-foreground">
                  A comprehensive health monitoring application designed for accessibility and ease of use.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">User Testing</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Interaction Design</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Visual Design</div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/travel-platform" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Travel Platform"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Travel Platform</h3>
                <p className="mt-2 text-muted-foreground">
                  A travel booking platform with an intuitive booking flow and personalized recommendations.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">UX Strategy</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">
                    Information Architecture
                  </div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">UI Design</div>
                </div>
              </div>
            </div>

            {/* Project 4 - Eisenberg Toolkit */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/e-commerce" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eisenberg%20Toolkit%20cover-uAksGepkChuLYLXPEJGu368UlDNdKa.png"
                  alt="Eisenberg Family Depression Center Toolkit"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Depression Center Toolkit</h3>
                <p className="mt-2 text-muted-foreground">
                  Improved mental health resource access through UX research.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">
                    UX Research
                  </div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Interviews</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Usability Testing</div>
                </div>
              </div>
            </div>

            {/* Project 5 - Michigan Football VIP Experience */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/education-platform" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Michigan%20Football%20cover-MYty0hbsZevkL5Vr10j50bRsv4FZ9U.png"
                  alt="Michigan Football VIP Experience"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Michigan Football VIP App</h3>
                <p className="mt-2 text-muted-foreground">
                  Designed a faster and clearer game-day VIP experience.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Product Design</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">UX Strategy</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">AI-Assisted Design</div>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/social-app" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Social Networking App"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Social Networking App</h3>
                <p className="mt-2 text-muted-foreground">
                  A community-focused social platform that prioritizes meaningful connections and user privacy.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Social UX</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Interaction Design</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Prototyping</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lingfei Zhan. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

