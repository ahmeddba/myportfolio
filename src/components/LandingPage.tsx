"use client";

import { motion } from "framer-motion";
import TypingAnimation from "@/components/TypingAnimation";
import SectionBox from "@/components/SectionBox";

// SVG icons for each section
const UserIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const BoltIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const RocketIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const MailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const sections = [
  {
    title: "About",
    description:
      "Learn about my journey, experience, and the philosophy behind how I build software.",
    icon: <UserIcon />,
    href: "/about",
  },
  {
    title: "Work",
    description:
      "Selected projects that ship and scale: HealthTech, SaaS, AI Automation, and more.",
    icon: <BriefcaseIcon />,
    href: "/work",
  },
  {
    title: "Capabilities",
    description:
      "Full-stack skills across Frontend, Backend, AI, Infrastructure, and Leadership.",
    icon: <BoltIcon />,
    href: "/capabilities",
  },
  {
    title: "BlazeShift",
    description:
      "My company. Building AI workflows and internal tools that accelerate businesses.",
    icon: <RocketIcon />,
    href: "/blazeshift",
  },
  {
    title: "Contact",
    description:
      "Let's connect. Find me on GitHub, LinkedIn, or reach out via email.",
    icon: <MailIcon />,
    href: "/contact",
  },
];

export default function LandingPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20">
        {/* Hero area */}
        <div className="text-center mb-16 md:mb-20">
          {/* Animated label */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-accent text-sm tracking-widest uppercase block mb-6 font-medium"
          >
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mr-2"
            >
              ●
            </motion.span>
            Software Engineer
          </motion.span>

          {/* Typing animation for name */}
          <TypingAnimation
            text="Ahmed Ben Abid"
            speed={80}
            className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
          />

          {/* Animated gradient subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-xl md:text-2xl text-muted mb-2"
          >
            <motion.span
              className="bg-gradient-to-r from-accent via-blue-400 to-accent bg-clip-text text-transparent font-medium"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              JS/TS, Full-Stack, Automation
            </motion.span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-muted mb-4"
          >
            CEO & Founder,{" "}
            <motion.a
              href="https://blazeshift.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              BlazeShift
            </motion.a>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="text-xl md:text-2xl text-foreground font-medium max-w-2xl mx-auto"
          >
            I build systems, tools, and automations that scale teams.
          </motion.p>
        </div>

        {/* 3D Section Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <SectionBox
              key={section.title}
              title={section.title}
              description={section.description}
              icon={section.icon}
              href={section.href}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 border border-accent/20 rounded-full z-0"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-accent/10 rounded-lg rotate-45 z-0"
        animate={{ rotate: [45, 135, 45], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-4 h-4 bg-accent/20 rounded-full z-0"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}
