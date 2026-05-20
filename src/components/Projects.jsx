// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

import spendwise from "../assests/spendwise.png";
import fintrack from "../assests/fintrack.png";
import ngo from "../assests/ngo.png";
import news from "../assests/news.png";
import restoration from "../assests/restoration.png";

export default function Projects() {
  const projects = [
    {
      title: "SpendWise",
      type: "Full-Stack Shopping & Budget Management System",
      img: spendwise,
      desc: "A full-stack shopping and budget management app with active-list handling, category-wise totals, budget tracking, duplicate checks, and responsive dashboards.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/ruhani11/SpendWise",
    },
    {
      title: "Fintrack AI",
      type: "Smart Budget Tracker",
      img: fintrack,
      desc: "A personal finance assistant for tracking income, expenses, monthly summaries, transaction history, and AI-powered budget improvement tips.",
      stack: ["Flask", "Streamlit", "SQLite", "OpenRouter AI"],
      link: "https://github.com/ruhani11/Fintrack_ai",
    },
    {
      title: "NGO Resource Management",
      type: "Database Management System",
      img: ngo,
      desc: "A resource management system for NGOs to manage volunteers, donations, inventory records, search filters, and real-time MySQL updates.",
      stack: ["Python", "MySQL", "Streamlit", "SQL"],
      link: "https://github.com/ruhani11/NGO-Resources-Management-System",
    },
    {
      title: "Hindi-English News Summarizer",
      type: "NLP Translation & Summarization Pipeline",
      img: news,
      desc: "A cross-lingual NLP pipeline that scrapes Hindi news, translates it into English using MarianMT, and summarizes it using BART.",
      stack: ["Python", "Flask", "MarianMT", "BART"],
      link: "https://github.com/ruhani11/Hindi-English-News-Translator-Summarizer",
    },
    {
      title: "Heritage Image Restoration",
      type: "Generative AI Restoration Pipeline",
      img: restoration,
      desc: "A diffusion-based restoration pipeline using Stable Diffusion and ControlNet to enhance old historical photographs and heritage building images.",
      stack: ["Stable Diffusion", "ControlNet", "Gradio", "OpenCV"],
      link: "https://github.com/ruhani11/Historical-Image-Restoration",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const card = {
    hidden: {
      opacity: 0,
      y: 90,
      scale: 0.96,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="projects-tag">Featured Work</p>
        <h2>Projects Built Like Real Products</h2>
        <p className="projects-subtitle">
          Full-stack, database-driven, and AI-powered projects designed with
          practical workflows, clean UI, and real-world use cases.
        </p>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={card}
            whileHover={{ y: -10 }}
          >
            <div className="project-image-box">
              <img src={project.img} alt={project.title} />

              <div className="project-image-overlay">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  View Repository
                  <FaExternalLinkAlt className="external-icon" />
                </a>
              </div>
            </div>

            <div className="project-content">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub />
                GitHub
                <FaExternalLinkAlt className="external-icon" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}