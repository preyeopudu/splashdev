import { FaLink, FaGithub } from "react-icons/fa";
function Project() {
  return (
    <div className="shadow-2xl rounded-lg   pb-8 bg-white">
      <img
        src="./images/snap.png"
        className="w-full object-cover object-top h-56"
        alt="Snap Image"
      />
      <div className="p-7">
        <p className="text-lg lg:text-3xl font-medium truncate">
          Project Title goes here
        </p>
        <p className="font-light text-base md:text-lg py-7">
          This is a sample project description. Random things are here in the
          description. This is a sample project lorem ipsum generator for dummy
          content.
        </p>
        <p className="font-normal text-sm md:text-base">
          Tech Stack: Expo, React Native, React Query
        </p>
        <div className="flex justify-between py-7">
          <div className="flex items-center gap-x-1">
            <FaLink className="w-4 h-4" />
            <p className="text-base font-normal">Live Preview</p>
          </div>
          <div className="flex items-center gap-x-1">
            <FaGithub className="w-4 h-4" />
            <p className="text-base font-normal">View Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
