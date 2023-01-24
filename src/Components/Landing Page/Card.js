import "./Card.css"
// import { useState } from "react";



const Card = (props) => {

const { author, location, description, image, date } = props.data;

    return (
        <div id="card">
            <header id="head1">
                <div id="name">{author}</div>
                <span> <img src="/Images/more_icon.svg" alt="3-dot" id="more-icon" /> </span>
            </header>
            <div id="place">{location}</div>
            <section id="img-section" >
                <img src={image} alt="post-image" />
            </section>
            <section id="like-section">
                <img src="/Images/heart/heart.png" alt="likes" id="heart" />  <img src="/Images/share/share.png" alt="post" id="share" /> <span id="date" >{date}</span>
                <div> 100 likes</div>
            </section>
            <footer id="foot" >
                <div id="description" >{description}</div>
            </footer>
        </div>
    )
}


export default Card;

