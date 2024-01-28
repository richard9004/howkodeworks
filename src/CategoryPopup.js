import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import './styles/style.css';
import { setCredentials, logout, setToken } from "./store/userSlice";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";

function CategoryPopup({ showPopup, togglePopup, frontendCategories }){
 
 
  return (
    <>
   {showPopup && (
  <div className="popup container" id="popup">
    <button className="close-button" onClick={togglePopup}><i className="fa fa-close"></i></button>
    <div className=" mb-3">
      <div className="col text-center">
        <h2 className=""><b>Categories</b></h2>
      </div>
      <div className="col text-center">
        <input type="text" className="search_category" placeholder="Search..." />
      </div>
    </div>
   
    <div className="d-flex justify-content-center">
      {frontendCategories.map(category => (
        <div className="col" key={category.id}>
         <Link to={`/categories/${category.slug}`} className="nav-link" onClick={togglePopup}>
         <h4>{category.title}</h4>
         </Link>
          {category.subcategory.map(sub => (
            <Link className="header_links nav-link" to={`/categories/${category.slug}/${sub.slug}`} key={sub.id}>{sub.title}</Link>
          ))}
        </div>
      ))}
    </div>
  </div>
)}

    </>
 
  );
}

export default CategoryPopup;
