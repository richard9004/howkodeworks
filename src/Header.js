import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/style.css";
import { setCredentials, logout, setToken } from "./store/userSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import CategoryPopup from "./CategoryPopup";

function Header() {
  const [userName, setUserName] = useState("");
  const [validToken, setValidToken] = useState("");
  const loggedInData = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [frontendCategories, setFrontendCategories] = useState([]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const handleClickOutside = (event) => {
    if (!event.target.classList.contains("togglePopup")) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (loggedInData.userInfo) {
      let name = `${loggedInData.userInfo.firstname} ${loggedInData.userInfo.lastname}`;
      setUserName(name);
      setValidToken(loggedInData.token);
     
    }
    frontendGetCategories();

    // Add click event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [loggedInData]);

  const frontendGetCategories = async () => {
    setloading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/frontendGetCategories`
      );
      setloading(false);
      setFrontendCategories(response.data.data);
      console.log("Frontend");
      console.log(frontendCategories);
    } catch (error) {
      if (error.response.status === 401) {
      }

      setloading(false);
    }
  };

  const logoutAction = async () => {
    setloading(true);
    try {
      // Get the token from local storage.
      let token = validToken;

      // Add the token to the Authorization header.
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/logout`,
        {},
        {
          headers,
        }
      );

      if (response.status === 200) {
        // Dispatch an action to the store with the user data as the payload
        setloading(false);
        dispatch(logout());
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
      {/* <div
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
      </div> */}
     
      <nav
        className={`navbar navbar-expand-lg footer-bg 
        `}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/logo.png"
              alt="Logo"
              className="d-inline-block align-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="header_links nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
              <Link className="header_links nav-link" to="/tutorials">Tutorials</Link>
            </li> */}
              <li className="nav-item">
                <Link className="header_links nav-link" to="/coming-soon">
                  Tools
                </Link>
              </li>
              <li className="nav-item">
                <Link className="header_links nav-link" to="/shorts">
                  Shorts
                </Link>
              </li>
              {/* <li className="nav-item">
              <Link className="header_links nav-link" to="/contact-us">Contact</Link>
            </li> */}

              <li className="nav-item dropdown custom-nav-item">
                <button
                  onClick={togglePopup}
                  className="header_links nav-link dropdown-toggle custom-header-link custom-nav-link dropdown-toggle togglePopup"
                 
                >
                  Categories
                </button>

                <ul
                  className="dropdown-menu bg-dark custom-dropdown-menu"
                  aria-labelledby="categoryDropdown"
                ></ul>
              </li>

              {loggedInData.userInfo ? (
                <>
                  <li className="nav-item">
                    <Link className="header_links nav-link" to="/users">
                      Users
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="header_links nav-link" to="/pages">
                      Pages
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle header_links"
                      href="#"
                      id="categoriesDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Manage
                    </a>
                    <ul
                      className="drop-styles dropdown-menu dm dropdown-menu-end"
                      aria-labelledby="categoriesDropdown"
                    >
                      <li>
                        <Link
                          className="drop-item-styles dropdown-item di"
                          to="/manage-categories"
                        >
                          Manage Categories
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="drop-item-styles dropdown-item di"
                          to="/manage-subcategories"
                        >
                          Manage Sub Categories
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle header_links"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {userName}
                    </a>

                    <ul
                      className="drop-styles dropdown-menu prof-drop"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          className="drop-item-styles dropdown-item"
                          to="/profile"
                        >
                          <i class="fas fa-user-edit"></i> Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="drop-item-styles dropdown-item"
                          onClick={() => logoutAction()}
                        >
                          <i class="fa fa-sign-out"></i> Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="header_links nav-link" to="/sign-up">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="header_links nav-link" to="/sign-in">
                      Sign In
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
     

      <CategoryPopup
        showPopup={showPopup}
        togglePopup={togglePopup}
        frontendCategories={frontendCategories}
      />
    </>
  );
}

export default Header;
