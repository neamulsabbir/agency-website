import React from "react";

const Elementor = ({ data }) => {
  // console.log(data);
  return (
    <div className="bg-gray-100 p-7 sm:p-14 rounded-md">
      <div className="flex items-center ">
        <img className="w-10" src={data?.image} alt="" />
        <div className="ml-4">
          <h1 className="text-xl font-bold">{data?.title}</h1>
          <p className="mt-2">{data?.detail}</p>
        </div>
      </div>
      <div>
        <p className="mt-4 w-full">{data?.describe}</p>
      </div>
    </div>
  );
};

export default Elementor;
