import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Nutritional Facts Finder</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/barcode-input">Barcode Input</Link>
      </nav>
    </header>
  );
};

export default Header;
