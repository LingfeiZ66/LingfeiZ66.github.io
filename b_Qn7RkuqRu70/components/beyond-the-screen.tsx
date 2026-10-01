"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Plus, X } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { cn } from "@/lib/utils"

type Photo = {
  src: string
  alt: string
  caption: string
}

type DisciplineId = "photography" | "theatre"

type Discipline = {
  id: DisciplineId
  number: string
  name: string
  descriptor: string
  summary: string
  preview: string
}

const DISCIPLINES: Discipline[] = [
  {
    id: "photography",
    number: "01",
    name: "Photography",
    descriptor: "Composition · People · Visual Stories",
    summary:
      "Photography has shaped how I think about composition, light, emotion, and the small visual details that influence how something feels.",
    preview: "/images/creative/photo-portrait.png",
  },
  {
    id: "theatre",
    number: "02",
    name: "Theatre",
    descriptor: "Storytelling · Performance · Collaboration",
    summary:
      "Theatre has taught me to think about storytelling through people, timing, emotion, collaboration, and the way an experience unfolds for an audience.",
    preview: "/images/creative/theatre-stage.png",
  },
]

const PHOTOS = {
  hero: { src: "/images/creative/photo-portrait.png", alt: "Portrait of a woman lit by late afternoon window light", caption: "Window light, late afternoon" },
  street: { src: "/images/creative/photo-street.png", alt: "A lone figure walking through long building shadows at golden hour", caption: "Shadow geometry" },
  moment: { src: "/images/creative/photo-moment.png", alt: "Two friends laughing at a night market under string lights", caption: "An unplanned moment" },
  detail: { src: "/images/creative/photo-detail.png", alt: "Hands holding a coffee cup on a wooden table in morning light", caption: "Small details" },
  coast: { src: "/images/creative/photo-coast.png", alt: "A small figure on a coastal cliff at dusk above the ocean", caption: "Scale and negative space" },
} satisfies Record<string, Photo>

const NOTICES = ["Composition", "Hierarchy", "Lighting", "Emotion", "Human behavior", "Small visual details"]

const SCENES = [
  {
    scene: "Scene 01",
    title: "Rehearsal",
    text: "Ideas get tested out loud, with people, long before opening night.",
    src: "/images/creative/theatre-rehearsal.png",
    alt: "A cast sitting in a circle on a black-box theatre floor reading scripts",
    aspect: "aspect-[3/2]",
    offset: "",
  },
  {
    scene: "Scene 02",
    title: "Direction",
    text: "Directing is guiding attention and shaping what the audience notices, and when.",
    src: "/images/creative/theatre-backstage.png",
    alt: "A director with a script and headset watching the stage from the wings",
    aspect: "aspect-[4/5]",
    offset: "md:ml-auto md:w-3/4",
  },
  {
    scene: "Scene 03",
    title: "Performance",
    text: "Timing and emotion decide whether a moment lands.",
    src: "/images/creative/theatre-stage.png",
    alt: "Two actors in a dramatic moment under a single spotlight",
    aspect: "aspect-[16/9]",
    offset: "",
  },
  {
    scene: "Scene 04",
    title: "Curtain call",
    text: "The whole experience is built for the audience, from the first beat to the last.",
    src: "/images/creative/theatre-bow.png",
    alt: "A cast holding hands and bowing to the audience",
    aspect: "aspect-[3/2]",
    offset: "md:w-5/6",
  },
]

const THEATRE_INFLUENCES = ["Storytelling", "Understanding people", "Collaboration", "Communication", "Timing", "Audience experience"]

const EXPAND_MS = 520

export function BeyondTheScreen() {
  const [openId, setOpenId] = useState<DisciplineId | null>(null)
  const [lightbox, setLightbox] = useState<Photo | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const rowRefs = useRef<Record<DisciplineId, HTMLDivElement | null>>({ photography: null, theatre: null })

  const toggle = (id: DisciplineId) => {
    const switching = openId !== null && openId !== id
    const next = openId === id ? null : id
    setOpenId(next)

    if (next && switching) {
      window.setTimeout(() => {
        const row = rowRefs.current[next]
        if (!row) return
        const top = row.getBoundingClientRect().top
        if (top < 0 || top > window.innerHeight * 0.6) {
          const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
          row.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
        }
      }, EXPAND_MS)
    }
  }

  const openPhoto = (photo: Photo) => {
    setLightbox(photo)
    dialogRef.current?.showModal()
  }

  return (
    <section id="beyond" aria-labelledby="beyond-heading" className="section">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader number="03" id="beyond-heading" title="Beyond the screen" />

          <div className="border-t border-border">
            {DISCIPLINES.map((discipline) => {
              const isOpen = openId === discipline.id
              const panelId = `beyond-panel-${discipline.id}`
              const buttonId = `beyond-trigger-${discipline.id}`

              return (
                <div
                  key={discipline.id}
                  ref={(el) => {
                    rowRefs.current[discipline.id] = el
                  }}
                  className="scroll-mt-24 border-b border-border"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(discipline.id)}
                      className="group flex w-full items-center gap-5 py-8 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background md:gap-10 md:py-12"
                    >
                      <span
                        className={cn(
                          "font-mono text-sm tabular-nums transition-colors duration-200 md:text-base",
                          isOpen ? "text-primary" : "text-muted-foreground group-hover:text-primary",
                        )}
                      >
                        {discipline.number}
                      </span>

                      <span className="min-w-0 flex-1 text-4xl font-semibold uppercase leading-none tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none md:text-7xl">
                        {discipline.name}
                      </span>

                      <span
                        aria-hidden="true"
                        className={cn(
                          "relative hidden aspect-[16/10] w-40 shrink-0 overflow-hidden rounded-md transition-all duration-500 ease-out lg:block",
                          isOpen ? "w-0 opacity-0" : "opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0",
                        )}
                      >
                        <Image src={discipline.preview} alt="" fill sizes="160px" className="object-cover" />
                      </span>

                      <span className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
                        <span className="hidden sm:inline">{isOpen ? "Close" : "Explore"}</span>
                        <span
                          className={cn(
                            "flex size-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary",
                            isOpen && "border-primary bg-primary text-primary-foreground",
                          )}
                        >
                          {isOpen ? <X className="size-4" /> : <Plus className="size-4" />}
                        </span>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    inert={!isOpen}
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-12 md:pb-16">
                        {discipline.id === "photography" ? (
                          <PhotographyGallery summary={discipline.summary} onOpen={openPhoto} />
                        ) : (
                          <TheatreSequence summary={discipline.summary} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setLightbox(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close()
        }}
        aria-label={lightbox?.caption ?? "Photograph"}
        className="m-auto max-h-[90vh] w-[min(92vw,1100px)] bg-transparent p-0 backdrop:bg-background/90 backdrop:backdrop-blur-sm"
      >
        {lightbox && (
          <figure className="flex flex-col gap-3">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
              <Image src={lightbox.src} alt={lightbox.alt} fill sizes="92vw" className="object-contain" />
            </div>
            <figcaption className="flex items-center justify-between gap-4">
              <span className="eyebrow">{lightbox.caption}</span>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Close <X className="size-4" aria-hidden="true" />
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  )
}

function GalleryFrame({
  photo,
  aspect,
  sizes,
  onOpen,
  className,
}: {
  photo: Photo
  aspect: string
  sizes: string
  onOpen: (photo: Photo) => void
  className?: string
}) {
  return (
    <figure className={cn("flex flex-col gap-2", className)}>
      <button
        type="button"
        onClick={() => onOpen(photo)}
        aria-label={`View larger: ${photo.caption}`}
        className={cn(
          "group/frame relative w-full overflow-hidden rounded-md bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          aspect,
        )}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover/frame:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/frame:scale-100"
        />
      </button>
      <figcaption className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{photo.caption}</figcaption>
    </figure>
  )
}

function PhotographyGallery({ summary, onOpen }: { summary: string; onOpen: (photo: Photo) => void }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
      <GalleryFrame
        photo={PHOTOS.hero}
        aspect="aspect-[3/2]"
        sizes="(min-width: 768px) 66vw, 100vw"
        onOpen={onOpen}
        className="col-span-2 md:col-span-8"
      />
      <GalleryFrame
        photo={PHOTOS.street}
        aspect="aspect-[3/4]"
        sizes="(min-width: 768px) 33vw, 50vw"
        onOpen={onOpen}
        className="col-span-1 md:col-span-4"
      />

      <div className="col-span-1 flex flex-col justify-end gap-4 md:order-none md:col-span-4 md:row-span-1">
        <p className="text-base leading-relaxed text-foreground md:text-lg">{summary}</p>
        <div className="hidden md:block">
          <p className="eyebrow mb-3">It teaches me to notice</p>
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
            {NOTICES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <GalleryFrame
        photo={PHOTOS.moment}
        aspect="aspect-[4/3]"
        sizes="(min-width: 768px) 42vw, 100vw"
        onOpen={onOpen}
        className="col-span-2 md:col-span-5 md:mt-12"
      />
      <div className="col-span-2 grid grid-cols-2 gap-4 md:col-span-3 md:grid-cols-1 md:gap-6">
        <GalleryFrame photo={PHOTOS.detail} aspect="aspect-square" sizes="(min-width: 768px) 25vw, 50vw" onOpen={onOpen} />
        <GalleryFrame photo={PHOTOS.coast} aspect="aspect-[4/5]" sizes="(min-width: 768px) 25vw, 50vw" onOpen={onOpen} />
      </div>

      <div className="col-span-2 md:hidden">
        <p className="eyebrow mb-3">It teaches me to notice</p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
          {NOTICES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function TheatreSequence({ summary }: { summary: string }) {
  return (
    <div className="grid gap-10 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-4">
        <div className="flex flex-col gap-6 md:sticky md:top-28">
          <p className="text-base leading-relaxed text-foreground md:text-lg">{summary}</p>
          <div>
            <p className="eyebrow mb-3">What carries into design</p>
            <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              {THEATRE_INFLUENCES.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-4 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ol className="relative flex flex-col gap-12 border-l border-border pl-6 md:col-span-8 md:gap-16 md:pl-10">
        {SCENES.map((scene) => (
          <li key={scene.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[29px] top-1 size-2.5 rounded-full border border-primary bg-background md:-left-[45px]"
            />
            <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">{scene.scene}</span>
              <span className="text-2xl font-semibold md:text-3xl">{scene.title}</span>
            </div>
            <figure className={cn("flex flex-col gap-3", scene.offset)}>
              <div className={cn("group/scene relative w-full overflow-hidden rounded-md bg-muted", scene.aspect)}>
                <Image
                  src={scene.src}
                  alt={scene.alt}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover/scene:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/scene:scale-100"
                />
              </div>
              <figcaption className="max-w-md text-sm leading-relaxed text-muted-foreground">{scene.text}</figcaption>
            </figure>
          </li>
        ))}
      </ol>
    </div>
  )
}
