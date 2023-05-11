import React from 'react';
import MovieContent from '../Components/MovieContent.js';


class Movie extends React.Component {

    render() {
// console.log('movieData', movieData);
        return (
            <>
                {
                    this.props.movieData.map((date, index) => {
                        return <MovieContent key={index} date={date} />;
                    })
                }

            </>
        )
    }
}

export default Movie;