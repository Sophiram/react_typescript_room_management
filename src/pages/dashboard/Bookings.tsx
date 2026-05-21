import { useApp } from '../../context/AppContext';
import { Check, X, Clock } from 'lucide-react';

export function Bookings() {
  const { bookings, changeBookingStatus, updateRoom } = useApp();

  const handleConfirm = (id: string, roomId: string) => {
    changeBookingStatus(id, 'Confirmed');
    updateRoom(roomId, { status: 'Occupied' });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Booking Requests</h2>
        <p className="text-xs text-gray-500">Approve incoming tenant documentation or mark entries canceled.</p>
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        {bookings.length === 0 ? (
          <div className="text-center py-12 text-gray-400 text-sm">No reservation filings have been logged yet.</div>
        ) : (
          <table className="w-full text-left border-collapse text-sm">
            <thead className="bg-gray-50 border-b border-gray-100 font-semibold text-gray-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="p-4">Tenant Info</th>
                <th className="p-4">Target Room</th>
                <th className="p-4">Check-In Date</th>
                <th className="p-4">Invoice Value</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y text-gray-700">
              {bookings.map(b => (
                <tr key={b.id} className="hover:bg-gray-50/50">
                  <td className="p-4">
                    <p className="font-bold text-gray-900">{b.tenantName}</p>
                    <p className="text-xs text-gray-400">{b.tenantPhone}</p>
                  </td>
                  <td className="p-4 font-medium text-gray-900 max-w-[200px] truncate">{b.roomTitle}</td>
                  <td className="p-4 text-xs text-gray-500 font-medium">{b.checkIn}</td>
                  <td className="p-4 font-bold text-gray-900">${b.totalPrice}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      b.status === 'Confirmed' ? 'bg-green-100 text-green-800' : b.status === 'Pending' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {b.status === 'Pending' && <Clock size={12} />}
                      {b.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {b.status === 'Pending' && (
                      <div className="flex justify-end gap-2">
                        <button onClick={() => handleConfirm(b.id, b.roomId)} className="p-1 bg-green-50 text-green-600 border border-green-200 hover:bg-green-100 rounded-lg"><Check size={16} /></button>
                        <button onClick={() => changeBookingStatus(b.id, 'Canceled')} className="p-1 bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 rounded-lg"><X size={16} /></button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}