import React from "react";
import { line, section1 } from "../../assests";

const Experience = () => {
  return (
    <div className="flex flex-col-reverse md:gap-16 md:flex-row mx-0 lg:m-0 pt-24 md:pt-24 overflow-hidden bg-zinc-800 min-h-full md:max-h-full">
      <div className="flex flex-1 items-center mt-4 md:mt-0 justify-center px-0 md:px-24 md:-mb-16 -mb-8 ">
        <img src={section1} alt="headimg" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-center px-8 md:px-24  items-start ml-2">
        <h1 className=" text-white font-extrabold text-3xl lg:text-4xl tracking-wide mb-3 leading-[40px]">
          Tolu & Joy’s Experience
        </h1>
        <p className="p-1 rounded-md border border-white text-xs text-white">
          CUSTOMER
        </p>
        <p className="mt-4 text-sm md:text-base  text-white">
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
        <div className="flex flex-col mx-0 mt-8 mb-4">
          <a href="/share-story">
            <p className="uppercase text-white">Share your own story!</p>
            <img src={line} alt="" className="w-56" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
