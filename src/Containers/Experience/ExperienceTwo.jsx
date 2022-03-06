import React from "react";
import { line, womancard } from "../../assests";

const ExperienceTwo = () => {
  return (
    <div className="flex flex-col-reverse md:gap-16 md:flex-row mx-0 lg:m-0 pt-24 md:pt-24 overflow-hidden bg-rose-50 min-h-full md:max-h-full">
      <div className="flex flex-1 flex-col justify-center px-8 md:px-24  items-start">
        <h1 className="font-extrabold text-3xl lg:text-4xl tracking-wide lg:mt-0 mt-12 mb-3 leading-[40px]">
          Tolu & Joy’s Experience
        </h1>
        <p className="p-1 text-orange-500 rounded-md border border-orange-500 text-xs">
          CUSTOMER
        </p>
        <p className="mt-4 text-sm md:text-base">
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
        <div className="flex flex-col mx-0 mt-8 mb-4">
          <p className="uppercase text-orange-500">Share your own story!</p>
          <img src={line} alt="" className="w-56" />
        </div>
      </div>

      <div className="flex flex-1 items-center mt-4 md:mt-0 justify-center px-0 md:px-24 ml-2 ">
        <div className="w-full relative">
          <div className="min-h-full flex items-center justify-center ">
            <div className="lg:w-[32rem] lg:h-[32rem] w-64 h-64 bg-rose-100 lg:overflow-visible overflow-clip rounded-full ">
              <img
                src={womancard}
                alt="headimg"
                className="lg:absolute w-full mt-9  bottom-0 lg:ml-10 z-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTwo;
