// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";
import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Software Developer Intern",
      company: "SK Info Techies, Noida",
      duration: "Jan 2026 – Jun 2026",
      icon: <FaLaptopCode />,
      desc: "Built SpendWise — a production-deployed full-stack shopping list and budget management app — end-to-end as my primary internship deliverable, alongside company website development and API integration work.",
      points: [
        "Built SpendWise end-to-end — 5 modules: Authentication, Shopping Lists, Products, Categories, Units of Measure.",
        "Designed and shipped 20+ REST API endpoints with structured error handling across 5 MongoDB collections.",
        "Implemented 5 authentication flows: JWT login, OTP email verification, Google OAuth, signup, and password reset.",
        "Set up GitHub Actions CI/CD with frontend on Vercel, backend on Render, and MongoDB Atlas as the database layer.",
        "Collaborated with 2+ senior developers across 10+ code reviews and validated all endpoints via Postman.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Google OAuth"],
    },
    {
      role: "Web Development Intern",
      company: "Bhagat Puran Singh School for the Deaf, Amritsar",
      duration: "Jun 2025 – Jul 2025",
      icon: <FaBriefcase />,
      desc: "Built an accessible web-based Sign Language Dictionary to support learning, improve content discovery, and enhance user engagement through responsive UI design.",
      points: [
        "Built a single-page Sign Language Dictionary web app for deaf students and teachers with 1,500+ entries.",
        "Extracted 1,500+ sign language videos via a Python scraping script, with metadata stored using Google Sheets API.",
        "Delivered real-time search functionality, reducing content lookup time by ~50%.",
        "Validated search accuracy across all entries and tested responsiveness on 3+ screen sizes.",
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Python", "Google Sheets API"],
    },
    {
      role: "Summer Research Intern",
      company: "Thapar Institute of Engineering and Technology",
      duration: "Jun 2024 – Aug 2024",
      icon: <FaBrain />,
      desc: "Worked on research-oriented machine learning workflows for EEG-based ADHD/ASD classification — from preprocessing and feature engineering to model training and evaluation.",
      points: [
        "Achieved 95.77% accuracy (precision 95.90%, recall 95.68%) with an FCNN on multi-class neurological classification.",
        "Engineered Python-based ML pipelines across 2 clinical datasets covering 136 subjects.",
        "Applied ICA, EMD, and ATAR artifact removal for preprocessing, with ATAR performing best by SNR/RMSE/correlation.",
        "Applied SHAP for feature selection and compared 4 models: CNN1D, XGBoost, FCNN, and CNN+LSTM.",
      ],
      tech: ["Python", "Scikit-learn", "SHAP", "Pandas", "NumPy"],
    },
  ];

  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 70,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="experience">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="experience-tag">Professional Journey</p>

        <h2>Experience That Built My Developer Mindset</h2>

        <p className="experience-subtitle">
          Hands-on exposure to full-stack development, accessible web solutions,
          database-driven workflows, and AI/ML research.
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            className="experience-card"
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="experience-card-top">
              <div className="experience-icon">{exp.icon}</div>

              <div>
                <h3>{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-duration">{exp.duration}</p>
              </div>
            </div>

            <p className="experience-desc">{exp.desc}</p>

            <ul className="experience-points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="experience-tech">
              {exp.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}