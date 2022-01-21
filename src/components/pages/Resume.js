import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "../../styles/Resume.css";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="Container-Resume">
      <Document
        file="../assets/Daniel-Sixmsith-ResumeNew.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <a
        className="resume"
        href="./assets/Daniel-Sixmsith-ResumeNew.pdf"
        download
        target="_blank"
      >
        Download
      </a>
    </div>
  );
}

export default Resume;
