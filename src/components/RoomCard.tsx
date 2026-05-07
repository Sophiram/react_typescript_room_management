// src/components/RoomCard.tsx

import { Trash2, Edit2, Users, MapPin } from 'lucide-react';
import type { Room } from '../types/room';
import { ROOM_TYPES, STATUS_COLORS } from '../utils/constants';

interface RoomCardProps {
  room: Room;
  onEdit: (room: Room) => void;
  onDelete: (id: string) => void;
}

export function RoomCard({ room, onEdit, onDelete }: RoomCardProps) {
  const roomType = ROOM_TYPES.find(t => t.value === room.type);
  const statusColors = STATUS_COLORS[room.status];

  return (
    <div className="group bg-gradient-to-br from-slate-800/60 to-slate-800/40 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{roomType?.icon}</span>
          <div>
            <h3 className="text-lg font-bold text-slate-100">{room.name}</h3>
            {room.location && (
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                <MapPin size={12} /> {room.location}
              </p>
            )}
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors.bg} ${statusColors.text} ${statusColors.border}`}
        >
          {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
        </span>
      </div>

      {/* Description */}
      {room.description && (
        <p className="text-sm text-slate-400 mb-4 line-clamp-2">
          {room.description}
        </p>
      )}

      {/* Details */}
      <div className="space-y-3 mb-4 pb-4 border-b border-slate-700/50">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Type:</span>
          <span className="text-slate-200 font-medium">{roomType?.label}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400 flex items-center gap-2">
            <Users size={16} /> Capacity:
          </span>
          <span className="text-slate-200 font-medium">{room.capacity} people</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Floor:</span>
          <span className="text-slate-200 font-medium">{room.floor}</span>
        </div>
      </div>

      {/* Amenities */}
      {room.amenities.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-slate-400 mb-2 font-semibold">AMENITIES</p>
          <div className="flex flex-wrap gap-2">
            {room.amenities.map(amenity => (
              <span
                key={amenity}
                className="bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded border border-slate-600/50"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 pt-4 border-t border-slate-700/50">
        <button
          onClick={() => onEdit(room)}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 py-2 rounded-lg transition-all text-sm font-medium group/btn"
        >
          <Edit2 size={16} className="group-hover/btn:scale-110 transition-transform" />
          Edit
        </button>
        <button
          onClick={() => {
            if (confirm(`Are you sure you want to delete "${room.name}"?`)) {
              onDelete(room.id);
            }
          }}
          className="flex-1 flex items-center justify-center gap-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 py-2 rounded-lg transition-all text-sm font-medium group/btn"
        >
          <Trash2 size={16} className="group-hover/btn:scale-110 transition-transform" />
          Delete
        </button>
      </div>
    </div>
  );
}
