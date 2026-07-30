"use client";

import Image from "next/image";
import { HERO_DATA } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-10 pb-20 md:pb-32 flex flex-col items-center text-center">
      
      {/* Small Pill Label */}
      <Reveal direction="down" delay={0.1}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm mb-8">
          <span className="text-[13px] font-medium text-text-primary">
            Welcome here ❤️
          </span>
        </div>
      </Reveal>

      {/* Massive Typography Heading */}
      <div className="max-w-4xl mb-6">
        <Reveal delay={0.2}>
          <h1 className="font-display font-medium leading-[1.05] tracking-[-0.04em] text-text-primary">
            Hey, daniel here 🧔🏼‍♂️📸 I design Interfaces, experiences, & brands.
          </h1>
        </Reveal>
      </div>

      {/* Subheading text */}
      <Reveal delay={0.3}>
        <p className="max-w-xl mx-auto text-[17px] text-text-secondary leading-relaxed mb-10">
          I'm a UI/UX Designer crafting intuitive digital products with a focus on simplicity, usability, and engaging user experiences.
        </p>
      </Reveal>

      {/* Action Row */}
      <Reveal delay={0.4} className="flex flex-col sm:flex-row items-center gap-6 mb-20 md:mb-32">
        <a 
          href="#contact" 
          className="bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-full font-medium transition-colors"
        >
          Book A Call
        </a>
        <div className="flex items-center gap-2">
          <div className="flex text-text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-sm font-semibold text-text-primary">4.9/5</span>
        </div>
      </Reveal>

      {/* 3-Column Image Layout */}
      <Reveal delay={0.5} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
              alt="Workspace"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=800&auto=format&fit=crop"
              alt="Notebook"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop"
              alt="Office Desk"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Reveal>

    </section>
  );
}
