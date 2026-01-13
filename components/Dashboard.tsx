
import React, { useEffect, useState } from 'react';
import { UserStats } from '../types.ts';
import { getFitnessInsights } from '../services/geminiService.ts';

interface DashboardProps {
  stats: UserStats;
}

const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  const [insight, setInsight] = useState<string>("Loading healthy tips...");

  useEffect(() => {
    const fetchInsight = async () => {
      const result = await getFitnessInsights(stats);
      setInsight(result);
    };
    fetchInsight();
  }, [stats]);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Search and Welcome Header */}
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black tracking-tight text-gray-900">Health Dashboard</h2>
          <p className="text-gray-400 font-medium mt-1">Ready to smash your goals today, Alex?</p>
        </div>
        <div className="relative w-full lg:w-96">
          <input 
            type="text" 
            placeholder="Search activities, trainers..." 
            className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-14 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-sm"
          />
          <svg className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
      </header>

      {/* Hero Workout Section */}
      <section className="relative group overflow-hidden rounded-[3rem] h-[400px] shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
          alt="Featured Workout" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 p-12 flex flex-col justify-center max-w-2xl">
          <span className="bg-white/20 backdrop-blur-xl text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit mb-6">Trending Now</span>
          <h3 className="text-6xl font-black text-white leading-tight mb-4">Mindful Flow <br/> & Core Stability</h3>
          <p className="text-gray-200 text-lg mb-8 max-w-lg">A 45-minute intermediate session designed to build strength through control and breath. Perfect for midweek recovery.</p>
          <div className="flex items-center space-x-6">
            <button className="bg-white text-black px-10 py-4 rounded-2xl font-black hover:bg-gray-100 transition-colors shadow-lg">Start Session</button>
            <div className="flex items-center space-x-4 text-white">
              <span className="flex items-center text-sm font-bold opacity-80"><svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/></svg> 45 Min</span>
              <span className="flex items-center text-sm font-bold opacity-80"><svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM5.884 6.98a1 1 0 00-1.458-1.366l-.707.707a1 1 0 101.415 1.415l.75-.756zM5 11a1 1 0 100-2H4a1 1 0 100 2h1zM8 16.5a1 1 0 100-2H7a1 1 0 100 2h1zM16 11a1 1 0 100-2h-1a1 1 0 100 2h1zM13 3a1 1 0 10-2 0v1a1 1 0 102 0V3z"/></svg> 320 kcal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Steps Today', value: stats.steps.toLocaleString(), unit: 'steps', color: 'bg-green-500', icon: '👟' },
          { label: 'Calories', value: stats.calories, unit: 'kcal', color: 'bg-orange-500', icon: '🔥' },
          { label: 'Distance', value: stats.distance, unit: 'km', color: 'bg-blue-500', icon: '📍' },
          { label: 'Heart Rate', value: stats.heartRate, unit: 'bpm', color: 'bg-red-500', icon: '❤️' },
        ].map((item) => (
          <div key={item.label} className="widget-card flex flex-col justify-between h-48 group">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                <h4 className="text-3xl font-black">{item.value} <span className="text-sm font-normal text-gray-400">{item.unit}</span></h4>
              </div>
              <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-xl shadow-lg`}>
                {item.icon}
              </div>
            </div>
            <div className="mt-4 flex items-center text-green-500 font-bold text-xs">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/></svg>
              12% from yesterday
            </div>
          </div>
        ))}
      </section>

      {/* AI Insight Bar */}
      <div className="widget-card bg-[#F0F4FF] border border-blue-100 flex items-center space-x-6 p-8">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
           <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        <div>
           <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Coach Zenith Insight</p>
           <p className="text-xl font-bold text-blue-900">"{insight}"</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
