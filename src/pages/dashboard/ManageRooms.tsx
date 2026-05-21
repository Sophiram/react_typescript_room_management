import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, Edit2, Trash2, MapPin, Search, ArrowUpDown, Wrench, CheckCircle, ShieldAlert } from 'lucide-react';
import { Modal } from '../../components/Modal';
import { RoomForm } from '../../components/RoomForm';
import type { Room } from '../../types/';

export function ManageRooms() {
  const { rooms, addRoom, updateRoom, deleteRoom } = useApp();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  
  // Filters & Sorting States
  const [activeTab, setActiveTab] = useState<'All' | 'Available' | 'Occupied' | 'Maintenance'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortByPrice, setSortByPrice] = useState<'none' | 'asc' | 'desc'>('none');

  // Core Processing Pipeline
  const filteredAndSortedRooms = rooms
    .filter(room => activeTab === 'All' ? true : room.status === activeTab)
    .filter(room => 
      room.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      room.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortByPrice === 'asc') return a.price - b.price;
      if (sortByPrice === 'desc') return b.price - a.price;
      return 0;
    });

  // Quick Status Toggle Handler
  const handleQuickStatusToggle = (id: string, currentStatus: Room['status']) => {
    const nextStatusMap: Record<Room['status'], Room['status']> = {
      'Available': 'Maintenance',
      'Maintenance': 'Available',
      'Occupied': 'Maintenance'
    };
    updateRoom(id, { status: nextStatusMap[currentStatus] });
  };

  // Safe Delete Action
  const handleDeleteConfirm = (id: string, title: string) => {
    if (window.confirm(`តើបងពិតជាចង់លុបបន្ទប់ "${title}" នេះមែនទេ?`)) {
      deleteRoom(id);
    }
  };

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto p-2 sm:p-4">
      {/* 1. Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Manage Rooms</h2>
          <p className="text-xs text-slate-500 mt-1">Track room inventory, adjust rates, update operational workflow statuses, and control property listings.</p>
        </div>
        <button 
          onClick={() => setIsAddOpen(true)} 
          className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-blue-200 transition-all active:scale-95 shrink-0 cursor-pointer"
        >
          <Plus size={16} /> Add New Room
        </button>
      </div>

      {/* 2. Filter & Control Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
        {/* Search Input */}
        <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50/50 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all md:col-span-2">
          <Search size={16} className="text-slate-400 shrink-0" />
          <input 
            type="text" 
            placeholder="Search by room name, title, or area location..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs focus:outline-none text-slate-700 font-medium placeholder-slate-400"
          />
        </div>

        {/* Sort Filter Dropdown */}
        <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50/50 hover:bg-white focus-within:bg-white focus-within:border-blue-500 transition-all cursor-pointer">
          <ArrowUpDown size={16} className="text-slate-400 shrink-0" />
          <select 
            value={sortByPrice} 
            onChange={(e) => setSortByPrice(e.target.value as any)}
            className="w-full bg-transparent text-xs text-slate-600 font-bold focus:outline-none cursor-pointer"
          >
            <option value="none">Sort: Default Order</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* 3. Navigation Status Tabs Grid */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x">
        {(['All', 'Available', 'Occupied', 'Maintenance'] as const).map(tab => {
          const count = tab === 'All' ? rooms.length : rooms.filter(r => r.status === tab).length;
          const isSelected = activeTab === tab;
          
          return (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)} 
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all border shrink-0 snap- Merino cursor-pointer flex items-center gap-2 ${
                isSelected 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-200' 
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span>{tab}</span>
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${
                isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* 4. Desktop View Table Display */}
      <div className="hidden lg:block bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead className="bg-slate-50 border-b border-slate-100 font-bold text-slate-500 uppercase tracking-wider">
            <tr>
              <th className="p-4 pl-6">Room Profile</th>
              <th className="p-4">Room Type</th>
              <th className="p-4">Monthly Rent</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Quick Action</th>
              <th className="p-4 pr-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
            {filteredAndSortedRooms.map(room => (
              <tr key={room.id} className="hover:bg-slate-50/40 transition-colors">
                {/* Profile column */}
                <td className="p-4 pl-6 flex items-center gap-4">
                  <img src={room.image} alt="" className="w-12 h-12 rounded-xl object-cover bg-slate-100 shadow-inner shrink-0 border border-slate-100" />
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-sm truncate">{room.title}</p>
                    <p className="text-slate-400 flex items-center gap-1 mt-1"><MapPin size={12} className="text-slate-400" />{room.location}</p>
                  </div>
                </td>
                
                {/* Type column */}
                <td className="p-4">
                  <span className="text-[11px] font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-lg uppercase tracking-wide">{room.type}</span>
                </td>
                
                {/* Price column */}
                <td className="p-4 font-black text-slate-900 text-sm">${room.price}</td>
                
                {/* Status Column */}
                <td className="p-4">
                  <span className={`px-3 py-1 text-[11px] font-extrabold rounded-full inline-block ${
                    room.status === 'Available' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                    room.status === 'Occupied' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 
                    'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>{room.status}</span>
                </td>
                
                {/* Operational Switch Actions */}
                <td className="p-4 text-center">
                  <button 
                    onClick={() => handleQuickStatusToggle(room.id, room.status)}
                    disabled={room.status === 'Occupied'}
                    title={room.status === 'Occupied' ? "Cannot modify status of an occupied room" : "Switch room state"}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 border rounded-xl text-[11px] font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer ${
                      room.status === 'Available' ? 'hover:bg-amber-50 text-amber-600 border-amber-200' : 'hover:bg-emerald-50 text-emerald-600 border-emerald-200'
                    }`}
                  >
                    {room.status === 'Available' ? (
                      <><Wrench size={13} /> Maintenance</>
                    ) : room.status === 'Maintenance' ? (
                      <><CheckCircle size={13} /> Set Ready</>
                    ) : (
                      <><ShieldAlert size={13} /> Active Lease</>
                    )}
                  </button>
                </td>

                {/* Edit / Delete Buttons */}
                <td className="p-4 pr-6 text-right">
                  <div className="flex justify-end gap-1">
                    <button onClick={() => setEditingRoom(room)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"><Edit2 size={14} /></button>
                    <button onClick={() => handleDeleteConfirm(room.id, room.title)} className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 5. Mobile Layout View Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        {filteredAndSortedRooms.map(room => (
          <div key={room.id} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="flex gap-4">
              <img src={room.image} alt="" className="w-16 h-16 rounded-xl object-cover bg-slate-100 shrink-0 border border-slate-100" />
              <div className="min-w-0 flex-grow">
                <span className={`inline-block px-2.5 py-0.5 text-[10px] font-extrabold rounded-md mb-1.5 ${
                  room.status === 'Available' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                  room.status === 'Occupied' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 
                  'bg-amber-50 text-amber-700 border border-amber-200'
                }`}>{room.status}</span>
                <h4 className="font-bold text-slate-900 text-sm truncate">{room.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1"><MapPin size={12} />{room.location}</p>
              </div>
            </div>
            
            {/* Quick Mobile Toggle */}
            <div className="bg-slate-50 p-2.5 rounded-xl flex items-center justify-between text-xs font-bold">
              <span className="text-slate-400 text-[11px]">Room System State:</span>
              <button 
                disabled={room.status === 'Occupied'}
                onClick={() => handleQuickStatusToggle(room.id, room.status)}
                className="text-blue-600 hover:underline disabled:text-slate-400 disabled:no-underline cursor-pointer"
              >
                {room.status === 'Available' ? 'Go Offline' : room.status === 'Maintenance' ? 'Go Online' : 'Lease Locked'}
              </button>
            </div>

            {/* Bottom Actions Row */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-1">
              <div className="text-base font-black text-slate-900">${room.price}<span className="text-slate-400 font-normal text-xs">/mo</span></div>
              <div className="flex gap-1.5">
                <button onClick={() => setEditingRoom(room)} className="p-2 text-slate-500 border border-slate-200 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"><Edit2 size={14} /></button>
                <button onClick={() => handleDeleteConfirm(room.id, room.title)} className="p-2 text-slate-500 border border-slate-200 rounded-xl hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"><Trash2 size={14} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. Empty Search State Screen */}
      {filteredAndSortedRooms.length === 0 && (
        <div className="text-center py-16 text-slate-400 text-xs font-bold bg-white rounded-2xl border border-slate-100 shadow-sm">
          No records found matching your active filter criteria.
        </div>
      )}

      {/* Modals Controllers Layout */}
      <Modal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} title="Create New Room Listing">
        <RoomForm onSubmit={(data) => { addRoom(data); setIsAddOpen(false); }} />
      </Modal>

      <Modal isOpen={!!editingRoom} onClose={() => setEditingRoom(null)} title="Update Room Specifications">
        {editingRoom && (
          <RoomForm initialData={editingRoom} onSubmit={(data) => { updateRoom(editingRoom.id, data); setEditingRoom(null); }} />
        )}
      </Modal>
    </div>
  );
}