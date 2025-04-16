import { Header } from "@/components/header"
import { PlaylistHeader } from "@/components/playlist-header"
import { SongList } from "@/components/song-list"
import { playlists, songs } from "@/lib/data"

export default function PlaylistPage({ params }: { params: { id: string } }) {
  const playlist = playlists.find((p) => p.id === params.id) || playlists[0]
  const playlistSongs = songs.slice(0, 15)

  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-4 py-6 md:px-8">
        <PlaylistHeader playlist={playlist} />
        <SongList songs={playlistSongs} />
      </div>
    </div>
  )
}
