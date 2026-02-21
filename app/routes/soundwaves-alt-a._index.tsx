import { Link } from "@remix-run/react"
import { FaSpotify } from "react-icons/fa6"
import { mixes, playlists } from "~/data/soundwaves"

export default function SoundwavesA() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-12">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="font-playfair text-4xl font-bold tracking-wide sm:text-5xl">
          Sepulchral Soundwaves
        </h1>
        <p className="mx-auto mt-4 max-w-lg font-playfair text-lg italic text-muted-foreground">
          Curated mixes and playlists of immersive music. Best enjoyed
          horizontally in a dark room with good speakers.
        </p>
      </header>

      {/* Mixes — alternating list */}
      <section className="mb-16">
        <h2 className="mb-6 font-playfair text-2xl font-semibold tracking-wide">
          Mixes
        </h2>
        <div className="flex flex-col gap-6">
          {mixes.map((mix, i) => (
            <Link
              key={mix.slug}
              to={`/soundwaves/${mix.slug}`}
              className="group"
            >
              <div
                className={`flex flex-col gap-4 sm:flex-row sm:items-center ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <img
                  src={mix.imageUrl}
                  alt={mix.title}
                  className="aspect-square w-full rounded-lg object-cover sm:w-44"
                />
                <div className="flex flex-1 flex-col gap-1">
                  <h3 className="font-playfair text-xl font-bold group-hover:underline">
                    {mix.title}
                  </h3>
                  {mix.blurb && (
                    <p className="text-sm text-muted-foreground">{mix.blurb}</p>
                  )}
                  <p className="text-sm text-muted-foreground/70">
                    {mix.trackCount} tracks
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Playlists */}
      <section>
        <h2 className="mb-6 font-playfair text-2xl font-semibold tracking-wide">
          Playlists
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {playlists.map((playlist) => (
            <Link
              key={playlist.slug}
              to={`/soundwaves/${playlist.slug}`}
              className="group flex items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted"
            >
              <FaSpotify className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
              <div>
                <h3 className="font-playfair font-semibold group-hover:underline">
                  {playlist.name}
                </h3>
                {playlist.blurb && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {playlist.blurb}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
