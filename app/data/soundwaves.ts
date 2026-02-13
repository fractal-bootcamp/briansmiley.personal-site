export type Mix = {
  slug: string
  title: string
  fileName: string
  imageUrl: string
  spotifyPlaylistId: string
}

export type Playlist = {
  slug: string
  name: string
  spotifyPlaylistId: string
}

export const mixes: Mix[] = [
  {
    slug: "scaffold",
    title: "Scaffold",
    fileName: "ssw-scaffold.mp3",
    imageUrl: "/thumbnails/ssw/ssw-scaffold.jpg",
    spotifyPlaylistId: "0hqzRaDAV7wzbmyMZhTJ2Z",
  },
  {
    slug: "caesura",
    title: "Caesura",
    fileName: "ssw-caesura.mp3",
    imageUrl: "/thumbnails/ssw/ssw-caesura.png",
    spotifyPlaylistId: "3YMF5MzVzq7HacVF8ET3s4",
  },
  {
    slug: "babylon",
    title: "Babylon",
    fileName: "ssw-babylon.mp3",
    imageUrl: "/thumbnails/ssw/ssw-babylon.jpg",
    spotifyPlaylistId: "5bT4O2zWscCM3iutJ1kcgr",
  },
  {
    slug: "explorations",
    title: "Explorations",
    fileName: "ssw-explorations.mp3",
    imageUrl: "/thumbnails/ssw/ssw-explorations.png",
    spotifyPlaylistId: "5tWx6BvQn5xaPYD6HZJhtM",
  },
  {
    slug: "gooj",
    title: "GOOJ",
    fileName: "ssw-gooj.mp3",
    imageUrl: "/thumbnails/ssw/ssw-gooj.png",
    spotifyPlaylistId: "2SVw0XFj8A9Ddt1ennGEjP",
  },
  {
    slug: "mosaic",
    title: "Mosaic",
    fileName: "ssw-mosaic.mp3",
    imageUrl: "/thumbnails/ssw/ssw-mosaic.jpeg",
    spotifyPlaylistId: "5cC6T4c0rAuJ5sMmaG4Xpu",
  },
]

export const playlists: Playlist[] = [
  {
    slug: "wanderers",
    name: "Wanderers",
    spotifyPlaylistId: "4ZGmFH61GpjIvYvzk70K1k",
  },
  {
    slug: "orpheo-looks-back",
    name: "Orpheo Looks Back",
    spotifyPlaylistId: "5EVp644Ux5D3yQNhQWvNJx",
  },
  {
    slug: "apotheosis",
    name: "Apotheosis",
    spotifyPlaylistId: "56nr0wWzP0I67cFVzI9w2y",
  },
  {
    slug: "catabasis",
    name: "Catabasis",
    spotifyPlaylistId: "4hfe09hZf7XbaTMshbugAi",
  },
  {
    slug: "perambulations",
    name: "Perambulations",
    spotifyPlaylistId: "63wN0tDYwkunOyipHQyDgA",
  },
  {
    slug: "antechamber",
    name: "Antechamber",
    spotifyPlaylistId: "6ov76cdkO3YBmjzX3y1tUr",
  },
]
