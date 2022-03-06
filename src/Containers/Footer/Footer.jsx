import React from "react";
import { social, subbanner } from "../../assests";

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-12 px-8 md:py-24 md:px-24">
      <div className="flex lg:flex-row flex-col-reverse justify-around">
        <img src={subbanner} alt="" className="lg:relative lg:bottom-40" />
        <div className="flex flex-col lg:w-4/12 my-3">
          <h1 className="lg:text-5xl text-2xl font-bold text-white">
            Be a member of our community 🎉
          </h1>
          <p className="my-5 text-white lg:text-base text-sm">
            We’d make sure you’re always the first to know what’s happening at
            Vasiti.
          </p>
          <form>
            <div className="flex relative items-center text-sm bg-dark-light rounded p-1">
              <input
                placeholder="Enter Your email"
                className="bg-zinc-500  w-full h-full text-white lg:text-base text-xs rounded px-4 py-3 mr-1 focus:outline-none"
                name="email"
              />
              <button className=" absolute right-0 mr-3 space-x-3 text-dark text-xs bg-white font-medium rounded px-3 py-2">
                <span>SUBSCRIBE</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 grid-flow-row gap-6 mt-8">
        <div>
          <p className="font-bold text-white mb-5">Company</p>
          <ul className="text-white flex flex-col gap-3 lg:text-base text-sm">
            <li>About us</li>
            <li>Term of Use</li>
            <li>Privacy Policy</li>
            <li>Press & Media</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-5">Products</p>
          <ul className="text-white flex flex-col gap-3 lg:text-base text-sm">
            <li>Marketplace</li>
            <li>Magazine</li>
            <li>Seller</li>
            <li>Wholesale</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-5">Careers</p>
          <ul className="text-white flex flex-col gap-3 lg:text-base text-sm">
            <li>Become a Campus Rep</li>
            <li>Become a Vasiti Influencer</li>
            <li>Become a Campus writer</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-5">Get in touch</p>
          <ul className="text-white flex flex-col gap-3 lg:text-base text-sm">
            <li>Contact us</li>
            <li>Partner with us</li>
            <li>Advertise with us</li>
            <li>Help/FAQs</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-5">Join our community</p>
          <img src={social} alt="" />
          <p className="text-white mt-4 lg:text-base text-sm">Email Newsletter</p>
        </div>
      </div>
    </footer>
  );
};
