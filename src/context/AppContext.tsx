import React, { createContext, useContext, useState, useEffect } from 'react';
// Changed from '../types' to targeting '../types/room' directly
import type { Room, Booking } from '../types/index';

interface AppContextType {
  rooms: Room[];
  bookings: Booking[];
  addRoom: (room: Omit<Room, 'id'>) => void;
  updateRoom: (id: string, updatedRoom: Partial<Room>) => void;
  deleteRoom: (id: string) => void;
  addBooking: (booking: Omit<Booking, 'id'>) => void;
  changeBookingStatus: (id: string, status: Booking['status']) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialRooms: Room[] = [
  { id: '1', title: 'Modern Studio Near Central Market', description: 'Fully furnished studio with a beautiful balcony, high-speed internet, and 24/7 security.', price: 250, location: 'Phnom Penh', type: 'Studio', status: 'Available', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80', amenities: ['AC', 'Wifi', 'Gym', 'Elevator'] },
  { id: '2', title: 'Cozy Single Room Riverside', description: 'Affordable, clean room near local universities. Perfect for students or solo workers.', price: 120, location: 'Siem Reap', type: 'Single', status: 'Occupied', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80', amenities: ['Wifi', 'Fan', 'Parking'] },
  { id: '3', title: 'Luxury 2-Bedroom Apartment', description: 'Spacious family unit complete with washing machine, full kitchen setups, and premium gym access.', price: 550, location: 'Phnom Penh', type: 'Apartment', status: 'Available', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80', amenities: ['AC', 'Wifi', 'Gym', 'Washing Machine', 'Pool'] }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rooms, setRooms] = useState<Room[]>(() => JSON.parse(localStorage.getItem('rooms') || JSON.stringify(initialRooms)));
  const [bookings, setBookings] = useState<Booking[]>(() => JSON.parse(localStorage.getItem('bookings') || '[]'));

  useEffect(() => { localStorage.setItem('rooms', JSON.stringify(rooms)); }, [rooms]);
  useEffect(() => { localStorage.setItem('bookings', JSON.stringify(bookings)); }, [bookings]);

  const addRoom = (room: Omit<Room, 'id'>) => setRooms([...rooms, { ...room, id: `room-${Date.now()}` }]);
  const updateRoom = (id: string, updated: Partial<Room>) => setRooms(rooms.map(r => r.id === id ? { ...r, ...updated } : r));
  const deleteRoom = (id: string) => setRooms(rooms.filter(r => r.id !== id));
  
  const addBooking = (booking: Omit<Booking, 'id'>) => setBookings([...bookings, { ...booking, id: `book-${Date.now()}` }]);
  const changeBookingStatus = (id: string, status: Booking['status']) => setBookings(bookings.map(b => b.id === id ? { ...b, status } : b));

  return (
    <AppContext.Provider value={{ rooms, bookings, addRoom, updateRoom, deleteRoom, addBooking, changeBookingStatus }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};