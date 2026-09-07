import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Menu, X, ExternalLink, ArrowUpRight, FileDown } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data — every fact below comes from the resume details, GitHub bio  */
/* and pinned repositories supplied for this build. Nothing invented. */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SKILLS = {
  Frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design", "Accessibility"],
  Backend: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  Database: ["MySQL", "MongoDB"],
  Tools: ["Git", "GitHub", "VS Code"],
};

const EXPERIENCE = [
  {
    role: "Website Developer Intern",
    company: "La Faro Pvt Ltd",
    location: "Mumbai",
    period: "Jun 2023 — Nov 2023",
    points: [
      "Built modular, reusable components in React",
      "Improved UI consistency and page load performance",
      "Implemented mobile-first, responsive layouts",
      "Collaborated closely with designers on UI decisions",
      "Used Git for version control and basic CI/CD workflows",
      "Debugged issues and handled cross-browser compatibility",
    ],
  },
  {
    role: "Data Analysis Intern",
    company: "Vestige India",
    location: "Mumbai",
    period: "Aug 2022 — Oct 2022",
    points: [
      "Cleaned and analyzed business data for reporting",
      "Built dashboards in Power BI for business insights",
      "Worked in Excel for data processing and report automation",
      "Maintained data consistency across reports",
    ],
  },
];

const EDUCATION = [
  {
    degree: "B.E. Electronics & Telecommunication",
    school: "Mumbai University",
    location: "Mumbai",
    date: "Jun 2023",
  },
  {
    degree: "Full Stack Development (Java / HTML / CSS)",
    school: "UpGrad Institute",
    location: "Mumbai",
    date: "Nov 2024",
  },
];

const PROJECTS = [
  {
    name: "Task Tracker",
    repoName: "tasktracker-",
    tagline: "A JavaScript task tracking application.",
    tech: ["JavaScript"],
    github: "https://github.com/supritchavan28/tasktracker-",
    demo: null,
    hasCaseStudy: true,
    caseStudy: {
      overview: "A task tracking application built with JavaScript, designed to help users organize and keep track of their day-to-day tasks.",
      problem: "Keeping track of everyday tasks without a dedicated place to add, view, and manage them.",
      solution: "A lightweight, JavaScript-based tracker for logging and managing tasks.",
      tech: ["JavaScript"],
      note: "Full implementation details, code structure, and commit history are available in the GitHub repository below.",
    },
  },
  {
    name: "index.html",
    repoName: "index.html",
    tagline: "A front-end repository on GitHub.",
    tech: ["HTML"],
    github: "https://github.com/supritchavan28/index.html",
    demo: null,
    hasCaseStudy: false,
  },
];

const GITHUB_URL = "https://github.com/supritchavan28";
const LINKEDIN_URL = "https://www.linkedin.com/in/suprit-chavan-0302961a7/";
const EMAIL = "supritchavan028@gmail.com";

const TERMINAL_LINES = [
  { prompt: "suprit@dev:~$ ", text: "whoami" },
  { output: "Full-Stack JavaScript Developer" },
  { prompt: "suprit@dev:~$ ", text: "cat stack.txt" },
  { output: "React · Node.js · Express · MongoDB · MySQL" },
  { prompt: "suprit@dev:~$ ", text: "" },
];

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function SectionLabel({ path }) {
  return <div className="font-mono text-sm text-accent mb-3">{path}</div>;
}

function Chip({ children }) {
  return (
    <span
      className="font-body text-sm px-3 py-1.5 rounded-md border inline-block"
      style={{ borderColor: "#23272D", color: "#ECEAE4", backgroundColor: "#14171C" }}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                  */
/* ------------------------------------------------------------------ */

function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backgroundColor: "rgba(11,13,16,0.85)", backdropFilter: "blur(8px)", borderColor: "#23272D" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="font-display font-semibold text-lg text-primary">
          Suprit Chavan
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="font-body text-sm text-secondary hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-secondary hover:text-primary transition-colors">
            <Github size={19} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-secondary hover:text-primary transition-colors">
            <Linkedin size={19} />
          </a>
          <a
            href="#"
            className="font-body text-sm px-4 py-2 rounded-md border transition-colors flex items-center gap-1.5"
            style={{ borderColor: "#D9A94F", color: "#D9A94F" }}
          >
            <FileDown size={15} /> Resume
          </a>
        </div>

        <button className="md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: "#23272D", backgroundColor: "#0B0D10" }}>
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="font-body text-sm text-secondary hover:text-primary text-left">
              {l.label}
            </button>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-secondary"><Github size={19} /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-secondary"><Linkedin size={19} /></a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function Terminal() {
  const [visibleChars, setVisibleChars] = useState(0);
  const fullScript = TERMINAL_LINES.map((l) => (l.prompt ? l.prompt + l.text : l.output)).join("\n");

  useEffect(() => {
    if (visibleChars >= fullScript.length) return;
    const t = setTimeout(() => setVisibleChars((v) => v + 1), 22);
    return () => clearTimeout(t);
  }, [visibleChars, fullScript.length]);

  const shown = fullScript.slice(0, visibleChars);
  const lines = shown.split("\n");

  return (
    <div
      className="rounded-lg border w-full max-w-md overflow-hidden animate-fade-up"
      style={{ borderColor: "#23272D", backgroundColor: "#14171C", animationDelay: "0.15s" }}
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "#23272D" }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4B4F56" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4B4F56" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4B4F56" }} />
        <span className="font-mono text-xs text-secondary ml-2">terminal</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[180px]">
        {lines.map((line, i) => {
          const isOutput = line && !line.startsWith("suprit@dev:~$");
          return (
            <div key={i} style={{ color: isOutput ? "#D9A94F" : "#ECEAE4" }}>
              {line}
              {i === lines.length - 1 && <span className="cursor-blink">▍</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="pt-40 pb-24 px-6 max-w-6xl mx-auto min-h-[85vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-14 items-center w-full">
        <div className="animate-fade-up">
          <div className="font-mono text-sm text-accent mb-4">~/suprit-chavan</div>
          <p className="font-body text-secondary text-lg mb-2">Hi, I'm Suprit Chavan</p>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-primary leading-tight mb-6">
            Full-Stack JavaScript<br />Developer
          </h1>
          <p className="font-body text-secondary text-base leading-relaxed mb-9 max-w-md">
            I build responsive, scalable web applications — from modular React interfaces to Node.js and Express APIs — with attention to clean architecture and usable design.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-9">
            <button
              onClick={() => scrollTo("projects")}
              className="font-body text-sm font-medium px-5 py-3 rounded-md"
              style={{ backgroundColor: "#D9A94F", color: "#0B0D10" }}
            >
              View my work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="font-body text-sm font-medium px-5 py-3 rounded-md border"
              style={{ borderColor: "#23272D", color: "#ECEAE4" }}
            >
              Let's connect
            </button>
          </div>
          <div className="flex items-center gap-5">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary flex items-center gap-1.5 text-sm font-body">
              <Github size={17} /> GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary flex items-center gap-1.5 text-sm font-body">
              <Linkedin size={17} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Terminal />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                                */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: "#181B20" }}>
      <SectionLabel path="~/about" />
      <div className="grid md:grid-cols-3 gap-12">
        <h2 className="font-display font-semibold text-3xl text-primary md:col-span-1">About</h2>
        <div className="md:col-span-2 max-w-2xl">
          <p className="font-body text-secondary leading-relaxed mb-5">
            I'm a full-stack JavaScript developer based in Mumbai, focused on building web applications with
            React on the front end and Node.js / Express on the back end. During my internship at La Faro Pvt
            Ltd, I built modular React components, worked on improving page performance, and shipped
            mobile-first responsive layouts in collaboration with designers — alongside version control,
            basic CI/CD, debugging, and cross-browser compatibility work.
          </p>
          <p className="font-body text-secondary leading-relaxed mb-8">
            Earlier, as a Data Analysis Intern at Vestige India, I worked with Power BI and Excel to clean
            data and build business dashboards — an experience that shaped how I think about structuring and
            presenting information, which carries into how I approach building applications today.
          </p>
          <a
            href="#"
            className="font-body text-sm font-medium inline-flex items-center gap-2 px-5 py-3 rounded-md border"
            style={{ borderColor: "#D9A94F", color: "#D9A94F" }}
          >
            <FileDown size={15} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Skills                                                               */
/* ------------------------------------------------------------------ */

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: "#181B20" }}>
      <SectionLabel path="~/skills" />
      <h2 className="font-display font-semibold text-3xl text-primary mb-12">Technical skills</h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-display font-medium text-lg text-primary mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2.5">
              {items.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Experience                                                           */
/* ------------------------------------------------------------------ */

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: "#181B20" }}>
      <SectionLabel path="~/experience" />
      <h2 className="font-display font-semibold text-3xl text-primary mb-14">Experience</h2>
      <div className="space-y-14">
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="grid md:grid-cols-4 gap-6 relative pl-6 border-l" style={{ borderColor: "#23272D" }}>
            <span
              className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: "#D9A94F" }}
            />
            <div className="md:col-span-1">
              <p className="font-mono text-sm text-secondary">{job.period}</p>
              <p className="font-body text-sm text-secondary mt-1">{job.location}</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="font-display font-semibold text-xl text-primary">{job.role}</h3>
              <p className="font-body text-accent text-sm mb-4">{job.company}</p>
              <ul className="space-y-2">
                {job.points.map((p, j) => (
                  <li key={j} className="font-body text-secondary text-sm leading-relaxed flex gap-2">
                    <span style={{ color: "#D9A94F" }}>—</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Projects                                                             */
/* ------------------------------------------------------------------ */

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const cs = project.caseStudy;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-6"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        className="rounded-lg border max-w-lg w-full p-8 max-h-[85vh] overflow-y-auto"
        style={{ backgroundColor: "#14171C", borderColor: "#23272D" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <h3 className="font-display font-semibold text-2xl text-primary">{project.name}</h3>
          <button onClick={onClose} className="text-secondary hover:text-primary">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <p className="font-mono text-xs text-accent mb-1.5">Overview</p>
            <p className="font-body text-secondary text-sm leading-relaxed">{cs.overview}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-accent mb-1.5">Problem</p>
            <p className="font-body text-secondary text-sm leading-relaxed">{cs.problem}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-accent mb-1.5">Solution</p>
            <p className="font-body text-secondary text-sm leading-relaxed">{cs.solution}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-accent mb-1.5">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {cs.tech.map((t) => <Chip key={t}>{t}</Chip>)}
            </div>
          </div>
          <p className="font-body text-secondary text-xs leading-relaxed italic">{cs.note}</p>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="font-body text-sm font-medium inline-flex items-center gap-2 px-5 py-3 rounded-md mt-2"
            style={{ backgroundColor: "#D9A94F", color: "#0B0D10" }}
          >
            <Github size={16} /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="rounded-lg border p-7 flex flex-col justify-between transition-colors hover:border-accent"
      style={{ backgroundColor: "#14171C", borderColor: "#23272D" }}
    >
      <div>
        <h3 className="font-display font-semibold text-xl text-primary mb-2">{project.name}</h3>
        <p className="font-body text-secondary text-sm leading-relaxed mb-5">{project.tagline}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => <Chip key={t}>{t}</Chip>)}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="font-body text-sm text-secondary hover:text-primary flex items-center gap-1.5"
        >
          <Github size={16} /> Repository
        </a>
        {project.hasCaseStudy && (
          <button
            onClick={() => onOpen(project)}
            className="font-body text-sm text-accent flex items-center gap-1"
          >
            Case study <ArrowUpRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const [active, setActive] = useState(null);
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: "#181B20" }}>
      <SectionLabel path="~/projects" />
      <h2 className="font-display font-semibold text-3xl text-primary mb-4">Projects</h2>
      <p className="font-body text-secondary mb-12 max-w-xl">
        A selection of my work, pulled directly from my GitHub repositories.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} project={p} onOpen={setActive} />
        ))}
      </div>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        className="font-body text-sm text-secondary hover:text-primary inline-flex items-center gap-1.5"
      >
        More repositories on GitHub <ArrowUpRight size={14} />
      </a>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Education                                                            */
/* ------------------------------------------------------------------ */

function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: "#181B20" }}>
      <SectionLabel path="~/education" />
      <h2 className="font-display font-semibold text-3xl text-primary mb-14">Education</h2>
      <div className="space-y-10">
        {EDUCATION.map((ed, i) => (
          <div key={i} className="grid md:grid-cols-4 gap-6 relative pl-6 border-l" style={{ borderColor: "#23272D" }}>
            <span
              className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: "#D9A94F" }}
            />
            <div className="md:col-span-1">
              <p className="font-mono text-sm text-secondary">{ed.date}</p>
              <p className="font-body text-sm text-secondary mt-1">{ed.location}</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="font-display font-semibold text-lg text-primary">{ed.degree}</h3>
              <p className="font-body text-accent text-sm">{ed.school}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* GitHub                                                               */
/* ------------------------------------------------------------------ */

function GithubSection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: "#181B20" }}>
      <div className="rounded-lg border p-10 md:p-14 text-center" style={{ backgroundColor: "#14171C", borderColor: "#23272D" }}>
        <SectionLabel path="~/github" />
        <h2 className="font-display font-semibold text-3xl text-primary mb-4">Explore my code</h2>
        <p className="font-body text-secondary mb-10 max-w-lg mx-auto">
          Every project I build lives on GitHub — commits, structure, and all.
        </p>
        <div className="flex justify-center gap-16 mb-10">
          <div>
            <p className="font-display font-semibold text-3xl text-accent">6</p>
            <p className="font-body text-sm text-secondary mt-1">Public repositories</p>
          </div>
          <div>
            <p className="font-display font-semibold text-3xl text-accent">7</p>
            <p className="font-body text-sm text-secondary mt-1">Stars earned</p>
          </div>
        </div>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="font-body text-sm font-medium inline-flex items-center gap-2 px-6 py-3 rounded-md"
          style={{ backgroundColor: "#D9A94F", color: "#0B0D10" }}
        >
          <Github size={16} /> View GitHub profile
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                              */
/* ------------------------------------------------------------------ */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: "#181B20" }}>
      <SectionLabel path="~/contact" />
      <h2 className="font-display font-semibold text-3xl text-primary mb-4">Let's build something together</h2>
      <p className="font-body text-secondary mb-12 max-w-lg">
        Have a role, a project, or just want to talk shop — my inbox is open.
      </p>

      <div className="grid md:grid-cols-2 gap-14">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-body text-sm text-secondary block mb-2">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border px-4 py-3 font-body text-sm text-primary outline-none"
              style={{ backgroundColor: "#14171C", borderColor: "#23272D" }}
            />
          </div>
          <div>
            <label className="font-body text-sm text-secondary block mb-2">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border px-4 py-3 font-body text-sm text-primary outline-none"
              style={{ backgroundColor: "#14171C", borderColor: "#23272D" }}
            />
          </div>
          <div>
            <label className="font-body text-sm text-secondary block mb-2">Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border px-4 py-3 font-body text-sm text-primary outline-none resize-none"
              style={{ backgroundColor: "#14171C", borderColor: "#23272D" }}
            />
          </div>
          <button
            type="submit"
            className="font-body text-sm font-medium px-6 py-3 rounded-md"
            style={{ backgroundColor: "#D9A94F", color: "#0B0D10" }}
          >
            Send message
          </button>
        </form>

        <div className="space-y-5">
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 font-body text-secondary hover:text-primary">
            <Mail size={18} /> {EMAIL}
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-body text-secondary hover:text-primary">
            <Linkedin size={18} /> linkedin.com/in/suprit-chavan
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-body text-secondary hover:text-primary">
            <Github size={18} /> github.com/supritchavan28
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: "#181B20" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-primary">Suprit Chavan</p>
          <p className="font-body text-sm text-secondary">Full-Stack JavaScript Developer</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary"><Github size={18} /></a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary"><Linkedin size={18} /></a>
          <a href={`mailto:${EMAIL}`} className="text-secondary hover:text-primary"><Mail size={18} /></a>
        </div>
        <p className="font-body text-xs text-secondary">© {year} Suprit Chavan. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                  */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-base" style={{ backgroundColor: "#0B0D10" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display{font-family:'Space Grotesk',sans-serif;}
        .font-body{font-family:'Inter',sans-serif;}
        .font-mono{font-family:'JetBrains Mono',monospace;}
        .bg-base{background-color:#0B0D10;}
        .text-primary{color:#ECEAE4;}
        .text-secondary{color:#9CA3AC;}
        .text-accent{color:#D9A94F;}
        .hover\\:border-accent:hover{border-color:#D9A94F !important;}
        @keyframes blink{0%,49%{opacity:1}50%,100%{opacity:0}}
        .cursor-blink{animation:blink 1s step-start infinite;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        .animate-fade-up{animation:fadeUp .6s ease-out both;}
        html{scroll-behavior:smooth;}
        input:focus, textarea:focus { border-color: #D9A94F !important; }
      `}</style>

      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <GithubSection />
      <Contact />
      <Footer />
    </div>
  );
}
