import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const pVariants = {
  hidden: { y: "10vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.7, type: "spring" },
  },
};

const TimelineItem = ({ icon, date, action }) => {
  const pRef = useRef(null);
  const pInView = useInView(pRef);
  const pControls = useAnimation();

  useEffect(() => {
    if (pInView) {
      pControls.start("visible");
    }
  }, [pInView, pControls]);

  return (
    <motion.div
      variants={pVariants}
      initial="hidden"
      animate={pControls}
      ref={pRef}
      className="group flex items-center gap-4 rounded-md bg-[#f5f9fd] border border-[#662E91] px-2 py-1 relative hover:z-10 before:absolute hover:before:bg-[#662E91] before:w-full before:h-full before:top-0 before:right-0 before:rounded-md before:-z-10 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-500 before:ease-in-out before:origin-left"
    >
      <div className="group-hover:bg-white h-[50px] w-[50px]  bg-[#662E91] flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-[#662E91] group-hover:text-white text-lg font-medium">
          {date}
        </p>
        <p className=" group-hover:text-white">{action}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
