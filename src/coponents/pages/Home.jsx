import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'> 
      <h1>
        Embark on a journey of a lifetime with [Travel Agency Name], where your
        dream destinations come to life.
      </h1>
      <p>
        <em>
          {" "}
          Whether you seek the allure of exotic landscapes, cultural immersion,
          or thrilling adventures, our dedicated team is committed to curating
          tailor-made itineraries that fulfill your wanderlust. Join us as we
          redefine travel, offering a seamless blend of luxury, exploration, and
          discovery.
        </em>
      </p>
      <Link to="vans">Find your perfect van</Link>
    </div>
  );
}

export default Home