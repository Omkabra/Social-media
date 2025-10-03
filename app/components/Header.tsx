import React from 'react';
import { Phone, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '@/app/data/services';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {CONTACT_INFO.agencyName}
            </h1>
            <p className="text-gray-600 text-sm">Your Social Media Growth Partner</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{CONTACT_INFO.phone}</span>
            </a>
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
              <Instagram className="w-4 h-4" />
              <span className="text-sm">Follow Us</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;