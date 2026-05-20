// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaBrain,
  FaDatabase,
  FaTools,
  FaCode,
  FaServer,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiFlask,
  SiCplusplus,
  SiPostman,
  SiGithub,
} from "react-icons/si";

import "./Skills.css";

export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      command: "languages.map()",
      icon: <FaCode />,
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaDatabase />, name: "SQL" },
      ],
    },
    {
      title: "Frontend Stack",
      command: "frontend.render()",
      icon: <FaReact />,
      skills: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaCode />, name: "HTML" },
        { icon: <FaCode />, name: "CSS" },
      ],
    },
    {
      title: "Backend Stack",
      command: "api.connect()",
      icon: <FaServer />,
      skills: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <FaServer />, name: "REST APIs" },
      ],
    },
    {
      title: "Database Layer",
      command: "database.query()",
      icon: <FaDatabase />,
      skills: [
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <FaDatabase />, name: "SQLite" },
        { icon: <FaDatabase />, name: "Mongoose" },
      ],
    },
    {
      title: "Core CS",
      command: "cs.fundamentals()",
      icon: <FaBrain />,
      skills: [
        { icon: <FaBrain />, name: "DSA" },
        { icon: <FaCode />, name: "OOP" },
        { icon: <FaDatabase />, name: "DBMS" },
        { icon: <FaServer />, name: "Operating Systems" },
      ],
    },
    {
      title: "Tools",
      command: "tools.execute()",
      icon: <FaTools />,
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiGithub />, name: "GitHub" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <FaCode />, name: "VS Code" },
      ],
    },
  ];

  return (
    <section id="skills">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="skills-tag">Technical Stack</p>
        <h2>Skills Built for Full-Stack Development</h2>
        <p className="skills-subtitle">
          A practical tech stack covering frontend development, backend APIs,
          databases, core computer science, and developer tools.
        </p>
      </motion.div>

      <div className="skills-dashboard">
        {skillGroups.map((group, index) => (
          <motion.div
            className="skills-card"
            key={index}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="skills-card-top">
              <div className="skills-icon">{group.icon}</div>

              <div>
                <h3>{group.title}</h3>
                <p>{group.command}</p>
              </div>
            </div>

            <div className="skills-terminal">
              <span className="terminal-dot"></span>
              <span className="terminal-dot"></span>
              <span className="terminal-dot"></span>
              <p>stack.config.js</p>
            </div>

            <div className="skills-list">
              {group.skills.map((skill, i) => (
                <div className="skill-pill" key={i}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}