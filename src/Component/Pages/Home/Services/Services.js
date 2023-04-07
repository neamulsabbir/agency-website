import React from 'react';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            id: 1,
            name: "Awesome Projects",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation."
        },
        {
            id: 2,
            name: "Fast Support",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation."
             
        },
        {
            id: 3,
            name: "News Published",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation."
             
        },
        {
            id: 4,
            name: "Units Sold",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation."
             
        }
    ]

    return (
        <div className='flex flex-col xl:flex-row gap-10 px-7 md:px-20 mx-auto my-14 md:my-20 bg-black py-20 text-white'>
            <div className='text-[30px] text-center'>
                <h1>“20 Years of Experience in Industry & Managements”</h1>
                <p className='mt-10'>We know that the Growth demands new roads and new thinking simultaneously.</p>
            </div>
            <div className='xl:ml-20 mt-20 xl:mt-0'>
                <h1>Our Different Services</h1>
                <div className='grid xl:grid-cols-2 gap-10 mt-5 xl:mt-10'>
                    {
                        services.map(service => <Service key={service.id} data={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;