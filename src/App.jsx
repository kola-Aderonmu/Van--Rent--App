import React from "react-dom/client";
import ReactDOM from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import About from "./coponents/pages/About.jsx";
import Home from "./coponents/pages/Home.jsx";
import { Button } from "react-bootstrap";
import Navbar from "./coponents/Navbar/Navbar.jsx";

import "./server.js";
import Vans from "./coponents/pages/Vans.jsx";
import VanDetail from "./coponents/pages/VanDetail.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./coponents/pages/Host/Dashboard.jsx";
import Income from "./coponents/pages/Host/Income.jsx";
import Reviews from "./coponents/pages/Host/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";

//************************************** */

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
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
