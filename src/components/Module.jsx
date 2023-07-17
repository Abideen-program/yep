import { useState } from "react";

const Modules = () => {
  const [filterBy, setFilterBy] = useState("module-one");
  return (
    <div id="modules" className="w-100 mt-3">
      <h1 className="text-[25px] sm:text-[30px]  font-bold text-center text-[#662E91] mb-2">
        Program Modules
      </h1>

      <div className="grid grid-cols-2 gap-2 md:flex justify-between mb-3">
        <div
          className={`h-10 md:h-14 md:w-[24%] text-[11px] lg:text-sm text-center flex items-center justify-center ${
            filterBy === "module-one"
              ? "bg-[#662E91] text-white"
              : " outline outline-gray-500"
          } cursor-pointer font-semibold hover:bg-[#662E91] hover:text-white hover:outline-none`}
          onClick={() => setFilterBy("module-one")}
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
      </div>

      <div className="mt-2 w-100 md:w-[90%] mx-auto border border-[#662E91] p-2 rounded-md">
        {filterBy === "module-one" && (
          <p className="text-justify text-sm">
            This module during the 2-day Masterclass Session focuses on
            developing essential employability skills such as effective
            communication, problem-solving, teamwork, time management, and
            adaptability, to enhance participants' readiness for the workplace.
            This module includes career clinic that covers Free CV Review and
            Assessment Session.
          </p>
        )}

        {filterBy === "module-two" && (
          <p className="text-justify text-sm">
            This module during the 2-day Masterclass Session, Participants will
            acquire the knowledge and skills required to cultivate an
            entrepreneurial mindset, including innovative thinking, business
            planning, market analysis, and risk management, empowering them to
            pursue entrepreneurial opportunities. This module will provide
            selected graduates with Business startup Box ( Registering a
            business, free startup business website and other benefits)
          </p>
        )}

        {filterBy === "module-three" && (
          <p className="text-justify text-sm">
            Through virtual mentorship sessions, participants will have the
            opportunity to connect with experienced professionals who will
            provide guidance, share industry insights, and offer personalized
            advice to support their career development.
          </p>
        )}

        {filterBy === "module-four" && (
          <p className="text-justify text-sm">
            This module offers selected participants the chance to apply their
            knowledge and skills in a real-world setting through an internship
            placement, enabling them to gain practical experience, network with
            professionals, and enhance their professional portfolios. Internship
            program will span 4 to 8 weeks depending on internship partner.
          </p>
        )}
      </div>
    </div>
  );
};

export default Modules;
