import { motion } from "framer-motion";

const logoVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(83, 38, 118)",
    transition: {
      repeat: Infinity,
      duration: 0.5,
    },
  },
};

const PartnersItem = () => {
  return (
    <motion.div
      variants={logoVariants}
      whileHover="hover"
      className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] flex items-center justify-center rounded-full bg-[#102D5E] justify-self-center"
    >
      <p className="font-bold text-lg text-white">LOGO</p>
    </motion.div>
  );
};

export default PartnersItem;
