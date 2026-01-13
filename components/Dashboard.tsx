
import React, { useEffect, useState } from 'react';
import { UserStats } from '../types.ts';
import { getFitnessInsights } from '../services/geminiService.ts';

interface DashboardProps {
  stats: UserStats;
}

const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  const [insight, setInsight] = useState<string>("Loading health tips...");
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  useEffect(() => {
    const fetchInsight = async () => {
      const result = await getFitnessInsights(stats);
      setInsight(result);
    };
    fetchInsight();
  }, [stats]);

  return (
    <div className="p-6 pb-28 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Top Header */}
      <header className="flex justify-between items-start mb-6 pt-4">
        <div className="flex-1">
          <h1 className="text-3xl font-medium tracking-tight">
            Welcome, <span className="font-bold text-[#a7c4bc]">Alex!</span> here's your health snapshot for today!
          </h1>
          <p className="text-gray-400 text-sm mt-1">Today is {currentDate}</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 glass rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </button>
          <img src="https://picsum.photos/seed/alex/100" className="w-10 h-10 rounded-full border-2 border-[#a7c4bc]" alt="Profile" />
        </div>
      </header>

      {/* Search Bar */}
      <div className="relative mb-8">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-12 focus:outline-none focus:ring-1 focus:ring-[#a7c4bc] transition-all placeholder:text-gray-500"
        />
        <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>

      {/* Stats Section */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Today's stats</h2>
          <button className="text-sm text-gray-400 font-medium">View more</button>
        </div>
        <div className="flex space-x-4 overflow-x-auto scroll-hide pb-2">
          {/* Steps Card */}
          <div className="min-w-[160px] glass p-4 rounded-[2rem] flex flex-col justify-between">
            <div>
              <p className="text-xs text-gray-400 font-medium mb-1">Step to walk</p>
              <h3 className="text-lg font-bold">{stats.steps.toLocaleString()} steps</h3>
            </div>
            <div className="flex items-center justify-between mt-4">
               <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full font-bold uppercase">Good</span>
               <div className="w-8 h-8 rounded-full green-gradient flex items-center justify-center">
                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
               </div>
            </div>
          </div>

          {/* Calorie Card */}
          <div className="min-w-[160px] glass p-4 rounded-[2rem] flex flex-col justify-between">
            <div>
              <p className="text-xs text-gray-400 font-medium mb-1">Cal burnt</p>
              <h3 className="text-lg font-bold">{stats.calories} KCAL</h3>
            </div>
            <div className="flex items-center justify-between mt-4">
               <span className="text-[10px] px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded-full font-bold uppercase">Average</span>
               <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 1.5s0 3-1.5 4.5c-1.5-1.5-1.5-4.5-1.5-4.5s-3 3-3 6c0 3 2.25 4.5 4.5 4.5s4.5-1.5 4.5-4.5c0-3-3-6-3-6z"/></svg>
               </div>
            </div>
          </div>

          {/* Distance Card */}
          <div className="min-w-[160px] glass p-4 rounded-[2rem] flex flex-col justify-between">
            <div>
              <p className="text-xs text-gray-400 font-medium mb-1">Distance</p>
              <h3 className="text-lg font-bold">{stats.distance} KM</h3>
            </div>
            <div className="flex items-center justify-between mt-4">
               <span className="text-[10px] px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full font-bold uppercase">Great</span>
               <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/></svg>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Workout Card */}
      <section className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Today's workout</h2>
          <button className="text-sm text-gray-400 font-medium">View more</button>
        </div>
        <div className="relative group overflow-hidden rounded-[2.5rem] h-48">
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700" alt="Workout" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-extrabold text-white max-w-[180px] leading-tight mb-1">Upper body strength</h3>
            <p className="text-gray-300 text-sm">16 exercises</p>
            <div className="flex items-center space-x-3 mt-4">
              <span className="px-3 py-1 glass rounded-full text-[10px] font-bold">🔥 350 Cal</span>
              <span className="px-3 py-1 glass rounded-full text-[10px] font-bold">⏱️ 40 Min</span>
            </div>
          </div>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg active:scale-90 transition-transform">
            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      </section>

      {/* Insight Card */}
      <div className="mt-4 p-4 glass rounded-3xl border-l-4 border-[#a7c4bc]">
        <div className="flex items-center mb-1">
          <span className="text-[10px] font-black tracking-widest text-[#a7c4bc] uppercase">AI Assistant</span>
        </div>
        <p className="text-xs text-gray-300 italic">"{insight}"</p>
      </div>
    </div>
  );
};

export default Dashboard;
