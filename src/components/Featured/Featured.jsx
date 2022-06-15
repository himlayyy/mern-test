import React from "react";
import useFetch from "../../hooks/useFetch.js";
import "./featured.css";

function Featured() {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );
  console.log(data);
  return (
    <>
      <div className="featured">
        {loading? ("Loading please wait") :(<><div className="featuredItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Paraw_sailboats_in_Boracay_2.jpg/1280px-Paraw_sailboats_in_Boracay_2.jpg?1654487161127"
            alt="Boracay Island"
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Berlin</h1>
            <h2>{data[0]} Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://travelinspires.org/wp-content/uploads/2019/11/Tagaytay-city-philippines-travel-guide.jpg"
            alt="Tagaytay"
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Paris</h1>
            <h2>{data[1]} Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Taal_Volcano_crater_lake_8-8-2014.jpg/1280px-Taal_Volcano_crater_lake_8-8-2014.jpg?1654487685598"
            alt="Batangas"
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Madrid</h1>
            <h2>{data[2]} Properties</h2>
          </div>
        </div></>)}
      </div>
    </>
  );
}

export default Featured;
