import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full relative">
      
      {/* Top Bar Header */}
      <header className="w-full flex items-center justify-between px-8 py-8 md:py-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-text-primary"></span>
          <span className="text-sm font-medium text-text-primary">Available for work</span>
        </div>
        <div className="flex items-center gap-2 text-text-primary">
          <MapPin size={16} />
          <span className="text-sm font-medium">Based in London-UK</span>
        </div>
      </header>

      <div className="w-full px-4 sm:px-8 max-w-[1200px] mx-auto flex flex-col gap-24 md:gap-40 pb-32">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </div>
      
      <div className="w-full mt-24">
        <Footer />
      </div>
    </main>
  );
}
