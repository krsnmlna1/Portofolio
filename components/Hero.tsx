import React from 'react';
import { MapPin, Terminal, Activity } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-12 pt-10 animate-fade-in relative">
      {/* Decorative Top Bar */}
      <div className="w-full h-px bg-gradient-to-r from-emerald-900/50 to-transparent mb-[-30px]" />
      
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-emerald-600 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-none h-2 w-2 bg-emerald-600"></span>
          </span>
          System Online
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
          {PROFILE.name.split(' ')[0]}<br/>
          <span className="text-neutral-800">{PROFILE.name.split(' ')[1]}</span>
          <span className="text-neutral-700 ml-2 md:ml-4">{PROFILE.name.split(' ')[2]}</span>
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-y border-neutral-900 py-6 mt-4">
            <h2 className="text-sm md:text-base text-neutral-400 font-medium flex items-center gap-3 uppercase tracking-wider">
              <Terminal size={14} className="text-emerald-700" />
              {PROFILE.role}
            </h2>
            
            <div className="flex items-center gap-4 text-xs text-neutral-600 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin size={12} />
                  <span>{PROFILE.location}</span>
                </div>
                <div className="h-3 w-px bg-neutral-800" />
                <span>[{PROFILE.coordinates}]</span>
            </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-2 bg-neutral-900/0 border border-neutral-800/0 group-hover:border-neutral-800/50 group-hover:bg-neutral-900/10 transition-all duration-500 -z-10" />
        <p className="text-xl md:text-2xl text-neutral-300 leading-tight font-light max-w-3xl">
          <span className="text-emerald-800 mr-2">//</span>
          "{PROFILE.philosophy}"
        </p>
      </div>

      <div className="absolute top-0 right-0 hidden lg:flex flex-col gap-1 opacity-20 pointer-events-none">
         {[...Array(5)].map((_, i) => (
             <div key={i} className="w-32 h-px bg-neutral-800" />
         ))}
         <Activity size={48} strokeWidth={1} className="text-neutral-700 mt-2" />
      </div>
    </section>
  );
};

export default Hero;