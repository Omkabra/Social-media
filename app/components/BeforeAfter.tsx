import React from 'react';
import Image from 'next/image';

const resultImages = [
  '/result-1.jpeg',
  '/result-2.jpeg',
  '/result-3.jpeg',
  '/result-4.jpeg',
  '/result-5.jpeg',
  '/result-6.jpeg',
];

const BeforeAfter = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Our Proven Results
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            We deliver real, measurable growth for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resultImages.map((imagePath, index) => (
            <div 
              key={index} 
              className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 relative" 
              style={{ paddingBottom: '125%' }} 
            >
              <Image 
                src={imagePath} 
                alt={`Client growth result ${index + 1}`} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;