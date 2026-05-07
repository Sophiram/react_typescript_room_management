// src/App.tsx

import { useState } from 'react';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { RoomForm } from './components/RoomForm';
import { RoomCard } from './components/RoomCard';
import { FilterBar } from './components/FilterBar';
import { StatsCard } from './components/StatsCard';
import { useRoom } from './hooks/useRoom';
import { useFilter } from './hooks/useFilter';
import type { Room, RoomFormData } from './types/room';
export default function App() {
  const { rooms, addRoom, updateRoom, deleteRoom, stats } = useRoom();
  const { filters, filteredRooms, setSearchTerm, setStatusFilter, setTypeFilter, setFloorFilter, resetFilters } = useFilter(rooms);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);

  const handleAddRoom = () => {
    setEditingRoom(null);
    setIsModalOpen(true);
  };

  const handleEditRoom = (room: Room) => {
    setEditingRoom(room);
    setIsModalOpen(true);
  };

  const handleSaveRoom = (formData: RoomFormData) => {
    if (editingRoom) {
      updateRoom(editingRoom.id, formData);
    } else {
      addRoom(formData);
    }
    setIsModalOpen(false);
    setEditingRoom(null);
  };

  const handleDeleteRoom = (id: string) => {
    deleteRoom(id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingRoom(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <Header onAddRoom={handleAddRoom} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            label="Total Rooms"
            value={stats.total}
            color="cyan"
            icon="📊"
          />
          <StatsCard
            label="Available"
            value={stats.available}
            color="emerald"
            icon="✅"
          />
          <StatsCard
            label="Occupied"
            value={stats.occupied}
            color="blue"
            icon="👤"
          />
          <StatsCard
            label="Maintenance"
            value={stats.maintenance}
            color="amber"
            icon="🔧"
          />
        </div>

        {/* Filter Bar */}
        <div className="mb-8 p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl">
          <FilterBar
            filters={filters}
            onSearchChange={setSearchTerm}
            onStatusChange={setStatusFilter}
            onTypeChange={setTypeFilter}
            onFloorChange={setFloorFilter}
            onReset={resetFilters}
          />
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-100">
              Rooms
              <span className="text-slate-400 font-normal ml-2">
                {filteredRooms.length} of {rooms.length}
              </span>
            </h2>
          </div>
          {filteredRooms.length === 0 && rooms.length > 0 && (
            <button
              onClick={resetFilters}
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Rooms Grid */}
        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map(room => (
              <RoomCard
                key={room.id}
                room={room}
                onEdit={handleEditRoom}
                onDelete={handleDeleteRoom}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-200 mb-2">
              No rooms found
            </h3>
            <p className="text-slate-400 text-center max-w-md">
              {rooms.length === 0
                ? 'No rooms have been created yet. Click "New Room" to get started!'
                : 'Try adjusting your filters to find what you\'re looking for.'}
            </p>
            {rooms.length === 0 && (
              <button
                onClick={handleAddRoom}
                className="mt-6 px-6 py-2 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
              >
                Create First Room
              </button>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingRoom ? 'Edit Room' : 'Create New Room'}
        size="lg"
      >
        <RoomForm
          initialData={editingRoom || undefined}
          onSubmit={handleSaveRoom}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
}
