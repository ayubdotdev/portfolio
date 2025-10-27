'use client'
import { NavbarDemo } from "@/components/NavbarDemo";
import ProfileSection from "../components/Profile";
import { Spotlight } from "@/components/ui/spotlight-new";
import SkillsSection from "@/components/SkillsSection";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-background to-background/90 text-foreground pt-5">      

      {/* Spotlights */}
      <div className="hidden lg:block">
        <Spotlight />
      </div>

      <NavbarDemo />
      <ProfileSection />
      <SkillsSection />
      <Experience /> 
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
