import React from 'react';
import app from '../../assets/error-404.png'
import { useRouteError } from 'react-router';
import Navber from '../../components/Header/Navber';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        
        <div>
            <Navber></Navber>
            
            <img src={app} className="h-[400px] m-8 mx-auto block"></img>

             <div className='text-4xl text-center text-red-500 pb-10'>
                {error.message}</div>
             
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;