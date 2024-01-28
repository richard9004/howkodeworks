import React, { useState, useEffect } from "react";
// NOW LETS INCLUDE THESE VALIDATION IN SIGNUP
// FIRST INSTALL FORMIK AND YUP
import { useFormik } from "formik";
import * as Yup from "yup";
// WE NEED AXIOS TO POST DATA
import axios from "axios";

// LETS SEE HOW TO USE TOSTIFY
// IN REACT JS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";
import { Helmet } from 'react-helmet';


function Signup() {
  // SETTING INTIAL VALUES
  // THIS SHOULD MATCH NAME ATTR
  // OF INPUT FIELD
  const static_meta_title = "Sign Up - LetsMakeItOnline";
  const static_meta_description= "Sign up and create a new account";

  useEffect(() => {
    updateStaticMeta();
}, []);

const updateStaticMeta = async () => {
  try {
      const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/updateStaticMeta`,
          {
            static_meta_title: static_meta_title,
            static_meta_description: static_meta_description,
          }
        );
        
  }catch(err){

  }
}


  const [loading, setloading] = useState(false);
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  };

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

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),

    confirm_password: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      var data = JSON.stringify(values);
      //  WE PASS THIS DATA
      postUserData(data);
      formik.resetForm();
    },
  });

  // LETS SEE HOW TO POST DATA TO
  // LARAVEL API FROM REACT JS
  // POST FORM DATA IN REACT JS
  const postUserData = async (data) => {
    let userData = JSON.parse(data);
    //  PASSING THE DATA TO USERS CONTROLLER
    setloading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/users`,
        {
          firstname: userData.firstname,
          lastname: userData.lastname,
          email: userData.email,
          password: userData.password,
        }
      );

      // LETS USE TOSTIFY WHEN USER
      // SIGNSUP

      // LETS MODIFY AND PLAY WITH TOSTIFY
      // REALTIME EXAMPLES
      toast.success("Success ! Your Account Has been Created", {
        position: toast.POSITION.TOP_CENTER,
      });
      setloading(false);

      return response;
    } catch (error) {
      // IF ANY ERROR LETS DISPLAY ERROR AT BOTTOM
      // LETS PRINT THE ERROR MESSAGE\
      // FROM THE SERVER
      console.log(error.response);
      toast.error(`Error ${error.response.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      setloading(false);
      console.log(error);
    }
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
          colors={["#343a40","#343a40","#343a40", "#343a40","#343a40"]}
        />
      </div>

      <div className={`row mt-4 d-flex ${loading ? 'disable' : ''}`}>
     

     <div className="text-center">
       <h1>Welcome to Our Community!</h1>
       <p>
         Unlock a world of features and tools by creating your free account.
       </p>
     </div>

     <div className="col-md-6">
       <h2>Empowering Efficiency and Productivity</h2>
       <p>
         Elevate your productivity with LetsMakeItOnline's suite of powerful
         online tools. From seamless project management and collaborative
         workspaces to intuitive design and robust data analysis, our platform
         empowers you to accomplish more. With the flexibility to work from
         anywhere, you'll experience a new level of efficiency in your
         projects. Our user-friendly interfaces ensure that users of all
         backgrounds can leverage the full potential of our tools, making every
         task a breeze.
       </p>

       <p>
         Learn and grow with our comprehensive tutorials. LetsMakeItOnline
         provides a diverse range of tutorials tailored to your interests and
         expertise levels. Whether you're a beginner seeking to master the
         basics or an experienced user looking to refine your skills, our
         tutorials offer step-by-step guidance. With clear instructions and
         interactive content, you'll gain the knowledge and confidence to excel
         in your endeavors.
       </p>
     </div>
     <div className="col-md-6">
       {/* USE THIS SO MESSAGE IS SHOWN/ ALERT IS SHOWN */}
       <ToastContainer autoClose={2000} />
       <div className="card">
          <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
         <div className="mb-3">
           <label htmlFor="firstname" className="form-label">
             First Name
           </label>
           <input
             type="text"
             className="form-control"
             id="firstname"
             name="firstname"
             onChange={formik.handleChange}
             value={formik.values.firstname}
             placeholder="Enter your first name"
           />
           {/* THESE ARE VALIDATATION MESSAGES */}
           {formik.errors.firstname ? (
             <div className="invalid_err">{formik.errors.firstname}</div>
           ) : null}
         </div>
         <div className="mb-3">
           <label htmlFor="lastname" className="form-label">
             Last Name
           </label>
           <input
             type="text"
             className="form-control"
             id="lastname"
             name="lastname"
             onChange={formik.handleChange}
             value={formik.values.lastname}
             placeholder="Enter your last name"
           />

           {/* THESE ARE VALIDATATION MESSAGES */}
           {formik.errors.lastname ? (
             <div className="invalid_err">{formik.errors.lastname}</div>
           ) : null}
         </div>
         <div className="mb-3">
           <label htmlFor="exampleInputEmail1" className="form-label">
             Email address
           </label>
           <input
             type="email"
             name="email"
             className="form-control"
             id="exampleInputEmail1"
             aria-describedby="emailHelp"
             onChange={formik.handleChange}
             value={formik.values.email}
             placeholder="Enter your email"
           />
           {/* THESE ARE VALIDATATION MESSAGES */}
           {formik.errors.email ? (
             <div className="invalid_err">{formik.errors.email}</div>
           ) : null}

           <div id="emailHelp" className="form-text">
             We'll never share your email with anyone else.
           </div>
         </div>
         <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">
             Password
           </label>
           <input
             type="password"
             className="form-control"
             id="exampleInputPassword1"
             name="password"
             onChange={formik.handleChange}
             value={formik.values.password}
             placeholder="Enter your password"
           />

           {/* THESE ARE VALIDATATION MESSAGES */}
           {formik.errors.password ? (
             <div className="invalid_err">{formik.errors.password}</div>
           ) : null}
         </div>
         <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">
             Confirm Password
           </label>
           <input
             type="password"
             className="form-control"
             id="confirmpassword"
             name="confirm_password"
             onChange={formik.handleChange}
             value={formik.values.confirm_password}
             placeholder="Enter your confirm password"
           />

           {/* THESE ARE VALIDATATION MESSAGES */}
           {formik.errors.confirm_password ? (
             <div className="invalid_err">
               {formik.errors.confirm_password}
             </div>
           ) : null}
         </div>
         <button type="submit" className="btn btn-primary lmk_btn">
           Create Account
         </button>
       </form>
          </div>
       </div>
       
     </div>
   </div>
    </>
   
  );
}

export default Signup;
