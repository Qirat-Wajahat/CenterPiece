// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar as BsNavbar, Badge } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BsNavbar
      bg="white"
      variant="light"
      expand="lg"
      className={`navbar-modern ${scrolled ? "scrolled" : ""}`}
      fixed="top"
    >
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="navbar-brand-modern">
          {/* <img
            src="/vite.png"
            alt="Center Piece"
            className="navbar-logo"
            width="40"
            height="40"
          /> */}
          <span className="brand-text">Center Piece</span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler-modern"
        />

        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-nav-modern">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link-modern ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <span className="nav-text">Home</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/shop"
              className={`nav-link-modern ${
                location.pathname === "/shop" ? "active" : ""
              }`}
            >
              <span className="nav-text">Shop</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`nav-link-modern ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <span className="nav-text">About</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`nav-link-modern ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <span className="nav-text">Contact</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/cart"
              className={`nav-link-modern  ${
                location.pathname === "/cart" ? "active" : ""
              }`}
            >
              <span className="nav-text">Cart</span>
              {getTotalItems() > 0 && (
                <Badge className="cart">{getTotalItems()}</Badge>
              )}
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
