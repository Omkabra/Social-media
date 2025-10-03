"use client";
import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import { services, CONTACT_INFO } from '@/app/data/services';
import { Services, StandardService, BundleService } from '@/app/types';

import Header from '@/app/components/Header';
import Navigation from '@/app/components/Navigation';
import HeroBanner from '@/app/components/HeroBanner';
import PackageCard from '@/app/components/PackageCard';
import BundleCard from '@/app/components/BundleCard';
import TrustBadges from '@/app/components/TrustBadges';
import BeforeAfter from '@/app/components/BeforeAfter';
import Footer from '@/app/components/Footer';
import CustomDialog from '@/app/components/CustomDialog';

const getPackageColors = (activeTab: keyof Services, index: number) => {
  const colorMaps = {
    comments: [
      { bg: 'from-orange-400 to-orange-600', border: 'border-orange-500' },
      { bg: 'from-orange-500 to-red-500', border: 'border-red-500' },
      { bg: 'from-red-500 to-red-600', border: 'border-red-600' },
      { bg: 'from-red-600 to-red-700', border: 'border-red-700' }
    ],
    views: [
      { bg: 'from-teal-400 to-teal-600', border: 'border-teal-500' },
      { bg: 'from-teal-500 to-blue-500', border: 'border-blue-500' },
      { bg: 'from-blue-500 to-blue-600', border: 'border-blue-600' },
      { bg: 'from-blue-600 to-indigo-600', border: 'border-indigo-600' }
    ],
    likes: [
      { bg: 'from-pink-400 to-pink-600', border: 'border-pink-500' },
      { bg: 'from-pink-500 to-pink-600', border: 'border-pink-600' },
      { bg: 'from-pink-600 to-purple-600', border: 'border-purple-600' },
      { bg: 'from-purple-600 to-purple-700', border: 'border-purple-700' }
    ],
    followers: [
      { bg: 'from-blue-400 to-blue-500', border: 'border-blue-500' },
      { bg: 'from-blue-500 to-blue-600', border: 'border-blue-600' },
      { bg: 'from-blue-600 to-purple-600', border: 'border-purple-600' },
      { bg: 'from-purple-600 to-purple-700', border: 'border-purple-700' }
    ]
  };
  return colorMaps[activeTab as keyof typeof colorMaps]?.[index] || colorMaps.followers[index];
};

const getBundleColors = (index: number) => {
  const colors = [
    { bg: 'from-purple-400 to-purple-600', border: 'border-purple-500' },
    { bg: 'from-purple-500 to-blue-500', border: 'border-blue-500' },
    { bg: 'from-blue-500 to-blue-600', border: 'border-blue-600' },
    { bg: 'from-blue-600 to-purple-700', border: 'border-purple-700' }
  ];
  return colors[index];
};

const GrowwMoreeeAgencyPage = () => {
  const [activeTab, setActiveTab] = useState<keyof Services>('followers');
  const currentService = services[activeTab];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [purchaseDetails, setPurchaseDetails] = useState({ name: '', price: '' });

  
  const handlePurchase = (packageName: string, price: string) => {
    setPurchaseDetails({ name: packageName, price: price });
    setIsDialogOpen(true);
  };

  
  const confirmPurchase = () => {
    const { name, price } = purchaseDetails;
    const message = `Hi ${CONTACT_INFO.agencyName}, I'm interested in the "${name}" package for ${price}. Please let me know how to proceed!`;

   
    const textArea = document.createElement('textarea');
    textArea.value = message;
    document.body.appendChild(textArea);
    textArea.select();
    try {
     
      document.execCommand('copy');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      
      alert('Could not copy message automatically. Please manually type your request on Instagram.');
    }
    document.body.removeChild(textArea);

    
    window.open(CONTACT_INFO.instagramDirectLink, "_blank");
    
    
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} services={services} />
      <HeroBanner service={currentService} />

      <main>
        {activeTab !== 'bundles' ? (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {(currentService as StandardService).packages.map((pkg, index) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  colors={getPackageColors(activeTab, index)}
                  serviceTitle={currentService.title}
                  onPurchase={() => handlePurchase(`${pkg.amount} ${currentService.title.replace('Social Media ', '')}`, pkg.price)}
                />
              ))}
            </div>
            <TrustBadges />
            {activeTab === 'followers' && <BeforeAfter />}
            {(currentService as StandardService).saleText && (
              <div className={`bg-gradient-to-r ${currentService.gradient} rounded-2xl p-6 sm:p-8 text-white text-center my-12`}>
                <div className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-center gap-2"><Zap className="w-6 h-6 sm:w-8 sm:h-8" /> Flash Sale!</div>
                <p className="text-lg sm:text-xl">{(currentService as StandardService).saleText}</p>
              </div>
            )}
            <div className="text-center my-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">{currentService.heading}</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">{currentService.description}</p>
              <button onClick={() => handlePurchase(currentService.title, 'Custom Package')}
                className={`bg-gradient-to-r ${currentService.gradient} text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold shadow-xl hover:scale-105 transition-transform`}>
                {currentService.cta}
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {(currentService as BundleService).packages.map((bundle, index) => (
                <BundleCard key={bundle.id} bundle={bundle} colors={getBundleColors(index)} onPurchase={() => handlePurchase(bundle.name, bundle.price)} />
              ))}
            </div>
            <div className="my-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">🎯 Why Choose Bundle Packages?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(currentService as BundleService).benefits.map((benefit, idx) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                      <div className="inline-block p-3 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full mb-4"><BenefitIcon className="w-8 h-8 text-white" /></div>
                      <h4 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <TrustBadges />
            <div className="text-center mt-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">{currentService.heading}</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">{currentService.description}</p>
              <button onClick={() => handlePurchase('Bundle Package', 'Custom Bundle')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold shadow-xl hover:scale-105 transition-transform">
                {currentService.cta}
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
      
      
      <CustomDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={confirmPurchase}
        title="Confirm Your Selection"
        buttonText="Copy Message & Go to Instagram"
      >
        <p>A message for your selected package will be copied.</p>
        <p>You will be redirected to Instagram to complete your purchase. Just paste the message in the chat!</p>
      </CustomDialog>
    </div>
  );
};

export default GrowwMoreeeAgencyPage;