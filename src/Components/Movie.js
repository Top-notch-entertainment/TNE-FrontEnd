import React from 'react';
import MovieContent from '../Components/MovieContent.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Movie extends React.Component {

    render() {
        // console.log('movieData', movieData);
        return (
            <>
                <Container>
                    <Row lg={4} md={3} sm={2} xs={1}>
                    {
                        this.props.movieData.map((date, index) => {

                            return <MovieContent key={index} date={date} />;

                        })
                    }
                </Row>
            </Container >
            </>
        )
    }
}

export default Movie;