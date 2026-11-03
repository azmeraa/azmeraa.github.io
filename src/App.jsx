
import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Github, Mail, MapPin, Menu, X,
  Database, BrainCircuit, ChartNoAxesCombined, Server, ShieldCheck,
  Workflow, Code2, ExternalLink, BriefcaseBusiness, GraduationCap,
  FileText, Sparkles, Phone, Download
} from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'FraudShield',
    category: 'Applied machine learning',
    description: 'An educational fraud-detection prototype using a public European credit-card transaction dataset. Compared a logistic-regression baseline with XGBoost and exposed predictions through a Dockerized FastAPI service.',
    stack: ['Python', 'XGBoost', 'Scikit-learn', 'FastAPI', 'Docker'],
    result: 'Held-out test F1: 0.8457 · ROC-AUC: 0.9788',
    note: 'Prototype only — not connected to a live financial system.',
    link: 'https://github.com/azmeraa/fraudshield-group25',
    icon: ShieldCheck,
  },
  {
    number: '02',
    name: 'AI Email Task Agent',
    category: 'AI automation',
    description: 'A local-first workflow that retrieves emails, categorizes messages with Llama 3 through Ollama, extracts action items and priorities, and creates a daily task brief using SQLite.',
    stack: ['Python', 'Ollama', 'Llama 3', 'SQLite', 'IMAP'],
    result: 'Modular email-to-task processing pipeline',
    note: 'Designed as a personal automation project; email-server and deployment settings still matter for privacy.',
    link: 'https://github.com/azmeraa/AI-Email-Agent',
    icon: BrainCircuit,
  },
  {
    number: '03',
    name: 'TASK-CRE-63',
    category: 'Data engineering',
    description: 'A data-ingestion and normalization pipeline for real-estate appraisal metrics, with validation, deterministic keys, idempotent PostgreSQL upserts and a separate geospatial validation module.',
    stack: ['Python', 'PostgreSQL', 'PostGIS', 'SQLAlchemy', 'Docker', 'pytest'],
    result: '19 tests passed · repeated test load remained idempotent',
    note: 'Validated with synthetic fixtures; not an official benchmark dataset or shared production integration.',
    link: 'https://github.com/azmeraa/TASK-CRE-63',
    icon: Workflow,
  },
  {
    number: '04',
    name: 'FIFA 21 Data Analysis',
    category: 'Data analytics',
    description: 'Exploratory analysis of FIFA 21 data, using Python data tools to inspect, clean, summarize and visualize information.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    result: 'Exploratory data analysis and visualizations',
    note: 'A portfolio analysis project.',
    link: 'https://github.com/azmeraa/FIFA21-Data-Analysis',
    icon: ChartNoAxesCombined,
  },
  {
    number: '05',
    name: 'Banking Data Analysis Using SQL',
    category: 'SQL & analytics',
    description: 'A SQL-focused project exploring banking data and demonstrating relational querying and analytical thinking.',
    stack: ['SQL'],
    result: 'SQL-based banking data analysis',
    note: 'See the repository for implementation details.',
    link: 'https://github.com/azmeraa/banking-data-analysis-sql',
    icon: Database,
  },
  {
    number: '06',
    name: 'Interactive Dev Cards',
    category: 'Frontend development',
    description: 'A small web-development portfolio project. Visit the repository to explore the implementation.',
    stack: ['Web development'],
    result: 'Interactive development cards',
    note: 'Project details are intentionally kept brief until a fuller project description is added.',
    link: 'https://github.com/azmeraa/interactive-dev-cards',
    icon: Code2,
  },
]

const skills = [
  { title: 'Database systems', items: ['Oracle Database 12c / 19c', 'Microsoft SQL Server', 'PostgreSQL', 'SQL & PL/SQL', 'RMAN backup & recovery', 'Database security'] },
  { title: 'Data & analytics', items: ['Python', 'Pandas & NumPy', 'Data cleaning', 'Exploratory analysis', 'Matplotlib & Seaborn', 'Data validation'] },
  { title: 'Applied AI', items: ['Machine learning fundamentals', 'Scikit-learn', 'XGBoost', 'LLMs & Ollama', 'AI workflow automation', 'Model evaluation'] },
  { title: 'Platforms & tools', items: ['Linux & Windows Server', 'Docker', 'FastAPI', 'Git & GitHub', 'SQLAlchemy', 'pytest'] },
]

const experience = [
  { role: 'Database Administration Officer I', org: 'Hibret Bank', period: 'Apr 2025 – Present', detail: 'Enterprise database administration in a banking environment, building on earlier database administration responsibilities at the bank.' },
  { role: 'Associate Database Administration Officer', org: 'Hibret Bank', period: 'Aug 2022 – Apr 2025', detail: 'Supported database administration, operational reliability, security and performance in an enterprise banking environment.' },
  { role: 'Database Administrator', org: 'Ethiopian Ministry of Revenue', period: 'Mar 2020 – Jul 2022', detail: 'Supported database operations and enterprise information systems in a government environment.' },
  { role: 'Database Administrator', org: 'Addis Ababa Housing Development Office', period: 'Dec 2015 – Mar 2020', detail: 'Built a foundation in database administration and IT systems support.' },
]

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {text && <p className="mt-4 leading-7 text-slate-400">{text}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const nav = [
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <div className="site-grid" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink/85 backdrop-blur-xl">
        <div className="container-shell flex h-[76px] items-center justify-between">
          <a href="#home" className="font-display text-lg font-bold tracking-tight">
            AA<span className="text-mint">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(([label, href]) => (
              <a key={label} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden rounded-full border border-mint/40 px-5 py-2.5 text-sm font-semibold text-mint transition hover:bg-mint hover:text-ink md:inline-flex">
            Let’s connect <ArrowUpRight size={15} className="ml-2" />
          </a>

          <button
            className="rounded-lg border border-line p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-line bg-panel px-6 py-4 md:hidden">
            {nav.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu} className="block py-3 text-slate-300">
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* HOME */}
        <section id="home" className="relative flex min-h-[760px] items-center pb-20 pt-36">
          <div className="container-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/[0.07] px-4 py-2 text-xs font-semibold tracking-wide text-mint">
                <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_#75e0c0]" />
                DATABASE ADMINISTRATION · DATA · APPLIED AI
              </div>

              <p className="mb-4 font-medium text-slate-400">Hello, I’m</p>

              <h1 className="font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-[76px]">
                Azmera Abebe<br />
                <span className="gradient-text">Teshale.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I build dependable data foundations and explore intelligent solutions that turn information into practical value.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-slate-500">
                An IT and database administration professional with 10+ years of experience across banking and government, now expanding into data engineering, analytics and applied AI through hands-on projects.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center rounded-full bg-gradient-to-r from-mint to-sky px-6 py-3.5 text-sm font-extrabold text-ink shadow-lg shadow-mint/10 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-glow">
                  Explore my work <ArrowUpRight size={17} className="ml-2" />
                </a>
                <a href="#contact" className="inline-flex items-center rounded-full border border-sky/50 bg-sky/10 px-6 py-3.5 text-sm font-bold text-sky transition duration-300 hover:-translate-y-1 hover:border-sky hover:bg-sky hover:text-ink">
                  Contact me <Mail size={16} className="ml-2" />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-mint" /> Addis Ababa, Ethiopia
                </span>
                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness size={15} className="text-mint" /> Open to opportunities
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[390px]">
              <div className="absolute -inset-8 rounded-full bg-mint/[0.07] blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-panel to-[#0b1220] p-7 shadow-2xl">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[.2em] text-slate-500">PROFILE / 001</span>
                  <Sparkles className="text-mint" size={19} />
                </div>

                <div className="mx-auto flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-2 border-mint/50 bg-gradient-to-br from-mint/20 to-sky/20 text-4xl font-bold text-mint shadow-glow">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg.png`}
                    alt="Portrait of Azmera Abebe Teshale"
                    className="h-full w-full object-cover object-center"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                      event.currentTarget.parentElement.textContent = 'AA'
                    }}
                  />
                </div>

                <div className="mt-8 text-center">
                  <h2 className="font-display text-2xl font-bold">Technology professional</h2>
                  <p className="mt-2 text-sm text-slate-400">Database · Data · AI</p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-line bg-ink/60 p-4">
                    <p className="font-display text-2xl font-bold text-mint">10+</p>
                    <p className="mt-1 text-xs text-slate-500">Years in IT</p>
                  </div>
                  <div className="rounded-2xl border border-line bg-ink/60 p-4">
                    <p className="font-display text-2xl font-bold text-sky">06</p>
                    <p className="mt-1 text-xs text-slate-500">Featured projects</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-3 text-xs text-slate-500">
                  <span className="h-px flex-1 bg-line" /> ALWAYS LEARNING <span className="h-px flex-1 bg-line" />
                </div>
              </div>

              <div className="absolute -right-5 top-24 hidden rounded-xl border border-line bg-panel px-4 py-3 shadow-xl sm:block">
                <Database size={18} className="text-mint" />
                <span className="mt-2 block text-xs text-slate-300">Reliable data systems</span>
              </div>

              <div className="absolute -bottom-5 -left-7 hidden rounded-xl border border-line bg-panel px-4 py-3 shadow-xl sm:block">
                <BrainCircuit size={18} className="text-sky" />
                <span className="mt-2 block text-xs text-slate-300">Applied AI projects</span>
              </div>
            </div>
          </div>

          <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs tracking-widest text-slate-600 md:flex">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-wrap border-y border-white/[0.05] bg-white/[0.015]">
          <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading
              eyebrow="01 / ABOUT"
              title="Experience grounded in reliability. Curiosity directed toward what’s next."
            />

            <div className="space-y-5 text-[15px] leading-8 text-slate-400">
              <p>
                I am an Information Technology professional with more than a decade of experience supporting enterprise database environments in Ethiopia’s banking and public sectors. My work has focused on dependable database operations, performance, access management, data integrity and production support.
              </p>
              <p>
                Alongside my professional work, I have been building practical projects in Python, data processing, machine learning and LLM-powered automation. I enjoy connecting strong data foundations with useful applications that solve real problems.
              </p>
              <p>
                My current direction brings together <span className="font-semibold text-slate-200">database expertise, data engineering, analytics and applied AI</span> — while continuing to learn, experiment and improve through hands-on work.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-panel/70 p-5">
                  <GraduationCap className="mb-3 text-mint" />
                  <p className="font-semibold text-slate-200">BSc in Information Technology</p>
                  <p className="mt-1 text-sm text-slate-500">Wollo University · 2011–2015</p>
                </div>
                <div className="rounded-2xl border border-line bg-panel/70 p-5">
                  <MapPin className="mb-3 text-mint" />
                  <p className="font-semibold text-slate-200">Based in Addis Ababa</p>
                  <p className="mt-1 text-sm text-slate-500">Ethiopia · Open to international opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section-wrap">
          <div className="container-shell">
            <SectionHeading
              eyebrow="02 / EXPERIENCE"
              title="A decade supporting critical systems."
              text="Professional experience across banking and government, with a focus on enterprise database administration."
            />

            <div className="max-w-4xl">
              {experience.map((item) => (
                <div key={item.role + item.org} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="grid gap-2 pb-10 md:grid-cols-[1fr_auto]">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{item.role}</h3>
                      <p className="mt-1 text-mint">{item.org}</p>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">{item.detail}</p>
                    </div>
                    <span className="text-sm text-slate-500 md:pt-1">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section-wrap border-y border-white/[0.05] bg-white/[0.015]">
          <div className="container-shell">
            <SectionHeading
              eyebrow="03 / TOOLKIT"
              title="Skills & technologies."
              text="A practical toolkit built through enterprise IT experience, training and hands-on projects. Skill depth varies by area; my strongest professional foundation is database administration."
            />

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {skills.map((group, i) => (
                <div key={group.title} className="rounded-2xl border border-line bg-panel/60 p-6 transition hover:-translate-y-1 hover:border-mint/30">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-mint/10 text-mint">
                    {i === 0 ? <Database /> : i === 1 ? <ChartNoAxesCombined /> : i === 2 ? <BrainCircuit /> : <Server />}
                  </div>
                  <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section-wrap">
          <div className="container-shell">
            <SectionHeading
              eyebrow="04 / SELECTED WORK"
              title="Projects built by learning through doing."
              text="A selection of practical projects spanning machine learning, AI automation, data engineering, SQL and analytics. Open each repository for source code and implementation details."
            />

            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map(project => {
                const Icon = project.icon
                return (
                  <article key={project.number} className="project-card group">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-mint/20 bg-mint/[0.07] text-mint">
                        <Icon size={22} />
                      </div>
                      <span className="font-display text-sm text-slate-600">{project.number}</span>
                    </div>

                    <p className="mt-6 text-xs font-bold uppercase tracking-[.16em] text-mint">{project.category}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold">{project.name}</h3>
                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-400">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map(tag => (
                        <span key={tag} className="rounded-full border border-line bg-ink/60 px-3 py-1.5 text-[11px] text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 rounded-xl border border-line/70 bg-ink/50 p-4">
                      <p className="text-sm font-semibold text-slate-200">{project.result}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{project.note}</p>
                    </div>

                    <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mint transition group-hover:gap-3">
                      View on GitHub <ExternalLink size={15} />
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* LEARNING */}
        <section className="section-wrap border-y border-white/[0.05] bg-white/[0.015]">
          <div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading
              eyebrow="05 / LEARNING"
              title="Continuous learning, practical application."
              text="Formal education and focused training support my ongoing development in database technologies, Python and artificial intelligence."
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Oracle Database 12c Administration',
                'Oracle Data Guard Administration',
                'Oracle Real Application Clusters (RAC)',
                'Oracle Database Security',
                'PL/SQL Fundamentals',
                'Python for Data Analysis — IBM Skills Network (Jun 2026)',
                'Python for AI — ALIXX (Jun 2026)',
                'Foundations of Artificial Intelligence (Apr–May 2026)',
                'Oracle Cloud Training — ongoing',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-line bg-panel/50 p-4 text-sm leading-6 text-slate-300">
                  <FileText size={16} className="mt-1 shrink-0 text-mint" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-wrap">
          <div className="container-shell">
            <div className="relative overflow-hidden rounded-[2rem] border border-mint/20 bg-gradient-to-br from-[#142438] via-panel to-[#101827] px-7 py-14 text-center sm:px-14 sm:py-20">
              <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-mint/10 blur-3xl" />

              <div className="relative mx-auto max-w-3xl">
                <p className="eyebrow">06 / GET IN TOUCH</p>

                <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  Let’s build something <span className="gradient-text">meaningful.</span>
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                  I’m open to conversations about database administration, data engineering, analytics, applied AI projects and opportunities to collaborate.
                </p>

                {/* EMAIL */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=azmeraabebe26@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-mint via-cyan-300 to-sky px-7 py-4 text-sm font-extrabold text-ink shadow-lg shadow-mint/15 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-glow"
                  >
                    <Mail size={17} className="mr-2" />
                    Email me
                  </a>

                  {/* CV DOWNLOAD */}
                  <a
                    href="/Azmera_CV.pdf"
                    download="Azmera_Abebe_Teshale_CV.pdf"
                    className="inline-flex items-center rounded-full border border-violet-400/60 bg-violet-500/10 px-7 py-4 text-sm font-extrabold text-violet-200 transition duration-300 hover:-translate-y-1 hover:bg-violet-400 hover:text-ink"
                  >
                    <Download size={17} className="mr-2" />
                    Download My CV
                  </a>
                </div>

                {/* PHONE */}
                <div className="mt-7 flex justify-center">
                  <a
                    href="tel:+251918664908"
                    aria-label="Call Azmera"
                    title="Call Azmera"
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-slate-300 transition hover:-translate-y-1 hover:border-mint/50 hover:text-mint"
                  >
                    <Phone size={19} className="text-mint" />
                    <span className="font-medium">+251 918 664 908</span>
                  </a>
                </div>

               
{/* SOCIAL MEDIA */}
                <div className="mt-10">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-slate-500">
                    Connect with me
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a href="https://github.com/azmeraa" target="_blank" rel="noopener noreferrer"
                      aria-label="GitHub" title="GitHub"
                      className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#24292f] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-white/10">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>
                      </svg>
                    </a>
                    <a href="https://web.facebook.com/Azmerabebe" target="_blank" rel="noopener noreferrer"
                      aria-label="Facebook" title="Facebook"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1877F2]/40 bg-[#1877F2] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-[#1877F2]/30">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/azmerabebe" target="_blank" rel="noopener noreferrer"
                      aria-label="Instagram" title="Instagram"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-400/30 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/30">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                      </svg>
                    </a>
                    <a href="https://www.tiktok.com/@azmerabebe" target="_blank" rel="noopener noreferrer"
                      aria-label="TikTok" title="TikTok"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-[#111111] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-cyan-300/20">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                        <path d="M19.3 5.6a5.2 5.2 0 0 1-3.1-4.7h-3.4v14.2a3.1 3.1 0 1 1-3.1-3.1c.3 0 .6 0 .9.1V8.7a7 7 0 1 0 5.6 6.9V8.4a8.5 8.5 0 0 0 5 1.6V6.6c-.7 0-1.3-.3-1.9-1Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] py-8">
        <div className="container-shell flex flex-col items-center justify-between gap-3 text-xs text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Azmera Abebe Teshale. Built with React & Tailwind CSS.</p>
          <a href="#home" className="inline-flex items-center gap-2 transition hover:text-mint">
            Back to top <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </div>
  )
}


export default App
