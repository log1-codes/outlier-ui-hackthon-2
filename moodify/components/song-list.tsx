"use client"

import { useState } from "react"
import { Play, MoreHorizontal, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Song {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  albumCover: string
}

interface SongListProps {
  songs: Song[]
}

export function SongList({ songs }: SongListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="mt-6">
      <div className="grid grid-cols-[16px_4fr_3fr_1fr_16px] gap-4 border-b px-4 py-2 text-sm font-medium text-muted-foreground">
        <div className="text-center">#</div>
        <div>Title</div>
        <div>Album</div>
        <div className="flex items-center justify-end">
          <Clock className="h-4 w-4" />
        </div>
        <div></div>
      </div>

      <div className="mt-2">
        {songs.map((song, index) => (
          <div
            key={song.id}
            className="group grid grid-cols-[16px_4fr_3fr_1fr_16px] gap-4 rounded-md px-4 py-2 text-sm hover:bg-primary/5"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center justify-center text-muted-foreground">
              {hoveredIndex === index ? <Play className="h-4 w-4 text-foreground" /> : <span>{index + 1}</span>}
            </div>

            <div className="flex items-center gap-3 overflow-hidden">
              <div
                className="h-10 w-10 flex-shrink-0 rounded bg-cover bg-center"
                style={{ backgroundImage: `url(${song.albumCover})` }}
              />
              <div className="min-w-0">
                <div className="truncate font-medium text-foreground">{song.title}</div>
                <div className="truncate text-muted-foreground">{song.artist}</div>
              </div>
            </div>

            <div className="flex items-center text-muted-foreground">{song.album}</div>

            <div className="flex items-center justify-end text-muted-foreground">
              {Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, "0")}
            </div>

            <div className="flex items-center justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Add to queue</DropdownMenuItem>
                  <DropdownMenuItem>Add to playlist</DropdownMenuItem>
                  <DropdownMenuItem>Go to artist</DropdownMenuItem>
                  <DropdownMenuItem>Go to album</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Share</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
