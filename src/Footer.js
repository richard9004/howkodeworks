import React, {useEffect} from "react";
import {  useLocation, Link } from 'react-router-dom';


function Footer() {
  const { pathname } = useLocation();


useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);


  return (
    <div className="container-fluid footer-bg mt-4">
      <footer className="py-5 container">
        <div className="row">
          <div className="col-3">
            <h5 className="footer_section_titles ">Categories</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_links">JavaScript</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_links">ReactJS</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_links">PHP</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_links">Interview Questions</a></li>
              <li className="nav-item mb-2"><Link to="/coming-soon" className="nav-link p-0 footer_links"><strong>More</strong> <i className="fa fa-angle-double-right"></i></Link></li>
            </ul>
          </div>

          <div className="col-3">
            <h5 className="footer_section_titles">Tools</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/coming-soon" className="nav-link p-0 footer_links">Online Tools</Link></li>
              <li className="nav-item mb-2"><Link to="/coming-soon" className="nav-link p-0 footer_links">Tech Tools</Link></li>
              <li className="nav-item mb-2"><Link to="/coming-soon" className="nav-link p-0 footer_links"><strong>More</strong> <i className="fa fa-angle-double-right"></i></Link></li>
            </ul>
          </div>

          <div className="col-3">
            <h5 className="footer_section_titles">Services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/web-development" className="nav-link p-0 footer_links">Web Development</Link></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_links">Freelancing Work</a></li>
            </ul>
          </div>

          <div className="col-3">
            <h5 className="footer_section_titles">Terms</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/privacy-policy" className="nav-link p-0 footer_links">Privacy Policy</Link></li>

              <li className="nav-item mb-2"><Link to="/terms-of-use" className="nav-link p-0 footer_links">Terms of Service</Link></li>
            </ul>
           
          </div>
        </div>
        <div className="container p-4 pb-0 text-center">
      <section className="mb-4">
        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#3b5998" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#55acee" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter"></i>
        </a>

        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#dd4b39" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-google"></i>
        </a>

        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#ac2bac" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#0082ca" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#333333" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-github"></i>
        </a>
      </section>
    </div>
        <div className=" py-4 my-4 border-top ">
          <p className="link_styles text-center">© 2023 LetsMakeItOnline. All rights reserved.</p>
         
        </div>
      </footer>
    </div>
  );
}

export default Footer;
