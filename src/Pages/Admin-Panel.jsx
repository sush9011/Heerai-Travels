import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck,
  Car,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  User,
  TrendingUp,
  Users,
  CheckCircle,
  MapPin,
  Clock
} from "lucide-react";

/* --- Mock Data --- */
const STATS = [
  { title: "Total Bookings", value: "1,248", icon: CalendarCheck, color: "text-blue-600", bg: "bg-blue-100" },
  { title: "Active Fleet", value: "48", icon: Car, color: "text-emerald-600", bg: "bg-emerald-100" },
  { title: "Total Customers", value: "3,892", icon: Users, color: "text-purple-600", bg: "bg-purple-100" },
  { title: "Revenue (Monthly)", value: "₹4.2L", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-100" },
];

const RECENT_BOOKINGS = [
  { id: "#B-1042", name: "Rohan K.", route: "Pune → Mumbai", status: "Confirmed", date: "Oct 24, 2026", time: "10:30 AM", type: "Sedan" },
  { id: "#B-1043", name: "Anjali S.", route: "Airport Drop (PNQ)", status: "Pending", date: "Oct 24, 2026", time: "05:00 PM", type: "SUV" },
  { id: "#B-1044", name: "Vikram P.", route: "Pune → Mahabaleshwar", status: "Completed", date: "Oct 23, 2026", time: "07:00 AM", type: "Hatchback" },
  { id: "#B-1045", name: "Neha S.", route: "Mumbai → Pune", status: "Confirmed", date: "Oct 25, 2026", time: "02:15 PM", type: "Sedan" },
  { id: "#B-1046", name: "Pooja D.", route: "Pune Local (8Hr)", status: "Pending", date: "Oct 25, 2026", time: "09:00 AM", type: "SUV" },
];

export default function AdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const NAV_ITEMS = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Bookings", icon: CalendarCheck },
    { name: "Fleet Management", icon: Car },
    { name: "Settings", icon: Settings },
  ];

  /* --- Sub-Components ---*/
  const DashboardView = () => (
    <div className="animate-fade-in space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-1">{stat.title}</p>
                <h4 className="text-3xl font-bold text-gray-900">{stat.value}</h4>
              </div>
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <Icon size={24} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Tables Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-800">Recent Bookings</h3>
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">View All →</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                <th className="p-4 font-medium">Booking ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Route / Details</th>
                <th className="p-4 font-medium">Date & Time</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {RECENT_BOOKINGS.map((b) => (
                <tr key={b.id} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-4 font-semibold text-gray-900">{b.id}</td>
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex flex-col items-center justify-center font-bold text-xs uppercase">
                      {b.name.charAt(0)}
                    </div>
                    {b.name}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5 font-medium text-gray-800">
                      <MapPin size={14} className="text-blue-600"/> {b.route}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 pl-5">Car: {b.type}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5">
                      <CalendarCheck size={14} className="text-gray-400"/> {b.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                      <Clock size={12} className="text-gray-400"/> {b.time}
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full border
                      ${b.status === "Confirmed" ? "bg-green-50 text-green-700 border-green-200" : ""}
                      ${b.status === "Pending" ? "bg-amber-50 text-amber-700 border-amber-200" : ""}
                      ${b.status === "Completed" ? "bg-blue-50 text-blue-700 border-blue-200" : ""}
                      `}
                    >
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const NotAvailableView = () => (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in text-gray-400">
       <CheckCircle size={60} className="text-indigo-200 mb-4 opacity-70"/>
       <h3 className="text-xl font-bold text-gray-600 mb-2">Module is functional but hidden</h3>
       <p className="text-sm">This is just a mock placeholder for the '{activeTab}' screen.</p>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-50 flex overflow-hidden">
      
      {/* --- Sidebar (Mobile overlay & Desktop fixed) --- */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}
      
      <aside
        className={`fixed inset-y-0 left-0 bg-indigo-950 text-indigo-100 w-64 z-50 transform transition-transform duration-300 lg:relative lg:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 pb-2 border-b border-indigo-900/50">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
               <Car size={18} className="text-white"/>
             </div>
             <h2 className="text-xl font-extrabold text-white tracking-wide">Heerai Admin</h2>
          </div>
          <button className="lg:hidden text-indigo-300" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-2 mt-4">
          <p className="px-3 text-xs font-bold text-indigo-400/70 uppercase tracking-wider mb-2">Main Menu</p>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => { setActiveTab(item.name); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium
                  ${isActive 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                    : "text-indigo-200 hover:bg-indigo-900/50 hover:text-white"
                  }`}
              >
                <Icon size={20} className={isActive ? "text-white" : "text-indigo-400"} />
                {item.name}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-6 w-full px-4">
          <Link to="/" className="w-full flex items-center justify-center gap-2 px-4 py-3 font-semibold text-indigo-200 hover:text-white hover:bg-indigo-900/50 rounded-xl transition-colors">
             <LogOut size={18} />
             Exit to Website
          </Link>
        </div>
      </aside>

      {/* --- Main Area --- */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 z-10 shrink-0">
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg lg:hidden transition-colors" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-800 hidden sm:block">{activeTab} Overview</h1>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative">
               <button className="text-gray-500 hover:text-blue-600 transition-colors p-2 bg-gray-50 rounded-full">
                 <Bell size={20} />
               </button>
               <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-800">Admin User</p>
                <p className="text-xs text-green-600 font-medium">Online</p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center border-2 border-indigo-200">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gray-50">
          {activeTab === "Dashboard" ? <DashboardView /> : <NotAvailableView />}
        </main>
      </div>

    </div>
  );
}
