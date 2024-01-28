import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/sidebar.css';


//NOW IN TUTORIALS COMPONENT
//LETS CREATE JSON ARRAY

// NOW LETS CREATE SIDEBARS IN THIS COMPONENT
// WILL CREATE SIDEBAR COMPONENT FIRST
//NOW LETS INCLUDE IT
import Sidebar from "./Sidebar";

function Tutorials(){
    const [videos, setVideos] = useState([]);    
      // Define the menus array
      let menus = [
        {menuTitle: 'React JS', id: 1, subMenuItems: ['Creating Box', 'Components']},
        {menuTitle: 'PHP', id: 2, subMenuItems: []}, // Add subMenuItems if needed
        {menuTitle: 'JavaScript', id: 3, subMenuItems: []} // Add subMenuItems if needed
    ];

    
    useEffect(() => {
    const apiKey = 'AIzaSyB5qXtX_NmTYqLScwdg6bA_jPL6z1JBzVc'; // Replace with your own API key
    const channelId = 'UCG7mjvUGhQQUyeS728AtdLA'; // Replace with the desired channel ID
     let searchTerm='react'
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchTerm}&channelId=${channelId}&type=video&videoDuration=short&part=snippet,id&maxResults=10`)
    .then(response => {
      console.log(response.data.items);
    })
    .catch(error => {
      console.error('Error fetching shorts:', error);
    });
  }, []);

    // HOW TO PASS FUNCTION TO
    // CHILD COMPONENT
    const apiFunction = (menuId) =>{
        // THIS IS HOW WE GET DATA FROM CHILD COMPONENT
        alert("TEST "+menuId);
    }
  
    return(
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                {/* IF I JUST PRINT IT */}
                {/* NOW LETS PLACE THE BELOW COMPONENT IN SIDEBAR */}
              
                <Sidebar apiFunction={apiFunction} menus={menus}/>
            
                {/* Content Area */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <h1 className="mt-4">Content Area</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </main>
            </div>
        </div>
    )
}

export default Tutorials;
