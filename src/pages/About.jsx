import React from "react";

export default function About() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h2
            className="mb-4 d-inline-block"
            style={{ borderBottom: "3px solid #6ACDE5" }}
          >
            About Me
          </h2>

          <p className="lead fs-5">
            I'm a passionate Junior Developer with a strong foundation in
            Python, HTML, CSS, JavaScript, and React. I enjoy creating clean,
            responsive, and user-friendly interfaces that offer great user
            experiences.
          </p>

          <div
            className="experience-card my-5 p-4 shadow-sm"
            style={{
              background: "rgba(106, 205, 229, 0.05)",
              borderLeft: "5px solid #6ACDE5",
              borderRadius: "0 10px 10px 0",
            }}
          >
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <h4 className="fw-bold mb-1" style={{ color: "#6ACDE5" }}>
                Professional Software Developer Intern
              </h4>
              <span
                className="badge p-2 mb-2"
                style={{ backgroundColor: "#6ACDE5", color: "#1a1821" }}
              >
                6 Months Experience
              </span>
            </div>
            <br />

            <p
              className="mb-0 fs-6"
              style={{ lineHeight: "1.8", textAlign: "justify" }}
            >
              Currently, I am leveraging my skills in a{" "}
              <strong>6-month internship</strong>, delivering high-impact{" "}
              <strong>
                creative assets and campaigns for prominent companies
              </strong>
              . I specialize in building sleek, responsive layouts using{" "}
              <strong>YooTheme</strong> and optimizing professional CMS
              platforms like <strong>Joomla</strong> and{" "}
              <strong>WordPress</strong>. By integrating{" "}
              <strong>Prompt Engineering</strong> and <strong>AI tools</strong>{" "}
              into my daily workflow, I significantly accelerate development
              cycles and SEO optimizations. Beyond the frontend, I contribute to{" "}
              <strong>backend logic</strong> and{" "}
              <strong>database management</strong>, all within a fast-paced{" "}
              <strong>Agile environment</strong>.
            </p>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <p>
                I've completed several{" "}
                <a
                  href="https://github.com/Davidva0812"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  hands-on projects
                </a>{" "}
                during my learning journey and I'm continuously improving my
                skills through platforms like <strong>freeCodeCamp</strong>,{" "}
                <strong>Udemy</strong> and building my own web apps.
              </p>
              <p>
                Currently, I'm looking for developer opportunities where I can
                contribute to real-world projects, learn from experienced
                developers, and grow professionally.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                When I'm not coding, I enjoy reading about technology, solving
                coding challenges, doing exercises and exploring new tools in
                the world of coding.
              </p>
              <p>
                <em>
                  Driven by curiosity, I'm always ready to tackle the next big
                  challenge in software development.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
