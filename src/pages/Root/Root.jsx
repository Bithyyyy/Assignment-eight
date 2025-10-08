import React from 'react';
import Navber from '../../components/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col'>
           <Navber></Navber> 
           <div className='flex-1'>
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;