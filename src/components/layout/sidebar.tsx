"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Mail } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#", count: "256K" },
    { name: "Twitter-X", href: "#", count: "112K" },
    { name: "LinkedIn", href: "#", count: "198K" },
    { name: "Youtube", href: "#", count: "320K" },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[280px] bg-bg-primary border-r border-border flex flex-col z-50 h-screen overflow-y-auto hidden lg:flex">
      {/* Header Profile */}
      <div className="p-8 pb-4 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-bg-tertiary relative shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
            alt="Daniel Cross"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display font-bold text-lg leading-none mb-1 text-text-primary tracking-tight">
            Daniel Cross
          </h2>
          <p className="text-[10px] uppercase font-semibold tracking-wider text-text-secondary">
            UI/UX DESIGNER
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-8 flex flex-col gap-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href === "/" && pathname === "");
          const Icon = link.icon;
          
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "bg-bg-surface text-text-primary shadow-sm"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-surface/50"
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              {link.name}
            </Link>
          );
        })}

        {/* Decorative Visual Block in Sidebar */}
        <div className="mt-8 px-4">
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop"
              alt="Decorative abstract"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </nav>

      {/* Footer Socials */}
      <div className="p-8 pt-4 pb-12 mt-auto">
        <h3 className="text-xs font-semibold text-text-primary mb-4">Follow me</h3>
        <ul className="flex flex-col gap-3">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                className="group flex items-center justify-between text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <span className="font-medium">{social.name}</span>
                <span className="text-[10px] font-semibold text-text-secondary/60 group-hover:text-text-secondary transition-colors">
                  {social.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
