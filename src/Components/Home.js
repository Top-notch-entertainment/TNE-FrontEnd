import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { withAuth0 } from "@auth0/auth0-react";
import Footer from './Footer';


class Home extends React.Component {
    render() {
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
                        <NavLink to="login">Login</NavLink>
                    )}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About Us</NavLink>
                </nav>
                <h1 className='header__title'>Top Notch Entertainment</h1>
            </header>
            <Outlet />
            <Footer />

            </>
        );
    }
}

export default withAuth0(Home);
