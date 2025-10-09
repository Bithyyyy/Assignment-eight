import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import logo from '../../assets/logo.png';

const Navber = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="m-2">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline font-semibold'
                    : 'text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text transition-all duration-200'
                }
              >
                Home
              </NavLink>
            </li>

            <li className="m-2">
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline font-semibold'
                    : 'text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text transition-all duration-200'
                }
              >
                Apps
              </NavLink>
            </li>

            <li className="m-2">
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline font-semibold'
                    : 'text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text transition-all duration-200'
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-2 ml-10">
          <NavLink to="/home">
            <img src={logo} alt="HERO logo" className="md:w-10 w-10" />
          </NavLink>
          <NavLink
            to="/home"
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-bold text-xl"
          >
            HERO.IO
          </NavLink>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-[16px]">
          <li className="m-2">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline font-semibold'
                  : 'text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text transition-all duration-200'
              }
            >
              Home
            </NavLink>
          </li>

          <li className="m-2">
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline font-semibold'
                  : 'text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text transition-all duration-200'
              }
            >
              Apps
            </NavLink>
          </li>

          <li className="m-2">
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline font-semibold'
                  : 'text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text transition-all duration-200'
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end mr-10">
        <a
          href="https://github.com/Bithyyyy/Assignment-eight"
          target="_blank"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-[4px]"
        >
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navber;
