import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, delay } from "framer-motion";

const wrapperVariants = {
  hidden: { rotate: 540, opacity: 0 },
  visible: { rotate: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } },
};

const Register = () => {
  const wrapperRef = useRef(null);
  const wrapperInView = useInView(wrapperRef);
  const wrapperControls = useAnimation();

  useEffect(() => {
    if (wrapperInView) {
      wrapperControls.start("visible");
    }
  }, [wrapperInView, wrapperControls]);

  return (
    <div
      id="register"
      className="p-5 md:p-10 lg:px-14 lg:py-4 h-[70vh] flex items-center justify-center bg-[#662E91]"
    >
      <motion.div
        variants={wrapperVariants}
        initial="hidden"
        animate={wrapperControls}
        ref={wrapperRef}
        className="flex flex-col gap-6 items-center justify-center w-[700px]"
      >
        <h1 className="text-[25px] sm:text-[30px]  font-bold text-center text-[#fff]">
          Register Now To Participate
        </h1>

        <p className="text-white md:text-lg text-center font-bold">
          Join thousands of other youths who are taking charge of their future.
        </p>

        <button className="text-[#662E91] bg-[#fff] w-1/2 outline-none p-2 text-lg font-semibold rounded-full hover:scale-90 transition-all duration-500">
          Register Now
        </button>
      </motion.div>
    </div>
  );
};

export default Register;
