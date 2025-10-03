import React from 'react';
import { Check } from 'lucide-react';

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
      <div className="flex items-center gap-3">
        <div className="bg-green-500 rounded-full p-2">
          <Check className="w-5 h-5 text-white" />
        </div>
        <span className="text-gray-700 font-semibold text-sm sm:text-base">Instant Delivery</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-green-500 rounded-full p-2">
          <Check className="w-5 h-5 text-white" />
        </div>
        <span className="text-gray-700 font-semibold text-sm sm:text-base">Safe & Secure</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-green-500 rounded-full p-2">
          <Check className="w-5 h-5 text-white" />
        </div>
        <span className="text-gray-700 font-semibold text-sm sm:text-base">Boost Credibility</span>
      </div>
    </div>
  );
};

export default TrustBadges;