import roles from "../../utils/constants/roles";
import Experience from "../common/Experience";

function AboutPage() {
  return (
    <div className="flex flex-col-reverse lg:items-start py-16 items-center  lg:flex-row">
      <div className="flex flex-1 flex-col ">
        <div className="my-10">
          <p className="text-splash-purple font-bold text-2xl my-5  text-center md:text-start md:text-3xl lg:text-5xl">
            About me
          </p>
          <p className="text-slate-600 text-lg">
            As an experienced software engineer, I have spent over 2 years
            building both mobile and web applications. I am a quick learner who
            is always eager to take on new challenges and develop new skills. My
            greatest accomplishments include building and launching four
            successful mobile applications on the Google Play store, one of
            which has over 10,000 downloads, and developing a full-stack website
            with over 500 registered users. With my dedication, expertise, and
            passion for technology, I am committed to delivering exceptional
            results and driving innovation in the field of software engineering.
            I look forward to new opportunities to challenge myself, learn, and
            grow as a professional.
          </p>
        </div>

        <div className="my-5">
          <p className=" text-splash-purple font-bold text-2xl my-5  text-center md:text-start md:text-3xl lg:text-5xl ">
            Work Experience
          </p>

          {roles.map((role) => {
            console.log(role);
            return (
              <Experience
                institute={role.institute}
                location={role.location}
                title={role.title}
                date={role.date}
                type={role.type}
              />
            );
          })}
          {/* this roles , create a component for this */}

          {/* ending , just copy */}
        </div>

        <div className="my-5">
          <p className=" text-splash-purple font-bold text-2xl my-5  text-center md:text-start md:text-3xl lg:text-5xl ">
            Education
          </p>
          {/* this roles , create a component for this */}
          <Experience
            institute="Federal University of technolgy Akure"
            date="2017-2022"
            type="full time"
            location="Akure"
            title="Cybersecurity"
          />

          {/* ending , just copy */}
        </div>
      </div>
      <div className="md:justify-end flex py-5 flex-1">
        <img
          src="/images/profile.jpg"
          className=" w-36 h-36 border-transparent bg-gradient-to-t from-splash-dark-purple to-splash-light-purple lg:h-80 lg:w-80  md:h-44 md:w-44 border-4 lg:border-8 object-cover rounded-full"
        />
      </div>
    </div>
  );
}

export default AboutPage;
