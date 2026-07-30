"use client";

import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Services() {
  const serviceImages = [
    "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop", // Web Design
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop", // UI/UX Design
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop", // Framer Development
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop", // Mobile App Design
    "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop", // Branding & Identity
  ];

  return (
    <section id="services" className="w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <Reveal direction="down">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-transparent mb-6">
            <span className="text-[12px] font-medium text-text-primary tracking-wide">
              What I Do
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[2.75rem] md:text-5xl font-display font-medium tracking-[-0.04em] text-text-primary leading-[1.1]">
            Turning ideas into digital experiences
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.slice(0, 5).map((service, index) => {
          return (
            <Reveal key={service.id} delay={index * 0.1} className="h-full">
              <div className="h-full min-h-[340px] bg-[#f5f2f0] p-4 rounded-2xl flex flex-col transition-transform duration-300 hover:scale-[1.02] group">
                <div className="mb-4">
                  <h3 className="text-[19px] font-medium text-text-primary tracking-tight">
                    {service.title}
                  </h3>
                </div>
                
                {/* Illustration / Image for each service */}
                <div className="w-full aspect-[16/9] my-auto rounded-xl overflow-hidden relative shadow-xs">
                  <Image
                    src={serviceImages[index]}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <p className="mt-4 text-[#757575] text-[14px] leading-relaxed pr-2">
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
        
        {/* The 6th CTA Card */}
        <Reveal delay={0.5} className="h-full">
          <div className="h-full min-h-[340px] bg-[#4a3429] p-4 rounded-2xl flex flex-col justify-between shadow-sm transition-transform duration-300 hover:scale-[1.02]">
            <div>
              <h3 className="!text-white text-[22px] font-display font-medium mb-3 tracking-tight" style={{ color: "white" }}>
                Book A 30 min Free Call
              </h3>
              <p className="!text-white/90 text-[14px] leading-relaxed pr-4" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                Let's connect to discuss your design needs, explore creative ideas, and plan your project effectively together.
              </p>
            </div>
            <a 
              href="#contact" 
              className="mt-8 bg-white text-[#4a3429] w-full py-3.5 rounded-full text-[14px] font-semibold text-center hover:bg-bg-tertiary transition-colors"
            >
              Book A Call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
