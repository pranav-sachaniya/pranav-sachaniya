"use client";

import { CONTACT_DATA } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="w-full pt-12 border-t border-border mt-12">
      <Reveal direction="up">
        {/* Top Links Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <a href={`mailto:${CONTACT_DATA.email}`} className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            {CONTACT_DATA.email} <ArrowUpRight size={14} />
          </a>
          <a href="#" className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            +44 7700 900123 <ArrowUpRight size={14} />
          </a>
          <a href="#" className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            London-UK <ArrowUpRight size={14} />
          </a>
          <a href="#" className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Have a question <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Massive Let's Connect Block */}
        <div className="w-full bg-white rounded-2xl py-16 md:py-32 flex items-center justify-center shadow-sm relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.01] duration-500">
          <h2 className="text-[clamp(3rem,12vw,10rem)] font-display font-medium tracking-[-0.04em] text-text-primary text-center leading-none">
            Let's Connect
          </h2>
        </div>
      </Reveal>
    </section>
  );
}
