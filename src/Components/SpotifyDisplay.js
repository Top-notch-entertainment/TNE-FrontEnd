import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class SpotifyDisplay extends React.Component {
    renderGenreData() {
        const { genreData } = this.props;
        return (
            <Carousel>
                {genreData.map(playlist => (
                    <Carousel.Item key={playlist.id}>
                        <img
                            className="d-block w-100"
                            src={playlist.images[0].url}
                            alt={playlist.name}
                        />
                        <Carousel.Caption>
                            <h3>{playlist.name}</h3>
                            <p>{playlist.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <h2 className="genre">Genre</h2>
                    </Col>
                </Row>
                <Row>
                    {this.props.genreData && this.renderGenreData()}
                </Row>
            </Container>
        );
    }
}


export default SpotifyDisplay;
