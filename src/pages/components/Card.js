import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';

export default function CardComponent(props) {
  const cardStyle = {
    width: 'fit-content',
    background: 'none',
    border: 'none',
    margin: '1rem',
    marginRight: '1rem',
    margineLeft: '1rem',
    display: 'inline-block',
    height: 'fit-content',
    boxShadow: '0 8px 16px 0 rgb(0, 0, 0, 0), 0 10px 26px 0 rgba(0, 0, 0, 0)',
    borderRadius: '20px',
  };

  const mobileCardStyle = {
    width: '35rem',
    margin: '1rem',
    padding: '1rem',
    display: 'inline-block',
    height: 'fit-content',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  }


  const imageStyle = {
   maxWidth: '530px',
    maxHeight: '295px',
    width: 'auto',
    height: 'auto',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  }
  

  return (
    <>
    <MediaQuery query="(min-width: 769px)">
    <Card style = {cardStyle} className='image'>
      <Card.Img variant="top" src={props.image} style={imageStyle} />
   
      
    </Card>
    </MediaQuery>

    <MediaQuery query="(max-device-width: 1224px)">

    <Card style = {mobileCardStyle} class = "shadow">
      <Card.Img  variant="top" src={props.image} />
      
    </Card>

      </MediaQuery>
      </>
        

    // <div className="container">
    //   <div className="card" style={cardStyle}>
    //     <div className="card-body">
    //     <h5 className="card-title">{props.name}</h5>
    //     <img src={props.image} alt=""></img>
    //       <p className="card-text">{props.description}</p>
    //       <p className="card-text">{props.github_link}</p>
          
    //     </div>
    //   </div>
    // </div>
  );
}