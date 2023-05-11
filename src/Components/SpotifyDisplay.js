import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './css/profile.css';

// Defining a class component named 'SpotifyDisplay'
class SpotifyDisplay extends React.Component {

    // Defining a method to render genre data
    renderGenreData() {
        // Destructuring 'genreData' from this component's props
        const { genreData } = this.props;

        // Logging 'genreData' to the console
        console.log("GenreData", genreData);

        // Initializing an empty array to hold slide items
        const slides = [];

        // Looping through 'genreData' array
        for (let i = 0; i < genreData.length; i += 4) {
            // Slicing 'genreData' array to create new sub-arrays of maximum 4 elements each
            const slideItems = genreData.slice(i, i + 4);

            // Creating carousel items with slide items and pushing them into the 'slides' array
            slides.push(
                <Carousel.Item key={i}>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {slideItems.map(playlist => (
                            <Col key={playlist.id}>
                                <Card>
                                    {/* Displaying playlist image */}
                                    <Card.Img variant="top" src={playlist.images[0].url} alt={playlist.name} />
                                    {/* Logging URL to the console */}
                                    {console.log("URL", playlist.images[0].url)}
                                    <Card.Body>
                                        {/* Displaying playlist name */}
                                        <Card.Title>{playlist.name}</Card.Title>
                                        {/* Logging name to the console */}
                                        {console.log("Name", playlist.name)}
                                        {/* Displaying playlist description */}
                                        <Card.Text>{playlist.description}</Card.Text>
                                        {/* Logging description to the console */}
                                        {console.log("Description", playlist.description)}
                                    </Card.Body>
                                    <Card.Footer className="d-flex justify-content-between">
                                        {/* Button to mark playlist as favorite */}
                                        <Button variant="outline-primary">Favorite</Button>
                                        {/* Button to open playlist in Spotify */}
                                        <Button
                                            variant="outline-success"
                                            href={`https://open.spotify.com/playlist/${playlist.id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Open in Spotify
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            );
        }
        // Returning a Carousel component with slide items
        return <Carousel>{slides}</Carousel>;
    }

    // Render method of the component
    render() {
        return (
            // Container component to wrap everything
            <Container fluid className="mt-5">
                {/* Row component for layout */}
                <Row>
                    {/* Col component for layout */}
                    <Col>
                        {/* Displaying Genre header */}
                        <h2 className="genre">Genre</h2>
                    </Col>
                </Row>
                {/* Another Row component for layout */}
                <Row className="mt-3">
                    <Col>
                        {/* Checking if genreData exists, if it does then calling renderGenreData method */}
                        {this.props.genreData && this.renderGenreData()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

// Exporting the component so it can be imported and used in other files
export default SpotifyDisplay;
