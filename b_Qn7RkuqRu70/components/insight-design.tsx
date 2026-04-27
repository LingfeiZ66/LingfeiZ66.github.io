import Image from "next/image"

interface InsightDesignProps {
  insightNumber?: string | number
  insightTitle: string
  insightDescription: string
  userQuote?: string
  quoteAttribution?: string
  designResponse: string | string[]
  imageSrc?: string
  imageAlt?: string
}

export function InsightDesign({
  insightNumber,
  insightTitle,
  insightDescription,
  userQuote,
  quoteAttribution,
  designResponse,
  imageSrc,
  imageAlt = "UI Design",
}: InsightDesignProps) {
  return (
    <div className="py-12">
      {/* Main content grid */}
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
        {/* Left column - Insight */}
        <div className="space-y-6">
          <div>
            {insightNumber && (
              <span className="text-sm font-medium text-primary mb-2 block">
                Insight {insightNumber}
              </span>
            )}
            <h3 className="text-xl font-bold">{insightTitle}</h3>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {insightDescription}
          </p>

          {userQuote && (
            <blockquote className="border-l-2 border-primary/40 pl-4 py-2">
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                &ldquo;{userQuote}&rdquo;
              </p>
              {quoteAttribution && (
                <cite className="text-xs text-muted-foreground/70 mt-2 block not-italic">
                  — {quoteAttribution}
                </cite>
              )}
            </blockquote>
          )}
        </div>

        {/* Right column - UI Image */}
        <div className="flex items-center justify-center">
          {imageSrc ? (
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full aspect-[4/3] border-2 border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center bg-muted/10">
              <span className="text-muted-foreground/50 text-sm font-medium">
                UI Placeholder
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Design Response section */}
      <div className="mt-10 pt-8 border-t border-border/50">
        <h4 className="text-sm font-semibold text-primary mb-4">Design Response</h4>
        {Array.isArray(designResponse) ? (
          <ul className="space-y-2">
            {designResponse.map((item, index) => (
              <li key={index} className="flex items-start text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground leading-relaxed">{designResponse}</p>
        )}
      </div>

      {/* Bottom divider */}
      <div className="mt-12 border-b border-border/30"></div>
    </div>
  )
}
