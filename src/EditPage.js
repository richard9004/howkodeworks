import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import {
  setCredentials,
  logout,
  setToken,
  tokenExpired,
} from "./store/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";
import Paginate from "react-paginate";
import "./styles/pagination.css";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import "./styles/page.css";
import "./styles/createpage.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { CodeBlock } from "react-code-blocks";
import { Helmet } from "react-helmet";

function EditPage(props) {
  const [loading, setloading] = useState(false);
  const initialValues = {
    meta_title: "",
    meta_description: "",
    category: "",
    subcategory: "",
    slug: "",
    publish: 0,
  };
  const { id } = useParams();
  const [pageId, setPageId] = useState(id); // Define the page_id variable here
  const [formikInitialData, setFormikInitialData] = useState({});
  const [addedElements, setAddedElements] = useState([]);
  const [htmlElements, setHtmlElements] = useState([]);
  const static_meta_title = "Edit Page - LetsMakeItOnline";
  const static_meta_description= "Edit Page";

  let userdata = useSelector((state) => state.user);
  const validToken = userdata.token;

  const [nCats, setNCats] = useState([]);
  const [nSubCats, setNSubCats] = useState([]);
  useEffect(() => {
    getEditPageData(pageId);
    getAllCategories();
  }, []);

  const editorRef = useRef(null);


  const handleFormat = (format, value = null) => {
 
    document.execCommand(format, false, value);
  };

  

  const getEditPageData = async (pageId) => {
    try {
      setloading(true);
      const token = validToken;
      // Add the token to the Authorization header.
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/getEditPageData/${pageId}`,
        {
          headers,
        }
      );

      setFormikInitialData({
        meta_title: response.data.data.meta_title,
        meta_description: response.data.data.meta_description,
        category: response.data.data.category,
        subcategory: response.data.data.subcategory,
        slug: response.data.data.slug,
        publish: response.data.data.publish,
        small_title:response.data.data.small_title,
      });

      console.log(response.data.data.content);
      const parsedContent = JSON.parse(response.data.data.content);
      console.log("PARSED");
      console.log(parsedContent);

      if (parsedContent.length > 0) {
        setHtmlElements(parsedContent);
        getAllSubCategories(response.data.data.category);
      }

      console.log("Formik Initial Data");
      console.log(formikInitialData);
      setloading(false);
    } catch (error) {
      setloading(false);
    }
  };

  const getAllCategories = async () => {
    try {
      const token = validToken;
      // Add the token to the Authorization header.
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/getAllCategories`,
        {
          headers,
        }
      );

      setNCats(response.data.data);
      console.log("All Categories");
      console.log(nCats);
    } catch (error) {}
  };

  const getAllSubCategories = async (category_id) => {
    try {
      const token = validToken;
      // Add the token to the Authorization header.
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/getAllSubCategories/${category_id}`,
        {
          headers,
        }
      );
      setNSubCats(response.data.data);
      console.log("All Sub Categories");
      console.log(nSubCats);
    } catch (error) {}
  };

  const validationSchema = Yup.object({
    meta_title: Yup.string().required("Meta title is required"),

    meta_description: Yup.string().required("Meta description is required"),

    category: Yup.string().required("Category is required"),

    subcategory: Yup.string().required("Sub category is required"),

    slug: Yup.string().required("Slug is required"),

    small_title:  Yup.string().required("Meta title is required"),
  });

  const formik = useFormik({
    initialValues: formikInitialData,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      var data = JSON.stringify(values);
      var elements = JSON.stringify(addedElements);
      postPageData(data, elements);
    },
  });

  const postPageData = async (data, elements) => {
    let pageData = JSON.parse(data);
    //  PASSING THE DATA TO USERS CONTROLLER
    setloading(true);
    try {
      // Get the token from local storage.
      const token = validToken;

      // Add the token to the Authorization header.
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/updatePage/${pageId}`,
        {
          meta_title: pageData.meta_title,
          meta_description: pageData.meta_description,
          category: pageData.category,
          subcategory: pageData.subcategory,
          publish: pageData.publish,
          content: htmlElements,
          slug: pageData.slug,
          small_title: pageData.small_title,
        },
        {
          headers,
        }
      );

      toast.success("Success ! Page has been updated", {
        position: toast.POSITION.TOP_CENTER,
      });
      //setloading(false);
      formik.resetForm();
      // Use setTimeout to delay the navigation
      setTimeout(() => {
        navigate("/pages"); // Redirect after 3 seconds
      }, 2000); // 3000 milliseconds = 3 seconds
      return response;
    } catch (error) {
      // IF ANY ERROR LETS DISPLAY ERROR AT BOTTOM
      // LETS PRINT THE ERROR MESSAGE\
      // FROM THE SERVER
      console.log(error.response);

      if (error.response.status === 401) {
        toast.error(`Your session has expired. Please log in again.`, {
          position: toast.POSITION.TOP_CENTER,
        });

        dispatch(tokenExpired());
      } else {
        toast.error(`Error! Something went wrong, please try again later`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      setloading(false);
      console.log(error);
    }
  };

  const handlePublish = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      formik.values.publish = 1;
    } else {
      formik.values.publish = 0;
    }
  };

  userdata = userdata.userInfo;
  const [usersBackend, setUsersBackend] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // FILTERS
  const [searchFirstname, setSearchFirstname] = useState("");
  const [searchLastname, setSearchLastname] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddElement = (tag, headingText) => {
    const uniqueId = uuidv4();
    let element = {
      type: tag,
      text: headingText,
      key: uniqueId,
    };
    setHtmlElements([...htmlElements, element]);
  };


  const handleDeleteElement = (key) => {
    setHtmlElements(htmlElements.filter((element) => element.key !== key));
    // Update the HTML to reflect the change.
    // This can be done by re-rendering the entire list of elements, or by updating the DOM directly.
  };

  const handleEditElement = (key, event, type) => {
    let updatedText;

    if(type=='p'){
     // updatedText = event.target.innerHTML;
     updatedText = event.target.innerHTML;
     console.log(updatedText);
    }else{
      updatedText = event.target.textContent;
    }
   
    console.log(updatedText);
    // Find the element in the htmlElements array
    const element = htmlElements.find((element) => element.key == key);

    console.log(updatedText);
    element.text = updatedText;

    // Set the htmlElements state
    setHtmlElements([...htmlElements]);

    console.log(htmlElements);
  };

  return (
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
        <ToastContainer />
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h3 className="card-title">
              Edit Page <i className="fa fa-file-alt"></i>
            </h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="breadcrumb-lmk" href="#">
                    {" "}
                    Pages
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Edit Page
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div
          className={`card mt-2 draggableMarkup ${loading ? "disable" : ""}`}
          style={{ flex: "2" }}
        >
          <div className="card-body" style={{ position: "relative" }}>
            <h5 className="card-title">Elements</h5>
            <div className="elements">
              <Tooltip id="ele1" />
              <Tooltip id="ele2" />
              <Tooltip id="ele3" />
              <Tooltip id="ele4" />
              <div className="element">
                <h1
                  data-tooltip-id="ele1"
                  data-tooltip-content="Click to add Heading 1"
                  onClick={() => handleAddElement("h1", "Heading 1")}
                >
                  Heading 1
                </h1>
              </div>

              <div className="element">
                <h2
                  data-tooltip-id="ele2"
                  data-tooltip-content="Click to add Heading 2"
                  onClick={() => handleAddElement("h2", "Heading 2")}
                >
                  Heading 2
                </h2>
              </div>

              <div className="element">
                <h3
                  data-tooltip-id="ele3"
                  data-tooltip-content="Click to add Heading 3"
                  onClick={() => handleAddElement("h3", "Heading 3")}
                >
                  Heading 3
                </h3>
              </div>

              <div className="element">
                <h4
                  data-tooltip-id="ele4"
                  data-tooltip-content="Click to add Heading 4"
                  onClick={() => handleAddElement("h4", "Heading 4")}
                >
                  Heading 4
                </h4>
              </div>

              <div className="element">
                <p
                  data-tooltip-id="para"
                  data-tooltip-content="Click to add Paragraph"
                  onClick={() =>
                    handleAddElement("p", "Your paragraph content goes here")
                  }
                >
                  Paragraph
                </p>
              </div>

              <div className="element">
                <code
                  data-tooltip-id="code"
                  data-tooltip-content="Click to add Code Snippet"
                  onClick={() =>
                    handleAddElement("code", "Your code snippet goes here")
                  }
                >
                  Code Snippet
                </code>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`card mt-2 ${loading ? "disable" : ""}`}
          style={{ flex: "8", marginLeft: "10px" }}
        >
          <div className="card-body">
            <p>
              <strong>Page Content.</strong>
            </p>
            <div className="added_elements">
              {htmlElements.length > 0 ? (
                htmlElements.map((element, index) => (
                  <div key={element.key} className="added_element">
                    {element.type === "h1" ? (
                      <h1 contentEditable={true} onBlur={(event) =>
                        handleEditElement(element.key, event, element.type)
                      }>{element.text}</h1>
                    ) : element.type === "h2" ? (
                      <h2
                        contentEditable={true}
                        onBlur={(event) =>
                          handleEditElement(element.key, event, element.type)
                        }
                      >
                        {element.text}
                      </h2>
                    ) : element.type === "h3" ? (
                      <h3
                        contentEditable={true}
                        onBlur={(event) =>
                          handleEditElement(element.key, event, element.type)
                        }
                      >
                        {element.text}
                      </h3>
                    ) : element.type === "h4" ? (
                      <h4
                        contentEditable={true}
                        onBlur={(event) =>
                          handleEditElement(element.key, event, element.type)
                        }
                      >
                        {element.text}
                      </h4>
                    ) : element.type == "p" ? (
                      <div>
                     <div>
        <button
          onClick={() => handleFormat('bold')}
          className="iconBtns"
        >
          <i className="fa fa-bold" />
        </button>
        <button
          onClick={() => handleFormat('italic')}
          className="iconBtns"
        >
          <i className="fa fa-italic" />
        </button>
        <button
          onClick={() => handleFormat('underline')}
          className="iconBtns"
        >
          <i className="fa fa-underline" />
        </button>
      </div>
                      <div
                        ref={editorRef}
                        contentEditable="true"
                        style={{ border: '1px solid #ccc', minHeight: '100px', padding: '10px' }}
                           onBlur={(event) =>
                          handleEditElement(element.key, event, element.type)
                        }
                        dangerouslySetInnerHTML={{ __html: element.text }}
                      >
                        
                      </div>
                    </div>

                    ) : element.type == "code" ? (
                      <code
                        contentEditable={true}
                        onBlur={(event) =>
                          handleEditElement(element.key, event, element.type)
                        }
                        style={{ whiteSpace: "pre" }}
                      >
                        {element.text}
                      </code>
                    ) : null}
                    <div className="d-flex align-items-center del_span">
                      <span
                        class="badge bg-danger"
                        onClick={() => handleDeleteElement(element.key)}
                      >
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </span>
                      {/* <button type="button" className="btn btn-danger btn-sm">
    <i class="fa fa-trash" aria-hidden="true"></i>
  </button> */}
                    </div>
                  </div>
                ))
              ) : (
                <div className="no_elements_added">No elements added</div>
              )}
            </div>

            <div className="input_fields mt-3">
              <p>
                <strong>Page Settings</strong>
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="meta_title" className="form-label">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    name="meta_title"
                    className="form-control"
                    id="meta_title"
                    placeholder="Enter meta title for the page"
                    onChange={formik.handleChange}
                    value={formik.values.meta_title}
                  />
                  {/* THESE ARE VALIDATATION MESSAGES */}
                  {formik.errors.meta_title ? (
                    <div className="invalid_err">
                      {formik.errors.meta_title}
                    </div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="small_title" className="form-label">
                    Small Title ( Breadcrumb Title )
                  </label>
                  <input
                    type="text"
                    name="small_title"
                    className="form-control"
                    id="small_title"
                    placeholder="Enter meta title for the page"
                    onChange={formik.handleChange}
                    value={formik.values.small_title}
                  />
                  {/* THESE ARE VALIDATATION MESSAGES */}
                  {formik.errors.small_title ? (
                    <div className="invalid_err">
                      {formik.errors.small_title}
                    </div>
                  ) : null}
                </div>


                <div className="mb-3">
                  <label htmlFor="meta_description" className="form-label">
                    Meta Description
                  </label>
                  <textarea
                    className="form-control"
                    name="meta_description"
                    id="meta_description"
                    rows="3"
                    placeholder="Enter meta description for the page"
                    onChange={formik.handleChange}
                    value={formik.values.meta_description}
                  ></textarea>
                  {/* THESE ARE VALIDATATION MESSAGES */}
                  {formik.errors.meta_description ? (
                    <div className="invalid_err">
                      {formik.errors.meta_description}
                    </div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    name="category"
                    className="form-select"
                    id="category"
                    onChange={(e) => {
                      formik.handleChange(e); // Call formik's handleChange function to update form state
                      // Make Axios call here
                      const selectedCategoryId = e.target.value; // Get the selected category id
                      getAllSubCategories(selectedCategoryId); // Call your Axios function with the selected category id
                    }}
                    value={formik.values.category}
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {nCats.length > 0 &&
                      nCats.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.title}
                        </option>
                      ))}
                  </select>
                  {/* THESE ARE VALIDATION MESSAGES */}
                  {formik.errors.category ? (
                    <div className="invalid_err">{formik.errors.category}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="subcategory" className="form-label">
                    Sub Category
                  </label>
                  <select
                    name="subcategory"
                    className="form-select"
                    id="subcategory"
                    onChange={formik.handleChange}
                    value={formik.values.subcategory}
                  >
                    <option value="" disabled selected={nSubCats.length === 0}>
                      Select Sub Category
                    </option>
                    {nSubCats.length > 0 &&
                      nSubCats.map((scat) => (
                        <option key={scat.id} value={scat.id}>
                          {scat.title}
                        </option>
                      ))}
                  </select>
                  {/* THESE ARE VALIDATATION MESSAGES */}
                  {formik.errors.subcategory ? (
                    <div className="invalid_err">
                      {formik.errors.subcategory}
                    </div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="slug" className="form-label">
                    Slug
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="slug"
                    placeholder="Enter page slug"
                    name="slug"
                    onChange={formik.handleChange}
                    value={formik.values.slug}
                  />
                  {/* THESE ARE VALIDATATION MESSAGES */}
                  {formik.errors.subcategory ? (
                    <div className="invalid_err">{formik.errors.slug}</div>
                  ) : null}
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="publish"
                    name="publish"
                    value={formik.values.publish}
                    onChange={handlePublish}
                    checked={formik.values.publish == 1 ? true : false}
                  />
                  <label className="form-check-label" htmlFor="publish">
                    Publish
                  </label>
                </div>

                <button type="submit" className="btn btn-custom">
                  <i className="fa fa-save"></i> Update Page
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPage;
