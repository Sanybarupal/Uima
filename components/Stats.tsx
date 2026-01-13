
import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, LineChart, Line } from 'recharts';

const moodData = [
  { day: 'Sun', value: 30, color: '#FF4B4B' },
  { day: 'Mon', value: 60, color: '#FFB800' },
  { day: 'Tue', value: 85, color: '#00D100' },
  { day: 'Wed', value: 45, color: '#FFB800' },
  { day: 'Thu', value: 25, color: '#FF4B4B' },
  { day: 'Fri', value: 80, color: '#00D100' },
  { day: 'Sat', value: 70, color: '#00D100' },
];

const heartbeatData = [
  { time: 0, val: 70 }, { time: 1, val: 72 }, { time: 2, val: 89 }, 
  { time: 3, val: 75 }, { time: 4, val: 80 }, { time: 5, val: 89 }, 
  { time: 6, val: 78 }
];

const Stats: React.FC = () => {
  return (
    <div className="p-4 pb-32 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-700">
      
      {/* Target Statistics */}
      <div className="widget-card col-span-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-bold text-lg leading-tight">Target<br/>Statistics</h3>
          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 text-[10px] text-gray-400">i</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative w-28 h-28">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="56" cy="56" r="48" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
              <circle cx="56" cy="56" r="48" stroke="#FF6B00" strokeWidth="8" fill="transparent" strokeDasharray="301" strokeDashoffset="100" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold">237</span>
              <span className="text-[10px] text-gray-400 uppercase">kcal</span>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <div>
              <p className="text-sm font-bold">365 kcal</p>
              <p className="text-[10px] text-gray-400">Target</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400">128 kcal</p>
              <p className="text-[10px] text-gray-400">Remaining</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hydration */}
      <div className="widget-card col-span-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl">🥛</span>
            <span className="text-xl font-bold">13.8 liters</span>
          </div>
        </div>
        <div className="flex items-end space-x-4 h-24 mb-2">
          <div className="flex-1 bg-gray-100 rounded-t-lg relative group h-[80%]">
            <div className="absolute bottom-0 w-full bg-green-500 rounded-t-lg h-[40%]" />
            <p className="absolute -top-6 w-full text-center text-[10px] text-gray-400">2.4L</p>
          </div>
          <div className="flex-1 bg-gray-100 rounded-t-lg relative h-[60%]">
            <div className="absolute bottom-0 w-full bg-yellow-400 rounded-t-lg h-[35%]" />
            <p className="absolute -top-6 w-full text-center text-[10px] text-gray-400">1.8L</p>
          </div>
          <div className="flex-1 bg-gray-100 rounded-t-lg relative h-[45%]">
            <div className="absolute bottom-0 w-full bg-orange-500 rounded-t-lg h-[25%]" />
            <p className="absolute -top-6 w-full text-center text-[10px] text-gray-400">1.3L</p>
          </div>
        </div>
        <div className="flex justify-between px-2">
          <span className="flex items-center text-[8px] uppercase font-bold text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1" /> 40%</span>
          <span className="flex items-center text-[8px] uppercase font-bold text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-1" /> 35%</span>
          <span className="flex items-center text-[8px] uppercase font-bold text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-1" /> 25%</span>
        </div>
      </div>

      {/* Stats - Stand/Exercise/Move */}
      <div className="widget-card col-span-1 md:col-span-2 bg-[#1A1A1A] text-white">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold">Statistics</h3>
          <div className="flex space-x-6 text-[10px] font-bold text-gray-500">
            <span>Stand</span>
            <span>Exercise</span>
            <span>Move</span>
          </div>
        </div>
        <div className="space-y-6">
          {['Stand', 'Exercise', 'Move'].map((label, idx) => (
            <div key={label} className="flex items-center">
              <div className="w-24 text-[10px] text-gray-400 font-bold uppercase">{label}</div>
              <div className="flex-1 flex space-x-0.5 items-end h-6">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1 rounded-full ${
                      idx === 0 ? (i > 20 && i < 30 ? 'bg-green-500 h-6' : 'bg-gray-800 h-1') :
                      idx === 1 ? (i > 15 && i < 35 ? 'bg-orange-500 h-6' : 'bg-gray-800 h-1') :
                      'bg-blue-500 h-1'
                    }`} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="text-center">
             <p className="text-lg font-bold">375/500 cal</p>
          </div>
          <div className="text-center border-l border-gray-800">
             <p className="text-lg font-bold">19/30 min</p>
          </div>
          <div className="text-center border-l border-gray-800">
             <p className="text-lg font-bold">4/12 hrs</p>
          </div>
        </div>
      </div>

      {/* Personal Data */}
      <div className="widget-card">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">Personal Data</h3>
          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 text-[10px] text-gray-400">i</span>
        </div>
        <div className="space-y-3">
          {[
            { l: 'Height', v: '5.79 ft' },
            { l: 'Weight', v: '173 lbs' },
            { l: 'Heart Beat', v: '89 bpm' },
            { l: 'BMI', v: '27.98' },
            { l: 'Hemoglobin', v: '14 gm' },
          ].map((item) => (
            <div key={item.l} className="flex justify-between border-b border-gray-50 pb-1">
              <span className="text-xs text-gray-400 font-medium">{item.l}</span>
              <span className="text-xs font-bold">{item.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Heart Beat */}
      <div className="widget-card flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">❤️</span>
            <span className="text-2xl font-bold">89 <span className="text-xs text-gray-400 font-normal">bpm</span></span>
          </div>
          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 text-[10px] text-gray-400">i</span>
        </div>
        <div className="h-16 w-full my-4">
           <ResponsiveContainer width="100%" height="100%">
              <LineChart data={heartbeatData}>
                <Line type="monotone" dataKey="val" stroke="#1A1A1A" strokeWidth={2} dot={false} />
              </LineChart>
           </ResponsiveContainer>
        </div>
        <div>
          <h4 className="font-bold text-sm">Heart Beat</h4>
          <p className="text-[10px] text-gray-400">You are calm and ready!</p>
        </div>
      </div>

      {/* Running History */}
      <div className="widget-card col-span-1 md:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-bold">Running History</h3>
            <button className="text-[10px] bg-gray-100 px-2 py-1 rounded-lg font-bold mt-1">Monthly ▾</button>
          </div>
          <div className="flex -space-x-2">
            <img src="https://picsum.photos/seed/1/32" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://picsum.photos/seed/2/32" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://picsum.photos/seed/3/32" className="w-8 h-8 rounded-full border-2 border-white" />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-gray-300">
           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <span key={d}>{d}</span>)}
           {Array.from({ length: 30 }).map((_, i) => {
             const day = i + 1;
             const isActive = [1, 2, 5, 6, 11, 14, 15, 17, 22, 24, 25, 26, 27].includes(day);
             return (
               <span key={i} className={`w-8 h-8 flex items-center justify-center rounded-full mx-auto ${isActive ? 'bg-[#546FFF] text-white' : 'text-gray-900'}`}>
                 {day}
               </span>
             );
           })}
        </div>
      </div>

      {/* Daily Mood */}
      <div className="widget-card col-span-1 md:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
             <span className="text-xl">😊</span>
             <h3 className="font-bold">Daily Mood</h3>
          </div>
        </div>
        <div className="h-40 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={moodData}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {moodData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default Stats;
