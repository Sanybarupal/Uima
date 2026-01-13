
import React, { useEffect, useState } from 'react';
import { UserStats } from '../types.ts';
import { getFitnessInsights } from '../services/geminiService.ts';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  stats: UserStats;
}

const macroData = [
  { name: 'Protein', value: 35, color: '#6366F1' },
  { name: 'Carbs', value: 45, color: '#F97316' },
  { name: 'Fats', value: 20, color: '#10B981' },
];

const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  const [insight, setInsight] = useState<string>("Analyzing your metrics...");

  useEffect(() => {
    getFitnessInsights(stats).then(setInsight);
  }, [stats]);

  return (
    <div className="space-y-10 animate-in fade-in duration-1000">
      {/* Editorial Header */}
      <header className="flex items-end justify-between">
        <div>
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Your Morning.</h2>
          <p className="text-slate-400 font-bold mt-2 uppercase text-xs tracking-[0.2em]">Tuesday, 14 May 2024</p>
        </div>
        <div className="flex items-center space-x-4">
           <button className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
           </button>
           <button className="bg-black text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:scale-105 active:scale-95 transition-all">New Activity</button>
        </div>
      </header>

      {/* Featured Insight */}
      <div className="widget-card bg-gradient-to-br from-indigo-600 to-indigo-800 text-white border-0 p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="relative z-10 max-w-2xl">
           <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Coach Insight</span>
           <p className="text-2xl font-bold leading-snug">"{insight}"</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Step Progress */}
        <div className="widget-card lg:col-span-1 p-8 flex flex-col justify-between h-72">
          <div className="flex justify-between items-start">
             <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Steps Today</p>
                <h3 className="text-4xl font-black text-slate-900">{stats.steps.toLocaleString()}</h3>
             </div>
             <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>
             </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase mb-2">
              <span>Progress</span>
              <span>{Math.round((stats.steps / stats.stepGoal) * 100)}%</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(stats.steps / stats.stepGoal) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Nutrition / Macros */}
        <div className="widget-card lg:col-span-1 p-8 h-72 flex items-center">
          <div className="w-1/2 h-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={macroData} innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                  {macroData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-1/2 space-y-4">
             <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Nutrition</p>
             {macroData.map(m => (
               <div key={m.name} className="flex items-center justify-between">
                 <div className="flex items-center">
                   <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: m.color }} />
                   <span className="text-xs font-bold text-slate-600">{m.name}</span>
                 </div>
                 <span className="text-xs font-black">{m.value}%</span>
               </div>
             ))}
          </div>
        </div>

        {/* Hydration */}
        <div className="widget-card lg:col-span-1 p-8 h-72 flex flex-col justify-between bg-blue-50/30 border-blue-100/50">
           <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-1">Hydration</p>
                <h3 className="text-4xl font-black text-blue-900">2.4 <span className="text-sm font-bold opacity-40">L</span></h3>
              </div>
              <span className="text-2xl">💧</span>
           </div>
           <div className="flex space-x-1.5 h-24 items-end">
              {[60, 40, 80, 50, 90, 70, 45].map((h, i) => (
                <div key={i} className="flex-1 bg-blue-100 rounded-full relative overflow-hidden group">
                   <div className="absolute bottom-0 w-full bg-blue-500 transition-all duration-1000" style={{ height: `${h}%` }} />
                </div>
              ))}
           </div>
        </div>

        {/* Sleep Score */}
        <div className="widget-card lg:col-span-2 p-10 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
           <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="80" cy="80" r="70" stroke="#f1f5f9" strokeWidth="12" fill="transparent" />
                <circle cx="80" cy="80" r="70" stroke="#6366f1" strokeWidth="12" fill="transparent" strokeDasharray="440" strokeDashoffset="110" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-4xl font-black text-indigo-900">84</span>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sleep Score</span>
              </div>
           </div>
           <div className="flex-1 grid grid-cols-2 gap-8">
              <div>
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Time Asleep</p>
                 <p className="text-2xl font-bold">7h 42m</p>
              </div>
              <div>
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Deep Sleep</p>
                 <p className="text-2xl font-bold">1h 15m</p>
              </div>
              <div>
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Bedtime</p>
                 <p className="text-2xl font-bold text-slate-400">11:15 PM</p>
              </div>
              <div>
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Wake up</p>
                 <p className="text-2xl font-bold text-slate-400">07:05 AM</p>
              </div>
           </div>
        </div>

        {/* Quick Action */}
        <div className="widget-card lg:col-span-1 bg-slate-900 text-white flex flex-col justify-center items-center text-center p-8 border-0">
           <h4 className="text-2xl font-bold mb-4">Ready to train?</h4>
           <p className="text-slate-400 text-xs mb-8">Personalized HIIT session based on your recovery score.</p>
           <button className="w-full bg-white text-black py-4 rounded-2xl font-black text-sm hover:bg-slate-100 transition-colors">Start HIIT Blast</button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
