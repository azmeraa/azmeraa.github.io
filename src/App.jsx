import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X,
  Database, BrainCircuit, ChartNoAxesCombined, Server, ShieldCheck,
  Workflow, Code2, ExternalLink, BriefcaseBusiness, GraduationCap,
  FileText, Download, Check, Phone,
} from 'lucide-react'
import profilePhoto from './profilePhoto.js'

/* ------------------------------------------------------------------ */
/*  EDIT THESE: personal details live in one place                    */
/* ------------------------------------------------------------------ */
const PROFILE = {
  name: 'Azmera Abebe Teshale',
  initials: 'AA',
  email: 'azmeraabebe26@gmail.com',
  github: 'https://github.com/azmeraa',
  linkedin: '', // TODO: paste your LinkedIn URL, e.g. https://www.linkedin.com/in/your-name
  // The file must be at  public/Azmera_CV.pdf  (exact name, capital A, in the "public" folder)
  cv: `${import.meta.env.BASE_URL}Azmera_CV.pdf`,
  photo: profilePhoto, // loaded from src/profilePhoto.js. Falls back to initials if missing.
  location: 'Addis Ababa, Ethiopia',
  phone: '+251918664908',
  phoneDisplay: '+251 918 664 908',
  facebook: 'https://web.facebook.com/Azmerabebe',
  instagram: 'https://www.instagram.com/azmerabebe',
  tiktok: 'https://www.tiktok.com/@azmerabebe',
}

const openTo = ['Full-time roles', 'Internships', 'Scholarships & fellowships', 'Research & collaboration']

const projects = [
  {
    number: '01',
    name: 'FraudShield',
    category: 'Applied machine learning',
    description: 'Educational fraud-detection prototype on a public European credit-card dataset. Compared a logistic-regression baseline with XGBoost and served predictions through a Dockerized FastAPI service.',
    stack: ['Python', 'XGBoost', 'Scikit-learn', 'FastAPI', 'Docker'],
    result: 'Held-out test F1: 0.8457 · ROC-AUC: 0.9788',
    note: 'Prototype only. Not connected to a live financial system.',
    link: 'https://github.com/azmeraa/fraudshield-group25',
    icon: ShieldCheck,
  },
  {
    number: '02',
    name: 'AI Email Task Agent',
    category: 'AI automation',
    description: 'Local-first workflow that retrieves emails, categorizes them with Llama 3 via Ollama, extracts action items and priorities, and builds a daily task brief in SQLite.',
    stack: ['Python', 'Ollama', 'Llama 3', 'SQLite', 'IMAP'],
    result: 'Modular email-to-task processing pipeline',
    note: 'Personal automation project. Runs locally to keep email content private.',
    link: 'https://github.com/azmeraa/AI-Email-Agent',
    icon: BrainCircuit,
  },
  {
    number: '03',
    name: 'TASK-CRE-63',
    category: 'Data engineering',
    description: 'Ingestion and normalization pipeline for real-estate appraisal metrics with validation, deterministic keys, idempotent PostgreSQL upserts and a separate geospatial validation module.',
    stack: ['Python', 'PostgreSQL', 'PostGIS', 'SQLAlchemy', 'Docker', 'pytest'],
    result: '19 tests passed · repeated loads stayed idempotent',
    note: 'Validated with synthetic fixtures, not an official benchmark or production integration.',
    link: 'https://github.com/azmeraa/TASK-CRE-63',
    icon: Workflow,
  },
  {
    number: '04',
    name: 'FIFA 21 Data Analysis',
    category: 'Data analytics',
    description: 'Exploratory analysis of FIFA 21 data: inspecting, cleaning, summarizing and visualizing player information with Python.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    result: 'Exploratory data analysis and visualizations',
    note: 'Portfolio analysis project.',
    link: 'https://github.com/azmeraa/FIFA21-Data-Analysis',
    icon: ChartNoAxesCombined,
  },
  {
    number: '05',
    name: 'Banking Data Analysis (SQL)',
    category: 'SQL & analytics',
    description: 'A SQL-based data analysis project focused on exploring banking-related data and extracting useful business insights. It demonstrates practical SQL skills, including querying, filtering, aggregating and analyzing structured data to identify patterns and support data-driven decision-making.',
    stack: ['SQL'],
    result: 'SQL-based banking data analysis',
    note: 'Portfolio analysis project. See the repository for the queries.',
    link: 'https://github.com/azmeraa/banking-data-analysis-sql',
    icon: Database,
  },
  {
    number: '06',
    name: 'Interactive Dev Cards',
    category: 'Frontend development',
    description: 'An interactive web development project that presents developer information through digital profile cards. It demonstrates front-end development skills and the ability to create structured, interactive user interfaces for displaying developer profiles and related information.',
    stack: ['Web development'],
    result: 'Interactive development cards',
    note: 'Front-end portfolio project.',
    link: 'https://github.com/azmeraa/interactive-dev-cards',
    icon: Code2,
  },
]

const skills = [
  { title: 'Database systems', icon: Database, items: ['Oracle Database 12c / 19c', 'Microsoft SQL Server', 'PostgreSQL', 'SQL & PL/SQL', 'RMAN backup & recovery', 'Database security'] },
  { title: 'Data & analytics', icon: ChartNoAxesCombined, items: ['Python', 'Pandas & NumPy', 'Data cleaning', 'Exploratory analysis', 'Matplotlib & Seaborn', 'Data validation'] },
  { title: 'Applied AI', icon: BrainCircuit, items: ['Machine learning fundamentals', 'Scikit-learn', 'XGBoost', 'LLMs & Ollama', 'AI workflow automation', 'Model evaluation'] },
  { title: 'Platforms & tools', icon: Server, items: ['Linux & Windows Server', 'Docker', 'FastAPI', 'Git & GitHub', 'SQLAlchemy', 'pytest'] },
]

const experience = [
  {
    role: 'Database Administration Officer I', org: 'Hibret Bank', period: 'Apr 2025 – Present',
    points: [
      'Managed and supported databases in a banking production environment, maintaining availability, performance, security and data integrity while supporting critical business operations.',
      'Contributed to high availability through database monitoring, maintenance, backup and recovery, and incident resolution.',
      // TODO (optional but powerful): add real numbers, e.g. "Managed 25+ production databases" or "99.9% availability".
    ],
  },
  {
    role: 'Associate Database Administration Officer', org: 'Hibret Bank', period: 'Aug 2022 – Apr 2025',
    points: ['Supported database operations, reliability, security and performance.'],
  },
  {
    role: 'Customs Database Administrator', org: 'Ethiopian Ministry of Revenue', period: 'Mar 2020 – Jul 2022',
    points: ['Supported database operations and enterprise information systems in a government environment.'],
  },
  {
    role: 'Database Officer', org: 'Addis Ababa Housing Development Office', period: 'Dec 2015 – Mar 2020',
    points: ['Built a foundation in database administration and IT systems support.'],
  },
]

const learning = [
  'Oracle Database 12c Administration',
  'Oracle Data Guard Administration',
  'Oracle Real Application Clusters (RAC)',
  'Oracle Database Security',
  'PL/SQL Fundamentals',
  'Python for Data Analysis · IBM Skills Network (Jun 2026)',
  'Python for AI · ALIXX (Jun 2026)',
  'Foundations of Artificial Intelligence (Apr–May 2026)',
  'Oracle Cloud Training · ongoing',
]

const nav = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
]

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-400">{text}</p>}
    </div>
  )
}

function Portrait() {
  const [failed, setFailed] = useState(false)
  const showPhoto = PROFILE.photo && !failed

  return (
    <figure className="relative mx-auto w-full max-w-[360px]">
      {/* soft glow behind the frame */}
      <div className="portrait-glow" aria-hidden="true" />

      {/* mint-to-blue gradient border */}
      <div className="portrait-frame">
        {showPhoto ? (
          <img
            src={PROFILE.photo}
            alt={`Portrait of ${PROFILE.name}`}
            width="640" height="800"
            onError={() => setFailed(true)}
            className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top"
          />
        ) : (
          <div className="flex aspect-[4/5] w-full items-center justify-center rounded-[1.4rem] bg-panel font-display text-7xl font-bold text-mint">
            {PROFILE.initials}
          </div>
        )}
      </div>

      <figcaption className="mt-5 text-center text-xs font-semibold uppercase tracking-[.28em] text-slate-300">
        IT <span className="text-mint">·</span> Database <span className="text-mint">·</span> AI
      </figcaption>
    </figure>
  )
}

function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [ids])
  return active
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const active = useActiveSection(nav.map(([, id]) => id))

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="site-grid" aria-hidden="true" />

      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink/85 backdrop-blur-xl">
        <div className="container-shell flex h-[72px] items-center justify-between">
          <a href="#home" className="font-display text-lg font-bold tracking-tight" aria-label={`${PROFILE.name}, home`}>
            {PROFILE.initials}<span className="text-mint">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link" aria-current={active === id ? 'true' : undefined}>
                {label}
              </a>
            ))}
          </nav>

          <a href={PROFILE.cv} download className="btn-outline hidden md:inline-flex">
            Résumé <Download size={15} className="ml-2" />
          </a>

          <button
            className="rounded-lg border border-line p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-panel px-6 py-3 md:hidden">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu} className="block py-3 text-slate-200">
                {label}
              </a>
            ))}
            <a href={PROFILE.cv} download className="block py-3 font-semibold text-mint">Download résumé</a>
          </nav>
        )}
      </header>

      <main id="main">
        {/* HOME */}
        <section id="home" className="relative flex min-h-[720px] items-center pb-20 pt-32">
          <div className="container-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/[0.07] px-4 py-2 text-xs font-semibold tracking-wide text-mint">
                <span className="h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
                DATABASE ADMINISTRATION · DATA · APPLIED AI
              </p>

              <h1 className="font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-[72px]">
                {PROFILE.name.split(' ').slice(0, 2).join(' ')}<br />
                <span className="gradient-text">{PROFILE.name.split(' ')[2]}.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                Database administrator with 10+ years in banking and government, building into data engineering, analytics and applied AI.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                I build dependable data foundations and practical, tested projects that turn information into value.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Currently open to">
                {openTo.map((t) => (
                  <li key={t} className="chip"><Check size={13} className="mr-1.5 text-mint" />{t}</li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">
                  View projects <ArrowUpRight size={17} className="ml-2" />
                </a>
                <a href="#contact" className="btn-outline">
                  Contact me <Mail size={16} className="ml-2" />
                </a>
              </div>

              <p className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-mint" /> {PROFILE.location}</span>
                <span className="inline-flex items-center gap-2"><BriefcaseBusiness size={15} className="text-mint" /> Open to remote &amp; international opportunities</span>
              </p>
            </div>

            <Portrait />
          </div>

          <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs tracking-widest text-slate-500 md:flex">
            SCROLL <ArrowDown size={14} />
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-wrap border-y border-white/[0.05] bg-white/[0.015]">
          <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading
              eyebrow="01 / ABOUT"
              title="Grounded in reliability. Curious about what's next."
            />
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                I am an IT professional with more than a decade of experience supporting enterprise database environments in Ethiopia's banking and public sectors. My work has centered on dependable operations, performance, access management, data integrity and production support.
              </p>
              <p>
                Alongside my job, I build practical projects in Python, data processing, machine learning and LLM-powered automation, connecting strong data foundations with applications that solve real problems.
              </p>
              <p>
                I'm looking for roles, internships and scholarship or research programs where I can grow in <span className="font-semibold text-white">data engineering, analytics and applied AI</span> while bringing real production experience.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <div className="info-card">
                  <GraduationCap className="mb-3 text-mint" aria-hidden="true" />
                  <p className="font-semibold text-white">BSc in Information Technology</p>
                  <p className="mt-1 text-sm text-slate-400">Wollo University · 2011–2015</p>
                </div>
                <div className="info-card">
                  <MapPin className="mb-3 text-mint" aria-hidden="true" />
                  <p className="font-semibold text-white">Based in Addis Ababa</p>
                  <p className="mt-1 text-sm text-slate-400">Ethiopia · Open to international opportunities</p>
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
              text="Enterprise database administration across banking and government."
            />
            <ol className="max-w-4xl">
              {experience.map((item) => (
                <li key={item.role + item.org + item.period} className="timeline-item">
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="grid gap-2 pb-10 md:grid-cols-[1fr_auto]">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{item.role}</h3>
                      <p className="mt-1 text-mint">{item.org}</p>
                      <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-sm leading-7 text-slate-400 marker:text-mint/60">
                        {item.points.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                    <span className="text-sm text-slate-400 md:pt-1">{item.period}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section-wrap border-y border-white/[0.05] bg-white/[0.015]">
          <div className="container-shell">
            <SectionHeading
              eyebrow="03 / TOOLKIT"
              title="Skills & technologies."
              text="Built through enterprise IT work, training and hands-on projects. My strongest professional foundation is database administration."
            />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {skills.map(({ title, icon: Icon, items }) => (
                <div key={title} className="card-hover rounded-2xl border border-line bg-panel/60 p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-mint/10 text-mint">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{title}</h3>
                  <ul className="mt-5 space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint/70" aria-hidden="true" />
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
              text="Machine learning, AI automation, data engineering, SQL and analytics. Each repository has the source code and details."
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((p) => {
                const Icon = p.icon
                return (
                  <article key={p.number} className="project-card group">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-mint/20 bg-mint/[0.07] text-mint">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <span className="font-display text-sm text-slate-500">{p.number}</span>
                    </div>
                    <p className="mt-6 text-xs font-bold uppercase tracking-[.16em] text-mint">{p.category}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold">{p.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{p.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                      {p.stack.map((tag) => <li key={tag} className="tag">{tag}</li>)}
                    </ul>
                    <div className="mt-6 rounded-xl border border-line/70 bg-ink/50 p-4">
                      <p className="text-sm font-semibold text-white">{p.result}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{p.note}</p>
                    </div>
                    <a
                      href={p.link} target="_blank" rel="noopener noreferrer"
                      aria-label={`${p.name} on GitHub (opens in a new tab)`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mint transition-all group-hover:gap-3"
                    >
                      View on GitHub <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* LEARNING */}
        <section id="learning" className="section-wrap border-y border-white/[0.05] bg-white/[0.015]">
          <div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading
              eyebrow="05 / LEARNING"
              title="Continuous learning, practical application."
              text="Training that supports my growth in database technologies, Python and artificial intelligence."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {learning.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-line bg-panel/50 p-4 text-sm leading-6 text-slate-200">
                  <FileText size={16} className="mt-1 shrink-0 text-mint" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OPPORTUNITIES */}
        <section id="opportunities" className="section-wrap">
          <div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading
              eyebrow="06 / OPPORTUNITIES"
              title="What I'm looking for."
            />
            <div>
              <p className="text-base leading-8 text-slate-300">
                I am actively seeking scholarship opportunities, professional development programmes, and international collaborations that will strengthen my expertise in artificial intelligence, data science, and digital transformation. With over 10 years of experience in enterprise IT and database administration, I am motivated to build on my technical foundation, develop innovative solutions, and contribute to technology-driven development in Ethiopia and across Africa. I welcome opportunities to learn, collaborate, and apply my skills to meaningful real-world challenges.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Areas of interest">
                {['Artificial intelligence', 'Data science', 'Digital transformation', 'Scholarships', 'Professional development', 'International collaboration'].map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-wrap border-t border-white/[0.05] bg-white/[0.015]">
          <div className="container-shell">
            <div className="relative overflow-hidden rounded-[2rem] border border-mint/20 bg-gradient-to-br from-[#142438] via-panel to-[#101827] px-7 py-14 text-center sm:px-14 sm:py-20">
              <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-mint/10 blur-3xl" aria-hidden="true" />
              <div className="relative mx-auto max-w-3xl">
                <p className="eyebrow">07 / GET IN TOUCH</p>
                <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  Let's build something <span className="gradient-text">meaningful.</span>
                </h2>
                <p className="mt-5 leading-7 text-slate-300">
                  I'm open to job offers, internships, scholarships and collaboration in database administration, data engineering, analytics and applied AI.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}&su=${encodeURIComponent('Opportunity for Azmera')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Mail size={17} className="mr-2" /> Email me
                  </a>
                  <a href={PROFILE.cv} download="Azmera_Abebe_Teshale_CV.pdf" className="btn-outline">
                    <Download size={17} className="mr-2" /> Download CV
                  </a>
                </div>

                <p className="mt-5 text-sm text-slate-400">
                  Or write to{' '}
                  <a href={`mailto:${PROFILE.email}`} className="text-mint underline-offset-4 hover:underline">{PROFILE.email}</a>
                </p>

                <div className="mt-4">
                  <a href={`tel:${PROFILE.phone}`} className="inline-flex items-center gap-2 text-slate-300 transition hover:text-mint">
                    <Phone size={17} className="text-mint" aria-hidden="true" />
                    {PROFILE.phoneDisplay}
                  </a>
                </div>

                <div className="mt-10">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-slate-400">Connect with me</p>
                  <div className="flex items-center justify-center gap-4">
                    <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="social-icon github-icon">
                      <Github size={22} />
                    </a>

                    {PROFILE.linkedin && (
                      <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="social-icon linkedin-icon">
                        <Linkedin size={22} />
                      </a>
                    )}

                    <a href={PROFILE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" className="social-icon facebook-icon">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.973h-1.513c-1.49 0-1.956.93-1.956 1.884v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
                      </svg>
                    </a>

                    <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="social-icon instagram-icon">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    </a>

                    <a href={PROFILE.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok" className="social-icon tiktok-icon">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                        <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.97-1.166-1.958-1.282-2.65h.004C16.366 1.114 16.42.75 16.428.75h-3.8v14.695c0 .197 0 .392-.008.585 0 .024-.002.047-.003.071 0 .01 0 .02-.002.03v.008a3.226 3.226 0 0 1-1.617 2.57 3.164 3.164 0 0 1-1.558.41c-1.78 0-3.224-1.45-3.224-3.24 0-1.79 1.444-3.24 3.224-3.24.337 0 .672.053.992.158l.005-3.872a7.07 7.07 0 0 0-.998-.072c-3.86 0-6.993 3.15-6.993 7.034 0 2.382 1.19 4.482 3.006 5.75a6.94 6.94 0 0 0 3.987 1.255 7.01 7.01 0 0 0 3.007-.68 6.99 6.99 0 0 0 3.87-6.264V8.11a9.91 9.91 0 0 0 5.78 1.853V6.12s-1.47.07-2.775-.558Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] py-8">
        <div className="container-shell flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React &amp; Tailwind CSS.</p>
          <a href="#home" className="inline-flex items-center gap-2 transition hover:text-mint">
            Back to top <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
