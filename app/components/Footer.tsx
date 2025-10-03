import React from 'react';
import { Lock, Zap, DollarSign, Phone, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '@/app/data/services';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">{CONTACT_INFO.agencyName}</h3>
            <p className="text-gray-400 mb-4">Your trusted partner for social media growth.</p>
            <div className="flex flex-col gap-2">
              
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors justify-center md:justify-start">
                <Instagram className="w-4 h-4" />
                @growwmoree.agency
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-center md:text-left">Our Guarantees</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 justify-center md:justify-start"><Lock className="w-5 h-5" /><span>Secure Payment</span></div>
              <div className="flex items-center gap-2 justify-center md:justify-start"><Zap className="w-5 h-5" /><span>24/7 Support</span></div>
              <div className="flex items-center gap-2 justify-center md:justify-start"><DollarSign className="w-5 h-5" /><span>Money Back Guarantee</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 mb-2">Click any package or contact us directly to get started!</p>
          <p className="text-gray-500 text-sm">© 2024 {CONTACT_INFO.agencyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;