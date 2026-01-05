import React from 'react';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section className="flex flex-col gap-12 relative z-10">
      <div className="flex items-end justify-between border-b border-neutral-800 pb-2">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
          03 // Technical Stack
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-neutral-900">
        {TECH_STACK.map((group) => (
          <div key={group.category} className="flex flex-col gap-6">
            <h4 className="text-xs font-bold text-neutral-700 uppercase tracking-widest border-b border-neutral-900 pb-2 w-max">
              {group.category}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {group.skills.map((skill) => (
                <div 
                  key={skill} 
                  className="px-3 py-2 bg-neutral-950/50 border border-neutral-900 text-neutral-400 text-xs hover:border-neutral-600 hover:text-white hover:bg-neutral-900 transition-all cursor-crosshair flex items-center justify-between group"
                >
                  <span>{skill}</span>
                  <div className="w-1 h-1 bg-neutral-800 group-hover:bg-emerald-500 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;