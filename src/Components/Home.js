import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { withAuth0 } from "@auth0/auth0-react";
import Footer from './Footer';
import './css/home.css';
import Movie from './Movie';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: [],
            searchMovie: '',
        }
    }

    handleMovieInput = (event) => {
        this.setState({
            searchMovie: event.target.value,
        })
    }


    handleMovieSubmit = (event) => {
        event.preventDefault();
        this.displayMovie(this.state.searchMovie);
    };


    displayMovie = async (searchQuery) => {
        console.log('do we have a city', searchQuery);
        try {
            const movieResponse = await axios.get(`${process.env.REACT_APP_SERVER}/movies?`,
                {
                    params: {
                        searchQuery: this.state.searchMovie,
                    },
                }
            );
            console.log('movie response', movieResponse);
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
        // console.log('movie datataaaaa',this.state.movieData);

        return (
            <>

                <header className='header'>
                    <nav className='nav'>
                        {this.props.auth0.isAuthenticated ? (
                            <>
                                <NavLink to="profile">Profile</NavLink>
                                {/* add secret stuff here  */}
                                <NavLink to="logout">Logout</NavLink>
                            </>
                        ) : (
                            <NavLink className='nav-link' to="login">Login</NavLink>
                        )}
                        <NavLink className='nav-link' to="about">About</NavLink>
                        <NavLink className='nav-link' to="/">Home</NavLink>
                    </nav>
                    <h1 className='header__title'>Top Notch Entertainment</h1>
                </header>
                <main>
                <Form className='form' onSubmit={this.handleMovieSubmit}>
                    <label className='form-label'>
                        Search for Movie:
                        <input className='input' type='text' onChange={this.handleMovieInput} />
                    </label>
                    <Button className='form-button' type='submit'>Explore!</Button>
                </Form>

                    <Movie movieData={this.state.movieData} />
                </main>
                <Outlet />
                <Footer />

            </>
        );
    }
}

export default withAuth0(Home);













