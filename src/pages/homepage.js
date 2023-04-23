import React from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import MediaQuery from "react-responsive";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

import "../index.css";

const containerStyle = {
  display: "flex",
  
  flexDirection: "column",
  textAlign: "center",
  height: "100vh",
  width: "65vw",
  marginTop: "40px",
};

const fontStyle = {
  fontSize: "1.5rem",
  color: "black",
};
const h1FontStyle = {
  fontSize: "3.5rem",
  color: "black",
};
const mobileH1FontStyle = {
  fontSize: "2rem",
  color: "black",
};

const linkStyle = {
  margin: "1rem",
  fontSize: "1.5rem",
  color: "black",
};

const mobileLinkStyle = {
 
  fontSize: "1.0rem",
  color: "black",
};

const rowStyle = {
  
};

const mobileFontStyle = {
  fontSize: "1.0rem",
  color: "black",
};

const mobileContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
  marginTop: "5rem",
};

const links ={
  display: "block",
 
}


export default function Homepage() {
  return (
    <>
      <MediaQuery query="(min-width: 769px)">
        <Container fluid className="container" style={containerStyle}>
          <Row style={rowStyle}>
            <Row>
              <Col>
                <Row>
                 <h1 style={h1FontStyle}>Thomas Martinez</h1>
                </Row>
                <p className="headline" style={fontStyle}>
                  Nature and Wildlife Photographer
                </p>
                <Link to="/gallery" style={linkStyle} className="link">Gallery</Link>
                <Link to ="/about" style={linkStyle} className="link">About</Link>
                <Link to ="/contact" style={linkStyle} className="link">Contact</Link>

              </Col>
            </Row>
          </Row>
          <Container></Container>
        </Container>
      </MediaQuery>

      <MediaQuery query="(max-width: 1224px)">


      <Container fluid className="container" style={mobileContainerStyle}>   
                <Row>
                 <h1 style={mobileH1FontStyle}>Thomas Martinez</h1>
               
                <p className="headline" style={mobileFontStyle}>
                  Nature and Wildlife Photographer
                </p>
                </Row>
                <Row style={links}>
                <Link to="/gallery" style={mobileLinkStyle} className="link">Gallery</Link>
                <Link to ="/about" style={mobileLinkStyle} className="link">About</Link>
                <Link to ="/contact" style={mobileLinkStyle} className="link">Contact</Link>
                </Row>
        </Container>
      </MediaQuery>
    </>
  );
}
