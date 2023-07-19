import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const wrapperVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5, when: "beforeChildren" },
  },
};

const headerVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.5, type: "spring" } },
};

const pOneVariants = {
  hidden: { x: "-10vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay: 1, type: "spring" } },
};

const pTwoVariants = {
  hidden: { x: "10vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay: 1.2, type: "spring" } },
};

const Overview = () => {
  const wrapper = useRef(null);
  const header = useRef(null);
  const pOne = useRef(null);
  const pTwo = useRef(null);

  const wrapperInView = useInView(wrapper);
  const headerInView = useInView(header);
  const pOneInView = useInView(pOne);
  const pTwoInView = useInView(pTwo);

  const wrapperControl = useAnimation();
  const headerControl = useAnimation();
  const pOneControl = useAnimation();
  const pTwoControl = useAnimation();

  useEffect(() => {
    if (wrapperInView) {
      wrapperControl.start("visible");
    }
  }, [wrapperControl, wrapperInView]);

  useEffect(() => {
    if (headerInView) {
      headerControl.start("visible");
    }
  }, [headerControl, headerInView]);

  useEffect(() => {
    if (pOneInView) {
      pOneControl.start("visible");
    }
  }, [pOneControl, pOneInView]);

  useEffect(() => {
    if (pTwoInView) {
      pTwoControl.start("visible");
    }
  }, [pTwoControl, pTwoInView]);

  return (
    <motion.div
      variants={wrapperVariants}
      initial="hidden"
      animate={wrapperControl}
      ref={wrapper}
      id="overviews"
      className="w-100 lg:w-[800px] flex flex-col items-center gap-4 p-3 mx-auto"
    >
      <motion.h1
        variants={headerVariants}
        initial="hidden"
        animate={headerControl}
        ref={header}
        className="text-[25px] sm:text-[30px]  font-bold text-center text-[#662E91]"
      >
        Program Overview
      </motion.h1>

      <motion.p
        variants={pOneVariants}
        initial="hidden"
        animate={pOneControl}
        ref={pOne}
        className="text-center text-sm md:text-base"
      >
        The Young Executive Program is a dynamic and intensive 3-months learning
        experience designed to equip young graduates with the skills and
        knowledge necessary to thrive in today's workplace. Consisting of four
        comprehensive modules, this program offers a unique and transformative
        journey that prepares participants for the challenges and opportunities
        they will encounter in their professional lives.
      </motion.p>

      <motion.p
        variants={pTwoVariants}
        initial="hidden"
        animate={pTwoControl}
        ref={pTwo}
        className="text-center text-sm md:text-base"
      >
        The YEP is a flagship employability program by{" "}
        <strong>Bet9ja Foundation</strong>, an initiative to tackle the high
        rate of unemployment amongst Nigerian youths and promote greater
        economic empowerment for young people in Local communities focused on
        three pillars: Enterprenurship, Employability and Education.
      </motion.p>
    </motion.div>
  );
};

export default Overview;
