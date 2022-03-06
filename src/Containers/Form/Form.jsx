import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-8">
      <h1 className="font-bold text-2xl ">Share your amazing story!</h1>
      <form
        className="space-y-4 mt-5"
        action="
        "
      >
        <div className="flex flex-col">
          <label>Upload your Picture</label>
          <input
            type="file"
            name=""
            id=""
            className="block w-full p-2 cursor-pointer bg-transparent border border-gray-300 text-gray-900 outline-none text-sm rounded-lg"
          />
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col">
            <label>First Name</label>
            <input
              type="text"
              name=""
              id=""
              className="py-2 border border-gray-200 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label>Last Name</label>
            <input
              type="text"
              name=""
              id=""
              className="py-2 border border-gray-200 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Share your story</label>
          <textarea
            cols="20"
            rows="5"
            className="border border-gray-200 rounded-md"
          ></textarea>
        </div>
        <div className="flex flex-row">
          <label>What did you interact with Vasiti as?</label>
          <div className="flex">
            <label className="ml-3 block text-sm font-medium text-gray-700 mr-2 my-auto">
              Customer
            </label>
            <input type="radio" className="h-4 w-4 my-auto border-gray-300" />
            <label className="ml-3 block text-sm font-medium text-gray-700 mr-2 my-auto">
              Vendor
            </label>
            <input type="radio" className="h-4 w-4 my-auto border-gray-300" />
          </div>
        </div>
        <div>
          <label>City or Higher Institution (for Students)</label>
          <select
            className="block appearance-none w-full outline-none bg-transparent border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight "
            name=""
            id=""
          >
            <option value="">Lagos</option>
            <option value="">Abuja</option>
            <option value="">Port Harcourt</option>
          </select>
        </div>
        <div className="flex justify-end">
          <a
            href="/success"
            className="p-3 rounded-lg bg-orange-500 shadow-md shadow-orange-200 text-white text-sm"
          >
            Share your story!
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
