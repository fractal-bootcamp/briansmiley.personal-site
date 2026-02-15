import { Link } from "@remix-run/react"
import { ProjectType } from "~/lib/types"
import { FaGithub } from "react-icons/fa6"
import FrameworkIcon from "../FrameworkIcon/FrameworkIcon"

type ProjectThumbnail2Props = {
  project: ProjectType
  basis: number
}
export default function ProjectThumbnail2({
  project,
  basis,
}: ProjectThumbnail2Props) {
  return (
    <div
      className="h-[250px] p-2"
      style={{ flexBasis: `calc(100% / ${basis})` }}
    >
      <div className="grid h-full grid-cols-2 gap-2 rounded-md border-2 border-darkblue p-1">
        <div className="flex items-center justify-center">
          <Link
            to={project.url}
            className="relative aspect-square h-full overflow-hidden"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="absolute inset-0 h-full border-2 border-darkblue object-cover"
              src={project.thumbnail}
              alt={project.title}
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between">
              <Link
                to={project.url}
                className="text-lg font-semibold underline lg:text-xl"
                rel="noopener noreferrer"
                target="_blank"
              >
                {project.title}
              </Link>
              <a
                className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm">{project.blurb}</p>
          </div>
          {project.icons && (
            <div className="flex flex-row overflow-hidden">
              {project.icons.map((icon) => (
                <FrameworkIcon
                  icon={icon}
                  key={icon}
                  className={icon === "openscad" ? "p-1" : ""}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
