import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark sticky position-fixed">
      {/* <nav className="navbar navbar-expand-lg navbar-dark sticky"> */}

        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky" data-bs-theme="dark" data-offset="500"> */}
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <ScrollLink to="home" smooth={true} duration={500} className="nav-link" onClick={() => scroll.scrollToTop()}>
                    Home
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink to="skills" smooth={true} duration={500} className="nav-link">
                    Skills
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink to="courses" smooth={true} duration={500} className="nav-link">
                    Courses
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink to="certificate" smooth={true} duration={500} className="nav-link">
                    Certificates
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink to="contact" smooth={true} duration={500} className="nav-link">
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
