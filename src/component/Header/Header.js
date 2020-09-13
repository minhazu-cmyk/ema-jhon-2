import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt=""/>
       <nav>
           <Link to="/shop">shop</Link>
           <Link to="/order">oder </Link>
           <Link to="/manage">manage inventory here</Link>
       </nav>
        </div>

    );
};

export default Header;