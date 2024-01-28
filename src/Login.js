import React, {useState, useEffect}from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCredentials, logout, setToken } from "./store/userSlice";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// LETS SEE HOW TO USE TOSTIFY
// IN REACT JS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";

// SIMILAR TO SIGN UP WILL MAKE A LOGIN FORM
// AND A LOGIN ROUTE
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const static_meta_title = "Login - LetsMakeItOnline";
  const static_meta_description= "Welcome back to Login, Login with your account to create pages and more";

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

  const initialValues = {
    email: '',
    password: '',
 }

 const validationSchema = Yup.object({
  email: Yup.string()
           .required('Email is required')
           .email('Invalid email format')
           .max(50, 'Email must be at most 50 characters'),
  password: Yup.string()
            .required('Password is required'),
});

 const formik = useFormik({
  initialValues: initialValues,
  validationSchema: validationSchema,
  onSubmit: values => {
   let data = JSON.stringify(values, null, 2);
   authenticate(data);
  },
});


const authenticate = async (data) => {
  let loginData = JSON.parse(data);
  setloading(true);

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/login`,
      {
        email: loginData.email,
        password: loginData.password,
      }
    );
 
    if (response.status === 200) {
      // Dispatch an action to the store with the user data as the payload
      setloading(false);
      dispatch(setCredentials(response.data.user));
      dispatch(setToken(response.data.token));
      

     
        navigate('/');
    
    } else { 
      // Login failed
    }

    return response;
  } catch (error) {
    toast.error("Login Failed", {
      position: toast.POSITION.TOP_CENTER,
    });
      setloading(false);
      
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
      <ToastContainer autoClose={2000} />
      <div className={`row mt-4 d-flex ${loading ? 'disable' : ''}`}>
      <div className="text-center">
        <h1>Welcome Back!</h1>
        <p>Sign in to access a wide array of features and tools tailored just for you.</p>
      </div>
     
       <div className="col-md-8">
        <h2>Empowering Efficiency and Productivity</h2>
      <p>Elevate your productivity with LetsMakeItOnline's suite of powerful online tools. From seamless project management and collaborative workspaces to intuitive design and robust data analysis, our platform empowers you to accomplish more. With the flexibility to work from anywhere, you'll experience a new level of efficiency in your projects. Our user-friendly interfaces ensure that users of all backgrounds can leverage the full potential of our tools, making every task a breeze.</p>
     
      <p>Learn and grow with our comprehensive tutorials. LetsMakeItOnline provides a diverse range of tutorials tailored to your interests and expertise levels. Whether you're a beginner seeking to master the basics or an experienced user looking to refine your skills, our tutorials offer step-by-step guidance. With clear instructions and interactive content, you'll gain the knowledge and confidence to excel in your endeavors.</p>
     
      </div>
      <div className="col-md-4">
      <div className="card">
          <div className="card-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"
             onChange={formik.handleChange}
             value={formik.values.email}
             placeholder="Enter your email"
            />

           {formik.errors.email ? 
           <div className="invalid_err">{formik.errors.email}</div> : null}     
           
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="password"
             onChange={formik.handleChange}
             value={formik.values.password}
             placeholder="Enter your password"
            />
            
           {formik.errors.password ? 
           <div className="invalid_err">{formik.errors.password}</div> : null}     
          </div>

          
        
          <button onClick={formik.handleSubmit} type="submit" className="btn btn-primary lmk_btn">Sign In</button>
        </form>
        </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Login;
