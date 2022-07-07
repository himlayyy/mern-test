import React from "react";
import { Link } from "react-router-dom";
import "./searchitem.css";

function SearchItem({item}) {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt={item.title}
        className="siImg"
      />
      <div className="siDesc">
        <h3 className="siTitle">{item.title}</h3>
        <h3>{item.city}</h3>
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          MOXY NYC Times Square, offers pet-friendly accommodations, and
          features free WiFi and a fitness center. Macy's is 656 feet from the
          property.
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today
        </span>
      </div>
      <div className="siDetails">
        {item.rating &&
        <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>
        }
        <div className="siDetailsText">
          <span className="siPrice">₱ {item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
