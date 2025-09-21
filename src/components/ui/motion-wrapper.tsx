'use client';

import React, { memo } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { defaultViewport } from '@/lib/animations';
import type { BaseComponentProps } from '@/types';

interface MotionWrapperProps extends BaseComponentProps {
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main' | 'aside' | 'nav';
  variant?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
  duration?: number;
  viewport?: MotionProps['viewport'];
  whileHover?: MotionProps['whileHover'];
  whileTap?: MotionProps['whileTap'];
  custom?: MotionProps['variants'];
}

// Memoized motion wrapper for better performance
const MotionWrapper = memo<MotionWrapperProps>(({
  children,
  className,
  as = 'div',
  variant = 'fadeInUp',
  delay = 0,
  duration = 0.5,
  viewport = defaultViewport,
  whileHover,
  whileTap,
  custom,
  ...props
}) => {
  // Define animation variants
  const variants = custom || {
    hidden: {
      opacity: 0,
      y: variant === 'fadeInUp' ? 20 : 0,
      x: variant === 'fadeInLeft' ? -20 : variant === 'fadeInRight' ? 20 : 0,
      scale: variant === 'scaleIn' ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  const componentMap = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    header: motion.header,
    footer: motion.footer,
    main: motion.main,
    aside: motion.aside,
    nav: motion.nav,
  };

  const MotionComponent = componentMap[as];

  return (
    <MotionComponent
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    >
      {children}
    </MotionComponent>
  );
});

MotionWrapper.displayName = 'MotionWrapper';

export { MotionWrapper };