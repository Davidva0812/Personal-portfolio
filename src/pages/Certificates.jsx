import React from "react";

export default function Certificates() {
  const certifications = [
    {
      platform: "Cisco Networking Academy",
      title: "Introduction to Cybersecurity (In Progress)",
      info: "Networking Basics, Threat Actors, White/Gray/Black Hat Hacking, Security Ethics",
    },
    {
      platform: "Udemy",
      title: "Complete Front-End Development Course",
      info: "HTML, CSS, JavaScript, Bootstrap, React, Angular",
    },
    {
      platform: "Udemy",
      title: "The Complete Web Development Bootcamp",
      info: "HTML, CSS, JavaScript, Node.js, Express, MongoDB, REST APIs, Git",
    },
    {
      platform: "Udemy",
      title: "Python Bootcamp London: 100 Days of Code",
      info: "OOP, Flask, automation, web scraping, and full-stack mini-projects.",
    },
    {
      platform: "freeCodeCamp",
      title: "JavaScript Algorithms and Data Structures",
      info: "ES6, data structures, algorithms, functional and object-oriented programming.",
    },
    {
      platform: "Gerilla Mentor Klub",
      title: "Front-End Web Development",
      info: "HTML, CSS, Bootstrap fundamentals",
    },
    {
      platform: "Gerilla Mentor Klub",
      title: "Version Control",
      info: "Git & GitHub for developers",
    },
    {
      platform: "Gerilla Mentor Klub",
      title: "Data Processing with Python",
      info: "Working with files, parsing, and basic data handling",
    },
    {
      platform: "Gerilla Mentor Klub",
      title: "Advanced Python",
      info: "Functional programming, modules, advanced data structures",
    },
    {
      platform: "Mimo App",
      title: "JavaScript and React Basics",
      info: "Core fundamentals and component logic",
    },
    {
      platform: "Mimo App",
      title: "HTML & CSS Fundamentals",
      info: "Basic structure and styling",
    },
  ];

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-5" style={{ color: "#6ACDE5", textAlign: "center" }}>
        📜 Certificates
      </h2>

      <div className="neon-timeline">
        {certifications.map((cert, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="platform-label">{cert.platform}</span>
              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-info">{cert.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
