import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";


const Footer = () => {
  return (
    <div className="bg-black">
      <div className="px-7 md:px-20 mx-auto flex flex-col md:flex-row justify-between items-start pt-10">
        <div>
          <div className="flex items-center">
            <img className="w-44" src={logo} alt="" />
          </div>
          <h1 className="text-white">
            Favorite collections and hottest trends, <br /> Find it, love it,
            buy it.
          </h1>
        </div>
        <div className="text-base my-10 md:my-0">
          <h1 className="font-semibold text-white">CONTACT US</h1>
          <div className="mt-5">
            <div>
              <p className="font-semibold text-white">Hotline:</p>
            </div>
            <span className="text-white">+880 1938927389</span>

            <div>
              <p className="font-semibold text-white">Email:</p>
            </div>
            <span className="text-white">support@neamul.com</span>
          </div>
        </div>
        <div className="flex md:flex-row">
          <Link
            to="https://www.facebook.com/neamul.sabbir/"
            className="mr-5 border-2 border-white rounded-full p-1 text-white text-xs"
          >
            <FaFacebookF></FaFacebookF>
          </Link>
          <Link
            to="https://www.facebook.com/neamul.sabbir/"
            className="mr-5 border-2 border-white rounded-full p-1 text-white text-xs"
          >
            <FaInstagram></FaInstagram>
          </Link>
          <Link
            to="https://www.facebook.com/neamul.sabbir/"
            className="mr-5 border-2 border-white rounded-full p-1 text-white text-xs"
          >
            <FaYoutube></FaYoutube>
          </Link>
          <Link
            to="https://www.facebook.com/neamul.sabbir/"
            className="mr-5 border-2 border-white rounded-full p-1 text-white text-xs"
          >
            <FaLinkedin></FaLinkedin>
          </Link>
        </div>
      </div>
      <p className="py-8 text-center text-white">
        Copyright © 2023 AGENCY All rights reserved
      </p>
    </div>
  );
};

export default Footer;
