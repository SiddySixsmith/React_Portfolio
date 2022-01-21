import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/About.css";

function AboutMe() {
  return (
    <>
      <div>
        <Helmet>
          <title>About Me</title>
        </Helmet>
      </div>
      <div className="paragraph">
        <p>
          For the past 4 years i have spend my time in the construction
          industry, applying my physical strengths to concrete and stone
          finshing. I have enjoyed the skills i have learnt during this time
          such as leadership, time managment and commincation. It's time for me
          to get started on a new path, a path i am most excited about. During
          the past 6 years I have also had the great opertunity to valunteer my
          time in a basketball association in Mundaring. I went from general
          memebr to an excutive memember helping mould and manage game
          equipment, teams and IT based equipment such as ipads, network devices
          and i have spent some time using microsft admin center.
        </p>
        <p>
          During High school I spent endless amounts of time learning computer
          networking and web devolpemnt. After several years I had the
          opertunity to be part of UWA/Trilogy Coding Bootcamp. Refreshing my
          old skills and learning new techniques has been an amazing experience
          and i am keen to put to them to use.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
