import React from "react";
// import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown'

import { useState } from "react";
//import index.css
import "../../index.css";

function MyNavbar() {

    const [expanded, setExpanded] = useState(false);

  return (
    <Navbar sticky="top" bg="light" expand="lg" expanded={expanded}>
        
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
          
            <Nav.Link href="#/" onClick={() => setExpanded(false)} className="link">HOME</Nav.Link>

            <Nav.Link href="#/about" onClick={() => setExpanded(false)} className="link">ABOUT</Nav.Link>

            <Nav.Link href="#/gallery" onClick={() => setExpanded(false)} className="link">GALLERY</Nav.Link>

            <Nav.Link href="#/contact" onClick={() => setExpanded(false)} className="link">CONTACT</Nav.Link>

           

          
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
