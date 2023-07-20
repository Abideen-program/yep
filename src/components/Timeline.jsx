import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import { MdOutlineDateRange } from "react-icons/md";
import TimelineItem from "./TimelineItem";

const imageVariant = {
  hidden: { x: "10vw", opacity: 0, zIndex: -1 },
  visible: {
    x: 0,
    opacity: 1,
    zIndex: 0,
    transition: { delay: 0.7, type: "spring" },
  },
};

const h1Variants = {
  hidden: { x: "-10vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, type: "spring" },
  },
};

const Timeline = () => {
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef);
  const imageControls = useAnimation();

  const h1Ref = useRef(null);
  const h1InView = useInView(h1Ref);
  const h1Controls = useAnimation();

  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible");
    }
  }, [imageInView, imageControls]);

  useEffect(() => {
    if (h1InView) {
      h1Controls.start("visible");
    }
  }, [h1InView, h1Controls]);

  return (
    <div className="p-5 md:p-10 lg:px-14 lg:py-4 block md:flex items-center gap-3">
      <div className="w-full lg:w-1/2 md:p-4 flex flex-col gap-2 mb-3 md:mb-0">
        <motion.h1
          variants={h1Variants}
          initial="hidden"
          animate={h1Controls}
          ref={h1Ref}
          className="text-[25px] sm:text-[30px] font-bold  text-[#662E91]"
        >
          Program Timeline
        </motion.h1>
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

      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate={imageControls}
        ref={imageRef}
        className=" lg:h-full lg:w-1/2"
      >
        <img
          src="./images/man.png"
          alt="lady"
          className="object-contain w-full h-full block"
        />
      </motion.div>
    </div>
  );
};

export default Timeline;
