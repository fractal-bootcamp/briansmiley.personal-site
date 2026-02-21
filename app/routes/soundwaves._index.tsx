import { Link } from "@remix-run/react"
import { FaSpotify } from "react-icons/fa6"
import { mixes, playlists } from "~/data/soundwaves"

export default function SoundwavesIndex() {
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
        <h2 className="font-playfair text-2xl font-semibold tracking-wide">
          Mixes
        </h2>
        <p className="mb-6 mt-1 text-sm text-muted-foreground">
          Hand-edited mixes with more deliberate song truncation and transitions.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mixes.map((mix) => (
            <Link
              key={mix.slug}
              to={`/soundwaves/${mix.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={mix.imageUrl}
                alt={mix.title}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 via-40% to-transparent p-5">
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

      {/* Playlists — list with dividers */}
      <section>
        <h2 className="font-playfair text-2xl font-semibold tracking-wide">
          Playlists
        </h2>
        <p className="mb-6 mt-1 text-sm text-muted-foreground">
          Raw Spotify playlists without mixing.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {playlists.map((playlist) => (
            <Link
              key={playlist.slug}
              to={`/soundwaves/${playlist.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={playlist.imageUrl}
                alt={playlist.name}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <FaSpotify className="absolute right-3 top-3 h-6 w-6 text-green-500 drop-shadow-lg" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 via-40% to-transparent p-5">
                <h3 className="font-playfair text-xl font-bold text-white">
                  {playlist.name}
                </h3>
                {playlist.blurb && (
                  <p className="mt-1 text-sm leading-snug text-gray-200">
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
