import { NavLink as Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import Hotels from "./pages/Hotels/Hotels";

import { library } from '@fortawesome/fontawesome-svg-core';
import {faBed, faCar, faMountain, faPlane} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
library.add(faBed, faPlane, faCar, faMountain);



function App() {
  return (
    <>
      
      {/* <nav>
        
      </nav> */}
      <div className="routes">
        <Routes>
          {/* <Route path="/" element={<App/>}></Route> */}
          <Route path="/" element={<Home/>}></Route>
          <Route path="/hotels" element={<Hotel />}></Route>
          <Route path="/hotel:id" element={<Hotels/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
