import React from 'react';
import { Link } from 'react-router-dom';
import logo from './components/logo.png';

function Navbar() {
  return (
    <nav className='nav'>
      <div className="logo">
        <img src={logo} alt='SUBWAY' />
      </div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/menu">MENU</Link></li>
        <li><Link to="/customized-order">CUSTOMIZED ORDER</Link></li>
        <li><Link to="/reviews">REVIEWS</Link></li>
        <li><Link to="/login" className='login-btn'>LOGIN</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
