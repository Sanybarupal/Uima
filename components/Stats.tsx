
import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, LineChart, Line, Tooltip, AreaChart, Area } from 'recharts';

const moodData = [
  { day: 'Sun', value: 30, color: '#FF4B4B' },
  { day: 'Mon', value: 60, color: '#FFB800' },
  { day: 'Tue', value: 85, color: '#00D100' },
  { day: 'Wed', value: 45, color: '#FFB800' },
  { day: 'Thu', value: 25, color: '#FF4B4B' },
  { day: 'Fri', value: 80, color: '#00D100' },
  { day: 'Sat', value: 70, color: '#00D100' },
];

const sleepData = [
  { day: 'S', hours: 7.2 }, { day: 'M', hours: 6.8 }, { day: 'T', hours: 8.1 },
  { day: 'W', hours: 7.5 }, { day: 'T', hours: 6.0 }, { day: 'F', hours: 7.8 },
  { day: 'S', hours: 8.5 }
];

const heartbeatData = [
  { time: 0, val: 68 }, { time: 1, val: 72 }, { time: 2, val: 89 }, 
  { time: 3, val: 75 }, { time: 4, val: 82 }, { time: 5, val: 95 }, 
  { time: 6, val: 78 }, { time: 7, val: 72 }, { time: 8, val: 65 }
];

const Stats: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <header className="mb-10">
        <h2 className="text-4xl font-black tracking-tight text-gray-900">Your Progress</h2>
        <p className="text-gray-400 font-medium">Detailed biometric and activity tracking for this month.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Statistics Visual (Large Bento) */}
        <div className="lg:col-span-8 widget-card bg-black text-white p-10 min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-2xl font-black">Performance Trends</h3>
            <div className="flex space-x-6 text-xs font-bold text-gray-400">
               <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2" /> Stand</span>
               <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2" /> Exercise</span>
               <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2" /> Move</span>
            </div>
          </div>
          
          <div className="space-y-10 flex-1 flex flex-col justify-center">
            {['Stand', 'Exercise', 'Move'].map((label, idx) => (
              <div key={label} className="flex items-center group">
                <div className="w-32 text-sm text-gray-500 font-black uppercase tracking-widest transition-colors group-hover:text-white">{label}</div>
                <div className="flex-1 flex space-x-1 items-end h-10">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1 rounded-full transition-all duration-500 ${
                        idx === 0 ? (i > 25 && i < 40 ? 'bg-green-500 h-10' : 'bg-gray-800 h-2 group-hover:bg-gray-700') :
                        idx === 1 ? (i > 10 && i < 35 ? 'bg-orange-500 h-10' : 'bg-gray-800 h-2 group-hover:bg-gray-700') :
                        (i > 15 && i < 45 ? 'bg-blue-500 h-10' : 'bg-gray-800 h-2 group-hover:bg-gray-700')
                      }`} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-10 border-t border-gray-800 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Calories</p>
              <p className="text-4xl font-black">4,280 <span className="text-sm font-normal text-gray-600">kcal</span></p>
            </div>
            <div className="text-center border-x border-gray-800">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Active Time</p>
              <p className="text-4xl font-black">12.5 <span className="text-sm font-normal text-gray-600">hrs</span></p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Move Goal</p>
              <p className="text-4xl font-black">82<span className="text-sm font-normal text-gray-600">%</span></p>
            </div>
          </div>
        </div>

        {/* Personal Data Bento */}
        <div className="lg:col-span-4 widget-card p-10 flex flex-col">
          <div className="flex justify-between items-start mb-10">
            <h3 className="text-2xl font-black">Biometrics</h3>
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </div>
          </div>
          <div className="space-y-6 flex-1">
            {[
              { label: 'Height', val: '5.79 ft', icon: '📏' },
              { label: 'Weight', val: '173 lbs', icon: '⚖️' },
              { label: 'Heart Beat', val: '89 bpm', icon: '❤️' },
              { label: 'BMI', val: '27.98', icon: '📉' },
              { label: 'Hemoglobin', val: '14 gm', icon: '🩸' },
              { label: 'Blood Pressure', val: '120/80', icon: '🩺' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                <div className="flex items-center space-x-4">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-bold text-gray-500">{item.label}</span>
                </div>
                <span className="font-black text-gray-900">{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Heart Rate Area Chart */}
        <div className="lg:col-span-4 widget-card p-10">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Resting Heart Rate</p>
              <h4 className="text-4xl font-black">72 <span className="text-sm font-normal">bpm</span></h4>
            </div>
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-100">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/></svg>
            </div>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={heartbeatData}>
                <defs>
                  <linearGradient id="colorHeart" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="val" stroke="#EF4444" strokeWidth={3} fillOpacity={1} fill="url(#colorHeart)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daily Mood Bento */}
        <div className="lg:col-span-4 widget-card p-10">
          <h3 className="text-2xl font-black mb-8 flex items-center">
             <span className="mr-3">🧘</span> Weekly Mood
          </h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={moodData}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 'bold' }} />
                <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={30}>
                  {moodData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sleep Pattern Bento */}
        <div className="lg:col-span-4 widget-card p-10 bg-indigo-900 text-white">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-2xl font-black">Sleep Pattern</h3>
              <p className="text-indigo-300 text-sm font-medium">Avg. 7.5 hrs / night</p>
            </div>
            <span className="text-3xl">🌙</span>
          </div>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sleepData}>
                <Line type="stepAfter" dataKey="hours" stroke="#818CF8" strokeWidth={4} dot={{ r: 4, fill: '#fff' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 flex justify-between px-2">
            {sleepData.map(d => <span key={d.day} className="text-[10px] font-bold text-indigo-400">{d.day}</span>)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stats;
