"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";

interface SectionBoxProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  index: number;
}

// Deterministic star positions
const STARS = [
  { x: 12, y: 18, size: 2, delay: 0 },
  { x: 72, y: 14, size: 1.5, delay: 0.3 },
  { x: 88, y: 42, size: 2.5, delay: 0.7 },
  { x: 20, y: 65, size: 1.8, delay: 1.1 },
  { x: 55, y: 80, size: 2, delay: 0.5 },
  { x: 38, y: 30, size: 1.2, delay: 1.4 },
  { x: 80, y: 72, size: 2.2, delay: 0.9 },
  { x: 48, y: 50, size: 1.6, delay: 1.7 },
  { x: 65, y: 35, size: 1.3, delay: 0.2 },
  { x: 28, y: 85, size: 2, delay: 1.0 },
  { x: 90, y: 20, size: 1.8, delay: 0.6 },
  { x: 8, y: 45, size: 1.5, delay: 1.3 },
];

function Stars({ fast }: { fast: boolean }) {
  return (
    <div className="suitcase-stars">
      {STARS.map((star, i) => (
        <span
          key={i}
          className={`suitcase-star ${fast ? "suitcase-star--fast" : ""}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function SectionBox({
  title,
  description,
  icon,
  href,
  index,
}: SectionBoxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Each bag drifts in its own pattern
  const driftVariants = [
    { y: [0, -6, 0, 4, 0], x: [0, 3, 0, -3, 0], rotate: [0, 0.5, 0, -0.5, 0] },
    { y: [0, 5, 0, -5, 0], x: [0, -4, 0, 2, 0], rotate: [0, -0.5, 0, 0.8, 0] },
    { y: [0, -4, 0, 6, 0], x: [0, 2, 0, -4, 0], rotate: [0, 0.3, 0, -0.6, 0] },
    { y: [0, 3, 0, -7, 0], x: [0, -2, 0, 5, 0], rotate: [0, -0.4, 0, 0.3, 0] },
    { y: [0, -5, 0, 3, 0], x: [0, 4, 0, -2, 0], rotate: [0, 0.6, 0, -0.4, 0] },
  ];
  const drift = driftVariants[index % driftVariants.length];

  return (
    <motion.div
      initial={{ opacity: 1, y: 0, scale: 1 }}
      animate={
        isHovered
          ? { opacity: 1, y: 0, scale: 1, x: 0, rotate: 0 }
          : {
              opacity: 1,
              y: drift.y,
              x: drift.x,
              rotate: drift.rotate,
              scale: 1,
            }
      }
      transition={
        isHovered
          ? { duration: 0.4, type: "spring", stiffness: 300, damping: 25 }
          : {
              duration: 6 + index * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }
      }
      style={{ perspective: "1000px" }}
    >
      <Link href={href} className="suitcase-link">
        <motion.div
          ref={containerRef}
          className={`suitcase ${isHovered ? "suitcase--hover" : ""}`}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          whileTap={{ scale: 0.97 }}
        >
          {/* Stars scattered on the suitcase */}
          <Stars fast={isHovered} />

          {/* Handle */}
          <div className="suitcase-handle">
            <div className="suitcase-handle-bar" />
          </div>

          {/* Card content */}
          <div className="suitcase-face">
            <span className="suitcase-icon">{icon}</span>
            <h3 className="suitcase-title">{title}</h3>
            <p className="suitcase-description">{description}</p>
          </div>

        </motion.div>
      </Link>
    </motion.div>
  );
}
