import React from 'react';
import "./landingPage.css"
import { Link } from 'react-router-dom';
import Card from './Card';
import { useState, useEffect } from "react";


const LandingPage = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://instaclone-backend-mb4n.onrender.com/LandingPage").then((res) => res.json()).then((userData) => 
     setData(userData)).catch((err) => console.log(err)) ;
  }, [data]);


  return (
    <div>
      <header id='header' >
        <span><img src='/Images/icon/icon.png' alt='icon' id='icon' /><span id='text'>  Instaclone</span></span>  <span><Link to="/PostView"><img src='/Images/camera/camera.png' alt='camera' id='camera' /> </Link></span>
      </header>
      <hr style={{ borderTop: '1px solid #006238', marginTop: '3px' }} ></hr>
      <div>
        {
          data.map((ele, idx) => {
            return <Card data={ele} />
          })
        }
      </div>
    </div>
  )
}


export default LandingPage;





