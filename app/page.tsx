"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/custom/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0E0E0E] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Hello, I&apos;m <span className="text-yellow-300">Mahfuz Seidu Agbor</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            I transform complex challenges into innovative, scalable solutions.
          </p>
          <a
            href="#contact"
            className="px-8 py-4 bg-yellow-400 text-purple-900 font-bold rounded-full shadow-lg hover:shadow-2xl transition-shadow"
          >
            Get in Touch
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12"
        >
          <Image
            src="/nice.jpg"
            alt="Mahfuz"
            width={400}
            height={400}
            className="rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-[#141414]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <Image
                src="/a_determined_individual.jpg"
                alt="Profile"
                width={500}
                height={500}
                className="rounded-lg w-full max-w-sm object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Who am I?
              </h2>
              <p className="text-gray-300 text-base md:text-lg">
                I&apos;m Mahfuz Seidu Agbor, a dedicated backend developer with a passion for designing and building scalable, robust systems. I specialize in leveraging cutting-edge technologies—such as Python, Django, and Node.js—to solve complex challenges.
              </p>
              <p className="text-gray-300 text-base md:text-lg">
                My projects, including <strong>MovieHub</strong>, a dynamic movie discovery platform; <strong>DreamBoard</strong>, a backend-powered Pinterest clone; and <strong>ShopNest</strong>, a comprehensive e-commerce solution, demonstrate my commitment to creating efficient and innovative systems.
              </p>
              <p className="text-gray-400 text-sm">
                <strong>Age:</strong> 19 <br />
                <strong>Location:</strong> Northern, Ghana <br />
                <strong>Email:</strong> seidumahfuz@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-[#0E0E0E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
              >
                <div className="h-48 bg-gray-700/30 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">MovieHub</h3>
                <p className="text-gray-300 mb-4">
                  A platform for viewing upcoming movies and searching for your favorites.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React</span>
                </div>
                <div className="mt-4">
                  <a
                    href="https://github.com/Mahfuzy/MovieApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>

              {/* Project Card 2 */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group"
              >
                <div className="h-48 bg-gray-700/30 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">DreamBoard</h3>
                <p className="text-gray-300 mb-4">
                  A Pinterest-inspired backend system offering powerful API integrations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Django</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
                    DRF
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                    PostgreSQL
                  </span>
                </div>
                <div className="mt-4">
                  <a
                    href="https://github.com/Mahfuzy/DreamBoard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>

              {/* Project Card 3 */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 group"
              >
                <div className="h-48 bg-gray-700/30 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-green-500/20 to-teal-500/20 animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">ShopNest</h3>
                <p className="text-gray-300 mb-4">
                  A comprehensive e-commerce backend solution designed for scalability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Django</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">PostgreSQL</span>
                </div>
                <div className="mt-4">
                  <a
                    href="https://github.com/Mahfuzy/shopnest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Services Section */}
      <section id="services" className="py-16 bg-[#0E0E0E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">My Services</h2>
            <p className="text-gray-400 mt-4">What I can do for you</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1A1A1A] rounded-lg p-8 shadow-md transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                API Development
              </h3>
              <p className="text-gray-300">
                Designing and building scalable, secure APIs that power modern applications.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1A1A1A] rounded-lg p-8 shadow-md transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                Cloud & Infrastructure
              </h3>
              <p className="text-gray-300">
                Crafting robust cloud-native solutions and managing data systems for high performance.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1A1A1A] rounded-lg p-8 shadow-md transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                System Integration
              </h3>
              <p className="text-gray-300">
                Seamlessly integrating complex backend systems with intuitive frontends.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section with Social Links */}
      <section id="contact" className="py-16 bg-[#445e9b]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Connect</h2>
            <div className="flex justify-center space-x-8">
              {/* LinkedIn */}
              <a
                href="www.linkedin.com/in/agbor-seidu-mahfuz-b98398288"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons8-linkedin.svg"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com/MahfuzSeidu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons8-x-logo.svg"
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Mahfuzy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons8-github.svg"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
