import type React from "react"
import { cn } from "@/lib/utils"

export function StatusIndicator({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2.5 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground",
        className,
      )}
    >
      <span aria-hidden="true" className="status-dot" />
      {children}
    </span>
  )
}
