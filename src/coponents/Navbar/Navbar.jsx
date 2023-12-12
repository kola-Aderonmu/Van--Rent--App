import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="site">
      <nav>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div
            key={`nav-item-${index}`}
            className={`nav-item nav-item-${index}`}
          >
            <input
              type="radio"
              name="nav-input"
              id={`nav-item-${index}`}
              checked={index === 5}
            />
            <label htmlFor={`nav-item-${index}`}>
              {index === 1 && "Water"}
              {index === 2 && "Earth"}
             
            </label>
            <span></span>
          </div>
        ))}
        <div className="blocker"></div>
      </nav>
      <div className="content">
        <div className="runes">
          {["water", "earth", "fire", "mind", "nature", "cosmic"].map(
            (rune) => (
              <div key={`${rune}-rune`} className={`rune-wrapper`}>
                <div className={`rune ${rune}-rune`}></div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
