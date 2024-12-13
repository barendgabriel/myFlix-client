import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCard } from '../MovieCard/MovieCard';
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Spinner,
  Alert,
} from 'react-bootstrap';

const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks if the user is logged in
  const [form, setForm] = useState('login'); // Tracks whether to show login or signup form

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get('https://myflixmovieapp.onrender.com/movies', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          setMovies(response.data); // Assuming your API returns a 'data' array
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError('Failed to fetch movies. Please try again.');
          setLoading(false);
        });
    }
  }, [isLoggedIn]); // Fetch movies only if logged in

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with actual login logic
    localStorage.setItem('token', 'dummyToken'); // Replace with real token from API response
    setIsLoggedIn(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Replace with actual signup logic
    localStorage.setItem('token', 'dummyToken'); // Replace with real token from API response
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setMovies([]); // Clear movies when logging out
  };

  if (!isLoggedIn) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h1>{form === 'login' ? 'Login' : 'Signup'}</h1>
            <Form onSubmit={form === 'login' ? handleLogin : handleSignup}>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <Button
              variant="link"
              onClick={() => setForm(form === 'login' ? 'signup' : 'login')}
            >
              Switch to {form === 'login' ? 'Signup' : 'Login'}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Movies List</h1>
        </Col>
      </Row>
      <Row className="g-3">
        {movies.map((movie) => (
          <Col xs={12} sm={6} md={4} lg={3} key={movie._id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainView;
