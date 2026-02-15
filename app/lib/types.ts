import { IconType } from "react-icons"

export type ProjectType = {
  title: string
  thumbnail: string
  blurb: string
  url: string
  github: string
  icons?: string[]
}

export type IconLinkType = {
  label: string
  icon: IconType
  url: string
}
