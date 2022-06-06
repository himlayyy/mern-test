import React from 'react';
import Featured from '../../components/Featured/Featured';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Home/Navbar';
import "./home.css"

function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured />
      </div>
    </>
  )
}

export default Home