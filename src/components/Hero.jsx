const Hero = () => {
  return (
    <div className="w-100 h-[100vh] bg-heroDrop relative">
      <img
        src="./images/hero.jpg"
        alt="heroImage"
        className="absolute -z-50 object-cover md:object-contain w-[100%] h-[100%]"
      />
      <div className="h-[100vh] w-100 flex flex-row items-center justify-center">
        <div className="w-[800px] flex flex-col items-center gap-4 p-3 translate-y-6">
          <h1 className="text-[25px] sm:text-[30px] md:text-[50px] text-white font-bold leading-[70px] text-center">
            Youth Executive Program
          </h1>

          <h2 className="text-white text-center text-sm md:text-base">
            Equipping Aspiring Youths with the Skills, Knowledge, and Network to
            Adapt to the Changing Business Environment, Innovate, and Scale
            Their Businesses towards Promoting Youth Employment and Economic
            Growth
          </h2>

          <div className="flex justify-center">
            <button className="w-auto self-start bg-[#328EDE] text-white py-3 px-7 rounded-[4px] outline-none hover:bg-[#10DCE8] transition-all duration-300 shadow-3xl shadow-[#10DCE8] hover:shadow-none">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
