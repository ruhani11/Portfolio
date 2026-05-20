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
    const end = 5;
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
            Building practical software with clean UI, APIs, and scalable logic.
          </h2>

          <p className="about-desc">
            I am a Software Engineer and Full Stack Developer with hands-on
            experience in building responsive web applications, REST APIs,
            authentication workflows, and database-driven systems.
          </p>

          <p className="about-desc">
            My technical work includes React.js, Node.js, Express.js, Flask,
            MongoDB, MySQL, SQLite, and Mongoose. I also have a strong foundation
            in Data Structures and Algorithms, Object-Oriented Programming,
            DBMS, Operating Systems, and full-stack application architecture.
          </p>

          <div className="about-highlights">
            <span>Frontend Development</span>
            <span>REST API Integration</span>
            <span>Authentication Workflows</span>
            <span>Database Systems</span>
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
            <h3>AI / ML</h3>
            <p>Research Exposure</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}