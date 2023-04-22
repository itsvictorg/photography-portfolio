import React from "react";

import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";


export default function Contact() {

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        height: "100vh",
        width: "80vw",
        margin: "auto",
        padding: "2rem",
    }

    const rowStyle = {
       padding: "1rem",
    }

    const linkStyle = {
        padding: "1rem",
        color: "lightblue",
        fontSize: "1.5rem",
        textDecoration: "none",
        fontWeight: "bold",


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


  




    return(
        <>
        <Container fluid style={containerStyle} className="headline-faster">
            
        <Row style={rowStyle}>
            <h1 style={h1Style}>Contact</h1>
        </Row>
        <Row style={rowStyle}>
            <h2 style={h2Style}>thomasgmartinez@gmail.com</h2>
        </Row>
        
       
        </Container>
        </>
    );
}