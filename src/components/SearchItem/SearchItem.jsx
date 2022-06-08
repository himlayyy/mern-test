import React from "react";
import "./searchitem.css";

function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/123731236.webp?k=ab2cc311beb4c94c6860e0cbb5453b0df7884d691e596fd8f07d3beea071f51d&o=&s=1"
        alt="MOXY NYC Times Square"
        className="siImg"
      />
      <div className="siDesc">
        <h3 className="siTitle">MOXY NYC Times Square</h3>
        <span className="siDistance">1.9 km from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          MOXY NYC Times Square, offers pet-friendly accommodations, and
          features free WiFi and a fitness center. Macy's is 656 feet from the
          property.
        </span>
        <span className="siFeatures">1 bathroom, 1 full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsText">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
