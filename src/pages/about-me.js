import React from "react";

// import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import MediaQuery from "react-responsive";
// import { Card } from "react-bootstrap";

import "../index.css";
import { Link } from "react-router-dom";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  width: "90vw",
  height: "100vh",
  margin: "auto",
  padding: "6rem",
  lineHeight: "3rem",
};

const mobileContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  width: "90vw",
  height: "fit-content",
  margin: "1.5rem",
  padding: "1rem",
};

const fontStyle = {
  fontSize: "1.5rem",
  color: "black",
};

const buttonStyle = {
  margin: "1rem",
};

const mobileFontStyle = {
  fontSize: "1.1rem",
  color: "black",
};

export default function AboutMe() {
  return (
    <>
      <MediaQuery query="(min-width: 769px)">
        <Container fluid style={containerStyle} className="headline-faster">
          <p style={fontStyle}>
            Hello, I'm Thomas Martinez! I'm a nature and wildlife photographer based out of Austin, TX
            </p>

        </Container>
      </MediaQuery>

      <MediaQuery query="(max-width: 880px)">
        <Container
          fluid
          style={mobileContainerStyle}
          className="headline-faster"
        >
          <p style={mobileFontStyle}>
            Hello, I'm Victor Gonzalez! I am a software developer specializing
            in web development. I really enjoy solving problems and I think
            coding is really exciting because of that. I see it as a puzzle with
            endless amounts of solutions and finding the most efficient and
            effective solution is the challenge. I have experience in front-end
            and back-end development. Most of my front-end experience is in
            JavaScript, React.js, HTML, and CSS. My back-end experience is with
            Node.js, Express.js, mySQL, and MongoDB.
          </p>
          <p style={mobileFontStyle}>
            When I'm not coding or working, I enjoy playing video games,
            making music, and learning new useful(sometimes not so useful but
            fun) skills. I love being creative and I'm always looking
            for new ways to get inspired. I think inspiration can come from many
            different sources so exploring new things is always fun.
          </p>
          <div>
            <Button
              href="#/projects"
              variant="outline-light"
              style={buttonStyle}
            >
              See My Projects
            </Button>
          </div>
        </Container>
      </MediaQuery>
    </>
  );
}
