import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useSelector } from "react-redux";
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

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    maxWidth: "600px",
    width: "90%",
    backgroundColor: "white",
    color: "black",
    border: "none",
  },
};

function EditSubCategory(props) {
  const { isOpen, onClose, refreshCategories, tempCatData, allCats } = props;
  let userdata = useSelector((state) => state.user);
  const validToken = userdata.token;

  
  console.log('allCats');
  console.log(allCats);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(isOpen);

  const openModal = () => {
    setIsOpen(true);
  };

  const [loading, setloading] = useState(false);
 
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    slug: Yup.string().required("Slug is required"),
    description: Yup.string().required("Description is required"),
    category_id: Yup.string().required("Category is required"),
    meta_title: Yup.string().required("Meta title is required"),
    meta_description: Yup.string().required("Meta description is required"),
  });


  const formik = useFormik({
    initialValues: tempCatData,
    enableReinitialize:true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
     
      var data = JSON.stringify(values);
      //  WE PASS THIS DATA
      updateCategoryData(data);
      //formik.resetForm();
    },
  });



  const updateCategoryData = async (data) => {
    let catData = JSON.parse(data);
    //  PASSING THE DATA TO USERS CONTROLLER
    setloading(true);
    try {
      // Get the token from local storage.
      const token = validToken;

      // Add the token to the Authorization header.
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      let category_id = tempCatData.id;

      const response = await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/updateSubCategory/${category_id}`,
        {
          id: category_id,
          title: catData.title,
          description: catData.description,
          category_id:catData.category_id,
          slug: catData.slug,
          meta_title: catData.meta_title,
          meta_description: catData.meta_description,
        },
        {
          headers,
        }
      );

      // LETS USE TOSTIFY WHEN USER
      // SIGNSUP

      // LETS MODIFY AND PLAY WITH TOSTIFY
      // REALTIME EXAMPLES
      toast.success("Success ! Sub Category updated succesfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    
      // Use setTimeout to delay the navigation
      setTimeout(() => {
        setIsOpen(false);
        setloading(false);
        onClose(); // Call the onClose prop to handle closing the modal from parent component
        refreshCategories();
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

  const afterOpenModal = () => {
    // Code to run after the modal has opened (if needed)
  };

  const closeModal = () => {
    setIsOpen(false);
    onClose(); // Call the onClose prop to handle closing the modal from parent component
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="EditSubCategory"
    >
      <form
        onSubmit={formik.handleSubmit}
        className={`${loading ? "disable" : ""}`}
      >
        <div className="modal-header">
          <h5 className="modal-title">Edit Sub Category</h5>
          <button
            type="button"
            className="btn-close"
            onClick={closeModal}
          ></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              placeholder="Enter Category Title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {/* THESE ARE VALIDATATION MESSAGES */}
            {formik.errors.title ? (
              <div className="invalid_err">{formik.errors.title}</div>
            ) : null}
          </div>

          <div className="mb-3">
  <label htmlFor="category" className="form-label">
    Select Category
  </label>
  <select
    id="category_id"
    name="category_id"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="form-control"
  >
    <option value="">Select a category</option>
    {allCats.data.map(category => (
       
     <option key={category.id} value={category.id} selected={tempCatData.category_id == category.id}>

     {category.title}
   </option>
    ))}
  </select>

  {/* VALIDATION MESSAGES */}
  {formik.errors.category ? (
    <div className="invalid_err">{formik.errors.category}</div>
  ) : null}
</div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter Category description"
              onChange={formik.handleChange}
              value={formik.values.description}
            ></textarea>
            {/* THESE ARE VALIDATATION MESSAGES */}
            {formik.errors.description ? (
              <div className="invalid_err">{formik.errors.description}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="slug" className="form-label">
              Slug
            </label>
            <input
              type="text"
              name="slug"
              className="form-control"
              id="slug"
              placeholder="Enter Slug"
              onChange={formik.handleChange}
              value={formik.values.slug}
            />
            {/* THESE ARE VALIDATATION MESSAGES */}
            {formik.errors.title ? (
              <div className="invalid_err">{formik.errors.slug}</div>
            ) : null}
          </div>


          <div className="mb-3">
            <label htmlFor="meta_title" className="form-label">
              Meta Title
            </label>
            <input
              type="text"
              name="meta_title"
              className="form-control"
              id="meta_title"
              placeholder="Meta Title"
              onChange={formik.handleChange}
              value={formik.values.meta_title}
            />
            {/* THESE ARE VALIDATATION MESSAGES */}
            {formik.errors.meta_title ? (
              <div className="invalid_err">{formik.errors.meta_title}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="meta_description" className="form-label">
              Meta Description
            </label>
            <input
              type="text"
              name="meta_description"
              className="form-control"
              id="meta_description"
              placeholder="Meta Description"
              onChange={formik.handleChange}
              value={formik.values.meta_description}
            />
            {/* THESE ARE VALIDATATION MESSAGES */}
            {formik.errors.meta_description ? (
              <div className="invalid_err">{formik.errors.meta_description}</div>
            ) : null}
          </div>


        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-sm btn-success">
            <i className="fa fa-save"></i> Update Category
          </button>
          <button
            type="button"
            className="btn btn-sm btn-secondary ms-2"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default EditSubCategory;
