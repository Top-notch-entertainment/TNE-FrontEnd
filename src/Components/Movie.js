import React from 'react';
import MovieContent from '../Components/';


class Movie extends React.Component {

    render() {

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