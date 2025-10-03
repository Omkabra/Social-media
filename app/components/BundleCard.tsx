"use client";
import React from 'react';
import { BundlePackage } from '@/app/types';

interface BundleCardProps {
  bundle: BundlePackage;
  colors: { bg: string; border: string };
  onPurchase: () => void;
}

const BundleCard = ({ bundle, colors, onPurchase }: BundleCardProps) => {
  const BundleIcon = bundle.icon;
  
  return (
    <div
      className={`relative bg-gradient-to-br ${colors.bg} rounded-3xl p-6 sm:p-8 text-white shadow-xl hover:scale-105 transition-transform cursor-pointer ${
        bundle.bestValue ? 'border-4 border-yellow-400' : ''
      }`}
      onClick={onPurchase}
    >
      {bundle.bestValue && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
          BEST VALUE
        </div>
      )}
      {bundle.premium && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
          Premium
        </div>
      )}
      <div className="text-center mb-6">
        <BundleIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4" />
        <h3 className="text-2xl sm:text-3xl font-bold mb-2">{bundle.name}</h3>
        <div className="text-3xl sm:text-4xl font-bold">{bundle.price}</div>
      </div>
      <div className="space-y-3 mb-6">
        {bundle.features.map((feature, idx) => {
          const FeatureIcon = feature.icon;
          return (
            <div key={idx} className="flex items-center gap-3">
              <FeatureIcon className="w-5 h-5 flex-shrink-0" />
              <span className="text-base sm:text-lg">{feature.text}</span>
            </div>
          );
        })}
      </div>
      <p className="text-sm opacity-90 italic">{bundle.note}</p>
    </div>
  );
};

export default BundleCard;