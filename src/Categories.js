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
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";
import Paginate from "react-paginate";
import "./styles/pagination.css";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import CreateCategory from "./CreateCategory";
import EditCategory from "./EditCategory";
import './styles/page.css'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';




// LETS SEE HOW TO USE TOSTIFY
// IN REACT JS

function Categories() {
  const [loading, setloading] = useState(false);
  let userdata = useSelector((state) => state.user);
  const validToken = userdata.token;
  userdata = userdata.userInfo;
  const [usersBackend, setUsersBackend] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // FILTERS
  const [searchTitle, setSearchTitle] = useState("");
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

  const [isCreateCategoryOpen, setIsCreateCategoryOpen] = useState(false);

  const [catPageNo, setCatPageNo] = useState(1);

  

  const [tempUserData, setTempUserData] = useState([]);
  const [tempCatData, setTempCatData] = useState([]);

  const static_meta_title = "Manage Categories - LetsMakeItOnline";
  const static_meta_description= "Listing, create, edit and delete category";



  useEffect(() => {
    getCategories();
    
  }, [searchTitle, searchCategory, searchSubCategory, searchStatus]);

 

 

  const getCategories = async (pageNo = 1) => {
    setloading(true);
    setCatPageNo(pageNo);
    const token = validToken;
    // Add the token to the Authorization header.
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const search = {
      title: searchTitle,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/getCategories?page=${pageNo}`,
        {
          headers,
          params: search,
        }
      );
      setloading(false);
      setUsersBackend(response.data.data.data);
      setUsersPerPage(response.data.data.per_page);
      setTotalPages(response.data.data.last_page);

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
    getCategories(pageNo);
    setCurrentPage(page);
  };

  const handleEdit = (editData) => {
    // Set the isEditModalOpen state variable to true.
    console.log('editData');
    console.log(editData);
    setTempCatData(editData);
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


  const openCreateCategoryModal = () => {
   
    setIsCreateCategoryOpen(true);
  }



  const onCloseCreateCategory = () => {
    setIsCreateCategoryOpen(false);
  }

  const handleDelete = () => {};

  const handleSearch = () => {
    // Fetch the users with the selected filters.
    // ...
  };

  const refreshCategories = () => {
    getCategories(catPageNo);
  }

  return (
    // LETS INTERGRATE PROFILE IN THIS SECTION
    // WILLUSE BOOTSTRAP 5
    <>
          <Helmet>
        {/* Meta tags for Facebook */}
        <meta property="og:title" content={static_meta_title} />
        <meta property="og:description" content={static_meta_description} />
        {/* <meta property="og:image" content={pageImageURL} /> */}
        <meta property="og:url" content={window.location.href} />

        {/* Meta tags for general SEO */}
        <meta name="title" content={static_meta_title} />
        <meta name="description" content={static_meta_description} />
        <title>{static_meta_title}</title>
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

      <div className={`card mt-4 ${loading ? "disable" : ""}`}>
  <div className="card-body d-flex justify-content-between align-items-center">
    <div>
      <h3 className="card-title"> Manage Categories <i className="fa fa-file-alt"></i></h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a className="breadcrumb-lmk" href="#">Dashboard</a></li>
          <li className="breadcrumb-item active" aria-current="page">Categories</li>
        </ol>
      </nav>
    </div>
    <button className="btn btn-custom"  onClick={() => openCreateCategoryModal()}><i className="fa fa-plus"></i> Add New Category</button>
  </div>
</div>





      <div className={`card mt-2 ${loading ? "disable" : ""}`}>
        <div className="card-body">
          <ToastContainer />
        

          <div className="row g-3">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Title"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
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
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((items) => (
                <tr key={items.id}>
                  <td>{items.title}</td>
               
                

                  <td>
                    <div className="d-flex">
                      <button
                        type="button"
                        className="btn btn-sm btn-custom me-2"
                        onClick={() => handleEdit(items)}
                      >
                        <i className="fa fa-edit me-1" aria-hidden="true"></i>

                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-custom me-2"
                        onClick={() => handleView(items)}
                      >
                        <i className="fa fa-eye me-1" aria-hidden="true"></i>

                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-custom me-2"
                        onClick={() => handleDelete(items.id)}
                      >
                        <i className="fa fa-trash me-1" aria-hidden="true"></i>

                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
                {paginatedUsers.length === 0 && (
  <tr className="text-center">
    <td colSpan="2">
      <span className="text-muted">No records found</span>
    </td>
  </tr>
)}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mt-2">
        <Paginate
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

      <CreateCategory isOpen={isCreateCategoryOpen} onClose={onCloseCreateCategory} refreshCategories={refreshCategories}/>

 
      {Object.keys(tempUserData).length > 0 && (
        <ViewUser isOpen={isViewModalOpen} onClose={onCloseViewModal} userData={tempUserData} />
       
      )}

     {Object.keys(tempCatData).length > 0 && (
       <EditCategory isOpen={isEditModalOpen} onClose={onCloseEditModal} refreshCategories={refreshCategories} tempCatData={tempCatData} />
       
      )}


      
    </>
  );
}

export default Categories;
