import React from 'react';
import Contact from '../Contact/Contact';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid footerbg">
            <div className="col-md-10 m-auto ">
            <div className="row">
                <div className="col-md-5 col-sm-5 col-10 pr-5">
                    <h1>Let us handle your <br/> project, professionally.</h1>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-7 col-sm-7 px-5">
                    <Contact></Contact>
                </div>
            </div>
            <div className="text-center p-4">
                <p>copyright Orange labs 2020</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;