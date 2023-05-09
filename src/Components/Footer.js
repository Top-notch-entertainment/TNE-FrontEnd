import React, { Component } from 'react';
import './css/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__social">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer__link">
                        Facebook
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer__link">
                        Twitter
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__link">
                        Instagram
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__link">
                        LinkedIn
                    </a>
                </div>
                <p className="footer__contact">
                    Email: info@example.com | Phone: (123) 456-7890
                </p>
                <p className="footer__copyright">
                    &copy; Tricia Sawyer, Bryan Gonzalez, Tim Maupin
                </p>
            </div>
        );
    }
}

export default Footer;
