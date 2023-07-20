import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import { clx } from "../utils/clx";

const wrapperVariants = {
  hidden: { y: "10vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
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

const swiperSlide = clx(
  "flex flex-col justify-center gap-2 rounded-lg text-lg font-bold text-white p-2"
);

const Participants = () => {
  const wrapperRef = useRef(null);
  const wrapperInView = useInView(wrapperRef);
  const wrapperControls = useAnimation();

  const h1Ref = useRef(null);
  const h1InView = useInView(h1Ref);
  const h1Controls = useAnimation();

  useEffect(() => {
    if (wrapperInView) {
      wrapperControls.start("visible");
    }
  }, [wrapperInView, wrapperControls]);

  useEffect(() => {
    if (h1InView) {
      h1Controls.start("visible");
    }
  }, [h1InView, h1Controls]);

  return (
    <div id="participants" className="p-5 md:p-10 lg:px-14 lg:py-4">
      <motion.h1
        variants={h1Variants}
        initial="hidden"
        animate={h1Controls}
        ref={h1Ref}
        className="text-[25px] sm:text-[30px]  font-bold leading-[70px] text-center text-[#662E91]"
      >
        Program Participants
      </motion.h1>

      <motion.div
        variants={wrapperVariants}
        initial="hidden"
        animate={wrapperControls}
        ref={wrapperRef}
        className="w-100 flex items-center justify-center"
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[220px] h-[300px] md:w-[240px] md:h-[320px]"
        >
          <SwiperSlide className={`${swiperSlide} bg-[#CE1111]`}>
            <img
              src="./images/man1.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#008CFF]`}>
            {" "}
            <img
              src="./images/man2.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#0AB86F]`}>
            <img
              src="./images/man3.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#D37A07]`}>
            <img
              src="./images/man1.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#76A30C]`}>
            <img
              src="./images/man2.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#B40A2F]`}>
            <img
              src="./images/man3.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#236313]`}>
            <img
              src="./images/man1.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#0044FF]`}>
            <img
              src="./images/man2.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#DA0CDA]`}>
            <img
              src="./images/man3.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Participants;
