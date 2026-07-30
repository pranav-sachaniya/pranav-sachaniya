"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      {label && (
        <motion.span
          variants={fadeUp}
          className="inline-block text-[13px] font-semibold uppercase tracking-[0.12em] text-text-secondary mb-4"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-text-primary"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
          style={align === "center" ? { marginInline: "auto" } : undefined}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
