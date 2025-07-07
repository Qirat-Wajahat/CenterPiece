import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import PaymentToggle from "../components/PaymentToggle";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setOrderPlaced(true);
    clearCart();
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <Container className="section-padding text-center">
        <div className="display-4 mb-3 text-gold">Cart</div>
        <h2 className="text-muted mb-3">Your cart is empty</h2>
        <p className="text-muted mb-4">
          Add some products to your cart before checking out.
        </p>
        <Button as={Link} to="/shop" variant="success" size="lg">
          Start Shopping
        </Button>
      </Container>
    );
  }

  if (orderPlaced) {
    return (
      <Container className="section-padding text-center">
        <div className="display-4 mb-3 text-gold">Success</div>
        <h2 className="text-gold mb-3">Order Placed Successfully!</h2>
        <p className="text-muted mb-4">
          Thank you for your order. We'll send you a confirmation email shortly.
        </p>
        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
          <Button as={Link} to="/shop" variant="success">
            Continue Shopping
          </Button>
          <Button as={Link} to="/" variant="outline-success">
            Back to Home
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="section-padding">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-gold mb-3">Checkout</h1>
        <p className="lead text-muted">
          Complete your order with your information
        </p>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row>
          {/* Customer Information */}
          <Col lg={8} className="mb-4">
            <Card className="shadow-sm">
              <Card.Header className="bg-gold text-white">
                <h5 className="mb-0">Customer Information</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-bold">First Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-bold">Last Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-bold">Email *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-bold">Phone *</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3">
                    <Form.Label className="fw-bold">Address *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-bold">City *</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-bold">ZIP Code *</Form.Label>
                    <Form.Control
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3">
                    <Form.Label className="fw-bold">Order Notes</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Any special instructions or notes for your order..."
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Payment Method */}
            <Card className="shadow-sm mt-4">
              <Card.Header className="bg-gold text-white">
                <h5 className="mb-0">Payment Method</h5>
              </Card.Header>
              <Card.Body>
                <PaymentToggle
                  paymentMethod={paymentMethod}
                  onPaymentChange={setPaymentMethod}
                />
                {paymentMethod === "online" && (
                  <Alert variant="info" className="mt-3">
                    <strong>Online Payment:</strong> You'll be redirected to our
                    secure payment gateway after placing your order.
                  </Alert>
                )}
                {paymentMethod === "cod" && (
                  <Alert variant="warning" className="mt-3">
                    <strong>Cash on Delivery:</strong> Pay with cash when your
                    order is delivered. Additional fees may apply.
                  </Alert>
                )}
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
                {/* Order Items */}
                <div className="mb-4">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedColor || "default"}`}
                      className="d-flex justify-content-between align-items-center mb-2"
                    >
                      <div className="flex-grow-1">
                        <div className="fw-bold small">{item.name}</div>
                        <div className="text-muted small">
                          Qty: {item.quantity}
                          {item.selectedColor &&
                            ` | Color: ${item.selectedColor}`}
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold">
                          PKR {(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <hr />

                {/* Totals */}
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>PKR {getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span className="text-success">Free</span>
                </div>
                {paymentMethod === "cod" && (
                  <div className="d-flex justify-content-between mb-2">
                    <span>COD Fee:</span>
                    <span>PKR 1,500</span>
                  </div>
                )}
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold">Total:</span>
                  <span className="fw-bold text-gold fs-5">
                    PKR{" "}
                    {(
                      getTotalPrice() + (paymentMethod === "cod" ? 1500 : 0)
                    ).toLocaleString()}
                  </span>
                </div>

                {/* Action Buttons */}
                <Button
                  type="submit"
                  variant="success"
                  size="lg"
                  className="w-100 mb-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Processing...
                    </>
                  ) : (
                    `Place Order - PKR ${(
                      getTotalPrice() + (paymentMethod === "cod" ? 1500 : 0)
                    ).toLocaleString()}`
                  )}
                </Button>

                <Button
                  as={Link}
                  to="/cart"
                  variant="outline-success"
                  className="w-100"
                >
                  Back to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Checkout;
