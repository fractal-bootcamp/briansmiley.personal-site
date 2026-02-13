import { useState } from "react"
import { Link } from "@remix-run/react"
import { LinkIcon, Check } from "lucide-react"
import AudioPlayer from "~/components/AudioPlayer"
import SpotifyIFrame from "~/components/SpotifyIFrame"
import { mixes, playlists } from "~/data/soundwaves"

function PlaylistCard({
  slug,
  name,
  spotifyPlaylistId,
}: {
  slug: string
  name: string
  spotifyPlaylistId: string
}) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="w-full max-w-2xl">
      <div className="flex items-center gap-2 pb-1">
        <Link
          to={`/soundwaves/${slug}`}
          className="text-sm font-semibold hover:underline"
        >
          {name}
        </Link>
        <button
          onClick={() => {
            const url = `${window.location.origin}/soundwaves/${slug}`
            navigator.clipboard.writeText(url)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          }}
          title="Copy link"
        >
          <span className="sr-only">Copy link</span>
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <LinkIcon className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
          )}
        </button>
      </div>
      <SpotifyIFrame spotifyPlaylistId={spotifyPlaylistId} height="400" />
    </div>
  )
}

export default function AudioTestPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start">
      <h1 className="w-full text-center text-2xl font-bold">
        Sepulchral Soundwaves
      </h1>
      <section className="mb-3 flex w-full flex-col gap-2 px-3">
        <h2 className="text-lg font-bold">Mixes</h2>
        <div className="grid w-full grid-cols-1 gap-2">
          {mixes.map((mix) => (
            <AudioPlayer
              key={mix.slug}
              slug={mix.slug}
              imageUrl={mix.imageUrl}
              fileName={mix.fileName}
              title={mix.title}
              spotifyPlaylistId={mix.spotifyPlaylistId}
              allowDownload
            />
          ))}
        </div>
      </section>
      <section className="mb-3 flex w-full flex-col gap-2 px-3">
        <h2 className="text-lg font-bold">Playlists</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist.spotifyPlaylistId}
              slug={playlist.slug}
              name={playlist.name}
              spotifyPlaylistId={playlist.spotifyPlaylistId}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
