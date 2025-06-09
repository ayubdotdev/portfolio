import { motion } from 'framer-motion'
import { SiExpress, SiMongodb,SiJavascript, SiTailwindcss, 
    SiTypescript, SiReact,SiNodedotjs,
    SiNextdotjs,
    } from 'react-icons/si'


const SkillsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { 
            y: 20, 
            opacity: 0,
            filter: "blur(8px)"
        },
        show: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { 
                duration: 0.4,
                ease: "easeOut"
            },
        },
    };
    const skillsData = [
        { name: "React", icon: SiReact , color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Tailwind CSS", icon:SiTailwindcss, color: "#06b6d4" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
         { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
    ];

    return (
        <section id='skill' className='container mx-auto px-6 py-16 md:py-24 '>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="text-center mb-12">
                    <h1 className='text-3xl md:text-4xl font-bold inline-block mb-4'>
                        Tech <span className='text-cyan-200'> Stack</span> 
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-45 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
                    />
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                        Technologies and tools I use to bring ideas to life and build amazing digital experiences.
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
                        className='bg-card/50 rounded-xl backdrop-blur-sm hover:bg-card/80 border border-border flex flex-col group items-center p-6 transition-all relative h-40'
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="h-24 w-24 flex items-center justify-center mb-3">
                            <skill.icon
                                className='w-24 h-24 object-contain filter hover:brightness-110 transition-transform group-hover:scale-110'
                                style={{ color: skill.color }}
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