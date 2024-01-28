import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
// LETS IMPORT IT

import { useDispatch } from "react-redux";
import { useNavigate, useParams, useHistory, useLocation } from "react-router-dom";
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
import { Helmet } from "react-helmet";




// LETS SEE HOW TO USE TOSTIFY
// IN REACT JS

function CategoryListing() {
  const [loading, setloading] = useState(false);
  const params = useParams();
  
  console.log(params);
  const postSlug = params.slug;

 

  const [usersBackend, setUsersBackend] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  let location = useLocation();


  // FILTERS
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchSubCategory, setSearchSubCategory] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

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
  const [usrSubCategories, setUsrSubCategories] = useState([]);
  const [mainCategoryTitle, setMainCategoryTitle] = useState('');
  

  const [tempUserData, setTempUserData] = useState([]);
  const [tempCatData, setTempCatData] = useState([]);
  const [categorySlug, setCategorySlug] = useState("");
  
  const [page, setPage] = useState(1);
  const [hasMoreCategories, setHasMoreCategories] = useState(true);

  useEffect(() => { 
    getUserSubCategories();
   }, [postSlug, page]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
 
      
  }, []);
  
 


  const goToSubCategory = (data) => {
    navigate(`/categories/${categorySlug}/${data.slug}`);
  }
  
 
 

  const getUserSubCategories = async () => {
 
    setloading(true);
    const search = {
      slug: postSlug,
      page:page
    };
   
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/getUserSubCategories/${postSlug}`,
        {
          params: search,
        }
      );
      setloading(false);
      const newCategories = response.data.data;
     
       // setUsrSubCategories([...usrSubCategories, newCategories]);
       if(page==1){
        setUsrSubCategories(newCategories);
        setPage(1);
       }else{
        setUsrSubCategories(prev => [...prev,...newCategories])
       }
       
      setHasMoreCategories(response.data.hasMoreSubcategories);
      setMainCategoryTitle(response.data.categoryTitle);
      setCategorySlug(response.data.categorySlug);
      
      setMetaTitle(response.data.categoryMetaTitle);
      setMetaDescription(response.data.categoryMetaDescription);
    
    } catch (error) {
      if (error.response.status === 401) {
      }
      setloading(false);
    }
  };


  const handleScroll = () => {
    let dh = Math.round(window.scrollY + window.innerHeight);
    if ((dh >= 
      document.documentElement.scrollHeight) && (hasMoreCategories==true)) {
        setPage((prev)=>prev+1);
        
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
        {/* Set the title dynamically */}
        <title>{metaTitle}</title>
        {/* Set the meta description */}
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
      </Helmet>


      {loading && (
        <div
          className="loading-overlay"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "9999",
            textAlign: "center",
            color: "#fff", // Adjust the text color as needed
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

          <div style={{ marginTop: "5px", fontSize: "16px", color: "black" }}>
            Loading, your content is on the way...
          </div>
        </div>
      )}
      <div className={`card mt-4 ${loading ? "disable" : ""}`}>
  <div className="card-body d-flex justify-content-between align-items-center">
    <div>
      <h3 className="card-title"> {mainCategoryTitle}</h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a className="breadcrumb-lmk" href="#">Home</a></li>
          <li className="breadcrumb-item"><Link className="breadcrumb-lmk" to="/categories">Categories</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{mainCategoryTitle}</li>
        </ol>
      </nav>
    </div>
    <div className="input-group w-25">
      <input type="text" className="form-control" placeholder="Search Categories..." />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  </div>
</div>

   
<div  className="row mt-2"> 


{usrSubCategories.map((item, index) => (
  
       <div class="col-lg-4 mb-3 d-flex align-items-stretch" key={index} >
       <div class="card blocks-lmk" onClick={() => goToSubCategory(item)}>

         <div class="card-body d-flex flex-column">
           <h5 class="card-title lmk-title">{item.title}</h5>
           <p class="card-text mb-4">{item.description}</p>
         
         </div>
       </div>
     </div>


  ))}
</div>



    

      
    </>
  );
}

export default CategoryListing;
