import React from 'react';

import { images } from '../../assets/images';

const Banner = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div class="carousel-caption d-sm-block">
                        <div class="text-uppercase"><p>Made for those</p>who do</div>
                    </div>
                    <img className="d-block" src={images.banner4} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <div class="carousel-caption d-sm-block">
                        <div class="text-uppercase"><p>Made for the movers</p>and shakers</div>
                    </div>
                    <img className="d-block" src={images.banner2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <div class="carousel-caption d-sm-block">
                        <div class="text-uppercase"><p>For the doers</p>not the dreamers</div>
                    </div>
                    <img className="d-block" src={images.banner3} alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <div class="carousel-caption lower d-sm-block">
                        <div class="text-uppercase"><p>Designed for action</p>not just words</div>
                    </div>
                    <img className="d-block" src={images.banner1} alt="Fourth slide" />
                </div>
            </div>
            <a className="carousel-control-prev arrows" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="thin-icon" aria-hidden="true">&#10094;</span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next arrows" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="thin-icon" aria-hidden="true">&#10095;</span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
};

export default Banner;
