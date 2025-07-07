// src/pages/Shop.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, categories, productTypes } from "../data/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Get category from URL params
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Filter products based on selected filters
  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedType) {
      filtered = filtered.filter((product) => product.type === selectedType);
    }

    if (selectedColor) {
      filtered = filtered.filter((product) =>
        product.colors.some(
          (color) => color.toLowerCase() === selectedColor.toLowerCase()
        )
      );
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter((product) => {
        if (max) {
          return product.price >= min && product.price <= max;
        } else {
          return product.price >= min;
        }
      });
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedType, selectedColor, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedType("");
    setSelectedColor("");
    setPriceRange("");
    setSortBy("name");
    setSearchParams({});
  };

  const getAllColors = () => {
    const colors = new Set();
    products.forEach((product) => {
      product.colors.forEach((color) => colors.add(color));
    });
    return Array.from(colors);
  };

  return (
    <Container className="section-padding">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-gold mb-3">Our Products</h1>
        <p className="lead text-muted">
          Discover our premium collection of surface solutions
        </p>
      </div>

      <Row>
        {/* Filters Sidebar */}
        <Col lg={3} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="bg-gold text-white">
              <h5 className="mb-0">Filters</h5>
            </Card.Header>
            <Card.Body>
              {/* Category Filter */}
              <div className="mb-4">
                <Form.Label className="fw-bold">Category</Form.Label>
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </div>

              {/* Type Filter */}
              <div className="mb-4">
                <Form.Label className="fw-bold">Type</Form.Label>
                <Form.Select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">All Types</option>
                  {productTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Form.Select>
              </div>

              {/* Color Filter */}
              <div className="mb-4">
                <Form.Label className="fw-bold">Color</Form.Label>
                <Form.Select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <option value="">All Colors</option>
                  {getAllColors().map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </Form.Select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-4">
                <Form.Label className="fw-bold">Price Range</Form.Label>
                <Form.Select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="">All Prices</option>
                  <option value="0-20">Under $20</option>
                  <option value="20-40">$20 - $40</option>
                  <option value="40-60">$40 - $60</option>
                  <option value="60-">Over $60</option>
                </Form.Select>
              </div>

              {/* Sort By */}
              <div className="mb-4">
                <Form.Label className="fw-bold">Sort By</Form.Label>
                <Form.Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </Form.Select>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline-success"
                onClick={clearFilters}
                className="w-100"
              >
                Clear All Filters
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Products Grid */}
        <Col lg={9}>
          {/* Results Summary */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <span className="text-muted">
                Showing {filteredProducts.length} of {products.length} products
              </span>
              {(selectedCategory ||
                selectedType ||
                selectedColor ||
                priceRange) && (
                <Badge bg="gold" className="ms-2">
                  Filtered
                </Badge>
              )}
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <Row className="g-4">
              {filteredProducts.map((product) => (
                <Col key={product.id} md={6} lg={4}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <div className="text-center py-5">
              <div className="display-4 mb-3 text-gold">No Products</div>
              <h4 className="text-muted">No products found</h4>
              <p className="text-muted">
                Try adjusting your filters to find what you're looking for.
              </p>
              <Button variant="success" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
