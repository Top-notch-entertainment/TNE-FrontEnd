import React from 'react';
import { Card, CarouselItem } from 'react-bootstrap'
import './css/movie.css';
import Carousel from 'react-bootstrap/Carousel';

class MovieContent extends React.Component {

    render() {
        console.log('Image data', this.props.date.imageUrl);
        let imageUrl;
        if (this.props.date.imageUrl === 'https://image.tmdb.org/t/p/w500null') {
            console.log('nullll');
            imageUrl = `https://placehold.co/600x400`;
        } else {
            imageUrl = this.props.date.imageUrl;
        }


        return (
            <>
                <Carousel>
                    <Carousel.Item>
                        <Card id="movie-card" >
                            <Card.Body className='card-body'>
                                <Card.Img src={imageUrl} alt={this.props.date.title} />
                                <Card.Title> Title: {this.props.date.title}</Card.Title>
                                <Card.Text> Date Of Release: {this.props.date.release_date} </Card.Text>
                                <Card.Text> Overview: {this.props.date.overview}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}

export default MovieContent;