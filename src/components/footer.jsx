import React from "react";


const Footer = () => {
  return (
    <footer className="footer-container">
      <p>© {new Date().getFullYear()} Finder Bridge. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;