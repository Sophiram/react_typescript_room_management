// src/pages/RoomListing.tsx

import { Search, MapPin, Users, DollarSign, Star, Heart } from 'lucide-react';
import { useState } from 'react';

interface RoomListing {
  id: string;
  name: string;
  type: string;
  price: number;
  location: string;
  capacity: number;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[];
  featured?: boolean;
}

const SAMPLE_ROOMS: RoomListing[] = [
  {
    id: '1',
    name: 'Modern Office Space',
    type: 'office',
    price: 500,
    location: 'Phnom Penh, Central',
    capacity: 20,
    rating: 4.8,
    reviews: 45,
    image: '🏢',
    amenities: ['WiFi', 'AC', 'Parking'],
    featured: true,
  },
  {
    id: '2',
    name: 'Cozy Apartment',
    type: 'apartment',
    price: 300,
    location: 'Phnom Penh, South',
    capacity: 4,
    rating: 4.5,
    reviews: 28,
    image: '🏠',
    amenities: ['WiFi', 'Kitchen', 'Garden'],
  },
  {
    id: '3',
    name: 'Conference Hall',
    type: 'conference',
    price: 800,
    location: 'Phnom Penh, Central',
    capacity: 100,
    rating: 4.9,
    reviews: 62,
    image: '🏛️',
    amenities: ['Projector', 'WiFi', 'Catering'],
    featured: true,
  },
  {
    id: '4',
    name: 'Boutique Hotel Room',
    type: 'hotel',
    price: 150,
    location: 'Phnom Penh, Tourist Area',
    capacity: 2,
    rating: 4.6,
    reviews: 89,
    image: '🏨',
    amenities: ['WiFi', 'Breakfast', 'Gym'],
  },
];

export function RoomListing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filteredRooms = SAMPLE_ROOMS.filter((room) => {
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || room.type === selectedType;
    const matchesPrice = room.price >= priceRange[0] && room.price <= priceRange[1];
    return matchesSearch && matchesType && matchesPrice;
  });

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search rooms by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-4 flex-wrap">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="all">All Types</option>
                <option value="office">Office</option>
                <option value="apartment">Apartment</option>
                <option value="conference">Conference</option>
                <option value="hotel">Hotel</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Price Range</label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Min"
                />
                <span className="text-gray-400">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <p className="text-gray-600 font-medium">
          Found {filteredRooms.length} room{filteredRooms.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Room Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
                  {room.featured && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                      Featured
                    </div>
                  )}
                  <button
                    onClick={() => toggleFavorite(room.id)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow hover:shadow-lg transition"
                  >
                    <Heart
                      size={20}
                      className={favorites.has(room.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                    />
                  </button>
                  <div className="text-8xl">{room.image}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {room.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin size={16} />
                    <span className="text-sm">{room.location}</span>
                  </div>

                  {/* Features */}
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{room.capacity} capacity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={16} />
                      <span>${room.price}/month</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(room.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">{room.rating}</span>
                    <span className="text-sm text-gray-500">({room.reviews} reviews)</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {room.amenities.map((amenity) => (
                      <span key={amenity} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No rooms found</h3>
            <p className="text-gray-600">Try adjusting your filters or search term</p>
          </div>
        )}
      </div>
    </div>
  );
}