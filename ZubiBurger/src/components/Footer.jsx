import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Burger Hub</h3>
          <p>
            Burger Hub offers a variety of delicious burgers made with fresh ingredients.
            Join us for a mouth-watering experience you won’t forget.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Burger hub: valencia town block A lahore,pakistan</p>
          <p>Phone: 03170331717</p>
          <p>Email: contact@burgerhub.com</p>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/Kingofhearts090?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/zohaibsh._/profilecard/?igsh=MWtjZnF6dmdndHJtdA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Burger Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
