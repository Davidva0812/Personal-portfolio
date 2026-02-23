import React from "react";
import profilePic from "../assets/images/me.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="px-4 pb-5 pt-4 mt-4 text-center">
      <h2>Junior Software Developer</h2>
      <h3 className="mb-4">
        <Link
          to="/about"
          style={{
            color: "#6ACDE5",
            textDecoration: "none",
            marginLeft: "10px",
          }}
          className="internship-link"
        >
          6 Months Internship Experience
        </Link>
      </h3>
      <img
        className="d-block mx-auto mb-4 img-fluid profile-img"
        src={profilePic}
        alt="my profile"
        width="250"
        height="250"
        style={{ borderRadius: "10px" }}
      />
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Hello, I am David Varga and welcome to my portfolio website!
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-4">
          <Link
            to="/contact"
            className="btn custom-btn-primary btn-lg px-4 shadow-sm"
          >
            Contact Me
          </Link>
          <Link to="/projects" className="btn custom-btn-outline btn-lg px-4">
            View my portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
