import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../assets/images/cover_img.webp";
import bracesicon from "../assets/images/braces.svg";

export default function Header({ theme, toggleTheme }) {
  return (
    <>
      <div className="banner">
        <img 
          src={bannerImg} 
          alt="Banner" 
          width="1000" 
          height="250" 
          className="img-fluid"
          fetchPriority="high"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <nav
        className={`navbar navbar-expand-lg ${
          theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="braces-icon"
              src={bracesicon}
              alt="braces icon"
              height="30px"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/certificates">
                  Certificates
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eldoria">
                  Main project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Other projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/*<form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="AI Search (Coming...)"
                aria-label="Search"
                disabled
                style={{ cursor: "not-allowed", opacity: 0.7 }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>*/}

 <button 
  onClick={toggleTheme} 
  className="btn" 
  style={{ 
    // Ha light mód van, az #AAB2B6-ot használja, különben a #d0dae2-t
    color: theme === "light" ? "#495057" : "#d0dae2", 
    borderColor: theme === "light" ? "#495057" : "#d0dae2",
    backgroundColor: "transparent",
    fontWeight: "500",
    transition: "all 0.3s ease"
  }}
  // Hover effekt, ami szintén alkalmazkodik a színekhez
  onMouseOver={(e) => {
    const activeColor = theme === "light" ? "#495057" : "#d0dae2";
    e.currentTarget.style.backgroundColor = `${activeColor}15`; // 15 a végén = ~8% átlátszóság
    e.currentTarget.style.boxShadow = `0 0 8px ${activeColor}40`;
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  Switch to {theme === "light" ? "Dark" : "Light"} Mode
</button>

          </div>
        </div>
      </nav>
    </>
  );
}
