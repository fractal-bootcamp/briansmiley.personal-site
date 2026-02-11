import ProjectList from "./ProjectList"
import {
  offlineProjects,
  otherWebProjects,
  p5Projects,
  reactProjects,
} from "./projectsData"

export default function Projects() {
  const projects = [...reactProjects, ...otherWebProjects, ...p5Projects]
  const offProjects = [...offlineProjects]
  return (
    <div className="flex h-full w-full flex-col items-center overflow-y-auto py-5">
      <div className="flex flex-col gap-5 px-2">
        <section className="flex flex-col">
          <h2 className="px-2 text-xl font-semibold md:text-2xl">Web</h2>
          <ProjectList projects={projects} />
        </section>
        <section className="flex flex-col">
          <h2 className="px-2 text-xl font-semibold md:text-2xl">Other</h2>
          <ProjectList projects={offProjects} />
        </section>
      </div>
    </div>
  )
}
