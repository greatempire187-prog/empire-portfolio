'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#github', label: 'GitHub' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const skillGroups = [
  { name: 'HTML5', level: 92 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript', level: 94 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 88 },
  { name: 'Python', level: 95 },
  { name: 'Node.js', level: 86 },
  { name: 'Django', level: 82 },
  { name: 'Flask', level: 84 },
  { name: 'GitHub', level: 93 },
  { name: 'MongoDB', level: 80 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'Docker', level: 78 },
  { name: 'Tailwind CSS', level: 92 },
];

const projects = [
  {
    title: 'AI SaaS Platform',
    description: 'Scalable AI-powered SaaS experience with dashboard analytics, subscription flows, and real-time insights.',
    tech: ['Next.js', 'Python', 'FastAPI', 'Tailwind'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Crypto Dashboard',
    description: 'Modern crypto portfolio manager with live charts, alerts, market signals, and secure transactions.',
    tech: ['React', 'Node.js', 'Chart.js', 'PostgreSQL'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task planner with user roles, notifications, Kanban boards, and productivity reporting.',
    tech: ['Django', 'Tailwind', 'Docker', 'REST API'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Portfolio CMS',
    description: 'Custom content management interface for marketing teams with fast deployment and editorial controls.',
    tech: ['Next.js', 'GraphQL', 'MongoDB', 'Vercel'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Python Automation Tool',
    description: 'Intelligent automation scripts for workflows, scraping, reports, and data transformation pipelines.',
    tech: ['Python', 'Flask', 'Selenium', 'APIs'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Full Stack E-commerce App',
    description: 'Premium e-commerce experience with checkout, inventory, recommendations, and secure payments.',
    tech: ['Next.js', 'Stripe', 'Node.js', 'PostgreSQL'],
    demo: '#',
    repo: '#',
  },
];

const services = [
  'Full Stack Web Development',
  'Frontend Development',
  'Backend Development',
  'Python Development',
  'API Integration',
  'AI Automation',
  'Technical Consulting',
];

const experience = [
  {
    role: 'Freelance Full Stack Developer',
    period: '2024 - Present',
    company: 'Remote Collaborations',
    detail: 'Delivered polished web apps, backend APIs, and automation solutions for clients across finance, health, and SaaS.',
  },
  {
    role: 'AI Product Engineer',
    period: '2023 - 2024',
    company: 'Innovate Labs',
    detail: 'Built AI workflows, prompt libraries, and ML-backed automation tools for enterprise partners.',
  },
  {
    role: 'Open Source Contributor',
    period: '2022 - Present',
    company: 'Community Projects',
    detail: 'Contributed code, documentation, and integration guides for high-impact developer tooling and libraries.',
  },
];

const githubStats = [
  { label: 'Contributions', value: '1.2K+' },
  { label: 'Repositories', value: '24 Active' },
  { label: 'Followers', value: '430+' },
  { label: 'Languages', value: '9 Core' },
];

const githubLanguages = [
  { name: 'Python', weight: 98 },
  { name: 'JavaScript', weight: 92 },
  { name: 'Next.js', weight: 88 },
  { name: 'Django', weight: 80 },
  { name: 'Docker', weight: 74 },
];

const githubRepos = [
  {
    name: 'AI SaaS Platform',
    description: 'AI-enabled enterprise SaaS with analytics, auth, and workflow orchestration.',
    link: '#',
  },
  {
    name: 'Portfolio CMS',
    description: 'Custom CMS for marketing campaigns and dynamic portfolio updates.',
    link: '#',
  },
  {
    name: 'Python Automation Tool',
    description: 'Script library for automation, scraping, and intelligent reporting.',
    link: '#',
  },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/greatempire187' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/greatempire187' },
  { label: 'Telegram', href: 'https://t.me/heartgood042' },
];

function AnimatedTyping({ phrases }) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const isComplete = !deleting && subIndex === current.length;
    const isDeleted = deleting && subIndex === 0;
    let delay = deleting ? 50 : 120;

    if (isComplete) {
      delay = 1500;
      setDeleting(true);
    } else if (isDeleted) {
      setDeleting(false);
      setIndex((prev) => prev + 1);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(current.slice(0, subIndex));
    }, delay);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, phrases]);

  return (
    <span className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 font-semibold">
      {text}
      <span className={`ml-1 h-6 ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  );
}

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 650);
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem('great-empire-theme');
    if (saved) {
      setDarkMode(saved === 'dark');
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('great-empire-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const cursor = document.querySelector('.cursor-dot');
    if (!cursor) return;

    function handleMouseMove(event) {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    }

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const themeClasses = darkMode
    ? 'bg-slate-950 text-slate-100'
    : 'bg-slate-50 text-slate-950';
  const surfaceClasses = darkMode
    ? 'bg-slate-900/70 border-slate-700/60 text-slate-100'
    : 'bg-white/80 border-slate-200/70 text-slate-950';
  const accent = darkMode ? 'from-emerald-400 via-cyan-400 to-sky-500' : 'from-cyan-500 via-sky-500 to-indigo-500';

  const progressCards = useMemo(
    () =>
      skillGroups.map((skill) => (
        <div key={skill.name} className={`group rounded-3xl border p-5 shadow-glow ${surfaceClasses}`}>
          <h3 className="text-lg font-semibold">{skill.name}</h3>
          <div className="mt-4 h-3 rounded-full bg-slate-800/40 overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${accent}`}
              style={{ width: `${skill.level}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-slate-400 group-hover:text-slate-200">{skill.level}% proficiency</p>
        </div>
      )),
    [accent, surfaceClasses]
  );

  return (
    <main className={`${themeClasses} min-h-screen overflow-x-hidden`}>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl transition-opacity duration-500">
          <div className="flex flex-col items-center gap-4 text-center text-slate-100">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-emerald-400 border-slate-700" />
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-300/90">Loading the Empire...</p>
          </div>
        </div>
      )}
      <div className="cursor-dot pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full border border-white/70 bg-cyan-400/80 opacity-90 mix-blend-screen transition-transform duration-150" />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.18em] text-emerald-300">greatempire dev</a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-full border border-slate-600/70 bg-slate-800/70 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-700"
            >
              {darkMode ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_32%),radial-gradient(circle_at_20%_10%,_rgba(16,185,129,0.16),_transparent_22%),linear-gradient(180deg,_rgba(15,23,42,0.9),_rgba(15,23,42,0.95))]" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-24 top-52 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-7"
            >
              <span className="text-sm uppercase tracking-[0.4em] text-emerald-300/80">Full Stack Developer</span>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  greatempire dev
                </h1>
                <p className="text-xl leading-9 text-slate-300 sm:text-2xl">
                  Full Stack Developer | Python Developer | AI Engineer
                </p>
                <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                  I build scalable web applications, backend systems, automation tools, and AI-powered solutions with clean architecture, fast performance, and polished developer experiences.
                </p>
                <div className="mt-2 text-lg font-semibold">
                  <AnimatedTyping phrases={['Building systems that scale.', 'Automating workflows with Python.', 'Designing intelligent developer tools.']} />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-emerald-300">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:border-emerald-300 hover:text-white">
                  Contact Me
                </a>
                <a href="/great-empire-resume.pdf" download className="inline-flex items-center justify-center rounded-full bg-slate-800/90 px-6 py-3 text-sm text-slate-100 transition hover:bg-slate-700">
                  Download Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className={`rounded-[2rem] border ${surfaceClasses} p-1 shadow-glow`}
            >
              <div className={`relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br ${accent} p-1`}>
                <div className="h-full rounded-[1.6rem] bg-slate-950 p-8 shadow-2xl shadow-slate-950/50 md:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Featured Project</p>
                      <h2 className="mt-4 text-3xl font-semibold text-white">AI SaaS Platform</h2>
                    </div>
                    <div className="rounded-3xl bg-slate-800/80 px-4 py-3 text-sm text-slate-200">
                      Live • Secure
                    </div>
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {['Analytics', 'Predictive AI', 'Fast API', 'Responsive UI'].map((item) => (
                      <div key={item} className="rounded-3xl border border-slate-700/60 bg-slate-950/80 px-4 py-5 text-sm text-slate-300 shadow-xl shadow-slate-950/20">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {['Data Pipeline', 'Secure Auth', 'Cloud Ready'].map((item) => (
                      <div key={item} className="rounded-3xl bg-slate-900/70 px-4 py-4 text-center text-sm text-slate-300 ring-1 ring-slate-700/50 shadow-inner shadow-slate-950/20">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="relative border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <p className="text-sm uppercase tracking-[0.42em] text-emerald-300/80">About me</p>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">Professional digital craftsmanship.</h2>
              <p className="max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                I specialize in creating polished full-stack solutions, backend systems, automation tooling, and AI-enabled products. My code is built for reliability, speed, and maintainability, with a strong focus on developer ergonomics and real business outcomes.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Full Stack Development',
                  'Backend Engineering',
                  'Python Programming',
                  'AI Prompt Engineering',
                  'Technical Writing',
                  'Problem Solving',
                  'API Development',
                ].map((item) => (
                  <div key={item} className={`rounded-3xl border p-5 ${surfaceClasses} shadow-glow`}>
                    <p className="text-sm font-semibold text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`rounded-[2rem] border ${surfaceClasses} p-8 shadow-glow`}
            >
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-300/80">Growth mindset</p>
                <h3 className="text-3xl font-semibold text-white">Crafting systems that scale and delight.</h3>
                <p className="text-slate-300 leading-8">
                  I engineer user-first products with a premium developer aesthetic. From backend APIs to polished interfaces, I deliver work that feels modern, fast, and production-ready.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {['Performance', 'Reliability', 'Automation', 'AI', 'Security', 'Scalability'].map((skill) => (
                    <div key={skill} className="rounded-3xl bg-slate-950/80 p-4 text-sm text-slate-300 ring-1 ring-slate-700/70">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/80">Skills</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Technical stack & expertise.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              A curated skill set built around modern web experiences, backend engineering, Python automation, and cloud-enabled development.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{progressCards}</div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/80">Projects</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Premium product showcase.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className={`group relative overflow-hidden rounded-[2rem] border ${surfaceClasses} p-6 shadow-glow`}
              >
                <div className="mb-6 h-48 rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-4 shadow-inner shadow-slate-950/30">
                  <div className="flex h-full items-end rounded-3xl bg-slate-900/70 p-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Project preview</p>
                      <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-700/80 px-4 py-2 text-sm text-slate-100 transition hover:border-emerald-300 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="github" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/80">GitHub</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Open-source impact.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Real contributions, language mastery, and a portfolio of repositories built for scale and collaboration.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className={`rounded-[2rem] border ${surfaceClasses} p-8 shadow-glow`}>
              <h3 className="text-xl font-semibold text-white">Contribution graph</h3>
              <div className="mt-8 grid gap-2">
                {Array.from({ length: 6 }).map((_, row) => (
                  <div key={row} className="flex gap-2">
                    {Array.from({ length: 15 }).map((_, col) => {
                      const intensity = Math.floor(Math.random() * 5) + 1;
                      return (
                        <div
                          key={`${row}-${col}`}
                          className={`h-6 w-6 rounded-md bg-slate-700 ${intensity > 2 ? 'bg-emerald-400/70' : 'bg-slate-700/50'}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <div className={`rounded-[2rem] border ${surfaceClasses} p-8 shadow-glow`}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {githubStats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl bg-slate-900/70 p-6 text-center">
                      <p className="text-3xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`rounded-[2rem] border ${surfaceClasses} p-8 shadow-glow`}>
                <h3 className="text-xl font-semibold text-white">Repository showcase</h3>
                <div className="mt-6 space-y-4">
                  {githubRepos.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.link}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 transition hover:border-emerald-400/50 hover:bg-slate-900/90"
                    >
                      <p className="text-lg font-semibold text-white">{repo.name}</p>
                      <p className="mt-2 text-slate-400">{repo.description}</p>
                    </a>
                  ))}
                </div>
              </div>
              <div className={`rounded-[2rem] border ${surfaceClasses} p-8 shadow-glow`}>
                <h3 className="text-xl font-semibold text-white">Most used languages</h3>
                <div className="mt-6 space-y-4">
                  {githubLanguages.map((language) => (
                    <div key={language.name}>
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>{language.name}</span>
                        <span>{language.weight}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-800/60">
                        <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: `${language.weight}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/80">Services</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Built for modern product teams.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                className={`rounded-[2rem] border ${surfaceClasses} p-8 shadow-glow transition hover:-translate-y-1 hover:border-emerald-400/40`}
              >
                <p className="text-3xl">⚡</p>
                <h3 className="mt-6 text-xl font-semibold text-white">{service}</h3>
                <p className="mt-4 text-slate-400">Modern delivery, optimized architecture, and production-ready integrations for every digital initiative.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/80">Experience</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Career timeline.</h2>
          </div>
          <div className="relative border-l border-slate-700/60 pl-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                <span className="absolute -left-5 top-2 h-4 w-4 rounded-full bg-emerald-400 ring-4 ring-slate-950" />
                <div className={`rounded-[2rem] border ${surfaceClasses} p-8 shadow-glow`}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-400">{item.company}</p>
                    </div>
                    <span className="rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-300">{item.period}</span>
                  </div>
                  <p className="mt-6 text-slate-400">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`rounded-[2rem] border ${surfaceClasses} p-8 shadow-glow`}
            >
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/80">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let&apos;s build together.</h2>
              <p className="mt-6 max-w-2xl text-slate-400 leading-8">
                Reach out for project inquiries, developer collaborations, AI automation, or technical consulting. I deliver clean, modern, and production-ready solutions.
              </p>
              <div className="mt-10 space-y-4 text-sm text-slate-300">
                <div className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">Email</p>
                  <p className="mt-2 font-medium">greatempire187@mail.com</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">Telegram</p>
                  <p className="mt-2 font-medium">@heartgood042</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">Phone</p>
                  <p className="mt-2 font-medium">09118755821</p>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm text-slate-100 transition hover:border-emerald-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">greatempire dev</p>
            <p className="text-sm text-slate-400">© 2026 greatempire dev. Built for modern digital experiences.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.slice(0, 4).map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full border border-slate-700/80 bg-slate-900/90 px-5 py-3 text-sm text-slate-100 transition hover:bg-slate-800"
          >
            Back to top
          </button>
        </div>
      </footer>
    </main>
  );
}
