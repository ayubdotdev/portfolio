"use client";
import React, { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Globe } from "./magicui/globe";
import { motion } from "framer-motion";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        console.log("message sent")
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || 'Failed to send message. Please try again.');
        console.log(data.error)

      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
      console.log(error)
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const itemVariants = {
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
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const globeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { 
      opacity: 0, 
      x: 30,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.35,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contacts" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl md:text-5xl font-bold dark:text-white text-black mb-6">
              Open to Connect & Collaborate
            </h3>
          </motion.div>
          
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I'm always excited to discuss new opportunities and innovative ideas around the world
          </motion.p>
          
          <motion.div 
            className="flex justify-center mb-8"
            variants={globeVariants}
          >
            <div className="relative w-80 h-80 md:w-80 md:h-80">
              <Globe className="w-full h-full" />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Ready to start your next project? Let's create something amazing together.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6">Let's talk about your project</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in hearing about new opportunities and exciting projects.
                Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate.
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-center space-x-4"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="p-3 bg-transparent border border-gray-600 rounded-full text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">ayubdotdev@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="p-3 bg-transparent border border-gray-600 rounded-full text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MapPin className="w-6 h-6" />
                </motion.div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Mumbai,India </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4">Follow me</h4>
              <motion.div 
                className="flex space-x-4"
                variants={containerVariants}
              >
                {[
                  { href: "https://github.com/ayubdotdev", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/ayub-khan-8b152726a/", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://x.com/xa42ayubkhan", img: "/x-logo-full.png", label: "X" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-transparent rounded-full transition-all duration-200 border border-gray-600"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -5,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.icon ? (
                      <social.icon className="w-6 h-6" />
                    ) : (
                      <img
                        src={social.img}
                        alt={social.label}
                        className="w-6 h-6"
                      />
                    )}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-card border border-border rounded-2xl p-8"
            variants={formVariants}
            whileHover={{ 
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              y: -5
            }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
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
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
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
                </motion.div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
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
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
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
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-lg transform hover:scale-105'
                }`}
                variants={itemVariants}
                whileHover={!isSubmitting ? { 
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3 rounded-lg text-center ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}
                >
                  {statusMessage}
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contacts