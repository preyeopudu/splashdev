import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="  py-10 md:mt-6">
      <div className="flex  flex-col md:flex-row md:justify-between md:items-center">
        <img className="h-10  w-10 my-3 " src="./images/logo.png" />
        <div className="md:flex md:justify-between md:items-center gap-x-5">
          <p className=" text-splash-purple text-lg md:text-base">
            +234 802124 1760
          </p>
          <p className=" text-splash-purple text-lg md:text-base">
            preyeopudu@gmail.com
          </p>
          <div className="flex gap-4 py-5 items-center">
            <FaGithub className=" h-5 w-5" />
            <FaTwitter className=" h-5 w-5" />
            <FaLinkedin className=" h-5 w-5" />
          </div>
        </div>
      </div>

      <div className=" border-t-2 my-4 py-6 md:flex md:items-center md:justify-between">
        <div className="md:flex md:justify-between md:gap-x-3 lg:gap-x-8 md:items-center">
          <p className=" text-splash-purple text-lg md:text-base">Home</p>
          <p className=" text-splash-purple text-lg md:text-base">About</p>
          <p className=" text-splash-purple text-lg md:text-base">
            Technologies
          </p>
          <p className=" text-splash-purple text-lg md:text-base">Projects</p>
          <p className=" text-splash-purple text-lg md:text-base">Contact</p>
        </div>
        <div>
          <p className=" text-lg text-gray-500 my-3 font-normal ">
            built by{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-splash-dark-purple to-splash-light-purple">
              Splashdev{" "}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
