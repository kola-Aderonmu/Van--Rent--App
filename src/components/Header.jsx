import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
   const activeStyles = {
     fontWeight: "bold",
     textDecoration: "underline",
     color: "#161616",
   };
  return (
    <div>
      <header>
        <Link to="/">#VANLIFE</Link>
        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/host"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/vans"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Checkout Vans
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Header