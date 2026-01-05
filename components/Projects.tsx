import React from 'react';
import { ArrowUpRight, Box, Layers, Workflow, Plus, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="flex flex-col gap-12 relative z-10">
      <div className="flex items-end justify-between border-b border-neutral-800 pb-2">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
          01 // Engineering Sandbox
        </h3>
        <span className="text-[10px] text-neutral-700 uppercase tracking-widest hidden md:block">Index: Modules_V.03</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900/50 border border-neutral-900">
        {PROJECTS.map((project) => {
          const isInternal = project.url && project.url.startsWith('/');
          const Component = isInternal ? Link : 'a';
          const props = isInternal 
            ? { to: project.url } 
            : { href: project.url || '#', target: project.url ? "_blank" : "_self", rel: "noopener noreferrer" };

          return (
            // @ts-ignore - Dynamic component props issue
            <Component 
              key={project.id} 
              {...props}
              className="group relative bg-[#050505] p-8 flex flex-col justify-between min-h-[320px] hover:bg-neutral-900/20 transition-colors duration-300 cursor-pointer block"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus size={12} strokeWidth={1} />
              </div>
              <div className="absolute top-0 right-0 text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus size={12} strokeWidth={1} />
              </div>
              <div className="absolute bottom-0 left-0 text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus size={12} strokeWidth={1} />
              </div>
              <div className="absolute bottom-0 right-0 text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus size={12} strokeWidth={1} />
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-neutral-950 border border-neutral-900 text-neutral-500 group-hover:text-emerald-500 group-hover:border-emerald-900/30 transition-colors">
                    {project.category === 'AI Architecture' && <Workflow size={18} strokeWidth={1.5} />}
                    {project.category === 'SaaS Framework' && <Box size={18} strokeWidth={1.5} />}
                    {project.category === 'Design System' && <Layers size={18} strokeWidth={1.5} />}
                    {project.category === 'Web Agency' && <Globe size={18} strokeWidth={1.5} />}
                  </div>
                  <ArrowUpRight size={16} className="text-neutral-700 group-hover:text-emerald-500 transition-colors" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-neutral-200 mb-3 uppercase tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed border-l border-neutral-900 pl-3 group-hover:border-neutral-700 transition-colors">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-dashed border-neutral-900 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[9px] uppercase font-bold tracking-wider text-neutral-600 bg-neutral-950/50 border border-neutral-900 px-1.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </Component>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;