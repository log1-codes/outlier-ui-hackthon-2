import { Play, Heart, MoreHorizontal, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface PlaylistHeaderProps {
  playlist: {
    id: string
    title: string
    description: string
    cover: string
    songs?: number
    followers?: number
  }
}

export function PlaylistHeader({ playlist }: PlaylistHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end">
        <div
          className="h-48 w-48 rounded-xl bg-cover bg-center shadow-lg md:h-64 md:w-64"
          style={{ backgroundImage: `url(${playlist.cover})` }}
        />

        <div className="flex flex-1 flex-col justify-end">
          <div className="mb-2 text-sm font-medium uppercase text-muted-foreground">Playlist</div>
          <h1 className="mb-2 text-3xl font-bold md:text-5xl">{playlist.title}</h1>
          <p className="mb-4 text-muted-foreground">{playlist.description}</p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">15 songs</span>
            <span>•</span>
            <span>45 min</span>
            <span>•</span>
            <span>12.5K followers</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <Button size="lg" className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90">
          <Play className="mr-2 h-5 w-5 fill-primary-foreground" />
          Play
        </Button>

        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-muted-foreground/30">
          <Heart className="h-5 w-5" />
        </Button>

        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-muted-foreground/30">
          <Share2 className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-muted-foreground/30">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Add to queue</DropdownMenuItem>
            <DropdownMenuItem>Add to playlist</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
