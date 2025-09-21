"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { AdvancedLoader } from "@/components/ui/advanced-loader";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

interface AppWrapperProps {
  children: React.ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Also handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Fallback timeout

    return () => clearTimeout(timer);
  }, []);

  return (
    <MagneticCursor>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <AdvancedLoader key="loader" onComplete={handleLoadingComplete} />
        ) : (
          <div key="content">
            {children}
          </div>
        )}
      </AnimatePresence>
      
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        /* Show default cursor on mobile */
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </MagneticCursor>
  );
}