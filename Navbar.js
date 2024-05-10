// Navbar.js

import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="logo">

        <h4>Logo</h4>
      </div>
     
    </nav>
    <nav className="navbar-two">
    <div className="left-buttons">
        <div className='nav-links'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/EmployeeList">EmployeeList</NavLink>
    </div>
    </div>
    <div className="right-buttons">
      <button className="navbar-button logout-button">Logout</button>
    </div>
  </nav>
  </>
  );
}


