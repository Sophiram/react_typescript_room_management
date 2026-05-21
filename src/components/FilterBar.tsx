import { Search, MapPin, Home } from 'lucide-react';

interface FilterBarProps {
  search: string;
  setSearch: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  type: string;
  setType: (v: string) => void;
}

export function FilterBar({ search, setSearch, location, setLocation, type, setType }: FilterBarProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto -mt-8 relative z-10">
      <div className="flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-4">
        <Search className="text-gray-400 shrink-0" size={20} />
        <input type="text" placeholder="Search keywords..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-transparent focus:outline-none text-sm" />
      </div>
      <div className="flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-4">
        <MapPin className="text-gray-400 shrink-0" size={20} />
        <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-transparent focus:outline-none text-sm text-gray-700 cursor-pointer">
          <option value="">All Locations</option>
          <option value="Phnom Penh">Phnom Penh</option>
          <option value="Siem Reap">Siem Reap</option>
        </select>
      </div>
      <div className="flex items-center gap-2 pb-2 md:pb-0">
        <Home className="text-gray-400 shrink-0" size={20} />
        <select value={type} onChange={(e) => setType(e.target.value)} className="w-full bg-transparent focus:outline-none text-sm text-gray-700 cursor-pointer">
          <option value="">All Types</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Studio">Studio</option>
          <option value="Apartment">Apartment</option>
        </select>
      </div>
    </div>
  );
}