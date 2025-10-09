import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#001931]'>
          <div className='flex justify-around items-center'>
            <div className="flex items-center space-x-2 ml-10 text-center" >
            <Link to="/home">
            <img src={logo} alt="HERO logo" className="md:w-10 w-10 mt-10" />
            </Link>
            <Link to="/home"
                className="mt-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-bold text-xl"
            >
                HERO.IO
            </Link>
                </div>  
        </div>

                
          

 
            <footer className="footer sm:footer-horizontal bg-[#001931]  text-white p-10">
                
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

  <nav>
    <h6 className='footer-title'>Social Links</h6>
       <span>
                      <div className='flex justify-between items-center '> <FaLinkedin/><p>Linkedin</p></div>
                      <div className='flex justify-between items-center gap-2'><FaFacebook/><p className='ml-3 text-center'> Facebook</p></div>
                      <div className='flex justify-between items-center '> <FaSquareXTwitter /><p>Twitter</p></div>
                       
                      
                    </span>              
                   
                    
               
  </nav>

</footer>
<div className='text-white text-center pb-10'>Copyright © 2025 - All right reserved</div>

        </div>
    );
};

export default Footer;