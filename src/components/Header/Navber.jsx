import React from 'react';
import { Link } from 'react-router';
import { FaGithub } from "react-icons/fa";
import logo from '../../assets/logo.png';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li className='m-2 text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text transition-all duration-0 hover:underline'><Link to="/home">Home</Link></li>
      <li className='m-2'><Link to="/home">Apps</Link></li>
      <li className='m-2'><Link to="/home">Installation</Link></li>
      </ul>
    </div>
    <div className="flex items-center space-x-2 ml-10">
    <Link to="/home">
    <img src={logo} alt="HERO logo" className="md:w-10 w-10" />
    </Link>
    <Link
    to="/home"
    className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-bold text-xl"
  >
    HERO.IO
  </Link>
</div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-[16px]">
      <li className='m-2 text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text transition-all duration-0 hover:underline'><Link to="/home">Home</Link></li>
      <li className='m-2 ext-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text transition-all duration-0 hover:underline'><Link to="/apps">Apps</Link></li>
      <li className='m-2 ext-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text transition-all duration-0 hover:underline'><Link to="/installation">Installation</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end mr-10">
    <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-[4px]"><FaGithub />Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navber;