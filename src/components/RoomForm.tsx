import { useState } from 'react';
import type { Room } from '../types/index';

interface RoomFormProps {
  onSubmit: (data: Omit<Room, 'id'>) => void;
  initialData?: Room;
}

const AVAILABLE_AMENITIES_LIST = ['Wifi', 'AC', 'Gym', 'Elevator', 'Parking', 'Washing Machine', 'Pool'];

export function RoomForm({ onSubmit, initialData }: RoomFormProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [price, setPrice] = useState(initialData?.price || 0);
  const [location, setLocation] = useState(initialData?.location || 'Phnom Penh');
  const [type, setType] = useState<Room['type']>(initialData?.type || 'Single');
  const [status, setStatus] = useState<Room['status']>(initialData?.status || 'Available');
  const [image, setImage] = useState(initialData?.image || 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af');
  const [description, setDescription] = useState(initialData?.description || '');
  
  // Array management for checked amenities flags matrix
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(initialData?.amenities || ['Wifi', 'AC']);

  const handleAmenityCheckboxChange = (amenityName: string) => {
    if (selectedAmenities.includes(amenityName)) {
      setSelectedAmenities(selectedAmenities.filter(item => item !== amenityName));
    } else {
      setSelectedAmenities([...selectedAmenities, amenityName]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ 
      title, 
      price: Number(price), 
      location, 
      type, 
      status, 
      image, 
      description, 
      amenities: selectedAmenities 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Room Title</label>
        <input type="text" required value={title} onChange={e => setTitle(e.target.value)} className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-colors" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Price ($/mo)</label>
          <input type="number" required value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Location</label>
          <select value={location} onChange={e => setLocation(e.target.value)} className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500 bg-gray-50/50 focus:bg-white cursor-pointer">
            <option value="Phnom Penh">Phnom Penh</option>
            <option value="Siem Reap">Siem Reap</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Room Type</label>
          <select value={type} onChange={e => setType(e.target.value as Room['type'])} className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500 bg-gray-50/50 focus:bg-white cursor-pointer">
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Studio">Studio</option>
            <option value="Apartment">Apartment</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Status</label>
          <select value={status} onChange={e => setStatus(e.target.value as Room['status'])} className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500 bg-gray-50/50 focus:bg-white cursor-pointer">
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Image Asset Cover URL</label>
        <input type="text" value={image} onChange={e => setImage(e.target.value)} className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-colors" />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Property Amenities Checklist</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 border border-gray-100 bg-gray-50/50 rounded-xl p-3 max-h-[120px] overflow-y-auto">
          {AVAILABLE_AMENITIES_LIST.map(amenity => {
            const isChecked = selectedAmenities.includes(amenity);
            return (
              <label key={amenity} className="flex items-center gap-2 text-xs text-gray-600 font-medium cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={isChecked} 
                  onChange={() => handleAmenityCheckboxChange(amenity)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer w-4 h-4" 
                />
                <span>{amenity}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Detailed Description Summary</label>
        <textarea rows={2} value={description} onChange={e => setDescription(e.target.value)} className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-colors resize-none"></textarea>
      </div>

      <button type="submit" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md tracking-wider transition-all active:scale-[0.99] cursor-pointer">
        Save Asset Specifications
      </button>
    </form>
  );
}