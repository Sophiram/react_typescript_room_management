import { Plus, Layers, Edit2, Trash2 } from 'lucide-react';

export function RoomTypes() {
  const types = [
    { id: 1, name: 'Studio Room', code: 'STD', basePrice: 250, count: 12 },
    { id: 2, name: 'Single Room', code: 'SGL', basePrice: 120, count: 18 },
    { id: 3, name: 'Luxury Apartment', code: 'LUX', basePrice: 550, count: 5 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Room Types</h1>
          <p className="text-xs text-slate-500">Manage categories, base configurations, and pricing models.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-blue-600/10">
          <Plus size={16} /> Add New Type
        </button>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50/75 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500">
            <tr>
              <th className="p-4">Type Name</th>
              <th className="p-4">Code</th>
              <th className="p-4">Base Price</th>
              <th className="p-4">Total Rooms</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-600 font-medium">
            {types.map((type) => (
              <tr key={type.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 flex items-center gap-3 font-bold text-slate-900">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Layers size={16} /></div>
                  {type.name}
                </td>
                <td className="p-4"><span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg font-mono font-bold">{type.code}</span></td>
                <td className="p-4 text-slate-900 font-bold">${type.basePrice}/mo</td>
                <td className="p-4">{type.count} Rooms</td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit2 size={14} /></button>
                    <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}