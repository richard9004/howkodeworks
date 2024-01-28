import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
// LETS IMPORT IT

import { useDispatch } from "react-redux";
import {
  useNavigate,
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";
import Paginate from "react-paginate";
import "./styles/pagination.css";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import CreateCategory from "./CreateCategory";
import EditCategory from "./EditCategory";
import "./styles/page.css";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';


import { Helmet, HelmetProvider } from 'react-helmet-async';

function FrontendPage() {
  const [loading, setloading] = useState(false);
  const params = useParams();
 
  console.log(params);
  const postSlug = params.slug;
  const postSlug2 = params.slug2;
  const postSlug3 = params.slug3;

  const [usersBackend, setUsersBackend] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState([]);
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
  const [mainCategoryTitle, setMainCategoryTitle] = useState("");

  const [tempUserData, setTempUserData] = useState([]);
  const [tempCatData, setTempCatData] = useState([]);
  const [categorySlug, setCategorySlug] = useState("");
  const [frontendPageData, setFrontendPageData] = useState([]);
  const [catTitle, setCatTitle] = useState("");
  const [subCatTitle, setSubCatTitle] = useState("");
  const [smallTitle, setSmallTitle] = useState("");

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${window.location.href}`;

  const shareStyle = {
    marginLeft: "5px",
  };

  useEffect(() => {
    getPage();
  }, [postSlug, postSlug2, postSlug3]);

  const getPage = async () => {
    setloading(true);
    const search = {
      slug: postSlug,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/getPage/${postSlug}/${postSlug2}/${postSlug3}`,
        {
          params: search,
        }
      );
     
      const pageData = JSON.parse(response.data.data.content);
      setFrontendPageData(pageData);
      console.log("PRINT PAGE DATA");
      console.log(frontendPageData);
      setCatTitle(response.data.catTitle);
      setSubCatTitle(response.data.subCatTitle);
      setSmallTitle(response.data.data.small_title);

      setMetaTitle(response.data.data.meta_title);
      setMetaDescription(response.data.data.meta_description);
      setloading(false);

      document.title = response.data.data.meta_title;

      const metaTitleElement = document.querySelector('meta[name="title"]');
      metaTitleElement.content = response.data.data.meta_title;
    
      const metaDescriptionElement = document.querySelector('meta[name="description"]');
      metaDescriptionElement.content = response.data.data.meta_description

      getRelatedPostsFrontend(response.data.data.id);
    } catch (error) {
      if (error.response.status === 401) {
      }
      setloading(false);
    }
  };

  const getRelatedPostsFrontend = async (page) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/getRelatedPostsFrontend/${page}`
      );

      setRelatedArticles(response.data.data);
    } catch (error) {
      if (error.response.status === 401) {
      }
    }
  };

  const paginatedUsers = usersBackend;

  return (
    <>
     <HelmetProvider>
      <Helmet>
        {/* Meta tags for Facebook */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        {/* <meta property="og:image" content={pageImageURL} /> */}
        <meta property="og:url" content={window.location.href} />

        {/* Meta tags for general SEO */}
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <title>{metaTitle}</title>
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
            <h3 className="card-title">{mainCategoryTitle}</h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="breadcrumb-lmk" href="#">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <Link className="breadcrumb-lmk" to="/categories">
                    Categories
                  </Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <Link
                    className="breadcrumb-lmk"
                    to={`/categories/${postSlug}`}
                  >
                    {catTitle}
                  </Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <Link
                    className="breadcrumb-lmk"
                    to={`/categories/${postSlug}/${postSlug2}`}
                  >
                    {subCatTitle}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {smallTitle}
                </li>
              </ol>
            </nav>
          </div>

          {/* Share buttons */}
          <div className="d-flex">
            {/* Facebook share button */}
            <a
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-custom"
            >
              <i className="fab fa-facebook-f"></i> Share on Facebook
            </a>

            {/* LinkedIn share button */}
            <a
              href={linkedinShareUrl}
              style={shareStyle}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-custom"
            >
              <i className="fab fa-linkedin"></i> Share on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className={`row mt-3 mb-2 ${loading ? "disable" : ""}`}>
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              {frontendPageData.map((item, index) => (
                <div key={index}>
                  {item.type == "h1" && <h1 className="mt-4">{item.text}</h1>}
                  {item.type == "h2" && <h2 className="mt-4">{item.text}</h2>}
                  {item.type == "h3" && <h3 className="mt-4">{item.text}</h3>}
                  {item.type == "h4" && <h4 className="mt-4">{item.text}</h4>}
                  {item.type === "p" && (
                    <div
                      className="content-dny"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    ></div>
                  )}
                  {item.type === "code" && (
                    <SyntaxHighlighter language="javascript" style={dark}>
                      {item.text}
                    </SyntaxHighlighter>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`card-body d-flex justify-content-between align-items-center ${
          loading ? "disable" : ""
        }`}
      >
        {/* Share buttons */}
        <div className="d-flex">
          {/* Facebook share button */}
          <a
            href={facebookShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-custom"
          >
     1       <i className="fab fa-facebook-f"></i> Share on Facebook
          </a>

          {/* LinkedIn share button */}
          <a
            href={linkedinShareUrl}
            style={shareStyle}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-custom"
          >
            <i className="fab fa-linkedin"></i> Share on LinkedIn
          </a>
        </div>
      </div>
      <div className={`row mt-3 mb-5 ${loading ? "disable" : ""}`}>
        <div className="col-sm-12">
        {relatedArticles.length > 0 && (
  <div className="d-flex align-items-center mb-4 mt-4">
    <i className="fas fa-lightbulb fa-2x me-2 text-primary"></i>{" "}
    {/* Change the icon and color as needed */}
    <h2 className="mb-0">Related Posts</h2>
  </div>
)}
          <div className="row">
            {relatedArticles.map((article) => (
              <div key={article.id} className="col-md-12 mb-1">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title">
                      <Link
                        to={`/categories/${article.category_slug}/${article.subcategory_slug}/${article.page_slug}`}
                        className="popularLinks"
                      >
                        {" "}
                        <i
                          className="fas fa-angle-double-right"
                          aria-hidden="true"
                        ></i>{" "}
                        {article.meta_title}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </HelmetProvider>
    </>
  );
}

export default FrontendPage;
