import React from "react";

const Alert = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-8">
    <div className=" w-96 flex flex-col space-y-6 justify-center items-center ">
    <div className="w-20 h-20 flex rounded-full  bg-orange-200">
        <p className="m-auto text-2xl" >🎉</p>
    </div>
      <h1 className="font-bold text-2xl ">Thank you for sharing your story!</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <button className="py-3 px-6 rounded-lg bg-orange-500 shadow-md shadow-orange-200 text-white text-sm">
       Close
      </button>
    </div>
    </div>
  );
};

export default Alert;
