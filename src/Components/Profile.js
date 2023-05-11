import React from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Form, Button, Row, Col, Container, Image } from "react-bootstrap";
import SpotifyDisplay from "./SpotifyDisplay";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();


  const [genre, setGenre] = useState("");
  const [genreData, setGenreData] = useState([]);




  console.log("Genre Data to render", genreData[0]);

  // console.log("Name", genreData[0].name);

  // console.log("Images", genreData[0].images[0]);





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
      console.log(serverURL);
      let genreResults = await axios.get(serverURL);
      console.log("server response", genreResults);
      console.log("testing items", genreResults.data.playlists.items[0].images[0]);
      setGenreData(genreResults.data.playlists.items);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    isAuthenticated && (
      <Container>
        <section className="user mt-5">
          <Image className="user__image rounded-circle" src={user.picture} alt={user.name} />
          <h2 className="user__title mt-3">{user.name}</h2>
          <p className="user_email">{user.email}</p>
        </section>
        <Form onSubmit={handleSearch} className="mt-5">
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
      </Container >

    )
  );
};


export default Profile;
