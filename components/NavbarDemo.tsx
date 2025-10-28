"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";
import ThemeToggleButton from "./ui/theme-toggle-button";
 

export function NavbarDemo() {
  const navItems = [
    { name: "Profile", link: "#Profile" },
    { name: "Skills", link: "#skill" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#Projects" },
    { name: "Contacts", link: "#contacts" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-tansparent"
          : "bg-transparent border-b border-gray-200 dark:border-gray-800"
      }`}
    >
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems}
            onItemClick={(e) => {
              e.preventDefault();
              const href = (
                e.currentTarget as HTMLAnchorElement
              ).getAttribute("href");
              if (href) scrollToSection(href);
            }}
          />
          {/* 👇 I removed the 'variant' and 'start' props here */}
          <ThemeToggleButton />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              <ThemeToggleButton /> {/* 👈 This one was already correct */}
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.link);
                }}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </motion.div>
  );
}