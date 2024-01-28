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


function SubCategoryListing() {
  const [loading, setloading] = useState(false);
  const params = useParams();
  
  const postSlug1 = params.slug;
  const postSlug2 = params.slug2;

 
  let userdata = useSelector((state) => state.user);
  const validToken = userdata.token;
  userdata = userdata.userInfo;
  const [usersBackend, setUsersBackend] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  let location = useLocation();


  // FILTERS
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchSubCategory, setSearchSubCategory] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
 const  [loadingText, setLoadingText] = useState("Please Wait...");

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
  const [catTitle, setCatTitle] = useState("");
  const [catLink, setCatLink] = useState("");

  const [metaTitle, setMetaTitle]= useState("");
  const [metaDescription, setMetaDescription]= useState("");
  
 
    
  const [page, setPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);


  useEffect(() => {
    getUserSubCategories();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [postSlug1, postSlug2, page]);


  




  const getUserSubCategories = async () => {
 
    setloading(true);
    const search = {
      slug: postSlug1,
      slug: postSlug2,
      page:page,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/getSubCatPages/${postSlug1}/${postSlug2}`,
        {
          params: search,
        }
      );
      setloading(false);
      const newCategories = response.data.data;
      if(page==1){
        setUsrSubCategories(newCategories);
        setPage(1);
        setCatTitle(response.data.category_title)
        setCatLink(response.data.category_slug)
        setMetaTitle(response.data.subCategoryMetaTitle)
        setMetaDescription(response.data.subCategoryMetaDescription)
       }else{
        setUsrSubCategories(prev => [...prev,...newCategories])
       }
      
      setHasMorePages(response.data.hasMorePages);
   
      setMainCategoryTitle(response.data.subcategory_title);
      
      if(usrSubCategories.length==0){
        setLoadingText('No records found')
      }
    
    } catch (error) {
      if (error.response.status === 401) {
      }

      setloading(false);
    }
  };

  const handleScroll = () => {
    let dh = Math.round(window.scrollY + window.innerHeight);
    if ((dh >= 
      document.documentElement.scrollHeight) && (hasMorePages==true)) {
       // alert(`${dh} >= ${document.documentElement.scrollHeight} and hasMore ${hasMorePages}`);
        setPage((prev)=>prev+1);
        
    }
  };

  const paginatedUsers = usersBackend;



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

  const goToSubCategory = (data) => {
    navigate(`/categories/${postSlug1}/${postSlug2}/${data.slug}`);
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
          <li className="breadcrumb-item"><Link className="breadcrumb-lmk" to="/">Home</Link></li>
          <li className="breadcrumb-item" aria-current="page"><Link className="breadcrumb-lmk" to={`/categories`}>Categories</Link></li>
          <li className="breadcrumb-item" aria-current="page"><Link className="breadcrumb-lmk" to={`/categories/${catLink}`}>{catTitle}</Link></li>
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

   
{/* <div className="row d-flex justify-content-between mt-2">
  {usrSubCategories.length > 0 ? (
    usrSubCategories.map((item, index) => (
      <div className="col-lg-4 mb-4" key={item.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.meta_title}</h5>
            <p className="card-text">{item.meta_description}</p>
            <a href="#" className="card-link lmk_sub_links">
              <i className="fas fa-book-reader"></i> Read Post
            </a>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="col-12 text-center">
        <div className="card">
        <div className="card-body">
        <small className="breadcrumb-item">{loadingText}</small>
      </div>
      </div>
    </div>
  )}
</div> */}


<div  className={`row mt-2 ${loading ? "disable" : ""}`}>


{usrSubCategories.map((item, index) => (
  
       <div class="col-lg-4 mb-3 d-flex align-items-stretch" key={index} >
       <div class="card blocks-lmk" onClick={() => goToSubCategory(item)}>

         <div class="card-body d-flex flex-column">
           <h5 class="card-title lmk-title">{item.meta_title}</h5>
           <p class="card-text mb-4">{item.meta_description}</p>
         
         </div>
       </div>
     </div>


  ))}
</div>




    

      
    </>
  );
}

export default SubCategoryListing;
