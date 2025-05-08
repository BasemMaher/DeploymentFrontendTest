import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Stocks.css';

function Stocks() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    itemCode: '',
    itemType: '',
    quantity: '',
    date: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const itemTypeOptions = [
    t('stocks.rawMaterial'),
    t('stocks.finishedProduct'),
    t('stocks.packaging'),
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'quantity' && value < 0) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Stock Entry:', formData);
    setShowSuccessMessage(true);
    setFormData({
      itemCode: '',
      itemType: '',
      quantity: '',
      date: '',
    });
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-danger">{t('stocks.title')}</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="itemCode">
              <Form.Label>{t('stocks.itemCode')}</Form.Label>
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
              <Form.Label>{t('stocks.itemType')}</Form.Label>
              <Form.Select
                name="itemType"
                value={formData.itemType}
                onChange={handleChange}
                required
                aria-label="Item Type"
              >
                <option value="" disabled hidden>{t('stocks.selectType')}</option>
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
              <Form.Label>{t('stocks.quantity')}</Form.Label>
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
              <Form.Label>{t('stocks.date')}</Form.Label>
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
            {t('stocks.submit')}
          </Button>
        </center>
      </Form>

      {/* Success Message */}
      {showSuccessMessage && (
        <Alert variant="success" className="mt-4">
          {t('stocks.successMessage')}
        </Alert>
      )}
    </Container>
  );
}

export default Stocks;
