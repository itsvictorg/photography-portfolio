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
      <Container fluid style={containerStyle} className="headline-faster">
          <p style={fontStyle}>
            Hello, I'm Thomas Martinez! I'm a nature and wildlife photographer based out of Austin, TX
            </p>

        </Container>
        
      </MediaQuery>
    </>
  );
}
