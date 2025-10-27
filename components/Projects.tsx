import { ExternalLink, Github, Tag } from 'lucide-react';
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {

    const projects = [
        {
            title: 'VeilMotion',
            image: '/vmf.png',
            category: 'Full Stack',
            tags: ['https://cdn.worldvectorlogo.com/logos/tailwindcss.svg', 'https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png','https://framerusercontent.com/images/FwGRzdHhlF5dVX3w3adwXRyFz7U.svg',"https://styles.redditmedia.com/t5_2v6gg/styles/communityIcon_4w7vh6c21f871.png"],
            liveUrl: 'https://veilmotion.ayubb.me/',
            githubUrl: 'https://github.com/ayubdotdev/Veilmotion',
        },
        {
            title: 'Edu Nova',
            image: '/ef.png',
            category: 'Full Stack',
            tags: [
                'https://files.buildwithfern.com/https://vapi.docs.buildwithfern.com/2025-06-06T22:21:40.746Z/static/images/logo/logo-dark.svg', 'https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png', "https://styles.redditmedia.com/t5_2v6gg/styles/communityIcon_4w7vh6c21f871.png", "/supabase.svg", "https://cdn.brandfetch.io/idGrtLvNcI/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1744030757701"],
            liveUrl: 'https://edu-nova.ayubb.me/',
            githubUrl: 'https://github.com/ayubdotdev/ai-companion',
        },
        {
            title: 'NexLy',
            image: '/nf.png',
            category: 'Full Stack',
            tags: ['https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png', 'https://neon.com/brand/neon-logomark-light-color.svg', "https://cdn.brandfetch.io/idGrtLvNcI/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1744030757701"
                , "https://cdn.brandfetch.io/idBBE3_R9e/theme/light/idJ9Tiato-.svg?c=1dxbfHSJFAPEGdCLU4o5B",
                "https://imgs.search.brave.com/QQmKUWX4OCsAb8IwUK_WphzjHojLDMiq9B7ArgZPGHI/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2MyMmE3Y2E0/MTI3ZGRkMmI5OWZk/ZWUxNTZiYTMyZWJl/N2Y3MWYzNzcyZGFj/ZTVhYWI5OTM2NTEz/ZjRjN2FhOC91cGxv/YWR0aGluZy5jb20v"],
            liveUrl: 'https://nex-ly.ayubb.me/',
            githubUrl: 'https://github.com/ayubdotdev/NexLy',
        },
        {
            title: 'Verisume',
            image: '/rf.png',
            category: 'Full Stack',
            tags: ['https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png','https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',"https://www.svgrepo.com/show/354262/react-router.svg",'https://imgs.search.brave.com/q406v17GeYXg3jrDKeqfTUYzCDrqkYsRqbdzCU0__FU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTgxYmZhZDA5/ZWI4ODE3MDdlZWRj/MTZkZWEwYzk4MTM4/NjZjYzcwYmQ3MmEw/OTNmYTg3MDEyMzc0/YTcxMzkzOC9wdXRl/ci5jb20v',"https://styles.redditmedia.com/t5_2v6gg/styles/communityIcon_4w7vh6c21f871.png",
                
            ],
            liveUrl: 'https://verisume.ayubb.me/',
            githubUrl: 'https://github.com/ayubdotdev/Verisume',
        },
        {
            title: 'AI Magic',
            image: '/amf.png',
            category: 'Mini Projects',
            tags: ['https://cdn.worldvectorlogo.com/logos/tailwindcss.svg', 'https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png', 'https://imgs.search.brave.com/CkOet2vlmw9U1LUr-ZEtqwvYgIdIAVZGzsRa1saYHR0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGIyM2ZiNmM0/Mjg1NjAyNDk3YjY3/MTM4OTQ5YjA2MzQy/M2I0YWU4OTk3ZGJk/MThhYTYzMWZhOWQx/MjMwMjdhMi9zdGFi/aWxpdHkuYWkv'],
            liveUrl: 'https://ai-magic.vercel.app/',
            githubUrl: 'https://github.com/ayubdotdev/ai-magic',
        },
        {
            title: 'Developers Tool',
            image: '/dff.png',
            category: 'Mini Projects',
            tags: ['https://cdn.worldvectorlogo.com/logos/tailwindcss.svg', 'https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png', 'https://styles.redditmedia.com/t5_2v6gg/styles/communityIcon_4w7vh6c21f871.png'],
            liveUrl: 'https://developers-tool.vercel.app/',
            githubUrl: 'https://github.com/ayubdotdev/make-fast',
        },
        {
            title: 'Zentro',
            image: '/zf.png',
            category: "Landing Pages",
            tags: ['notnull'],
            liveUrl: 'https://zentro-eta.vercel.app/',
            githubUrl: 'https://github.com/ayubdotdev',
        },
        {
            title: 'Taskora',
            image: '/tf.png',
            category: "Landing Pages",
            tags: ['notnull'],
            liveUrl: 'https://taskora-psi.vercel.app/',
            githubUrl: 'https://github.com/ayubdotdev',
        },
        {
            title: 'Luma Flow',
            image: '/lf.png',
            category: "Landing Pages",
            tags: ['notnull'],
            liveUrl: 'https://luma-flow.vercel.app/',
            githubUrl: 'https://github.com/ayubdotdev',
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState("Full Stack")
    const categories = ['Full Stack', 'Mini Projects', 'Landing Pages']
    const filteredProjects = projects.filter(project => project.category === selectedCategory)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        },
        exit: {
            opacity: 0,
            y: 60,
            scale: 0.9,
            filter: "blur(10px)",
            transition: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        }
    };

    const headingVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            filter: "blur(8px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    };

    const descriptionVariants = {
        hidden: {
            opacity: 0,
            y: 15,
            filter: "blur(8px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                delay: 0.1,
                ease: "easeOut" as const
            }
        }
    };

    const categoryButtonVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(8px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.4,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section id="Projects" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
                        variants={headingVariants}
                    >
                        Proof of <span className='text-cyan-300 relative'>
                            Work
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute mt-1 w-full  left-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-full"
                        />
                    </motion.h2>
                    <motion.p
                        className="text-lg mt-1 text-muted-foreground max-w-2xl mx-auto"
                        variants={descriptionVariants}
                    >
                        A collection of projects that showcase my skills and passion for development
                    </motion.p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    className="flex flex-col items-center mb-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Categories Container */}
                    <motion.div
                        className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 mb-6"
                        variants={categoryButtonVariants}
                        custom={0}
                    >
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category, index) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${selectedCategory === category
                                        ? ' dark:text-white bg-cyan-500 text-black border-transparent shadow-lg shadow-indigo-500/25'
                                        : 'bg-accent/50  backdrop-blur-sm border-border/50 hover:border-cyan-400/50 hover:bg-accent/80' // <-- THIS LINE IS CHANGED
                                        }`}
                                    variants={categoryButtonVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: {
                                            duration: 0.2,
                                            ease: [0.25, 0.46, 0.45, 0.94]
                                        }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    custom={index + 1}
                                >
                                    <motion.span
                                        animate={{
                                            color: selectedCategory === category ? '#ffffff' : undefined
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {category}
                                    </motion.span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>


                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{
                            staggerChildren: 0.08,
                            delayChildren: 0.05
                        }}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={`${project.title}-${selectedCategory}`}
                                layout
                                layoutId={project.title}
                                className="group relative bg-card/60 backdrop-blur-sm border-2 border-gray-300 dark:border-border/50 rounded-2xl hover:shadow-lg transition-all duration-500 min-w-[300px]"
                                variants={cardVariants}
                                whileHover={{
                                    y: -4,
                                    transition: {
                                        duration: 0.4,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }
                                }}
                                whileTap={{ scale: 0.99 }}
                            >
                                {/* Project Image */}
                                <div className="relative top-0 overflow-hidden bg-gradient-to-b from-transparent to-background/20 aspect-w-4 aspect-h-3 rounded-t-2xl">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: [0.25, 0.46, 0.45, 0.94]
                                        }}
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.25, 0.46, 0.45, 0.94]
                                        }}
                                    />
                                </div>

                                <div className="p-6 bg-background/30 backdrop-blur-sm">
                                    <div className="flex items-center justify-between mb-3">
                                        <motion.h3
                                            className="text-cyan-400 text-xl font-semibold transition-colors"
                                            transition={{
                                                duration: 0.3,
                                                ease: [0.25, 0.46, 0.45, 0.94]
                                            }}
                                        >
                                            {project.title}
                                        </motion.h3>

                                    </div>
                                    {project.category !== "Landing Pages" && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <motion.div
                                                    key={tag}
                                                    className="inline-flex items-center justify-center w-10 h-10 border border-grey-50 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
                                                    title={tag.split('/').pop()?.split('.')[0] || ''}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{
                                                        delay: 0.3 + (tagIndex * 0.05),
                                                        duration: 0.3,
                                                        ease: [0.25, 0.46, 0.45, 0.94]
                                                    }}
                                                >
                                                    <img
                                                        src={tag}
                                                        alt={tag.split('/').pop()?.split('.')[0] || 'tech icon'}
                                                        className={`w-6 h-6 object-contain ${tag.includes('Next.js')
                                                            ? 'dark:brightness-0 dark:invert brightness-0'
                                                            : tag.includes('vapi')
                                                                ? 'dark:brightness-0 dark:invert brightness-0'
                                                                : ''
                                                            }`}
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Project Links */}
                                    <div className="flex space-x-3">
                                        <motion.a
                                            href={project.liveUrl}
                                            className="flex-1  bg-cyan-500 text-white text-center py-2 rounded-lg font-medium  transition-all duration-300 flex items-center justify-center space-x-1"
                                                                                  >
                                            <span className="mr-2">Preview </span>
                                            <ExternalLink className="w-4 h-4" />
                                        </motion.a>
                                        {project.category !== "Landing Pages" && (
                                            <motion.a
                                                href={project.githubUrl}
                                                className="flex-1 border border-border text-center py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-1"
                                                whileHover={{
                                                    scale: 1.02,
                                                    transition: {
                                                        duration: 0.3,
                                                        ease: [0.25, 0.46, 0.45, 0.94]
                                                    }
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                            >
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

export default Projects