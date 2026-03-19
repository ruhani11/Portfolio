import "./Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact(){

  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_42zizbj",
      "template_jibye0k",
      e.target,
      "N8MIF_-XuVBJAROKt"
    )
    .then(() => {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    })
    .catch(() => {
      alert("Failed ❌");
    });

    e.target.reset();
  };

  return (
    <section id="contact">

      <h2>CONTACT</h2>

      <div className="contact-line"></div>

      <p className="contact-desc">
        Feel free to reach out if you have any questions or would like to discuss
        opportunities. I'm always open to connecting and collaborating.
      </p>

      <div className="contact-container">

        {/* ✅ SUCCESS MESSAGE ABOVE FORM */}
        {sent && (
          <p className="success-msg">
            Message sent successfully ✅
          </p>
        )}

        {/* ✅ FORM */}
        <form className="contact-form" onSubmit={sendEmail}>

          <input
            name="user_name"
            type="text"
            placeholder="Name"
            required
          />

          <input
            name="user_email"
            type="email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Submit
          </button>

        </form>

      </div>

    </section>
  );
}