import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, DollarSign, Calendar, User, Phone, CheckCircle } from 'lucide-react';

export function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { rooms, addBooking } = useApp();
  
  const room = rooms.find(r => r.id === id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [booked, setBooked] = useState(false);

  if (!room) {
    return <div className="text-center py-20 font-bold text-gray-500">Room not found.</div>;
  }

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    addBooking({ roomId: room.id, roomTitle: room.title, tenantName: name, tenantPhone: phone, checkIn: date, status: 'Pending', totalPrice: room.price });
    setBooked(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <img src={room.image} alt={room.title} className="w-full h-80 object-cover rounded-xl shadow-sm" />
        <div>
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-100 text-blue-800 rounded-full">{room.type}</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-1">{room.title}</h2>
          <div className="flex items-center gap-1 text-gray-500 text-sm"><MapPin size={16} />{room.location}</div>
        </div>
        <div className="border-t pt-4">
          <h4 className="font-bold text-gray-900 mb-2">Description</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{room.description}</p>
        </div>
        <div className="border-t pt-4">
          <h4 className="font-bold text-gray-900 mb-2">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {room.amenities.map((item, idx) => (
              <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium">✓ {item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit space-y-4">
        <div className="flex items-baseline text-blue-600 font-bold text-2xl pb-4 border-b">
          <DollarSign size={22} className="-mr-1" />{room.price}<span className="text-gray-400 text-xs font-normal ml-1">/month</span>
        </div>

        {booked ? (
          <div className="bg-green-50 text-green-800 p-4 rounded-xl text-center space-y-2">
            <CheckCircle className="mx-auto text-green-600" size={32} />
            <h5 className="font-bold text-sm">Booking Request Sent!</h5>
            <p className="text-xs text-green-700">The Landlord will review your application soon.</p>
            <button onClick={() => navigate('/')} className="mt-2 w-full text-xs bg-green-600 text-white py-1.5 rounded-lg font-semibold">Back Home</button>
          </div>
        ) : (
          <form onSubmit={handleBook} className="space-y-3">
            <h5 className="font-bold text-gray-900 text-sm">Book This Room</h5>
            <div className="relative">
              <User className="absolute left-2.5 top-2.5 text-gray-400" size={16} />
              <input type="text" required placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="w-full pl-9 pr-3 py-2 border rounded-lg text-xs focus:outline-blue-500" />
            </div>
            <div className="relative">
              <Phone className="absolute left-2.5 top-2.5 text-gray-400" size={16} />
              <input type="tel" required placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} className="w-full pl-9 pr-3 py-2 border rounded-lg text-xs focus:outline-blue-500" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-2.5 top-2.5 text-gray-400" size={16} />
              <input type="date" required value={date} onChange={e => setDate(e.target.value)} className="w-full pl-9 pr-3 py-2 border rounded-lg text-xs focus:outline-blue-500" />
            </div>
            <button type="submit" disabled={room.status !== 'Available'} className="w-full py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xs font-bold rounded-lg shadow-sm transition-colors">
              {room.status === 'Available' ? 'Submit Application' : 'Room Unavailable'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}