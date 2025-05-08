import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTranslation } from 'react-i18next';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StockStatistics = () => {
  const { t } = useTranslation();

  // Static list of objects containing item types and quantities
  const stockData = [
    { itemType: t('stock.rawMaterial'), quantity: 120 },
    { itemType: t('stock.finishedProduct'), quantity: 80 },
    { itemType: t('stock.packaging'), quantity: 50 },
    { itemType: t('stock.rawMaterial'), quantity: 120 },
    { itemType: t('stock.finishedProduct'), quantity: 80 },
    { itemType: t('stock.packaging'), quantity: 50 },
  ];
  
  // Prepare data for the chart
  const chartData = {
    labels: stockData.map((data) => data.itemType),
    datasets: [
      {
        label: t('stock.quantity'),
        data: stockData.map((data) => data.quantity),
        backgroundColor: 'darkred',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  // Chart options for horizontal bars
  const options = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: t('stock.chartTitle'),
      },
    },
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-danger">{t('stock.statisticsTitle')}</h2>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div style={{ width: '100%', height: '350px' }}>
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
              <h5>{t('stock.overviewTitle')}</h5>
              <ul>
                {stockData.map((data, index) => (
                  <li key={index}>
                    {data.itemType}: {data.quantity} {t('stock.units')}
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
