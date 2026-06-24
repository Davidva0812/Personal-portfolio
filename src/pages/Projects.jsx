import React, { useState, useEffect, useRef } from "react";
import spellbook from "../assets/images/spellbook.png";
import eldoriaSite from "../assets/images/eldoria-website.png";
import jsWeather from "../assets/images/js-weather.png";
import analysis from "../assets/images/balance.png";
import portfolio from "../assets/images/portfolio-pic.png";
import bitcoinData from "../assets/images/bitcoin_data.png";
import movieApp from "../assets/images/light_mode.png";
import weatherApp from "../assets/images/weather_debrecen.png";
import halloweenGame from "../assets/images/halloween_shooter.png";
import calculator from "../assets/images/calculator.png";
import todolist from "../assets/images/todolist.png";
import aiSearch from "../assets/images/aisearch.png";
import aiAssistant from "../assets/images/ai-assistant.png";
import fintechProject from "../assets/images/fintech-project.png";

const projectsData = [
  {
    title: "🛡️ FinTech Order & Transaction Management System",
    tech: "FastAPI, SQLite, aiosqlite, Pydantic v2, SQL",
    desc: "A production-ready asynchronous backend demonstrating strict ACID transactions and automated rollback safety. Features advanced analytical data tracking and zero-configuration schema auto-initialization.",
    github: "https://github.com/Davidva0812/fintech-order-transaction-fastapi",
    img: fintechProject,
  },
  {
    title: "⚡Real-Time AI Document Assistant",
    tech: "React.js, FastAPI, Llama 3 (Groq), LangChain, ChromaDB",
    desc: "RAG application leveraging Groq LPU technology to deliver fast response for analyzing documents. The combination of React frontend and FastAPI backend.",
    github: "https://github.com/Davidva0812/personal-rag-ai-assistant",
    img: aiAssistant,
  },
  {
    title: "🤖 AI-Powered RAG Knowledge Base",
    tech: "Python, Llama 3 (Groq), SentenceTransformers, ChromaDB, Gradio",
    desc: "Multilingual RAG system using Llama 3 and ChromaDB to chat with private documents accurately and without hallucinations.",
    github: "https://github.com/Davidva0812/semantic-knowledge-base",
    img: aiSearch,
  },
  {
    title: "🎮 Fantasy RPG Website",
    tech: "HTML, CSS, JS",
    desc: "Tales of Eldoria - Role-playing game website.",
    github: "https://github.com/Davidva0812/Fantasy-website",
    live: "https://davidva0812.github.io/Fantasy-website/",
    img: eldoriaSite,
  },
  {
    title: "🧙‍♂️ Spellbook Web App",
    tech: "Flask, SQL, Bootstrap",
    desc: "Full-stack application with user authentication and CRUD operations.",
    github: "https://github.com/Davidva0812/spellbook_app",
    img: spellbook,
  },
  {
    title: "🌤️ Dynamic Weather App",
    tech: "JavaScript, HTML, CSS",
    desc: "Provides real-time data and a 5-day forecast with dynamic UI that adapts its background based on current weather conditions.",
    github: "https://github.com/Davidva0812/weather-app-js",
    img: jsWeather,
  },
  {
    title: "📊 Financial Data Analysis Project",
    tech: "Python, Pandas, Plotly",
    desc: "Analytical scripts for CSV data using Pandas and Plotly.",
    github: "https://github.com/Davidva0812/financial-analysis",
    img: analysis,
  },
  {
    title: "👤 Personal Portfolio",
    tech: "Node.js, React, Bootstrap, HTML, CSS",
    desc: "A personal portfolio website.",
    github: "https://github.com/Davidva0812/Personal-portfolio",
    img: portfolio,
  },
  {
    title: "🗃️ To-Do List App",
    tech: "Node.js, JavaScript, React, HTML, CSS",
    desc: "A basic task manager.",
    github: "https://github.com/Davidva0812/To-do-list",
    img: todolist,
  },
  {
    title: "📊  Bitcoin Price Prediction",
    tech: "Python, Pandas, NumPy, Scikit-learn, Plotly",
    desc: "A simple prediction of Bitcoin closing prices with Polynomial Regression.",
    github: "https://github.com/Davidva0812/bitcoin-prediction",
    img: bitcoinData,
  },
  {
    title: "🍿 Movie Info App",
    tech: "Python, PyGame",
    desc: "A simple movie information app built with Pygame, using the OMDb API.",
    github: "https://github.com/Davidva0812/movie-api",
    img: movieApp,
  },
  {
    title: "🎃 Undead Shooter Halloween Game",
    tech: "Python, PyGame",
    desc: "A 2D arcade-style shooter game built with Pygame.",
    github: "https://github.com/Davidva0812/halloween-shooter-game",
    img: halloweenGame,
  },
  {
    title: "☀️ Weather App with Pygame",
    tech: "Python, PyGame",
    desc: "A simple weather application built using Python's Pygame library and OpenWeather API.",
    github: "https://github.com/Davidva0812/weather-api",
    img: weatherApp,
  },
  {
    title: "🔢 Advanced Calculator",
    tech: "Python, PyGame, Tkinter",
    desc: "A user-friendly advanced calculator application built using Python's Tkinter GUI framework.",
    github: "https://github.com/Davidva0812/calculator",
    img: calculator,
  },
];

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 },
    ); // Stars, when you see the 10% of the img

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="project-card-container" ref={cardRef}>
          <div className={`project-card-inner ${flipped ? "is-flipped" : ""}`}>
            {/* FRONT SIDE */}
            <div className="card-front">
              <div>
                <h4 style={{ color: "#6ACDE5" }}>{project.title}</h4>
                <br />
                <p>{project.desc}</p>
                <p>{project.tech}</p>
              </div>
              <button
                className="btn btn-outline-info btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(true);
                }}
              >
                Details & Links ➜
              </button>
            </div>

            {/* BACK SIDE */}
            <div className="card-back">
              <div
                className="card-back-image-section"
                style={{
                  backgroundImage: `url(${project.img})`,
                  cursor: "zoom-in",
                }}
                onClick={() => setIsOpen(true)}
              >
                <div className="card-back-overlay">
                  <div className="d-flex flex-column align-items-center justify-content-center gap-3 w-100">
                    {/* GitHub icon button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="github-circle-btn"
                      onClick={(e) => e.stopPropagation()}
                      title="GitHub Repository"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>

                    {/* Live Demo button*/}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-success btn-sm px-3 rounded-pill"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-back-footer">
                <button
                  className="btn btn-link text-white w-100 py-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlipped(false);
                  }}
                >
                  Back to front
                </button>
              </div>
            </div>
          </div>{" "}
          {/* project-card-inner ends */}
        </div>{" "}
        {/* project-card-container ends */}
      </div>{" "}
      {/* oolumn ends */}
      {/* MODAL / POPUP */}
      {isOpen && (
        <div className="custom-modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="custom-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header-bar">
              <strong style={{ color: "#6ACDE5" }}>{project.title}</strong>
              <button className="close-x-btn" onClick={() => setIsOpen(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body-content text-center">
              <img
                src={project.img}
                alt={project.title}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Projects() {
  return (
    <div className="container mt-4">
      <h2 className="mb-5">🧪 My Projects</h2>
      <div className="row">
        {projectsData.map((p, index) => (
          <ProjectCard key={index} project={p} />
        ))}
      </div>
    </div>
  );
}
