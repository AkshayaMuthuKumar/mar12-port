import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="logo mt-2" style={{ width: '350px', height: '90px' }} />
        <ul className="nav-links ml-[700px]">
          <li><Link to="/"><b>HOME</b></Link></li>
          <li><Link to="/services"><b>SERVICES</b></Link></li>
          <li><Link to="/products"><b>PRODUCTS</b></Link></li>
          <li><Link to="/contact"><b>CONTACT</b></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
