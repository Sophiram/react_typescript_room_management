import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
}

export function StatsCard({ title, value, icon, description }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      </div>
      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">{icon}</div>
    </div>
  );
}