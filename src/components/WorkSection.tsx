"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02, z: 50 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <Link
          href={`/project/${project.id}`}
          className="block border border-border rounded-xl overflow-hidden bg-background/80 backdrop-blur-sm hover:bg-card-hover hover:border-accent/50 transition-all group relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          />
          
          <div className="p-6 md:p-8 relative" style={{ transform: "translateZ(40px)" }}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Floating tag */}
                <motion.span 
                  className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full mb-3 border border-accent/30"
                  style={{ transform: "translateZ(20px)" }}
                  whileHover={{ scale: 1.1 }}
                >
                  {project.tag}
                </motion.span>
                
                <h3 
                  className="text-xl md:text-2xl font-bold mb-2 group-hover:text-accent transition-colors"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {project.title}
                </h3>
                
                <p 
                  className="text-accent text-sm md:text-base mb-3"
                  style={{ transform: "translateZ(25px)" }}
                >
                  {project.slogan}
                </p>
                
                <p 
                  className="text-muted text-sm mb-4 line-clamp-2"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {project.overview}
                </p>
                
                <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(15px)" }}>
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.3 + i * 0.05 }}
                      className="text-xs px-2 py-1 rounded-full bg-card/80 text-muted border border-border/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-card/80 text-muted border border-border/50">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Animated arrow */}
              <motion.div
                className="flex-shrink-0 mt-1 p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors"
                style={{ transform: "translateZ(50px)" }}
                whileHover={{ scale: 1.2, rotate: -45 }}
              >
                <motion.svg
                  className="w-5 h-5 text-muted group-hover:text-accent transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <motion.div 
            className="h-1 bg-gradient-to-r from-accent via-blue-400 to-accent"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "left" }}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function WorkSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -30, rotateY: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-accent text-sm tracking-widest uppercase block mb-4"
          >
            Selected Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={isHeaderInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Projects that ship and scale.
          </motion.h2>
          
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isHeaderInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-accent to-blue-400 mt-6 rounded-full"
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
