import { motion } from "framer-motion";

const wrapperVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const h1Variants = {
  hidden: { x: "100vw" },
  visible: { x: 0, transition: { delay: 0.5, duration: 0.5 } },
};

const h2Variants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { delay: 0.7, duration: 0.5 } },
};

const buttonVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { delay: 1, type: "spring", stiffness: 120 } },
};

const Hero = () => {
  return (
    <div className="w-100 h-[100vh] bg-heroDrop relative">
      <img
        src="./images/hero.png"
        alt="heroImage"
        className="absolute -z-50 object-cover md:object-contain w-[100%] h-[100%]"
      />
      <motion.div
        variants={wrapperVariants}
        initial="hidden"
        animate="visible"
        className="h-[100vh] w-100 flex flex-row items-center justify-center"
      >
        <div className="w-[800px] flex flex-col items-center gap-4 p-3 translate-y-6">
          <motion.h1
            variants={h1Variants}
            className="text-[25px] sm:text-[30px] md:text-[50px] text-white font-bold leading-[70px] text-center"
          >
            Youth Executive Program
          </motion.h1>

          <motion.h2
            variants={h2Variants}
            className="text-white text-center text-sm md:text-base"
          >
            Equipping Aspiring Youths with the Skills, Knowledge, and Network to
            Adapt to the Changing Business Environment, Innovate, and Scale
            Their Businesses towards Promoting Youth Employment and Economic
            Growth
          </motion.h2>

          <motion.div variants={buttonVariants}>
            <button className="w-auto self-start bg-[#328EDE] text-white py-3 px-7 rounded-[4px] outline-none hover:bg-[#10DCE8] transition-all duration-300 shadow-3xl shadow-[#10DCE8] hover:shadow-none">
              Register Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
