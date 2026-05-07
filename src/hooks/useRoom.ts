// src/hooks/useRoom.ts

import { useState, useCallback } from 'react';
import type { Room, RoomFormData } from '../types/room';
import { SAMPLE_ROOMS } from '../utils/constants';

export function useRoom() {
  const [rooms, setRooms] = useState<Room[]>(SAMPLE_ROOMS);

  const addRoom = useCallback((formData: RoomFormData) => {
    const newRoom: Room = {
      ...formData,
      id: Date.now().toString(),
      lastUpdated: new Date(),
    };
    setRooms(prev => [...prev, newRoom]);
    return newRoom;
  }, []);

  const updateRoom = useCallback((id: string, formData: RoomFormData) => {
    setRooms(prev =>
      prev.map(room =>
        room.id === id
          ? { ...room, ...formData, lastUpdated: new Date() }
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

  const getAvailableRooms = useCallback(
    () => rooms.filter(room => room.status === 'available'),
    [rooms]
  );

  const getRoomsByType = useCallback(
    (type: string) => rooms.filter(room => room.type === type),
    [rooms]
  );

  const getRoomsByFloor = useCallback(
    (floor: number) => rooms.filter(room => room.floor === floor),
    [rooms]
  );

  const updateRoomStatus = useCallback(
    (id: string, status: 'available' | 'occupied' | 'maintenance') => {
      setRooms(prev =>
        prev.map(room =>
          room.id === id
            ? { ...room, status, lastUpdated: new Date() }
            : room
        )
      );
    },
    []
  );

  const stats = {
    total: rooms.length,
    available: rooms.filter(r => r.status === 'available').length,
    occupied: rooms.filter(r => r.status === 'occupied').length,
    maintenance: rooms.filter(r => r.status === 'maintenance').length,
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