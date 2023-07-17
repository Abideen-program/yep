import { MdMessage, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="border-t border-[#662E91] p-5 mb-1 md:p-10 lg:px-14 lg:py-4 flex flex-col gap-4 md:flex-row items-start justify-between">
      <div className="flex flex-col gap-2 flex-1">
        <div className="w-[100px]">
          <img
            src="./images/yep.png"
            alt="logo"
            className="object-contain w-full"
          />
        </div>

        <p className="w-full md:w-[90%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>

        <p className="hidden md:block mt-3">
          &copy; 2023 Youth Executive Program
        </p>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-[#662E91] text-lg font-semibold">
          Youth Experience Program
        </h2>
        <div className="flex flex-col gap-2">
          <p>Overview</p>
          <p>Modules</p>
          <p>Partners</p>
          <p>Register Now</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-[#662E91] text-lg font-semibold">Contact Us</h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MdMessage className="text-[#662E91] text-2xl" />
            <p>Message</p>
          </div>

          <div className="flex items-center gap-2">
            <MdPhone className="text-[#662E91] text-2xl" />
            <p>Phone Number</p>
          </div>

          <p className="block md:hidden  mt-3">&copy; 2023 Youth Executive Program</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
