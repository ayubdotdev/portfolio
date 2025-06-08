// components/ParticlesBackground.tsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

const ParticlesBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hasMounted, setHasMounted] = useState(false);

  // Set initial dimensions and indicate that component has mounted
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setHasMounted(true);
    }
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    // Create initial particles
    const initialParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));

    setParticles(initialParticles);

    // Resize handler
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Particle animation
    const animateInterval = setInterval(() => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          if (newX < 0 || newX > dimensions.width) {
            newX = Math.random() * dimensions.width;
          }
          if (newY < 0 || newY > dimensions.height) {
            newY = Math.random() * dimensions.height;
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    }, 50);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(animateInterval);
    };
  }, [hasMounted, dimensions.width, dimensions.height]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          animate={{
            x: particle.x,
            y: particle.y,
            transition: { duration: 5, ease: "linear" },
          }}
          className="absolute rounded-full bg-primary"
          style={{
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
