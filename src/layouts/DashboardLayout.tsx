import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Home, CalendarCheck, ArrowLeft, Menu, X, 
  Layers, Users, Banknote, FilePieChart, UserPlus, CheckSquare 
} from 'lucide-react';

export default function DashboardLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 🔥 នេះជាកន្លែងដែលបងអាចបន្ថែមមុខងារថ្មីៗបានតាមចិត្ត (ចង់បានប៉ុន្មានមុខក៏បាន)
  const links = [
    { to: '/dashboard', label: 'Overview', icon: <LayoutDashboard size={18} /> },
    { to: '/dashboard/rooms', label: 'Manage Rooms', icon: <Home size={18} /> },
    { to: '/dashboard/bookings', label: 'Rent Requests', icon: <CalendarCheck size={18} /> },
    { to: '/dashboard/room-types', label: 'Room Types', icon: <Layers size={18} /> },
    { to: '/dashboard/staff', label: 'Manage Staff', icon: <Users size={18} /> },
    { to: '/dashboard/prices', label: 'Prices & Services', icon: <Banknote size={18} /> },
    { to: '/dashboard/reports', label: 'Reports', icon: <FilePieChart size={18} /> },
    { to: '/dashboard/check-in-out', label: 'Check-In / Out', icon: <CheckSquare size={18} /> },
  ];

  return (
    <div className="flex h-screen bg-slate-50/50 overflow-hidden text-slate-800 antialiased">
      
      {/* Desktop Left-Pinned Static Navigation Side Bar */}
      <aside className="hidden lg:flex w-64 bg-slate-900 text-slate-400 flex-col shrink-0 border-r border-slate-800">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white text-base shadow-md shadow-blue-700/50">👑</div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-tight">Admin System</h2>
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Control Desk Panel</p>
          </div>
        </div>
        <nav className="flex-grow p-4 space-y-1 overflow-y-auto">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide uppercase transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10'
                    : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <Link to="/" className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Back to Main App
          </Link>
        </div>
      </aside>

      {/* Mobile Drawer Slide Navigation */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm lg:hidden" onClick={() => setIsSidebarOpen(false)}>
          <aside className="w-64 h-full bg-slate-900 text-slate-400 flex flex-col p-4 space-y-4 animate-slide-in" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <span className="text-sm font-bold text-white flex items-center gap-2">👑 Management</span>
              <button onClick={() => setIsSidebarOpen(false)} className="text-slate-400 hover:text-white"><X size={20} /></button>
            </div>
            <nav className="space-y-1 flex-grow overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase transition-colors ${
                    location.pathname === link.to ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
            <Link to="/" className="flex items-center gap-2 text-xs font-bold text-slate-500 pt-4 border-t border-slate-800"><ArrowLeft size={14} /> Main Screen</Link>
          </aside>
        </div>
      )}

      {/* Adaptive Work Space Main Panel */}
      <div className="flex-grow flex flex-col min-w-0 overflow-hidden">
        {/* Top Floating App Bar (Mobile Only) */}
        <header className="flex lg:hidden items-center justify-between h-16 px-6 bg-white border-b border-gray-100 shrink-0">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 -ml-2 text-gray-600 hover:bg-gray-50 rounded-xl"><Menu size={22} /></button>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Landlord Control Room</span>
          <div className="w-8 h-8 bg-blue-50 border text-blue-600 font-bold rounded-xl flex items-center justify-center text-xs">A</div>
        </header>

        {/* Content View Outlet */}
        <main className="flex-grow overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-[1600px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
}