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
    <section id="about" className="section">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader chapter="02" label="Player profile" title="About" />

          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <article className="surface flex flex-col gap-8 rounded-2xl p-6 md:p-8 lg:col-span-5">
              <div className="flex items-center justify-between">
                <p className="eyebrow">Player Profile</p>
                <p className="eyebrow">ID · LZ-01</p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-4xl md:text-5xl">Lingfei Zhan</h3>
                <p className="font-mono text-sm uppercase tracking-[0.14em] text-primary">Product Designer</p>
              </div>

              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {"I'm a product designer drawn to complex technology — AI tools, hardware, and systems most people never see. My work is about making them understandable, usable, and human: clarifying what's happening, reducing friction, and earning trust through research and careful interaction design."}
              </p>

              <dl className="mt-auto flex flex-col divide-y divide-border border-t border-border">
                {PROFILE_META.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="eyebrow">{row.label}</dt>
                    <dd className="text-right text-sm text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </article>

            <div className="flex flex-col gap-4 lg:col-span-7">
              <p className="eyebrow flex items-center gap-3">
                <span className="text-foreground">Inventory</span>
                <span aria-hidden="true" className="h-px flex-1 bg-border" />
                <span>3 slots</span>
              </p>

              {LOADOUT.map((group) => (
                <section
                  key={group.slot}
                  aria-labelledby={`loadout-${group.slot}`}
                  className="rounded-2xl border border-border p-5 md:p-6"
                >
                  <header className="mb-4 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/40 font-mono text-xs text-primary"
                    >
                      {group.slot}
                    </span>
                    <h3 id={`loadout-${group.slot}`} className="text-base md:text-lg">
                      {group.name}
                    </h3>
                    <span className="eyebrow ml-auto">
                      {group.items.length} items
                    </span>
                  </header>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border bg-accent/40 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
