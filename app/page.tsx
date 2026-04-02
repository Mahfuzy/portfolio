"use client";

import { motion } from "motion/react";
import Navbar from "@/components/custom/navbar";
import Image from "next/image";
import {
  ExternalLink,
  Link as LinkIcon,
  Brain,
  Cloud,
  Smartphone,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Mail,
  MapPin,
  Calendar,
  Code2,
  Database,
  Cpu,
  Container,
  Server,
  Globe,
  BarChart3,
  Layers,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Python", icon: Code2 },
      { name: "Django", icon: Layers },
      { name: "Django REST", icon: LinkIcon },
      { name: "Node.js", icon: Server },
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "React", icon: Layers },
      { name: "React Native", icon: Smartphone },
    ],
  },
  {
    title: "Data & AI",
    icon: Cpu,
    skills: [
      { name: "XGBoost / ML", icon: Brain },
      { name: "Streamlit", icon: BarChart3 },
    ],
  },
  {
    title: "DevOps",
    icon: Container,
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "Docker", icon: Container },
    ],
  },
];

const projects = [
  {
    title: "StudyPal",
    description:
      "An AI-powered study companion with courses, quizzes, streaks, timetables, and an intelligent study assistant — backed by a robust Django API.",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "AI"],
    url: "https://github.com/Mahfuzy/studypal",
    color: "#F59E0B",
    pattern: "M0 0h40v40H0z M20 0h40v40H20z M0 20h40v40H0z",
    size: "large",
  },
  {
    title: "ChurnPredictor",
    description:
      "A machine-learning application that predicts bank customer churn and generates AI-powered retention strategies using XGBoost and Groq.",
    tags: ["Python", "XGBoost", "Streamlit", "Groq AI"],
    url: "https://github.com/Mahfuzy/churn_predictor",
    color: "#EF4444",
    pattern: "M0 20 Q20 0 40 20 Q20 40 0 20z",
    size: "normal",
  },
  {
    title: "DreamBoard",
    description:
      "A Pinterest-inspired backend system with powerful REST API integrations for boards, pins, and media management.",
    tags: ["Python", "Django", "DRF", "PostgreSQL"],
    url: "https://github.com/Mahfuzy/DreamBoard",
    color: "#8B5CF6",
    pattern: "M0 0l20 20L0 40z M20 0l20 20-20 20z",
    size: "normal",
  },
  {
    title: "ShopNest",
    description:
      "A full-featured marketplace backend with authentication, product listings, and order management.",
    tags: ["Python", "Django", "PostgreSQL"],
    url: "https://github.com/Mahfuzy/shopnest",
    color: "#10B981",
    pattern: "M20 0a20 20 0 110 40 20 20 0 010-40z",
    size: "large",
  },
  {
    title: "MovieHub",
    description:
      "A sleek React application for browsing upcoming movies, searching titles, and discovering new favourites via a live movie API.",
    tags: ["JavaScript", "React"],
    url: "https://github.com/Mahfuzy/MovieApp",
    color: "#3B82F6",
    pattern: "M0 0h20v20H0z M20 20h20v20H20z",
    size: "normal",
  },
  {
    title: "Collabo",
    description:
      "A cross-platform mobile collaboration app built with Expo and React Native for team communication on the go.",
    tags: ["TypeScript", "React Native", "Expo"],
    url: "https://github.com/Mahfuzy/collabo",
    color: "#06B6D4",
    pattern: "M0 40L20 0l20 40z",
    size: "normal",
  },
];

const services = [
  {
    icon: LinkIcon,
    title: "API Development",
    description:
      "Designing and building scalable, secure RESTful APIs using Django REST Framework and Node.js that power modern applications.",
    accent: "amber",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Building intelligent systems — from churn prediction models to AI-powered study assistants — using XGBoost, scikit-learn, and LLM integrations.",
    accent: "red",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Crafting cloud-native solutions, containerised services, and robust data pipelines for high-performance production environments.",
    accent: "blue",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile apps with React Native and Expo that deliver smooth, native-feeling experiences on iOS and Android.",
    accent: "cyan",
  },
];

const accentColorMap: Record<string, { border: string; glow: string; icon: string }> = {
  amber: {
    border: "group-hover:border-amber-500/30",
    glow: "group-hover:shadow-amber-500/5",
    icon: "group-hover:text-amber-500",
  },
  red: {
    border: "group-hover:border-red-400/30",
    glow: "group-hover:shadow-red-400/5",
    icon: "group-hover:text-red-400",
  },
  blue: {
    border: "group-hover:border-blue-400/30",
    glow: "group-hover:shadow-blue-400/5",
    icon: "group-hover:text-blue-400",
  },
  cyan: {
    border: "group-hover:border-cyan-400/30",
    glow: "group-hover:shadow-cyan-400/5",
    icon: "group-hover:text-cyan-400",
  },
};

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.4, delay: i * 0.06 },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/* ─────────────────────────────────────────────
   SECTION HEADER COMPONENT
   ───────────────────────────────────────────── */

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      custom={0}
      className="mb-16"
    >
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber-500/80 mb-3 block">
        {label}
      </span>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-obsidian-50 mb-3">
        {title}
      </h2>
      <p className="text-obsidian-200 text-base md:text-lg max-w-lg">{subtitle}</p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SVG PATTERN FOR PROJECT CARDS
   ───────────────────────────────────────────── */

function ProjectPattern({ color, pattern }: { color: string; pattern: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07]"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <pattern id={`p-${color}`} width="40" height="40" patternUnits="userSpaceOnUse">
        <path d={pattern} fill={color} />
      </pattern>
      <rect width="100%" height="100%" fill={`url(#p-${color})`} />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="relative min-h-screen bg-obsidian-900 text-obsidian-50 overflow-x-hidden ambient-bg">
      {/* Navbar */}
      <Navbar />

      {/* ════════════════════════════════════════
          HERO
         ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 pt-24 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden scanlines">
        {/* Left — Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideLeft}
          className="flex-1 max-w-2xl z-10"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-amber-500/80 mb-5">
            Backend Developer &amp; AI Enthusiast
          </p>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] mb-6">
            <span className="text-obsidian-50">Mahfuz</span>
            <br />
            <span className="text-amber-500 accent-glow-text">Seidu Agbor</span>
          </h1>

          <p className="text-obsidian-200 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            I transform complex challenges into innovative, scalable solutions
            — from robust REST APIs to intelligent machine-learning systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-obsidian-900 font-heading font-bold text-sm rounded-lg hover:bg-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 cursor-pointer"
            >
              View My Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-obsidian-500 text-obsidian-100 font-heading font-semibold text-sm rounded-lg hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-200 cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideRight}
          className="relative flex-shrink-0 z-10"
        >
          {/* Glow behind photo */}
          <div className="absolute inset-0 rounded-2xl bg-amber-500/10 blur-3xl scale-110 animate-glow-pulse" />

          <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-amber-500/60 via-amber-600/20 to-transparent">
            <Image
              src="/nice.jpg"
              alt="Mahfuz Seidu Agbor — Backend Developer and AI Enthusiast"
              width={360}
              height={360}
              className="rounded-2xl object-cover"
              priority
            />
          </div>

          {/* Floating code snippet decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-obsidian-800/90 backdrop-blur-sm border border-obsidian-600/40 rounded-lg p-3 font-mono text-xs hidden md:block"
          >
            <span className="text-amber-500">const</span>{" "}
            <span className="text-obsidian-100">dev</span>{" "}
            <span className="text-obsidian-300">=</span>{" "}
            <span className="text-emerald-400">&quot;passionate&quot;</span>
            <span className="inline-block w-[2px] h-3.5 bg-amber-500 ml-0.5 animate-cursor-blink" />
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          ABOUT
         ════════════════════════════════════════ */}
      <section id="about" className="py-24 bg-obsidian-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row items-center gap-14"
          >
            {/* Photo */}
            <motion.div variants={slideLeft} className="md:w-2/5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-amber-500/8 blur-2xl" />
                <Image
                  src="/a_determined_individual.jpg"
                  alt="Mahfuz Seidu Agbor profile photo"
                  width={420}
                  height={420}
                  className="relative rounded-2xl w-full max-w-xs object-cover border border-obsidian-600/30"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              variants={slideRight}
              className="md:w-3/5 space-y-6"
            >
              <div>
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber-500/80 mb-2 block">
                  About
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-obsidian-50">
                  Who am I?
                </h2>
              </div>

              <p className="text-obsidian-200 text-base md:text-lg leading-relaxed max-w-prose">
                I&apos;m Mahfuz Seidu Agbor, a dedicated backend developer with
                a passion for designing and building scalable, robust systems. I
                specialise in Python, Django, and REST APIs, while also exploring
                the frontier of AI and machine-learning applications.
              </p>

              <p className="text-obsidian-200 text-base md:text-lg leading-relaxed max-w-prose">
                My recent projects include{" "}
                <strong className="text-amber-400">StudyPal</strong>, an
                AI-powered learning platform;{" "}
                <strong className="text-red-400">ChurnPredictor</strong>, a bank
                customer churn prediction tool; and{" "}
                <strong className="text-emerald-400">ShopNest</strong>, a
                full-featured marketplace — each reflecting my commitment to
                innovative, production-ready engineering.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { icon: Calendar, label: "Age", value: "19" },
                  { icon: MapPin, label: "Location", value: "Ghana" },
                  { icon: Mail, label: "Email", value: "seidumahfuz@gmail.com" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <stat.icon className="w-4 h-4 text-amber-500/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-obsidian-300 text-xs font-mono uppercase tracking-wider">
                        {stat.label}
                      </span>
                      <span className="text-obsidian-100 font-medium">
                        {stat.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TECH STACK
         ════════════════════════════════════════ */}
      <section id="skills" className="py-24 bg-obsidian-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="// skills"
            title="Tech Stack"
            subtitle="Technologies I work with daily"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                variants={scaleIn}
                custom={i}
                className="bg-obsidian-800/50 rounded-xl p-6 border border-obsidian-600/20 hover:border-obsidian-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <cat.icon className="w-4.5 h-4.5 text-amber-500" />
                  </div>
                  <h3 className="font-heading font-semibold text-obsidian-100 text-base">
                    {cat.title}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 text-sm text-obsidian-200 hover:text-obsidian-50 transition-colors duration-150"
                    >
                      <skill.icon className="w-3.5 h-3.5 text-obsidian-400" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROJECTS — Bento Grid
         ════════════════════════════════════════ */}
      <section id="projects" className="py-24 bg-obsidian-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="// work"
            title="Featured Projects"
            subtitle="Things I've built"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4 }}
                className={`group relative bg-obsidian-800/60 rounded-xl border border-obsidian-600/20 hover:border-obsidian-500/40 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer ${
                  project.size === "large" ? "lg:col-span-1" : ""
                }`}
              >
                {/* Pattern Banner */}
                <div className="relative h-36 overflow-hidden bg-obsidian-800/80">
                  <ProjectPattern
                    color={project.color}
                    pattern={project.pattern}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}33, transparent 70%)`,
                    }}
                  />
                  {/* Project initial */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-heading text-5xl font-black opacity-[0.08]"
                      style={{ color: project.color }}
                    >
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  {/* Arrow on hover */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-obsidian-900/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowUpRight className="w-4 h-4 text-obsidian-100" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-lg font-bold text-obsidian-50 mb-2 group-hover:text-amber-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-obsidian-300 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-obsidian-700/60 text-obsidian-200 text-xs font-mono tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES
         ════════════════════════════════════════ */}
      <section id="services" className="py-24 bg-obsidian-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="// expertise"
            title="What I Offer"
            subtitle="Services I can provide"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {services.map((service, i) => {
              const colors = accentColorMap[service.accent] ?? accentColorMap.amber;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -3 }}
                  className={`group bg-obsidian-800/50 rounded-xl p-6 border border-obsidian-600/20 ${colors.border} ${colors.glow} transition-all duration-300 hover:shadow-lg cursor-default`}
                >
                  <div
                    className={`w-11 h-11 rounded-lg bg-obsidian-700/60 flex items-center justify-center mb-5 transition-colors duration-300`}
                  >
                    <service.icon
                      className={`w-5 h-5 text-obsidian-300 ${colors.icon} transition-colors duration-300`}
                    />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-obsidian-50 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-obsidian-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CONTACT
         ════════════════════════════════════════ */}
      <section id="contact" className="py-28 bg-obsidian-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber-500/80 mb-3 block">
                // contact
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-obsidian-50 mb-4">
                Let&apos;s Connect
              </h2>
              <p className="text-obsidian-200 text-lg mb-10 max-w-md mx-auto">
                I&apos;m always open to new opportunities, collaborations, or
                just a good conversation. Reach out!
              </p>
            </motion.div>

            {/* Terminal-style email */}
            <motion.div variants={fadeUp} custom={1}>
              <a
                href="mailto:seidumahfuz@gmail.com"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-obsidian-800/80 border border-obsidian-600/30 rounded-xl hover:border-amber-500/30 hover:bg-obsidian-800 transition-all duration-300 mb-12 cursor-pointer"
              >
                <span className="font-mono text-amber-500 text-sm">$</span>
                <span className="font-mono text-obsidian-100 text-sm group-hover:text-amber-400 transition-colors">
                  mail seidumahfuz@gmail.com
                </span>
                <span className="inline-block w-[2px] h-4 bg-amber-500 animate-cursor-blink" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex justify-center items-center gap-5"
            >
              {[
                {
                  href: "https://www.linkedin.com/in/agbor-seidu-mahfuz-b98398288",
                  icon: Linkedin,
                  label: "LinkedIn",
                  hoverColor: "hover:text-blue-400 hover:border-blue-400/30",
                },
                {
                  href: "https://twitter.com/MahfuzSeidu",
                  icon: Twitter,
                  label: "Twitter / X",
                  hoverColor: "hover:text-obsidian-100 hover:border-obsidian-400/30",
                },
                {
                  href: "https://github.com/Mahfuzy",
                  icon: Github,
                  label: "GitHub",
                  hoverColor: "hover:text-amber-400 hover:border-amber-400/30",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.label} profile`}
                  className={`group w-12 h-12 rounded-xl bg-obsidian-800/60 border border-obsidian-600/20 flex items-center justify-center transition-all duration-200 cursor-pointer ${social.hoverColor}`}
                >
                  <social.icon className="w-5 h-5 text-obsidian-300 group-hover:text-inherit transition-colors duration-200" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
         ════════════════════════════════════════ */}
      <footer className="py-8 bg-obsidian-900 border-t border-obsidian-600/15">
        <div className="container mx-auto px-4 text-center">
          <p className="text-obsidian-400 text-sm font-mono">
            © {new Date().getFullYear()}{" "}
            <span className="text-obsidian-200">Mahfuz Seidu Agbor</span>. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
