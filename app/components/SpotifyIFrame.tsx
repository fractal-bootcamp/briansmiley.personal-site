export default function SpotifyIFrame({
  spotifyPlaylistId,
  height = "500",
}: {
  spotifyPlaylistId: string
  height?: string
}) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}`}
      style={{
        borderRadius: "12px",
        backgroundColor: "transparent",
      }}
      width="100%"
      height={height}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  )
}
