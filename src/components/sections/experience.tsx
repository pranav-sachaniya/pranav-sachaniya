"use client";

import { EXPERIENCES } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          align="center"
          className="mb-16 sm:mb-24"
        />

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <Reveal key={exp.id} delay={index * 0.1}>
              <Card padding="lg" className="flex flex-col md:flex-row gap-6 md:gap-12 relative overflow-hidden group">
                
                {/* Timeline visual indicator on hover (optional enhancement) */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-accent transition-colors duration-300"></div>

                {/* Left: Period & Company */}
                <div className="md:w-1/3 shrink-0">
                  <p className="text-sm font-semibold tracking-wider text-text-secondary uppercase mb-2">
                    {exp.period}
                  </p>
                  <h3 className="text-xl font-display font-bold text-text-primary">
                    {exp.company}
                  </h3>
                </div>

                {/* Right: Role, Description, Tags */}
                <div className="md:w-2/3">
                  <h4 className="text-lg font-semibold text-accent mb-4">
                    {exp.role}
                  </h4>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
