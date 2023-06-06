import { BiBuilding } from "react-icons/bi";
import { MdLocationOn, MdOutlineCalendarMonth } from "react-icons/md";

interface ExperienceProps {
  title?: string;
  institute?: string;
  location?: string;
  type?: string;
  date?: string;
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  institute,
  location,
  type,
  date,
}) => {
  return (
    <div className="flex flex-col border-b-2 pb-10 md:flex-row justify-between items-center py-6 text-xs font-medium text-slate-600">
      <div className="text-center md:text-left">
        <p className="text-2xl md:text-xl font-normal my-4">{title}</p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-x-3">
          <div className="flex items-center gap-x-1">
            <BiBuilding className="w-4" />
            <p className="text-base md:text-xs">{institute}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <MdLocationOn className="w-4" />
            <p className="text-base md:text-xs">{location}</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 md:mt-0 justify-center">
        <p className="font-semibold rounded-full py-3 px-6 bg-green-200 text-green-950 my-4 text-center">
          {type}
        </p>
        <div className="flex items-center gap-x-1">
          <MdOutlineCalendarMonth className="w-4" />
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
