import React from 'react';
import carousel1 from '../../../images/carousel1.png'
import carousel2 from '../../../images/carousel2.png'
import carousel3 from '../../../images/carousel3.png'

const Works = () => {
    return (
        <div className="container-fluid py-5" style={{backgroundColor: '#111430'}}>
            <h2 className="text-center text-white mt-4">Here are some of <span className="textBrand">our works</span></h2>
            <div className="col-md-10 col-sm-12 col-10 m-auto py-5" styele={{ height: '400px' }}>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row d-flex justify-content-center">
                                <img className="d-block" className="m-2 p-2 w-25" src={carousel2} alt="First slide" />
                                <img className="d-block" className="m-2 p-2 w-25" src={carousel1} alt="First slide" />
                                <img className="d-block" className="m-2 p-2 w-25" src={carousel3} alt="First slide" />
                            </div>
                        </div>
                        <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                                <img className="d-block" className="m-2 p-2 w-25" src={carousel1} alt="First slide" />
                                <img className="d-block" className="m-2 p-2 w-25" src={carousel2} alt="First slide" />
                                <img className="d-block" className="m-2 p-2 w-25" src={carousel3} alt="First slide" />
                            </div>
                        </div>
                        <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                                <img className="d-block" className="m-2 p-2 w-25" src={carousel1} alt="First slide" />
                                <img className="d-block" className="m-2 p-2 w-25" src={carousel3} alt="First slide" />
                                <img className="d-block" className="m-2 p-2 w-25" src={carousel2} alt="First slide" />
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Works;