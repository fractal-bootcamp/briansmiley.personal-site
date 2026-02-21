const HEADER_PX = 200
const ROW_PX = 50
const PADDING_PX = 20

/** Estimate the pixel height needed to display all tracks without scrolling. */
function estimateContentHeight(trackCount: number) {
  return HEADER_PX + trackCount * ROW_PX + PADDING_PX
}

export default function SpotifyIFrame({
  spotifyPlaylistId,
  height,
  trackCount,
}: {
  spotifyPlaylistId: string
  height?: string
  trackCount?: number
}) {
  const resolvedHeight =
    height ??
    (trackCount
      ? `min(${estimateContentHeight(trackCount)}px, calc(100vh - 120px))`
      : "500px")

  return (
    <iframe
      src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}`}
      style={{
        borderRadius: "12px",
        backgroundColor: "transparent",
        height: resolvedHeight,
      }}
      width="100%"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  )
}
