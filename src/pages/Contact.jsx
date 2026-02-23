import React from "react";

export default function Contact() {
  return (
    <div className="container contact-section">
      <h2 className="text-center mb-5" style={{ color: "#6ACDE5" }}>
        📬 Contact Me
      </h2>

      <div className="row justify-content-center g-4">
        {/* Email card */}
        <div className="col-md-4">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>Feel free to reach out if you have any questions!</p>
            <a href="mailto:te-emailed@gmail.com" className="contact-link">
              david.varga.1208@gmail.com
            </a>
          </div>
        </div>

        {/* GitHub card */}
        <div className="col-md-4">
          <div className="contact-card">
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
          <div className="contact-card">
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
    </div>
  );
}
