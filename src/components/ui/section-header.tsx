'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { textHover } from '@/lib/animations';
import type { BaseComponentProps } from '@/types';

interface SectionHeaderProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

const SectionHeader = memo<SectionHeaderProps>(({
  title,
  subtitle,
  description,
  align = 'center',
  size = 'lg',
  className,
}) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  const titleSizeClass = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl lg:text-6xl',
    lg: 'text-5xl md:text-6xl lg:text-7xl',
  }[size];

  const subtitleSizeClass = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl',
    lg: 'text-xl md:text-2xl',
  }[size];

  return (
    <div className={cn('mb-12 sm:mb-16', alignmentClass, className)}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={cn(
            'text-purple-400 font-medium mb-4',
            subtitleSizeClass
          )}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={textHover}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={cn(
          'font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent cursor-pointer mb-6',
          titleSizeClass
        )}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={cn(
            'text-foreground/70 max-w-3xl leading-relaxed',
            align === 'center' ? 'mx-auto' : '',
            subtitleSizeClass
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
});

SectionHeader.displayName = 'SectionHeader';

export { SectionHeader };