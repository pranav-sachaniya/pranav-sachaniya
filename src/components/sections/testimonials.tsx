"use client";

import { TESTIMONIALS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left: Heading */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm mb-6">
              <span className="text-[13px] font-medium text-text-primary">
                Reviews
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-text-primary">
              Voices of trust from happy clients
            </h2>
          </Reveal>
        </div>

        {/* Right: Carousel (implemented as horizontally scrollable container) */}
        <div className="lg:col-span-8 relative">
          <Reveal delay={0.2}>
            {/* Scrollable Container */}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide hide-scrollbar w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {TESTIMONIALS.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="snap-start shrink-0 w-full sm:w-[400px] bg-bg-secondary p-4 rounded-2xl flex flex-col justify-between"
                >
                  <p className="text-[17px] text-text-secondary leading-relaxed mb-12">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0 bg-bg-tertiary">
                      {/* Avatar placeholder */}
                      <Image
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=random`}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">
                        {testimonial.author}
                      </h4>
                      <p className="text-xs font-medium text-text-secondary">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Nav Arrows (visual only for this scrollable implementation, functional in full build) */}
            <div className="flex items-center justify-center gap-4 mt-2 lg:absolute lg:-bottom-16 lg:left-1/2 lg:-translate-x-1/2">
              <button className="w-10 h-10 rounded-full bg-accent hover:bg-accent-hover text-white flex items-center justify-center transition-colors">
                <ArrowLeft size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-accent hover:bg-accent-hover text-white flex items-center justify-center transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>
        
      </div>
    </section>
  );
}
