"use client";
import React from 'react';
import { ServicePackage } from '@/app/types';

interface PackageCardProps {
  pkg: ServicePackage;
  colors: { bg: string; border: string };
  serviceTitle: string;
  onPurchase: () => void;
}

const PackageCard = ({ pkg, colors, serviceTitle, onPurchase }: PackageCardProps) => {
  const PackageIcon = pkg.icon;
  
  return (
    <div
      className={`relative bg-gradient-to-br ${colors.bg} rounded-3xl p-6 text-white shadow-xl hover:scale-105 transition-transform cursor-pointer ${
        pkg.popular ? 'border-4 border-yellow-400' : ''
      }`}
      onClick={onPurchase}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
          POPULAR
        </div>
      )}
      {pkg.save && (
        <div className="absolute -top-3 right-4 bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
          Save {pkg.save}
        </div>
      )}
      <div className="text-center">
        <PackageIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-90" />
        <div className="text-4xl sm:text-5xl font-bold mb-2">{pkg.amount}</div>
        <div className="text-lg sm:text-xl mb-4 opacity-90">
          {serviceTitle.replace('Social Media ', '')}
        </div>
        {pkg.originalPrice && (
          <div className="text-base sm:text-lg line-through opacity-70 mb-1">{pkg.originalPrice}</div>
        )}
        <div className="text-3xl sm:text-4xl font-bold mb-6 flex items-center justify-center gap-1">
          {pkg.price} <span className="text-2xl">🎉</span>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;