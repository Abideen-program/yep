import PartnersItem from "./PartnersItem";

const Partners = () => {
  return (
    <div className="p-5 md:p-10 lg:px-14 lg:py-4">
      <h1 className="text-[25px] sm:text-[30px]  font-bold leading-[70px] text-center text-[#662E91]">
        Partners & Sponsors
      </h1>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 justify-center">
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
          <PartnersItem />
        </div>
      </div>
    </div>
  );
};

export default Partners;
