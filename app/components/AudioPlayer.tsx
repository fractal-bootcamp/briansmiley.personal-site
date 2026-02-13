import { useState, useRef, useEffect } from "react"
import { Link } from "@remix-run/react"
import { Play, Pause, Download, LinkIcon, Check } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import SpotifyIFrame from "./SpotifyIFrame"
import { useMediaQuery } from "usehooks-ts"

interface AudioPlayerProps {
  fileName: string
  title: string
  imageUrl?: string
  slug?: string
  spotifyPlaylistId?: string
  allowDownload?: boolean
  defaultShowSpotify?: boolean
}

export default function AudioPlayer({
  fileName,
  title,
  imageUrl,
  slug,
  spotifyPlaylistId,
  allowDownload = false,
  defaultShowSpotify = false,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [seekTime, setSeekTime] = useState(0)
  const [isSeeking, setIsSeeking] = useState(false)
  const [showSpotify, setShowSpotify] = useState(defaultShowSpotify)
  const [hasError, setHasError] = useState(false)
  const [preload, setPreload] = useState<"none" | "metadata">("none")
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const isMobile = useMediaQuery("(max-width: 425px)")

  useEffect(() => {
    setPreload(isMobile ? "none" : "metadata")
  }, [isMobile])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const updateTime = () => {
      if (!isSeeking) {
        setCurrentTime(audio.currentTime)
      }
    }

    const updateDuration = () => setDuration(audio.duration)
    const handleError = (e: ErrorEvent) => {
      console.error("Audio error:", e)
      setHasError(true)
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("error", handleError)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("error", handleError)
    }
  }, [isSeeking])

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        // On mobile, ensure metadata is loaded before playing
        if (isMobile && duration === 0) {
          audioRef.current.preload = "metadata"
          await audioRef.current.load()
        }
        await audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handleSeekStart = () => {
    setIsSeeking(true)
  }

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)
    setSeekTime(time)
    setCurrentTime(time)
  }

  const handleSeekEnd = (
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent | React.TouchEvent
  ) => {
    if (audioRef.current) {
      const time =
        e instanceof MouseEvent || e instanceof TouchEvent
          ? seekTime
          : Number((e.target as HTMLInputElement).value)
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
    setIsSeeking(false)
  }

  return (
    <div className="w-full max-w-2xl">
      <div
        className={`relative w-full rounded-lg border bg-background p-4 ${hasError ? "opacity-50" : ""}`}
      >
        <div className="absolute right-1 top-1 flex gap-3">
          {slug && (
            <button
              onClick={() => {
                const url = `${window.location.origin}/soundwaves/${slug}`
                navigator.clipboard.writeText(url)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
              className="flex h-fit w-fit"
              title="Copy link"
            >
              <span className="sr-only">Copy link</span>
              {copied ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <LinkIcon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              )}
            </button>
          )}
          {allowDownload && !hasError && (
            <a
              href={`/api/file/${encodeURIComponent(fileName)}?download=true`}
              download={fileName}
              className="flex h-fit w-fit"
              title="Download audio"
            >
              <span className="sr-only">Download</span>
              <Download className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          )}
        </div>
        {spotifyPlaylistId && (
          <button
            className="absolute bottom-1 right-1 flex h-fit w-fit"
            onClick={() => setShowSpotify(!showSpotify)}
          >
            <span className="sr-only">Spotify</span>
            <FontAwesomeIcon
              icon={faSpotify}
              className="h-5 w-5 text-green-600 hover:text-opacity-70"
            />
          </button>
        )}
        <div className="flex items-center gap-4">
          {imageUrl && (
            <>
              <img
                src={imageUrl}
                alt={title}
                width={100}
                height={100}
                className="h-[100px] w-[100px] cursor-pointer rounded-lg object-cover transition-opacity hover:opacity-90"
                onClick={() => setIsImageModalOpen(true)}
              />
              {isImageModalOpen && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-700 bg-opacity-75"
                  onClick={() => setIsImageModalOpen(false)}
                >
                  <div className="relative">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="max-h-[80vh] max-w-[600px] rounded-lg object-contain"
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <div className="flex-1">
            <div className="flex items-center gap-1">
              <button
                onClick={togglePlay}
                className={`rounded-full p-1 ${hasError ? "" : "hover:bg-muted"}`}
                disabled={hasError}
              >
                {isPlaying ? (
                  <>
                    <span className="sr-only">Pause</span>
                    <Pause className="h-6 w-6" />
                  </>
                ) : (
                  <>
                    <span className="sr-only">Play</span>
                    <Play className="h-6 w-6" />
                  </>
                )}
              </button>
              {slug ? (
                <Link
                  to={`/soundwaves/${slug}`}
                  className="text-lg font-semibold hover:underline"
                >
                  {title}
                </Link>
              ) : (
                <h3 className="text-lg font-semibold">{title}</h3>
              )}
            </div>

            <audio
              ref={audioRef}
              src={`/api/file/${encodeURIComponent(fileName)}`}
              preload={preload}
            />

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <input
                  type="range"
                  min={0}
                  max={duration}
                  value={isSeeking ? seekTime : currentTime}
                  onChange={handleSeekChange}
                  onMouseDown={handleSeekStart}
                  onMouseUp={handleSeekEnd}
                  onTouchStart={handleSeekStart}
                  onTouchEnd={handleSeekEnd}
                  className="w-full"
                  disabled={hasError}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatTime(isSeeking ? seekTime : currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          maxHeight: showSpotify ? "700px" : "0px",
        }}
        className={`max-w-screen w-full overflow-hidden bg-inherit transition-all duration-500 ease-in-out ${
          showSpotify ? "opacity-100" : "opacity-0"
        }`}
      >
        {spotifyPlaylistId && (
          <SpotifyIFrame spotifyPlaylistId={spotifyPlaylistId} />
        )}
      </div>
    </div>
  )
}
