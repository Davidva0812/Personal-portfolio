import React from "react";
import profilePic from '../assets/images/me.jpg'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4 img-fluid profile-img"
        src={profilePic}
        alt="my profile image"
        width="250"
        height="250"
      />
      <h2>Junior Software Developer</h2>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Hello, I am David Varga and welcome to my portfolio website!
        </p>
        <p></p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <Link to="/contact" className="btn btn-primary btn-lg px-4">
            Contact Me
          </Link>
          <Link to="/projects" className="btn btn-secondary btn-lg px-4">
            View my portfolio
          </Link>
        </div>
    </div>
  </div>  
  )
}