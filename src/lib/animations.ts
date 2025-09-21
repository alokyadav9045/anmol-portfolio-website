import { Variants } from 'framer-motion';

// Common animation variants for better performance and consistency
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Optimized viewport options to reduce animation triggers
export const defaultViewport = {
  once: true,
  margin: '-100px',
  amount: 0.3,
} as const;

// Hover animations for buttons and cards
export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: 'easeInOut',
  },
};

export const cardHover = {
  y: -4,
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

// Text animations
export const textHover = {
  scale: 1.02,
  color: '#a855f7',
  textShadow: '0 0 15px rgba(168, 85, 247, 0.3)',
  transition: {
    duration: 0.3,
    ease: 'easeOut' as const,
  },
};

// Progress bar animation
export const progressBar = (percentage: number): Variants => ({
  hidden: { width: 0 },
  visible: {
    width: `${percentage}%`,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
});

// Utility function to create custom animation variants
export const createAnimation = (
  initialState: Record<string, string | number>,
  animateState: Record<string, string | number>,
  duration = 0.5,
  delay = 0
): Variants => ({
  hidden: initialState,
  visible: {
    ...animateState,
    transition: {
      duration,
      delay,
      ease: 'easeOut',
    },
  },
});