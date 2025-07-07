// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <Container>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <h5 className="fw-bold text-gold mb-3">Center Piece</h5>
            <p className="text-muted mb-3">
              Premium surface solutions for every space. From artificial grass
              to PVC mats, we bring quality and innovation to your environment.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white text-decoration-none">
                <span className="fs-4">Facebook</span>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <span className="fs-4">Instagram</span>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <span className="fs-4">Twitter</span>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <span className="fs-4">LinkedIn</span>
              </a>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-muted text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/shop" className="text-muted text-decoration-none">
                  Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-muted text-decoration-none">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-muted text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3">Products</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/shop?category=grass"
                  className="text-muted text-decoration-none"
                >
                  Artificial Grass
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/shop?category=mats"
                  className="text-muted text-decoration-none"
                >
                  PVC Mats
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/shop?category=tiles"
                  className="text-muted text-decoration-none"
                >
                  Floor Tiles
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/shop?category=fabrics"
                  className="text-muted text-decoration-none"
                >
                  Wall Fabrics
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <ul className="list-unstyled">
              <li className="mb-2 text-muted">
                123 Business Street, Dubai, UAE
              </li>
              <li className="mb-2">
                <a
                  href="tel:+971501234567"
                  className="text-muted text-decoration-none"
                >
                  +971 50 123 4567
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="mailto:info@centerpiece.ae"
                  className="text-muted text-decoration-none"
                >
                  info@centerpiece.ae
                </a>
              </li>
              <li className="mb-2 text-muted">Mon-Fri: 9AM-6PM</li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row className="align-items-center">
          <Col md={6}>
            <small className="text-muted">
              © 2025 Center Piece. All rights reserved.
            </small>
          </Col>
          <Col md={6} className="text-md-end">
            <small className="text-muted">
              <Link
                to="/privacy"
                className="text-muted text-decoration-none me-3"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted text-decoration-none">
                Terms of Service
              </Link>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
