// src/components/RoomForm.tsx

import { useState, useEffect } from 'react';
import type { Room, RoomFormData } from '../types/room';
import { AMENITIES, ROOM_TYPES, FLOORS } from '../utils/constants';

interface RoomFormProps {
  initialData?: Room;
  onSubmit: (data: RoomFormData) => void;
  onCancel: () => void;
}

export function RoomForm({
  initialData,
  onSubmit,
  onCancel,
}: RoomFormProps) {
  const [formData, setFormData] = useState<RoomFormData>(
    initialData || {
      name: '',
      type: 'conference',
      capacity: 1,
      floor: 1,
      status: 'available',
      amenities: [],
      description: '',
      location: '',
    }
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        type: initialData.type,
        capacity: initialData.capacity,
        floor: initialData.floor,
        status: initialData.status,
        amenities: initialData.amenities,
        description: initialData.description,
        location: initialData.location,
      });
    }
  }, [initialData]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Room name is required';
    }

    if (formData.capacity < 1) {
      newErrors.capacity = 'Capacity must be at least 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const toggleAmenity = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Room Name */}
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Room Name *
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          placeholder="e.g., Conference Room A"
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Description
        </label>
        <textarea
          value={formData.description || ''}
          onChange={e =>
            setFormData(prev => ({ ...prev, description: e.target.value }))
          }
          rows={3}
          className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          placeholder="Add a description for this room..."
        />
      </div>

      {/* Grid: Type, Capacity, Floor */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Type *
          </label>
          <select
            value={formData.type}
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                type: e.target.value as RoomFormData['type'],
              }))
            }
            className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          >
            {ROOM_TYPES.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Capacity *
          </label>
          <input
            type="number"
            min="1"
            value={formData.capacity}
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                capacity: Math.max(1, parseInt(e.target.value) || 1),
              }))
            }
            className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          />
          {errors.capacity && (
            <p className="text-red-400 text-sm mt-1">{errors.capacity}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Floor *
          </label>
          <select
            value={formData.floor}
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                floor: parseInt(e.target.value),
              }))
            }
            className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          >
            {FLOORS.map(floor => (
              <option key={floor} value={floor}>
                Floor {floor}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid: Status, Location */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Status *
          </label>
          <select
            value={formData.status}
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                status: e.target.value as RoomFormData['status'],
              }))
            }
            className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          >
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Location
          </label>
          <input
            type="text"
            value={formData.location || ''}
            onChange={e =>
              setFormData(prev => ({ ...prev, location: e.target.value }))
            }
            className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
            placeholder="e.g., Building A"
          />
        </div>
      </div>

      {/* Amenities */}
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-3">
          Amenities
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {AMENITIES.map(amenity => (
            <button
              key={amenity}
              type="button"
              onClick={() => toggleAmenity(amenity)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                formData.amenities.includes(amenity)
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {amenity}
            </button>
          ))}
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex gap-3 pt-6 border-t border-slate-700/50">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 bg-slate-700 text-slate-100 rounded-lg font-medium hover:bg-slate-600 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
        >
          {initialData ? 'Update Room' : 'Create Room'}
        </button>
      </div>
    </form>
  );
}
