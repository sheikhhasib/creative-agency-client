import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="col-md-10 m-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img src={logo} style={{ height: '80px' }} alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mr-5">
                            <Link to="/" className="nav-link menuHover" href="#">Home</Link>
                        </li>
                        <li className="nav-item active mr-5">
                            <Link to="" className="nav-link menuHover" href="#">Our Portfolio</Link>
                        </li>
                        <li className="nav-item active mr-5">
                            <Link to="" className="nav-link menuHover" href="#">Our Team</Link>
                        </li>
                        <li className="nav-item active mr-5">
                            <Link to="" className="nav-link menuHover" href="#">Contact Us</Link>
                        </li>

                        <li className="nav-item ">
                            <Link to="/login">
                                <button className="btn btn-dark my-2 px-4 my-sm-0" type="submit">login</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;