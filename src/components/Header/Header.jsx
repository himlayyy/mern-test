import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

function Header() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOpenOptions] = useState({
    adult: 1,
    children: 0,
    room: 0,
  });
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
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={"location-pin"} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
              />
            </div>
            <div
              className="headerSearchItem"
              onClick={() => setOpenDate(!openDate)}
            >
              <FontAwesomeIcon icon={"calendar-days"} className="headerIcon" />
              <span className="headerSearchText">{`${format(
                date[0].startDate,
                "MM/dd/yy"
              )} to {${format(date[0].endDate, "MM/dd/yy")}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={"person"} className="headerIcon" />
              <span className="headerSearchText">
                {`Adult ${options.adult} Children${options.children}`} Rooms $
                {options.room}
              </span>
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton">-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton">+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton">-</button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button className="optionCounterButton">+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Rooms</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton">-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterButton">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
