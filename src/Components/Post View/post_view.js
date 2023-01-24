import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./postView.css"
import { useState } from "react";
// import axios from 'axios';


const PostView = () => {
 
    const navigate = useNavigate();
    const [user, setUser] = useState({ author: "", location: "", description: "" });
    const [image, setImage] = useState([]);
    const register = () => {
        let publishDate = new Date();
        let date = `${publishDate.getDate()}/${publishDate.getMonth()+1}/${publishDate.getFullYear()}`
        console.log(user);

        const formdata = new FormData();
        formdata.append("image", image);
        formdata.append("author", user.author);
        formdata.append("location", user.location);
        formdata.append("description", user.description);
        formdata.append("date", date);
          
        fetch("https://instaclone-backend-mb4n.onrender.com/posts" , { 
            method: "POST" , 
            body : formdata
        }).then((res) => {
            alert("Post successfully uploaded");
            console.log(res.json());
        }).catch((e) => {
            console.log(e);
        });
    // }).then(res => res.json())
    //    // send ur to content
    // .then(formdata => setImage(formdata.url))
    // .catch((e) => {
    //         console.log(e);
    //         alert("Some error occured while posting! Please Try Again");
    //     });  
     
        navigate("/LandingPage");    
     
        
    }

    return ( 
        <div> 
            <div>
                <header id='header' >
                    <span><img src='/Images/icon/icon.png' alt='icon' id='icon' /><span id='text'>  Instaclone</span></span>  <span><Link to="/LandingPage"><img src='/Images/camera/camera.png' alt='camera' id='camera' /> </Link></span>
                </header>
                <hr style={{ borderTop: '1px solid #006238', marginTop: '3px' }} ></hr>
            </div>
            <form method='post' id='form' onSubmit={register} >
                <div id='form-inside'>
                    <input type={'file'} id="fileUpload" accept="image/*" required onChange={(e) => { setImage(e.target.files[0]) }}/> 
                    <input type={'text'} placeholder={"Author"} id={'author'} onChange={(e) => { setUser({ ...user, author: e.target.value }) }} /> 
                    <input type={'text'} placeholder={'Location'} id={'location'} onChange={(e) => { setUser({ ...user, location: e.target.value }) }} />
                    <div> <input type={'text'} placeholder={'Description '} id={'description'} onChange={(e) => { setUser({ ...user, description: e.target.value }) }} /> </div>
                    <button id='btn-post' type='submit' value={'post'} >Post</button>
                </div>
            </form>
        </div>
    )
}



export default PostView;




