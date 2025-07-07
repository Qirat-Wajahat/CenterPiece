// src/pages/Home.jsx
import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  const heroSlides = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/4c/18/92/4c1892d3777953693f25abcfa5a9f881.jpg",
      title: "Premium Artificial Grass",
      subtitle:
        "Transform your outdoor space with our high-quality artificial grass",
      cta: "Shop Grass",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/c7/25/89/c725894052c0f9cf0f1d521f4ff45729.jpg",
      title: "Durable PVC Mats",
      subtitle: "Professional-grade mats for commercial and residential use",
      cta: "Shop Mats",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/56/a0/76/56a0766c692d620e38011bd38405cb86.jpg",
      title: "PVC Floor Tiles",
      subtitle: "Beautiful tiles to enhance any interior space",
      cta: "Shop Tiles",
    },
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-4">
                Premium Surface Solutions
              </h1>
              <p className="lead mb-4">
                Discover our collection of high-quality artificial grass, PVC
                mats, floor tiles, and wall fabrics. Transform your space with
                Center Piece.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Button
                  as={Link}
                  to="/shop"
                  size="lg"
                  className="fw-bold border-0"
                >
                  Shop Now
                </Button>
                <Button as={Link} to="/about" size="lg" className="border-0">
                  Learn More
                </Button>
              </div>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0">
              <Carousel
                indicators={false}
                controls={false}
                interval={5000}
                className="rounded-3 overflow-hidden shadow-lg"
              >
                {heroSlides.map((slide) => (
                  <Carousel.Item key={slide.id}>
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        height: "400px",
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="text-center text-white">
                        <h2 className="fw-bold mb-3">{slide.title}</h2>
                        <p className="mb-4">{slide.subtitle}</p>
                        <Button
                          as={Link}
                          to="/shop"
                          className="fw-bold border-0"
                        >
                          {slide.cta}
                        </Button>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-gold mb-3">
              Product Categories
            </h2>
          </div>
          <Row className="g-4">
            {categories.map((category) => (
              <Col key={category.id} md={6} lg={3}>
                <CategoryCard category={category} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-gold mb-3">
              Featured Products
            </h2>
            <p className="lead text-muted">
              Discover our most popular and premium surface solutions
            </p>
          </div>
          <Row className="g-4">
            {featuredProducts.map((product) => (
              <Col key={product.id} md={6} lg={4}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button
              as={Link}
              to="/shop"
              size="lg"
              className="fw-bold px-4 border-0"
            >
              View All Products
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gold text-dark">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Why Choose Center Piece?</h2>
            <p className="lead">
              We're committed to providing the highest quality surface solutions
            </p>
          </div>
          <Row className="g-4">
            <Col md={4} className="text-center">
              <div className="display-4 mb-3 text-gold">Premium</div>
              <h4 className="fw-bold mb-3">Premium Quality</h4>
              <p className="text-muted">
                All our products meet the highest industry standards for
                durability and performance.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <div className="display-4 mb-3 text-gold">Delivery</div>
              <h4 className="fw-bold mb-3">Fast Delivery</h4>
              <p className="text-muted">
                Quick and reliable delivery to your doorstep with secure
                packaging.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <div className="display-4 mb-3 text-gold">Support</div>
              <h4 className="fw-bold mb-3">Expert Support</h4>
              <p className="text-muted">
                Our team of experts is always ready to help you choose the
                perfect solution.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
