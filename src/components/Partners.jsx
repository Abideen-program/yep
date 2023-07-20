import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import PartnersItem from "./PartnersItem";

const wrapperVariants = {
  hidden: { y: "10vw", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.7, type: "spring" },
  },
};

const Partners = () => {
  const wrapperRef = useRef(null);
  const wrapperInView = useInView(wrapperRef);
  const wrapperControls = useAnimation();

  useEffect(() => {
    if (wrapperInView) {
      wrapperControls.start("visible");
    }
  }, [wrapperInView, wrapperControls]);

  return (
    <motion.div
      variants={wrapperVariants}
      initial="hidden"
      animate={wrapperControls}
      ref={wrapperRef}
      className="p-5 md:p-10 lg:px-14 lg:py-4"
    >
      <h1 className="text-[25px] sm:text-[30px]  font-bold leading-[70px] text-center text-[#662E91]">
        Partners & Sponsors
      </h1>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 justify-center">
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
        </div>
      </div>
    </motion.div>
  );
};

export default Partners;
