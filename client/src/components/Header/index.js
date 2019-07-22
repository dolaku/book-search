import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className="mb-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Google Books</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} to="/saved">Saved</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div id="carouselBooks" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./assets/images/book-fanned.jpg" className="d-block w-100" alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                            <img src="./assets/images/book-stack.jpg" className="d-block w-100" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                            <img src="./assets/images/book-shelves.jpg" className="d-block w-100" alt="Slide 3" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselBooks" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselBooks" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    <div className="sliderHead">
                        <h2 className="heading">(React) Google Books Search</h2>
                        <h4 className="heading">Search for and Save Books of Interest</h4>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;