import type {
  Project,
  Experience,
  Service,
  Skill,
  ProcessStep,
  Testimonial,
  NavLink,
  SocialLink,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
];

export const HERO_DATA = {
  greeting: "Hello, I'm",
  name: "Pranav",
  title: "Creative Developer & Designer",
  description:
    "I craft digital experiences that merge thoughtful design with cutting-edge technology. Specializing in building premium web applications that feel as good as they look.",
  availabilityStatus: "Available for freelance",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
  ],
};

export const ABOUT_DATA = {
  headline: "Crafting digital experiences with precision and purpose",
  description: [
    "I'm a passionate creative developer based in India, with a keen eye for design and a deep understanding of modern web technologies. I believe in the power of clean code and beautiful interfaces working in harmony.",
    "My approach combines strategic thinking with meticulous attention to detail. Every project I take on is an opportunity to push boundaries and deliver something extraordinary. I'm not just building websites — I'm crafting experiences that leave lasting impressions.",
  ],
  highlights: [
    { value: "UI/UX", label: "Design Focused" },
    { value: "Full-Stack", label: "Development" },
    { value: "Performance", label: "Optimized" },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "TechVision Studios",
    role: "Senior Frontend Developer",
    period: "2023 — Present",
    description:
      "Leading the frontend architecture for enterprise-level SaaS products. Implementing design systems, optimizing performance, and mentoring junior developers.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    company: "Digital Craft Agency",
    role: "Full-Stack Developer",
    period: "2021 — 2023",
    description:
      "Built end-to-end web applications for clients across various industries. Delivered 20+ projects with a focus on performance, accessibility, and visual excellence.",
    technologies: ["Node.js", "React", "MongoDB", "AWS"],
  },
  {
    id: "exp-3",
    company: "Pixel Perfect Labs",
    role: "Frontend Developer",
    period: "2020 — 2021",
    description:
      "Developed responsive, pixel-perfect web interfaces from design mockups. Collaborated closely with the design team to implement complex animations and interactions.",
    technologies: ["JavaScript", "SCSS", "GSAP", "Figma"],
  },
  {
    id: "exp-4",
    company: "Freelance",
    role: "Web Designer & Developer",
    period: "2019 — 2020",
    description:
      "Designed and developed websites for small businesses and startups. Built a strong foundation in both design thinking and frontend development.",
    technologies: ["HTML/CSS", "JavaScript", "WordPress", "Photoshop"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Meridian Finance",
    category: "Web Application",
    description:
      "A comprehensive fintech dashboard with real-time analytics, portfolio tracking, and automated reporting for financial advisors.",
    image: "/projects/project-1.jpg",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    year: "2024",
    link: "#",
  },
  {
    id: "proj-2",
    title: "Aura Wellness",
    category: "Brand & Website",
    description:
      "Complete brand identity and e-commerce platform for a luxury wellness brand, featuring immersive product experiences and seamless checkout.",
    image: "/projects/project-2.jpg",
    tags: ["Next.js", "Shopify", "Framer Motion", "Figma"],
    year: "2024",
    link: "#",
  },
  {
    id: "proj-3",
    title: "Nexus Platform",
    category: "SaaS Product",
    description:
      "A collaborative project management tool designed for creative teams, with real-time editing, file versioning, and integrated feedback loops.",
    image: "/projects/project-3.jpg",
    tags: ["React", "Socket.io", "PostgreSQL", "AWS"],
    year: "2023",
    link: "#",
  },
  {
    id: "proj-4",
    title: "Arcadia Studio",
    category: "Portfolio & CMS",
    description:
      "A minimalist portfolio platform for photographers and artists, with a custom CMS, advanced gallery features, and print ordering.",
    image: "/projects/project-4.jpg",
    tags: ["Next.js", "Sanity", "Tailwind CSS", "Vercel"],
    year: "2023",
    link: "#",
  },
];

export const SERVICES: Service[] = [
  {
    id: "svc-1",
    number: "01",
    title: "UI/UX Design",
    description:
      "Creating intuitive, visually stunning interfaces that prioritize user experience. From wireframes to high-fidelity prototypes, every pixel is purposeful.",
    features: [
      "User Research & Strategy",
      "Wireframing & Prototyping",
      "Visual Design",
      "Design Systems",
    ],
  },
  {
    id: "svc-2",
    number: "02",
    title: "Web Development",
    description:
      "Building fast, responsive, and accessible websites using modern frameworks. Clean architecture and optimized performance are non-negotiable.",
    features: [
      "Frontend Development",
      "Full-Stack Applications",
      "API Development",
      "Performance Optimization",
    ],
  },
  {
    id: "svc-3",
    number: "03",
    title: "Brand Identity",
    description:
      "Developing cohesive brand identities that resonate with target audiences. From logo design to comprehensive brand guidelines.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Strategy",
    ],
  },
  {
    id: "svc-4",
    number: "04",
    title: "Motion Design",
    description:
      "Crafting meaningful animations and micro-interactions that enhance user engagement and bring interfaces to life.",
    features: [
      "Micro-interactions",
      "Page Transitions",
      "Scroll Animations",
      "Loading Experiences",
    ],
  },
];

export const SKILLS: Skill[] = [
  { name: "React", category: "development" },
  { name: "Next.js", category: "development" },
  { name: "TypeScript", category: "development" },
  { name: "JavaScript", category: "development" },
  { name: "Node.js", category: "development" },
  { name: "Tailwind CSS", category: "development" },
  { name: "GSAP", category: "development" },
  { name: "Framer Motion", category: "development" },
  { name: "Three.js", category: "development" },
  { name: "MongoDB", category: "development" },
  { name: "PostgreSQL", category: "development" },
  { name: "GraphQL", category: "development" },
  { name: "Figma", category: "design" },
  { name: "Adobe XD", category: "design" },
  { name: "Photoshop", category: "design" },
  { name: "Illustrator", category: "design" },
  { name: "After Effects", category: "design" },
  { name: "Blender", category: "design" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Notion", category: "tools" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Discovery",
    description:
      "Understanding your vision, goals, and target audience through in-depth research and strategic planning sessions.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Design",
    description:
      "Translating insights into beautiful, functional designs through wireframes, prototypes, and iterative visual exploration.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Develop",
    description:
      "Bringing designs to life with clean, performant code. Every interaction is carefully implemented for a seamless experience.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Deliver",
    description:
      "Rigorous testing, performance optimization, and seamless deployment. Your project launches polished and production-ready.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Pranav transformed our vision into a stunning digital experience. His attention to detail and understanding of modern design principles is exceptional.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechVision Studios",
  },
  {
    id: "test-2",
    quote:
      "Working with Pranav was a game-changer for our brand. He doesn't just build websites — he crafts experiences that truly resonate with users.",
    author: "Marcus Rivera",
    role: "Creative Director",
    company: "Digital Craft Agency",
  },
  {
    id: "test-3",
    quote:
      "The level of craftsmanship and performance optimization Pranav delivers is unmatched. Our site's Lighthouse scores went from 60s to consistent 98+.",
    author: "Emily Watson",
    role: "Head of Product",
    company: "Nexus Platform",
  },
  {
    id: "test-4",
    quote:
      "Pranav has a rare combination of design sensibility and technical expertise. Every project we've collaborated on has exceeded expectations.",
    author: "David Park",
    role: "Founder",
    company: "Aura Wellness",
  },
];

export const CONTACT_DATA = {
  headline: "Let's create something extraordinary",
  description:
    "Have a project in mind or just want to chat about design and development? I'd love to hear from you.",
  email: "hello@pranav.dev",
  location: "India",
};

export const FOOTER_DATA = {
  copyright: `© ${new Date().getFullYear()} Pranav. All rights reserved.`,
  tagline: "Designed & Developed with precision",
};
