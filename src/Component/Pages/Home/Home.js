import React from 'react';
import Banner from './Banner/Banner';
import Elementors from './Elementors/Elementors';
import Buseinessgrow from './Buseinessgrow/Buseinessgrow';
import ContactField from './ContactField/ContactField';
import Testimonials from './Testimonials/Testimonials';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Elementors></Elementors>
            <Buseinessgrow></Buseinessgrow>
            <Services></Services>
            <Testimonials></Testimonials>
            <ContactField></ContactField>
        </div>
    );
};

export default Home;