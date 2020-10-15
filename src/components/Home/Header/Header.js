import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="headerBg">
            <Navbar></Navbar>
            <MainHeader></MainHeader>
        </div>
    );
};

export default Header;