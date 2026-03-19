// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Projects.css";

import spendwise from "../assests/spendwise.png";
import fintrack from "../assests/fintrack.png";
import ngo from "../assests/ngo.png";
import news from "../assests/news.png";
import restoration from "../assests/restoration.png";

export default function Projects(){

  const projects = [
    {
      title: "SpendWise",
      img: spendwise,
      desc: "Budget tracking and shopping management app with ₹ expense monitoring.",
      link: "https://github.com/ruhani11/SpendWise"
    },
    {
      title: "Fintrack AI",
      img: fintrack,
      desc: "AI‑powered financial tracker providing insights, graphs and analysis.",
      link: "https://github.com/ruhani11/Fintrack_ai"
    },
    {
      title: "NGO Resource Management",
      img: ngo,
      desc: "Full‑stack system to manage volunteers, donations and inventory.",
      link: "https://github.com/ruhani11/NGO-Resources-Management-System"
    },
    {
      title: "News Summarizer",
      img: news,
      desc: "NLP system translating Hindi news and generating summaries.",
      link: "https://github.com/ruhani11/Hindi-English-News-Translator-Summarizer"
    },
    {
      title: "Image Restoration",
      img: restoration,
      desc: "AI model restoring damaged historical photographs.",
      link: "https://github.com/ruhani11/Historical-Image-Restoration"
    }
  ];

  /* 🔥 smooth stagger */
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  /* 🔥 slow smooth slide */
  const card = {
    hidden: {
      opacity: 0,
      y: 120,
      scale: 0.95,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return(
    <section id="projects">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

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
            whileHover={{ y: -12, scale: 1.03 }}
            onClick={() => window.open(project.link, "_blank")}
          >

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

          </motion.div>
        ))}

      </motion.div>

    </section>
  );
}