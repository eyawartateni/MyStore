import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from "react-bootstrap/Alert";

export default function ProuctDetails()
{
    const {name}=useParams();
    const product=products.find((prod=>prod.name===name));
    console.log(product);
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`../assets/images/${this.props.product.img}`)} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
           {product.description}
          </Card.Text>
          
          <Card.Text>Price : {product.price}</Card.Text>
          <Card.Text> Quantity:{product.qte}</Card.Text>
          <Card.Text>Likes: {product.like}</Card.Text>
          
        </Card.Body>
        
      </Card>
    )
}