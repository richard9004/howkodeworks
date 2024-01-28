
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import './styles/pagination.css';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ColorRing } from "react-loader-spinner";

function Shorts() {
    let menus = [
        { id: 1, menuTitle: 'ReactJS', subMenuItems: [] },
        { id: 2, menuTitle: 'PHP', subMenuItems: [] }
    ];

    const [items, setItems] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    const [loading, setLoading] = useState(true); // Add loading state
    const static_meta_title = "Youtube Shorts - LetsMakeItOnline";
    const static_meta_description= "These are the populor youtube shorts from LetsMakeItOnline";
    
    const apiKey = 'AIzaSyB5qXtX_NmTYqLScwdg6bA_jPL6z1JBzVc'; // Replace with your own API key
    const channelId = 'UCG7mjvUGhQQUyeS728AtdLA'; // Replace with the desired channel ID
    let searchTerm = 'react';

    useEffect(() => {
        getResponse(searchTerm);
    }, []);

    const makeYoutubeApiCall = (search_term) => {
          axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${search_term}&channelId=${channelId}&type=video&videoDuration=short&part=snippet,id&maxResults=50`)
            .then(response => {
                postData(response.data.items);
            })
            .catch(error => {
                console.error('Error fetching shorts:', error);
                
            });
    }

    const postData = async (data) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/shorts`, {
                json_data: JSON.stringify(data),
                search_term: 'react',
            });
    
            return response;
        } catch (error) {
            console.log(error);
        }
    };
    
    const getResponse = async (search_term) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/shorts`, {
                params: {
                    search_term: search_term
                }
            });
            
            if(response.data.status==0){
              makeYoutubeApiCall(search_term);
              
            }else{
                getShortsData(search_term);
            }
    
            
        } catch (error) {
            console.log(error);
        }
    };


    const getShortsData = async (search_term) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/shorts`, {
                params: {
                    search_term: search_term
                }
            });
            let itemData = JSON.parse(response.data.data[0].json_data);
           
            setItems(itemData);
            setTotalPages(Math.ceil(itemData.length / itemsPerPage));
            setLoading(false); // Set loading to false when data is loaded
    
            
        } catch (error) {
            console.log(error);
        }
    };


   

   
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentItems = items.slice(startIndex, endIndex);
    
      const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
      };


    return (
        
        <div className="container-fluid">
            <Helmet>
        {/* Set the title dynamically */}
        <title>Shorts - LetsMakeItOnline</title>
        {/* Set the meta description */}
        <meta name="title" content="Shorts - LetsMakeItOnline" />
        <meta name="description" content="This are my youtube shorts on various programming topics" />
      </Helmet>


      <div
        className="loading-overlay"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
          textAlign: "center",
        }}
      >
        <ColorRing
          visible={loading}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#343a40", "#343a40", "#343a40", "#343a40", "#343a40"]}
        />
      </div>
        <div className="row">
    

    <>
   
         
         
        
          
               <main className="col-md-12 px-md-4 content" >
               <div className={`card mt-4 ${loading ? "disable" : ""}`}>
  <div className="card-body d-flex justify-content-between align-items-center">
    <div>
      <h3 className="card-title">Youtube Shorts</h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link className="breadcrumb-lmk" to="/">Home</Link></li>
       
          <li className="breadcrumb-item active" aria-current="page">Shorts</li>
        </ol>
      </nav>
    </div>
    {/* <div className="input-group w-25">
      <input type="text" className="form-control" placeholder="Search Categories..." />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div> */}
  </div>
</div>
              
             
<div className="row row-cols-1 row-cols-md-3 mt-2">
    {currentItems.map(video => (
        <div className="col mb-2" key={video.id.videoId}>
            <div className="card h-100">
                <img src={video.snippet.thumbnails.high.url} className="card-img-top" alt={video.snippet.title} />
                <div className="card-footer text-center">
                    <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" className="btn btn-danger">
                        <i className="fab fa-youtube"></i> Watch on YouTube
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{video.snippet.title}</h5>
                    <p className="card-text">{video.snippet.description}</p>
                </div>
            </div>
        </div>
    ))}
</div>






                <div className="row mt-5">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageChange}
                        pageRangeDisplayed={5}
                        pageCount={totalPages}
                        previousLabel="< previous"
                        marginPagesDisplayed={2}
                        containerClassName="pagination"
                        activeClassName="active"
                        previousClassName="page-item"
                        nextClassName="page-item"
                        pageClassName="page-item"
                        breakClassName="page-item"
                        pageLinkClassName="page-link"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"
                        breakLinkClassName="page-link"
                    />
                </div>
                 
            </main>
            </>
           
          
            
          
        </div>
    </div>



    )
}

export default Shorts;









