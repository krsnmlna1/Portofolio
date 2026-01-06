import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Layers, Cpu, Code2, Network, Lightbulb } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Find project by ID matching the URL parameter
  const project = PROJECTS.find(p => p.id === projectId);
  
  if (!project) return <Navigate to="/" replace />;
  const details = project.details;
  if (!details) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-emerald-900/30 selection:text-emerald-50">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white mb-12 transition-colors">
          <ArrowLeft size={16} />
          <span className="text-sm font-mono uppercase tracking-wider">Back to System</span>
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-emerald-500 mb-4">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-widest">
                Case Study // {projectId?.split('-')[0].toUpperCase()}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">{project.title}</h1>
          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">{project.description}</p>
          
          {/* Custom Status Text if available */}
          {details.statusText && (
             <div className="mt-6 inline-block px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-emerald-400">
               STATUS: {details.statusText.toUpperCase()}
             </div>
          )}
        </div>

        {/* Core Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column: Context */}
          <div className="md:col-span-2 space-y-16">
            
            {/* Problem & Solution */}
            <div className="grid gap-8">
              <section className="bg-neutral-900/30 border border-neutral-900 rounded-lg p-8">
                <h3 className="text-sm font-mono text-emerald-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                   <Layers size={16} /> Problem Statement
                </h3>
                <p className="text-neutral-300 leading-relaxed text-lg">{details.problem}</p>
              </section>

              <section className="bg-neutral-900/30 border border-neutral-900 rounded-lg p-8">
                <h3 className="text-sm font-mono text-emerald-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                   <Cpu size={16} /> The Solution
                </h3>
                <p className="text-neutral-300 leading-relaxed text-lg">{details.solution}</p>
              </section>
            </div>
            
            {/* System Design (Subly) */}
            {details.systemDesign && (
              <section>
                 <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                  <Network className="text-emerald-500" />
                  System Design
                </h3>
                <div className="bg-neutral-900/40 border border-neutral-800 rounded-lg p-6 space-y-4">
                  {details.systemDesign.map((line, i) => (
                    <div key={i} className="flex items-center gap-3">
                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
                         <span className="text-neutral-300 font-mono text-sm shadow-black drop-shadow-sm">{line}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Ideas (Prism) */}
            {details.keyIdeas && (
              <section>
                 <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                  <Lightbulb className="text-emerald-500" />
                  Key Ideas
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {details.keyIdeas.map((idea, i) => (
                    <div key={i} className="p-4 bg-neutral-900/20 border border-neutral-800 rounded hover:border-emerald-500/30 transition-colors">
                         <span className="text-lg text-emerald-100 font-medium">{idea}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* What I Built / Features */}
            <section>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <Code2 className="text-emerald-500" />
                What I Worked On
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {details.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-neutral-800 bg-neutral-900/20 rounded hover:border-emerald-900/50 transition-colors">
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What I Learned */}
            {details.learned && (
             <section className="border-l-2 border-emerald-900/50 pl-6 py-2">
                <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-3">Key Takeaway</h3>
                <p className="text-neutral-300 italic text-lg">"{details.learned}"</p>
             </section>
            )}

          </div>

          {/* Right Column: Tech Stack */}
          <div className="md:col-span-1">
             <div className="sticky top-24">
                <div className="p-6 border border-neutral-800 bg-[#0A0A0A] rounded-lg">
                  <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">Tech Stack</h3>
                  <div className="flex flex-col gap-3">
                    {/* Combine original tech array + extra details if needed, strictly using constant data */}
                    {/* Prefer techStackDetails if present for the sidebar, or combine? User said "tambah apa yang kamu pakai" */}
                    {(details.techStackDetails || project.tech).map((tech, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-neutral-900/40 rounded border border-neutral-900/50">
                        <span className="text-sm text-neutral-300 font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetailPage;
