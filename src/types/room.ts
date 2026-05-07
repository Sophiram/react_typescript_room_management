export type RoomStatus = 'available' | 'occupied' | 'maintenance';
export type RoomType = 'conference' | 'office' | 'meeting' | 'lounge';

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  capacity: number;
  floor: number;
  status: RoomStatus;
  amenities: string[];
  description?: string;
  location?: string;
  lastUpdated?: Date;
}

export interface RoomFormData {
  name: string;
  type: RoomType;
  capacity: number;
  floor: number;
  status: RoomStatus;
  amenities: string[];
  description?: string;
  location?: string;
}

export interface FilterOptions {
  searchTerm: string;
  statusFilter: RoomStatus | 'all';
  typeFilter: RoomType | 'all';
  floorFilter: number | 'all';
}