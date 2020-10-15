import React from 'react';
import BrandUser from '../BrandUser/BrandUser';
import ClientFeetback from '../ClientFeetback/ClientFeetback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrandUser></BrandUser>
            <Services></Services>
            <Works></Works>
            <ClientFeetback></ClientFeetback>
            <Footer></Footer>
        </div>
    );
};

export default Home;