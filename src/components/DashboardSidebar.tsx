import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Home, CalendarRange, Layers, Users, 
  FilePieChart, Banknote, UserPlus, CheckSquare, Receipt, Search, LogOut, ChevronLeft 
} from 'lucide-react';

export function DashboardSidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 1. បញ្ជីម៉ឺនុយទាំងអស់ដែលបងចង់ថែមឱ្យលើសពី ៣ មុខចាស់
  const menuItems = [
    { path: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { path: '/dashboard/rooms', label: 'Manage Rooms', icon: Home },
    { path: '/dashboard/bookings', label: 'Rent Requests', icon: CalendarRange, badge: '5' },
    { path: '/dashboard/room-types', label: 'Manage Room Types', icon: Layers },
    { path: '/dashboard/staff', label: 'Manage Staff', icon: Users },
    { path: '/dashboard/prices-services', label: 'Prices & Services', icon: Banknote },
    { path: '/dashboard/reports', label: 'View Reports', icon: FilePieChart },
    { path: '/dashboard/register-guest', label: 'Register Guest', icon: UserPlus },
    { path: '/dashboard/check-in-out', label: 'Check-in / Out', icon: CheckSquare },
  ];

  return (
    <aside className={`bg-[#0f172a] text-slate-200 min-h-screen flex flex-col border-r border-slate-800 transition-all duration-300 relative z-40 ${isCollapsed ? 'w-20' : 'w-72'}`}>
      
      {/* Brand Header */}
      <div className="p-6 flex items-center justify-between border-b border-slate-800/60 shrink-0 h-24">
        {!isCollapsed ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-lg shadow-md">
              👑
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-tight">Admin System</h2>
              <span className="text-[10px] font-semibold text-blue-400 tracking-wider uppercase">Control Desk Panel</span>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-lg mx-auto">
            👑
          </div>
        )}
      </div>

      {/* 🔥 ផ្នែកសំខាន់៖ យកបញ្ជីម៉ឺនុយទាំងអស់មក .map() បង្ហាញលើអេក្រង់ */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all group ${
                isActive ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-4">
                <item.icon size={18} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'} />
                {!isCollapsed && <span>{item.label}</span>}
              </div>
              {!isCollapsed && item.badge && (
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black bg-blue-500 text-white">{item.badge}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sign Out Bottom */}
      <div className="p-4 border-t border-slate-800/60 bg-slate-950/20 shrink-0">
        <button className="w-full flex items-center gap-4 px-4 py-3 text-xs font-bold uppercase tracking-wider text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors cursor-pointer">
          <LogOut size={18} />
          {!isCollapsed && <span>Back to Main App</span>}
        </button>
      </div>
    </aside>
  );
}