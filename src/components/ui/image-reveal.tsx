"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { imageReveal } from "@/lib/animations";

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  imageClassName = "",
  priority = false,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageReveal}
        className="w-full h-full"
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={`object-cover ${imageClassName}`}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={imageClassName}
          />
        )}
      </motion.div>
    </div>
  );
}
