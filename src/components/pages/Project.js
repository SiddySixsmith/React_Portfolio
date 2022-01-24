import React from "react";
import { Helmet } from "react-helmet";
import "../../styles/index.css";

function Projects() {
  return (
    <>
      <div>
        <Helmet>
          <title>Project</title>
        </Helmet>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row row-cols-1 row-cols-md-2 g-4 project">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Text Editor</h3>
              <p className="card-text">
                Technolgies: Javascript
                <br />
                <br />
                <a
                  href="https://github.com/SiddySixsmith/Text-Editor"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                <br />
                <br />
                <a
                  href="https://glacial-basin-24902.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deplopyment
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">ReadMe Builder</h3>
              <p className="card-text">
                Technolgies: Javascript
                <br />
                <br />
                <a
                  href="https://github.com/SiddySixsmith/README-Builder"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                <br />
                <br />
                <a
                  href="https://drive.google.com/file/d/1bzJPmUqfoMwV1C9M4Kfr6K0P_UsTyCeF/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Recoding of working product
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Tech Blog</h3>
              <p className="card-text">
                Technolgies: Javascript, Handlebars, Css
                <br />
                <br />
                <a
                  href="https://github.com/SiddySixsmith/Tech-Blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                <br />
                <br />
                <a
                  href="https://powerful-retreat-77857.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deplopyment
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Online Material store</h3>
              <p className="card-text">
                Technolgies: Javascript, Handlebars, Css
                <br />
                <br />
                <a
                  href="https://github.com/SiddySixsmith/Online-Material-Store"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                <br />
                <br />
                <a
                  href="https://murmuring-sierra-35353.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deplopyment
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Weather Dashboard</h3>
              <p className="card-text">
                Technolgies: Javascript, HTML, CSS
                <br />
                <br />
                <a
                  href="https://github.com/SiddySixsmith/Weather-Dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                <br />
                <br />
                <a
                  href="https://siddysixsmith.github.io/Weather-Dashboard/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deplopyment
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Team Profiler</h3>
              <p className="card-text">
                Technolgies: Javascript, HTML, CSS
                <br />
                <br />
                <a
                  href="https://github.com/SiddySixsmith/Team-Profilier"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                <br />
                <br />
                <a
                  href="https://drive.google.com/drive/folders/1Kc08dhMktMsrp-tjLila3_jFwlVAqcfE?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Video of usage
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
