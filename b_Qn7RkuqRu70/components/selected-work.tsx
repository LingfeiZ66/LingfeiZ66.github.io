import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Stat = { value: string; label: string }

type Mission = {
  number: string
  href: string
  client: string
  title: string
  hook: string
  tags: string[]
  image: string
  imageAlt: string
  imageFit?: "cover" | "contain"
  note?: string
  stats?: Stat[]
  evidence?: string[]
}

const leadMission: Mission = {
  number: "01",
  href: "/projects/ra-labs",
  client: "RA Labs",
  title: "Legion AI",
  hook: "Designing an AI-powered data workflow from 0 → 1.",
  tags: ["Product Design", "AI", "B2B SaaS"],
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ra%20Labs%20logo%20design%20with%20robot%20and%20elephant-WIsEjgK16vtg5cMXipCFioJX2MMqDS.png",
  imageAlt: "RA Labs Legion AI data-cleaning platform",
  imageFit: "contain",
  note: "Under NDA",
  stats: [
    { value: "68%", label: "faster task completion" },
    { value: "53s → 17s", label: "average task time" },
    { value: "30+", label: "high-fidelity screens" },
    { value: "24", label: "usability test participants" },
  ],
}

const featuredMissions: Mission[] = [
  {
    number: "02",
    href: "/projects/backyard-brains",
    client: "Backyard Brains",
    title: "Human-Human Interface",
    hook: "What happens when an interface doesn't just control a device — but another person's body?",
    tags: ["Product Design", "Interaction Design", "Hardware", "Trust & Safety"],
    image: "/Backyard Brains cover.png",
    imageAlt: "Backyard Brains Human-Human Interface mobile app",
    evidence: [
      "Six-stage remote interaction experience",
      "2 rounds of usability testing",
      "Designed around consent, safety, and connection status",
    ],
  },
  {
    number: "03",
    href: "/projects/e-commerce",
    client: "Eisenberg Family Depression Center",
    title: "Depression Center Toolkit",
    hook: "Making mental-health resources easier to find, understand, and trust.",
    tags: ["UX Research", "Usability Testing", "Accessibility", "Digital Health"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eisenberg%20Toolkit%20cover-uAksGepkChuLYLXPEJGu368UlDNdKa.png",
    imageAlt: "Eisenberg Family Depression Center Toolkit",
    evidence: [
      "Interviews, comparative and heuristic evaluation, usability testing",
      "Surfaced trust, discoverability, and accessibility gaps",
      "Recommendations informed a later toolkit redesign",
    ],
  },
]

const sideMissions: Mission[] = [
  {
    number: "04",
    href: "/projects/education-platform",
    client: "Michigan Athletics",
    title: "Michigan Football VIP App",
    hook: "Designing a game-day experience that puts essential VIP information in one place.",
    tags: ["Product Design", "Mobile UX", "Information Architecture"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Michigan%20Football%20cover-MYty0hbsZevkL5Vr10j50bRsv4FZ9U.png",
    imageAlt: "Michigan Football VIP game-day app",
    evidence: ["Game-day essentials", "VIP identification", "Parking & benefits", "Personalized info"],
  },
  {
    number: "05",
    href: "/projects/umsi-case-study",
    client: "UMSI Case Study Competition",
    title: "Michigan Entrepreneur Resource App",
    hook: "Helping Michigan entrepreneurs discover the resources, education, funding, and communities available to them.",
    tags: ["Product Strategy", "UX Design", "Information Architecture"],
    image: "/Case Study Competition cover.png",
    imageAlt: "Michigan Entrepreneur Resource App",
    evidence: ["10-day case competition", "6 solution directions evaluated", "Honorable Mention · $500 award"],
  },
]

function MissionNumber({ number, className }: { number: string; className?: string }) {
  return (
    <span
      className={cn(
        "font-mono tabular-nums text-muted-foreground transition-colors duration-300 group-hover:text-primary group-focus-visible:text-primary",
        className,
      )}
    >
      <span className="sr-only">Mission </span>
      {number}
    </span>
  )
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
      {tags.map((tag, i) => (
        <li key={tag} className="flex items-center gap-3">
          {i > 0 && (
            <span aria-hidden="true" className="text-border">
              /
            </span>
          )}
          {tag}
        </li>
      ))}
    </ul>
  )
}

function MissionCta({ label = "View Mission" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
      <span className="link-underline">{label}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5"
      />
    </span>
  )
}

function MissionVisual({
  mission,
  className,
  sizes,
  priority,
}: {
  mission: Mission
  className?: string
  sizes: string
  priority?: boolean
}) {
  const contain = mission.imageFit === "contain"
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md border border-border",
        contain ? "bg-white" : "bg-muted",
        className,
      )}
    >
      <Image
        src={mission.image || "/placeholder.svg"}
        alt={mission.imageAlt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          contain ? "object-contain p-6 md:p-10" : "object-cover",
        )}
      />
    </div>
  )
}

function LeadMission({ mission }: { mission: Mission }) {
  return (
    <Link
      href={mission.href}
      className="group mission-row block border-t border-border py-10 outline-none md:py-14"
      aria-label={`Mission ${mission.number}: ${mission.client} — ${mission.title}. View mission`}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <p className="eyebrow flex items-center gap-3">
            <MissionNumber number={mission.number} className="text-foreground" />
            <span aria-hidden="true" className="h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
            <span>Main mission · Start here</span>
          </p>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-muted-foreground">
              {mission.client}
              {mission.note && <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.12em]">· {mission.note}</span>}
            </p>
            <h3 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">{mission.title}</h3>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">{mission.hook}</p>
          </div>

          <Tags tags={mission.tags} />

          {mission.stats && (
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6">
              {mission.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tabular-nums tracking-tight md:text-3xl">{stat.value}</dd>
                  <dd className="text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          )}

          <MissionCta />
        </div>

        <MissionVisual
          mission={mission}
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[480px]"
        />
      </div>
    </Link>
  )
}

function FeaturedMission({ mission, variant }: { mission: Mission; variant: "wide" | "narrow" }) {
  return (
    <Link
      href={mission.href}
      className={cn(
        "group mission-row flex flex-col gap-6 border-t border-border pt-8 outline-none",
        variant === "wide" ? "lg:col-span-7" : "lg:col-span-5 lg:mt-24",
      )}
      aria-label={`Mission ${mission.number}: ${mission.client} — ${mission.title}. View mission`}
    >
      <p className="eyebrow flex items-center gap-3">
        <MissionNumber number={mission.number} className="text-foreground" />
        <span aria-hidden="true" className="h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
        <span>Main mission</span>
      </p>

      <MissionVisual
        mission={mission}
        sizes="(min-width: 1024px) 40vw, 100vw"
        className={variant === "wide" ? "aspect-[16/10]" : "aspect-[4/3]"}
      />

      <div className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">{mission.client}</p>
        <h3 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">{mission.title}</h3>
        <p className="text-pretty leading-relaxed text-muted-foreground">{mission.hook}</p>
      </div>

      <Tags tags={mission.tags} />

      {mission.evidence && (
        <ul className="flex flex-col gap-2 border-t border-border pt-4 text-sm">
          {mission.evidence.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <MissionCta />
    </Link>
  )
}

function SideMission({ mission }: { mission: Mission }) {
  return (
    <li>
      <Link
        href={mission.href}
        className="group mission-row grid gap-5 border-t border-border py-8 outline-none md:grid-cols-12 md:items-center md:gap-8"
        aria-label={`Mission ${mission.number}: ${mission.title}. View mission`}
      >
        <MissionNumber number={mission.number} className="text-sm md:col-span-1" />

        <MissionVisual
          mission={mission}
          sizes="(min-width: 768px) 25vw, 100vw"
          className="aspect-[16/10] md:col-span-3"
        />

        <div className="flex flex-col gap-3 md:col-span-6">
          <p className="text-sm text-muted-foreground">{mission.client}</p>
          <h3 className="text-balance text-xl font-semibold tracking-tight md:text-2xl">{mission.title}</h3>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">{mission.hook}</p>
          <Tags tags={mission.tags} />
          {mission.evidence && (
            <p className="text-sm text-foreground/90">
              {mission.evidence.join(" · ")}
            </p>
          )}
        </div>

        <div className="md:col-span-2 md:justify-self-end">
          <MissionCta />
        </div>
      </Link>
    </li>
  )
}

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="section">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="eyebrow flex items-center gap-3">
                <span className="text-foreground">Ch. 01</span>
                <span aria-hidden="true" className="h-px w-8 bg-border" />
                <span>Selected Work</span>
              </p>
              <h2 id="work-heading" className="text-4xl md:text-6xl">
                Select your mission
              </h2>
            </div>
            <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Five case studies across AI, hardware, digital health, and mobile. Start with Mission 01.
            </p>
          </div>

          <LeadMission mission={leadMission} />

          <div className="grid gap-12 py-10 md:py-14 lg:grid-cols-12 lg:gap-12">
            <FeaturedMission mission={featuredMissions[0]} variant="wide" />
            <FeaturedMission mission={featuredMissions[1]} variant="narrow" />
          </div>

          <div className="pt-4">
            <p className="eyebrow mb-2">Additional missions</p>
            <ul className="border-b border-border">
              {sideMissions.map((mission) => (
                <SideMission key={mission.number} mission={mission} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
