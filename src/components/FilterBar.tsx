// src/components/FilterBar.tsx

import { Search, RotateCcw } from 'lucide-react';
import { ROOM_TYPES, FLOORS } from '../utils/constants';
import type { FilterOptions } from '../types/room';

interface FilterBarProps {
  filters: FilterOptions;
  onSearchChange: (term: string) => void;
  onStatusChange: (status: string) => void;
  onTypeChange: (type: string) => void;
  onFloorChange: (floor: number | string) => void;
  onReset: () => void;
}

export function FilterBar({
  filters,
  onSearchChange,
  onStatusChange,
  onTypeChange,
  onFloorChange,
  onReset,
}: FilterBarProps) {
  const hasActiveFilters =
    filters.searchTerm ||
    filters.statusFilter !== 'all' ||
    filters.typeFilter !== 'all' ||
    filters.floorFilter !== 'all';

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
        <input
          type="text"
          placeholder="Search rooms by name..."
          value={filters.searchTerm}
          onChange={e => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
        />
      </div>

      {/* Filter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Status Filter */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-2 uppercase">
            Status
          </label>
          <select
            value={filters.statusFilter}
            onChange={e => onStatusChange(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        {/* Type Filter */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-2 uppercase">
            Type
          </label>
          <select
            value={filters.typeFilter}
            onChange={e => onTypeChange(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          >
            <option value="all">All Types</option>
            {ROOM_TYPES.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Floor Filter */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-2 uppercase">
            Floor
          </label>
          <select
            value={filters.floorFilter === 'all' ? 'all' : filters.floorFilter}
            onChange={e => onFloorChange(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          >
            <option value="all">All Floors</option>
            {FLOORS.map(floor => (
              <option key={floor} value={floor}>
                Floor {floor}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          <button
            onClick={onReset}
            disabled={!hasActiveFilters}
            className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              hasActiveFilters
                ? 'bg-slate-700/50 text-slate-200 hover:bg-slate-700'
                : 'bg-slate-800/50 text-slate-500 cursor-not-allowed'
            }`}
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
