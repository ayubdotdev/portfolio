import { motion } from 'framer-motion'
import { HoverEffect } from './ui/card-hover-effect';


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
            transition: { type: "spring", stiffness: 100 },
        },
    };
    const skillsData = [
        { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg", color: "#61DAFB" },
        { name: "Next.js", icon: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png", color: "#000000" },
        { name: "Vite", icon: "https://cdn.worldvectorlogo.com/logos/vitejs.svg", color: "#646CFF" },
        { name: "Tailwind CSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", color: "#38B2AC" },
        { name: "Framer Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg", color: "#0055FF" },
        { name: "ShadCN UI", icon: "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/favicon.ico", color: "#000000" },
        { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg", color: "#3178C6" },
        { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg", color: "#F7DF1E" }, { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", color: "#339933" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
        { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", color: "#47A248" },
        { name: "PostgreSQL", icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg", color: "#336791" },
        
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
                    <h1 className='text-3xl md:text-4xl font-bold inline-block'>
                        Tech Stack
                    </h1>
                   
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
                            <img
                                src={skill.icon}
                                alt={skill.name}
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