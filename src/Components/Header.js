import React from 'react';
import { NavLink } from 'react-router-dom';
import { withAuth0 } from "@auth0/auth0-react";


class Header extends React.Component {
    render() {
        return (
            <><header>
                <nav>
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
            </header>

            </>
        );
    }
}

export default withAuth0(Header);
