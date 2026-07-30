"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  splitBy?: "word" | "character";
  once?: boolean;
  staggerDelay?: number;
}

export function AnimatedText({
  text,
  as: Tag = "p",
  className,
  delay = 0,
  splitBy = "word",
  once = true,
  staggerDelay = 0.04,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  const items = splitBy === "word" ? text.split(" ") : text.split("");

  return (
    <Tag className={className} ref={ref as React.RefObject<HTMLHeadingElement>}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delay,
            },
          },
        }}
        className="inline"
      >
        {items.map((item, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: EASE_OUT_EXPO,
                  },
                },
              }}
            >
              {item}
              {splitBy === "word" && i < items.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
