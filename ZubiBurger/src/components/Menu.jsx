import React from 'react';
import menuData from '../data/menuData';
import './Menu.css';

const Menu = () => {
  return (
    <section id="menu" className="menu-section">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuData.map((item) => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
