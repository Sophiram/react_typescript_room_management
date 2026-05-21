import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Layout Templates
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Website Pages
import { Landing } from './pages/Landing';
import { RoomDetails } from './pages/RoomDetails';

// Admin Dashboard Pages
import { Overview } from './pages/dashboard/Overview';
import { ManageRooms } from './pages/dashboard/ManageRooms';
import { Bookings } from './pages/dashboard/Bookings';
import { RoomTypes } from './pages/dashboard/RoomTypes';
import { ManageStaff } from './pages/dashboard/ManageStaff';
import { PricesServices } from './pages/dashboard/PricesServices'; // 💡 ផ្ទៀងផ្ទាត់ឈ្មោះឱ្យត្រូវ
import { ReportsView } from './pages/dashboard/ReportsView';
import { CheckInOut } from './pages/dashboard/CheckInOut';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Public Website */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/room/:id" element={<RoomDetails />} />
          </Route>

          {/* Core Dashboard System Panel */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="rooms" element={<ManageRooms />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="room-types" element={<RoomTypes />} />
            <Route path="staff" element={<ManageStaff />} />
            {/* 💡 កែប្រែផ្លូវត្រង់នេះទៅជា prices-services ឱ្យដូចទៅនឹង Sidebar របស់បង */}
<Route path="prices" element={<PricesServices />} />
            <Route path="reports" element={<ReportsView />} />
            <Route path="check-in-out" element={<CheckInOut />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}