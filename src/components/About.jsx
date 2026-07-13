// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import "./About.css";

export default function About() {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const startCounter = () => {
    if (started) return;
    setStarted(true);

    let start = 0;
    const end = 6;
    const duration = 1500;
    const stepTime = duration / end;

    const timer = setInterval(() => {
      start++;
      setCount(start);

      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 80,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="about">
      <motion.div
        className="about-container"
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="about-left">
          <p className="section-tag">About Me</p>

          <h2>
            Building practical software with clean UI, scalable APIs, and AI-driven systems.
          </h2>

          <p className="about-desc">
            I'm a 2026 B.E. graduate in Electronics and Computer Engineering
            from Thapar Institute of Engineering and Technology, Patiala
            (CGPA 7.98/10). I'm a Software Engineer and Full Stack Developer
            with hands-on experience building production-deployed web
            applications, REST APIs, authentication workflows, and
            database-driven systems.
          </p>

          <p className="about-desc">
            My technical work spans React.js, Node.js, Express.js, Flask,
            MongoDB, MySQL, SQLite, and Mongoose, alongside Machine Learning
            and Generative AI — including EEG-based classification research
            (95.77% accuracy), NLP pipelines, and Stable Diffusion image
            restoration. I've completed 3 internships, built 6 projects, and
            worked across the full stack from database schema design to
            deployed, CI/CD-integrated production systems.
          </p>

          <div className="about-highlights">
            <span>Frontend Development</span>
            <span>REST API Integration</span>
            <span>Authentication Workflows</span>
            <span>Database Systems</span>
            <span>Machine Learning & GenAI</span>
          </div>
        </div>

        <motion.div
          className="about-right"
          variants={item}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={startCounter}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="stat-card featured">
            <h3>{count}+</h3>
            <p>Projects Built</p>
          </div>

          <div className="stat-card">
            <h3>3</h3>
            <p>Internship Experiences</p>
          </div>

          <div className="stat-card">
            <h3>Full Stack</h3>
            <p>Development Focus</p>
          </div>

          <div className="stat-card">
            <h3>95.77%</h3>
            <p>ML Classification Accuracy</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}