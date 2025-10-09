import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import download from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';

const Instalation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState(null); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(stored);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem('installedApps', JSON.stringify(updated));
  };

  
  const parseDownloads = (value) => {
    if (value == null) return 0;
    if (typeof value === 'number') return value;

    const str = String(value).trim().toLowerCase();
    if (str.endsWith('m')) return parseFloat(str) * 1_000_000;
    if (str.endsWith('k')) return parseFloat(str) * 1_000;
    return parseFloat(str.replace(/,/g, '')) || 0;
  };


  const sortedApps =
    sortOrder === null
      ? installedApps
      : [...installedApps].sort((a, b) => {
          const aDownloads = parseDownloads(a.downloads);
          const bDownloads = parseDownloads(b.downloads);
          return sortOrder === 'asc'
            ? aDownloads - bDownloads
            : bDownloads - aDownloads;
        });

  return (
    <div className="bg-gray-100 min-h-screen px-8 py-10 md:px-20">
      <h1 className="text-4xl text-center font-semibold mb-2">Your Installed Apps</h1>
      <p className="text-[18px] text-center text-gray-500 mb-8">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
        <h2 className="text-xl font-semibold">
          {installedApps.length} App{installedApps.length !== 1 && 's'} Found
        </h2>

        
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center border border-gray-300 rounded-md px-4 py-2 text-gray-600 bg-white hover:bg-gray-50 w-52 justify-between"
          >
            {sortOrder === null
              ? 'Sort by Downloads'
              : `Sorted by Downloads (${sortOrder === 'asc' ? 'Ascending' : 'Descending'})`}
            <IoMdArrowDropdown className="ml-2" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-md z-10">
              <button
                onClick={() => {
                  setSortOrder('asc');
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Sort Ascending (Low → High)
              </button>
              <button
                onClick={() => {
                  setSortOrder('desc');
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Sort Descending (High → Low)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Installed Apps List */}
      <div className="space-y-5">
        {sortedApps.length > 0 ? (
          sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col md:flex-row md:justify-between md:items-center bg-white shadow-sm rounded-lg p-4 gap-4"
            >
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-20 sm:w-16 sm:h-16 object-cover rounded-md mx-auto sm:mx-0"
                />
                <div className="mt-3 sm:mt-0 text-center sm:text-left">
                  <h3 className="font-semibold text-lg">{app.title}</h3>
                  <div className="flex flex-wrap justify-center sm:justify-start items-center text-sm text-gray-600 gap-x-6 gap-y-2 mt-1">
                    <span className="flex items-center gap-1">
                      <img src={star} className="w-4 h-4" alt="rating" />
                      {app.ratingAvg}
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={download} className="w-4 h-4" alt="downloads" />
                      {app.downloads}
                    </span>
                  </div>
                </div>
              </div>

             
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-[#00d390] hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-[3px] w-full sm:w-auto text-center"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No installed apps yet.</p>
        )}
      </div>
    </div>
  );
};

export default Instalation;
