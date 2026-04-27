interface ImagePlaceholderProps {
  label: string
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2"
  className?: string
}

export function ImagePlaceholder({ 
  label, 
  aspectRatio = "16/9",
  className = "" 
}: ImagePlaceholderProps) {
  const aspectClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
  }

  return (
    <div 
      className={`w-full ${aspectClasses[aspectRatio]} border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center bg-muted/10 ${className}`}
    >
      <span className="text-muted-foreground font-medium text-sm md:text-base">
        {label}
      </span>
    </div>
  )
}
