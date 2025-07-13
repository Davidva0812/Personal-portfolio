import React from "react";

export default function Contact() {
  return (
    <div className="container mt-4">
      <h2>📬 Contact Me</h2>
      <p>You can reach me via e-mail or check out my GitHub profile:</p>

      <ul>
        <li>
          📧 Email:{" "}
          <a href="mailto:david.varga.1208@email.com">david.varga.1208@gmail.com</a>
        </li>
        <li>
          💻 GitHub:{" "}
          <a href="https://github.com/Davidva0812" target="_blank" rel="noreferrer">
            github.com/Davidva0812
          </a>
        </li>
      </ul>
    </div>
  );
}
