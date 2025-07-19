import React from "react";

export default function Certificates() {
  return (
    <div className="container mt-4">
      <h2>📜 Certificates</h2>
       <ul>
        <li>Udemy - Dr. Angela Yu
            <ul>
                <li><strong>The Complete Web Development Bootcamp</strong></li> -  HTML, CSS, JavaScript, Node.js, Express, MongoDB, REST APIs, Authentication, Git
                 <p className="card-text">State: <strong className="text-warning">In progress</strong></p>
            </ul>
            <ul>
                <li><strong>Python Bootcamp London: 100 Days of Code</strong></li> - In-depth Python course covering OOP, Flask, 
                •	In-depth Python course covering OOP, Flask, automation, web scraping, and full-stack mini-projectsautomation, web scraping, and full-stack mini-projects.
            </ul>
        </li>
        <br />
        <li>freeCodeCamp
          <ul>
            <li><strong>JavaScript Algorithms and Data Structures</strong></li> - Covers the fundamentals of JavaScript programming, including ES6, basic data structures, 
            algorithms, functional programming, object-oriented programming, and regular expressions.
          </ul>
        </li>
        <br />
        <li>Gerilla Mentor Klub
            <ul>
                <li><strong>Front-End Web Development</strong> - HTML, CSS, Bootstrap fundamentals</li>
                <li><strong>Version Control</strong> - Git & GitHub for developers</li>
                <li><strong>Data Processing with Python</strong> - Working with files, parsing, and basic data handling</li>
                <li><strong>Advanced Python</strong> - Functional programming, modules, advanced data structures</li>
            </ul>
        </li>
        <br />
        <li>Mimo App
            <ul>
                <li><strong>JavaScript and React Basics</strong></li>
                <li><strong>HTML & CSS Fundamentals</strong></li>
            </ul>
        </li>
    </ul>
    </div>
  );
}
