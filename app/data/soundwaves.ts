export type Mix = {
  slug: string
  title: string
  fileName: string
  imageUrl: string
  spotifyPlaylistId: string
  trackCount: number
  blurb: string | null
  description: string | null
}

export type Playlist = {
  slug: string
  name: string
  imageUrl: string
  spotifyPlaylistId: string
  trackCount: number
  blurb: string | null
  description: string | null
}

export const mixes: Mix[] = [
  {
    slug: "scaffold",
    title: "Scaffold",
    fileName: "ssw-scaffold.m4a",
    imageUrl: "/thumbnails/ssw/ssw-scaffold.jpg",
    spotifyPlaylistId: "0hqzRaDAV7wzbmyMZhTJ2Z",
    trackCount: 11,
    blurb: null,
    description: null,
  },
  {
    slug: "caesura",
    title: "Caesura",
    fileName: "ssw-caesura.mp3",
    imageUrl: "/thumbnails/ssw/ssw-caesura.png",
    spotifyPlaylistId: "3YMF5MzVzq7HacVF8ET3s4",
    trackCount: 19,
    blurb: null,
    description: null,
  },
  {
    slug: "babylon",
    title: "Babylon",
    fileName: "ssw-babylon.mp3",
    imageUrl: "/thumbnails/ssw/ssw-babylon.jpg",
    spotifyPlaylistId: "5bT4O2zWscCM3iutJ1kcgr",
    trackCount: 11,
    blurb: null,
    description: null,
  },
  {
    slug: "explorations",
    title: "Explorations",
    fileName: "ssw-explorations.mp3",
    imageUrl: "/thumbnails/ssw/ssw-explorations.png",
    spotifyPlaylistId: "5tWx6BvQn5xaPYD6HZJhtM",
    trackCount: 7,
    blurb: null,
    description: null,
  },
  {
    slug: "gooj",
    title: "GOOJ",
    fileName: "ssw-gooj.mp3",
    imageUrl: "/thumbnails/ssw/ssw-gooj.png",
    spotifyPlaylistId: "2SVw0XFj8A9Ddt1ennGEjP",
    trackCount: 7,
    blurb: null,
    description: null,
  },
  {
    slug: "mosaic",
    title: "Mosaic",
    fileName: "ssw-mosaic.mp3",
    imageUrl: "/thumbnails/ssw/ssw-mosaic.jpeg",
    spotifyPlaylistId: "5cC6T4c0rAuJ5sMmaG4Xpu",
    trackCount: 13,
    blurb: null,
    description: null,
  },
]

export const playlists: Playlist[] = [
  {
    slug: "wanderers",
    name: "Wanderers",
    imageUrl: "/thumbnails/ssw/ssw-wanderers.jpg",
    spotifyPlaylistId: "4ZGmFH61GpjIvYvzk70K1k",
    trackCount: 12,
    blurb: null,
    description: null,
  },
  {
    slug: "orpheo-looks-back",
    name: "Orpheo Looks Back",
    imageUrl: "/thumbnails/ssw/ssw-orpheo-looks-back.jpg",
    spotifyPlaylistId: "5EVp644Ux5D3yQNhQWvNJx",
    trackCount: 12,
    blurb: null,
    description: null,
  },
  {
    slug: "apotheosis",
    name: "Apotheosis",
    imageUrl: "/thumbnails/ssw/ssw-apotheosis.jpg",
    spotifyPlaylistId: "56nr0wWzP0I67cFVzI9w2y",
    trackCount: 17,
    blurb: null,
    description: null,
  },
  {
    slug: "catabasis",
    name: "Catabasis",
    imageUrl: "/thumbnails/ssw/ssw-catabasis.jpg",
    spotifyPlaylistId: "4hfe09hZf7XbaTMshbugAi",
    trackCount: 11,
    blurb: null,
    description: null,
  },
  {
    slug: "perambulations",
    name: "Perambulations",
    imageUrl: "/thumbnails/ssw/ssw-perambulations.jpg",
    spotifyPlaylistId: "63wN0tDYwkunOyipHQyDgA",
    trackCount: 14,
    blurb: null,
    description: null,
  },
  {
    slug: "antechamber",
    name: "Antechamber",
    imageUrl: "/thumbnails/ssw/ssw-antechamber.jpg",
    spotifyPlaylistId: "6ov76cdkO3YBmjzX3y1tUr",
    trackCount: 6,
    blurb: null,
    description: null,
  },
]
