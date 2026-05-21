import React from 'react';
import { Home, Users, DollarSign, Activity, ArrowUpRight, TrendingUp, Bell } from 'lucide-react';

export function Overview() {
  // Analytical calculation points record mockup card datasets
  const metrics = [
    { title: 'Gross Revenue', value: '$4,250.00', change: '+12.5%', icon: DollarSign, color: 'from-emerald-500 to-teal-600', shadow: 'shadow-emerald-500/10' },
    { title: 'Active Tenants', value: '42 / 50', change: '84% Occupied', icon: Users, color: 'from-blue-500 to-indigo-600', shadow: 'shadow-blue-500/10' },
    { title: 'Pending Inquiries', value: '5 Requests', change: 'Action Required', icon: Activity, color: 'from-violet-500 to-purple-600', shadow: 'shadow-purple-500/10' },
  ];

  const recentRequests = [
    { id: 1, name: 'Sokha Meng', room: 'Room 204 (Studio)', date: 'May 20, 2026', phone: '+855 12 345 678' },
    { id: 2, name: 'Borith Chem', room: 'Room 102 (Single)', date: 'May 19, 2026', phone: '+855 99 888 777' },
  ];

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-7xl mx-auto w-full">
      
      {/* Title greeting framework panel */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
        <div>
          <h1 className="text-xl font-black text-gray-900 tracking-tight">Executive Control Overview</h1>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">Real-Time Operational Analytics Matrix</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2.5 bg-white border border-gray-200 text-gray-500 hover:text-gray-800 rounded-xl shadow-sm hover:shadow transition-all relative">
            <Bell size={16} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full" />
          </button>
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-gray-800">Operator Session</p>
            <p className="text-[10px] font-medium text-blue-600 uppercase tracking-wider">Super Administrator</p>
          </div>
        </div>
      </div>

      {/* Grid Layout System Items panel section block rows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <div key={i} className={`bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between ${m.shadow}`}>
              <div className="space-y-2">
                <p className="text-[10px] font-extrabold uppercase text-gray-400 tracking-widest">{m.title}</p>
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">{m.value}</h3>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md inline-flex items-center gap-1">
                  <TrendingUp size={12} /> {m.change}
                </span>
              </div>
              <div className={`w-14 h-14 bg-gradient-to-tr ${m.color} rounded-2xl flex items-center justify-center text-white shadow-inner`}>
                <Icon size={24} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Secondary Split Panel Framework System design */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Double Segment View Panel */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm lg:col-span-2 space-y-5">
          <div className="flex items-center justify-between border-b border-gray-50 pb-4">
            <h3 className="text-sm font-bold text-gray-900 tracking-tight uppercase">Incoming Rent Requests</h3>
            <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
              View All Pipeline <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="space-y-3">
            {recentRequests.map(req => (
              <div key={req.id} className="p-4 border border-gray-100 bg-gray-50/50 hover:bg-gray-50 rounded-xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-sm font-bold">
                    {req.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">{req.name}</h4>
                    <p className="text-[11px] text-gray-500 font-medium mt-0.5">{req.room} • {req.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-[11px] font-mono font-bold text-gray-600 bg-gray-200/60 px-2.5 py-1 rounded-lg">{req.phone}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm transition-colors cursor-pointer">
                    Review Approval
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Segment View Panel */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-900 tracking-tight uppercase border-b border-gray-50 pb-4">Room Staking Overview</h3>
          <div className="space-y-4 pt-2">
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1.5">
                <span>Studio Rooms Occupancy</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full" style={{ width: '90%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1.5">
                <span>Single Luxury Rooms Occupancy</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-violet-600 h-full rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}