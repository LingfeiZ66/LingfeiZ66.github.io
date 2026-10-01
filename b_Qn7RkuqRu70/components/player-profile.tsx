import { SectionHeader } from "@/components/section-header"

type Loadout = {
  slot: string
  name: string
  items: string[]
}

const LOADOUT: Loadout[] = [
  {
    slot: "A",
    name: "Design",
    items: [
      "Product Design",
      "Interaction Design",
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Responsive Design",
      "Design Systems",
      "Accessibility",
    ],
  },
  {
    slot: "B",
    name: "Research",
    items: [
      "User Interviews",
      "Moderated Usability Testing",
      "Heuristic Evaluation",
      "Competitive Analysis",
      "Survey Design",
      "Research Synthesis",
    ],
  },
  {
    slot: "C",
    name: "Build / Tools",
    items: ["Figma", "Figma Make", "Cursor", "HTML/CSS", "JavaScript", "React", "Git/GitHub", "Adobe Creative Suite"],
  },
]

const PROFILE_META = [
  { label: "Class", value: "Product Designer" },
  { label: "Base", value: "San Diego, CA" },
  { label: "Training", value: "University of Michigan" },
]

export function PlayerProfile() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader number="02" id="about-heading" title="About" />

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-8 lg:col-span-5">
              <p className="text-pretty text-lg leading-relaxed text-foreground/90">
                {"I'm a product designer drawn to complex technology — AI tools, hardware, and systems most people never see. My work is about making them understandable, usable, and human: clarifying what's happening, reducing friction, and earning trust through research and careful interaction design."}
              </p>

              <dl className="flex flex-col divide-y divide-border border-y border-border">
                {PROFILE_META.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="eyebrow">{row.label}</dt>
                    <dd className="text-right text-sm text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <dl className="flex flex-col divide-y divide-border border-y border-border lg:col-span-7">
              {LOADOUT.map((group) => (
                <div key={group.slot} className="grid gap-2 py-5 sm:grid-cols-4 sm:gap-6">
                  <dt className="text-sm font-medium text-foreground">{group.name}</dt>
                  <dd className="text-pretty text-sm leading-relaxed text-muted-foreground sm:col-span-3">
                    {group.items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
