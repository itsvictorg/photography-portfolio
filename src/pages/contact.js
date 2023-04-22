import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MediaQuery from "react-responsive";
import { Col } from "react-bootstrap";


import "../index.css";


export default function Contact() {

    const containerStyle = {
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        height: "100vh",
        width: "100vh",
    }

    const mobileContainerStyle = {
        display: "flex",
        flexDirection: "row",
        marginTop: "8rem",

        
    }
    const h1Style = {
        fontSize: "3rem",
        color: "black",
        padding: "1rem",
    }

    const h2Style = {
        fontSize: "2rem",
        color: "black",
        padding: "1rem",
    }

    const mobileH1Style = {
        fontSize: "2rem",
        color: "black",
        padding: "1rem",
    }

    const mobileH2Style = {
        fontSize: "1rem",
        color: "black",
        padding: "1rem",
    }


  




    return(
        <>
        <MediaQuery query="(min-width: 769px)">
        <Container fluid style={containerStyle} className="headline-faster">
            
       
            <h1 style={h1Style}>Contact</h1>
      
            <h2 style={h2Style}>thomasgmartinez@gmail.com</h2>
       
        
       
        </Container>
        </MediaQuery>

        <MediaQuery query="(max-width: 880px)">

        <Container fluid style={mobileContainerStyle} className="headline-faster">
            <Col>
            <Row>
            <h1 style={mobileH1Style}>Contact</h1>
            </Row>
            <Row>
            <h2 style={mobileH2Style}>thomasgmartinez@gmail.com</h2>
            </Row>
            </Col>
       
        </Container>
        
        </MediaQuery>


        </>
    );
}