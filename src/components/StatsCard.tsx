// src/components/StatsCard.tsx

import React from 'react';

interface StatsCardProps {
  label: string;
  value: number;
  color: 'cyan' | 'emerald' | 'blue' | 'amber';
  icon?: React.ReactNode;
}

const colorStyles = {
  cyan: {
    bg: 'from-cyan-900/30 to-cyan-900/10',
    border: 'border-cyan-700/50',
    label: 'text-cyan-300',
    value: 'text-cyan-400',
  },
  emerald: {
    bg: 'from-emerald-900/30 to-emerald-900/10',
    border: 'border-emerald-700/50',
    label: 'text-emerald-300',
    value: 'text-emerald-400',
  },
  blue: {
    bg: 'from-blue-900/30 to-blue-900/10',
    border: 'border-blue-700/50',
    label: 'text-blue-300',
    value: 'text-blue-400',
  },
  amber: {
    bg: 'from-amber-900/30 to-amber-900/10',
    border: 'border-amber-700/50',
    label: 'text-amber-300',
    value: 'text-amber-400',
  },
};

export function StatsCard({ label, value, color, icon }: StatsCardProps) {
  const styles = colorStyles[color];

  return (
    <div
      className={`bg-gradient-to-br ${styles.bg} border ${styles.border} rounded-lg p-4 backdrop-blur`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm font-medium ${styles.label}`}>{label}</p>
          <p className={`text-3xl font-bold ${styles.value} mt-2`}>{value}</p>
        </div>
        {icon && <div className="text-2xl opacity-50">{icon}</div>}
      </div>
    </div>
  );
}
