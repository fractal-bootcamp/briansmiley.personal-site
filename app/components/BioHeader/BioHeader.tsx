import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import IconLink from "./IconLink"
import { IconLinkType } from "../../lib/types"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Link } from "@remix-run/react"
import { InfoIcon } from "lucide-react"
import Info from "./Info"
const IconLinks: IconLinkType[] = [
  {
    label: "GitHub",
    icon: faGithub,
    url: "https://github.com/briansmiley",
  },
  {
    label: "Twitter",
    icon: faXTwitter,
    url: "https://www.x.com/binarysmile",
  },
  {
    label: "LinkedIn",
    icon: faLinkedin,
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
          <Popover>
            <PopoverTrigger>
              <InfoIcon className="size-6 text-midblue hover:text-darkblue" />
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
