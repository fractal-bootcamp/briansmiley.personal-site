import AudioPlayer from "~/components/AudioPlayer"
import SpotifyIFrame from "~/components/SpotifyIFrame"

type Playlist = {
  name: string
  spotifyPlaylistId: string
}
const playlists: Playlist[] = [
  {
    name: "Wanderers",
    spotifyPlaylistId: "4ZGmFH61GpjIvYvzk70K1k",
  },
  {
    name: "Orpheo Looks Back",
    spotifyPlaylistId: "5EVp644Ux5D3yQNhQWvNJx",
  },
  {
    name: "Apotheosis",
    spotifyPlaylistId: "56nr0wWzP0I67cFVzI9w2y",
  },
  {
    name: "Catabasis",
    spotifyPlaylistId: "4hfe09hZf7XbaTMshbugAi",
  },
  {
    name: "Perambulations",
    spotifyPlaylistId: "63wN0tDYwkunOyipHQyDgA",
  },
  {
    name: "Antechamber",
    spotifyPlaylistId: "6ov76cdkO3YBmjzX3y1tUr",
  },
]
export default function AudioTestPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start">
      <h1 className="w-full text-center text-2xl font-bold">
        Sepulchral Soundwaves
      </h1>
      <section className="mb-3 flex w-full flex-col gap-2 px-3">
        <h2 className="text-lg font-bold">Mixes</h2>
        <div className="grid w-full grid-cols-1 gap-2">
          <AudioPlayer
            imageUrl="/thumbnails/ssw/ssw-scaffold.jpg"
            fileName="ssw-scaffold.mp3"
            title="Scaffold"
            spotifyPlaylistId="0hqzRaDAV7wzbmyMZhTJ2Z"
            allowDownload
          />
          <AudioPlayer
            imageUrl="/thumbnails/ssw/ssw-caesura.png"
            fileName="ssw-caesura.mp3"
            title="Caesura"
            spotifyPlaylistId="3YMF5MzVzq7HacVF8ET3s4"
            allowDownload
          />
          <AudioPlayer
            imageUrl="/thumbnails/ssw/ssw-babylon.jpg"
            fileName="ssw-babylon.mp3"
            title="Babylon"
            spotifyPlaylistId="5bT4O2zWscCM3iutJ1kcgr"
            allowDownload
          />
          <AudioPlayer
            imageUrl="/thumbnails/ssw/ssw-explorations.png"
            fileName="ssw-explorations.mp3"
            spotifyPlaylistId="5tWx6BvQn5xaPYD6HZJhtM"
            title="Explorations"
            allowDownload
          />
          <AudioPlayer
            imageUrl="/thumbnails/ssw/ssw-gooj.png"
            fileName="ssw-gooj.mp3"
            title="GOOJ"
            spotifyPlaylistId="2SVw0XFj8A9Ddt1ennGEjP"
            allowDownload
          />
          <AudioPlayer
            imageUrl="/thumbnails/ssw/ssw-mosaic.jpeg"
            fileName="ssw-mosaic.mp3"
            title="Mosaic"
            spotifyPlaylistId="5cC6T4c0rAuJ5sMmaG4Xpu"
            allowDownload
          />
        </div>
      </section>
      <section className="mb-3 flex w-full flex-col gap-2 px-3">
        <h2 className="text-lg font-bold">Playlists</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {playlists.map((playlist) => (
            <div className="w-full max-w-2xl" key={playlist.spotifyPlaylistId}>
              <SpotifyIFrame
                spotifyPlaylistId={playlist.spotifyPlaylistId}
                height="400"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
