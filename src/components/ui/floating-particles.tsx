"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export function FloatingParticles({ count = 50, className = "" }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    updateDimensions();
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  useEffect(() => {
    const colors = [
      "rgba(168, 85, 247, 0.4)", // purple-500
      "rgba(236, 72, 153, 0.4)", // pink-500
      "rgba(251, 146, 60, 0.4)",  // orange-400
      "rgba(139, 92, 246, 0.3)", // violet-500
      "rgba(244, 114, 182, 0.3)", // pink-400
    ];

    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 20 + 10,
    }));

    setParticles(newParticles);
  }, [count, dimensions]);

  if (dimensions.width === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            filter: "blur(1px)",
          }}
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            x: [
              particle.x,
              particle.x + (Math.random() - 0.5) * 200,
              particle.x + (Math.random() - 0.5) * 200,
              particle.x,
            ],
            y: [
              particle.y,
              particle.y + (Math.random() - 0.5) * 200,
              particle.y + (Math.random() - 0.5) * 200,
              particle.y,
            ],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

interface BackgroundMeshProps {
  className?: string;
}

export function BackgroundMesh({ className = "" }: BackgroundMeshProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)
          `,
        }}
        animate={{
          background: [
            `
              radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)
            `,
            `
              radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)
            `,
            `
              radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)
            `,
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}