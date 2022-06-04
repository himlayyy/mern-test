import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={"bed"} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={"plane"} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={"car"} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={"mountain"} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={"car"} />
              <span>Airport taxis</span>
            </div>
          </div>
          <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
          <p className="headerDesc">
            Get rewared for your travels - unlock instant savings of 10% or more
            with a free Ashbook account
          </p>
          <button className="headerBtn">Sign in / Register</button>
        </div>
      </div>
    </>
  );
}

export default Header;
