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
import HostVans from "./coponents/pages/Host/HostVans.jsx";
import HostVanDetail from "./coponents/pages/Host/HostVanDetail.jsx";
import HostVanInfo from "./coponents/pages/Host/HostVanInfo.jsx";
import HostVanPhotos from "./coponents/pages/Host/HostVanPhoto.jsx";
import HostVanPricing from "./coponents/pages/Host/HostVanPricing.jsx";
import NotFound from "./coponents/pages/NotFound.jsx";




//************************************** */

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
              <Route path="*" element={<NotFound />} />
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
