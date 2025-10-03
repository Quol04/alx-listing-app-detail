import React, { useState } from 'react';
import Card from '@/components/common/Card';
import Image from 'next/image';
import { PROPERTYLISTINGSAMPLE } from '@/constants/index';


const HomePage: React.FC = () => {

  return (
 
    <>
      <div className="min-h-screen">
        <div>
        {/* Hero Section */}
        <Image
          src="/assets/hero_image.png"
          alt="Hero Image"
          width={1200}
          height={400}
          className="w-full h-64 object-cover"
        />
           <div className='text-center mt-4 space-y-2'>
            <h1>Find your favorite place here!</h1>
            <p>The best prices for over 2 million properties worldwide</p>
           </div> 
      </div>
      <div className="flex justify-between items-center">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              <button className="bg-green-500 text-white py-2 px-4 rounded">All</button>
              <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded ml-2">Top Villa</button>
              <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded ml-2">Free Reschedule</button>
              <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded ml-2">Book Now, Pay later</button>
              <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded ml-2">Self CheckIn</button>
              <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded ml-2">Instant Book</button>

          </div>
          <div>
              <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded ml-2">Filter</button>
              <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded ml-2">Sort by: Highest Price</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
