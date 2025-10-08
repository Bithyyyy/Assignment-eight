import React from 'react';
import app from '../../assets/error-404.png'
import { Link } from 'react-router';
const NotFound = () => {
    return (
        <div>
           
            <img src={app} className="h-[400px] m-8 mx-auto block"></img>

             <h1 className='text-5xl text-center'>Oops, page not found!</h1>
             <p className='text-xl text-center p-5 text-gray-500'>The page you are looking for is not available.</p>

             <Link to="/home">
             <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-[4px] m-8 mx-auto block">Go Back</button></Link>
             
        </div>
    );
};

export default NotFound;