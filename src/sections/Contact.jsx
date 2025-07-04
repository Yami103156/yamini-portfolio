import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message Sent!");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="section" id="contact">
      <h2 className="section-title">📬 Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your message..." required></textarea>
        <button type="submit">Send</button>
        <p className="status">{status}</p>
      </form>
    </section>
  );
};

export default Contact;
