import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/index.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <Helmet>
          <title>Contact</title>s
        </Helmet>
      </div>
      <div className="paragraph">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            aria-label="Your Name"
            aria-describedby="button-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email"
            aria-label="Your Email"
            aria-describedby="button-addon2"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div id="submitBtn">
          <button id="submit" type="button" className="btn btn-primary btn-lg">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
