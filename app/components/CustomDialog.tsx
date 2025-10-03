"use client";
import React from 'react';

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
  buttonText: string;
}

const CustomDialog = ({ isOpen, onClose, onConfirm, title, children, buttonText }: CustomDialogProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      
      <div
        className="relative w-full max-w-md p-6 mx-4 bg-white rounded-2xl shadow-xl transform transition-all"
        onClick={(e) => e.stopPropagation()} 
      >
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">{title}</h3>
        <div className="text-gray-600 text-center space-y-2 mb-6">
          {children}
        </div>
        
        
        <button
          onClick={onConfirm}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
        >
          {buttonText}
        </button>

        
        <button 
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close dialog"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomDialog;