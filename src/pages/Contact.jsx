import React, { useState } from "react";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="container contact-section">
      <h2 className="text-center mb-5" style={{ color: "#6ACDE5" }}>
        📬 Contact Me
      </h2>

      <div className="row justify-content-center g-4">
        {/* Email card */}
        <div className="col-md-4">
          <div className="contact-card text-center">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>Feel free to reach out if you have any questions!</p>
            <button onClick={openModal} className="contact-link-btn">
              davvarga97@gmail.com
            </button>
          </div>
        </div>

        {/* GitHub card */}
        <div className="col-md-4">
          <div className="contact-card text-center">
            <div className="contact-icon">💻</div>
            <h3>GitHub</h3>
            <p>Check out my source code and my other projects.</p>
            <a
              href="https://github.com/Davidva0812"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              My Github Profile
            </a>
          </div>
        </div>

        {/* Location Card */}
        <div className="col-md-4">
          <div className="contact-card text-center">
            <div className="contact-icon">📍</div>
            <h3>Location</h3>
            <p>
              Currently based in Hungary, available for remote work worldwide.
            </p>
            <span className="contact-link" style={{ cursor: "default" }}>
              Debrecen, Hungary
            </span>
          </div>
        </div>
      </div>

      {/* --- MODAL --- */}
      {isModalOpen && (
        <div
          className="modal"
          style={{ display: "block" }}
          onClick={closeModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2 className="mb-4">Write me a message!</h2>

            <form action="https://formspree.io/f/xojnznqz" method="POST">
              <div className="input-group mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                  placeholder="What is yor name?"
                />
              </div>
              <div className="input-group mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  name="_replyto"
                  className="form-control"
                  required
                  placeholder="example@email.hu"
                />
              </div>
              <div className="input-group mb-4">
                <label>Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  required
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
