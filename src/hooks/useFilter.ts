import { useState, useMemo } from 'react';
import type { Room, FilterOptions } from '../types'; // 💡 ផ្ទៀងផ្ទាត់ផ្លូវទៅកាន់ types របស់បង

export function useFilter(rooms: Room[]) {
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: '',
    statusFilter: 'all',
    typeFilter: 'all',
    floorFilter: 'all',
  });

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      // 💡 កែពី room.name មក room.title
      const matchesSearch = room.title
        ? room.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
        : true;

      const matchesStatus =
        filters.statusFilter === 'all' || room.status === filters.statusFilter;

      const matchesType =
        filters.typeFilter === 'all' || room.type === filters.typeFilter;

      const matchesFloor =
        filters.floorFilter === 'all' || room.floor === filters.floorFilter;

      return matchesSearch && matchesStatus && matchesType && matchesFloor;
    });
  }, [rooms, filters]);

  const handleSearchChange = (term: string) => {
    setFilters((prev) => ({ ...prev, searchTerm: term }));
  };

  const handleStatusChange = (status: string) => {
    setFilters((prev) => ({ ...prev, statusFilter: status }));
  };

  const handleTypeChange = (type: string) => {
    setFilters((prev) => ({ ...prev, typeFilter: type }));
  };

  const handleFloorChange = (floor: string) => {
    setFilters((prev) => ({ ...prev, floorFilter: floor }));
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
    handleSearchChange,
    handleStatusChange,
    handleTypeChange,
    handleFloorChange,
    resetFilters,
  };
}