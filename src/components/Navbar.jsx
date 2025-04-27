import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav><Link to="/">
      <img src="public\logo.png" alt="logo"/></Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/report-lost">Report Lost</Link></li>
        <li><Link to="/report-found">Report Found</Link></li>
        <li><Link to="/lost-items">Lost Items</Link></li>
        <li><Link to="/found-items">Found Items</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;