import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";

function Reserve({ setOpen, hotelId }) {
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={"circle-xmark"}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
      </div>
    </div>
  );
}

export default Reserve;
