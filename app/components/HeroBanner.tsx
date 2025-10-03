import React from 'react';
import { StandardService, BundleService } from '@/app/types';

interface HeroBannerProps {
  service: StandardService | BundleService;
}

const HeroBanner = ({ service }: HeroBannerProps) => {
  const ServiceIcon = service.icon;
  
  return (
    <div className={`bg-gradient-to-r ${service.gradient} text-white py-12 sm:py-16`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* MODIFICATION: Removed the wrapping div with the white background */}
        <ServiceIcon className="inline-block w-16 h-16 sm:w-20 sm:h-20 mb-6" />
        
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg sm:text-2xl opacity-90">{service.subtitle}</p>
      </div>
    </div>
  );
};

export default HeroBanner;