import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import MainView from './components/MainView/MainView'; // Adjusted path
import MovieView from './components/MovieView/MovieView'; // Adjusted path
import './index.scss'; // Ensure Bootstrap is imported here

const App = () => {
  return (
    <Router>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="/movies/:movieTitle" element={<MovieView />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
