import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import { clx } from "../utils/clx";

const swiperSlide = clx(
  "flex flex-col justify-center gap-2 rounded-lg text-lg font-bold text-white p-2"
);

const Participants = () => {
  return (
    <div id="participants" className="p-5 md:p-10 lg:px-14 lg:py-4">
      <h1 className="text-[25px] sm:text-[30px]  font-bold leading-[70px] text-center text-[#662E91]">
        Program Participants
      </h1>

      <div className="w-100 flex items-center justify-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[220px] h-[300px] md:w-[240px] md:h-[320px]"
        >
          <SwiperSlide className={`${swiperSlide} bg-[#CE1111]`}>
            <img
              src="./images/man1.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#008CFF]`}>
            {" "}
            <img
              src="./images/man2.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#0AB86F]`}>
            <img
              src="./images/man3.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#D37A07]`}>
            <img
              src="./images/man1.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#76A30C]`}>
            <img
              src="./images/man2.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#B40A2F]`}>
            <img
              src="./images/man3.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#236313]`}>
            <img
              src="./images/man1.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#0044FF]`}>
            <img
              src="./images/man2.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${swiperSlide} bg-[#DA0CDA]`}>
            <img
              src="./images/man3.jpg"
              alt="image"
              className="object-contain w-full h-full rounded-lg"
            />
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xs">Title</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Participants;
