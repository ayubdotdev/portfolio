import { ExternalLink, Github, Tag } from 'lucide-react';
import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: 'Developers Tool',
            description: 'A comprehensive development toolkit streamlining workflow with essential features like code snippets and project templates. It boosts productivity, helping developers build and ship products efficiently.',
            image: '/devtools.png',
            tags: ['https://cdn.worldvectorlogo.com/logos/tailwindcss.svg', 'https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png', "https://cdn.worldvectorlogo.com/logos/typescript.svg"],
            liveUrl: 'https://developers-tool.vercel.app/',
            githubUrl: 'https://github.com/ayubdotdev/make-fast',
        },
        {
            title: 'AI Magic',
            description: 'AI Magic is a powerful image generation platform powered by Stability AI API that transforms text prompts into stunning artwork.The platform enables saving of creations, though API usage is subject to rate limits.',
            image: '/aimagic.png',
            tags: ['https://cdn.worldvectorlogo.com/logos/tailwindcss.svg', 'https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png', 'https://imgs.search.brave.com/CkOet2vlmw9U1LUr-ZEtqwvYgIdIAVZGzsRa1saYHR0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGIyM2ZiNmM0/Mjg1NjAyNDk3YjY3/MTM4OTQ5YjA2MzQy/M2I0YWU4OTk3ZGJk/MThhYTYzMWZhOWQx/MjMwMjdhMi9zdGFi/aWxpdHkuYWkv'],
            liveUrl: 'https://ai-magic.vercel.app/',
            githubUrl: 'https://github.com/ayubdotdev/ai-magic',
        },
        {
            title: 'Edu Nova',
            description: "An AI learning companion powered by Vapi voice agents that transforms complex topics into engaging conversations. Get personalized 24/7 support for studying and exploring new concepts through natural, human-like interactions.",
            image: '/edunova.png',
            tags: ['https://cdn.worldvectorlogo.com/logos/tailwindcss.svg','https://files.buildwithfern.com/https://vapi.docs.buildwithfern.com/2025-06-06T22:21:40.746Z/static/images/logo/logo-dark.svg', 'https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png', "https://cdn.worldvectorlogo.com/logos/typescript.svg", "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/favicon.ico"],
            liveUrl: 'https://edu-nova-beta.vercel.app/',
            githubUrl: 'https://github.com/ayubdotdev/ai-companion',
        },
    ];

    return (
        <section id="Projects" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-300 to-cyan-600 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A collection of projects that showcase my skills and passion for development
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 min-w-[300px]"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Project Image */}
                            <div className="relative top-0 overflow-hidden bg-gradient-to-b from-transparent to-background/20 aspect-w-4 aspect-h-3">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.liveUrl}
                                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4 text-gray-700" />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                                    >
                                        <Github className="w-4 h-4 text-gray-800" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 bg-background/30 backdrop-blur-sm">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-cyan-400 text-xl font-semibold transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-muted-foreground mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <div
                                            key={tag}
                                            className="inline-flex items-center justify-center w-10 h-10 border border-grey-50 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                                            title={tag.split('/').pop()?.split('.')[0] || ''}
                                        >
                                            <img
                                                src={tag}
                                                alt={tag.split('/').pop()?.split('.')[0] || 'tech icon'}
                                                className="w-13 h-12 object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="flex space-x-3">
                                    <a
                                        href={project.liveUrl}
                                        className="flex-1 bg-gradient-to-r from-cyan-600 to-cyan-300 text-white text-center py-2 rounded-lg font-medium hover:shadow-md hover:bg-accent/75 transition-all duration-200 flex items-center justify-center space-x-1"
                                    >
                                        <span className="mr-2">Live </span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="flex-1 border border-border text-center py-2 rounded-lg font-medium hover:bg-accent transition-all duration-200 flex items-center justify-center space-x-1"
                                    >
                                        <span className="mr-2">Code</span>
                                        <Github className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects