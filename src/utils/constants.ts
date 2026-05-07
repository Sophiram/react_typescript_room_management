// src/utils/constants.ts

export const AMENITIES = [
  'WiFi',
  'Projector',
  'Whiteboard',
  'AC',
  'TV Screen',
  'Kitchen',
  'Phone System',
  'Video Conference',
  'Coffee Machine',
  'Standing Desk',
];

export const ROOM_TYPES = [
  { value: 'conference', label: 'Conference Room', icon: '🏛️' },
  { value: 'office', label: 'Office', icon: '💼' },
  { value: 'meeting', label: 'Meeting Room', icon: '👥' },
  { value: 'lounge', label: 'Lounge', icon: '☕' },
] as const;

export const ROOM_STATUSES = [
  { value: 'available', label: 'Available', color: 'emerald' },
  { value: 'occupied', label: 'Occupied', color: 'blue' },
  { value: 'maintenance', label: 'Maintenance', color: 'amber' },
] as const;

export const FLOORS = [1, 2, 3, 4, 5];

export const STATUS_COLORS = {
  available: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-700',
    border: 'border-emerald-300',
  },
  occupied: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    border: 'border-blue-300',
  },
  maintenance: {
    bg: 'bg-amber-100',
    text: 'text-amber-700',
    border: 'border-amber-300',
  },
};

export const SAMPLE_ROOMS = [
  {
    id: '1',
    name: 'Conference A',
    type: 'conference' as const,
    capacity: 20,
    floor: 2,
    status: 'available' as const,
    amenities: ['WiFi', 'Projector', 'Whiteboard'],
  },
  {
    id: '2',
    name: 'Office B1',
    type: 'office' as const,
    capacity: 2,
    floor: 1,
    status: 'occupied' as const,
    amenities: ['WiFi'],
  },
  {
    id: '3',
    name: 'Meeting Hub',
    type: 'meeting' as const,
    capacity: 8,
    floor: 3,
    status: 'available' as const,
    amenities: ['WiFi', 'TV Screen'],
  },
  {
    id: '4',
    name: 'Executive Suite',
    type: 'conference' as const,
    capacity: 15,
    floor: 4,
    status: 'maintenance' as const,
    amenities: ['WiFi', 'Projector', 'Phone System'],
  },
];