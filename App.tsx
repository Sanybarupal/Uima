
import React, { useState } from 'react';
import Dashboard from './components/Dashboard.tsx';
import Stats from './components/Stats.tsx';
import WorkoutPlans from './components/WorkoutPlans.tsx';
import Profile from './components/Profile.tsx';
import { Tab, UserStats } from './types.ts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Dashboard);
  
  // Mock initial data
  const [stats] = useState<UserStats>({
    steps: 5400,
    stepGoal: 10000,
    calories: 312,
    distance: 3.2,
    heartRate: 72,
    activeMinutes: 42
  });

  const renderContent = () => {
    switch (activeTab) {
      case Tab.Dashboard:
        return <Dashboard stats={stats} />;
      case Tab.Stats:
        return <Stats />;
      case Tab.Workouts:
        return <WorkoutPlans />;
      case Tab.Profile:
        return <Profile />;
      default:
        return <Dashboard stats={stats} />;
    }
  };

  const NavItem = ({ tab, label, icon }: { tab: Tab, label: string, icon: React.ReactNode }) => (
    <button 
      onClick={() => setActiveTab(tab)}
      className={`flex items-center space-x-3 w-full px-6 py-4 rounded-2xl transition-all duration-300 ${
        activeTab === tab 
          ? 'bg-black text-white shadow-xl shadow-black/20' 
          : 'text-gray-400 hover:text-black hover:bg-gray-100'
      }`}
    >
      <span className="w-6 h-6">{icon}</span>
      <span className="font-bold text-sm tracking-tight">{label}</span>
    </button>
  );

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-gray-100 p-8 fixed h-full z-50">
        <div className="flex items-center space-x-3 mb-12 px-2">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-xl">Z</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tighter">ZENITH.</h1>
        </div>
        
        <nav className="space-y-2 flex-1">
          <NavItem tab={Tab.Dashboard} label="Dashboard" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>} />
          <NavItem tab={Tab.Workouts} label="Workouts" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>} />
          <NavItem tab={Tab.Stats} label="Statistics" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>} />
          <NavItem tab={Tab.Profile} label="My Profile" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>} />
        </nav>

        <div className="mt-auto">
          <div className="bg-gray-50 rounded-3xl p-6 mb-8 border border-gray-100">
            <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Upgrade to</p>
            <h4 className="font-bold text-lg mb-4">Pro Version</h4>
            <button className="w-full bg-black text-white py-3 rounded-2xl text-sm font-bold hover:opacity-90 transition-opacity">Go Premium</button>
          </div>
          <div className="flex items-center space-x-3 px-2">
            <img src="https://picsum.photos/seed/alex/100" className="w-10 h-10 rounded-full" alt="User" />
            <div>
              <p className="font-bold text-sm">Alex Johnson</p>
              <p className="text-xs text-gray-400">Basic Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-72 overflow-y-auto scroll-hide min-h-screen">
        <div className="max-w-7xl mx-auto p-4 lg:p-12">
          {renderContent()}
        </div>
      </main>

      {/* Mobile Nav (Only visible on small screens) */}
      <div className="lg:hidden fixed bottom-6 left-0 right-0 px-6 z-50">
        <nav className="max-w-md mx-auto bg-black border border-white/10 rounded-full h-16 flex justify-around items-center px-4 shadow-2xl">
          <button onClick={() => setActiveTab(Tab.Dashboard)} className={`p-3 rounded-full ${activeTab === Tab.Dashboard ? 'bg-white text-black' : 'text-gray-500'}`}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          </button>
          <button onClick={() => setActiveTab(Tab.Workouts)} className={`p-3 rounded-full ${activeTab === Tab.Workouts ? 'bg-white text-black' : 'text-gray-500'}`}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
          </button>
          <button onClick={() => setActiveTab(Tab.Stats)} className={`p-3 rounded-full ${activeTab === Tab.Stats ? 'bg-white text-black' : 'text-gray-500'}`}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/></svg>
          </button>
          <button onClick={() => setActiveTab(Tab.Profile)} className={`p-3 rounded-full ${activeTab === Tab.Profile ? 'bg-white text-black' : 'text-gray-500'}`}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
