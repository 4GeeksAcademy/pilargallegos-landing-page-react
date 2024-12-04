import React from "react";
import Button from './Button';
import { Card } from 'react-bootstrap';


export function MyCard({ title, text, image }) {
    return (
      <Card className="text-center">
        <Card.Header className="p-0">
            <img src={image} className="card-img-top" alt="" />
            </Card.Header>
        <Card.Body>
        <h5 className="card-tittle">{title}</h5>
        <p className="card-text">{text}</p>
        </Card.Body>
        <Card.Footer><Button text="Find out more!" /></Card.Footer>
      </Card>
    );
  } 