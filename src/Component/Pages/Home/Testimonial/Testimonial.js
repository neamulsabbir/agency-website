import React from 'react';
import { SwiperSlide } from 'swiper/react';

const Testimonial = ({rev}) => {
    return (
      <>
      <SwiperSlide className="border-8 border-red-400 p-4 ">
                <p>{rev?.review}</p>
                <div className="flex items-center mt-5">
                  <img
                    className="rounded-full w-16 border-4 border-grey-200 p-1"
                    src={rev?.img}
                    alt=""
                  />
                  <h1 className="text-xl ml-6 font-semibold">{rev?.name}</h1>
                </div>
              </SwiperSlide>
      </>
        // <div className="border-8 border-red-400 p-4 ">
        //   <p>{rev?.review}</p>
        //   <div className="flex items-center mt-5">
        //     <img className="rounded-full w-16 border-4 border-grey-200 p-1" src={rev?.img} alt="" />
        //     <h1 className="text-xl ml-6 font-semibold">{rev?.name}</h1>
        //   </div>
        // </div>
    );
};

export default Testimonial;