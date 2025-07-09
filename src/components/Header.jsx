import React from "react";
import { Link } from "react-router-dom";
import bannerPic from "../assets/images/cover_img.png"
import bracesicon from "../assets/images/braces.svg"

export default function Header({ theme, toggleTheme }) {
  return (
    <>
      <div className="banner">
        <img
          className="img-fluid"
          src={bannerPic}
          alt="Cover image"
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
                <Link className="nav-link active"  to="/">
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

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
