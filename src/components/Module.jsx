import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const h1Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5, type: "spring" },
  },
};

const buttonsVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1, type: "spring" },
  },
};

const psVariants = {
  hidden: { y: "10vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1.2, type: "spring" },
  },
};

const Modules = () => {
  const [filterBy, setFilterBy] = useState("module-one");
  const [pview, setPview] = useState(false);

  const h1Ref = useRef(null);
  const buttonsRef = useRef(null);
  const pRef = useRef(null);

  const h1InView = useInView(h1Ref);
  const buttonsInView = useInView(buttonsRef);
  let pInView = useInView(pRef);

  const h1Controls = useAnimation();
  const buttonsControls = useAnimation();
  const pControls = useAnimation();

  useEffect(() => {
    if (h1InView) {
      h1Controls.start("visible");
    }
  }, [h1InView, h1Controls]);

  useEffect(() => {
    if (buttonsInView) {
      buttonsControls.start("visible");
    }
  }, [buttonsInView, buttonsControls]);

  useEffect(() => {
    if (pInView) {
      pControls.start("visible");
    }
  }, [pInView, pControls]);

  return (
    <div id="modules" className="w-100 mt-10">
      <motion.h1
        variants={h1Variants}
        initial="hidden"
        animate={h1Controls}
        ref={h1Ref}
        className="text-[25px] sm:text-[30px]  font-bold text-center text-[#662E91] mb-2 "
      >
        Program Modules
      </motion.h1>

      <motion.div
        variants={buttonsVariants}
        initial="hidden"
        animate={buttonsControls}
        ref={buttonsRef}
        className="grid grid-cols-2 gap-2 md:flex justify-between mb-3"
      >
        <div
          className={`h-10 md:h-14 md:w-[24%] text-[11px] lg:text-sm text-center flex items-center justify-center ${
            filterBy === "module-one"
              ? "bg-[#662E91] text-white"
              : " outline outline-gray-500"
          } cursor-pointer font-semibold hover:bg-[#662E91] hover:text-white hover:outline-none`}
          onClick={() => {
            setFilterBy("module-one");
            setPview(true);
          }}
        >
          Employability Skills Masterclass
        </div>

        <div
          className={`h-10 md:h-14 md:w-[24%] text-[11px] lg:text-sm text-center flex items-center justify-center ${
            filterBy === "module-two"
              ? "bg-[#662E91] text-white"
              : " outline outline-gray-500"
          } cursor-pointer font-semibold hover:bg-[#662E91] hover:text-white hover:outline-none`}
          onClick={() => setFilterBy("module-two")}
        >
          Entrepreneurship Skills Masterclass
        </div>

        <div
          className={`h-10 md:h-14 md:w-[24%] text-[11px] lg:text-sm text-center flex items-center justify-center ${
            filterBy === "module-three"
              ? "bg-[#662E91] text-white"
              : " outline outline-gray-500"
          } cursor-pointer font-semibold hover:bg-[#662E91] hover:text-white hover:outline-none`}
          onClick={() => setFilterBy("module-three")}
        >
          Virtual Mentorship
        </div>

        <div
          className={`h-10 md:h-14 md:w-[24%] text-[11px] lg:text-sm text-center flex items-center justify-center ${
            filterBy === "module-four"
              ? "bg-[#662E91] text-white"
              : " outline outline-gray-500"
          } cursor-pointer font-semibold hover:bg-[#662E91] hover:text-white hover:outline-none`}
          onClick={() => setFilterBy("module-four")}
        >
          Internship Program
        </div>
      </motion.div>

      {filterBy === "module-one" && !pview && (
        <motion.div
          variants={psVariants}
          initial="hidden"
          animate={pControls}
          ref={pRef}
          className="mt-2 w-100 md:w-[90%] mx-auto border border-[#662E91] p-2 rounded-md"
        >
          <p className="text-justify text-sm">
            This module during the 2-day Masterclass Session focuses on
            developing essential employability skills such as effective
            communication, problem-solving, teamwork, time management, and
            adaptability, to enhance participants' readiness for the workplace.
            This module includes career clinic that covers Free CV Review and
            Assessment Session
          </p>
        </motion.div>
      )}

      {filterBy === "module-one" && pview && (
        <motion.div
          initial={{ y: "10vw", display: "none" }}
          animate={{ y: 0, display: "block" }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mt-2 w-100 md:w-[90%] mx-auto border border-[#662E91] p-2 rounded-md"
        >
          <p className="text-justify text-sm">
            This module during the 2-day Masterclass Session focuses on
            developing essential employability skills such as effective
            communication, problem-solving, teamwork, time management, and
            adaptability, to enhance participants' readiness for the workplace.
            This module includes career clinic that covers Free CV Review and
            Assessment Session
          </p>
        </motion.div>
      )}

      {filterBy === "module-two" && (
        <motion.div
          initial={{ y: "10vw", display: "none" }}
          animate={{ y: 0, display: "block" }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mt-2 w-100 md:w-[90%] mx-auto border border-[#662E91] p-2 rounded-md"
        >
          <p className="text-justify text-sm">
            This module during the 2-day Masterclass Session, Participants will
            acquire the knowledge and skills required to cultivate an
            entrepreneurial mindset, including innovative thinking, business
            planning, market analysis, and risk management, empowering them to
            pursue entrepreneurial opportunities. This module will provide
            selected graduates with Business startup Box ( Registering a
            business, free startup business website and other benefits)
          </p>
        </motion.div>
      )}

      {filterBy === "module-three" && (
        <motion.div
          initial={{ y: "10vw", display: "none" }}
          animate={{ y: 0, display: "block" }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mt-2 w-100 md:w-[90%] mx-auto border border-[#662E91] p-2 rounded-md"
        >
          <p className="text-justify text-sm">
            Through virtual mentorship sessions, participants will have the
            opportunity to connect with experienced professionals who will
            provide guidance, share industry insights, and offer personalized
            advice to support their career development
          </p>
        </motion.div>
      )}

      {filterBy === "module-four" && (
        <motion.div
          initial={{ y: "10vw", display: "none" }}
          animate={{ y: 0, display: "block" }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mt-2 w-100 md:w-[90%] mx-auto border border-[#662E91] p-2 rounded-md"
        >
          <p className="text-justify text-sm">
            This module offers selected participants the chance to apply their
            knowledge and skills in a real-world setting through an internship
            placement, enabling them to gain practical experience, network with
            professionals, and enhance their professional portfolios. Internship
            program will span 4 to 8 weeks depending on internship partner
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Modules;
