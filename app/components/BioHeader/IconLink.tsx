import { IconLinkType } from "~/lib/types"

type IconLinkProps = {
  iconLink: IconLinkType
  size?: number
}
export default function IconLink({ iconLink, size = 20 }: IconLinkProps) {
  const { label, icon: Icon, url } = iconLink
  return (
    <a
      className="text-midblue hover:text-darkblue"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      title={label}
    >
      <Icon style={{ height: size, width: size }} />
    </a>
  )
}
