import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import star from '../../assets/icon-ratings.png'
import download from '../../assets/icon-downloads.png'
import like from '../../assets/icon-review.png'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/cardData.json') 
      .then(res => {
        
        const foundCard = res.data.find(item => item.id === parseInt(id));
        setCard(foundCard);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!card) {
    return <p className="text-center mt-10 text-red-500">Card not found</p>;
  }
  

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];

    // prevent duplicate installs
    const alreadyInstalled = installedApps.some(app => app.id === card.id);
    if (!alreadyInstalled) {
      installedApps.push(card);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      alert(`${card.title} installed successfully!`);
    } else {
      alert(`${card.title} is already installed.`);
    }
  };
  return (
    
    <div className=" bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="max-w-5xl mx-auto bg-white p-8  shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <figure>
            <img
            src={card.image}
            alt={card.title}
            className="w-40 h-40 object-cover rounded-xl shadow-sm"
          />
          </figure>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-3">
              Developed by <span className="text-blue-500 font-semibold">{card.companyName}</span>
            </p>

            <div className="flex justify-center items-center md:justify-start gap-6 text-gray-700">
              <div>
                <img src={download} className='w-8'></img>
                <p className="font-semibold text-lg">{card.downloads}</p>
                <p className="text-sm">Downloads</p>
              </div>
              <div>
                <img src={star} className='w-8'></img>
                <p className="font-semibold text-lg">{card.ratingAvg}</p>
                <p className="text-sm">Average Rating</p>
              </div>
              <div>
                <img src={like} className='w-8'></img>
                <p className="font-semibold text-lg">{card.reviews}</p>
                <p className="text-sm">Total Reviews</p>
              </div>
            </div>

            <button onClick={handleInstall} className="mt-5 bg-[#00d390] hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-[5px]">
              Install Now ({card.size} MB)
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Ratings</h3>
          <ResponsiveContainer width="100%" height={250}>
  <BarChart
 
  data={[...card.ratings].sort((b, a) => 
    parseInt(a.name) - parseInt(b.name)
  )}
  layout="vertical"
  margin={{ left: 30, right: 30, top: 20, bottom: 20 }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis type="number" />
  <YAxis
    dataKey="name"
    type="category"
    tickFormatter={(rating) => `${rating}★`}
  />
  <Tooltip formatter={(value) => [`${value} ratings`, 'Count']} />
  <Bar dataKey="count" fill="#f59e0b" radius={[0, 6, 6, 0]} />
</BarChart>
</ResponsiveContainer>

        </div>

        
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Description</h3>
          <p className="text-gray-600 leading-relaxed">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
