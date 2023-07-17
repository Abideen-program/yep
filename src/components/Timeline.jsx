import { MdOutlineDateRange } from "react-icons/md";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="p-5 md:p-10 lg:px-14 lg:py-4 block md:flex items-center gap-3">
      <div className="w-full lg:w-1/2 md:p-4 flex flex-col gap-2 mb-3 md:mb-0">
        <h1 className="text-[25px] sm:text-[30px] font-bold  text-[#662E91]">
          Program Timeline
        </h1>
        <TimelineItem
          icon={
            <MdOutlineDateRange className="text-white text-2xl group-hover:text-[#662E91]" />
          }
          date={"August 1st"}
          action={"Application Opens"}
        />
        <TimelineItem
          icon={
            <MdOutlineDateRange className="text-white text-2xl group-hover:text-[#662E91]" />
          }
          date={"August 15th"}
          action={"Application Closes"}
        />
        <TimelineItem
          icon={
            <MdOutlineDateRange className="text-white text-2xl group-hover:text-[#662E91]" />
          }
          date={"August 25th"}
          action={"Participants Notified"}
        />
        <TimelineItem
          icon={
            <MdOutlineDateRange className="text-white text-2xl group-hover:text-[#662E91]" />
          }
          date={"September 7th"}
          action={"Program Commences"}
        />
      </div>

      <div className=" lg:h-full lg:w-1/2">
        <img
          src="./images/man.png"
          alt="lady"
          className="object-contain w-full h-full block"
        />
      </div>
    </div>
  );
};

export default Timeline;
