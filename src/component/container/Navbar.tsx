import React, { useState } from "react";
import { FaBars, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="py-5 ">
      {/* Desktop Navbar */}
      <div className="lg:flex flex-row justify-between items-center hidden">
        <div className="flex flex-1">
          <img src="../../public/images/logo.png" className="h-16" alt="Logo" />
        </div>
        <div className="flex flex-1 justify-evenly gap-x-2 ">
          <p className="whitespace-nowrap">Home</p>
          <p className="whitespace-nowrap">About</p>
          <p className="whitespace-nowrap">Tech Stack</p>
          <p className="whitespace-nowrap">Projects</p>
          <p>Contact</p>
          <div className="flex gap-x-5">
            <FaGithub className="h-6 w-6" />
            <FaTwitter className="h-6 w-6" />
            <FaLinkedin className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden shadow-md rounded-sm  pt-3 px-3">
        <div className="flex flex-1 justify-between items-center py-3">
          <img src="../../public/images/logo.png" className="h-10" alt="Logo" />
          <div
            className="border rounded-md border-gray-400 px-3 py-1"
            onClick={() => setToggle(!toggle)}
          >
            <FaBars className="h-6 w-6" />
          </div>
        </div>

        <div
          className={`  flex-1 z-40 overflow-hidden flex flex-col  duration-700 ${
            !toggle ? "h-0" : "h-1/2"
          }  `}
        >
          <p className="text-md font-medium py-3">Home</p>
          <p className="text-md font-medium py-3">About</p>
          <p className="text-md font-medium py-3">Tech Stack</p>
          <p className="text-md font-medium py-3">Projects</p>
          <p className="text-md font-medium py-3">Contact</p>
          <div className=" gap-x-3.5 flex flex-row py-5 justify-evenly">
            <FaGithub className="h-6 w-6" />
            <FaTwitter className="h-6 w-6" />
            <FaLinkedin className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
