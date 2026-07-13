import "./Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaCode,
} from "react-icons/fa";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setFailed(false);

    emailjs
      .sendForm(
        "service_d7vfrbi",
        "template_djq5342",
        e.target,
        "14O-JjvtgWA7npfM0"
      )
      .then(() => {
        setSent(true);
        setSending(false);
        e.target.reset();

        setTimeout(() => {
          setSent(false);
        }, 3000);
      })
      .catch(() => {
        setFailed(true);
        setSending(false);
      });
  };

  return (
    <section id="contact">
      <div className="contact-header">
        <p className="contact-tag">Get In Touch</p>

        <h2>Contact Me</h2>

        <p className="contact-desc">
          Open to software engineering roles, full-stack development
          opportunities, internships, and technical collaborations.
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info-card">
          <div className="contact-terminal-header">
            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>contact.api.js</p>
          </div>

          <div className="contact-code">
            <p>
              <span className="code-key">const</span> contactPayload = {"{"}
            </p>
            <p>
              &nbsp;&nbsp;name: <span>"Ruhani Bhatia"</span>,
            </p>
            <p>
              &nbsp;&nbsp;role: <span>"Software Engineer"</span>,
            </p>
            <p>
              &nbsp;&nbsp;focus: <span>"Full Stack Development & AI/ML"</span>,
            </p>
            <p>
              &nbsp;&nbsp;status: <span>"Open to Opportunities"</span>,
            </p>
            <p>{"};"}</p>
          </div>

          <div className="contact-links">
            <a
              href="mailto:ruhani.bhatia03@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
              Email
            </a>

            <a
              href="https://github.com/ruhani11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ruhani-bhatia-a6753727a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>

          <div className="contact-status">
            <FaCode />
            <span>Ready to build, debug, deploy, and collaborate.</span>
          </div>
        </div>

        <div className="contact-form-card">
          {sent && <p className="success-msg">Message sent successfully ✅</p>}

          {failed && (
            <p className="error-msg">Message failed. Please try again ❌</p>
          )}

          <form className="contact-form" onSubmit={sendEmail}>
            <label>
              Name
              <input
                name="user_name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </label>

            <label>
              Email
              <input
                name="user_email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                required
              ></textarea>
            </label>

            <button type="submit" disabled={sending}>
              {sending ? (
                "Sending..."
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}