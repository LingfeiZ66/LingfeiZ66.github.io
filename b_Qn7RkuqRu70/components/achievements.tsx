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
    <section id="achievements" aria-labelledby="achievements-heading" className="section">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader number="04" id="achievements-heading" title="Achievements" />

          <ul className="border-t border-border">
            {ACHIEVEMENTS.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-2 border-b border-border py-6 md:flex-row md:items-baseline md:gap-10 md:py-7"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-primary md:w-32 md:shrink-0">
                  {item.category}
                </span>
                <p className="flex-1 text-pretty text-xl font-medium leading-snug text-foreground md:text-2xl">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground md:text-right">{item.source}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
