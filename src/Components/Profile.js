import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
      <section className="user">
        <img className="user__image" src={user.picture} alt={user.name} />
        <h2 className="user__title">{user.name}</h2>
        <p className="user_email">{user.email}</p>
      </section>
        <Form>
          <Form.Group as={Row} controlId="searchType">
            <Form.Label column sm="2">Search by</Form.Label>
            <Col sm="10">
              <Form.Select name="searchType">
                <option value="genre">Genre</option>
                <option value="artist">Artist</option>
                <option value="song">Song</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="searchValue">
            <Form.Label column sm="2">Search Here:</Form.Label>
            <Col sm="10">
              <Form.Control type="text" name="searchValue" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check type="checkbox" label="Top Hits" name="topHits" />
              <Form.Check type="checkbox" label="Random" name="random" />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">Search</Button>
        </Form>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://via.placeholder.com/640x360"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://via.placeholder.com/640x360"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://via.placeholder.com/640x360"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </>
    )
  );
};

export default Profile;
