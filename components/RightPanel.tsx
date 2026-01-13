
import React from 'react';

const RightPanel: React.FC = () => {
  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right duration-700">
      {/* Community Activity */}
      <section className="mb-12">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex justify-between items-center">
          Friends Activity
          <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-400">12 Online</span>
        </h3>
        <div className="space-y-6">
          {[
            { name: 'Sarah M.', action: 'Morning Yoga', time: '12m ago', avatar: 'https://picsum.photos/seed/sarah/100' },
            { name: 'Mike Ross', action: 'Ran 5.2 km', time: '45m ago', avatar: 'https://picsum.photos/seed/mike/100' },
            { name: 'Emma Watson', action: 'HIT Blast', time: '2h ago', avatar: 'https://picsum.photos/seed/emma/100' },
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-4">
              <img src={item.avatar} className="w-10 h-10 rounded-xl object-cover" alt={item.name} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">{item.name}</p>
                <p className="text-xs text-slate-400 truncate">{item.action}</p>
              </div>
              <span className="text-[10px] font-medium text-slate-300">{item.time}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-8 py-3 rounded-2xl border border-slate-100 text-xs font-bold text-slate-400 hover:bg-slate-50 transition-all">View Leaderboard</button>
      </section>

      {/* Daily Schedule */}
      <section className="flex-1 flex flex-col">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Your Schedule</h3>
        <div className="space-y-4 flex-1">
           {[
             { time: '07:00 AM', label: 'Yoga Flow', active: false },
             { time: '12:30 PM', label: 'Lunch & Hydrate', active: true },
             { time: '05:00 PM', label: 'Leg Day', active: false },
             { time: '09:00 PM', label: 'Meditation', active: false },
           ].map((slot, i) => (
             <div key={i} className={`p-4 rounded-2xl flex items-center space-x-4 border-l-4 transition-all ${slot.active ? 'bg-indigo-50/50 border-indigo-600' : 'bg-slate-50 border-slate-200'}`}>
                <div className="text-[10px] font-black text-slate-400 w-16">{slot.time}</div>
                <div className={`text-sm font-bold ${slot.active ? 'text-indigo-900' : 'text-slate-500'}`}>{slot.label}</div>
             </div>
           ))}
        </div>
        
        {/* Support AI Toggle */}
        <div className="mt-auto bg-slate-900 rounded-[2.5rem] p-6 text-white text-center">
           <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM5.884 6.98a1 1 0 00-1.458-1.366l-.707.707a1 1 0 101.415 1.415l.75-.756z"/></svg>
           </div>
           <p className="text-sm font-bold mb-4">Need help?</p>
           <button className="w-full bg-white text-black py-3 rounded-xl text-xs font-black uppercase tracking-widest">Ask Coach</button>
        </div>
      </section>
    </div>
  );
};

export default RightPanel;
