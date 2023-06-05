import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";

interface ProjectProps {
  name?: string;
  image?: string;
  description?: string;
  link?: string;
  stack?: string;
  github?: string;
}
const Project: React.FC<ProjectProps> = ({
  name,
  image,
  description,
  link,
  stack,
  github,
}) => {
  return (
    <div className=" hover:shadow-2xl shadow-xl rounded-lg   p bg-white  ">
      <img
        src={image}
        className="w-full object-cover object-top h-56"
        alt="Snap Image"
      />
      <div className="p-7">
        <p className="text-lg lg:text-3xl font-medium truncate">{name}</p>
        <p className="font-light text-base md:text-lg my-7 h-36  line-clamp-3 ">
          {description}
        </p>
        <p className="font-normal text-sm md:text-base">Tech Stack: {stack}</p>
        <div className="flex justify-between py-7">
          <a href={link} className="flex items-center gap-x-1" target="blank">
            <FaLink className="w-4 h-4" />
            <p className="text-base font-normal underline">Live Preview</p>
          </a>
          {github && (
            <a
              href={github}
              className="flex items-center gap-x-1"
              target="blank"
            >
              <FaGithub className="w-4 h-4" />
              <p className="text-base font-normal underline">View Code</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
