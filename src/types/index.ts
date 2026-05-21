// src/types/room.ts (or src/types/index.ts)

export interface Room {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'Single' | 'Double' | 'Studio' | 'Apartment';
  status: 'Available' | 'Occupied' | 'Maintenance';
  image: string;
  amenities: string[];
}

export interface Booking {
  id: string;
  roomId: string;
  roomTitle: string;
  tenantName: string;
  tenantPhone: string;
  checkIn: string;
  status: 'Pending' | 'Confirmed' | 'Canceled';
  totalPrice: number;
}