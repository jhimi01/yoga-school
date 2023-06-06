import React from 'react';
import Navigation from '../page/share/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../page/share/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;