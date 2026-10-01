"use client"

import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

export function EasterEgg() {
  const { toast } = useToast()

  useEffect(() => {
    let progress = 0

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.closest("input, textarea, [contenteditable='true']")) return

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
      progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0

      if (progress === KONAMI.length) {
        progress = 0
        toast({
          title: "Achievement unlocked: Secret level",
          description: "You found the hidden code. Detail-oriented. Noted.",
        })
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [toast])

  return null
}
