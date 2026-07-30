"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, fadeDown, fadeIn, slideInLeft, slideInRight, scaleUp } from "@/lib/animations";

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale";

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const directionVariants: Record<Direction, typeof fadeUp> = {
  up: fadeUp,
  down: fadeDown,
  left: slideInLeft,
  right: slideInRight,
  fade: fadeIn,
  scale: scaleUp,
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration,
  className,
  once = true,
  amount = 0.3,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const variants = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={duration ? { duration, delay } : { delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
