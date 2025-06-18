import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Portfolio.module.css';
// import './App.css';

const PROJECTS = [
  {
    title: 'Joc 2D',
    desc: 'Joc RPG puzzle-adventure 2D educativ in domeniul criptografiei. Dezvoltat în GameMaker proiectul include un sistem de dialog, batalii turn-based și grafică pixel art.',
    tags: ['GML'],
    github: 'https://github.com/omilescuvlad/Misiune-in-Retea',
    demo: '',
  },
  {
    title: 'File Organiser',
    desc: 'Script Python care organizează automat fișierele dintr-un director pe foldere, în funcție de extensie. Ușor de folosit pentru managementul fișierelor.',
    tags: ['Python'],
    github: 'https://github.com/omilescuvlad/file_organiser',
    demo: '',
  },
];

const FILTERS = ['Python', 'GML'];

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
        <button
          className={active === 'All' ? `${styles.filterBtn} ${styles.active}` : styles.filterBtn}
          onClick={() => setActive('All')}
        >
          All
        </button>
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