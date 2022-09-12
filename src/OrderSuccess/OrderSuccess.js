// import favicon from '/images/favicon.png';
//import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import { useLoadingWithRefresh } from "../hooks/useLoadingWithRefresh";
import "./order_success.css";
import { saveContactData } from "../http/apis";
import CustomFooter from "../components/customfooter";
import NavigationBar from "../components/navigationbar";
import PageHeadder from "../components/PageHeadder";
const OrderSuccess = () => {
    const { loading } = useLoadingWithRefresh();

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    });

    const submitContactForm = async (e) => {
        try {
            e.preventDefault();
            await saveContactData(contactData);

            setContactData({
                name: "",
                phone: "",
                message: "",
                email: "",
            });
        } catch (err) {
            console.log(err);
        }
    };
    return loading ? (
        <Loader />
    ) : (
        <div>
            {/* <div className="preloader" id="loading">
        <div className="preloader-body">
          <div id="loading-center-object">
            <div className="object" id="object_four" />
            <div className="object" id="object_three" />
            <div className="object" id="object_two" />
            <div className="object" id="object_one" />
          </div>
        </div>
      </div> */}

            <div className="page">
                {/* Page Header*/}
                <section className="section page-header-1 header-section">
                    <NavigationBar />
                    {/* <PageHeadder quote="Contact Us" showYouAre={false} /> */}
                </section>
                
                
                {/* Get in Touch*/}
                <div className="body">
                <div class="card">
        <div style={{borderRadius:"200px",height:"200px", width:"200px",background: "#F8FAF5",margin:"0 auto"}}>
            <i class="checkmark">✓</i>
        </div>
        <h1 className="success_title">Success</h1> 
        <p className="success_content">Hurray, Order Placed Successfully ! <br/> It will be delivered at your doorstep shortly.</p>
      </div>
      </div>
                <CustomFooter />
            </div>
            <div className="snackbars" id="form-output-global" />
        </div>
    );
};

export default OrderSuccess;
