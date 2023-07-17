import Modules from "./Module";

const Overview = () => {
  return (
    <div id="overviews" className="w-100 lg:w-[800px] flex flex-col items-center gap-4 p-3 mx-auto">
      <h1 className="text-[25px] sm:text-[30px]  font-bold leading-[70px] text-center text-[#662E91]">
        Program Overview
      </h1>

      <p className="text-center text-sm md:text-base">
        The Young Executive Program is a dynamic and intensive 3-months learning
        experience designed to equip young graduates with the skills and
        knowledge necessary to thrive in today's workplace. Consisting of four
        comprehensive modules, this program offers a unique and transformative
        journey that prepares participants for the challenges and opportunities
        they will encounter in their professional lives.
      </p>

      <p className="text-center text-sm md:text-base">
        The YEP is a flagship employability program by{" "}
        <strong>Bet9ja Foundation</strong>, an initiative to tackle the high
        rate of unemployment amongst Nigerian youths and promote greater
        economic empowerment for young people in Local communities focused on
        three pillars: Enterprenurship, Employability and Education.
      </p>
    </div>
  );
};

export default Overview;
