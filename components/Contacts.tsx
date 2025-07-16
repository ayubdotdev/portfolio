"use client";
import React, { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
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
    <section id="contacts" className="py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className=" mb-2 dark:text-white text-black">
              Get In <span className="text-cyan-300"> Touch</span>
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 mt-1 h-1 w-2/4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-full origin-left"
            />
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Ready to start your next project? Let's create something amazing together.
          </motion.p>

          {/* Social Links - now visible and below heading */}
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            variants={containerVariants}
          >
            {[
              { href: "https://github.com/ayubdotdev", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/ayub-khan-8b152726a/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://x.com/Ayyubdotdev", img: "/xlogo.png", label: "X" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-full transition-all duration-200 border border-gray-600"
                variants={itemVariants}
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon ? (
                  <social.icon className="w-6 h-6 text-white" />
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

        {/* Center the contact form horizontally and vertically on large screens */}
        <div className="flex flex-col pr-100 pb-55 items-center justify-center min-h-screen w-full px-4">
          <motion.div
            className="w-full max-w-5xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
            >
              {/* Contact Info (if used) */}
              <motion.div
                className="space-y-8"
                variants={itemVariants}
              >
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="bg-card border border-border rounded-2xl p-8 shadow-xl w-full max-w-2xl mx-auto"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  variants={containerVariants}
                >
                  {/* Name & Email */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={itemVariants}
                  >
                    <div className="form-group">
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-cyan-500 transition-all"
                        placeholder="johndoe69@gmail.com"
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Subject */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="What's this about?"
                      required
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-400 text-white hover:shadow-lg transform hover:scale-105'
                      }`}
                    variants={itemVariants}
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
                      className={`mt-4 p-3 rounded-lg text-center ${submitStatus === 'success'
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
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Contacts