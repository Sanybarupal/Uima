
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ActivityData } from '../types.ts';

const data: ActivityData[] = [
  { day: 'Mon', steps: 8400, calories: 420 },
  { day: 'Tue', steps: 10200, calories: 510 },
  { day: 'Wed', steps: 9500, calories: 480 },
  { day: 'Thu', steps: 11000, calories: 550 },
  { day: 'Fri', steps: 7800, calories: 390 },
  { day: 'Sat', steps: 12400, calories: 620 },
  { day: 'Sun', steps: 6000, calories: 300 },
];

const Stats: React.FC = () => {
  return (
    <div className="p-5 pb-24 animate-in slide-in-from-right duration-500">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Weekly Progress</h1>
        <p className="text-gray-500">Your activity overview</p>
      </header>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
        <h3 className="font-semibold text-gray-800 mb-6">Daily Steps</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }} 
              />
              <Tooltip 
                cursor={{ fill: '#f9fafb' }}
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="steps" radius={[6, 6, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.steps >= 10000 ? '#22c55e' : '#e5e7eb'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-4 flex items-center justify-between border border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500 mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Highest Activity</p>
              <p className="text-xs text-gray-400">Saturday, Dec 14</p>
            </div>
          </div>
          <span className="text-green-500 font-bold">12,400</span>
        </div>

        <div className="bg-white rounded-2xl p-4 flex items-center justify-between border border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mr-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Avg. Daily Steps</p>
              <p className="text-xs text-gray-400">Past 7 days</p>
            </div>
          </div>
          <span className="text-orange-500 font-bold">9,328</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
