import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import './App.css'

const projects = [
  {
    name: 'Simpliaxis',
    url: 'https://simpliaxis.com',
    role: 'Frontend Developer',
    blurb:
      'Global certification platform UI — course discovery, lead flows, and high-traffic marketing pages built with HTML, CSS, Bootstrap, and JavaScript on a PHP backend.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'],
  },
  {
    name: 'Axis',
    url: 'https://axis.simpliaxis.com',
    role: 'Frontend Developer',
    blurb:
      'Product experience within the Simpliaxis ecosystem — React.js UI with HTML, Bootstrap, and CSS3, integrated with a PHP backend.',
    stack: ['HTML', 'Bootstrap', 'CSS3', 'React.js', 'PHP'],
  },
  {
    name: 'AxiGlobe',
    url: 'https://axiglobe.com',
    role: 'Frontend Developer',
    blurb:
      'Professional IT certification site covering Agile, SAFe, PMP, and related learning paths — built with HTML, CSS, JavaScript, and Bootstrap on PHP.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
  },
  {
    name: 'Personal Portfolio',
    url: 'https://chowdaryram1.github.io/portfolio/',
    role: 'Personal Project',
    blurb:
      'Responsive personal portfolio with scroll-driven motion, project showcase, and contact CTAs — built and deployed on GitHub Pages.',
    stack: ['React.js', 'Vite', 'Framer Motion', 'CSS3'],
  },
]

const experience = [
  {
    title: 'Frontend Developer',
    company: 'Simpliaxis',
    dates: 'Feb 2025 — Present',
    place: 'Bengaluru, India',
    points: [
      'Ship production UI for simpliaxis.com (HTML, CSS, Bootstrap, JavaScript + PHP), axis.simpliaxis.com (HTML, Bootstrap, CSS3, React.js + PHP), and axiglobe.com (HTML, CSS, JavaScript, Bootstrap + PHP)',
      'Build responsive, mobile-first interfaces and integrate front-end views with PHP backends',
      'Optimize layouts, usability, and performance across marketing and product surfaces',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Careerpedia',
    dates: 'Jan 2024 — May 2024',
    place: 'India',
    points: [
      'Developed responsive UI for a live online learning platform',
      'Worked with React.js, React Bootstrap, HTML5, and CSS3',
      'Collaborated via Git/GitHub in an agile team setting',
    ],
  },
  {
    title: 'Technical Recruiter',
    company: 'Onchip Space Semiconductor',
    dates: 'Oct 2022 — Oct 2023',
    place: 'Hyderabad, India',
    points: [
      'Full-cycle hiring for RTL, embedded, verification, and physical design roles',
      'Ran technical screens across VLSI flows and HDL fundamentals',
    ],
  },
]

const skills = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'PHP (integration)'] },
  { group: 'Frontend', items: ['React.js', 'Bootstrap', 'Responsive Design', 'Framer Motion'] },
  { group: 'Practice', items: ['Git & GitHub', 'Component Architecture', 'Cross-browser UI', 'Performance'] },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
}

function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="page">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="nav">
        <a className="nav-brand" href="#top">
          Rammohan
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <motion.div
              className="hero-text"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.p className="hero-kicker" variants={fadeUp}>
                Frontend Developer
              </motion.p>
              <motion.h1 className="hero-brand" variants={fadeUp}>
                Rammohan
                <span>Sandireddy</span>
              </motion.h1>
              <motion.p className="hero-lead" variants={fadeUp}>
                I build responsive web experiences for learning platforms —
                HTML, CSS, Bootstrap, JavaScript, and React.js, integrated with PHP backends.
              </motion.p>
              <motion.div className="hero-actions" variants={fadeUp}>
                <a className="btn btn-primary" href="#work">
                  View work
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Get in touch
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            aria-hidden="true"
          >
            <div className="hero-plane">
              <div className="hero-grid" />
              <div className="hero-orb hero-orb-a" />
              <div className="hero-orb hero-orb-b" />
              <div className="hero-panel">
                <span className="panel-label">Selected work</span>
                <ul>
                  <li>simpliaxis.com</li>
                  <li>axiglobe.com</li>
                  <li>axis.simpliaxis.com</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="work" className="section work">
          <motion.div
            className="section-head"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="eyebrow">Selected work</p>
            <h2>Production sites I’ve shaped</h2>
            <p className="section-sub">
              Front-end delivery for Simpliaxis products used by learners and teams worldwide.
            </p>
          </motion.div>

          <div className="project-list">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                className="project"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 6 }}
              >
                <div className="project-index">0{index + 1}</div>
                <div className="project-body">
                  <div className="project-top">
                    <h3>{project.name}</h3>
                    <span className="project-role">{project.role}</span>
                  </div>
                  <p>{project.blurb}</p>
                  <ul className="tags">
                    {project.stack.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <span className="project-link" aria-hidden="true">
                  Visit →
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <motion.div
            className="section-head"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="eyebrow">Experience</p>
            <h2>Where I’ve built</h2>
          </motion.div>

          <div className="timeline">
            {experience.map((job) => (
              <motion.article
                key={job.company + job.title}
                className="job"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <div className="job-meta">
                  <h3>{job.title}</h3>
                  <p className="job-company">{job.company}</p>
                  <p className="job-dates">
                    {job.dates} · {job.place}
                  </p>
                </div>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills">
          <motion.div
            className="section-head"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="eyebrow">Skills</p>
            <h2>Tools I use daily</h2>
          </motion.div>

          <motion.div
            className="skill-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            {skills.map((skill) => (
              <motion.div key={skill.group} className="skill-block" variants={fadeUp}>
                <h3>{skill.group}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="contact" className="section contact">
          <motion.div
            className="contact-panel"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
          >
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something sharp</h2>
            <p className="section-sub">
              Open to frontend roles and collaborations. Email{' '}
              <a href="mailto:rammohanonchipspace@gmail.com">rammohanonchipspace@gmail.com</a>
              {' '}or call <a href="tel:+916302914897">+91 6302914897</a>.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:rammohanonchipspace@gmail.com">
                Email
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.linkedin.com/in/rammohan-c-0050bb258"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/chowdaryram1"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Rammohan Sandireddy</p>
        <p>Built with React · Deployed for the web</p>
      </footer>
    </div>
  )
}

export default App
