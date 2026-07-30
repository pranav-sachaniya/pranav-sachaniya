"use client";

import Image from "next/image";
import { ABOUT_DATA } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  const logos = [
    { name: "Logoipsum", icon: "logoipsum" },
    { name: "Logoipsum", icon: "logoipsum" },
    { name: "Logoipsum", icon: "logoipsum" },
    { name: "Logoipsum", icon: "logoipsum" },
  ];

  return (
    <section id="about" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Left Content */}
        <div>
          <Reveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm mb-8">
              <span className="text-[13px] font-medium text-text-primary">
                About me
              </span>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-[17px] text-text-secondary leading-relaxed mb-16">
              I'm Daniel Cross, a passionate UI/UX Designer dedicated to crafting digital experiences that truly connect with people. With a focus on simplicity, usability, and creativity, I design products that not only look beautiful but also solve real problems. My approach blends strategy, design, and technology to transform ideas into meaningful solutions. Whether it's designing intuitive interfaces, building websites, or shaping brand identities, I bring every project to life with precision and purpose.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-6">Worked with Global Brands</h4>
              <div className="flex flex-wrap items-center gap-8 opacity-60 grayscale">
                {/* Placeholder logos for visual matching */}
                {logos.map((_, i) => (
                  <div key={i} className="flex items-center gap-2 text-text-primary font-bold">
                    <div className="w-5 h-5 rounded-sm bg-text-primary rotate-45"></div>
                    <span>LOGOIPSUM</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Portrait */}
        <Reveal delay={0.4} className="h-full">
          <div className="relative aspect-[4/4] md:aspect-auto md:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
              alt="Daniel Cross"
              fill
              className="object-cover"
            />
            
            {/* Gradient overlay for signature */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
            
            {/* Signature styling (using a cursive font or styled text) */}
            <div className="absolute inset-x-0 bottom-12 flex justify-center">
              <span 
                className="text-white text-5xl opacity-90"
                style={{ fontFamily: "'Brush Script MT', cursive, serif", transform: "rotate(-5deg)" }}
              >
                Daniel Cross
              </span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
