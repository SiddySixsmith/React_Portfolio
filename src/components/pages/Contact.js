import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/index.css";
// import "../../styles/About.css";

function Contact() {
  return (
    <>
      <div>
        <Helmet>
          <title>Contact</title>
        </Helmet>
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
    </>
  );
}

export default Contact;
