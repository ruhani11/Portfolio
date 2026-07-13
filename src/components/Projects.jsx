// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

import firmflow from "../assests/firmflow.png";
import fintrack from "../assests/fintrack.png";
import ngo from "../assests/ngo.png";
import news from "../assests/news.png";
import restoration from "../assests/restoration.png";

export default function Projects() {
  const projects = [
    {
      title: "FirmFlow 360",
      type: "Office Management Platform (RBAC)",
      img: firmflow,
      desc: "A MERN stack office management platform with role-based access control across Admin, Staff, and Client roles — full CRUD, documented API contracts, and JWT-protected routes.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      link: "https://github.com/ruhani11/firmflow360",
    },
    {
      title: "Fintrack AI",
      type: "AI-Powered Finance Dashboard",
      img: fintrack,
      desc: "A personal finance assistant with category-wise financial aggregation, CSV exports, and LLM-generated budgeting insights backed by a 2-layer AI validation system.",
      stack: ["Flask", "Streamlit", "SQLite", "OpenRouter API"],
      link: "https://github.com/ruhani11/Fintrack-ai",
    },
    {
      title: "NGO Resource Management",
      type: "Database Management System",
      img: ngo,
      desc: "A resource management system for NGOs to manage volunteers, donations, and inventory records with normalized MySQL schemas and full CRUD via a Streamlit dashboard.",
      stack: ["Python", "MySQL", "Streamlit", "Pandas"],
      link: "https://github.com/ruhani11/NGO-Resources-Management-System",
    },
    {
      title: "Hindi-English News Summarizer",
      type: "NLP Translation & Summarization Pipeline",
      img: news,
      desc: "A cross-lingual NLP pipeline that translates Hindi news into English using fine-tuned MarianMT and summarizes it using BART — a 116% BLEU score improvement over pretrained baselines.",
      stack: ["Python", "MarianMT", "BART", "Flask"],
      link: "https://github.com/ruhani11/Hindi-English-News-Translator-Summarizer",
    },
    {
      title: "Heritage Image Restoration",
      type: "Generative AI Restoration Pipeline",
      img: restoration,
      desc: "A training-free diffusion pipeline using Stable Diffusion and ControlNet (Canny) to restore heritage photographs and building images with zero hallucinations across 60 test images.",
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