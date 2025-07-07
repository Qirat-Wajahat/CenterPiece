import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Card
      as={Link}
      to={`/shop?category=${category.id}`}
      className="category-card text-decoration-none h-100"
    >
      <Card.Body className="text-center">
        <Card.Title className="text-gold display-7">{category.name}</Card.Title>
        <Card.Text className="text-muted">
          Explore our premium {category.name.toLowerCase()} collection
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
