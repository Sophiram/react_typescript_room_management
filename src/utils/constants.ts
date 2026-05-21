// src/utils/constants.ts
import type { Room } from '../types';

// 💡 ១. កែសម្រួលគ្រឿងបរិក្ខារឱ្យត្រូវនឹងបន្ទប់ជួល/ខុនដូ
export const AMENITIES = [
  'WiFi',
  'Air Conditioning',
  'Bedding',
  'Kitchen',
  'TV',
  'Refrigerator',
  'Washing Machine',
  'Balcony',
  'Gym Access',
  'Pool',
];

// 💡 ២. កែសម្រួលប្រភេទបន្ទប់ (ROOM_TYPES) ឱ្យត្រូវនឹង Type Interface ('Single' | 'Double' | 'Studio' | 'Apartment')
export const ROOM_TYPES = [
  { value: 'Single', label: 'Single Room', icon: '👤' },
  { value: 'Double', label: 'Double Room', icon: '👥' },
  { value: 'Studio', label: 'Studio Apartment', icon: '🏢' },
  { value: 'Apartment', label: 'Premium Apartment', icon: '👑' },
] as const;

// 💡 ៣. កែសម្រួលស្ថានភាព (ROOM_STATUSES) ឱ្យជាអក្សរធំដើមតួ ត្រូវនឹង Type Interface
export const ROOM_STATUSES = [
  { value: 'Available', label: 'Available', color: 'emerald' },
  { value: 'Occupied', label: 'Occupied', color: 'blue' },
  { value: 'Maintenance', label: 'Maintenance', color: 'amber' },
] as const;

export const FLOORS = ['1', '2', '3', '4', '5'];

// 💡 ៤. កែសម្រួល Key របស់ STATUS_COLORS ឱ្យជាអក្សរធំ (Available, Occupied, Maintenance) ទៅតាម State UI របស់បង
export const STATUS_COLORS = {
  Available: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-700',
    border: 'border-emerald-300',
  },
  Occupied: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    border: 'border-blue-300',
  },
  Maintenance: {
    bg: 'bg-amber-100',
    text: 'text-amber-700',
    border: 'border-amber-300',
  },
};

// 💡 ៥. ទិន្នន័យគំរូបន្ទប់ជួលពិតប្រាកដ (ស៊ីគ្នាជាមួយ UI និង Type ១០០%)
export const SAMPLE_ROOMS: Room[] = [
  {
    id: '1',
    title: 'Standard Single Room A1',
    description: 'A cozy single room perfect for students or solo travelers. Fully furnished.',
    price: 150,
    location: 'Building A, Floor 1',
    type: 'Single',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
    amenities: ['WiFi', 'Air Conditioning', 'Bedding'],
    floor: '1'
  },
  {
    id: '2',
    title: 'Luxury Double Room B3',
    description: 'Spacious double room with a beautiful city view and modern kitchen corner.',
    price: 280,
    location: 'Building B, Floor 3',
    type: 'Double',
    status: 'Occupied',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80',
    amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'TV'],
    floor: '3'
  },
  {
    id: '3',
    title: 'Modern Studio Apartment C2',
    description: 'Premium studio loft apartment with full services and high-end security.',
    price: 450,
    location: 'Building C, Floor 2',
    type: 'Studio',
    status: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
    amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Gym Access', 'Pool'],
    floor: '2'
  }
];