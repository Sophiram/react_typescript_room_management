import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FilterBar } from '../components/FilterBar';
import { RoomCard } from '../components/RoomCard';

export function Landing() {
  const { rooms } = useApp();
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.title.toLowerCase().includes(search.toLowerCase());
    const matchesLoc = location ? room.location === location : true;
    const matchesType = type ? room.type === type : true;
    return matchesSearch && matchesLoc && matchesType;
  });

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight mb-3 sm:text-5xl">Find Your Next Perfect Stay</h2>
        <p className="text-blue-100 text-lg max-w-xl mx-auto">Explore premium rental houses, studio units, and single rooms across premium locations.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <FilterBar search={search} setSearch={setSearch} location={location} setLocation={setLocation} type={type} setType={setType} />
        
        <h3 className="font-bold text-2xl text-gray-900 mt-16 mb-6">Available Listings ({filteredRooms.length})</h3>
        {filteredRooms.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No rooms match your filter queries. Try adjusting parameters!</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map(room => <RoomCard key={room.id} room={room} />)}
          </div>
        )}
      </div>
    </div>
  );
}