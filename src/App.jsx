import React from "react-dom/client";
import ReactDOM from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
Navbar
import About from "./coponents/pages/About.jsx";
import Home from "./coponents/pages/Home.jsx";
import { Button } from "react-bootstrap";
import Navbar from "./coponents/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link to="/">#VANLIFE</Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
          </nav>
        </header>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      {/* <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '} */}
    </>
  );
}

export default App;
