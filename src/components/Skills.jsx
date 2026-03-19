// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Icons
import { FaReact, FaNodeJs, FaPython, FaBrain } from "react-icons/fa";
import { SiJavascript, SiMysql, SiMongodb, SiTensorflow, SiCplusplus } from "react-icons/si";
import { MdMemory } from "react-icons/md";

import "./Skills.css";

export default function Skills(){

  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPython />, name: "Python" },

    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaBrain />, name: "ML" },
    { icon: <SiTensorflow />, name: "AI" },

    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaBrain />, name: "DSA" },
    { icon: <MdMemory />, name: "OS" },
    { icon: <FaBrain />, name: "DBMS" },
  ];

  return(
    <section id="skills">

      <motion.h2
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{opacity:0, y:40}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.4, delay:index * 0.05}}
            viewport={{ once: true }}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}

      </div>

    </section>
  )
}