import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.css";

function Header() {
  return (
    <header id="main-title" className="fixed-top">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Daniel Sixsmth</h1>
    </header>
  );
}

export default Header;
