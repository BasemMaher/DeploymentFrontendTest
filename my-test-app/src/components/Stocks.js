import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './Stocks.css'; // 👈 Create and import this for custom styles

function Stocks() {
  const [formData, setFormData] = useState({
    itemCode: '',
    itemType: '',
    quantity: '',
    date: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const itemTypeOptions = [
    "Raw Material",
    "Finished Product",
    "Packaging",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'quantity' && value < 0) return; // prevent negative

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the form data (you can replace this with an API call)
    console.log('Stock Entry:', formData);
    
    // Show success message
    setShowSuccessMessage(true);
    
    // Clear all fields
    setFormData({
      itemCode: '',
      itemType: '',
      quantity: '',
      date: '',
    });

    // Optional: Hide the success message after 3 seconds
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-danger">Stock Entry</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="itemCode">
              <Form.Label>Item Code</Form.Label>
              <Form.Control
                type="text"
                name="itemCode"
                value={formData.itemCode}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="itemType">
              <Form.Label>Item Type</Form.Label>
              <Form.Select
                name="itemType"
                value={formData.itemType}
                onChange={handleChange}
                required
                aria-label="Item Type"
              >
                <option value="" disabled hidden>Select type</option>
                {itemTypeOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                min="0"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <center>
          <Button className="custom-red-btn" type="submit">
            Submit
          </Button>
        </center>
      </Form>

      {/* Success Message */}
      {showSuccessMessage && (
        <Alert variant="success" className="mt-4">
          Stock entry submitted successfully!
        </Alert>
      )}
    </Container>
  );
}

export default Stocks;
