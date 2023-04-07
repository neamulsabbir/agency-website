import React, { useEffect, useState } from "react";
import Elementor from "../Elementor/Elementor";


const Elementors = () => {
  const [datas,setDatas] = useState([])
  useEffect(() => {
    fetch("elementor.json")
    .then(res => res.json())
    .then(data => setDatas(data))
  },[])

  return (
    <div className="px-7 md:px-20 mx-auto grid lg:grid-cols-2 2xl:grid-cols-3 gap-10 my-14 md:my-20">
      {
        datas.map((data) => <Elementor key={data?.id} data={data}></Elementor>)
      }
    </div>
  );
};

export default Elementors;
