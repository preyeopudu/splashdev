import { projects } from "../../utils/constants/projects";
import Project from "../common/Project";

function ProjectSection() {
  return (
    <div className="py-5 md:py-10 font-bold flex flex-col">
      <p className="text-splash-purple text-center text-xl md:text-3xl lg:text-5xl">
        Projects
      </p>
      <p className="text-center font-normal text-slate-500 text-xl my-2 md:text-lg">
        Top projects I've worked on (web and mobile)
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-20 mt-20">
        {projects.map((project) => (
          <Project
            name={project.name}
            image={project.image}
            stack={project.stack}
            link={project.link}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
