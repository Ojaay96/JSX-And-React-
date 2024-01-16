import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css";

// Products
const products = [
  {
    name: "Benz amg",
    description: "Black",
    price: "$20,000",
    image: "benz.jpeg",
  },
  {
    name: "Audi",
    description: "Black",
    price: "$15,000",
    image: "audi.jpeg",
  },
  {
    name: "Lexus",
    description: "Black",
    price: "$10,000",
    image: "lexus.jpeg",
  },
  {
    name: "Tesla",
    description: "White",
    price: "$30,000",
    image: "tesla.jpeg",
  },
];

const Products = () => {
  return (
    <div className="card-item">
      {products.map((eachCard) => {
        return (
          <Card className="myCard" style={{ width: "18rem" }}>
            <Card.Title>Hello there!</Card.Title>
            <Card.Img variant="top" src={eachCard.image} />
            <Card.Body>
              <Card.Title>{eachCard.name}</Card.Title>
              <Card.Text>{eachCard.description}</Card.Text>
              <Card.Text>{eachCard.price}</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Products;
