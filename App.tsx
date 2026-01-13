
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

  return (
    <div className="max-w-md mx-auto min-h-screen relative flex flex-col bg-[#F3F4F6]">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto scroll-hide">
        {renderContent()}
      </main>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-6 left-0 right-0 px-6 z-50">
        <nav className="max-w-md mx-auto bg-black border border-white/10 rounded-full h-16 flex justify-around items-center px-4 shadow-2xl shadow-black/30">
          <button 
            onClick={() => setActiveTab(Tab.Dashboard)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${activeTab === Tab.Dashboard ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            {activeTab === Tab.Dashboard && <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>}
          </button>

          <button 
            onClick={() => setActiveTab(Tab.Workouts)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${activeTab === Tab.Workouts ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            {activeTab === Tab.Workouts && <span className="text-[10px] font-bold uppercase tracking-tighter">Train</span>}
          </button>

          <button 
            onClick={() => setActiveTab(Tab.Stats)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${activeTab === Tab.Stats ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/></svg>
            {activeTab === Tab.Stats && <span className="text-[10px] font-bold uppercase tracking-tighter">Stats</span>}
          </button>

          <button 
            onClick={() => setActiveTab(Tab.Profile)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${activeTab === Tab.Profile ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            {activeTab === Tab.Profile && <span className="text-[10px] font-bold uppercase tracking-tighter">Me</span>}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
