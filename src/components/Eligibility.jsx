import { GoDotFill } from "react-icons/go";

const Eligibility = () => {
  return (
    <div className="p-5 md:p-10 lg:px-14 lg:py-4">
      <div className="w-100 lg:w-[800px] flex flex-col text-center gap-4 p-3 mx-auto border border-[#662e91] rounded-md shadow-3xl shadow-[#662e91] hover:shadow-none transition-all duration-500 ease-in-out">
        <h1 className="text-[25px] sm:text-[30px]  font-bold text-center text-[#662E91]">
          Who can apply: Eligibility Criteria
        </h1>

        <div className="flex flex-col  justify-center gap-2">
          <p className="text-xs md:text-sm font-semibold">
            Be between 21 to 30 years of age or 21 to 35 for persons with
            disabilities
          </p>

          <p className="text-xs md:text-sm  font-semibold">
            Nigerian Graduate within the last 2 years
          </p>

          <p className="text-xs md:text-sm font-semibold">
            Ability to travel to training and placement
          </p>

          <p className="text-xs md:text-sm font-semibold">
            Must be fluent in both verbal and written English
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
