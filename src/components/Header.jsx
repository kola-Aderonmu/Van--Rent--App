import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">#VANLIFE</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/host">Host</Link>
          <Link to="/about">About Us</Link>
          <Link to="/vans">Checkout Vans</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header