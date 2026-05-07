// src/components/Header.tsx

import { Plus } from 'lucide-react';

interface HeaderProps {
  onAddRoom: () => void;
}


export function Header({ onAddRoom }: HeaderProps) {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Room Management
            </h1>
            <p className="text-slate-400 mt-1">
              Manage and organize your spaces efficiently
            </p>
          </div>
          <button
            onClick={onAddRoom}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <Plus size={20} /> New Room
          </button>
        </div>
      </div>
    </div>
  );
}
