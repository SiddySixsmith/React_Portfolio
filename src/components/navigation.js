/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.css";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              <h6>About Me</h6>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#project"
              onClick={() => handlePageChange("Project")}
              className={
                currentPage === "Project" ? "nav-link active" : "nav-link"
              }
            >
              <h6>Project</h6>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact"
                  ? "nav-link active links"
                  : "nav-link Links"
              }
            >
              <h6>Contact</h6>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume"
                  ? "nav-link active links"
                  : "nav-link Links"
              }
            >
              <h6>Resume</h6>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
