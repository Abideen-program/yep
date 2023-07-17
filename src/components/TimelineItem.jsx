import React from "react";

const TimelineItem = ({ icon, date, action }) => {
  return (
    <div className="group flex items-center gap-4 rounded-md bg-[#f5f9fd] border border-[#662E91] px-2 py-1 relative hover:z-10 before:absolute hover:before:bg-[#662E91] before:w-full before:h-full before:top-0 before:right-0 before:rounded-md before:-z-10 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-500 before:ease-in-out before:origin-left">
      <div className="group-hover:bg-white h-[50px] w-[50px]  bg-[#662E91] flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-[#662E91] group-hover:text-white text-lg font-medium">
          {date}
        </p>
        <p className=" group-hover:text-white">{action}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
