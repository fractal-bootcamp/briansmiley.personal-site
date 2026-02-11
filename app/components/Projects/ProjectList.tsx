import { ProjectType } from "~/lib/types"
import { useBreakpoint } from "use-breakpoint"
import { BREAKPOINTS } from "~/lib/data"
import ProjectThumbnail2 from "./ProjectThumbnail2"

type ProjectListProps = {
  projects: ProjectType[]
}
export default function ProjectList({ projects }: ProjectListProps) {
  const { breakpoint } = useBreakpoint(BREAKPOINTS)
  const basis = (() => {
    switch (breakpoint) {
      case "mobile":
        return 1
      case "tablet":
        return 2
      default:
        return 3
    }
  })()
  return (
    <div className="flex flex-row flex-wrap justify-start">
      {projects.map((project) => (
        <ProjectThumbnail2
          key={project.title}
          project={project}
          basis={basis}
        />
      ))}
    </div>
  )
}
