import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
          
          {/* Column 1: Info/Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏠</span>
              <span className="text-white font-bold text-base tracking-tight">RoomRental</span>
            </div>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              Simplifying accommodation and listing search tasks for landlords and tenants all over Cambodia.
            </p>
          </div>

          {/* Column 2: Navigation Utilities Shortcuts */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase text-slate-200 tracking-wider">Quick Navigation</h4>
            <div className="flex flex-col gap-1.5 text-xs">
              <Link to="/" className="hover:text-blue-400 transition-colors">Browse Room Listings</Link>
              <Link to="/dashboard" className="hover:text-blue-400 transition-colors">Landlord Dashboard</Link>
            </div>
          </div>

          {/* Column 3: Contact Context */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase text-slate-200 tracking-wider">Support Channel</h4>
            <p className="text-xs leading-relaxed">
              Have inquiries? Reach out via email support system:<br />
              <span className="text-slate-200 font-medium">support@roomrental.com</span>
            </p>
          </div>

        </div>

        {/* Bottom copyright segment bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; 2026 RoomRental Management System. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}