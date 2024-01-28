import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
// LETS IMPORT IT

import { useDispatch } from "react-redux";
import { setCredentials, logout, setToken, tokenExpired } from "./store/userSlice";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";


// LETS SEE HOW TO USE TOSTIFY 
// IN REACT JS

function Profile() {
  const [loading, setloading] = useState(false);
  let userdata = useSelector((state) => state.user);
  const validToken = userdata.token;
  userdata = userdata.userInfo;


  const initialValues = {
    firstname: userdata.firstname,
    lastname: userdata.lastname,
    email: userdata.email,
  };

  console.log(initialValues);

 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .required("First Name is required")
      .max(50, "First Name must be at most 50 characters"),

    lastname: Yup.string()
      .required("Last Name is required")
      .max(50, "Last Name must be at most 50 characters"),

    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .max(50, "Email must be at most 50 characters"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      var data = JSON.stringify(values);
      updateUserData(data);
    },
  });

 
  const updateUserData = async (data) => {
    setloading(true);
    let userData2 = JSON.parse(data);
  
    // Get the token from local storage.
    const token = validToken;
    
  
    // Add the token to the Authorization header.
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    try {
      let userId = userdata.id;
      
      // THIS SHOULD WORK NOW
      const response = await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/updateProfiledata/${userId}`,
        {
          firstname: userData2.firstname,
          lastname: userData2.lastname,
          email: userData2.email,
        },
        {
          headers,
        }
      );
  
      let updateUserStateData = {
        id: userId,
        firstname: userData2.firstname,
        lastname: userData2.lastname,
        email: userData2.email,
      };
  
      toast.success('Success ! Profile has been updated', {
        position: toast.POSITION.TOP_CENTER,
      });
  
      dispatch(setCredentials(updateUserStateData));
      setloading(false);
  
      return response;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(`Your session has expired. Please log in again.`, {
          position: toast.POSITION.TOP_CENTER,
        });
  
        dispatch(tokenExpired());
      }
  
      setloading(false);
    }
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
          colors={["#343a40","#343a40","#343a40", "#343a40","#343a40"]}
        />
      </div>


      <div className={`card  mt-4 ${loading ? 'disable' : ''}`}>
        <div className="card-body">
          <ToastContainer />
          <h5 className="card-title">View/Edit Profile</h5>

          <figure>
            <blockquote className="blockquote">
              <p>View and Update your Profile Data</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className={`row mt-2 ${loading ? 'disable' : ''}`}>
        {/* LETS MAKE THIS 6 */}
        {/* LETS GET THE CONTENT IN CENTER */}

        <div className="col-sm-6 col-xl-6">
          <div className="card mb-3">
            {/* <img
              className="card-img-top"
              src="https://themeon.net/nifty/v3.0.1/assets/img/sample-img/img-4.jpg"
              alt="coffee"
              loading="lazy"
            /> */}
            <div className="position-relative p-4">
              <div className="position-absolute top-0 start-50 translate-middle text-white">
                <img
                  className="img-lg rounded-circle border border-white border-4"
                  src="https://themeon.net/nifty/v3.0.1/assets/img/profile-photos/10.png"
                  alt="task-user"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="h5 btn-link">
                {userdata.firstname} {userdata.lastname}
              </a>
              <p className="text-opacity-75 mb-0">Art Designer</p>
            </div>
            <div className="card-body">
              <p className="text-center">
                Other travelling salesmen live a life of luxury.
              </p>
              {/* LETS REDUCE THE FONT SIZE HERE */}
              <div className="list-group list-group-borderless fs-6">
                <a className="list-group-item list-group-item-action" href="#">
                  <i className="demo-pli-information fs-4 me-2"></i>Email :
                  {userdata.email}
                </a>
                <a className="list-group-item list-group-item-action" href="#">
                  <i className="demo-pli-mine fs-4 me-2"></i> Usage Profile
                </a>
                <a className="list-group-item list-group-item-action" href="#">
                  <i className="demo-pli-credit-card-2 fs-4 me-2"></i> Payment
                  Options
                </a>
                <a className="list-group-item list-group-item-action" href="#">
                  <i className="demo-pli-gear fs-4 me-2"></i> Settings
                </a>
                <a className="list-group-item list-group-item-action" href="#">
                  <i className="demo-pli-mail fs-4 me-2"></i> Messages
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Creating a update profile form here */}
        {/* Lets copy the code from bootstrap 5 */}
        <div className="col-md-6 mb-3">
          {/* Lets creare a card first */}

          <div className="card">
            <div className="card-body">
              {/* Lets include the form here */}

              {/* Lets rectify the form here */}

              {/* Now lets modify the form */}
              <form className="row g-3" onSubmit={formik.handleSubmit}>
                <div className="col-md-6">
                  <label for="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                    placeholder="Enter your first name"
                  />

                  {/* THESE ARE VALIDATATION MESSAGES */}
                  {formik.errors.firstname ? (
                    <div className="invalid_err">{formik.errors.firstname}</div>
                  ) : null}
                </div>

                <div className="col-md-6">
                  <label for="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                    placeholder="Enter your last name"
                  />

                  {/* THESE ARE VALIDATATION MESSAGES */}
                  {formik.errors.lastname ? (
                    <div className="invalid_err">{formik.errors.lastname}</div>
                  ) : null}
                </div>

                <div className="col-md-6">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Enter your email"
                    readOnly
                  />
                  {/* THESE ARE VALIDATATION MESSAGES */}
                  {formik.errors.email ? (
                    <div className="invalid_err">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="col-12">
                  <label for="inputAddress2" className="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>

                <div className="col-md-2">
                  <label for="inputZip" className="form-label">
                    Zip
                  </label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm lmk_btn"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
