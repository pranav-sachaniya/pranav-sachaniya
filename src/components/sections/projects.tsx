"use client";

import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <Reveal direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm mb-6">
            <span className="text-[13px] font-medium text-text-primary">
              My Portfolio
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-text-primary">
            Every project built to inspire users
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.1}>
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm">
              <Image
                src={project.image || "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=800&auto=format&fit=crop"} // fallback image
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
              />
              
              {/* Dark gradient for text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Project Info overlaid */}
              <div className="absolute bottom-0 left-0 w-full p-4 flex items-end justify-between text-white">
                <h3 className="text-2xl font-display font-medium">
                  {project.title}
                </h3>
                <span className="text-sm font-medium text-white/80">
                  {project.category} / {project.year}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="flex justify-center">
        <button className="bg-accent text-white px-8 py-3.5 rounded-full font-medium hover:bg-accent-hover transition-colors">
          Explore All
        </button>
      </Reveal>
    </section>
  );
}
