import React from 'react';
import { Card, Col } from 'react-bootstrap'
import './css/movie.css';


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
                
                    {/* <article className='article'>
                        <Col className='column'> */}
                            <Card id="movie-card" >
                                <Card.Body className='card-body'>
                                    <Card.Img className='card-img' src={imageUrl} alt={this.props.date.title} />
                                    <Card.Title> Title: {this.props.date.title}</Card.Title>
                                    <Card.Text> Date Of Release: {this.props.date.release_date} </Card.Text>
                                    <Card.Text> Overview: {this.props.date.overview}</Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Col>
                    </article> */}
           
            </>
        );
    }
}


export default MovieContent;