import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Service = ({ data }) => {
  return (
    <div className="border-l-2 border-white rounded-md pl-4">
      <div className="flex items-center">
        <FaAngleRight className="text-2xl text-red-500"></FaAngleRight>
        <h1 className="text-2xl font-semibold">{data?.name}</h1>
      </div>
      <p>{data?.details}</p>
    </div>
  );
};

export default Service;
