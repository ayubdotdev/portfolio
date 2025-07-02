'use client'
import { NavbarDemo } from "@/components/NavbarDemo";
import ProfileSection from "../components/Profile";
import ParticlesBackground from "@/components/ParticlesBackground";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Spotlight } from "@/components/ui/spotlight-new";
import SkillsSection from "@/components/SkillsSection";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className="pt-5 min-h-screen bg-gradient-to-br from-background to-background/90 text-foreground overflow-x-hidden">
      <ParticlesBackground />
      <Spotlight  />
      <div className="fixed top-22 right-10 z-[100]">
        <ModeToggle />
      </div>
      <NavbarDemo />
      <ProfileSection />
      <SkillsSection />
      <Projects />
      <Contacts />
      <footer className="relative z-10 py-8 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-muted-foreground">
              <p>&copy; 2025 Khan Ayub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      
    </div>
  )
}
