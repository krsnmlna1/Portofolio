import React from 'react';
import { ArrowUpRight, Globe, CheckCircle2 } from 'lucide-react';
import { AGENCY } from '../constants';

const Agency: React.FC = () => {
  return (
    <section className="py-20 border-b border-neutral-900">
       <div className="flex items-center gap-2 mb-12">
          <span className="h-px w-8 bg-emerald-500"></span>
          <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">Current Venture</span>
       </div>

       <div className="group relative bg-[#080808] border border-neutral-800 rounded-lg p-8 md:p-12 hover:border-emerald-900/50 transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <div className="flex items-center gap-3 mb-6">
                   <Globe className="text-emerald-500" size={24} />
                   <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{AGENCY.title}</h2>
                   <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase">
                      {AGENCY.status}
                   </div>
                </div>
                
                <p className="text-xl text-neutral-400 leading-relaxed mb-8">
                   {AGENCY.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                   {AGENCY.tech.map((tech) => (
                      <span key={tech} className="text-sm font-mono text-neutral-500 bg-neutral-900/50 px-2 py-1 rounded">
                         {tech}
                      </span>
                   ))}
                </div>

                <a 
                  href={AGENCY.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-emerald-400 transition-colors group-hover:translate-x-1 duration-300"
                >
                  Visit Website <ArrowUpRight size={18} />
                </a>
             </div>

             <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 backdrop-blur-sm">
                   <h3 className="text-lg font-bold text-white mb-4">Core Focus</h3>
                   <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                         <CheckCircle2 className="text-emerald-500 mt-1" size={16} />
                         <span className="text-neutral-400 text-sm">NexusFlow integration for automation</span>
                      </li>
                      <li className="flex items-start gap-3">
                         <CheckCircle2 className="text-emerald-500 mt-1" size={16} />
                         <span className="text-neutral-400 text-sm">Subly-powered subscription models</span>
                      </li>
                      <li className="flex items-start gap-3">
                         <CheckCircle2 className="text-emerald-500 mt-1" size={16} />
                         <span className="text-neutral-400 text-sm">Prism design system implementation</span>
                      </li>
                   </ul>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default Agency;
