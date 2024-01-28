import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
// LETS IMPORT IT

import { useDispatch } from "react-redux";
import {
  setCredentials,
  logout,
  setToken,
  tokenExpired,
} from "./store/userSlice";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";
import Paginate from "react-paginate";
import "./styles/pagination.css";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import './styles/page.css'
import { Link } from "react-router-dom";




// LETS SEE HOW TO USE TOSTIFY
// IN REACT JS

function PopularPosts() {
  const [loading, setloading] = useState(false);
  let userdata = useSelector((state) => state.user);
  const { page_id } = useParams();
  const validToken = userdata.token;
  userdata = userdata.userInfo;
  const [usersBackend, setUsersBackend] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // FILTERS
  const [searchMetaTitle, setSearchMetaTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchSubCategory, setSearchSubCategory] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [usersPerPage, setUsersPerPage] = useState();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);

  const [tempUserData, setTempUserData] = useState([]);

  const location = useLocation();
  const pageTitle = location.state && location.state.title ? location.state.title : '';

  const [inputValue, setInputValue] = useState('');
  const [selectedSuggesionId, setSelectedSuggesionId] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [listedPosts, setListedPosts] = useState([]);

  

  const handleSuggestionSelect = (data) => {
    setSelectedSuggesionId(data.id);
    setInputValue(data.meta_title);
    setSuggestions([]);
  }

  const handleDeletePost = async (delete_id) => {
    setloading(true);
    const token = validToken;
    // Add the token to the Authorization header.
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = {
      delete_id: delete_id,
    };
  
    try {
      // Use axios.delete for a DELETE request instead of axios.post
      const response = await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/deletePopularPages`,
        {
          headers,
          data, // Include the data in the request body for a DELETE request
        }
      );
  
      setloading(false);
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      getPopularPosts();
    } catch (error) {
      if (error.response.status === 422) {
        toast.error(error.response.data.error, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
  
      setloading(false);
    }
  };
  

  const addPopularPost = async () => {
    setloading(true);
    const searchTerm = event.target.value;
    setInputValue(searchTerm);
    const token = validToken;
    // Add the token to the Authorization header.
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = {
      post_id: selectedSuggesionId,
      page_id: page_id,
    };
   
    
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/savePopularPages`,
         data,
         {
          headers,
        }
      );

      setInputValue("");
      setloading(false);
      toast.success("Success ! Popular post has been added to the Page", {
        position: toast.POSITION.TOP_CENTER,
      });
      getPopularPosts();
    }catch(error){
        if(error.response.status==422){
          toast.error(error.response.data.error, {
            position: toast.POSITION.TOP_CENTER,
          });
  
        }

        setloading(false);
    }
    

  }

  const handleInputChange = async (event) => {
    const searchTerm = event.target.value;
    setInputValue(searchTerm);
    // Clear suggestions if the input is empty
  if (!searchTerm.trim()) {
    setSuggestions([]);
    return;
  }

    const token = validToken;
    // Add the token to the Authorization header.
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const search = {
      searchTerm: searchTerm,
      id: page_id,
    };
   
    
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/getPopularPages`,
         search,
         {
          headers,
        }
      );

      setSuggestions(response.data.data);
    }catch(error){

    }
    


  }


  useEffect(() => {
    getPopularPosts();
  }, []);

  const getPopularPosts = async () => {
    setloading(true);
    const token = validToken;
    // Add the token to the Authorization header.
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const search = {
      page_id: page_id,
    
      
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/getPopularPosts/${page_id}`,
        {
          headers,
        }
      );
      setloading(false);
      setListedPosts(response.data.data);
     
      //return response;
    } catch (error) {
      if (error.response.status === 401) {
      }

      setloading(false);
    }
  };

  const paginatedUsers = usersBackend;

  const handlePageChange = (page) => {
    let pageNo = page.selected + 1;
    getPages(pageNo);
    setCurrentPage(page);
  };

  const handleEdit = (userData) => {
    // Set the isEditModalOpen state variable to true.
    setTempUserData(userData);
    setIsEditModalOpen(true);
  };

  const handleView = (userData) => {
  
    setTempUserData(userData);
    console.log(Object.keys(tempUserData).length );
    console.log(tempUserData);
 
    
    setIsViewModalOpen(true);
    console.log(isViewModalOpen);
    console.log(isCloseModalOpen);
  };

  const onCloseEditModal = () => {
    // Set the isEditModalOpen state variable to false.
    setIsEditModalOpen(false);
  };

  const onCloseViewModal = () => {
   
    setIsViewModalOpen(false);
  };

  const handleDelete = () => {};

  const handleSearch = () => {
    // Fetch the users with the selected filters.
    // ...
  };

  return (
    // LETS INTERGRATE PROFILE IN THIS SECTION
    // WILLUSE BOOTSTRAP 5
    <>
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

      <div className={`card mt-4 ${loading ? "disable" : ""}`}>
  <div className="card-body d-flex justify-content-between align-items-center">
    <div>
      <h3 className="card-title">Popular Posts <i className="fa fa-file-alt"></i></h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a className="breadcrumb-lmk" href="#">Dashboard</a></li>
          <li className="breadcrumb-item"><Link className="breadcrumb-lmk" to="/pages">Pages</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Popular Posts</li>
        </ol>
      </nav>
    </div>

  </div>
</div>





<div className={`card mt-2 ${loading ? "disable" : ""}`}>
      <div className="card-body">
        <ToastContainer />

        <div className="row g-3 align-items-center">
          <div className="col-md-10">
            <h2 className="mb-0">{pageTitle}</h2>
          </div>

        
        </div>
      </div>
      
      <div className="card-body">
      <div className="row g-3 align-items-center">
        <div className="col-md-6">
          <input
            className="form-control"
            placeholder="Type Page Name"
            value={inputValue}
            onChange={handleInputChange}
          />

          {suggestions.length > 0 && (
            <ul className="list-group suggestion-list">
              {suggestions.map(suggestion => (
                <li key={suggestion.id} className="list-group-item suggestion-list-item" onClick={() => handleSuggestionSelect(suggestion)}>
                  {suggestion.meta_title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="col-md-2">
          <button className="btn btn-custom" onClick={()=>addPopularPost()}><i className="fa fa-plus"></i> Add Popular Post</button>
        </div>
      </div>
    </div>


    </div>
      <div className="row">
        <div className="col-sm-12">
          <table
            className={`table table-bordered mt-2 ${loading ? "disable" : ""}`}
          >
            <thead>
              <tr>
                <th>Post</th>
             
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listedPosts.map((items) => (
                <tr key={items.id}>
                  <td>{items.meta_title}</td>
        
                  <td>
                    <div className="d-flex">
                   
                      <button
                        type="button"
                        className="btn btn-sm btn-custom me-2"
                        onClick={() => handleDeletePost(items.id)}
                      >
                        <i className="fa fa-trash me-1" aria-hidden="true"></i>

                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {listedPosts.length === 0 && (
  <tr className="text-center">
    <td colSpan="5">
      <span className="text-muted">No records found</span>
    </td>
  </tr>
)}
            </tbody>
          </table>
        </div>
      </div>

     


      
    </>
  );
}

export default PopularPosts;
