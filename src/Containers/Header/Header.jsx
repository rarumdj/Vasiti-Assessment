import React from "react";
import { headerimg } from "../../assests";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row mx-0 lg:m-0 pt-10  md:pt-24  min-h-full md:max-h-full">
      <div className="flex flex-1 flex-col justify-start px-8 md:px-24 md:mt-16 items-start mr-2">
        <h1 className="font-extrabold text-4xl lg:text-5xl tracking-wide mb-3 leading-[40px]">
        Amazing
Experiences from Our Wonderful Customers
        </h1>
        <p
         
          className="lg:mt-4 mt-2 text-sm md:text-base lg:w-3/4"
        >
         Here is what customers and vendors are saying about us, you can share your stories with us too.
        </p>
        
      </div>
      <div className="flex flex-1 items-center mt-4 md:mt-0 px-0 md:px-24 justify-center">
        <img src={headerimg} alt="headimg" className="object-cover  max-h-[16rem] md:max-h-full" />
      </div>
    </div>
  );
};
export default Header;
