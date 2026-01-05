import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-400 font-mono selection:bg-emerald-900/30 selection:text-emerald-50 overflow-x-hidden">
      {/* Structural Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0" 
           style={{ 
             backgroundImage: `
               linear-gradient(to right, rgba(40, 40, 40, 0.1) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(40, 40, 40, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* Dotted Overlay for texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20"
           style={{
             backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
             backgroundSize: '10px 10px'
           }}
      />

      <main className="max-w-6xl mx-auto border-x border-neutral-900/50 bg-[#050505]/40 min-h-screen relative z-10 flex flex-col">
         {/* Top framing line */}
         <div className="h-px w-full bg-neutral-900 sticky top-0 z-50" />
         
         <div className="px-6 md:px-12 py-12 md:py-24 flex flex-col gap-32">
            {children}
         </div>
         
         {/* Bottom framing line */}
         <div className="h-px w-full bg-neutral-900 mt-auto" />
      </main>

      <footer className="w-full text-center py-6 text-[10px] text-neutral-800 uppercase tracking-widest bg-[#050505] border-t border-neutral-900 z-20 relative">
        <div className="max-w-6xl mx-auto flex justify-between px-6 md:px-12">
           <span>Sys.Status: Operational</span>
           <span>KMR-ARCH-V1.0</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;