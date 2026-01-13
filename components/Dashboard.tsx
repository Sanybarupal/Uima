
import React, { useEffect, useState } from 'react';
import { UserStats } from '../types.ts';
import { getFitnessInsights } from '../services/geminiService.ts';

interface DashboardProps {
  stats: UserStats;
}

const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  const [insight, setInsight] = useState<string>("Loading your AI health tip...");
  const stepPercentage = Math.min((stats.steps / stats.stepGoal) * 100, 100);

  useEffect(() => {
    const fetchInsight = async () => {
      const result = await getFitnessInsights(stats);
      setInsight(result);
    };
    fetchInsight();
  }, [stats]);

  return (
    <div className="p-5 pb-24 animate-in fade-in duration-500">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Hi, Alex</h1>
        <p className="text-gray-500">Ready for your workout?</p>
      </header>

      {/* Steps Main Card */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 mb-6 flex flex-col items-center">
        <div className="relative w-48 h-48 mb-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-gray-100"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={552.92}
              strokeDashoffset={552.92 - (552.92 * stepPercentage) / 100}
              className="text-green-500 transition-all duration-1000 ease-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center rotate-90">
            <span className="text-4xl font-bold tracking-tight">{stats.steps.toLocaleString()}</span>
            <span className="text-gray-400 text-sm font-medium">/ {stats.stepGoal.toLocaleString()} steps</span>
          </div>
        </div>
        <div className="flex w-full justify-between px-4 mt-2">
          <div className="text-center">
            <p className="text-sm text-gray-400">Calories</p>
            <p className="font-semibold">{stats.calories} kcal</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">Distance</p>
            <p className="font-semibold">{stats.distance} km</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">Active</p>
            <p className="font-semibold">{stats.activeMinutes} m</p>
          </div>
        </div>
      </div>

      {/* AI Insight Card */}
      <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-6 text-white mb-6 shadow-lg shadow-green-100">
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider">Smart Insight</span>
        </div>
        <p className="text-sm font-medium leading-relaxed italic opacity-95">"{insight}"</p>
      </div>

      {/* Secondary Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <span className="p-2 bg-red-50 text-red-500 rounded-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>
          </div>
          <p className="text-sm text-gray-400 font-medium">Heart Rate</p>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold">{stats.heartRate}</span>
            <span className="ml-1 text-xs text-gray-500 font-medium">bpm</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <span className="p-2 bg-blue-50 text-blue-500 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </span>
          </div>
          <p className="text-sm text-gray-400 font-medium">Sleep</p>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold">7h 20m</span>
            <span className="ml-1 text-xs text-gray-500 font-medium">slept</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
