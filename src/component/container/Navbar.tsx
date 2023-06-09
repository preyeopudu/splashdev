import { useState } from "react";
import { FaBars, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { To, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleChange = (destination: To) => {
    navigate(destination);
    setToggle(false);
  };
  return (
    <nav className="py-5 ">
      {/* Desktop Navbar */}
      <div className="lg:flex flex-row justify-between items-center hidden">
        <div className="flex flex-1">
          <img src="../../public/images/logo.png" className="h-16" alt="Logo" />
        </div>
        <div className="flex flex-1 justify-evenly gap-x-2 ">
          <p
            className="whitespace-nowrap hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <p
            className="whitespace-nowrap hover:cursor-pointer"
            onClick={() => navigate("/about")}
          >
            About
          </p>
          <p
            className="whitespace-nowrap hover:cursor-pointer"
            onClick={() => navigate("/stack")}
          >
            Tech Stack
          </p>
          <p
            className="whitespace-nowrap hover:cursor-pointer"
            onClick={() => handleChange("/projects")}
          >
            Projects
          </p>
          <p
            className="whitespace-nowrap hover:cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Contact
          </p>
          <div className="flex gap-x-5">
            <a href="https://github.com/preyeopudu" target="blank">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/splash__dev" target="blank">
              {" "}
              <FaTwitter className="h-6 w-6" />
            </a>

            <a href="https://www.linkedin.com/in/opudupreye/" target="blank">
              {" "}
              <FaLinkedin className="h-6 w-6" />
            </a>
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
          <p
            className="text-md font-medium py-3"
            onClick={() => handleChange("/")}
          >
            Home
          </p>
          <p
            className="text-md font-medium py-3"
            onClick={() => handleChange("/about")}
          >
            About
          </p>
          <p
            className="text-md font-medium py-3"
            onClick={() => handleChange("/stack")}
          >
            Tech Stack
          </p>
          <p
            className="text-md font-medium py-3"
            onClick={() => handleChange("/projects")}
          >
            Projects
          </p>
          <p
            className="text-md font-medium py-3"
            onClick={() => handleChange("/contact")}
          >
            Contact
          </p>
          <div className=" gap-x-3.5 flex flex-row py-5 justify-evenly">
            <a href="https://github.com/preyeopudu" target="blank">
              {" "}
              <FaGithub className="h-6 w-6" />
            </a>

            <a href="https://twitter.com/splash__dev" target="blank">
              {" "}
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/opudupreye/" target="blank">
              {" "}
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
