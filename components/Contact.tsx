import React from "react";
import { Github, Linkedin, Globe, Mail, ArrowUpRight } from "lucide-react";
import { SOCIALS } from "../constants";

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col gap-12 relative z-10 pt-12 border-t border-neutral-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-emerald-600">
            <div className="w-2 h-2 bg-emerald-600 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Signal Active
            </span>
          </div>
          <h3 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tighter">
            Initialize
            <br />
            Connection
          </h3>
          <p className="text-xs text-neutral-500 font-mono max-w-sm border-l-2 border-neutral-800 pl-4">
            Open for architectural consultations and research collaborations.
          </p>
        </div>

        <div className="flex flex-wrap gap-px bg-neutral-800 border border-neutral-800">
          {SOCIALS.map((social) => {
            const Icon =
              social.icon === "Github"
                ? Github
                : social.icon === "Linkedin"
                ? Linkedin
                : Globe;

            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-[#050505] text-neutral-500 hover:text-white hover:bg-neutral-900 transition-all duration-200 relative overflow-hidden"
                aria-label={social.label}
              >
                <div className="relative z-10 flex items-center gap-2">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                {/* Diagonal Swipe Effect */}
                <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              </a>
            );
          })}
          <a
            href="mailto:contact@prava.com"
            className="group p-4 bg-[#050505] text-neutral-500 hover:text-white hover:bg-neutral-900 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      <div className="w-full flex justify-between items-end">
        <div className="hidden md:flex gap-1">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1 h-4 bg-neutral-900" />
          ))}
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[10px] text-neutral-600 uppercase hover:text-emerald-500 flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none"
        >
          Back to Top <ArrowUpRight size={10} />
        </button>
      </div>
    </section>
  );
};

export default Contact;
