import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { clx } from "../utils/clx";
import { motion } from "framer-motion";

const linkClass = clx(
  "font-semibold hover:text-[#662E91] transition-all duration-500 ease-out relative before:absolute before:-bottom-[2px] before:left-0 before:w-[100%] before:h-[3px] before:rounded-md before:scale-0 hover:before:scale-50 before:origin-right hover:before:bg-[#662E91]"
);

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hideMenuHandler = () => {
    return setShowMenu(false);
  };

  return (
    <>
      {/* DESKTOP HEADER */}
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="bg-white hidden md:px-10 lg:px-14 py-3 md:flex items-center justify-between fixed right-0 left-0 z-20 border-b-2 border-[#662E91]"
      >
        <div className="w-[30%]">
          <div className="w-[90px]">
            <img
              src="./images/yep.png"
              alt="logo"
              className="object-contain w-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between flex-1">
          <a href="#overviews">
            <p className={linkClass}>Overviews</p>
          </a>

          <a href="#modules">
            <p className={linkClass}>Modules</p>
          </a>

          <a href="#benefits">
            <p className={linkClass}>Benefits</p>
          </a>

          <a href="#participants">
            <p className={linkClass}>Participants</p>
          </a>

          <a href="#details">
            <p className={linkClass}>Details</p>
          </a>

          <a href="#register">
            <p className={linkClass}>Register Now</p>
          </a>
        </div>
      </motion.div>
      {/* MOBILE */}
      <div className="bg-white lg:hidden px-5 md:px-10 lg:px-14 py-3 flex items-center justify-between fixed right-0 left-0 z-20 border-b-2 border-[#662E91]">
        <div className="w-[30%]">
          <div className="w-[90px]">
            <img
              src="./images/yep.png"
              alt="logo"
              className="object-contain w-full"
            />
          </div>
        </div>

        {showMenu && (
          <div className="flex flex-col items-center justify-evenly fixed right-0 top-0 h-[100vh] w-[250px] bg-white border-l border-[#662E91] shadow-lg shadow-[#662E91] ">
            <FaTimes
              className="text-2xl text-[#662E91] cursor-pointer absolute top-3 left-2"
              onClick={hideMenuHandler}
            />
            <a href="#overviews">
              <p className={linkClass} onClick={hideMenuHandler}>
                Overviews
              </p>
            </a>

            <a href="#modules">
              <p className={linkClass} onClick={hideMenuHandler}>
                Modules
              </p>
            </a>

            <a href="#benefits">
              <p className={linkClass} onClick={hideMenuHandler}>
                Benefits
              </p>
            </a>

            <a href="#participants">
              <p className={linkClass} onClick={hideMenuHandler}>
                Participants
              </p>
            </a>

            <a href="#details">
              <p className={linkClass} onClick={hideMenuHandler}>
                Details
              </p>
            </a>

            <a href="#register">
              <p className={linkClass} onClick={hideMenuHandler}>
                Register Now
              </p>
            </a>
          </div>
        )}

        <FaBars
          className="text-2xl text-[#662E91] cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      </div>
    </>
  );
};

export default Header;
