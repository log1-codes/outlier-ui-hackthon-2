"use client"

import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { albums } from "@/lib/data"

export function AlbumGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {albums.map((album) => (
        <Link
          key={album.id}
          href={`/album/${album.id}`}
          className="group relative flex cursor-pointer flex-col transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative overflow-hidden rounded-md">
            <div
              className="aspect-square bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${album.cover})` }}
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/30" />

            <Button
              size="icon"
              className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-primary opacity-0 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 group-hover:opacity-100"
            >
              <Play className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
            </Button>
          </div>

          <div className="mt-2">
            <h3 className="font-semibold text-foreground line-clamp-1">{album.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-1">{album.artist}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
