export interface Room {
  id: string;
  title: string;        // 💡 ប្រើ title ជំនួស name
  description: string;
  price: number;
  location: string;
  type: 'Single' | 'Double' | 'Studio' | 'Apartment';
  status: 'Available' | 'Occupied' | 'Maintenance';
  image: string;
  amenities: string[];
  floor?: string;       // 💡 ថែម floor ចូលដើម្បីកុំឱ្យទាស់កូដ room.floor
}

export interface Booking {
  id: string;
  roomId: string;
  roomTitle: string;
  tenantName: string;
  tenantPhone: string;
  checkIn: string;
  status: 'Pending' | 'Confirmed' | 'Canceled';
  totalPrice: number;
}

// 💡 កែសម្រួល FilterOptions ត្រង់នេះឱ្យត្រូវនឹង Hook របស់បង ១០០%
export interface FilterOptions {
  searchTerm: string;
  statusFilter: string;
  typeFilter: string;
  floorFilter: string;
}

export interface RoomFormData extends Omit<Room, 'id'> {}