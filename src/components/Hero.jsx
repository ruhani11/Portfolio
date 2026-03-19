import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">

      <h1>Hi, I'm Ruhani Bhatia</h1>

      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          2000,
          "Machine Learning Enthusiast",
          2000,
          "React Developer",
          2000
        ]}
        wrapper="h2"
        speed={50}
        repeat={Infinity}
      />

      <p className="hero-desc">
        I design and build modern web applications and AI‑powered solutions,
        combining full‑stack development with machine learning to create
        impactful digital experiences.
      </p>

      <div className="hero-links">

        <a 
          href="https://github.com/ruhani11"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a 
          href="https://www.linkedin.com/in/ruhani-bhatia-a6753727a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a 
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>

      </div>

    </section>
  );
}