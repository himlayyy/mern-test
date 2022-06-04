import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
      <div className="header">
        <div className="headerList">
          <div className="headerListItem">
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
      </div>
    </>
  );
}

export default Header;
