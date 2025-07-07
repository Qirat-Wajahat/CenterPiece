// src/pages/About.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-4">Our Story</h1>
              <p className="lead mb-4">
                Discover the journey behind Center Piece and our commitment to
                transforming spaces with premium surface solutions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Brand Story */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img
                src="https://thumbs.dreamstime.com/b/antique-textile-machine-weaving-gold-thread-factory-industrial-heritage-384078445.jpg"
                alt="Center Piece Store"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col lg={6}>
              <h2 className="display-5 fw-bold text-gold mb-4">
                The Center Piece Story
              </h2>
              <p className="lead text-muted mb-4">
                Founded with a vision to bring premium surface solutions to
                every home and business, Center Piece has been at the forefront
                of innovation in artificial grass, PVC mats, floor tiles, and
                wall fabrics.
              </p>
              <p className="text-muted mb-4">
                Our journey began with a simple belief: that every space
                deserves to be beautiful, functional, and sustainable. From
                residential gardens to commercial spaces, we've helped thousands
                of customers transform their environments with our high-quality
                products.
              </p>
              <div className="row text-center">
                <Col md={4} className="mb-3">
                  <div className="h3 text-gold fw-bold">500+</div>
                  <div className="text-muted">Happy Customers</div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="h3 text-gold fw-bold">50+</div>
                  <div className="text-muted">Product Varieties</div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="h3 text-gold fw-bold">5+</div>
                  <div className="text-muted">Years Experience</div>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Center Piece */}
      <section className="section-padding bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-gold mb-3">
              Why Choose Center Piece?
            </h2>
            <p className="lead text-muted">
              We're not just selling products; we're creating experiences
            </p>
          </div>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="display-4 mb-3 text-gold">Quality</div>
                  <h4 className="fw-bold text-gold mb-3">Premium Quality</h4>
                  <p className="text-muted">
                    Every product in our collection meets the highest industry
                    standards. We source only the finest materials to ensure
                    durability and performance.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="display-4 mb-3 text-gold">Eco</div>
                  <h4 className="fw-bold text-gold mb-3">Eco-Friendly</h4>
                  <p className="text-muted">
                    Our artificial grass and sustainable materials help reduce
                    water consumption while maintaining beautiful, green spaces
                    year-round.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="display-4 mb-3 text-gold">Design</div>
                  <h4 className="fw-bold text-gold mb-3">Design Excellence</h4>
                  <p className="text-muted">
                    From classic to contemporary, our products are designed to
                    enhance any aesthetic while providing superior
                    functionality.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Founder Message */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-5 text-center">
                  <div className="display-4 mb-4 text-gold">Founder</div>
                  <h3 className="fw-bold text-gold mb-4">
                    Message from Our Founder
                  </h3>
                  <blockquote className="blockquote">
                    <p className="lead text-muted mb-4">
                      "At Center Piece, we believe that every space has the
                      potential to be extraordinary. Our mission is to provide
                      innovative surface solutions that not only enhance the
                      beauty of your environment but also contribute to a more
                      sustainable future.
                    </p>
                    <p className="text-muted mb-4">
                      We're committed to excellence in every aspect of our
                      business - from product quality to customer service. When
                      you choose Center Piece, you're choosing a partner in
                      creating spaces that inspire and endure."
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">
                        <strong>CEO, Center Piece</strong>
                        <br />
                        <span className="text-gold">
                          Founder & CEO, Center Piece
                        </span>
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gold text-dark">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Values</h2>
            <p className="lead">The principles that guide everything we do</p>
          </div>
          <Row className="g-4">
            <Col md={3} className="text-center">
              <div className="display-4 mb-3 text-gold">Integrity</div>
              <h5 className="fw-bold mb-3">Integrity</h5>
              <p className="text-muted">
                We conduct business with honesty, transparency, and ethical
                practices.
              </p>
            </Col>
            <Col md={3} className="text-center">
              <div className="display-4 mb-3 text-gold">Innovation</div>
              <h5 className="fw-bold mb-3">Innovation</h5>
              <p className="text-muted">
                We continuously explore new technologies and solutions to serve
                you better.
              </p>
            </Col>
            <Col md={3} className="text-center">
              <div className="display-4 mb-3 text-gold">Customer</div>
              <h5 className="fw-bold mb-3">Customer Focus</h5>
              <p className="text-muted">
                Your satisfaction is our priority. We're here to exceed your
                expectations.
              </p>
            </Col>
            <Col md={3} className="text-center">
              <div className="display-4 mb-3 text-gold">Sustainability</div>
              <h5 className="fw-bold mb-3">Sustainability</h5>
              <p className="text-muted">
                We're committed to environmental responsibility in all our
                operations.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
