import React from 'react';
    // import './movie.css';


class MovieSearch extends React.Component {


        handleMovieSubmit = async (event) => {
            event.preventDefault();
            this.props.displayMovieData();
        };


        displayMovie = async (searchQuery) => {
            console.log('to we have a city', searchQuery);
            try {
                const movieResponse = await axios.get(`${process.env.REACT_APP_SERVER}/movies?`,
                    {
                        params: {
                            searchQuery: this.state.city,
                        },
                    }
                );
                this.setState({
                    movieData: movieResponse.data,
                });

            } catch (error) {
                this.setState({
                    displayError: true,
                    errorMessage: error.response.status + ': ' + error.response.data.error,
                });
            }
        };





        render() {
            return (
                <Form className='form' onSubmit={this.handleMovieSubmit}>
                    <label className='form-label'>
                        Search for Movie:
                        <input type='text' onChange={this.props.handleMovieInput} />
                    </label>
                    <Button type='submit'>Explore!</Button>
                </Form>
            );
        }
    }


export default MovieSearch;