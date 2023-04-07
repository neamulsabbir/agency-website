import React from "react";
import about from'../../../Images/about (2).png'
import { FaHome, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <div className="sticky bottom-0 bg-black block lg:hidden ">
      <div
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}
        className="flex justify-between px-6 mx-auto py-4 "
      >
        <Link to="/" className="flex flex-col items-center text-white">
          <FaHome className="text-2xl"></FaHome>
          <h1 className="text-sm font-semibold">Home</h1>
        </Link>
        <div>
          <Link to="/about" className="flex flex-col items-center text-white">
          <img className="w-6" src={about} alt=""/>
            <h1 className="text-sm font-semibold">About</h1>
          </Link>
        </div>
        <div>
          <Link to="/client" className="flex flex-col items-center">
          <FaUserAlt className="text-white text-2xl"></FaUserAlt>
            <h1 className="text-sm font-semibold text-white">Client</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
