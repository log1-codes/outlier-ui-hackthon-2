"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { playlists } from "@/lib/data"

export function FeaturedPlaylists() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
      // Initial check
      checkScrollButtons()

      return () => {
        container.removeEventListener("scroll", checkScrollButtons)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = direction === "left" ? -container.clientWidth / 2 : container.clientWidth / 2
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 md:-left-6">
        <Button
          variant="ghost"
          size="icon"
          className={`h-10 w-10 rounded-full bg-background/80 shadow-md backdrop-blur-sm ${
            !canScrollLeft ? "opacity-0" : "opacity-100"
          } transition-opacity`}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-hide">
        {playlists.map((playlist) => (
          <Link
            key={playlist.id}
            href={`/playlist/${playlist.id}`}
            className="group relative flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.02] md:w-[220px]"
          >
            <div className="relative h-[220px] w-[220px] overflow-hidden rounded-xl">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${playlist.cover})` }}
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/40" />

              <Button
                size="icon"
                className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-primary opacity-0 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 group-hover:opacity-100"
              >
                <Play className="h-6 w-6 fill-primary-foreground text-primary-foreground" />
              </Button>
            </div>

            <div className="mt-2">
              <h3 className="font-bold text-foreground">{playlist.title}</h3>
              <p className="text-sm text-muted-foreground">{playlist.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 md:-right-6">
        <Button
          variant="ghost"
          size="icon"
          className={`h-10 w-10 rounded-full bg-background/80 shadow-md backdrop-blur-sm ${
            !canScrollRight ? "opacity-0" : "opacity-100"
          } transition-opacity`}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
