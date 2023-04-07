import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../ShareFile/Navbar/Navbar';
import Footer from '../ShareFile/Footer/Footer';
import BottomNavbar from '../ShareFile/BottomNavbar/BottomNavbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <BottomNavbar></BottomNavbar>
        </div>
    );
};

export default Main;