import React from 'react';
import { 
  ArrowRight, 
  Compass, 
  Palette, 
  Monitor, 
  Cpu, 
  TrendingUp, 
  Code, 
  Rocket
} from 'lucide-react';

export const PravaPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300 font-sans text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Membangun Identitas Digital yang <span className="text-slate-500">Menghasilkan.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Strategi brand, desain minimalis, dan web modern untuk bisnis yang ingin tumbuh serius.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/6285198326939?text=Halo%20Prava,%20saya%20tertarik%20untuk%20mulai%20proyek%20baru.%20Bisa%20bantu?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center gap-2 group"
              >
                Mulai Proyek
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/6285198326939?text=Halo%20Prava,%20saya%20ingin%20konsultasi%20gratis%20mengenai%20kebutuhan%20digital%20bisnis%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-full font-medium hover:border-slate-900 dark:hover:border-white transition-colors"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-60"></div>
      </section>

      {/* Services Section: Apa yang Kami Kerjakan */}
      <section className="py-24 border-t border-slate-100 dark:border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Apa yang Kami Kerjakan?</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
              Fokus pada hal esensial yang memberikan dampak terbesar bagi bisnis Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard 
              icon={<Compass className="w-6 h-6" />}
              title="Brand Strategy"
              description="Menemukan positioning unik Anda di pasar yang ramai."
            />
            <ServiceCard 
              icon={<Palette className="w-6 h-6" />}
              title="Visual Identity"
              description="Desain logo dan sistem visual yang tak lekang oleh waktu."
            />
            <ServiceCard 
              icon={<Monitor className="w-6 h-6" />}
              title="Website Development"
              description="Website performa tinggi yang mengubah pengunjung menjadi pelanggan."
            />
            <ServiceCard 
              icon={<Cpu className="w-6 h-6" />}
              title="AI & Automation"
              description="Efisiensi operasional dengan integrasi teknologi cerdas."
            />
          </div>
        </div>
      </section>

      {/* Why Us Section: Kenapa Prava? */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Kenapa Prava?</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
              Kami bukan sekadar pembuat kosmetik digital. Kami mitra pertumbuhan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <WhyUsCard 
              icon={<TrendingUp className="w-6 h-6 text-slate-900 dark:text-white" />}
              title="Pendekatan Strategis"
              description="Setiap piksel dan baris kode memiliki tujuan bisnis yang jelas. Bukan sekadar estetika."
            />
            <WhyUsCard 
              icon={<Rocket className="w-6 h-6 text-slate-900 dark:text-white" />}
              title="Fokus growth"
              description="Metrik kami adalah pertumbuhan Anda, bukan sekadar jumlah like atau visual cantik."
            />
            <WhyUsCard 
              icon={<Code className="w-6 h-6 text-slate-900 dark:text-white" />}
              title="Tim Teknis & Kreatif"
              description="Dibangun oleh ahli yang mengerti teknis mendalam, bukan agensi 'kosmetik'."
            />
          </div>
        </div>
      </section>

      {/* Process Section: Cara Kerja */}
      <section className="py-24 border-t border-slate-100 dark:border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Cara Kerja</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
              Proses yang transparan, terstruktur, dan berorientasi hasil.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ProcessStep number="01" title="Diskusi & Brief" description="Memahami visi dan masalah bisnis Anda secara mendalam." />
            <ProcessStep number="02" title="Strategi & Konsep" description="Merancang blueprint solusi yang tepat sasaran." />
            <ProcessStep number="03" title="Eksekusi" description="Pengerjaan detail dengan standar kualitas tinggi." />
            <ProcessStep number="04" title="Launch & Iterasi" description="Peluncuran dan optimasi berkelanjutan." />
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-32 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap untuk Identitas Digital yang Lebih Kuat?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Jangan biarkan brand Anda tenggelam. Mari bangun sesuatu yang menonjol.
          </p>
          <a 
            href="https://wa.me/6285198326939?text=Halo%20Prava,%20saya%20ingin%20konsultasi%20gratis%20mengenai%20kebutuhan%20digital%20bisnis%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-100 transition-all inline-flex items-center gap-2"
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </section>
    </div>
  );
};

// Sub-components
const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-slate-300 dark:hover:border-slate-600 transition-colors bg-white dark:bg-slate-900/50">
    <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-slate-900 dark:text-white">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const WhyUsCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-6">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const ProcessStep = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="relative p-6 border-l border-slate-200 dark:border-slate-800">
    <span className="text-4xl font-bold text-slate-100 dark:text-slate-800 absolute -top-4 -left-3 bg-white dark:bg-slate-950 px-2 transition-colors">
      {number}
    </span>
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export default PravaPage;
