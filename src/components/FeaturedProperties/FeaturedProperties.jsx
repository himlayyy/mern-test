import React from "react";
import "./featuredProperties.css";

function FeaturedProperties() {
  return (
    <>
      <div className="fp">
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max500/103951224.jpg?k=03736dd4e1e89c1132e4957149e394d01ac6e8f64f4b09e30ade97a6176f0640&o="
            alt="Aparthotel Stare Miasto"
            className="fpImg"
          />
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Krakow</span>
          <span className="fpPrice">Starting from ₱ 4,345</span>
          <span className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </span>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max500/32087571.jpg?k=3724cb7f37e0e34e60b01cea07c4659a897885c9819728c67b1cec5544dd2b24&o="
            alt="Luxury Apartments Klara"
            className="fpImg"
          />
          <span className="fpName">Luxury Apartments Klara</span>
          <span className="fpCity">Split</span>
          <span className="fpPrice">Starting from ₱ 9,345</span>
          <span className="fpRating">
            <button>9.8</button>
            <span>Exceptional</span>
          </span>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max500/71184956.jpg?k=4f0dd080f161eb3d2631565c7df9b6e634442addd10dc715b8dd519092a4517f&o="
            alt="Chiado Mercy Apartments"
            className="fpImg"
          />
          <span className="fpName">Chiado Mercy Apartments</span>
          <span className="fpCity">Lisbon</span>
          <span className="fpPrice">Starting from ₱ 24,345</span>
          <span className="fpRating">
            <button>9.8</button>
            <span>Excellent</span>
          </span>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max500/77446705.jpg?k=b4137b295019af2a0db1af044c725449adda502a6921fbb2b8931016a8a0a713&o="
            alt="Leman Locke"
            className="fpImg"
          />
          <span className="fpName">Leman Locke</span>
          <span className="fpCity">London</span>
          <span className="fpPrice">Starting from ₱ 9,345</span>
          <span className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default FeaturedProperties;
