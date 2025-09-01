import Portfolio from './Portfolio.jsx';
import { motion } from 'framer-motion';
import styles from './App.module.css';

const skills = ['C/C++', 'Python', 'HTML/CSS', 'SQL/MySQL', 'GML', 'Git/GitHub', 'Linux', 'React', 'Next.js', 'VS Code'];
const languages = [
  { flag: '🇷🇴', name: 'Romanian', level: 'native' },
  { flag: '🇬🇧', name: 'English', level: 'C1' },
  { flag: '🇩🇪', name: 'German', level: 'beginner' },
];

export default function App() {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className={styles.sidebarContent}>
          <h1 className={styles.title}>OMILESCU VLAD</h1>
          <div className={styles.infoList}>
            <div className={styles.infoItem}><span aria-label="Location" role="img">📍</span> Timișoara, Romania</div>
            <div className={styles.infoItem}><span aria-label="Email" role="img">✉️</span> <a href="mailto:vlad.omilescu@gmail.com" className={styles.link}>vlad.omilescu@gmail.com</a></div>
            <div className={styles.infoItem}><span aria-label="Phone" role="img">📱</span> 0746585038</div>
          </div>
          <div className={styles.github}>
            <svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" fill="#2563eb"/></svg>
            <a href="https://github.com/omilescuvlad" target="_blank" rel="noopener noreferrer">github.com/omilescuvlad</a>
          </div>
          <div className={styles.languages}>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
            <div className={styles.skills}>
              {skills.map(skill => (
                <span key={skill} className={styles.skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div className={styles.languages}>
            <h2 className={styles.sectionTitle}>Languages</h2>
            <ul className={styles.sectionList}>
              {languages.map(lang => (
                <li key={lang.name} className={styles.language}>
                  <span>{lang.flag}</span> {lang.name} <span className={styles.languageLevel}>({lang.level})</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Summary */}
        <motion.section initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} aria-label="Professional Summary" className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Summary</h2>
          <p className={styles.resumeText}>
            Computer Science graduate with a strong foundation in programming and software development. Currently pursuing a Master of Engineering in Information and Cybersecurity Systems. Experienced in multiple programming languages including C/C++, Python, and web technologies. Demonstrated expertise in software engineering, object-oriented programming, and data structures & algorithms. Passionate about cybersecurity and network security, with practical experience in cryptographic techniques and security methodologies.
          </p>
        </motion.section>

        {/* Education */}
        <motion.section initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}} aria-label="Education" className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <ul className={styles.sectionList}>
            <li className={styles.sectionListItem}>
              <span className={styles.eduIcon}>🎓</span>
              <div>
                <div className={styles.eduTitle}>2022-2025: Polytechnic University of Timișoara</div>
                <div className={styles.eduSubtitle}>Bachelor's degree in Computer Science</div>
                <div className={styles.eduLocation}>Timisoara | Coursework: Software Engineering, Object-Oriented Programming, Data Structures & Algorithms, Networking, Discrete Math, Linear Algebra, Probability & Statistics, Calculus</div>
              </div>
            </li>
            <li className={styles.sectionListItem}>
              <span className={styles.eduIcon}>🎓</span>
              <div>
                <div className={styles.eduTitle}>July 2025-present: Polytechnic University of Timișoara</div>
                <div className={styles.eduSubtitle}>Master of Engineering - Information and Cybersecurity Systems</div>
                <div className={styles.eduLocation}>Timisoara | Coursework: Modern Cryptographic Techniques, Network & Computer Security, Web Application Security, Cloud Security, Mobile Application Security, Virology & System Vulnerabilities, Security of Industrial & Embedded Systems, Cybersecurity Standards & Methodologies, Ethics and Academic Integrity</div>
              </div>
            </li>
            <li className={styles.sectionListItem}>
              <span className={styles.eduIcon}>🏫</span>
              <div>
                <div className={styles.eduTitle}>2018-2022: "Iosif Vulcan" National College</div>
                <div className={styles.eduSubtitle}>Mathematics-Informatics</div>
                <div className={styles.eduLocation}>Oradea</div>
              </div>
            </li>
          </ul>
        </motion.section>

        {/* Portfolio */}
        <motion.section initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.2}} aria-label="Portfolio" className={styles.section}>
          <Portfolio />
        </motion.section>

        {/* Certifications */}
        <motion.section initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.3}} aria-label="Certifications" className={styles.section}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <ul className={styles.sectionList}>
            <li className={styles.sectionListItem}>
              <span className={styles.certIcon}>🏆</span>
              <div>
                <div className={styles.certTitle}>CERTIFICATE OF PROFESSIONAL IT COMPETENCES</div>
                <ul className={styles.certList}>
                  <li>Design and structure of software products required for implementing software systems, software applications, databases, and web pages, specifically emphasizing customer-oriented software</li>
                  <li>Customization, configuration, and modification of software applications to adapt them to a client's information systems</li>
                </ul>
              </div>
            </li>
            <li className={styles.sectionListItem}>
              <span className={styles.certIcon}>🖥️</span>
              <div>
                <div className={styles.certTitle}>IC3-GS5 Digital Literacy Certification | Advanced User</div>
                <ul className={styles.certList}>
                  <li><strong>Key Applications:</strong> Leveraging advanced features of Microsoft Office Suite (Word, Excel, PowerPoint) for creating professional documents, performing complex data analysis, and delivering dynamic presentations, all aimed at enhancing productivity and communication</li>
                  <li><strong>Living Online:</strong> Effective utilization of digital collaboration tools and online communication platforms, alongside implementing best practices for cybersecurity, ethical conduct, and information literacy in a professional setting</li>
                  <li><strong>Computer Fundamentals:</strong> Demonstrating comprehensive knowledge of hardware, software, and operating system management to troubleshoot common issues, optimize system performance, and efficiently manage data</li>
                </ul>
              </div>
            </li>
            <li className={styles.sectionListItem}>
              <span className={styles.certIcon}>🌐</span>
              <div>
                <div className={styles.certTitle}>CCNA: Introduction to Networks</div>
                <ul className={styles.certList}>
                  <li><strong>Network Fundamentals:</strong> Architecting and implementing essential local area networks (LANs), including the configuration of routers and switches to ensure network connectivity</li>
                  <li><strong>IP Connectivity:</strong> Applying IPv4 and IPv6 addressing schemes and subnetting techniques to construct scalable and efficient network infrastructures</li>
                  <li><strong>Network Operations:</strong> Utilizing critical network administration protocols such as DNS, DHCP, and NAT to manage and maintain available network services</li>
                </ul>
              </div>
            </li>
          </ul>
        </motion.section>

        {/* Interests */}
        <motion.section initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.4}} aria-label="Interests" className={styles.section}>
          <h2 className={styles.sectionTitle}>Interests</h2>
          <ul className={styles.interestsList}>
            <li className={styles.interestItem}><span role="img" aria-label="Competitive programming">🏆</span> Competitive coding platforms (LeetCode) for algorithmic problem-solving</li>
            <li className={styles.interestItem}><span role="img" aria-label="Cybersecurity">🔒</span> Practical penetration testing challenges and cybersecurity expertise</li>
            <li className={styles.interestItem}><span role="img" aria-label="Programming">💻</span> Acquiring new programming languages for diverse software projects</li>
          </ul>
        </motion.section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/CV_Vlad-Dumitru_Omilescu.html" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn} aria-label="View CV Online">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              View CV Online
            </a>
            <a href="/CV_Vlad-Dumitru_Omilescu.pdf" download className={styles.downloadBtn} aria-label="Download CV PDF">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 16.5a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v10.5a1 1 0 0 1-1 1Z"/><path fill="#fff" d="M7.21 13.79a1 1 0 0 1 1.42 0L12 17.17l3.37-3.38a1 1 0 1 1 1.42 1.42l-4.08 4.09a1 1 0 0 1-1.42 0l-4.08-4.09a1 1 0 0 1 0-1.42Z"/><path fill="#fff" d="M4 20a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"/></svg>
              Download CV PDF
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
