import React from "react";
import logo from "../assets/logo1.png";
import { BiWorld, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import airbnb from "../assets/airbnb.png"
import signin from "../pages/signin";

const Navbar = () => {
  return (
    <div className="border-b sticky top-0 z-50 bg-white/[95%]  ">
      <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12 ">
        {/* Left */}
        <div className="  h-12  flex">
          <img src={airbnb} className=" object-cover" />
        </div>
        {/* Middle */}
        <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full ">
          <input
            type="search"
            placeholder=""
            className="py-2.5 w-[20rem] rounded-full outline-0"
          />
          <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
            <button className="w-full px-2">Anywhere</button>
            <button className="border-l border-x px-6">AnyWeek</button>
            <button className="w-full text-gray-600/60 pl-2">AddGuests</button>
          </div>
          <div className="bg-[#ff5a60] p-2 rounded-full mr-2">
            <FiSearch className="text-white w-full" />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center pr-3  font-semibold text-gray-600">
          <p className="text-[17px]">Airbnb your home</p>
          <div className="flex items-center mx-8 gap-1">
            <BiWorld className="" />
            <div className="">EN</div>
          </div>

          <div className="flex items-center border px-3 py-2 rounded-full gap-2 bg-[#ff5a60] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out">
            <button onClick={signin}>Sign in</button>
            <BiUser className="text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
