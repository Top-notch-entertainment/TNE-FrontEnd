import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './css/profile.css';

class SpotifyDisplay extends React.Component {
    renderGenreData() {
        const { genreData } = this.props;

        const slides = [];
        for (let i = 0; i < genreData.length; i += 4) {
            const slideItems = genreData.slice(i, i + 4);
            slides.push(
                <Carousel.Item key={i}>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {slideItems.map(playlist => (
                            <Col key={playlist.id}>
                                <Card>
                                    <Card.Img variant="top" src={playlist.images[0].url} alt={playlist.name} />
                                    <Card.Body>
                                        <Card.Title>{playlist.name}</Card.Title>
                                        <Card.Text>{playlist.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="d-flex justify-content-between">
                                        <Button variant="outline-primary">Favorite</Button>
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

        return <Carousel>{slides}</Carousel>;
    }

    render() {
        return (
            <Container fluid className="mt-5">
                <Row>
                    <Col>
                        <h2 className="genre">Genre</h2>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        {this.props.genreData && this.renderGenreData()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SpotifyDisplay;
