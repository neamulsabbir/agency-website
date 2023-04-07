import React from "react";
import bg from "../../../Images/about-bg.jpg";
import { Link } from "react-router-dom";
import Testimonials from "../Home/Testimonials/Testimonials";

const Client = () => {
  return (
    <div>
      <img className="w-full" src={bg} alt="" />
      <div className="absolute top-1/3 px-20 mx-auto ">
        <h1 className="text-[35px] text-white font-extrabold ">Client</h1>
        <div className="flex text-2xl text-white font-semibold">
          <Link to="/">Home /</Link>
          <h1 className="text-red-400"> Client</h1>
        </div>
      </div>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Client;
