"use client";

import { ExternalLink, Github } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

type TagItem = string | { src: string; label: string };

const Projects: React.FC = () => {
  const projects = [
    {
      title: "VeilMotion",
      image: "/vmf.png",
      category: "Full Stack",
      // Updated description per your request
      description:
        "VeilMotion is an animated background library designed to deliver smooth, visually rich motion effects.It provides a curated collection of production-ready animated backgrounds for web interfaces",
      tags: [
        { src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", label: "Tailwind CSS" },
        { src: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png", label: "Next.js" },
        { src: "https://framerusercontent.com/images/FwGRzdHhlF5dVX3w3adwXRyFz7U.svg", label: "Framer" },
        { src: "https://styles.redditmedia.com/t5_2v6gg/styles/communityIcon_4w7vh6c21f871.png", label: "Typescript" },
      ] as TagItem[],
      liveUrl: "https://veilmotion.ayubb.me/",
      githubUrl: "https://github.com/ayubdotdev/Veilmotion",
    },
    {
      title: "Edu Nova",
      image: "/ef.png",
      category: "Full Stack",
      description: "Edu Nova is an AI-powered voice learning platform.It integrates intelligent voice agents and personalized learning flows.Designed for modular expansion, it supports new languages and voice models",
      tags: [
        { src: "https://files.buildwithfern.com/https://vapi.docs.buildwithfern.com/2025-06-06T22:21:40.746Z/static/images/logo/logo-dark.svg", label: "Vapi" },
        { src: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png", label: "Next.js" },
        { src: "/supabase.svg", label: "Supabase" },
        { src: "https://cdn.brandfetch.io/idGrtLvNcI/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1744030757701", label: "Clerk" },
      ] as TagItem[],
      liveUrl: "https://edu-nova.ayubb.me/",
      githubUrl: "https://github.com/ayubdotdev/ai-companion",
    },
    {
      title: "NexLy",
      image: "/nf.png",
      category: "Full Stack",
      // Updated short description
      description: "NexLy is a full-featured social platform where users can post, follow, like, and interact seamlessly.It offers a modern content feed experience.",
      tags: [
        { src: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png", label: "Next.js" },
        { src: "https://neon.com/brand/neon-logomark-light-color.svg", label: "Neon DB" },
        { src: "https://cdn.brandfetch.io/idGrtLvNcI/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1744030757701", label: "Clerk" },
        { src: "https://cdn.brandfetch.io/idBBE3_R9e/theme/light/idJ9Tiato-.svg?c=1dxbfHSJFAPEGdCLU4o5B", label: "Prisma ORM" },
        { src: "https://imgs.search.brave.com/QQmKUWX4OCsAb8IwUK_WphzjHojLDMiq9B7ArgZPGHI/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2MyMmE3Y2E0/MTI3ZGRkMmI5OWZk/ZWUxNTZiYTMyZWJl/N2Y3MWYzNzcyZGFj/ZTVhYWI5OTM2NTEz/ZjRjN2FhOC91cGxv/YWR0aGluZy5jb20v", label: "UploadThing" },
      ] as TagItem[],
      liveUrl: "https://nex-ly.ayubb.me/",
      githubUrl: "https://github.com/ayubdotdev/NexLy",
    },
    {
      title: "Verisume",
      image: "/rf.png",
      category: "Full Stack",
      // Updated short description
      description: "Verisume is an intelligent resume assessment platform that analyzes user resumes and generates a detailed score.It evaluates structure, clarity, skills, and overall presentation to provide actionable improvement insights",
      tags: [
        { src: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png", label: "Next.js" },
        { src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", label: "Tailwind CSS" },
        { src: "https://www.svgrepo.com/show/354262/react-router.svg", label: "React Router" },
        // Keeping your changed label ("Puter JS") as-is
        { src: "https://imgs.search.brave.com/q406v17GeYXg3jrDKeqfTUYzCDrqkYsRqbdzCU0__FU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTgxYmZhZDA5/ZWI4ODE3MDdlZWRj/MTZkZWEwYzk4MTM4/NjZjYzcwYmQ3MmEw/OTNmYTg3MDEyMzc0/YTcxMzkzOC9wdXRl/ci5jb20v", label: "Puter JS" },
        { src: "https://styles.redditmedia.com/t5_2v6gg/styles/communityIcon_4w7vh6c21f871.png", label: "Typescript" },
      ] as TagItem[],
      liveUrl: "https://verisume.ayubb.me/",
      githubUrl: "https://github.com/ayubdotdev/Verisume",
    },
    {
      title: "AI Magic",
      image: "/amf.png",
      category: "Mini Projects",
      // Short description (as requested previously)
      description: "AI Magic is a simple image generating software through simple prompts.",
      tags: [
        { src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", label: "Tailwind CSS" },
        { src: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png", label: "Next.js" },
        { src: "https://imgs.search.brave.com/CkOet2vlmw9U1LUr-ZEtqwvYgIdIAVZGzsRa1saYHR0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGIyM2ZiNmM0/Mjg1NjAyNDk3YjY3/MTM4OTQ5YjA2MzQy/M2I0YWU4OTk3ZGJk/MThhYTYzMWZhOWQx/MjMwMjdhMi9zdGFi/aWxpdHkuYWkv", label: "AI / Model" },
      ] as TagItem[],
      liveUrl: "https://ai-magic.vercel.app/",
      githubUrl: "https://github.com/ayubdotdev/ai-magic",
    },
    {
      title: "Developers Tool",
      image: "/dff.png",
      category: "Mini Projects",
      // Updated short description per your request
      description:
        "Developers Tool is an application where users can easily find all types of tech stack installation commands in one page — no need to go here and there.",
      tags: [
        { src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", label: "Tailwind CSS" },
        { src: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png", label: "Next.js" },
        { src: "https://styles.redditmedia.com/t5_2v6gg/styles/communityIcon_4w7vh6c21f871.png", label: "Typescript" },
      ] as TagItem[],
      liveUrl: "https://developers-tool.vercel.app/",
      githubUrl: "https://github.com/ayubdotdev/make-fast",
    },
    {
      title: "Zentro",
      image: "/zf.png",
      category: "Landing Pages",
      // Landing pages: NO description (as requested)
      tags: [{ src: "notnull", label: "Template" }],
      liveUrl: "https://zentro-eta.vercel.app/",
      githubUrl: "https://github.com/ayubdotdev",
    },
    {
      title: "Taskora",
      image: "/tf.png",
      category: "Landing Pages",
      // Landing pages: NO description
      tags: [{ src: "notnull", label: "Template" }],
      liveUrl: "https://taskora-psi.vercel.app/",
      githubUrl: "https://github.com/ayubdotdev",
    },
    {
      title: "Luma Flow",
      image: "/lf.png",
      category: "Landing Pages",
      // Landing pages: NO description
      tags: [{ src: "notnull", label: "Template" }],
      liveUrl: "https://luma-flow.vercel.app/",
      githubUrl: "https://github.com/ayubdotdev",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("Full Stack");
  const categories = ["Full Stack", "Mini Projects", "Landing Pages"];
  const filteredProjects = projects.filter((p) => p.category === selectedCategory);

  const deriveTagLabel = (tag: TagItem) => {
    if (!tag) return "Unknown";
    if (typeof tag === "object") return tag.label || "Unknown";
    const t = tag.toLowerCase();
    if (t.includes("tailwind")) return "Tailwind CSS";
    if (t.includes("next")) return "Next.js";
    if (t.includes("framer")) return "Framer Motion";
    if (t.includes("supabase")) return "Supabase";
    if (t.includes("neon")) return "Neon";
    if (t.includes("vapi")) return "Vapi";
    if (t.includes("react")) return "React";
    try {
      const parts = tag.split("/");
      const last = parts[parts.length - 1] || parts[parts.length - 2] || tag;
      return decodeURIComponent(last.split(".")[0]).replace(/[-_]/g, " ");
    } catch {
      return "Tech";
    }
  };

  const getTagSrc = (tag: TagItem) => (typeof tag === "string" ? tag : tag.src || "");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
    exit: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      filter: "blur(10px)",
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, delay: 0.1, ease: "easeOut" as const } },
  };

  const categoryButtonVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  return (
    <section id="Projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block" variants={headingVariants}>
            Proof of <span className="text-cyan-300 relative">Work</span>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="absolute mt-1 w-full left-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-full" />
          </motion.h2>
          <motion.p className="text-lg mt-1 text-muted-foreground max-w-2xl mx-auto" variants={descriptionVariants}>
            A collection of projects that showcase my skills and passion for development
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div className="flex flex-col items-center mb-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 mb-6" variants={categoryButtonVariants} custom={0}>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${selectedCategory === category ? " dark:text-white bg-cyan-500 text-black border-transparent shadow-lg shadow-indigo-500/25" : "bg-accent/50  backdrop-blur-sm border-border/50 hover:border-cyan-400/50 hover:bg-accent/80"}`} variants={categoryButtonVariants} whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } }} whileTap={{ scale: 0.95 }} custom={index + 1}>
                  <motion.span animate={{ color: selectedCategory === category ? "#ffffff" : undefined }} transition={{ duration: 0.2 }}>
                    {category}
                  </motion.span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" animate="visible" exit="exit" transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}>
            {filteredProjects.map((project, index) => (
              <motion.div key={`${project.title}-${selectedCategory}`} layout layoutId={project.title} className="group relative bg-card/60 backdrop-blur-sm border-2 border-gray-300 dark:border-border/50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 min-w-[300px]" variants={cardVariants} whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }} whileTap={{ scale: 0.99 }}>
                {/* Project Image */}
                <div className="relative top-0 overflow-hidden bg-gradient-to-b from-transparent to-background/20 aspect-w-4 aspect-h-3 rounded-t-2xl">
                  <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} />
                </div>

                <div className="p-6 bg-background/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <motion.h3 className="text-cyan-400 text-xl font-semibold transition-colors" transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                      {project.title}
                    </motion.h3>
                  </div>

                  {/* Show description only for non-landing pages, increase size and clamp to 3 lines */}
                  {project.category !== "Landing Pages" && project.description && (
                    <p className="text-base mb-4 line-clamp-3 text-muted-foreground">
                      {project.description}
                    </p>
                  )}

                  {project.category !== "Landing Pages" && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      <TooltipProvider delayDuration={0}>
                        {project.tags.map((tag: TagItem, tagIndex: number) => {
                          const label = deriveTagLabel(tag);
                          const src = getTagSrc(tag);
                          const isPlaceholder = !src || src === "notnull";
                          return (
                            <Tooltip key={String(src) + tagIndex}>
                              <TooltipTrigger asChild>
                                <motion.div className="inline-flex items-center justify-center w-10 h-10 border border-grey-50 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ delay: 0.3 + tagIndex * 0.05, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                                  {isPlaceholder ? <div className="text-xs">{label}</div> : <img src={src} alt={label} className={cn("w-6 h-6 object-contain", src.includes("Next.js") ? "dark:brightness-0 dark:invert brightness-0" : src.includes("vapi") ? "dark:brightness-0 dark:invert brightness-0" : "")} />}
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent sideOffset={6}>
                                <span className="font-medium text-sm block">{label}</span>
                              </TooltipContent>
                            </Tooltip>
                          );
                        })}
                      </TooltipProvider>
                    </div>
                  )}

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <motion.a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1 bg-cyan-500 text-white text-center py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-1">
                      <span className="mr-2">Preview</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    {project.category !== "Landing Pages" && (
                      <motion.a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1 border border-border text-center py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-1" whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } }} whileTap={{ scale: 0.98 }}>
                        <span className="mr-2">Source</span>
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
