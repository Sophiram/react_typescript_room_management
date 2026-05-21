import { Link } from 'react-router-dom';
import { MapPin, DollarSign } from 'lucide-react';
import  type { Room } from '../types';

export function RoomCard({ room }: { room: Room }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <div className="relative h-48 w-full bg-gray-100">
        <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
        <span className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full shadow-sm ${
          room.status === 'Available' ? 'bg-green-100 text-green-800' : room.status === 'Occupied' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
        }`}>{room.status}</span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">{room.type}</span>
        <h3 className="font-bold text-gray-900 text-lg line-clamp-1 mb-2">{room.title}</h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
          <MapPin size={16} /> <span>{room.location}</span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex items-baseline text-blue-600 font-bold text-xl">
            <DollarSign size={18} className="-mr-0.5" />
            {room.price}<span className="text-gray-400 text-xs font-normal">/month</span>
          </div>
          <Link to={`/room/${room.id}`} className="px-3 py-1.5 bg-gray-900 hover:bg-blue-600 text-white font-medium text-xs rounded-lg transition-colors">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}