
    //EXAMPLE USAGE
// "use client";
// import React from "react";
// import { CyberpunkHologramComponent  } from "./component/bg";

// export default function HomePage() {
//   return (
//     <div className="h-screen relative overflow-hidden">
//       {/* Background Animation */}
//       <CyberpunkHologramComponent   />

//       {/* Foreground Content */}
//       <div className="absolute inset-0 z-10 flex items-center justify-center">
        
//       </div>
//     </div>
//   );
// }



"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface HoloParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: number;
  delay: number;
  duration: number;
  drift: number;
}

const CyberpunkHologramComponent = () => {
  const [particles, setParticles] = useState<HoloParticle[]>([]);

  useEffect(() => {
    setParticles(
      [...Array(60)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 3,
        hue: Math.floor(Math.random() * 360),
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 4,
        drift: 5 + Math.random() * 15,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-gradient-to-b from-[#05010a] via-[#0b0020] to-[#02010f]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `hsl(${p.hue}, 100%, 70%)`,
            boxShadow: `0 0 6px hsl(${p.hue}, 100%, 70%), 0 0 12px hsl(${p.hue}, 100%, 50%)`,
          }}
          animate={{
            x: [0, p.drift, 0],
            opacity: [0, 1, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, transparent 40%, rgba(0,255,255,0.08) 50%, transparent 60%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default CyberpunkHologramComponent;


