import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { IoMdSearch } from "react-icons/io";

const Apps = () => {
  const cards = useLoaderData(); 
  const [searchTerm, setSearchTerm] = useState('');

  
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-5xl text-center pt-10 font-semibold">
        Our All Applications
      </h1>
      <p className="text-xl text-center p-5 text-gray-500">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <section className="py-12 px-6 bg-gray-100 min-h-screen">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">
            ({filteredCards.length}) Apps Found
          </h2>
          

          <div className="relative w-full md:w-72">
            <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search Apps"
              className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <Card key={card.id} card={card} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No apps found matching “{searchTerm}”
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Apps;
