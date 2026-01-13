
import React from 'react';

const RightPanel: React.FC = () => {
  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right duration-700">
      {/* Community Feed */}
      <section className="mb-14">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8 flex justify-between items-center px-2">
          Social Circle
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-sm" />
        </h3>
        <div className="space-y-8">
          {[
            { name: 'Sarah Miller', action: 'Finished Yoga Flow', time: '5m', avatar: 'https://i.pravatar.cc/150?u=sarah', color: 'bg-indigo-100' },
            { name: 'Marcus Kane', action: 'Ran 10k Marathon', time: '1h', avatar: 'https://i.pravatar.cc/150?u=marcus', color: 'bg-emerald-100' },
            { name: 'Elena Rose', action: 'New Personal Record', time: '3h', avatar: 'https://i.pravatar.cc/150?u=elena', color: 'bg-orange-100' },
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-5 group cursor-pointer">
              <div className={`p-1 rounded-[1.2rem] ${item.color} group-hover:scale-110 transition-transform`}>
                <img src={item.avatar} className="w-12 h-12 rounded-[1rem] object-cover border-2 border-white" alt={item.name} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black text-slate-900 truncate">{item.name}</p>
                <p className="text-xs font-semibold text-slate-400 truncate">{item.action}</p>
              </div>
              <span className="text-[10px] font-black text-slate-300">{item.time}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Schedule */}
      <section className="flex-1 flex flex-col">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8 px-2">Timeline</h3>
        <div className="space-y-5 flex-1 relative">
           {/* Vertical Line */}
           <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-100 hidden lg:block" />
           
           {[
             { time: '08:30', label: 'Morning Cardio', color: 'bg-emerald-500', bg: 'bg-[#ECFDF5]', active: false },
             { time: '13:00', label: 'Protein Lunch', color: 'bg-orange-500', bg: 'bg-[#FFF7ED]', active: true },
             { time: '17:30', label: 'Deadlift Session', color: 'bg-indigo-500', bg: 'bg-[#EEF2FF]', active: false },
             { time: '21:00', label: 'Sleep Hygiene', color: 'bg-slate-800', bg: 'bg-slate-50', active: false },
           ].map((slot, i) => (
             <div key={i} className={`relative z-10 p-6 rounded-[2rem] flex items-center space-x-6 transition-all border border-transparent hover:border-slate-100 ${slot.bg}`}>
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ring-4 ring-white shadow-sm ${slot.color}`} />
                  <span className="text-[10px] font-black text-slate-400 mt-2">{slot.time}</span>
                </div>
                <div className="flex-1">
                   <p className={`text-sm font-black ${slot.active ? 'text-slate-900' : 'text-slate-500'}`}>{slot.label}</p>
                   {slot.active && <span className="text-[9px] font-black uppercase text-orange-500 tracking-widest">Happening Now</span>}
                </div>
             </div>
           ))}
        </div>
        
        {/* Support AI Toggle */}
        <div className="mt-10 bg-indigo-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden group cursor-pointer shadow-2xl shadow-indigo-100">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
           <div className="relative z-10 text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] mb-2 opacity-60">Coach Zenith</p>
              <p className="text-xl font-black mb-6">Need a custom plan?</p>
              <button className="w-full bg-white text-indigo-600 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:shadow-xl transition-shadow">
                Start Chat
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default RightPanel;
