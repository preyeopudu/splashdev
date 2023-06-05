import Project from "../common/Project";

function ProjectSection() {
  return (
    <div className="py-5 md:py-0 font-bold flex flex-col">
      <p className="text-splash-purple text-center text-xl md:text-3xl lg:text-5xl">
        Projects
      </p>
      <p className="text-center font-normal text-slate-500 my-2 md:text-lg">
        Top projects I've built
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 mt-20">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default ProjectSection;
