function AboutSection() {
  return (
    <div className="flex py-0 flex-col md:flex-row-reverse items-center md:py-16 lg:py-24 flex-1 justify-between">
      <div className=" md:justify-end flex py-5 flex-1">
        <img
          src="/images/profile.jpg"
          className=" w-48 h-48 border-transparent bg-gradient-to-t from-splash-dark-purple to-splash-light-purple lg:h-80 lg:w-80  md:h-44 md:w-44 border-4 lg:border-8 object-cover rounded-full"
        />
      </div>
      <div className="flex-1 justify-center">
        <p className=" py-4  text-center text-splash-purple font-bold  text-2xl md:text-left md:text-3xl lg lg:text-6xl">
          Hi 👋, I'm{" "}
          <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-splash-dark-purple to-splash-light-purple">
            Opudu Tamarapreye Micheal (splashdev)
          </span>{" "}
          and i engineer solutions 🧠
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
