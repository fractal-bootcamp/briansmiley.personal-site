import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6"
import { BsSoundwave } from "react-icons/bs"
import { LuInfo } from "react-icons/lu"
import IconLink from "./IconLink"
import { IconLinkType } from "../../lib/types"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Link } from "@remix-run/react"
import Info from "./Info"
const IconLinks: IconLinkType[] = [
  {
    label: "GitHub",
    icon: FaGithub,
    url: "https://github.com/briansmiley",
  },
  {
    label: "Twitter",
    icon: FaXTwitter,
    url: "https://www.x.com/binarysmile",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/brian-smiley-1289a6121/",
  },
]
export default function BioHeader() {
  return (
    <div className="w-[50%] border-b-2 border-darkblue border-opacity-20 pb-5 dark:border-midblue">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold">
          <Link to="/">Brian</Link> <Link to="/soundwaves">S</Link>miley
        </h1>
        <div className="flex items-start gap-3">
          {IconLinks.map((iconLink) => (
            <IconLink key={iconLink.url} iconLink={iconLink} size={24} />
          ))}
          <Link to="/soundwaves" className="text-midblue hover:text-darkblue" title="Soundwaves">
            <BsSoundwave className="size-6" />
          </Link>
          <Popover>
            <PopoverTrigger>
              <LuInfo className="size-6 text-midblue hover:text-darkblue" />
            </PopoverTrigger>
            <PopoverContent align="start">
              <Info />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}
