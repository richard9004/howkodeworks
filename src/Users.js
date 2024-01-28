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
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";
import Paginate from "react-paginate";
import "./styles/pagination.css";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";



// LETS SEE HOW TO USE TOSTIFY
// IN REACT JS

function Users() {
  const [loading, setloading] = useState(false);
  let userdata = useSelector((state) => state.user);
  const validToken = userdata.token;
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

  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [usersPerPage, setUsersPerPage] = useState();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);

  const [tempUserData, setTempUserData] = useState([]);


  useEffect(() => {
    getUsers();
  }, [searchLastname, , searchFirstname, searchEmail]);

  const getUsers = async (pageNo = 1) => {
    setloading(true);
    const token = validToken;
    // Add the token to the Authorization header.
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const search = {
      firstname: searchFirstname,
      lastname: searchLastname,
      email: searchEmail,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/getUsers?page=${pageNo}`,
        {
          headers,
          params: search,
        }
      );
      setloading(false);
      setUsersBackend(response.data.data.data);
      setUsersPerPage(response.data.data.per_page);
      setTotalPages(response.data.data.last_page);

      //return response;
    } catch (error) {
      if (error.response.status === 401) {
      }

      setloading(false);
    }
  };

  const paginatedUsers = usersBackend;

  const handlePageChange = (page) => {
    let pageNo = page.selected + 1;
    getUsers(pageNo);
    setCurrentPage(page);
  };

  const handleEdit = (userData) => {
    // Set the isEditModalOpen state variable to true.
    setTempUserData(userData);
    setIsEditModalOpen(true);
  };

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

  const handleDelete = () => {};

  const handleSearch = () => {
    // Fetch the users with the selected filters.
    // ...
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
          colors={["#343a40", "#343a40", "#343a40", "#343a40", "#343a40"]}
        />
      </div>

      <div className={`card mt-4 ${loading ? "disable" : ""}`}>
        <div className="card-body">
          <ToastContainer />
          <h5 className="card-title">User Management</h5>

          <div className="row g-3">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by First Name"
                value={searchFirstname}
                onChange={(e) => setSearchFirstname(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Last Name"
                value={searchLastname}
                onChange={(e) => setSearchLastname(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Email"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={searchStatus}
                onChange={(e) => setSearchStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <table
            className={`table table-bordered mt-2 ${loading ? "disable" : ""}`}
          >
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((items) => (
                <tr key={items.id}>
                  <td>{items.firstname}</td>
                  <td>{items.lastname}</td>
                  <td>{items.email}</td>
                  <td>
                    <span className="badge bg-success">Success</span>
                  </td>
                  <td>
                    <div className="d-flex">
                      <button
                        type="button"
                        className="btn btn-sm btn-primary me-2 outline-blue-button"
                        onClick={() => handleEdit(items)}
                      >
                        <i className="fa fa-edit" aria-hidden="true"></i>
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary me-2 outline-blue-button"
                        onClick={() => handleView(items)}
                      >
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger outline-blue-button"
                        onClick={() => handleDelete(items.id)}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mt-2">
        <Paginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageChange}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="< previous"
          marginPagesDisplayed={2}
          containerClassName="pagination"
          activeClassName="active"
          previousClassName="page-item"
          nextClassName="page-item"
          pageClassName="page-item"
          breakClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          breakLinkClassName="page-link"
        />
      </div>

 
      {Object.keys(tempUserData).length > 0 && (
        <ViewUser isOpen={isViewModalOpen} onClose={onCloseViewModal} userData={tempUserData} />
       
      )}

{Object.keys(tempUserData).length > 0 && (
       <EditUser isOpen={isEditModalOpen} onClose={onCloseEditModal} userData={tempUserData} />
       
      )}


      
    </>
  );
}

export default Users;
