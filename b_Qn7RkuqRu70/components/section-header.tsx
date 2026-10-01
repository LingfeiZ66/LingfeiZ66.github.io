import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  chapter: string
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ chapter, label, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 flex max-w-2xl flex-col gap-4 md:mb-16", className)}>
      <p className="eyebrow flex items-center gap-3">
        <span className="text-foreground">Ch. {chapter}</span>
        <span aria-hidden="true" className="h-px w-8 bg-border" />
        <span>{label}</span>
      </p>
      <h2 className="text-3xl md:text-5xl">{title}</h2>
      {description && <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}
