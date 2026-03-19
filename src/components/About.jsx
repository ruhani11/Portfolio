// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import "./About.css";

export default function About(){

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const startCounter = () => {
    if (started) return;
    setStarted(true);

    setTimeout(() => {
      let start = 0;
      const end = 5;
      const duration = 1500;
      const stepTime = duration / end;

      const timer = setInterval(() => {
        start++;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
    }, 600);
  };

  /* 🔥 animation */
  const item = {
    hidden: {
      opacity: 0,
      y: 100,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return(
    <section id="about">

      <div className="about-container">

        {/* 🔥 HEADING */}
        <motion.h2
          className="floating-text"
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          About Me
        </motion.h2>

        {/* 🔥 PARA 1 */}
        <motion.p
          className="floating-text"
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          I am an Electronics & Computer Engineering student passionate about
          building modern web applications and intelligent AI solutions.
          I enjoy working on full‑stack development and exploring advanced
          technologies to solve real‑world problems.
        </motion.p>

        {/* 🔥 PARA 2 */}
        <motion.p
          className="floating-text"
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          I have developed multiple projects including AI‑powered systems,
          financial tools, and scalable applications. I am always eager to
          learn, improve my problem‑solving skills, and build impactful solutions.
        </motion.p>

        {/* 🔥 STATS */}
        <motion.div
          className="about-stats"
          variants={item}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={startCounter}
          viewport={{ once: true, margin: "-50px" }}
        >

          <div className="stat-card">
            <h3>{count}+</h3>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h3>Full Stack</h3>
            <p>Development</p>
          </div>

          <div className="stat-card">
            <h3>AI / ML</h3>
            <p>Focus</p>
          </div>

        </motion.div>

      </div>

    </section>
  );
}