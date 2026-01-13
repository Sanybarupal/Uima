
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
    steps: 12420,
    stepGoal: 15000,
    calories: 1840,
    distance: 8.4,
    heartRate: 72,
    activeMinutes: 85
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
      className={`flex items-center space-x-4 w-full px-6 py-4 rounded-[1.5rem] transition-all duration-300 ${
        activeTab === tab 
          ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' 
          : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/50'
      }`}
    >
      <span className="w-6 h-6">{icon}</span>
      <span className="font-bold text-sm tracking-tight">{label}</span>
    </button>
  );

  return (
    <div className="flex h-screen bg-[#FCFCFD] overflow-hidden text-slate-900">
      {/* 1. Side Sidebar */}
      <aside className="hidden xl:flex flex-col w-72 bg-white border-r border-slate-100 p-8 flex-shrink-0">
        <div className="flex items-center space-x-4 mb-16 px-2">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center rotate-6 shadow-2xl shadow-indigo-200">
            <span className="text-white font-black text-2xl">Z</span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-slate-900">ZENITH.</h1>
        </div>
        
        <nav className="space-y-3 flex-1">
          <NavItem tab={Tab.Dashboard} label="Dashboard" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>} />
          <NavItem tab={Tab.Workouts} label="Trainings" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>} />
          <NavItem tab={Tab.Stats} label="Statistics" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>} />
          <NavItem tab={Tab.Profile} label="Settings" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>} />
        </nav>

        <div className="mt-auto pt-10 border-t border-slate-50">
          <div className="flex items-center space-x-4 bg-slate-50 p-5 rounded-[2rem] hover:bg-slate-100 transition-colors cursor-pointer group">
            <img src="https://i.pravatar.cc/150?u=alex" className="w-12 h-12 rounded-2xl object-cover shadow-lg group-hover:rotate-6 transition-transform" alt="Profile" />
            <div className="flex-1 overflow-hidden">
              <p className="font-black text-sm text-slate-900 truncate">Alex J.</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">Elite Member</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. Main Content */}
      <main className="flex-1 overflow-y-auto scroll-hide">
        <div className="max-w-6xl mx-auto p-10 lg:p-20">
          {renderContent()}
        </div>
      </main>

      {/* 3. Social & Schedule Side */}
      <aside className="hidden 2xl:flex flex-col w-96 bg-white border-l border-slate-50 p-12 flex-shrink-0 overflow-y-auto scroll-hide">
        <RightPanel />
      </aside>

      {/* Mobile Nav (Floating Glassmorphism) */}
      <div className="xl:hidden fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <nav className="glass-panel bg-white/70 backdrop-blur-2xl rounded-[2.5rem] h-20 flex justify-around items-center px-6 shadow-2xl border border-white/20">
          <button onClick={() => setActiveTab(Tab.Dashboard)} className={`p-4 rounded-2xl transition-all ${activeTab === Tab.Dashboard ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </button>
          <button onClick={() => setActiveTab(Tab.Workouts)} className={`p-4 rounded-2xl transition-all ${activeTab === Tab.Workouts ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </button>
          <button onClick={() => setActiveTab(Tab.Stats)} className={`p-4 rounded-2xl transition-all ${activeTab === Tab.Stats ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400'}`}>
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
