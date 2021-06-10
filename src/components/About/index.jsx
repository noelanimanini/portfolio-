import React from "react";
import thank from "../images/thank.png";
import crystal from "../images/crystal.JPG";
import { Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import about from "./about.css";

function About() {
  const imageStyle = {
    width: "35%",
  };

  const thankImage = {
    width: "30%",
  };

  const back = {
    borderStyle: "groove",
    borderColor: "bisque",
    display: "inline-block",
  };

  return (
    <div>
      <Link to="/">
        <button className="backbtn">back</button>
      </Link>
      <div
        style={{
          fontFamily: "LemonMelon",
          fontSize: "35px",
        }}
      >
        <h1 style={{ paddingTop: "15px" }}>
          {" "}
          | Software Engineer | Neuroscientist |{" "}
        </h1>

        <Image src={thank} style={thankImage} />
        <Image src={crystal} roundedCircle style={imageStyle} />
      </div>
      <Card
        style={{ width: "65%", display: "inline-block", borderRadius: "70&" }}
      >
        <Card.Body>
          Hello! Thank you for visiting my portfolio. My name is Crystal and I'm
          a Fullstack software engineer with a background in neuroscience and a
          love for language and hackathons. I have always been the sort of
          person who seeks consensus, my approach to leadership is collaborative
          and team-oriented. I believe the most effective technical solutions
          are realized when all stakeholder perspectives are valued.
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
