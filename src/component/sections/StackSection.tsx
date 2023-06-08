function StackSection() {
  return (
    <div className="py-22 md:py-28 font-bold flex flex-col items-center">
      <p className="text-splash-purple text-center text-xl md:text-3xl lg:text-5xl">
        My Tech Stack
      </p>
      <p className="text-center font-normal text-slate-500 my-2 md:text-lg">
        Technologies I’ve been working with recently
      </p>
      <div className="px-10 md:px-0 mt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 md:gap-x-24 gap-y-5">
        <img
          src="./images/icons/html5.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="HTML5"
        />
        <img
          src="./images/icons/css.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="CSS"
        />
        <img
          src="./images/icons/javascript.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="JavaScript"
        />
        <img
          src="./images/icons/typescript.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="TypeScript"
        />
        <img
          src="./images/icons/react.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="React"
        />
        <img
          src="./images/icons/expo.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="Expo"
        />
        <img
          src="./images/icons/tailwind-css.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="Tailwind CSS"
        />
        <img
          src="./images/icons/react-query.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="React Query"
        />
        <img
          src="./images/icons/nodejs.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="Node.js"
        />
        <img
          src="./images/icons/firebase.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="Firebase"
        />
        <img
          src="./images/icons/sanity.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="Sanity"
        />
        <img
          src="./images/icons/redux.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="Redux"
        />
        <img
          src="./images/icons/git.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="Git"
        />
        <img
          src="./images/icons/github.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="GitHub"
        />
        <img
          src="./images/icons/visual-studio.svg"
          className="w-16 h-16 lg:w-28 lg:h-28"
          alt="Visual Studio"
        />
      </div>
    </div>
  );
}

export default StackSection;
