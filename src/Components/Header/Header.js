import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <a href="google.com"><img src={logo} alt="" /></a>
            <div className='links'>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Link-3</a>
            </div>
        </nav>
    );
};

export default Header;