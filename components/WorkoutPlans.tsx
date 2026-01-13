
import React from 'react';
import { Workout } from '../types.ts';

const workouts: Workout[] = [
  { id: '1', title: 'Morning Yoga', duration: '20 min', level: 'Beginner', category: 'Yoga', image: 'https://picsum.photos/seed/yoga/400/300' },
  { id: '2', title: 'HIIT Blast', duration: '45 min', level: 'Advanced', category: 'Cardio', image: 'https://picsum.photos/seed/hiit/400/300' },
  { id: '3', title: 'Core Strength', duration: '15 min', level: 'Intermediate', category: 'Strength', image: 'https://picsum.photos/seed/abs/400/300' },
  { id: '4', title: 'Full Body Sculpt', duration: '30 min', level: 'Intermediate', category: 'Strength', image: 'https://picsum.photos/seed/sculpt/400/300' },
];

const WorkoutPlans: React.FC = () => {
  return (
    <div className="p-5 pb-24 animate-in slide-in-from-right duration-500">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Workouts</h1>
        <p className="text-gray-500">Explore training plans</p>
      </header>

      <div className="flex space-x-3 mb-8 overflow-x-auto scroll-hide">
        {['All', 'Strength', 'Yoga', 'Cardio', 'Stretch'].map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              cat === 'All' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-4">Recommended for You</h3>
      <div className="grid grid-cols-1 gap-5">
        {workouts.map((workout) => (
          <div key={workout.id} className="group relative overflow-hidden rounded-[2rem] bg-white shadow-sm border border-gray-100 transition-transform active:scale-95">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={workout.image} alt={workout.title} className="w-full h-full object-cover grayscale-[20%] group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full text-white">
              <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-lg text-[10px] uppercase font-bold tracking-widest mb-2 inline-block">
                {workout.level} • {workout.category}
              </span>
              <h4 className="text-xl font-bold mb-1">{workout.title}</h4>
              <div className="flex items-center text-sm opacity-90">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {workout.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlans;
