import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const imageVariant = {
  hidden: { y: "10vh", opacity: 0, zIndex: -1 },
  visible: {
    y: 0,
    opacity: 1,
    zIndex: 0,
    transition: { delay: 0.7, type: "spring" },
  },
};

const h1Variants = {
  hidden: { y: "10vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5, type: "spring" },
  },
};

const pVariants = {
  hidden: { y: "10vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: .7, type: "spring" },
  },
};

const ptwoVariants = {
  hidden: { y: "10vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1.1, type: "spring" },
  },
};

const ProjectBenefit = () => {
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef);
  const imageControls = useAnimation();

  const h1Ref = useRef(null);
  const h1InView = useInView(h1Ref);
  const h1Controls = useAnimation();

  const pRef = useRef(null);
  const pInView = useInView(pRef);
  const pControls = useAnimation();

  const ptwoRef = useRef(null);
  const ptwoInView = useInView(ptwoRef);
  const ptwoControls = useAnimation();

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

  useEffect(() => {
    if (pInView) {
      pControls.start("visible");
    }
  }, [pInView, pControls]);

  useEffect(() => {
    if (ptwoInView) {
      ptwoControls.start("visible");
    }
  }, [ptwoInView, pControls]);

  return (
    <div
      id="benefits"
      className="p-5 md:p-10 lg:px-14 lg:py-4 flex flex-col md:flex-row "
    >
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate={imageControls}
        ref={imageRef}
        className="md:w-1/2 order-2 md:order-1"
      >
        <img
          src="./images/lady.png"
          alt="lady"
          className="object-contain w-[100%] h-[100%] block"
        />
      </motion.div>
      <div className="md:w-1/2 md:p-8 flex flex-col mb-3 md:mb-0 order-1 md:order-2">
        <motion.h1
          variants={h1Variants}
          initial="hidden"
          animate={h1Controls}
          ref={h1Ref}
          className="text-[25px] sm:text-[30px]  font-bold  text-[#662E91] text-center md:text-left"
        >
          Program Benefits
        </motion.h1>

        <div className="flex flex-col items-center md:items-start gap-3 mt-3 md:mt-0">
          <motion.div
            variants={pVariants}
            initial="hidden"
            animate={pControls}
            ref={pRef}
            className="flex flex-col"
          >
            <div className="group flex gap-2 items-center">
              <FaCheckCircle className="text-[#662E91] text-lg -mt-1" />
              <p className="font-semibold text-[#662E91] group-hover:underline">
                Enhanced Employability
              </p>
            </div>
            <p className="self-center text-sm md:text-xs lg:text-sm pl-7 text-justify">
              Participants will develop a strong foundation of employability
              skills, making them highly desirable candidates in the job market
            </p>
          </motion.div>

          <motion.div
            variants={pVariants}
            initial="hidden"
            animate={pControls}
            ref={pRef}
            className="flex flex-col"
          >
            <div className="group flex gap-2 items-center">
              <FaCheckCircle className="text-[#662E91] text-lg -mt-1" />
              <p className="font-semibold text-[#662E91] group-hover:underline">
                Entrepreneurial Mindset
              </p>
            </div>
            <p className="self-center text-sm md:text-xs lg:text-sm pl-7 text-justify">
              The program cultivates an entrepreneurial mindset, equipping
              participants with the skills and knowledge needed to identify and
              pursue entrepreneurial opportunities
            </p>
          </motion.div>

          <motion.div
            variants={ptwoVariants}
            initial="hidden"
            animate={ptwoControls}
            ref={ptwoRef}
            className="flex flex-col"
          >
            <div className="group flex gap-2 items-center">
              <FaCheckCircle className="text-[#662E91] text-lg -mt-1" />
              <p className="font-semibold text-[#662E91] group-hover:underline">
                Mentorship and Guidance
              </p>
            </div>
            <p className="self-center text-sm md:text-xs lg:text-sm pl-7 text-justify">
              Through virtual mentorship, participants will receive guidance and
              support from experienced professionals in their chosen fields
            </p>
          </motion.div>

          <motion.div
            variants={ptwoVariants}
            initial="hidden"
            animate={ptwoControls}
            ref={ptwoRef}
            className="flex flex-col"
          >
            <div className="group flex gap-2 items-center">
              <FaCheckCircle className="text-[#662E91] text-lg -mt-1" />
              <p className="font-semibold text-[#662E91] group-hover:underline">
                Practical Experience and Networking
              </p>
            </div>
            <p className="self-center text-sm md:text-xs lg:text-sm pl-7 text-justify">
              The internship program offers participants access and exposure to
              potential employers and wider network
            </p>
          </motion.div>
          {/* <div className="flex  gap-4">
            <FaCheckCircle className="text-[#662E91] text-xl" />
            <p className="self-center font-medium">Benefit item</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectBenefit;
