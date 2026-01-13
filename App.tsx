
import React, { useState } from 'react';
import Dashboard from './components/Dashboard.tsx';
import Stats from './components/Stats.tsx';
import WorkoutPlans from './components/WorkoutPlans.tsx';
import Profile from './components/Profile.tsx';
import RightPanel from './components/RightPanel.tsx';
import { Tab, UserStats } from './types.ts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Dashboard);
  
  const [stats] = useState<UserStats>({
    steps: 8420,
    stepGoal: 10000,
    calories: 1450,
    distance: 5.8,
    heartRate: 68,
    activeMinutes: 65
  });

  const renderContent = () => {
    switch (activeTab) {
      case Tab.Dashboard: return <Dashboard stats={stats} />;
      case Tab.Stats: return <Stats />;
      case Tab.Workouts: return <WorkoutPlans />;
      case Tab.Profile: return <Profile />;
      default: return <Dashboard stats={stats} />;
    }
  };

  const NavItem = ({ tab, label, icon }: { tab: Tab, label: string, icon: React.ReactNode }) => (
    <button 
      onClick={() => setActiveTab(tab)}
      className={`flex items-center space-x-3 w-full px-5 py-3.5 rounded-2xl transition-all duration-300 ${
        activeTab === tab 
          ? 'bg-black text-white shadow-lg shadow-black/10 translate-x-1' 
          : 'text-slate-400 hover:text-black hover:bg-slate-50'
      }`}
    >
      <span className="w-5 h-5">{icon}</span>
      <span className="font-bold text-sm">{label}</span>
    </button>
  );

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* 1. Left Sidebar (Navigation) */}
      <aside className="hidden xl:flex flex-col w-64 bg-white border-r border-slate-100 p-6 flex-shrink-0">
        <div className="flex items-center space-x-3 mb-10 px-2">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-indigo-200">
            <span className="text-white font-black text-lg">Z</span>
          </div>
          <h1 className="text-lg font-extrabold tracking-tighter text-slate-900">ZENITH.</h1>
        </div>
        
        <nav className="space-y-1 flex-1">
          <NavItem tab={Tab.Dashboard} label="Overview" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>} />
          <NavItem tab={Tab.Workouts} label="Workouts" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>} />
          <NavItem tab={Tab.Stats} label="Analytics" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>} />
          <NavItem tab={Tab.Profile} label="My Profile" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>} />
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-50">
          <div className="bg-indigo-50 rounded-2xl p-4 mb-6">
            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Weekly Goal</p>
            <div className="flex justify-between items-end mb-2">
              <span className="text-xl font-bold text-indigo-900">4/5 sessions</span>
              <span className="text-xs font-bold text-indigo-500">80%</span>
            </div>
            <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full" style={{ width: '80%' }} />
            </div>
          </div>
          <div className="flex items-center space-x-3 group cursor-pointer">
            <img src="https://picsum.photos/seed/alex/100" className="w-10 h-10 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" alt="Profile" />
            <div className="flex-1 overflow-hidden">
              <p className="font-bold text-sm truncate">Alex Johnson</p>
              <p className="text-xs text-slate-400 truncate">Premium Member</p>
            </div>
            <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
          </div>
        </div>
      </aside>

      {/* 2. Main Scrollable Content */}
      <main className="flex-1 overflow-y-auto scroll-hide relative">
        <div className="max-w-5xl mx-auto p-6 lg:p-12">
          {renderContent()}
        </div>
      </main>

      {/* 3. Right Activity Panel (Persistent on Desktop) */}
      <aside className="hidden 2xl:flex flex-col w-80 bg-white border-l border-slate-100 p-8 flex-shrink-0">
        <RightPanel />
      </aside>

      {/* Mobile Nav (Fallback for smaller screens) */}
      <div className="xl:hidden fixed bottom-6 left-0 right-0 px-6 z-50">
        <nav className="max-w-md mx-auto bg-black rounded-3xl h-16 flex justify-around items-center px-4 shadow-2xl">
          {/* Mobile nav items... */}
          <button onClick={() => setActiveTab(Tab.Dashboard)} className={`p-3 rounded-xl ${activeTab === Tab.Dashboard ? 'bg-white text-black' : 'text-slate-500'}`}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          </button>
          <button onClick={() => setActiveTab(Tab.Stats)} className={`p-3 rounded-xl ${activeTab === Tab.Stats ? 'bg-white text-black' : 'text-slate-500'}`}>
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
