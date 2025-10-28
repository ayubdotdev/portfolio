"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { CardSpotlight } from "./ui/card-spotlight";
import { ShineBorder } from "@/src/components/magicui/shine-border";

interface Technology {
  name: string;
  icon: string;
  href?: string;
}

interface ExperienceData {
  role: string;
  company: string;
  isBlur?: boolean;
  isCurrent?: boolean;
  website?: string;
  linkedin?: string;
  github?: string;
  x?: string;
  companyLogo?: string;
  duration: string;
  location: string;
  technologies: Technology[];
}

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 } as const,
    },
  };

  const experienceData: ExperienceData[] = [
    {
      role: "Frontend Role",
      company: "CNCM Platform",
      isBlur: true,
      isCurrent: true,
      duration: "September 2025 - Present",
      location: "United States (Remote)",
      technologies: [
        {
          name: "Tailwind CSS",
          icon: "logos:tailwindcss-icon",
          href: "https://tailwindcss.com/",
        },
        {
          name: "TypeScript",
          icon: "logos:typescript-icon",
          href: "https://www.typescriptlang.org/",
        },
        {
          name: "React",
          icon: "logos:react",
          href: "https://react.dev/",
        },
        {
          name: "Figma",
          icon: "logos:figma",
          href: "https://www.figma.com/",
        },
        {
          name: "Shadcn UI",
          icon: "simple-icons:shadcnui",
          href: "https://ui.shadcn.com/",
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 text-center"
      >
        <div className="relative inline-block">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured{" "}
            <span className="text-cyan-600 dark:text-cyan-300">Experience</span>
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-full"
          />
        </div>
      </motion.div>

      {/* Experience Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12 max-w-4xl mx-auto"
      >
        {experienceData.map((experience, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="relative rounded-2xl overflow-hidden group">
              <CardSpotlight className="relative z-10 bg-white dark:bg-black p-6 sm:p-8 rounded-2xl">
                <div className="relative z-20">
                  {/* Role / Company / Duration */}
                  <div className="flex justify-between items-start gap-2 mb-6 flex-wrap">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {experience.role}
                      </h3>

                      <p
                        className={cn(
                          "text-md font-semibold text-cyan-600 dark:text-white",
                          experience.isBlur
                            ? "blur-[5px] select-none pointer-events-none"
                            : ""
                        )}
                      >
                        {experience.company}
                      </p>
                    </div>

                    <div className="text-sm text-black dark:text-white flex-shrink-0">
                      {experience.duration}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-md font-semibold text-cyan-600 dark:text-cyan-300 mb-3">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <a
                          key={tech.name}
                          href={tech.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "flex items-center gap-1 bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-700",
                            "px-3 py-1 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300",
                            "transition-all duration-200 ease-in-out"
                          )}
                        >
                          <Icon icon={tech.icon} className="h-4 w-4" />
                          {tech.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="text-gray-700 dark:text-foreground/80 mt-6 space-y-3">
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400 text-lg leading-6">
                        •
                      </span>
                      <span className="dark:text-white text-black">
                        Architected and developed the complete frontend
                        infrastructure for the platform — a comprehensive
                        solution for creating and managing promotional
                        campaigns.
                      </span>
                    </p>

                    <p className="flex items-start gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400 text-lg leading-6">
                        •
                      </span>
                      <span className="dark:text-white text-black">
                        Led a complete codebase refactor improving
                        maintainability, scalability, and developer velocity
                        across the platform.
                      </span>
                    </p>

                    <p className="flex items-start gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400 text-lg leading-6">
                        •
                      </span>
                      <span className="dark:text-white text-black">
                        Integrated and optimized backend API connections,
                        implementing efficient data fetching and robust error
                        handling strategies.
                      </span>
                    </p>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
