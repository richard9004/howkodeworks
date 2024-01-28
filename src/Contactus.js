// LETS CREATE CONTACT US JUST LIKE SIGNUP PAGE

import React from "react";
// NOW LETS INCLUDE THESE VALIDATION IN SIGNUP
// FIRST INSTALL FORMIK AND YUP
import { useFormik } from 'formik'
import * as Yup from 'yup'
// WE NEED AXIOS TO POST DATA
import axios from "axios";


function Conatctus() {

  
// THESE ARE THE 3 INPUTS
// THAT WE WOULD VALIDATE
  const initialValues = {
    name:'',
    email: '',
    message: '',
 }

//  I AM USING YUP AND FORMIK
 const validationSchema = Yup.object({
    name: Yup.string()
    .required('Name is required')
    .max(50, 'Name must be at most 50 characters'),


  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format')
    .max(50, 'Email must be at most 50 characters'),

    message: Yup.string()
    .required('message is required'),
  
});

// WE WILL GET DATA FROM CONTACT FORM
const formik = useFormik({
  initialValues: initialValues,
  validationSchema: validationSchema,
  onSubmit: values => {
   alert(JSON.stringify(values, null, 2));
   var data = JSON.stringify(values);
   
  //  WE PASS THIS DATA
  postContactData(data);
   formik.resetForm();
  },
});

// HOW TO SUBMIT CONTACT FORM DATA TO API

const postContactData =  async (data)=>{
   let contactData = JSON.parse(data);
  //  PASSING THE DATA TO USERS CONTROLLER
   try {
    const response = await axios.post('https://apidev.letsmakeitonline.com/api/contactformdata', {
       email:contactData.email,
       name:contactData.name,
       message:contactData.message,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}







  return (
    <div className="row mt-4 d-flex">
      <div className="text-center">
      <h1>Contact Us</h1>
      <p>Have a question or feedback? Reach out to us using the form below.</p>
      </div>
     
       <div className="col-md-4">
       <h2>Our Contact Information</h2>
    <p>Feel free to contact us using the information provided below:</p>
    <p>Email: contact@example.com</p>
    <p>Phone: (123) 456-7890</p>
    <p>Address: 123 Main Street, Cityville, State, 12345</p>
      </div>
      <div className="col-md-8">
      <div className="card">
        <div className="card-body">
        <form  onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" name="name"
             onChange={formik.handleChange}
             value={formik.values.name}
             placeholder="Enter your name"
            />
            {/* THESE ARE VALIDATATION MESSAGES */}
            {formik.errors.name ? 
           <div className="invalid_err">{formik.errors.name}</div> : null}     

          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Email</label>
            <input type="email" className="form-control" id="email"  name="email" 
             onChange={formik.handleChange}
             value={formik.values.email}
             placeholder="Enter your email"
            />

            {/* THESE ARE VALIDATATION MESSAGES */}
            {formik.errors.email ? 
            <div className="invalid_err">{formik.errors.email}</div> : null}     
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleInputPassword1" name="message" 
             onChange={formik.handleChange}
             value={formik.values.message}
             placeholder="Message"
            ></textarea>

            {/* THESE ARE VALIDATATION MESSAGES */}
            {formik.errors.message ? 
            <div className="invalid_err">{formik.errors.message}</div> : null}     
          </div>
         
          <button type="submit" className="btn btn-primary lmk_btn">Send Message</button>
        </form>
        </div>
      </div>
        
      </div>
    </div>
  );
}

export default Conatctus;
