// src/pages/ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Form,
} from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import PaymentToggle from "../components/PaymentToggle";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("online");

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
    if (foundProduct && foundProduct.colors.length > 0) {
      setSelectedColor(foundProduct.colors[0]);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        ...product,
        selectedColor,
        quantity,
      });
    }
  };

  const handleCheckout = () => {
    handleAddToCart();
    // Navigate to checkout
    window.location.href = "/checkout";
  };

  if (!product) {
    return (
      <Container className="section-padding text-center">
        <div className="display-4 mb-3 text-gold">Product</div>
        <h2 className="text-muted">Product not found</h2>
        <Button as={Link} to="/shop" variant="success" className="mt-3">
          Back to Shop
        </Button>
      </Container>
    );
  }

  return (
    <Container className="section-padding">
      <Row>
        {/* Product Image */}
        <Col lg={6} className="mb-4">
          <Card className="border-0 shadow-sm">
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
            />
          </Card>
        </Col>

        {/* Product Information */}
        <Col lg={6}>
          <div className="mb-4">
            <Badge bg="gold" className="mb-2">
              {product.type}
            </Badge>
            <h1 className="display-5 fw-bold text-gold mb-3">{product.name}</h1>
                            <div className="h2 text-dark mb-3">PKR {product.price.toLocaleString()}</div>
            <p className="lead text-muted mb-4">{product.description}</p>
          </div>

          {/* Quantity Selection */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Quantity</h5>
            <div className="d-flex align-items-center gap-3">
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
              <span className="fw-bold fs-5">{quantity}</span>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Payment Method</h5>
            <PaymentToggle
              paymentMethod={paymentMethod}
              onPaymentChange={setPaymentMethod}
            />
          </div>

          {/* Action Buttons */}
          <div className="d-flex flex-column flex-md-row gap-3 mb-4">
            <Button
              size="lg"
              onClick={handleAddToCart}
              className="flex-grow-1 border-0"
            >
              Add to Cart
            </Button>
            <Button
              variant="outline-success"
              size="lg"
              onClick={handleCheckout}
              className="flex-grow-1"
            >
              Checkout Now
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
