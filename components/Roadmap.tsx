import React from 'react';
import { ROADMAP } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <section className="flex flex-col gap-12 relative z-10">
      <div className="flex items-end justify-between border-b border-neutral-800 pb-2">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
          02 // Research Roadmap
        </h3>
      </div>

      <div className="relative border-l border-neutral-800 ml-2 space-y-0">
        {ROADMAP.map((item, index) => (
          <div key={index} className="relative pl-10 md:pl-16 py-8 group border-b border-dashed border-neutral-900 last:border-0">
            {/* Timeline Node - Square */}
            <div className={`absolute -left-[5px] top-10 w-[9px] h-[9px] bg-[#050505] border border-neutral-600 transition-all duration-300 group-hover:bg-neutral-200 ${item.status === 'In Progress' ? 'border-emerald-500 bg-emerald-950' : 'bg-[#050505]'}`} />
            
            {/* Connector Line on Hover */}
            <div className="absolute left-0 top-11 w-8 h-px bg-neutral-800 group-hover:w-12 group-hover:bg-neutral-600 transition-all duration-300 hidden md:block" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex flex-col gap-2 max-w-xl">
                 <h4 className="text-xl font-bold text-neutral-200 uppercase tracking-tight group-hover:text-emerald-500 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed font-mono">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-1 min-w-[120px]">
                 <span className={`text-[10px] font-bold px-1.5 py-0.5 border ${item.status === 'In Progress' ? 'border-emerald-900 text-emerald-500 bg-emerald-950/10' : 'border-neutral-800 text-neutral-600'}`}>
                  {item.year} // {item.quarter}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-700">
                  STATUS: {item.status.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;