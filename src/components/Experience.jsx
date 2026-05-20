// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaLaptopCode,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Software Developer Intern",
      company: "SK Info Techies",
      duration: "Jan 2026 – Present",
      icon: <FaLaptopCode />,
      desc: "Worked on full-stack development tasks involving frontend components, backend APIs, authentication workflows, database connectivity, and scalable application layouts.",
      points: [
        "Completed 3 development tasks using React.js, Node.js, Express.js, MongoDB, and Mongoose.",
        "Created 10+ frontend components and responsive interfaces for scalable application layouts.",
        "Integrated 5+ REST API modules with frontend workflows, database connectivity, and testing.",
        "Applied authentication workflows using JWT, bcrypt, OTP, Google OAuth, and protected routes.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Mongoose"],
    },
    {
      role: "Web Development Intern",
      company: "Bhagat Puran Singh School for the Deaf, Amritsar",
      duration: "Jun 2025 – Jul 2025",
      icon: <FaBriefcase />,
      desc: "Built an accessible web-based Sign Language Dictionary to support learning, improve content discovery, and enhance user engagement through responsive UI design.",
      points: [
        "Built an accessible Sign Language Dictionary with 1,500+ sign entries for learning support.",
        "Designed 10+ responsive interfaces with structured content, search functionality, and navigation.",
        "Improved user engagement by 40% through UI/UX enhancements and frontend optimization.",
      ],
      tech: ["Web Development", "Responsive UI", "Search", "Accessibility", "UI/UX"],
    },
    {
      role: "Summer Research Intern",
      company: "Thapar Institute of Engineering and Technology",
      duration: "Jun 2024 – Aug 2024",
      icon: <FaBrain />,
      desc: "Worked on research-oriented machine learning workflows involving EEG preprocessing, feature extraction, and neural network-based classification.",
      points: [
        "Prepared EEG preprocessing and feature extraction pipelines using Python and signal processing techniques.",
        "Collaborated with a research team on FCNN model training for ADHD, ASD, and control classification.",
        "Achieved 95.77% classification accuracy using a Feedforward Fully Connected Neural Network.",
      ],
      tech: ["Python", "Signal Processing", "EEG", "FCNN", "Machine Learning"],
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