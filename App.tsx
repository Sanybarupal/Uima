
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
    steps: 7420,
    stepGoal: 10000,
    calories: 342,
    distance: 5.2,
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
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 relative shadow-2xl">
      {/* Scrollable Main Content */}
      <main className="h-full">
        {renderContent()}
      </main>

      {/* Persistent Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-xl border-t border-gray-100 flex justify-around items-center py-4 px-2 z-50">
        <button 
          onClick={() => setActiveTab(Tab.Dashboard)}
          className={`flex flex-col items-center flex-1 transition-all ${activeTab === Tab.Dashboard ? 'text-green-500 scale-110' : 'text-gray-400'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[10px] mt-1 font-bold uppercase tracking-widest">Home</span>
        </button>

        <button 
          onClick={() => setActiveTab(Tab.Stats)}
          className={`flex flex-col items-center flex-1 transition-all ${activeTab === Tab.Stats ? 'text-green-500 scale-110' : 'text-gray-400'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="text-[10px] mt-1 font-bold uppercase tracking-widest">Stats</span>
        </button>

        <button 
          onClick={() => setActiveTab(Tab.Workouts)}
          className={`flex flex-col items-center flex-1 transition-all ${activeTab === Tab.Workouts ? 'text-green-500 scale-110' : 'text-gray-400'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[10px] mt-1 font-bold uppercase tracking-widest">Train</span>
        </button>

        <button 
          onClick={() => setActiveTab(Tab.Profile)}
          className={`flex flex-col items-center flex-1 transition-all ${activeTab === Tab.Profile ? 'text-green-500 scale-110' : 'text-gray-400'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-[10px] mt-1 font-bold uppercase tracking-widest">Me</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
