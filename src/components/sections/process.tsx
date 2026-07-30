"use client";

import { PROCESS_STEPS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Process() {
  return (
    <section id="process" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        
        {/* Left: Heading */}
        <div className="md:col-span-5 flex flex-col items-start">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm mb-6">
              <span className="text-[13px] font-medium text-text-primary">
                My Process
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-text-primary">
              From ideas to impactful creative results.
            </h2>
          </Reveal>
        </div>

        {/* Right: Steps List */}
        <div className="md:col-span-7 flex flex-col">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.1}>
              <div className={`py-8 ${index === 0 ? 'pt-0' : 'border-t border-border'}`}>
                <h3 className="text-xl font-medium text-text-primary mb-4 flex items-start gap-1">
                  {step.title}
                  <sup className="text-[10px] font-semibold text-text-secondary mt-1">/{step.number}</sup>
                </h3>
                <p className="text-[15px] text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
