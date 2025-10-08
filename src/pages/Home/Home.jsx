import React from 'react';
import { FaAppStoreIos, FaCheckCircle, FaClock, FaCompass, FaGooglePlay, FaPowerOff, FaTools } from 'react-icons/fa';
import hero from '../../assets/hero.png'

const Home = () => {
    return (
        <div className="bg-gray-100 text-center py-16 px-6 ">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
        We Build<br></br><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-bold">Productive</span> Apps
      </h1>
      
      <p className="text-gray-500  mx-auto mb-10 leading-relaxed text-lg">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler,smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>

       <div className="flex justify-center gap-4 mb-14">
        <button className="flex items-center gap-2 bg-white  px-5 py-3 shadow hover:shadow-lg transition">
          <FaGooglePlay className="text-green-500 text-xl" />
          <span className="font-medium">Google Play</span>
        </button>
        <button className="flex items-center gap-2 bg-white  px-5 py-3 shadow hover:shadow-lg transition">
          <FaAppStoreIos className="text-blue-500 text-xl" />
          <span className="font-medium">App Store</span>
        </button>
      </div>

      <div className="relative flex justify-center">
        
        {/* Phone mockup */}
        <img
          src={hero}
          alt="App Preview"
          className="w-[280px] md:w-[1000px] rounded-xl"
        />
      </div>

      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center py-16">
  <h2 className="text-3xl md:text-4xl font-semibold mb-12">
    Trusted By Millions, Built For You
  </h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
    {/* Stat 1 */}
    <div>
      <h3 className="text-gray-200 text-sm mb-2">Total Downloads</h3>
      <p className="text-5xl font-bold">29.6M</p>
      <p className="text-gray-200 text-sm mt-2">21% More Than Last Month</p>
    </div>

    {/* Stat 2 */}
    <div>
      <h3 className="text-gray-200 text-sm mb-2">Total Reviews</h3>
      <p className="text-5xl font-bold">906K</p>
      <p className="text-gray-200 text-sm mt-2">46% More Than Last Month</p>
    </div>

    {/* Stat 3 */}
    <div>
      <h3 className="text-gray-200 text-sm mb-2">Active Apps</h3>
      <p className="text-5xl font-bold">132+</p>
      <p className="text-gray-200 text-sm mt-2">31 More Will Launch</p>
    </div>
  </div>
</section>

<div>
    <h1 className="text-2xl md:text-5xl font-semibold mb-4 text-gray-800 m-20">Trending Apps</h1>
    <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
</div>


        </div>
    );
};

export default Home;