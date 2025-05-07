import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StockStatistics = () => {
  // Static list of objects containing item types and quantities
  const [stockData] = useState([
    { itemType: 'Raw Material', quantity: 120 },
    { itemType: 'Finished Product', quantity: 80 },
    { itemType: 'Packaging', quantity: 50 },
    { itemType: 'Raw Material', quantity: 120 },
    { itemType: 'Finished Product', quantity: 80 },
    { itemType: 'Packaging', quantity: 50 },
  ]);

  // Prepare data for the chart
  const chartData = {
    labels: stockData.map((data) => data.itemType),
    datasets: [
      {
        label: 'Quantity',
        data: stockData.map((data) => data.quantity),
        backgroundColor: 'darkred',  // Inside color of the bars (dark red)
        borderColor: 'black',        // Border color (black)
        borderWidth: 1,
      },
    ],
  };

  // Chart options for horizontal bars
  const options = {
    responsive: true,
    indexAxis: 'y', // Horizontal bars
    scales: {
      x: {
        beginAtZero: true,  // Ensure the x-axis starts from 0
      },
      y: {
        beginAtZero: true,  // Ensure the y-axis starts from 0
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Stock Quantities by Type',
      },
    },
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-danger">Stock Statistics</h2>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div style={{ width: '100%', height: '350px' }}> {/* Set the height and width */}
                <Bar data={chartData} options={options} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <h5>Stock Overview</h5>
              <ul>
                {stockData.map((data, index) => (
                  <li key={index}>
                    {data.itemType}: {data.quantity} units
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StockStatistics;
