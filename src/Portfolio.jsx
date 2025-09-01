import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Portfolio.module.css';
// import './App.css';

const PROJECTS = [
  {
    title: 'Network mission',
    desc: 'Developed a 2D educational puzzle-adventure RPG designed to teach core cryptography concepts through engaging gameplay. Engineered two native C extensions utilizing the OpenSSL library to simulate a real terminal. Programmed core game systems, including a dynamic dialogue interface and a turn-based battle system where puzzles replace traditional combat.',
    tags: ['GameMaker', 'GML', 'C', 'OpenSSL'],
    github: 'https://github.com/omilescuvlad/Misiune-in-Retea',
    demo: '',
  },
  {
    title: 'Automated File System Organizer',
    desc: 'Engineered a Python script to automate the organization of cluttered directories by sorting files into folders based on their extension. Implemented robust error handling to verify path existence and skip directories, ensuring reliable execution. Designed for ease of use with a clear function call, making it a versatile tool for recurring cleanup tasks.',
    tags: ['Python'],
    github: 'https://github.com/omilescuvlad/file_organiser',
    demo: '',
  },
  {
    title: 'Interactive Web-Based Curriculum Vitae',
    desc: 'Developed a dynamic and responsive single-page application (SPA) to serve as a professional digital curriculum vitae. Engineered with React to create a modular and maintainable component structure, ensuring easy content updates and a seamless user experience. Designed and implemented a modern, clean UI with custom CSS styling for full responsiveness.',
    tags: ['React', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/omilescuvlad/curriculum-vitae',
    demo: '',
  },
];

const FILTERS = ['All', 'Python', 'JavaScript', 'React', 'C', 'GML', 'GameMaker'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered =
    active === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(active));

  return (
    <section aria-label="Personal Projects" className={styles.portfolioRoot}>
      <h2 className={styles.portfolioTitle}>Personal Projects</h2>
      <div className={styles.filtersBar}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={active === f ? `${styles.filterBtn} ${styles.active}` : styles.filterBtn}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className={styles.projectsGrid}>
        <AnimatePresence>
          {filtered.map((proj) => (
            <motion.div
              className={styles.projectCard}
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{proj.title}</h3>
              <p className={styles.desc}>{proj.desc}</p>
              <div className={styles.tags}>
                {proj.tags.map((t) => (
                  <span className={styles.tag} key={t}>{t}</span>
                ))}
              </div>
              <div className={styles.actions}>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>Source Code</a>
                {proj.demo && (
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>Demo</a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
} 