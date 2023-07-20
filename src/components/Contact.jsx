import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, delay } from "framer-motion";

const wrapperVariants = {
  hidden: { rotateZ: 180, opacity: 0 },
  visible: { rotateZ: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } },
};

const Contact = () => {
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
      className="p-5 mb-1 md:p-10 lg:px-14 lg:py-4  flex justify-center"
    >
      <div className="flex flex-col gap-6 items-center justify-center w-[700px]">
        <h1 className="text-[25px] sm:text-[30px]  font-bold text-center text-[#662E91]">
          Contact Us
        </h1>

        <p className="md:text-lg text-center">
          Send us an enquiry message or follow us on social media
        </p>

        <div className="w-full md:w-[70%]">
          <form>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="p-2 w-full border border-[#662E91] outline-0 rounded-md"
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="p-2 w-full border border-[#662E91] outline-0 rounded-md"
                required
              />

              <textarea
                cols="20"
                rows="5"
                className="p-2 w-full border border-[#662E91] outline-0 rounded-md"
                required
                placeholder="Message"
              ></textarea>
              <button className="bg-[#662E91] text-[#fff] w-auto outline-none px-7 py-2 text-lg font-semibold rounded-full">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
