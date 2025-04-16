import { Header } from "@/components/header"
import { FeaturedPlaylists } from "@/components/featured-playlists"
import { AlbumGrid } from "@/components/album-grid"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-4 py-6 md:px-8">
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Featured Playlists</h2>
          <FeaturedPlaylists />
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">New Releases</h2>
          <AlbumGrid />
        </section>
      </div>
    </div>
  )
}
