import type { Variants, Transition } from "framer-motion";

export const EASE_OUT_EXPO: number[] = [0.16, 1, 0.3, 1];
export const EASE_OUT_QUART: number[] = [0.25, 1, 0.5, 1];

export const defaultTransition: Transition = {
  duration: 0.8,
  ease: EASE_OUT_EXPO,
};

export const fastTransition: Transition = {
  duration: 0.4,
  ease: EASE_OUT_EXPO,
};

export const slowTransition: Transition = {
  duration: 1.2,
  ease: EASE_OUT_EXPO,
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: EASE_OUT_EXPO,
    },
  },
};

export const lineReveal: Variants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: EASE_OUT_EXPO,
    },
  },
};

export const cardHover = {
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: EASE_OUT_QUART,
  },
};

export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: EASE_OUT_QUART,
  },
};

export const buttonTap = {
  scale: 0.98,
};
