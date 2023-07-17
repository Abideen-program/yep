import { FaCheckCircle } from "react-icons/fa";

const ProjectBenefit = () => {
  return (
    <div
      id="benefits"
      className="p-5 md:p-10 lg:px-14 lg:py-4 flex flex-col md:flex-row "
    >
      <div className="md:w-1/2 order-2 md:order-1">
        <img
          src="./images/lady.png"
          alt="lady"
          className="object-contain w-[100%] h-[100%] block"
        />
      </div>
      <div className="md:w-1/2 md:p-8 flex flex-col mb-3 md:mb-0 order-1 md:order-2">
        <h1 className="text-[25px] sm:text-[30px]  font-bold  text-[#662E91] text-center md:text-left">
          Program Benefits
        </h1>

        <div className="flex flex-col items-center md:items-start gap-3 mt-3 md:mt-0">
          <div className="flex flex-col">
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
          </div>
          <div className="flex flex-col">
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
          </div>

          <div className="flex flex-col">
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
          </div>

          <div className="flex flex-col">
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
          </div>
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
