import React from "react";
import { Helmet } from "react-helmet";
import "../../styles/index.css";

function Resume() {
  return (
    <>
      <div className="resume">
        <Helmet>
          <title>Resume</title>
        </Helmet>
      </div>
      <div>
        <div className="resume">
          <h3>Current Proficiencies</h3>
          <ul>
            <li className="resume-list">Vanilla CSS</li>
            <li className="resume-list">Native Javascript</li>
            <li className="resume-list">Handlebars</li>
            <li className="resume-list">React</li>
            <li className="resume-list">Mongoose</li>
            <li className="resume-list">Node.js</li>
            <li className="resume-list">Express.js</li>
            <li className="resume-list">MERN applications</li>
          </ul>
        </div>
        <br />
        <button id="resumeBtn">
          <a
            id="resumeLink"
            href=" /assets/Daniel-Sixmsith-ResumeNew.pdf"
            download
          >
            Download My Resume!
          </a>
        </button>
      </div>
    </>
  );
}

export default Resume;
