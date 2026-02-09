"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "AI Workflows",
    description: "Intelligent automation that learns and adapts to your business processes.",
    icon: "🤖",
  },
  {
    title: "Internal Tools",
    description: "Custom dashboards and applications that streamline operations.",
    icon: "🛠️",
  },
  {
    title: "System Integration",
    description: "Connect your tools and data sources into unified workflows.",
    icon: "🔗",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.08, z: 30 }}
        className="bg-background/60 backdrop-blur-md border border-border rounded-2xl p-8 h-full relative overflow-hidden group"
      >
        {/* Animated glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-blue-600/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Orbiting particle */}
        <motion.div
          className="absolute w-2 h-2 bg-accent rounded-full"
          animate={{
            x: [0, 100, 100, 0, 0],
            y: [0, 0, 100, 100, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ top: "10%", left: "10%", opacity: 0.3 }}
        />
        
        <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
          <motion.span
            className="text-5xl block mb-6"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
          >
            {service.icon}
          </motion.span>
          
          <h3 
            className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors"
            style={{ transform: "translateZ(30px)" }}
          >
            {service.title}
          </h3>
          
          <p 
            className="text-muted"
            style={{ transform: "translateZ(20px)" }}
          >
            {service.description}
          </p>
        </div>
        
        {/* Bottom accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-blue-400 to-accent"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function BlazeShift() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="blazeshift" className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-6"
          >
            <motion.span
              className="text-6xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-accent via-blue-400 to-accent bg-clip-text text-transparent">
              BlazeShift
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted max-w-2xl mx-auto mb-4"
          >
            My company. Where I build AI workflows and internal tools for businesses.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 w-32 bg-gradient-to-r from-accent to-blue-400 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="https://blazeshift.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-blue-500 text-background rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-accent/25 transition-all"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Visit BlazeShift</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
