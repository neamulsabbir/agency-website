import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";
import { FaHome, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-20">
      <div className="flex justify-between items-center px-7 md:px-20 py-5 bg-black ">
        <div className="flex items-center mr-10">
          <Link to="/">
            <img className="w-full" src={logo} alt="" />
          </Link>
        </div>
        <div className="w-full">
          <input
            className="w-full px-4 py-2 rounded-full border-2 border-black"
            type="search"
            name=""
            placeholder="Search your service"
          />
        </div>
        <div className="hidden md:block">
          <div className="flex justify-between items center ml-8 font-semibold">
            <Link
              to="/"
              className="mr-8 text-white hover:border-b-2 hover:border-b-red-400 hover:rounded-md duration-500 ease-in"
            >
              <h1 className="text-base">Home</h1>
            </Link>
            <Link
              to="/about"
              className="text-white mr-8 hover:border-b-2 hover:border-b-red-400 hover:rounded-md duration-500 ease-in"
            >
              <h1 className="text-base">About</h1>
            </Link>
            <Link
              to="/client"
              className="flex hover:border-b-2 hover:border-b-red-400 hover:rounded-md duration-500 ease-in"
            >
              <h1 className="text-white ml-2">Client</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
