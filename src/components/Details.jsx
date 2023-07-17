import { MdLocationPin, MdOutlineDateRange } from "react-icons/md";

const Details = () => {
  return (
    <div id="details" className="p-5 md:p-10 lg:px-14 lg:py-4">
      <div className="md:w-[800px] mx-auto">
        <h1 className="text-[25px] sm:text-[30px]  font-bold leading-[70px] text-center text-[#662E91]">
          Program Details
        </h1>
        <div className="md:flex items-start justify-around">
          <div className="text-center flex flex-col gap-2">
            <MdLocationPin className="text-[#662E91] text-5xl mx-auto" />
            <h2 className="text-2xl md:text-3xl font-bold">Venue</h2>
            <p>Lagos - Lagos Location</p>
            <p>Abuja - Abuja Location</p>
            <p>Enugu - Enugu Location</p>
            <p>Benin City - Benin city location</p>
          </div>

          <div className="text-center flex flex-col gap-2 mt-2">
            <MdOutlineDateRange className="text-[#662E91] text-5xl mx-auto" />
            <h2 className="text-2xl md:text-3xl font-bold">Date & Time</h2>
            <p>Date - Program Date</p>
            <p>Time - Abuja Location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
