import React from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/fonts/fonts.css';

import About from "./pages/about-me";
import Homepage from "./pages/homepage";
import Gallery from "./pages/gallery.js";
import Contact from "./pages/contact.js";
import MyNavbar from "./pages/components/nav";
import MediaQuery from 'react-responsive'
import { Container, Col } from "react-bootstrap";
import BackgroundSlider from 'react-background-slider'


const backgroundImage = require('./assets/images/backgroundImage.jpg')



const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  opacity: '0.5',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  zIndex: '-1',
  overflow: 'hidden',
  margin: '0',
  padding: '0',
  display: 'flex',
}

const App = () => {

  return (
    <>
       <Container fluid style={backgroundStyle}/>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
