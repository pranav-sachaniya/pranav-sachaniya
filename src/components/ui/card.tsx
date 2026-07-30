"use client";

import { motion } from "framer-motion";
import { cardHover } from "@/lib/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  const paddings = {
    sm: "p-4",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10",
  };

  const baseStyles = `rounded-[var(--radius-xl)] bg-bg-secondary border border-border ${paddings[padding]}`;

  if (hover) {
    return (
      <motion.div
        whileHover={cardHover}
        className={`${baseStyles} cursor-pointer transition-shadow hover:shadow-[var(--shadow-md)] ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
}
