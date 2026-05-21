// src/hooks/useRoom.ts

import { useState, useCallback } from 'react';
// 💡 ១. កែសម្រួលផ្លូវមកត្រឹម '../types' (លុបសញ្ញា / ចេញ)
import type { Room, RoomFormData } from '../types'; 
import { SAMPLE_ROOMS } from '../utils/constants';

export function useRoom() {
  const [rooms, setRooms] = useState<Room[]>(SAMPLE_ROOMS);

  const addRoom = useCallback((formData: RoomFormData) => {
    const newRoom: Room = {
      ...formData,
      id: Date.now().toString(),
      // 💡 ២. ប្រសិនបើ Interface Room គ្មាន lastUpdated ទេ យើងមិនបាច់ដាក់វាឡើយ
    };
    setRooms(prev => [...prev, newRoom]);
    return newRoom;
  }, []);

  const updateRoom = useCallback((id: string, formData: RoomFormData) => {
    setRooms(prev =>
      prev.map(room =>
        room.id === id
          ? { ...room, ...formData } // 💡 លុប lastUpdated ចេញ
          : room
      )
    );
  }, []);

  const deleteRoom = useCallback((id: string) => {
    setRooms(prev => prev.filter(room => room.id !== id));
  }, []);

  const getRoomById = useCallback(
    (id: string) => rooms.find(room => room.id === id),
    [rooms]
  );

  // 💡 ៣. កែសម្រួលស្ថានភាព 'available' ទៅជា 'Available' (អក្សរធំ) ឱ្យត្រូវតាម Type Interface
  const getAvailableRooms = useCallback(
    () => rooms.filter(room => room.status === 'Available'),
    [rooms]
  );

  const getRoomsByType = useCallback(
    (type: string) => rooms.filter(room => room.type === type),
    [rooms]
  );

  const getRoomsByFloor = useCallback(
    (floor: string) => rooms.filter(room => room.floor === floor),
    [rooms]
  );

  const updateRoomStatus = useCallback(
    (id: string, status: 'Available' | 'Occupied' | 'Maintenance') => {
      setRooms(prev =>
        prev.map(room =>
          room.id === id
            ? { ...room, status } // 💡 លុប lastUpdated ចេញ
            : room
        )
      );
    },
    []
  );

  // 💡 ៤. កែសម្រួលអក្សរធំលើ Status ក្នុងផ្នែកគណនា Stats 
  const stats = {
    total: rooms.length,
    available: rooms.filter(r => r.status === 'Available').length,
    occupied: rooms.filter(r => r.status === 'Occupied').length,
    maintenance: rooms.filter(r => r.status === 'Maintenance').length,
  };

  return {
    rooms,
    addRoom,
    updateRoom,
    deleteRoom,
    getRoomById,
    getAvailableRooms,
    getRoomsByType,
    getRoomsByFloor,
    updateRoomStatus,
    stats,
  };
}