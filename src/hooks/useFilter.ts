// src/hooks/useFilter.ts

import { useState, useMemo } from 'react';
import type { Room, FilterOptions } from '../types/room';

export function useFilter(rooms: Room[]) {
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: '',
    statusFilter: 'all',
    typeFilter: 'all',
    floorFilter: 'all',
  });

  const filteredRooms = useMemo(() => {
    return rooms.filter(room => {
      const matchesSearch = room.name
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase());

      const matchesStatus =
        filters.statusFilter === 'all' || room.status === filters.statusFilter;

      const matchesType =
        filters.typeFilter === 'all' || room.type === filters.typeFilter;

      const matchesFloor =
        filters.floorFilter === 'all' || room.floor === filters.floorFilter;

      return matchesSearch && matchesStatus && matchesType && matchesFloor;
    });
  }, [rooms, filters]);

  const setSearchTerm = (term: string) => {
    setFilters(prev => ({ ...prev, searchTerm: term }));
  };

  const setStatusFilter = (status: string) => {
    setFilters(prev => ({
      ...prev,
      statusFilter: status as FilterOptions['statusFilter'],
    }));
  };

  const setTypeFilter = (type: string) => {
    setFilters(prev => ({
      ...prev,
      typeFilter: type as FilterOptions['typeFilter'],
    }));
  };

  const setFloorFilter = (floor: number | string) => {
    setFilters(prev => ({
      ...prev,
      floorFilter: floor === 'all' ? 'all' : Number(floor),
    }));
  };

  const resetFilters = () => {
    setFilters({
      searchTerm: '',
      statusFilter: 'all',
      typeFilter: 'all',
      floorFilter: 'all',
    });
  };

  return {
    filters,
    filteredRooms,
    setSearchTerm,
    setStatusFilter,
    setTypeFilter,
    setFloorFilter,
    resetFilters,
  };
}