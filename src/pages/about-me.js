import React from "react";

import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

import MediaQuery from "react-responsive";


import "../index.css";


const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "left",
  height: "100vh",
 
};

const colStyle = {
  display: "flex",
  width: "50vw",
  height: "fit-content",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  
  
}



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
          <Col style={colStyle}>
            <Row>
         
          <p style={fontStyle}>
           Hello, my name is Thomas Martinez. I'm a nature and wildlife photographer based out of Austin, TX
            </p>
            </Row>
            </Col>
        </Container>
     
        
      </MediaQuery>

      <MediaQuery query="(max-width: 880px)">
      <Container fluid style={containerStyle} className="headline-faster">
        <h2>Hello, I'm Thomas Martinez!</h2>
          <p style={fontStyle}>
            I'm a nature and wildlife photographer based out of Austin, TX
            </p>

        </Container>
        
        
      </MediaQuery>
    </>
  );
}
