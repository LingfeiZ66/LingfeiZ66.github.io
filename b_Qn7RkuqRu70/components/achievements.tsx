import { SectionHeader } from "@/components/section-header"

const ACHIEVEMENTS = [
  {
    category: "Education",
    title: "Master of Science in Information — UX",
    source: "University of Michigan",
  },
  {
    category: "Award",
    title: "Honorable Mention + $500 award",
    source: "UMSI Case Study Competition",
  },
  {
    category: "Shipped",
    title: "30+ high-fidelity screens for a 0-to-1 AI product",
    source: "RA Labs",
  },
  {
    category: "Impact",
    title: "Task completion time cut from 53s to 17s",
    source: "RA Labs usability testing",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <SectionHeader chapter="04" label="Progress" title="Achievements Unlocked" />

          <ol className="grid border-t border-border sm:grid-cols-2">
            {ACHIEVEMENTS.map((item, i) => (
              <li
                key={item.title}
                className="flex gap-5 border-b border-border py-6 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
              >
                <span aria-hidden="true" className="pt-1 font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1.5">
                  <p className="eyebrow">{item.category}</p>
                  <p className="text-lg font-medium leading-snug text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.source}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
