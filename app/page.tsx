"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/custom/navbar";
import Image from "next/image";

const skills = [
  { name: "Python", color: "from-yellow-400 to-yellow-600" },
  { name: "Django", color: "from-green-500 to-green-700" },
  { name: "Django REST", color: "from-green-400 to-teal-600" },
  { name: "JavaScript", color: "from-yellow-300 to-orange-500" },
  { name: "TypeScript", color: "from-blue-400 to-blue-600" },
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "React Native", color: "from-cyan-300 to-indigo-500" },
  { name: "Node.js", color: "from-green-400 to-green-600" },
  { name: "PostgreSQL", color: "from-blue-500 to-indigo-600" },
  { name: "XGBoost / ML", color: "from-orange-400 to-red-500" },
  { name: "Streamlit", color: "from-red-400 to-pink-500" },
  { name: "Docker", color: "from-sky-400 to-blue-600" },
];

const projects = [
  {
    title: "StudyPal",
    description:
      "An AI-powered study companion with courses, quizzes, streaks, timetables, and an intelligent study assistant – all backed by a robust Django API.",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "AI"],
    tagColors: ["pink", "green", "yellow", "blue", "purple"],
    gradient: "from-violet-500/20 to-indigo-500/20",
    border: "hover:border-violet-400/40",
    url: "https://github.com/Mahfuzy/studypal",
  },
  {
    title: "ChurnPredictor",
    description:
      "A machine-learning application that predicts bank customer churn probability and generates AI-powered retention strategies using XGBoost and Groq.",
    tags: ["Python", "XGBoost", "Streamlit", "Groq AI"],
    tagColors: ["yellow", "orange", "red", "purple"],
    gradient: "from-orange-500/20 to-red-500/20",
    border: "hover:border-orange-400/40",
    url: "https://github.com/Mahfuzy/churn_predictor",
  },
  {
    title: "DreamBoard",
    description:
      "A Pinterest-inspired backend system with powerful REST API integrations for boards, pins, and media management.",
    tags: ["Python", "Django", "DRF", "PostgreSQL"],
    tagColors: ["pink", "blue", "yellow", "green"],
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "hover:border-purple-400/40",
    url: "https://github.com/Mahfuzy/DreamBoard",
  },
  {
    title: "ShopNest",
    description:
      "A full-featured marketplace backend where users can buy and sell products, complete with authentication, listings, and order management.",
    tags: ["Python", "Django", "PostgreSQL"],
    tagColors: ["green", "teal", "blue"],
    gradient: "from-green-500/20 to-teal-500/20",
    border: "hover:border-green-400/40",
    url: "https://github.com/Mahfuzy/shopnest",
  },
  {
    title: "MovieHub",
    description:
      "A sleek React application for browsing upcoming movies, searching titles, and discovering new favourites powered by a live movie API.",
    tags: ["JavaScript", "React"],
    tagColors: ["blue", "cyan"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "hover:border-blue-400/40",
    url: "https://github.com/Mahfuzy/MovieApp",
  },
  {
    title: "Collabo",
    description:
      "A cross-platform mobile collaboration app built with Expo and React Native, enabling teams to communicate and coordinate on the go.",
    tags: ["TypeScript", "React Native", "Expo"],
    tagColors: ["blue", "cyan", "indigo"],
    gradient: "from-indigo-500/20 to-sky-500/20",
    border: "hover:border-indigo-400/40",
    url: "https://github.com/Mahfuzy/collabo",
  },
];

const tagColorMap: Record<string, string> = {
  pink: "bg-pink-500/20 text-pink-300",
  green: "bg-green-500/20 text-green-300",
  teal: "bg-teal-500/20 text-teal-300",
  yellow: "bg-yellow-500/20 text-yellow-300",
  blue: "bg-blue-500/20 text-blue-300",
  purple: "bg-purple-500/20 text-purple-300",
  orange: "bg-orange-500/20 text-orange-300",
  red: "bg-red-500/20 text-red-300",
  cyan: "bg-cyan-500/20 text-cyan-300",
  indigo: "bg-indigo-500/20 text-indigo-300",
};

const services = [
  {
    icon: "🔗",
    title: "API Development",
    description:
      "Designing and building scalable, secure RESTful APIs using Django REST Framework and Node.js that power modern applications.",
    accent: "group-hover:text-violet-400",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Building intelligent systems – from churn prediction models to AI-powered study assistants – using XGBoost, scikit-learn, and LLM integrations.",
    accent: "group-hover:text-orange-400",
  },
  {
    icon: "☁️",
    title: "Cloud & Infrastructure",
    description:
      "Crafting cloud-native solutions, containerised services, and robust data pipelines for high-performance production environments.",
    accent: "group-hover:text-sky-400",
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile apps with React Native and Expo that deliver smooth, native-feeling experiences on iOS and Android.",
    accent: "group-hover:text-cyan-400",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* Background gradient blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-700/10 blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-800/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 pt-24 pb-16 px-4 md:px-8 lg:px-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-2xl"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-4">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Mahfuz
            </span>
            <br />
            <span className="text-white">Seidu Agbor</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-3 font-light">
            Backend Developer &amp; AI Enthusiast
          </p>
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-lg">
            I transform complex challenges into innovative, scalable solutions —
            from robust REST APIs to intelligent machine-learning systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-violet-500/25 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-violet-500/50 text-violet-300 font-semibold rounded-full hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 blur-2xl opacity-20 scale-110" />
          <div className="relative rounded-full p-1 bg-gradient-to-r from-violet-500 to-indigo-500">
            <Image
              src="/nice.jpg"
              alt="Mahfuz Seidu Agbor"
              width={340}
              height={340}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="py-20 bg-[#0D0D15]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-2/5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/30 to-indigo-500/30 blur-xl" />
                <Image
                  src="/a_determined_individual.jpg"
                  alt="Profile"
                  width={420}
                  height={420}
                  className="relative rounded-2xl w-full max-w-xs object-cover border border-white/10"
                />
              </div>
            </div>
            <div className="md:w-3/5 space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Who am I?
                </span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                I&apos;m Mahfuz Seidu Agbor, a dedicated backend developer with a
                passion for designing and building scalable, robust systems. I
                specialise in Python, Django, and REST APIs, while also exploring
                the frontier of AI and machine-learning applications.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                My recent projects include{" "}
                <strong className="text-violet-300">StudyPal</strong>, an
                AI-powered learning platform;{" "}
                <strong className="text-orange-300">ChurnPredictor</strong>, a
                bank customer churn prediction tool; and{" "}
                <strong className="text-green-300">ShopNest</strong>, a
                full-featured marketplace – each reflecting my commitment to
                innovative, production-ready engineering.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-sm text-gray-400">
                <div>
                  <span className="text-violet-400 font-semibold">Age:</span> 19
                </div>
                <div>
                  <span className="text-violet-400 font-semibold">Location:</span>{" "}
                  Northern, Ghana
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-violet-400 font-semibold">Email:</span>{" "}
                  seidumahfuz@gmail.com
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills Section ── */}
      <section id="skills" className="py-20 bg-[#0A0A0F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-gray-400">Technologies I work with</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.08 }}
                className="relative px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden cursor-default"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-10`}
                />
                <span className="relative font-medium text-white text-sm">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Section ── */}
      <section id="projects" className="py-20 bg-[#0D0D15]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400">Things I&apos;ve built</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group bg-[#13131F] rounded-2xl p-6 border border-white/8 ${project.border} transition-all duration-300 flex flex-col`}
              >
                {/* Gradient banner */}
                <div
                  className={`h-36 rounded-xl mb-5 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-4xl`}
                >
                  {project.title === "StudyPal" && "📚"}
                  {project.title === "ChurnPredictor" && "🧠"}
                  {project.title === "DreamBoard" && "📌"}
                  {project.title === "ShopNest" && "🛒"}
                  {project.title === "MovieHub" && "🎬"}
                  {project.title === "Collabo" && "📱"}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${tagColorMap[project.tagColors[j]] ?? "bg-gray-700 text-gray-300"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
                >
                  View on GitHub
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section id="services" className="py-20 bg-[#0A0A0F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                What I Offer
              </span>
            </h2>
            <p className="text-gray-400">Services I can provide</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group bg-[#13131F] rounded-2xl p-7 border border-white/8 hover:border-violet-500/30 transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3
                  className={`text-lg font-semibold mb-3 text-white transition-colors ${service.accent}`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="py-24 bg-[#0D0D15]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Let&apos;s Connect
              </span>
            </h2>
            <p className="text-gray-400 mb-10">
              I&apos;m always open to new opportunities, collaborations, or just a
              good conversation. Reach out!
            </p>
            <a
              href="mailto:seidumahfuz@gmail.com"
              className="inline-block px-10 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-violet-500/30 hover:shadow-violet-500/60 hover:scale-105 transition-all duration-300 mb-12"
            >
              seidumahfuz@gmail.com
            </a>
            <div className="flex justify-center items-center gap-8">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/agbor-seidu-mahfuz-b98398288"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:border-blue-400/50 group-hover:bg-blue-500/10 flex items-center justify-center transition-all duration-300">
                  <Image
                    src="/icons8-linkedin.svg"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs text-gray-500 group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </span>
              </a>
              {/* Twitter / X */}
              <a
                href="https://twitter.com/MahfuzSeidu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:border-gray-400/50 group-hover:bg-gray-500/10 flex items-center justify-center transition-all duration-300">
                  <Image
                    src="/icons8-x-logo.svg"
                    alt="X / Twitter"
                    width={28}
                    height={28}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                  Twitter
                </span>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Mahfuzy"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:border-violet-400/50 group-hover:bg-violet-500/10 flex items-center justify-center transition-all duration-300">
                  <Image
                    src="/icons8-github.svg"
                    alt="GitHub"
                    width={28}
                    height={28}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs text-gray-500 group-hover:text-violet-400 transition-colors">
                  GitHub
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#0A0A0F] border-t border-white/5 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Mahfuz Seidu Agbor. All rights reserved.
      </footer>
    </div>
  );
}
