
import React, { useEffect, useState } from 'react';
import { UserStats } from '../types.ts';
import { getFitnessInsights } from '../services/geminiService.ts';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface DashboardProps {
  stats: UserStats;
}

const macroData = [
  { name: 'Protein', value: 30, color: '#4F46E5' },
  { name: 'Carbs', value: 50, color: '#F97316' },
  { name: 'Fats', value: 20, color: '#10B981' },
];

const weeklyBurn = [
  { day: 'M', burn: 2100 },
  { day: 'T', burn: 1800 },
  { day: 'W', burn: 2400 },
  { day: 'T', burn: 1600 },
  { day: 'F', burn: 2800 },
  { day: 'S', burn: 1900 },
  { day: 'S', burn: 2200 },
];

const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  const [insight, setInsight] = useState<string>("Coach Zenith is calculating your recovery...");

  useEffect(() => {
    getFitnessInsights(stats).then(setInsight);
  }, [stats]);

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Dynamic Hero Header */}
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-tight">
            Hello, <span className="text-indigo-600">Alex</span>
          </h2>
          <p className="text-slate-400 font-semibold mt-3 text-lg">You're <span className="text-slate-900">82%</span> through your weekly goal. Keep it up!</p>
        </div>
        <div className="flex gap-4">
          <div className="widget-card bg-indigo-50 border-0 p-4 flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <span className="text-xl">🔥</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Daily Streak</p>
              <p className="text-xl font-black text-indigo-900">14 Days</p>
            </div>
          </div>
        </div>
      </header>

      {/* AI Intelligence Banner - Floating Design */}
      <div className="widget-card bg-slate-900 text-white border-0 p-10 relative overflow-hidden flex flex-col lg:flex-row items-center gap-10 shadow-2xl shadow-indigo-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] -mr-40 -mt-40" />
        <div className="flex-1 relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-300">Live AI Analysis</span>
          </div>
          <p className="text-3xl font-bold leading-relaxed tracking-tight italic">"{insight}"</p>
        </div>
        <button className="relative z-10 bg-white text-slate-900 px-10 py-5 rounded-[2rem] font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl">
          Get Training Plan
        </button>
      </div>

      {/* Primary Bento Grid with Colored Backgrounds */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Card 1: Steps (Emerald Aesthetic) */}
        <div className="widget-card bg-[#ECFDF5] border-0 flex flex-col justify-between h-[340px]">
          <div className="flex justify-between items-start">
             <div>
                <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-2">Total Steps</p>
                <h3 className="text-5xl font-black text-emerald-900">{stats.steps.toLocaleString()}</h3>
             </div>
             <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-md animate-float">
                <span className="text-3xl">👟</span>
             </div>
          </div>
          <div className="bg-white/50 p-6 rounded-3xl">
            <div className="flex justify-between items-end mb-4">
              <span className="text-xs font-bold text-emerald-800 uppercase">Goal: {stats.stepGoal}</span>
              <span className="text-2xl font-black text-emerald-900">{Math.round((stats.steps / stats.stepGoal) * 100)}%</span>
            </div>
            <div className="h-4 bg-emerald-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(stats.steps / stats.stepGoal) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Card 2: Nutrition (Orange Aesthetic) */}
        <div className="widget-card bg-[#FFF7ED] border-0 h-[340px] flex flex-col">
           <p className="text-xs font-black text-orange-600 uppercase tracking-widest mb-8 text-center lg:text-left">Macronutrients</p>
           <div className="flex-1 flex items-center">
              <div className="w-1/2 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={macroData} innerRadius={60} outerRadius={85} paddingAngle={8} dataKey="value" stroke="none">
                      {macroData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-1/2 space-y-5 px-4">
                {macroData.map(m => (
                  <div key={m.name} className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black text-orange-900 uppercase">{m.name}</span>
                      <span className="text-xs font-bold text-orange-400">{m.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-orange-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ backgroundColor: m.color, width: `${m.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Card 3: Energy Burn (Indigo Aesthetic) */}
        <div className="widget-card bg-[#EEF2FF] border-0 h-[340px] flex flex-col justify-between">
           <div>
              <p className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-1">Energy Burned</p>
              <h3 className="text-5xl font-black text-indigo-900">{stats.calories} <span className="text-lg font-bold opacity-40">kcal</span></h3>
           </div>
           <div className="h-40 w-full -mx-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyBurn}>
                  <defs>
                    <linearGradient id="colorBurn" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="burn" stroke="#4F46E5" strokeWidth={4} fill="url(#colorBurn)" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* New Feature: Activity Heatmap (GitHub Style) - Light Violet Aesthetic */}
        <div className="widget-card lg:col-span-2 bg-[#F5F3FF] border-0 p-10">
           <div className="flex justify-between items-center mb-10">
              <h4 className="text-2xl font-black text-violet-900">Training Consistency</h4>
              <div className="flex space-x-2">
                 <span className="text-[10px] font-bold text-violet-400 uppercase">Less</span>
                 {[0.2, 0.4, 0.7, 1].map(v => <div key={v} className="w-3 h-3 rounded-sm bg-violet-600" style={{ opacity: v }} />)}
                 <span className="text-[10px] font-bold text-violet-400 uppercase">More</span>
              </div>
           </div>
           <div className="grid grid-cols-20 gap-2 h-32">
              {Array.from({ length: 140 }).map((_, i) => (
                <div key={i} className="bg-violet-600 rounded-sm hover:scale-125 transition-all cursor-pointer" style={{ opacity: Math.random() > 0.3 ? Math.random() : 0.05 }} />
              ))}
           </div>
           <div className="mt-6 flex justify-between text-[10px] font-black text-violet-400 uppercase tracking-[0.2em]">
              <span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
           </div>
        </div>

        {/* Card 5: Hydration (Deep Blue Aesthetic) */}
        <div className="widget-card bg-[#EFF6FF] border-0 p-8 flex flex-col justify-between">
           <div className="flex justify-between items-start">
              <h4 className="text-xl font-black text-blue-900 italic">Stay Hydrated.</h4>
              <span className="text-3xl animate-bounce">💧</span>
           </div>
           <div className="text-center my-6">
              <span className="text-7xl font-black text-blue-600">2.4</span>
              <span className="text-xl font-bold text-blue-300 ml-2">Liters</span>
           </div>
           <button className="w-full bg-blue-600 text-white py-5 rounded-[1.5rem] font-black text-sm shadow-xl shadow-blue-200">
             Log 250ml
           </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
