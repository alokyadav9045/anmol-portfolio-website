"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface DirectionAwareHoverProps {
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
}

type Direction = "top" | "right" | "bottom" | "left" | null;

export function DirectionAwareHover({
  children,
  className = "",
  overlayClassName = "",
}: DirectionAwareHoverProps) {
  const [direction, setDirection] = useState<Direction>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Detect mobile on client side to avoid hydration mismatch
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getDirection = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    if (!ref.current) return "top";

    const rect = ref.current.getBoundingClientRect();
    let x: number, y: number;

    if ('touches' in e && e.touches.length > 0) {
      // Touch event
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else if ('clientX' in e) {
      // Mouse event
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    } else {
      return "top";
    }

    const width = rect.width;
    const height = rect.height;

    const centerX = width / 2;
    const centerY = height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      return deltaX > 0 ? "right" : "left";
    } else {
      return deltaY > 0 ? "bottom" : "top";
    }
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    // Only use direction-aware behavior on desktop
    if (!isMobile) {
      const dir = getDirection(e);
      setDirection(dir);
    } else {
      setDirection("top"); // Default direction for mobile
    }
    setIsHovered(true);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    // Only use direction-aware behavior on desktop
    if (!isMobile) {
      const dir = getDirection(e);
      setDirection(dir);
    }
    setIsHovered(false);
  };

  // Touch event handlers for mobile
  const handleTouchStart = () => {
    // No direction awareness on mobile - always use simple fade
    setDirection("top");
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    // Keep the overlay visible for a bit longer on touch devices
    setTimeout(() => {
      setIsTouched(false);
    }, 3000); // 3 seconds
  };

  // Handle click/tap for mobile toggle
  const handleClick = () => {
    if (isMobile) { // Mobile/tablet breakpoint
      setIsTouched(!isTouched);
      if (!isTouched) {
        setDirection("top");
        // Auto-hide after 5 seconds on mobile
        setTimeout(() => {
          setIsTouched(false);
        }, 5000);
      }
    }
  };

  const getOverlayTransform = () => {
    const isVisible = isHovered || isTouched;
    
    if (!direction) return { x: "0%", y: "-100%" }; // Start from top by default

    // Simple fade for mobile - no directional animation
    if (isMobile) {
      return { x: "0%", y: "0%", opacity: isVisible ? 1 : 0 };
    }

    // Direction-aware animation for desktop
    const transforms = {
      top: { x: "0%", y: "-100%" },
      right: { x: "100%", y: "0%" },
      bottom: { x: "0%", y: "100%" },
      left: { x: "-100%", y: "0%" },
    };

    return isVisible ? { x: "0%", y: "0%" } : transforms[direction];
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/annmol099", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anmol099", label: "LinkedIn" },
    { icon: Mail, href: "mailto:mishraanmol2004@gmail.com", label: "Email" },
  ];

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl cursor-pointer group ${className} touch-manipulation`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {children}
      
      {/* Mobile touch indicator - Only visible on mobile devices */}
      <div className="absolute top-2 right-2 lg:hidden">
        <motion.div
          animate={{ 
            scale: isTouched ? 0 : [1, 1.2, 1],
            opacity: isTouched ? 0 : [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-3 h-3 bg-white/80 rounded-full"
        />
      </div>
      
      {/* Direction-aware overlay - Hidden by default, shows on hover/touch */}
      <motion.div
        initial={{ x: "0%", y: "-100%", opacity: 1 }}
        animate={getOverlayTransform()}
        transition={{ 
          duration: 0.3, 
          ease: "easeOut",
          type: "tween"
        }}
        className={`absolute inset-0 bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-orange-500/90 backdrop-blur-sm flex flex-col items-center justify-center ${overlayClassName}`}
      >
        {/* Profile info - Visible on hover or touch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: (isHovered || isTouched) ? 1 : 0, 
            scale: (isHovered || isTouched) ? 1 : 0.8 
          }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="text-center text-white p-6"
        >
          <h3 className="text-xl font-bold mb-2">Anmol</h3>
          <p className="text-sm opacity-90 mb-4">Frontend Developer & Data Analytics Enthusiast</p>
          
          {/* Social Links - Visible on hover or touch */}
          <div className="flex space-x-3 justify-center">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: (isHovered || isTouched) ? 0 : 20, 
                  opacity: (isHovered || isTouched) ? 1 : 0 
                }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 active:bg-white/40 transition-colors duration-200 group/social"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4 group-hover/social:scale-110 transition-transform duration-200" />
              </motion.a>
            ))}
          </div>

          {/* View Portfolio Button - Visible on hover or touch */}
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: (isHovered || isTouched) ? 0 : 20, 
              opacity: (isHovered || isTouched) ? 1 : 0 
            }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 active:bg-white/40 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-2 group/button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Portfolio</span>
            <ExternalLink className="w-3 h-3 group-hover/button:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Glow effect - Visible on hover or touch */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: (isHovered || isTouched) ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-xl opacity-30 -z-10"
      />
    </div>
  );
}