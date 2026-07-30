"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_QUART } from "@/lib/animations";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  magnetic?: boolean;
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
  href,
  onClick,
  magnetic = true,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.15;
    const y = (clientY - (top + height / 2)) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors rounded-full whitespace-nowrap";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    secondary:
      "border border-border-strong text-text-primary hover:bg-text-primary hover:text-bg-primary",
    ghost: "text-text-primary hover:text-accent",
  };

  const sizes = {
    sm: "px-4 py-2 text-[13px] tracking-wide",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-flex"
    >
      {href ? (
        <a href={href} className={combinedClassName}>
          {children}
        </a>
      ) : (
        <button type={type} onClick={onClick} className={combinedClassName}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
