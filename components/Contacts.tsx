"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});


const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const globeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
      };
      const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
      const sampleArcs = [
        {
          order: 1,
          startLat: -19.885592,
          startLng: -43.951191,
          endLat: -22.9068,
          endLng: -43.1729,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 1,
          startLat: 28.6139,
          startLng: 77.209,
          endLat: 3.139,
          endLng: 101.6869,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 1,
          startLat: -19.885592,
          startLng: -43.951191,
          endLat: -1.303396,
          endLng: 36.852443,
          arcAlt: 0.5,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 2,
          startLat: 1.3521,
          startLng: 103.8198,
          endLat: 35.6762,
          endLng: 139.6503,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 2,
          startLat: 51.5072,
          startLng: -0.1276,
          endLat: 3.139,
          endLng: 101.6869,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 2,
          startLat: -15.785493,
          startLng: -47.909029,
          endLat: 36.162809,
          endLng: -115.119411,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 3,
          startLat: -33.8688,
          startLng: 151.2093,
          endLat: 22.3193,
          endLng: 114.1694,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 3,
          startLat: 21.3099,
          startLng: -157.8581,
          endLat: 40.7128,
          endLng: -74.006,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 3,
          startLat: -6.2088,
          startLng: 106.8456,
          endLat: 51.5072,
          endLng: -0.1276,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 4,
          startLat: 11.986597,
          startLng: 8.571831,
          endLat: -15.595412,
          endLng: -56.05918,
          arcAlt: 0.5,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 4,
          startLat: -34.6037,
          startLng: -58.3816,
          endLat: 22.3193,
          endLng: 114.1694,
          arcAlt: 0.7,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 4,
          startLat: 51.5072,
          startLng: -0.1276,
          endLat: 48.8566,
          endLng: -2.3522,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 5,
          startLat: 14.5995,
          startLng: 120.9842,
          endLat: 51.5072,
          endLng: -0.1276,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 5,
          startLat: 1.3521,
          startLng: 103.8198,
          endLat: -33.8688,
          endLng: 151.2093,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 5,
          startLat: 34.0522,
          startLng: -118.2437,
          endLat: 48.8566,
          endLng: -2.3522,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 6,
          startLat: -15.432563,
          startLng: 28.315853,
          endLat: 1.094136,
          endLng: -63.34546,
          arcAlt: 0.7,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 6,
          startLat: 37.5665,
          startLng: 126.978,
          endLat: 35.6762,
          endLng: 139.6503,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 6,
          startLat: 22.3193,
          startLng: 114.1694,
          endLat: 51.5072,
          endLng: -0.1276,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 7,
          startLat: -19.885592,
          startLng: -43.951191,
          endLat: -15.595412,
          endLng: -56.05918,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 7,
          startLat: 48.8566,
          startLng: -2.3522,
          endLat: 52.52,
          endLng: 13.405,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 7,
          startLat: 52.52,
          startLng: 13.405,
          endLat: 34.0522,
          endLng: -118.2437,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 8,
          startLat: -8.833221,
          startLng: 13.264837,
          endLat: -33.936138,
          endLng: 18.436529,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 8,
          startLat: 49.2827,
          startLng: -123.1207,
          endLat: 52.3676,
          endLng: 4.9041,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 8,
          startLat: 1.3521,
          startLng: 103.8198,
          endLat: 40.7128,
          endLng: -74.006,
          arcAlt: 0.5,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 9,
          startLat: 51.5072,
          startLng: -0.1276,
          endLat: 34.0522,
          endLng: -118.2437,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 9,
          startLat: 22.3193,
          startLng: 114.1694,
          endLat: -22.9068,
          endLng: -43.1729,
          arcAlt: 0.7,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 9,
          startLat: 1.3521,
          startLng: 103.8198,
          endLat: -34.6037,
          endLng: -58.3816,
          arcAlt: 0.5,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 10,
          startLat: -22.9068,
          startLng: -43.1729,
          endLat: 28.6139,
          endLng: 77.209,
          arcAlt: 0.7,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 10,
          startLat: 34.0522,
          startLng: -118.2437,
          endLat: 31.2304,
          endLng: 121.4737,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 10,
          startLat: -6.2088,
          startLng: 106.8456,
          endLat: 52.3676,
          endLng: 4.9041,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 11,
          startLat: 41.9028,
          startLng: 12.4964,
          endLat: 34.0522,
          endLng: -118.2437,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 11,
          startLat: -6.2088,
          startLng: 106.8456,
          endLat: 31.2304,
          endLng: 121.4737,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 11,
          startLat: 22.3193,
          startLng: 114.1694,
          endLat: 1.3521,
          endLng: 103.8198,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 12,
          startLat: 34.0522,
          startLng: -118.2437,
          endLat: 37.7749,
          endLng: -122.4194,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 12,
          startLat: 35.6762,
          startLng: 139.6503,
          endLat: 22.3193,
          endLng: 114.1694,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 12,
          startLat: 22.3193,
          startLng: 114.1694,
          endLat: 34.0522,
          endLng: -118.2437,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 13,
          startLat: 52.52,
          startLng: 13.405,
          endLat: 22.3193,
          endLng: 114.1694,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 13,
          startLat: 11.986597,
          startLng: 8.571831,
          endLat: 35.6762,
          endLng: 139.6503,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 13,
          startLat: -22.9068,
          startLng: -43.1729,
          endLat: -34.6037,
          endLng: -58.3816,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 14,
          startLat: -33.936138,
          startLng: 18.436529,
          endLat: 21.395643,
          endLng: 39.883798,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
      ];


  return (

        <section id='contacts' className="flex flex-col items-center justify-center py-20 dark:bg-black bg-white relative w-full">
            <ParticlesBackground />
            <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-[20rem] md:h-[40rem] px-4">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="div"
                >
                    <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                        Open to Work: Connecting for Opportunities
                    </h2>
                    <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
                        I am available for freelance work and eager to connect for new opportunities, regardless of location.
                    </p>
                </motion.div>
                <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
                <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
                    <World data={sampleArcs} globeConfig={globeConfig} />
                </div>
            </div>
            <section id="contact" className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500
 bg-clip-text text-transparent">
                                Get In Touch
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Ready to start your next project? Let's create something amazing together.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Let's talk about your project</h3>
                                <p className="text-muted-foreground mb-8">
                                    I'm always interested in hearing about new opportunities and exciting projects.
                                    Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-transparent border border-gray-600
                                                  rounded-full text-white">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p className="text-muted-foreground">ayubdotdev@gmail.com</p>
                                    </div>
                                </div>



                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-transparent border border-gray-600
                                        rounded-full text-white">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Location</h4>
                                        <p className="text-muted-foreground">Mumbai,India </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="font-semibold mb-4">Follow me</h4>
                                <div className="flex space-x-4 ">
                                    <a href="https://github.com/ayubdotdev" className="p-3 bg-transparent hover:bg-accent/80 rounded-full transition-all duration-200 hover:scale-110 border border-gray-600">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/ayub-khan-8b152726a/" className="p-3 bg-transparent hover:bg-accent/80 rounded-full transition-all duration-200 hover:scale-110 border border-gray-600">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a href="https://x.com/xa42ayubkhan" className="p-3 border border-gray-600  hover:bg-accent/80 rounded-full transition-all duration-200 hover:scale-110 bg-transparent">
                                        <img
                                         src="/x-logo-full.png"
                                         alt="x-logo"
                                         className="w-6 h-6"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-card border border-border rounded-2xl p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="What's this about?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500
                                    text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );

}

export default Contacts