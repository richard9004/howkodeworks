import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Outlet, } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Shorts from "./Shorts";
import Signup from "./Signup";
import Login from "./Login";
import Conatctus from "./Contactus";
import { Provider } from "react-redux";
import store from "./store/store";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Users from "./Users";
import { Fragment } from "react";
import GuestRoute from "./GuestRoute";
import Pages from "./Pages";
import Categories from "./Categories";
import CreatePage from "./CreatePage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// NOW LETS CREATE HOME AND ABOUT
//LETS INCLUDE THOSE

// HOW TO DEPLOY REACT APPLICATION ON SERVER
// LETS DO IT
// LETS DEPLOY

import Home from "./Home";
import About from "./About";
import OnlineTutorials from "./OnlineTools";
import Tutorials from "./Tutorials";
import { useSelector } from "react-redux";
import SubCategories from "./SubCategories";
import EditPage from "./EditPage";
import CategoryListing from "./CategoryListing";
import SubCategoryListing from "./SubCategoryListing";
import CategoryComponent from "./CategoryComponent";
import axios from "axios";
import FrontendPage from "./FrontendPage";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfUse from "./TermsToUse";
import WebDevelopment from "./WebDevelopment";
import ComingSoon from "./ComingSoon";
import PageNotFound from './PageNotFound';
import PopularPosts from "./PopularPosts";

function App() {

 


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <DndProvider backend={HTML5Backend}>
          <div className="container">
            <Fragment>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/online-tutorials" element={<OnlineTutorials />} />
                <Route path="/tutorials" element={<Tutorials />} />
                <Route path="/shorts" element={<Shorts />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-use" element={<TermsOfUse/>} />
                <Route path="/web-development" element={<WebDevelopment/>} />
                <Route path="/coming-soon" element={<ComingSoon/>} />
                <Route path="*" element={<PageNotFound />} />

                {/* <Route path='/categories/:slug' element={<CategoryListing/>}/> */}
                <Route path="/categories">
                  <Route index element={<CategoryComponent />} />
                  <Route path=":slug" element={<CategoryListing />} />
                  <Route path=":slug/:slug2" element={<SubCategoryListing />} />
                  <Route path=":slug/:slug2/:slug3" element={<FrontendPage />} />
                </Route>
                {/* <Route path='/subcategories/:slug' element={<SubCategoryListing/>}/> */}
                <Route exact path="/" element={<GuestRoute />}>
                  <Route path="/sign-up" element={<Signup />} />
                  <Route path="/sign-in" element={<Login />} />
                </Route>

                <Route path="/contact-us" element={<Conatctus />} />

                <Route exact path="/" element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/pages" element={<Pages />} />
                  <Route path="/popular-posts/:page_id" element={<PopularPosts />} />
                  
                  <Route path="/manage-categories" element={<Categories />} />
                  <Route
                    path="/manage-subcategories"
                    element={<SubCategories />}
                  />
                  <Route path="/create-new-page" element={<CreatePage />} />
                  <Route path="/edit-page/:id" element={<EditPage />} />
                </Route>
              </Routes>
            </Fragment>
          </div>
        </DndProvider>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// LETS INSTALL REACT ROUTER AND CREATE A STRUCTURE FOR THE
// REACT PROJECT
