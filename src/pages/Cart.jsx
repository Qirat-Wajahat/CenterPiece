import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    } else {
      removeFromCart(productId);
    }
  };

  if (items.length === 0) {
    return (
      <Container className="section-padding text-center">
        <div className="display-4 mb-3 text-gold">Cart</div>
        <h2 className="text-muted mb-3">Your cart is empty</h2>
        <p className="text-muted mb-4">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Button as={Link} to="/shop" className="border-0" size="lg">
          Start Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container className="section-padding">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-gold mb-3">Shopping Cart</h1>
        <p className="lead text-muted">
          Review your items and proceed to checkout
        </p>
      </div>

      <Row>
        {/* Cart Items */}
        <Col lg={8} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="bg-gold text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Cart Items ({items.length})</h5>
                <Button variant="outline-light" size="sm" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.selectedColor || "default"}`}
                  className="border-bottom p-4"
                >
                  <Row className="align-items-center">
                    <Col md={2} className="mb-3 mb-md-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ height: "80px", objectFit: "cover" }}
                      />
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                      <h6 className="fw-bold text-gold mb-1">{item.name}</h6>
                      <p className="text-muted small mb-1">Type: {item.type}</p>
                      {item.selectedColor && (
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-muted small">Color:</span>
                          <div
                            className="rounded-circle"
                            style={{
                              width: "16px",
                              height: "16px",
                              backgroundColor: item.selectedColor.toLowerCase(),
                              border: "1px solid #dee2e6",
                            }}
                            title={item.selectedColor}
                          />
                          <span className="small">{item.selectedColor}</span>
                        </div>
                      )}
                    </Col>
                    <Col md={2} className="mb-3 mb-md-0">
                      <div className="text-center">
                        <span className="fw-bold text-gold">PKR {item.price.toLocaleString()}</span>
                      </div>
                    </Col>
                    <Col md={2} className="mb-3 mb-md-0">
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </Button>
                        <span className="fw-bold">{item.quantity}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                    <Col md={2} className="text-center">
                      <div className="mb-2">
                                        <span className="fw-bold text-gold">
                  PKR {(item.price * item.quantity).toLocaleString()}
                </span>
                      </div>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        {/* Order Summary */}
        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Header className="bg-gold text-white">
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>PKR {getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span className="text-success">Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <span className="fw-bold">Total:</span>
                <span className="fw-bold text-gold fs-5">
                  PKR {getTotalPrice().toLocaleString()}
                </span>
              </div>

              <Button
                as={Link}
                to="/checkout"
                variant="success"
                size="lg"
                className="w-100 mb-3"
              >
                Proceed to Checkout
              </Button>

              <Button
                as={Link}
                to="/shop"
                variant="outline-success"
                className="w-100"
              >
                Continue Shopping
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
