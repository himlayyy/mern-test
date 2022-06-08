import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hotel.css";

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/217987015.jpg?k=745008bb4ec1beb49a268dc2daaa7a7e9a08f85ac8a7470132d29d3390afb74b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218008564.jpg?k=3f5413a5b708c20b493c0cd1451590d8c5b22384e28f380a9f27a45a8bf1f7b3&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/331034856.jpg?k=c114a7114441fffb4ebdf498e8801556a2ee6c5b44e691ee2128c50cfb9a8c09&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218285546.jpg?k=4894ed0e3e12464588d811e971f450274ad1cb0c58ef3ec36e03590e1ecf9a19&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/216031225.jpg?k=261f63eedb30453e80986bd0ed60e09dbd46aebb416c7a8eede5c51f05070e1e&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218285445.jpg?k=a678cce1a166864d0d42b901158633c3990aca12ff4ae59065eb604cd6bfd7f2&o=&hp=1",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) =>{
    let newSlideNumber;
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 :slideNumber-1;
    }
    else{
      newSlideNumber = slideNumber === 5 ? 0 :slideNumber +1
    }
    setSlideNumber(newSlideNumber);
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel">
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <div className="sliderWrapper">
                <FontAwesomeIcon
                  icon={"arrow-alt-circle-left"}
                  className="arrow"
                  onClick={() =>handleMove("l")}
                />

                <img
                  src={photos[slideNumber].src}
                  alt="slider"
                  className="sliderImg"
                  onClick={() => setOpen(false)}
                />

                <FontAwesomeIcon
                  icon={"arrow-alt-circle-right"}
                  className="arrow"
                  onClick={() =>handleMove("r")}
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
            <h1 className="hotelTitle">The Piccolo Hotel of Boracay</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={"location-dot"} />
              <span>
                Station 2, Barangay Balabag, Boracay Island, Malay, Aklan, 5608
                Boracay,
              </span>
            </div>
            <span className="hotelDistance">
              Excellent location - 500m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over $114 at this property and get a few airport taxi
            </span>
            <div className="hotelImages">
              {photos.map((photo, index) => (
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
                <div className="hotelTitle">Stay in the heart of Boracay</div>
                <p className="hotelDesc">
                  This property is 2 minutes walk from the beach. Conveniently
                  located within 2-minute walk from Boracay White Beach, The
                  Piccolo Hotel of Boracay offers guests an on-site restaurant,
                  a concierge with tour assistance services, and free WiFi
                  throughout the property. Some rooms at The Piccolo Hotel of
                  Boracay feature a balcony with outdoor furniture and a private
                  bathroom with free toiletries. Each room is fitted with an air
                  conditioning, a flat-screen TV with cable channels, and a
                  safety deposit box. Other amenites such as a wardrobe, a
                  hairdyer, and an electric kettle is also included in all
                  rooms.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay</h1>
                <span>
                  Couples in particular like the location – they rated it 8.4
                  for a two-person trip.
                </span>
                <h2>
                  <b>$945</b>(9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Hotel;
