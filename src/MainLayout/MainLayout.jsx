import React from 'react';
import Navigation from '../page/share/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../page/share/Footer';

const MainLayout = () => {
    return (
        <div>
           <div className='mx-auto w-full md:w-5/6'>
           <Navigation></Navigation>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;