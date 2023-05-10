import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import SpotifyDisplay from "./SpotifyDisplay";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [genre, setGenre] = useState("");
  const [genreData, setGenreData] = useState([]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const handleSearch = async (event) => {
    event.preventDefault();
    fetchGenreData(genre);
  }

  const fetchGenreData = async (genre) => {
    try {
      let serverURL = `${process.env.REACT_APP_SERVER}/browsegenre?genre=${genre}`;
      let genreResults = await axios.get(serverURL);
      setGenreData(genreResults.data.playlists.items);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    isAuthenticated && (
      <>
        <section className="user">
          <img className="user__image" src={user.picture} alt={user.name} />
          <h2 className="user__title">{user.name}</h2>
          <p className="user_email">{user.email}</p>
        </section>
        <Form onSubmit={handleSearch}>
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
              <Form.Control type="text" name="searchValue" onChange={(e) => setGenre(e.target.value)} />
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
        {genreData && genreData.length > 0 && <SpotifyDisplay genreData={genreData} />}
      </>
    )
  );
};

export default Profile;
