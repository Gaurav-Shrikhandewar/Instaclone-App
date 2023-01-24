import React from 'react';
import './FirstPage.css';
import {  Link } from 'react-router-dom';


const FrontPage = () => {
    
    return (
        <div id="front-main">
            <section class="sections">
                <img src="/Images/lens-1418954.png" alt="Image-1" id='img' />
            </section>
            <section class="sections" id='below-txt' >
                <h2> 10X: Instaclone  </h2>
                <Link to="/LandingPage"> <button id='btn'> Enter</button> </Link>
            </section>

        </div>
    )
}


export default FrontPage;

