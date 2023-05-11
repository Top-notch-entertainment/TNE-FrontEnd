import React from 'react';
import { Card } from 'react-boostrap'
// import './Movie.css'

class MovieContent extends React.Component {

    render() {
        let imageUrl:
            if (this.props.date.imageUrl === ) {
            imageUrl = `https://placehold.co/600x400`;
        } else {
            imageUrl = this.props.date.imageUrl;
        }


        return (
            <>
            <Card id="movie-card" >
            <Card.Body>
            <Card.Title> Title: {this.props.date.title}</Card.Title>
              <Card.Img src={imageUrl} alt={this.props.date.title}/>
              <Card.Text> Date Of Release: {this.props.date.release_date} </Card.Text>
              <Card.Text> Overview: {this.props.date.overview}</Card.Text>
            </Card.Body>
          </Card>
            </>
        )
    }
}