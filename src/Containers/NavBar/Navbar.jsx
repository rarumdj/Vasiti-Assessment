import React from "react";
import { logo } from "../../assests";
import NavItems from "./NavItems";

const Navbar = () => {
 
  return (
    <nav className="top-0 left-0 right-0">
      <div className="lg:px-32 px-8 py-8 flex justify-between">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div>
          <ul className="hidden lg:flex flex-row gap-8">
            {NavItems.map((items, i) => (
              <li>
                <a href={items.url}>{items.title}</a>
              </li>
            ))}
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/" className="py-3 px-5 rounded-md text-white font-medium bg-orange-600 ">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex py-6 bg-white shadow-md justify-center items-center  border-t">
              <ul className="flex gap-20">
                <li>MARKETPLACE</li>
                <li>WHOLESALE CENTER</li>
                <li>SELLER CENTER</li>
                <li>SERVICES</li>
                <li>INTERNSHIPS</li>
                <li>EVENTS</li>
              </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;
