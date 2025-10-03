"use client";
import React from 'react';
import { Services } from '@/app/types';

interface NavigationProps {
  activeTab: keyof Services;
  setActiveTab: (tab: keyof Services) => void;
  services: Services;
}

const Navigation = ({ activeTab, setActiveTab, services }: NavigationProps) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {(Object.keys(services) as Array<keyof Services>).map((key) => {
            const service = services[key];
            const Icon = service.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-semibold transition-all text-sm sm:text-base ${
                  activeTab === key
                    ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{service.title.replace('Social Media ', '')}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;