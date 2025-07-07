import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Card className="product-card h-100">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="card-img-top"
        />
        <Badge bg="gold" className="position-absolute top-0 end-0 m-3">
          {product.type}
        </Badge>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="card-title">{product.name}</Card.Title>
        <Card.Text className="text-muted small mb-3 flex-grow-1">
          {product.description.substring(0, 80)}...
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="price">PKR {product.price.toLocaleString()}</span>
        </div>
        <div className="d-flex gap-2">
          <Button
            as={Link}
            to={`/product/${product.id}`}
            size="sm"
            className="flex-grow-1 border-0"
          >
            View Details
          </Button>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="flex-grow-1 border-0"
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
