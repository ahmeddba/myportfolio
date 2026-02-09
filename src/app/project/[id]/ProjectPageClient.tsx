"use client";

import { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Project, ProjectSection } from "@/data/projects";

const ProjectScene = lazy(() => import("@/components/ProjectScene"));

interface Props {
  project: Project;
  navigation: { prev: Project | null; next: Project | null };
}

export default function ProjectPageClient({ project, navigation }: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="min-h-screen pt-20">
      {/* Sticky Navigation */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            href="/#work"
            className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>
          <div className="flex items-center gap-4">
            {navigation.prev && (
              <Link
                href={`/project/${navigation.prev.id}`}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Prev
              </Link>
            )}
            {navigation.next && (
              <Link
                href={`/project/${navigation.next.id}`}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section with 3D Background */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-16">
        {/* 3D Scene */}
        {isClient && (
          <Suspense fallback={null}>
            <ProjectScene />
          </Suspense>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background z-10" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-6"
            >
              {project.tag}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-accent mb-6"
            >
              {project.slogan}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted max-w-3xl mb-8 leading-relaxed"
            >
              {project.overview}
            </motion.p>

            {/* Status Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {/* Collaboration Card */}
              {project.collaboration && (
                <div className="px-4 py-3 bg-card border border-border rounded-lg">
                  <span className="text-xs text-muted uppercase tracking-wider block mb-1">
                    Collaboration
                  </span>
                  <p className="text-sm font-medium">
                    {project.collaboration.isCollaborative
                      ? project.collaboration.partners[0]?.companyName || "Partner"
                      : "Solo Project"}
                  </p>
                </div>
              )}

              {/* Production Card */}
              {project.production && (
                <a
                  href={project.production.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-accent text-background rounded-lg hover:bg-accent-hover transition-colors flex items-center gap-2"
                >
                  <span className="text-sm font-medium">{project.production.label}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-card border border-border rounded-full text-muted"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {project.sections.map((section, index) => (
            <FeatureSection key={section.title} section={section} index={index} />
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      {project.collaboration?.isCollaborative && project.collaboration.partners.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="text-accent text-sm tracking-widest uppercase block mb-4">
                Built in Collaboration With
              </span>
              {project.collaboration.partners.map((partner) => (
                <div key={partner.companyName} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{partner.companyName}</h3>
                  <p className="text-muted text-sm mb-1">CEO: {partner.ceoName}</p>
                  <p className="text-muted text-sm mb-3">{partner.location}</p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover text-sm inline-flex items-center gap-1"
                  >
                    Visit Website
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in working together?</h2>
            <p className="text-muted mb-8">
              Let&apos;s discuss how I can help bring your project to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent-hover transition-colors font-medium"
              >
                Get in Touch
              </Link>
              <Link
                href="/#work"
                className="px-6 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors font-medium"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

interface FeatureSectionProps {
  section: ProjectSection;
  index: number;
}

function FeatureSection({ section, index }: FeatureSectionProps) {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center py-16 border-b border-border last:border-0`}
    >
      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 w-full"
      >
        <div className="relative aspect-video bg-card border border-border rounded-2xl overflow-hidden group">
          <Image
            src={section.image}
            alt={section.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex-1"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h3>
        <p className="text-muted mb-6 leading-relaxed">{section.description}</p>

        {/* Power Features */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="text-sm text-accent uppercase tracking-wider mb-4">Power Features</h4>
          <ul className="space-y-3">
            {section.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
