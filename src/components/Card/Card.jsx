import React from 'react';
import { Link } from 'react-router-dom';
import doodles from '../../assets/doodles.jpeg';
import star from '../../assets/icon-ratings.png'
import download from '../../assets/icon-downloads.png'

const Card = ({ card }) => {
  const { id, title, downloads, ratingAvg, image } = card;
  


  return (
    <Link to={`/details/${id}`}>
      <div className='card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out w-[300px] h-[350px]'>
      <figure className='h-48 overflow-hidden '>
        <img
          className='w-full h-full object-cover p-3 rounded-2xl' 
          src={ image ||doodles}
          alt={title || 'Card Image'}
        />
      </figure>

      <div className='p-auto'>
        <p className='font-semibold text-lg mb-2 '>
          {title || 'Forest: Focus for Productivity'}
        </p>
        <div className='flex justify-between gap-10 pt-9 pl-3 pr-3'>
          <button className='btn'>
            <img src={download} className='w-5'></img>
            <p> {downloads}</p>
          </button>
          <button className='btn'>
            <img src={star} className='w-5'></img>
            <p>{ratingAvg}</p>
          </button>
        </div>

        
        <div className='card-actions justify-end mt-3'>
          {/* <Link to={`/details/${id}`} className='btn btn-outline'>
            
          </Link> */}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
