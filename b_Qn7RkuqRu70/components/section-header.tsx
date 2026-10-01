import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  number: string
  title: string
  id?: string
  className?: string
}

export function SectionHeader({ number, title, id, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 flex items-baseline gap-4 md:mb-16", className)}>
      <span aria-hidden="true" className="font-mono text-sm tabular-nums text-primary">
        {number}
      </span>
      <h2 id={id} className="text-balance text-3xl md:text-5xl">
        {title}
      </h2>
    </div>
  )
}
