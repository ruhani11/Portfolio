import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-badge">Available for Software Engineering Roles</p>

          <h1>
            Hi, I'm <span>Ruhani Bhatia</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Software Engineer",
              1800,
              "Full Stack Developer",
              1800,
              "React.js Developer",
              1800,
              "Backend & API Developer",
              1800,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />

          <p className="hero-desc">
            I build responsive web applications, REST APIs, authentication
            workflows, and database-driven systems using React.js, Node.js,
            Express.js, Flask, MongoDB, MySQL, and SQLite.
          </p>

          <div className="tech-stack">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Flask</span>
            <span>MongoDB</span>
            <span>REST APIs</span>
          </div>

          <div className="hero-links">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a
              href="https://github.com/ruhani11"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ruhani-bhatia-a6753727a/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="code-card">
            <div className="code-card-header">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>developer.js</p>
            </div>

            <pre>
              <code>
{`const developer = {
  name: "Ruhani Bhatia",
  role: "Full Stack Developer",
  frontend: ["React.js", "HTML", "CSS"],
  backend: ["Node.js", "Express.js", "Flask"],
  database: ["MongoDB", "MySQL", "SQLite"],
  focus: "Building scalable web apps",
};

console.log("Ready to create impact.");`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}