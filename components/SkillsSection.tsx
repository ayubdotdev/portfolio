
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const SkillsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
          },
        },
      };
    
      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 100 } as const,
        },
    };
    
    const skillsData = [
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "React", icon: "logos:react" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "Supabase", icon: "logos:supabase-icon" },
    ];

    return (
        <section id='skill' className='container mx-auto px-6 py-16 md:py-24 ' style={{
            '--nextjs-color': 'var(--color-foreground)'
        } as React.CSSProperties}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="text-center mb-12">
                    <div className="inline-block relative">
                        <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                            Tech <span className='text-cyan-300'> Stack</span> 
                        </h1>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-full"
                        />
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                        Technologies and tools I use to build projects and products
                    </p>
                </div>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, margin: "-100px" }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8'
            >
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className='bg-card/50 rounded-xl backdrop-blur-sm hover:bg-card/80 border border-border flex flex-col group items-center  p-6 transition-all relative h-40'
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="h-24 w-24 flex items-center justify-center mb-3">
                            <Icon
                                icon={skill.icon}
                                className='w-24 h-24 object-contain filter hover:brightness-110 transition-transform group-hover:scale-110'
                            />
                        </div>
                        <p className='text-lg font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default SkillsSection
