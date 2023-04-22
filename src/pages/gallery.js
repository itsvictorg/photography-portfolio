import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import MediaQuery from "react-responsive";

import ImageModal from "./components/ImageModal";

import "../index.css";

const image2 = require("../assets/images/2.jpg");
const image3 = require("../assets/images/3.jpg");
const image4 = require("../assets/images/4.jpg");
const image7 = require("../assets/images/7.jpg");

const image9 = require("../assets/images/9.jpg");
const image10 = require("../assets/images/10.jpg");
const image11 = require("../assets/images/11.jpg");
const image12 = require("../assets/images/12.jpg");
const image13 = require("../assets/images/13.jpg");
const image14 = require("../assets/images/14.jpg");
const image15 = require("../assets/images/15.jpg");
const image16 = require("../assets/images/16.jpg");
const image17 = require("../assets/images/17.jpg");
const image18 = require("../assets/images/18.jpg");
const image19 = require("../assets/images/19.jpg");
const image20 = require("../assets/images/20.jpg");
const image21 = require("../assets/images/21.jpg");
const image22 = require("../assets/images/22.jpg");
const image24 = require("../assets/images/24.jpg");
const image25 = require("../assets/images/25.jpg");
const image26 = require("../assets/images/26.jpg");

const image28 = require("../assets/images/28.jpg");
const image29 = require("../assets/images/29.jpg");
const image30 = require("../assets/images/30.jpg");
const image31 = require("../assets/images/31.jpg");
const image32 = require("../assets/images/32.jpg");
const image33 = require("../assets/images/33.jpg");
const image34 = require("../assets/images/34.jpg");
const image35 = require("../assets/images/35.jpg");
const image36 = require("../assets/images/36.jpg");
const image37 = require("../assets/images/37.jpg");
const image38 = require("../assets/images/38.jpg");
const image39 = require("../assets/images/39.jpg");

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  width: "95vw",
};

const mobileContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  width: "100vw",
  height: "100vh",
};

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  textAlign: "center",
  width: "100%",
  height: "100%",
  margin: "1rem",
};

const mobileRowStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  textAlign: "center",
  width: "95%",
  margin: "1rem",
};

const fontStyle = {
  fontSize: "2.5rem",
  color: "white",
};

const mobileFontStyle = {
  fontSize: "1.5rem",
  color: "white",
};

const gallery = [
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },

  {
    image: image7,
  },

  {
    image: image9,
  },
  {
    image: image10,
  },
  {
    image: image11,
  },
  {
    image: image12,
  },
  {
    image: image13,
  },
  {
    image: image14,
  },

  {
    image: image15,
  },
  {
    image: image16,
  },
  {
    image: image17,
  },
  {
    image: image18,
  },
  {
    image: image19,
  },
  {
    image: image20,
  },
  {
    image: image21,
  },
  {
    image: image22,
  },

  {
    image: image24,
  },
  {
    image: image25,
  },
  {
    image: image26,
  },

  {
    image: image28,
  },
  {
    image: image29,
  },
  {
    image: image30,
  },
  {
    image: image31,
  },
  {
    image: image32,
  },
  {
    image: image33,
  },
  {
    image: image34,
  },
  {
    image: image35,
  },
  {
    image: image36,
  },
  {
    image: image37,
  },
  {
    image: image38,
  },
  {
    image: image39,
  },
];

const imageStyle = {
  maxWidth: "600px",
  maxHeight: "300px",
  width: "auto",
  height: "auto",
};

export default function Gallery() {
  return (
    <>
      <MediaQuery query="(min-width: 769px)">
        <Container fluid style={containerStyle} className="headline-faster">
          <Row style={rowStyle}></Row>

          <Row style={rowStyle} className="images">
            {gallery.map((images, i) => {
              return <ImageModal key={i} image={images.image} />;
            })}
          </Row>
        </Container>
      </MediaQuery>

      <MediaQuery query="(max-width: 1224px)">
        <Container
          fluid
          style={mobileContainerStyle}
          className="headline-faster"
        >
          <Row style={rowStyle}></Row>

          <Row style={rowStyle} className="images">
            {gallery.map((images, i) => {
              return <ImageModal key={i} image={images.image} />;
            })}
          </Row>
        </Container>
      </MediaQuery>
    </>
  );
}
