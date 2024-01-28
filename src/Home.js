import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";


function Home(){
    const static_meta_title = "Home - LetsMakeItOnline";
    const static_meta_description= "Welcome to the homepage of LetsMakeItOnline";
    const [loading, setloading] = useState(false);
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
                  static_page: 'https://www.letsmakeitonline.com/'
                }
              );
              
        }catch(err){

        }
    }

    return(
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


        <div className="container mt-5">
            
            <div className="row mb-4">
                <div className="col-md-6">
                    <img src="/home_image_2.jpeg" alt="Left Image" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <div className="dummy-content">
                    <h1>Learn Programming with Tutorials, Code Snippets, and Interview Questions</h1>
                    <p>LetsMakeItOnline is a comprehensive resource for learning programming, with tutorials, code snippets, and interview questions on various programming languages.</p>

<p>Whether you are a beginner or a seasoned programmer, we have something for everyone. Our tutorials cover a wide range of topics, from basic programming concepts to advanced algorithms and machine learning. Our code snippets provide a great way to learn new programming techniques and best practices. And our interview questions can help you prepare for your next programming job interview.</p>

<p>At LetsMakeItOnline, we believe that everyone has the potential to learn to code. That's why we make our resources accessible and affordable for everyone. We also have a strong commitment to community, and we encourage our users to help and support each other on their programming journey.</p>

<p>So if you're ready to start learning to code, or if you're looking for a resource to help you advance your programming skills, come join us at LetsMakeItOnline!</p>

<Link className="home-page-btns" to="/categories">
<i className="fa fa-angle-double-right"></i> Discover Categories
</Link>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="text-content">
                    <h1>Making Your Life Easier with Online Tools </h1>
                    <p>Welcome to LetsMakeItOnline, your one-stop shop for online tools that can make your life easier. Whether you are looking for tools to help you with your work, your personal life, or your education, we have you covered.</p>

<p>Our online tools are designed to be easy to use and affordable. We offer a wide range of tools, including:</p>

<ul>
  <li>Productivity tools</li>
  <li>Collaboration tools</li>
  <li>Creative tools</li>
  <li>Educational tools</li>
</ul>

<p>We are constantly adding new tools to our library, so be sure to check back often.</p>
<p>Here are just a few examples of how you can use our online tools to make your life easier:</p>

<ul>
  <li>Use our productivity tools to stay on top of your work and to-do list.</li>
  <li>Use our communication tools to stay in touch with friends, family, and colleagues.</li>
  <li>Use our collaboration tools to work on projects with others from anywhere in the world.</li>
  
  <li>Use our educational tools to learn new skills or to brush up on old ones.</li>
</ul>

<p>No matter what your needs are, we have an online tool that can help you. So start exploring today and see how LetsMakeItOnline can make your life easier!</p>

<Link className="home-page-btns" to="/explore">
<i className="fa fa-angle-double-right"></i> Get Started
</Link>                 
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="/home_image_5.jpg" alt="Right Image" className="img-fluid" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
