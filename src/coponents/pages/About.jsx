import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page-container">
      <img
        src="https://s3.amazonaws.com/images.gearjunkie.com/uploads/2021/07/camp-ford-transit-van-scaled.jpg"
        className="about-hero-image"
      />
      <div className="about-page-container">
        <h2>
          Don't squeeze your sedan when you can actually relax and spread yours
          balls in our king spaces luxury vans!
        </h2>
        <p>
          At [Travel Agency Name], we are passionate about creating
          unforgettable travel experiences that transcend the ordinary.our
          extraordinary journey begins here, with [Travel Agency Name], where
          every destination is an invitation to explore the world's wonders. Let
          us be your compass, guiding you to the extraordinary. 😊"
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your Destination is waitong for you. <br /> Your van is ready for a
          pick up
        </h2>
        <Link className="link-button" to="/vans">
          Explore our van spots
        </Link>
      </div>
    </div>
  );
}

export default About