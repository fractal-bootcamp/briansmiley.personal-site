import { useState } from "react"
import { Link, useParams } from "@remix-run/react"
import { LinkIcon, Check } from "lucide-react"
import AudioPlayer from "~/components/AudioPlayer"
import SpotifyIFrame from "~/components/SpotifyIFrame"
import { mixes, playlists } from "~/data/soundwaves"

function PlaylistHeader({
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
    <div className="w-full">
      <div className="mb-2 flex items-center gap-2">
        <h1 className="text-2xl font-bold">{name}</h1>
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
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <LinkIcon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          )}
        </button>
      </div>
      <SpotifyIFrame spotifyPlaylistId={spotifyPlaylistId} />
    </div>
  )
}

export default function SoundwaveSlugPage() {
  const { slug } = useParams()

  const mix = mixes.find((m) => m.slug === slug)
  const playlist = !mix ? playlists.find((p) => p.slug === slug) : undefined

  if (!mix && !playlist) {
    throw new Response("Not Found", { status: 404 })
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start gap-4 px-3 pb-8">
      <Link
        to="/soundwaves"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; All Mixes
      </Link>
      {mix && (
        <AudioPlayer
          slug={mix.slug}
          imageUrl={mix.imageUrl}
          fileName={mix.fileName}
          title={mix.title}
          spotifyPlaylistId={mix.spotifyPlaylistId}
          allowDownload
          defaultShowSpotify
        />
      )}
      {playlist && <PlaylistHeader slug={playlist.slug} name={playlist.name} spotifyPlaylistId={playlist.spotifyPlaylistId} />}
    </div>
  )
}
