import React, { useEffect, useState } from "react";

import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Buseinessgrow = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("businessGrow.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  // console.log(datas);
  return (
    <div className="px-7 md:px-20 my-14 md:my-20 mx-auto  ">
      <div
        style={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
        className="grid xl:grid-cols-2 p-10 rounded-md"
      >
        
        <img className="w-full rounded-md" src={datas?.image} alt="" />
        <div className="mt-10 xl:mt-0 xl:ml-20">
          <h1 className="text-[40px] font-bold leading-snug">
            {datas?.headline}
          </h1>
          <div className="my-8">
            <p className="my-4 text-lg leading-9 font-light">{datas?.title1}</p>
            <p className="my-4 text-lg leading-9 font-light">{datas?.title2}</p>
          </div>
          <div className="my-8">
            <div className="flex items-center mb-4">
              <FaAngleRight className="border-2 border-red-400 rounded-full text-2xl"></FaAngleRight>
              <p className="ml-4 text-lg">{datas?.detail1}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaAngleRight className="border-2 border-red-400 rounded-full text-2xl"></FaAngleRight>
              <p className="ml-4 text-lg">{datas?.detail2}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaAngleRight className="border-2 border-red-400 rounded-full text-2xl"></FaAngleRight>
              <p className="ml-4 text-lg">{datas?.detail3}</p>
            </div>
          </div>
          <div className="mt-10 animate-bounce">
            <Link className="hover:bg-red-500 border-2 border-red-400 px-6 py-2 text-lg  hover:text-white rounded-3xl">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buseinessgrow;
