"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Capability {
  category: string;
  skills: string[];
  icon: string;
}

const capabilities: Capability[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: "🎨",
  },
  {
    category: "Backend",
    skills: ["Node.js", "AdonisJS", "Express", "PostgreSQL", "REST APIs"],
    icon: "⚙️",
  },
  {
    category: "Automation & AI",
    skills: ["n8n", "OpenAI", "LangChain", "Slack/Gmail APIs", "Webhooks"],
    icon: "🤖",
  },
  {
    category: "Infrastructure & Delivery",
    skills: ["Vercel", "Docker", "CI/CD", "Supabase", "Firebase"],
    icon: "🚀",
  },
  {
    category: "Leadership",
    skills: ["Technical Architecture", "Product Strategy", "Team Building", "Client Relations"],
    icon: "👔",
  },
];

function CapabilityCard({ capability, index }: { capability: Capability; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -20, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.3 }}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.05, z: 50 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="bg-background/60 backdrop-blur-md border border-border rounded-2xl p-6 h-full relative overflow-hidden group"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blue-500/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          <motion.span
            className="text-4xl block mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
          >
            {capability.icon}
          </motion.span>
          
          <h3 
            className="text-xl font-bold mb-4 group-hover:text-accent transition-colors"
            style={{ transform: "translateZ(20px)" }}
          >
            {capability.category}
          </h3>
          
          <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(15px)" }}>
            {capability.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.3 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                className="text-xs px-3 py-1 rounded-full bg-card/80 text-muted border border-border/50 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent"
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{ borderRadius: "0 1rem 0 100%" }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Capabilities() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="relative">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-accent text-sm tracking-widest uppercase block mb-4"
          >
            Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={isHeaderInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Full-stack, end-to-end.
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-accent to-blue-400 mt-6 rounded-full"
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={capability.category} capability={capability} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
