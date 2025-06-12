import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import TypingAnimation from "./Typing-animation";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const ProfileSection = () => {
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

  return (
    <section id='Profile' className="container mx-auto px-6 py-16 md:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
      >
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
            <Avatar className="w-full h-full">
              <AvatarImage
                src="pp.jpg"
                alt=" Profile photo"
                className="object-cover"
              />
              <AvatarFallback className="bg-background text-foreground">
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
        </motion.div>

        <div className="max-w-2xl text-center md:text-left">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="text-primary">Ayub</span>
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-medium mb-6 text-foreground/80"
          >
            <TypingAnimation />
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 mb-8"
          >
            I'm a third-year engineering student with a strong passion for web development. I love building websites that improve digital experiences and solve real-world problems       </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-lg font-medium transition-all"
            >
              View My Work
            </a>
            <a
              href="/Ayyubresume.pdf"
              download="Ayyubresume.pdf"
              className="no-underline"
            >
              <InteractiveHoverButton className="px-6 py-3 rounded-lg font-medium transition-all">
                Download CV
              </InteractiveHoverButton>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfileSection;
