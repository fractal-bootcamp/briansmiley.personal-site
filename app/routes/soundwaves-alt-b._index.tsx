import { Link } from "@remix-run/react"
import { FaSpotify } from "react-icons/fa6"
import { mixes, playlists } from "~/data/soundwaves"

export default function SoundwavesB() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-12">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="font-playfair text-4xl font-bold tracking-wide sm:text-5xl">
          Sepulchral Soundwaves
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-playfair text-lg italic text-muted-foreground">
          Curated mixes and playlists of immersive music. Best enjoyed
          horizontally in a dark room with good speakers.
        </p>
      </header>

      {/* Mixes — card grid with overlay text */}
      <section className="mb-16">
        <h2 className="mb-6 font-playfair text-2xl font-semibold tracking-wide">
          Mixes
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mixes.map((mix) => (
            <Link
              key={mix.slug}
              to={`/soundwaves/${mix.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              {/* Cover art fills the card */}
              <img
                src={mix.imageUrl}
                alt={mix.title}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Gradient overlay with text */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5">
                <h3 className="font-playfair text-xl font-bold text-white">
                  {mix.title}
                </h3>
                {mix.blurb && (
                  <p className="mt-1 text-sm leading-snug text-gray-200">
                    {mix.blurb}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Playlists — horizontal list with dividers */}
      <section>
        <h2 className="mb-6 font-playfair text-2xl font-semibold tracking-wide">
          Playlists
        </h2>
        <div className="divide-y divide-border">
          {playlists.map((playlist) => (
            <Link
              key={playlist.slug}
              to={`/soundwaves/${playlist.slug}`}
              className="group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <FaSpotify className="h-5 w-5 shrink-0 text-green-600" />
                <div>
                  <h3 className="font-playfair font-semibold group-hover:underline">
                    {playlist.name}
                  </h3>
                  {playlist.blurb && (
                    <p className="text-sm text-muted-foreground">
                      {playlist.blurb}
                    </p>
                  )}
                </div>
              </div>
              <span className="text-sm text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
