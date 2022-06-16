import React, { useState, useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hotel.css";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";

function Hotel() {
  const location = useLocation();
  // console.log(location);
  const path = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${path}`);

  // const photos = [
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/217987015.jpg?k=745008bb4ec1beb49a268dc2daaa7a7e9a08f85ac8a7470132d29d3390afb74b&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218008564.jpg?k=3f5413a5b708c20b493c0cd1451590d8c5b22384e28f380a9f27a45a8bf1f7b3&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/331034856.jpg?k=c114a7114441fffb4ebdf498e8801556a2ee6c5b44e691ee2128c50cfb9a8c09&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218285546.jpg?k=4894ed0e3e12464588d811e971f450274ad1cb0c58ef3ec36e03590e1ecf9a19&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/216031225.jpg?k=261f63eedb30453e80986bd0ed60e09dbd46aebb416c7a8eede5c51f05070e1e&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218285445.jpg?k=a678cce1a166864d0d42b901158633c3990aca12ff4ae59065eb604cd6bfd7f2&o=&hp=1",
  //   },
  // ];
  const { dates, options } = useContext(SearchContext);
  console.log(dates);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  console.log(options);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotel">
          <div className="hotelContainer">
            {open && (
              <div className="slider">
                <div className="sliderWrapper">
                  <FontAwesomeIcon
                    icon={"arrow-alt-circle-left"}
                    className="arrow"
                    onClick={() => handleMove("l")}
                  />

                  <img
                    src={data.photos[slideNumber]?.src}
                    alt="slider"
                    className="sliderImg"
                    onClick={() => setOpen(false)}
                  />

                  <FontAwesomeIcon
                    icon={"arrow-alt-circle-right"}
                    className="arrow"
                    onClick={() => handleMove("r")}
                  />

                  <FontAwesomeIcon
                    icon={"circle-xmark"}
                    onClick={() => setOpen(false)}
                    className="close"
                  />
                </div>
              </div>
            )}
            <div className="sliderWrapper"></div>
            <div className="hotelWrapper">
              <button className="bookNow">Reserve or Book Now!</button>
              <h1 className="hotelTitle">{data.title}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={"location-dot"} />
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">{data.distance}</span>
              <span className="hotelPriceHighlight">{data.cheapestPrice}</span>
              <div className="hotelImages">
                {data.photos?.map((photo, index) => (
                  <div className="hotelImgWrapper">
                    <img
                      onClick={() => handleOpen(index)}
                      src={photo.src}
                      alt="hotel gallery"
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsText">
                  <div className="hotelTitle">{data.title}</div>
                  <p className="hotelDesc">{data.desc}</p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>Perfect for a {days}-night stay</h1>
                  <span>
                    Couples in particular like the location – they rated it 8.4
                    for a two-person trip.
                  </span>
                  <h2>
                    <b>${days * data.cheapestPrice * options.room}</b>({days}) 
                  </h2>
                  <button>Reserve or Book Now!</button>
                </div>
              </div>
            </div>
            <MailList />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hotel;
