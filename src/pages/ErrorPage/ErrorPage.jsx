import React from 'react';
import app from '../../assets/error-404.png'
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        
        <div>
            
            <img src={app} className="h-[400px] m-8 mx-auto block"></img>

             <div>{error.message}</div>
             
            
        </div>
    );
};

export default ErrorPage;