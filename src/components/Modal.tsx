import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Prevent background body element jumping or scrolling while modal view stays active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* 1. Backdrop layer to dim out the background */}
      <div 
        className="fixed inset-0 w-screen h-screen bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 z-[99998]"
        onClick={onClose}
      />

      {/* 2. Layout Wrapper to force absolute vertical and horizontal alignment */}
      <div className="fixed inset-0 w-screen h-screen flex items-center justify-center p-4 pointer-events-none z-[99999]">
        
        {/* 3. The Authentication Form Card Container Box */}
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-gray-100 flex flex-col mx-auto my-auto pointer-events-auto overflow-hidden transform transition-all duration-300 max-h-[85vh] animate-fade-in animate-scale-up">
          
          {/* Modal Header Section Layout panel */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white shrink-0">
            <h3 className="text-base font-bold text-gray-900 tracking-tight">{title}</h3>
            <button 
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all cursor-pointer focus:outline-none"
            >
              <X size={16} />
            </button>
          </div>

          {/* Scrollable Container Body zone panel item element details */}
          <div className="p-6 overflow-y-auto bg-white text-left text-gray-700 scrollbar-thin scrollbar-thumb-gray-200">
            {children}
          </div>

        </div>
      </div>
    </>
  );
}