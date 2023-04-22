import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import MediaQuery from "react-responsive";

export default function ImageModal(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imageStyle = {
    maxWidth: '630px',
     maxHeight: '395px',
     width: 'auto',
     height: 'auto',
     boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
     borderRadius: '10px',
   }

   const mobileImageStyle = {
    maxWidth: '90vw',
    maxHeight: '90vh',
    width: 'auto',
    height: 'auto',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }


   const ModalImageStyle = {
    
    maxWidth: '100vw',
    maxHeight: '100vh',
   
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }

   const cardStyle = {
    width: 'fit-content',
    background: 'none',
    border: 'none',
    margin: '4px',
   
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: 'fit-content',
    boxShadow: '0 8px 16px 0 rgb(0, 0, 0, 0), 0 10px 26px 0 rgba(0, 0, 0, 0)',
    borderRadius: '20px',
  };

  const modalStyle = {
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'fit-content',
    boxShadow: '0 8px 16px 0 rgb(0, 0, 0, 0), 0 10px 26px 0 rgba(0, 0, 0, 0)',
    borderRadius: '20px',
 

  }

  
  
  return (
    <>
    <MediaQuery query="(min-width: 769px)">
      <Card style = {cardStyle} className='image' onClick={handleShow}>
        <Card.Img variant="top" src={props.image} style={imageStyle} />
      </Card>

      <Modal show={show} onHide={handleClose}>
       
        
          <img src={props.image} alt={props.title} style={ModalImageStyle}/>
        
        
      </Modal>
      </MediaQuery>

      <MediaQuery query="(max-width: 880px)">
      <Card style = {cardStyle} className='image' onClick={handleShow}>
        <Card.Img variant="top" src={props.image} style={mobileImageStyle} />
      </Card>

      <Modal show={show} onHide={handleClose}>
       
        
          <img src={props.image} alt={props.title} style={ModalImageStyle}/>
        
        
      </Modal>

      </MediaQuery>
    </>
  );
}

