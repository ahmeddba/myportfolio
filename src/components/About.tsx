"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Photo Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              animate={{
                rotateY: mousePosition.x,
                rotateX: -mousePosition.y,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative"
            >
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-accent/20 group-hover:border-accent/40 transition-colors duration-500" />
              <div className="absolute -inset-8 rounded-full border border-accent/10 group-hover:border-accent/20 transition-colors duration-500" />
              
              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 border border-accent/30 rounded-lg rotate-12"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/10 rounded-full"
              />
              
              {/* Main photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-accent/10 group-hover:shadow-accent/20 transition-shadow duration-500">
                <Image
                  src="/myphoto.jpg"
                  alt="Ahmed Ben Abid"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-accent/5 blur-3xl -z-10 group-hover:bg-accent/10 transition-colors duration-500" />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="flex-1 max-w-2xl" ref={ref}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-accent text-sm tracking-widest uppercase block mb-4"
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            >
              Engineering systems that solve real problems.
            </motion.h2>

            <div className="space-y-6 text-lg text-muted">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I don&apos;t just write code. I design systems that solve operational bottlenecks.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                My work sits at the intersection of engineering, product, and operations. 
                I specialize in JavaScript and TypeScript ecosystems, backend APIs, and 
                automation workflows that remove friction from how teams work.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Whether it&apos;s an AI-powered inbox triage system, a healthcare platform, 
                or internal enterprise tools, I focus on building things that run businesses.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-3xl font-bold text-foreground">2+</p>
                  <p className="text-sm text-muted">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">20+</p>
                  <p className="text-sm text-muted">Projects Shipped</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">AI</p>
                  <p className="text-sm text-muted">Focused Products</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">1</p>
                  <p className="text-sm text-muted">Company Founded</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
