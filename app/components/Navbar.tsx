import { Link } from "@remix-run/react";
import {
  faLinkedin,
  faGithub,
  IconDefinition,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type NavBarItemProps = {
  label: string;
  icon?: IconDefinition;
  url: string;
  key: string;
  internal: boolean;
};
function NavBarLink({
  label,
  url,
  icon,
  key,
  internal = true
}: NavBarItemProps) {
  const iconElement = icon ? (
    <FontAwesomeIcon icon={icon} className="h-4 w-4" />
  ) : null;
  return (
    <li
      key={key}
      className="flex text-darkblue items-center text-base md:text-lg lg:text-xl hover:bg-slate-300  w-fit h-full px-2 py-1 md:px-4 transition-all duration-300"
    >
      {internal ? (
        <Link to={url}>{label}</Link>
      ) : (
        <a href={url} rel="noopener noreferrer" target="_blank">
          {icon ? iconElement : label}
        </a>
      )}
    </li>
  );
}
const links = [
  {
    label: "Home",
    url: "/",
    internal: true
  },
  {
    label: "About",
    url: "/about",
    internal: true
  },
  {
    label: "Projects",
    url: "/projects",
    internal: true
  }
];
const IconLinks = [
  {
    label: "X",
    icon: faXTwitter,
    url: "https://www.x.com/binarysmile",
    internal: false
  },
  {
    label: "GitHub",
    icon: faGithub,
    url: "https://github.com/briansmiley",
    internal: false
  },
  {
    label: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/brian-smiley-1289a6121/",
    internal: false
  }
];
export default function Navbar() {
  return (
    <header className="h-12 border-b-2 border-clay ">
      <nav className="h-full flex justify-between px-2 ">
        <ul className="font-semibold underline flex items-center justify-between overflow-x-auto h-full">
          {links.map((link, idx) => (
            <NavBarLink key={String(idx)} {...link} />
          ))}
        </ul>
        <ul className="flex items-center gap-2 md:gap-4 lg:gap-6 h-full transition-all duration-300">
          {IconLinks.map((link, idx) => (
            <a
              key={String(idx)}
              className="text-midblue hover:text-darkblue"
              href={link.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={link.icon}
                className=" h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 transition-all duration-300"
              />
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
}
