"use client";

import { SKILLS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";

export function Skills() {
  const categories = ["design", "development", "tools"] as const;

  return (
    <section id="skills" className="py-24 sm:py-32 bg-bg-secondary relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-4">
            <SectionHeading
              label="Skills & Tools"
              title="My Arsenal"
              description="A curated list of technologies and tools I use to bring ideas to life."
              className="sticky top-32"
            />
          </div>

          <div className="lg:col-span-8 flex flex-col gap-16">
            {categories.map((category, index) => {
              const categorySkills = SKILLS.filter((s) => s.category === category);
              
              return (
                <Reveal key={category} delay={index * 0.1}>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-text-secondary uppercase mb-6 flex items-center gap-4">
                      {category}
                      <span className="flex-grow h-px bg-border"></span>
                    </h3>
                    
                    <div className="flex flex-wrap gap-3">
                      {categorySkills.map((skill, i) => (
                        <div 
                          key={skill.name} 
                          className="animate-in fade-in slide-in-from-bottom-4"
                          style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'both' }}
                        >
                          <Tag variant="outline" className="px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition-colors duration-300">
                            {skill.name}
                          </Tag>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
