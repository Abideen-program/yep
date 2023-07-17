const Register = () => {
  return (
    <div
      id="register"
      className="p-5 md:p-10 lg:px-14 lg:py-4 h-[70vh] flex items-center justify-center bg-[#662E91]"
    >
      <div className="flex flex-col gap-6 items-center justify-center w-[700px]">
        <h1 className="text-[25px] sm:text-[30px]  font-bold text-center text-[#fff]">
          Register Now To Participate
        </h1>

        <p className="text-white md:text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button className="text-[#662E91] bg-[#fff] w-1/2 outline-none p-2 text-lg font-semibold rounded-full hover:scale-90 transition-all duration-500">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Register;
