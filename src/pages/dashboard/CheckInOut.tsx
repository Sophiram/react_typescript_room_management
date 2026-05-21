import { Search, LogIn, LogOut, ArrowRight } from 'lucide-react';

export function CheckInOut() {
  const activities = [
    { id: 1, tenant: 'Nika Sam', room: 'Room 204', type: 'Check-In', date: 'May 20, 2026', deposit: 250 },
    { id: 2, tenant: 'Vireak Both', room: 'Room 102', type: 'Check-Out', date: 'May 18, 2026', deposit: 0 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Check-In / Out Hub</h1>
        <p className="text-xs text-slate-500">Monitor logging procedures, security deposit transfers, and keys handling counters.</p>
      </div>

      {/* Actions Selector Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl text-left shadow-lg shadow-blue-600/10 hover:opacity-95 transition-opacity group">
          <div className="space-y-1">
            <h3 className="text-sm font-bold uppercase tracking-wider">Execute Check-In</h3>
            <p className="text-[11px] text-blue-100">Assign vacant room to approved tenants.</p>
          </div>
          <div className="p-3 bg-white/10 rounded-xl group-hover:translate-x-1 transition-transform"><LogIn size={20} /></div>
        </button>
        <button className="flex items-center justify-between p-5 bg-slate-900 text-white rounded-2xl text-left shadow-lg shadow-slate-900/10 hover:opacity-95 transition-opacity group">
          <div className="space-y-1">
            <h3 className="text-sm font-bold uppercase tracking-wider">Process Check-Out</h3>
            <p className="text-[11px] text-slate-400">Clear bills, calculate refunds and release properties.</p>
          </div>
          <div className="p-3 bg-white/10 rounded-xl group-hover:translate-x-1 transition-transform"><LogOut size={20} /></div>
        </button>
      </div>

      {/* Recent History Table */}
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Recent Operations Logs</h3>
          <div className="relative"><Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input type="text" placeholder="Search operations..." className="bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:border-blue-500 w-48 font-medium" /></div>
        </div>
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50/50 text-[10px] font-bold uppercase text-slate-400 tracking-wider border-b border-slate-100">
            <tr>
              <th className="p-4">Tenant Name</th>
              <th className="p-4">Target Room</th>
              <th className="p-4">Action Type</th>
              <th className="p-4">Logged Timestamp</th>
              <th className="p-4 text-right">Deposit Managed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-600">
            {activities.map((act) => (
              <tr key={act.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 text-slate-900 font-bold">{act.tenant}</td>
                <td className="p-4"><span className="px-2.5 py-1 bg-slate-100 rounded-lg text-slate-700 font-bold">{act.room}</span></td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md ${act.type === 'Check-In' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                    {act.type}
                  </span>
                </td>
                <td className="p-4 text-slate-400">{act.date}</td>
                <td className="p-4 text-right text-slate-900 font-bold">${act.deposit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}