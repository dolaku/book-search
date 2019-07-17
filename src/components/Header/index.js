import React, { Component } from 'react';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className="mb-4">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">Google Books</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/saved">Saved</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div id="carouselBooks" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./assets/images/book-fanned.jpg" class="d-block w-100" alt="Slide 1" />
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/images/book-stack.jpg" class="d-block w-100" alt="Slide 2" />
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/images/book-shelves.jpg" class="d-block w-100" alt="Slide 3" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselBooks" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselBooks" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
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