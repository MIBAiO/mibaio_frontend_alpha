// import { displayRazorpay } from "./helpers/paymentHelper";
import axios from "axios";
import temp from "./helpers/temp.svg";
import { useSelector } from "react-redux";
//import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hamburger from 'hamburger-react'
import React, { useState } from "react";
import styled from "styled-components";

const Checkout = () => {

  const {model1_qty, model1_price} = useSelector((state) => state.cart);
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const displayRazorpay = async (e) => {
    //   e.preventDefaults();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axios.post("http://localhost:5500/payment/orders");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    console.log(result.data);

    const options = {
      key: "rzp_test_Fw6XKjiJcW8be2", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "MIBAIO.",
      description: "Test Transaction",
      order_id: order_id,
      image: { temp },
      handler: async function (response) {
        console.log(response);
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:5500/payment/success",
          data
        );
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    console.log(paymentObject);
    paymentObject.open();
  };

  return (
    <>
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
          {/* FScreen*/}
          <section className="section page-header-3 header-section header-offset">
            {/* RD Navbar*/}
            <Navbar collapseOnSelect expand="lg" className='rd-navbar-nav-wrap toggle-original-elements active color-nav ' variant="dark" >
              <Container >
                <Navbar.Brand href="#home" className='order-md-0 mx-auto order-1'>
                  <img  className=" brand-logo-dark" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="order-md-1 order-0" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto nav-font nav-menu" style={{marginLeft: '20%'}}>
                    <Nav.Link ><Link className="rd-nav-link nav-font" to="/">Home</Link></Nav.Link>
                    <Nav.Link ><Link className="rd-nav-link nav-font" to="/about_us"><FontAwesomeIcon icon="fa-solid fa-id-card" />About Us</Link></Nav.Link>
                    <Nav.Link ><Link className="rd-nav-link nav-font" to="/careers">Careers</Link></Nav.Link>
                    <NavDropdown title="Account" id="collasible-nav-dropdown" className="rd-nav-link nav-font">
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">View Dashboard</Link></NavDropdown.Item>
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">Log Out</Link></NavDropdown.Item>

                    </NavDropdown>
                    <Nav.Link ><Link className="rd-nav-link nav-font" to="/contact_us">Contact Us</Link></Nav.Link>
                  </Nav>
                  <Nav className="me-auto nav-font" >
                    <NavDropdown title="More" id="collasible-nav-dropdown">
                      <NavDropdown.Item ><Link className="rd-nav-link " to="/">View Dashboard</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/">Log Out</Link></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">Privacy Policy</Link></NavDropdown.Item>
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/our_team">Our Team</Link></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/login">Login</Link></NavDropdown.Item>
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/register">Register</Link></NavDropdown.Item>

                    </NavDropdown>
                  </Nav>

                </Navbar.Collapse>
                <Nav >
                  <div className="rd-navbar-element rd-navbar-element_centered">
                    <div className="group-xs" style={{marginRight:'15px'}}>
                      <Link className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon" id="cart-size-1" to="/cart"><span className="add-xs" id="cart-no">
                        0
                      </span></Link>
                    </div>

                  </div>
                </Nav>
                <Nav>
                  <div className="rd-navbar-element rd-navbar-element_right">
                    <div id="google_translate_element" >

                    </div>
                    <ul className="list-localization">
                      <li>
                        <a className="icon icon-sm link-social-2 mdi mdi-cart-outline mr-2" id="cart-size" href="#"><span className="add-xs" id="cart-no">
                          0
                        </span></a>
                      </li>
                      <li>
                        <label>
                          <input id="Marathi" name="localization" defaultValue="Marathi" type="radio" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text"><span className="notranslate">मराठी</span></span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input id="English" name="localization" defaultValue="English" type="radio" defaultChecked="checked" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text">English</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input id="Hindi" name="localization" defaultValue="Hindi" type="radio" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text"><span className="notranslate">हिंदी</span></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </Nav>
              </Container>
            </Navbar>

            {/* <div className="rd-navbar-wrap">
              <nav
                className="rd-navbar rd-navbar-classic"
                data-layout="rd-navbar-fixed"
                data-sm-layout="rd-navbar-fixed"
                data-md-layout="rd-navbar-fixed"
                data-md-device-layout="rd-navbar-fixed"
                data-lg-layout="rd-navbar-fixed"
                data-lg-device-layout="rd-navbar-fixed"
                data-xl-layout="rd-navbar-static"
                data-xl-device-layout="rd-navbar-static"
                data-xxl-layout="rd-navbar-static"
                data-xxl-device-layout="rd-navbar-static"
                data-lg-stick-up-offset="0px"
                data-xl-stick-up-offset="0px"
                data-xxl-stick-up-offset="0px"
                data-lg-stick-up="true"
                data-xl-stick-up="true"
                data-xxl-stick-up="true"
              >
                <div className="rd-navbar-main">
                
                  <div className="rd-navbar-panel">
                   
                    <button
                      className="rd-navbar-toggle"
                      data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                    >
                      <span />
                    </button>
                    
                    <div className="rd-navbar-brand">
                      <a className="brand" href="index.html">
                        <img
                          className="brand-logo-dark"
                          src="images/logo-default-96x32.png"
                          alt=""
                          width={96}
                          height={32}
                          srcSet="images/logo-default-96x32.png 2x"
                        />
                        <img
                          className="brand-logo-light"
                          src="images/logo-default-96x32.png"
                          alt=""
                          width={96}
                          height={32}
                          srcSet="images/logo-default-96x32.png 2x"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="rd-navbar-nav-wrap">
                    <a href="index.html">
                      <p className="rd-navbar-slogan rd-navbar-slogan-2 text-white-50 wow clipInLeft">
                        Cool IoT Company
                      </p>
                    </a>
                  
                    <ul className="rd-navbar-nav ">
                      <li className="rd-nav-item active">
                        <a
                          className="rd-nav-link"
                          href="index.html"
                          id="home-tab"
                        >
                          <i className="fa fa-fw fa-home" id="icon-view-home" />
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about-us.html">
                          <i
                            className="fa fa-fw fa-drivers-license-o mr-3 ml-3"
                            id="icon-view"
                          />
                          About Us
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="careers.html">
                          <i
                            className="fa fa-fw fa-graduation-cap mr-3"
                            id="icon-view"
                          />
                          Careers
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#">
                          <i
                            className="fa fa-fw fa-user-circle-o mr-3"
                            id="icon-view"
                          />
                          Account
                        </a>
                        
                        <div className="rd-menu rd-navbar-megamenu">
                          <ul className="rd-navbar-megamenu-inner">
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="our-team.html"
                                  >
                                    View Dashboard
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a className="rd-megamenu-list-link" href="#">
                                    Logout
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contact-us.html">
                          <i
                            className="fa fa-fw fa-phone mr-3 ml-4"
                            id="icon-view"
                          />
                          Contact Us
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        
                        <a
                          className="rd-nav-link more-navbar"
                          href="#"
                          id="more-tab"
                        >
                          <i
                            className="fa fa-fw fa-server"
                            id="icon-view-more"
                          />
                          More
                        </a>
                       
                        <div className="rd-menu rd-navbar-megamenu">
                          <ul className="rd-navbar-megamenu-inner">
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="our-team.html"
                                  >
                                    Our Team
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a className="rd-megamenu-list-link" href="#">
                                    FAQ
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a className="rd-megamenu-list-link" href="#">
                                    Privacy policy
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="our-team.html"
                                  >
                                    Our Team
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="login.php"
                                  >
                                    Login
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="register.php"
                                  >
                                    Register
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <hr style={{ height: "2px" }} />
                    </ul>
                    
                    <div className="rd-navbar-element rd-navbar-element_centered">
                      <div className="group-xs">
                        <a
                          className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon"
                          id="cart-size-1"
                          href="#"
                        >
                          <span className="add-xs" id="cart-no"></span>
                        </a>
                      </div>
                      <div>
                        <a
                          className="icon icon-sm link-social-2 mdi mdi-facebook"
                          href="#"
                          id="handle-view"
                        />
                        <a
                          className="icon icon-sm link-social-2 mdi mdi-twitter"
                          href="#"
                          id="handle-view"
                        />
                        <a
                          className="icon icon-sm link-social-2 mdi mdi-instagram"
                          href="#"
                          id="handle-view"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rd-navbar-element rd-navbar-element_right">
                    <div
                      id="google_translate_element"
                      style={{ display: "none" }}
                    />
                    <ul className="list-localization">
                      <li>
                       <a
                          className="icon icon-sm link-social-2 mdi mdi-cart-outline mr-2"
                          id="cart-size"
                          href="#"
                        >
                          <span className="add-xs" id="cart-no"></span>
                        </a>
                      </li>
                      <li>
                        <label>
                          <input
                            id="Marathi"
                            name="localization"
                            defaultValue="Marathi"
                            type="radio"
                            autoComplete="Off"
                          />
                          <span className="label-text">
                            <span className="notranslate">मराठी</span>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            id="English"
                            name="localization"
                            defaultValue="English"
                            type="radio"
                            defaultChecked="checked"
                            autoComplete="Off"
                          />
                          <span className="label-text">English</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            id="Hindi"
                            name="localization"
                            defaultValue="Hindi"
                            type="radio"
                            autoComplete="Off"
                          />
                          <span className="label-text">
                            <span className="notranslate">हिंदी</span>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="rd-navbar-dummy" />
                </div>
              </nav>
            </div> */}
            {/* Box Custom 4*/}
            <div id="belownavbar" className="box-custom-4 bg-default">
              <div className="box-custom-4-aside bg-accent">
                <div className="box-custom-4-aside-decoration">
                  <div className="box-custom-4-aside-decoration-bg wow clipInLeft" />
                  <div className="box-custom-4-icon-outer">
                    <span className="box-custom-4-icon" />
                  </div>
                </div>
                <lottie-player
                  className="lottie-animate"
                  src="https://assets5.lottiefiles.com/private_files/lf30_wai6psec.json"
                  background="transparent"
                  speed={1}
                  hover
                  loop
                  autoPlay
                ></lottie-player>
                {/* <div class="box-custom-4-aside-content wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                          <img class="img-svg animated" style="margin: 0 auto 20px auto;padding-top: 90px;display: inline-block;text-align: center;transition: all 0.3s ease-in-out; height:auto; width:550px" src="images/checkout.svg" alt="">
                      </div> */}
              </div>
              <div className="box-custom-4-main">
                <div className="block-10">
                  <h1
                    className="font-weight-bold heading-decoration-2 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="text-white">You are</span>
                  </h1>
                  <h1
                    className="extra-light text-white heading-decoration-3 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span>really close to getting your own Smart Home</span>
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className="section-checkout">
            <div
              className="col-25 mr-5 ml-5 mt-5"
              style={{ paddingBottom: "60px" }}
            >
              <div className="container-bill">
                {/*#4e83f1*/}
                <div
                  style={{
                    background: "#0accbe no-repeat",
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    backgroundPosition: "center",
                    backgroundSize: "25px",
                    float: "left",
                    marginBottom: "15px",
                  }}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/dnoiydox.json"
                    trigger="loop"
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{ width: "50px", height: "50px", fontWeight: 100 }}
                  ></lord-icon>
                </div>
                <h3>Your articles</h3>
                <div className="table-responsive-md">
                  <table>
                    <tbody>
                      <tr>
                        <td
                          width="30%"
                          className="column-header"
                          style={{ textAlign: "center" }}
                        >
                          Article
                        </td>
                        <td
                          width="20%"
                          className="column-header"
                          style={{ textAlign: "center" }}
                        >
                          Options
                        </td>
                        <td
                          width="10%"
                          className="column-header"
                          style={{ textAlign: "center" }}
                        >
                          Quantity
                        </td>
                        <td
                          width="20%"
                          className="column-header"
                          style={{ textAlign: "center" }}
                        >
                          Price
                        </td>
                        <td
                          width="20%"
                          className="column-header"
                          style={{ textAlign: "center" }}
                        >
                          Total
                        </td>
                      </tr>
                      <tr>
                        <td className="row-b" style={{ textAlign: "center" }}>
                          <span style={{ color: "#777", fontSize: "11px" }}>
                            #64000L
                          </span>
                          <br />
                          Model 4S
                        </td>
                        <td className="row-b" style={{ textAlign: "center" }}>
                          option
                        </td>
                        <td className="row-b" style={{ textAlign: "center" }}>
                          {model1_qty}
                        </td>
                        <td className="row-b" style={{ textAlign: "center" }}>
                          {/*?php echo ($item_no) ?*/}{" "}
                          <span style={{ color: "#777" }}>X</span> {model1_price}
                        </td>
                        <td className="row-b" style={{ textAlign: "center" }}>
                          Rs. {model1_price*model1_qty}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <table style={{ background: "#eee" }}>
                  <tbody>
                    <tr>
                      <td>
                        <table width="620px" style={{ float: "right" }}>
                          <tbody>
                            <tr>
                              <td>
                                <strong>Sub-total:</strong>
                              </td>
                              <td
                                style={{
                                  textAlign: "right",
                                  paddingRight: "30px",
                                }}
                              >
                                Rs.
                                {model1_qty*model1_price}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Shipping fee:</strong>
                              </td>
                              <td
                                style={{
                                  textAlign: "right",
                                  paddingRight: "30px",
                                }}
                              >
                                Rs. 100
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Tax (25%):</strong>
                              </td>
                              <td
                                style={{
                                  textAlign: "right",
                                  paddingRight: "30px",
                                }}
                              >RS.
                                {25*model1_qty*model1_price/100}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Grand total:</strong>
                              </td>
                              <td
                                style={{
                                  textAlign: "right",
                                  paddingRight: "30px",
                                }}
                              >RS.
                                {25*model1_qty*model1_price/100 + 100 + model1_qty*model1_price}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* container */}
              {/* <div class="check-1 container">
                          <h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i>
                                  <b></b></span>
                          </h4>
                          <p><a class="a-check" href="#">MODEL 4S</a> <span class="price">₹2499.00</span></p>

                          <hr class="hr-check">
                          <p>Total <span class="price" style="color:black"><b></< /b></span></p>
                      </div>
              </div>*/}
              <hr
                style={{
                  marginTop: "40px",
                  border: "0.1px solid rgba(0, 0, 0, 0.1)",
                }}
              />
              <div className=" row-c" style={{ paddingTop: "30px" }}>
                <div className="col-75">
                  <div className="check container">
                    <form id="validate" action="/action_page.php">
                      <div className="row-c">
                        <div className="col-50 billing-class">
                          {/*#4e83f1*/}
                          <div
                            style={{
                              background: "#0accbe no-repeat",
                              width: "50px",
                              height: "50px",
                              margin: "30px 0",
                              marginRight: "10px",
                              backgroundPosition: "center",
                              backgroundSize: "25px",
                              float: "left",
                              marginBottom: "15px",
                            }}
                          >
                            {/*
                                              <lord-icon src="https://cdn.lordicon.com/uetqnvvg.json" trigger="loop"
                                                  colors="primary:#ffffff,secondary:#ffffff"
                                                  style="width:50px;height:50px">
                                              </lord-icon> */}
                            <lord-icon
                              src="https://cdn.lordicon.com/slkvcfos.json"
                              trigger="loop"
                              colors="primary:#ffffff,secondary:#ffffff"
                              style={{ width: "50px", height: "50px" }}
                            ></lord-icon>
                          </div>
                          <h3
                            style={{ marginBottom: "10px", margin: "35px 0" }}
                          >
                            Billing Details
                          </h3>
                          {/* <h3 style="color: #0accbe;margin-bottom: 10px;margin: 30px 0;">Billing Address</h3> */}
                          <label className="l-check" htmlFor="fname">
                            <i className="fa fa-user" /> Full Name
                          </label>
                          <input
                            type="text"
                            id="fname"
                            name="fullname"
                            placeholder="Name"
                            required
                          />
                          <label className="l-check" htmlFor="email">
                            <i className="fa fa-envelope" /> Email
                          </label>
                          <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                          <label className="l-check" htmlFor="adr">
                            <i className="fa fa-address-card-o" />
                            Address
                          </label>
                          <input
                            type="text"
                            id="adr"
                            name="address"
                            placeholder="Address"
                            required
                          />
                          <label className="l-check" htmlFor="city">
                            <i className="fa fa-institution" /> City
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="City"
                            required
                          />
                          <label className="l-check" htmlFor="state">
                            <i className="fa fa-map" /> State
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="State"
                            required
                          />
                          <label className="l-check" htmlFor="zip">
                            <i className="fa fa-map-pin mr-1" />
                            Zip
                          </label>
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            placeholder="Pincode"
                            required
                          />
                          <label className="l-check">
                            <input
                              type="checkbox"
                              defaultChecked="checked"
                              name="sameadr"
                            />{" "}
                            Shipping address same as billing
                          </label>
                        </div>
                        <div className="col-40 payment-class">
                          {/*#4e83f1*/}
                          <div
                            style={{
                              background: "#0accbe no-repeat",
                              width: "50px",
                              height: "50px",
                              textAlign: "center",
                              margin: "30px 0",
                              marginRight: "10px",
                              backgroundPosition: "center",
                              backgroundSize: "25px",
                              float: "left",
                              marginBottom: "15px",
                            }}
                          >
                            <lord-icon
                              src={"https://cdn.lordicon.com/qhviklyi.json"}
                              trigger="loop"
                              colors="primary:#ffffff,secondary:#0accbe"
                              style={{ width: "50px", height: "50px" }}
                            ></lord-icon>
                          </div>
                          <h3
                            style={{ marginBottom: "10px", margin: "35px 0" }}
                          >
                            Payment
                          </h3>
                          <div
                            className=" rounded-3 shadow-lg"
                            style={{
                              background: "#f5f5f5",
                              textAlign: "center",
                            }}
                          >
                            {/* <h4 style=" color: #0accbe;margin: 10px 0;">Payment</h4> */}
                            <label className="l-check" htmlFor="fname">
                              Accepted Cards
                            </label>
                            <div className="icon-container">
                              {/* <i class="fa fa-cc-visa" style="color:navy;"></i>
                                                  <i class="fa fa-cc-amex" style="color:blue;"></i>
                                                  <i class="fa fa-cc-mastercard" style="color:red;"></i>
                                                  <i class="fa fa-cc-discover" style="color:orange;"></i> */}
                            </div>
                            <label className="l-check" htmlFor="cname">
                              Name on Card
                            </label>
                            <input
                              type="text"
                              id="cname"
                              name="cardname"
                              placeholder="Card Holder Name"
                              required
                            />
                            <label className="l-check" htmlFor="ccnum">
                              Credit card number
                            </label>
                            <input
                              type="text"
                              id="ccnum"
                              name="cardnumber"
                              placeholder="0000 0000 0000 0000"
                              required
                            />
                            <label className="l-check" htmlFor="expmonth">
                              Expiry Month
                            </label>
                            <input
                              type="text"
                              id="expmonth"
                              name="expmonth"
                              placeholder="Expiry Month"
                              required
                            />
                            <label className="l-check" htmlFor="expyear">
                              Expiry Year
                            </label>
                            <input
                              type="text"
                              id="expyear"
                              name="expyear"
                              placeholder="XXXX"
                              required
                            />
                            <label className="l-check" htmlFor="cvv">
                              CVV
                            </label>
                            <input
                              type="text"
                              id="cvv"
                              name="cvv"
                              placeholder="XXX"
                              required
                            />
                            {/* <input type="submit" defaultValue="Place My Order" className="btn" /> */}

                            {/* <a href="https://rzp.io/l/7Acfvjd"> */}
                            <button
                              type="submit"
                              defaultValue="Place My Order"
                              className="btn"
                              onClick={displayRazorpay}
                            >
                              Place My Order
                            </button>
                            {/* </a> */}
                          </div>
                        </div>
                      </div>
                    </form>
                    {/* <a href="https://rzp.io/l/7Acfvjd">
                      <input type="Make Payment" defaultValue="Place My Order" className="btn" />
                    </a> */}

                    {/* <div>
                         <a
                           className="App-link"
                           onClick={showRazorpay}
                           target="_blank"
                           rel="noopener noreferrer"
                           >
                             Make Payment
                         </a>
                        </div> */}

                    {/* <div class="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_IzTo3HXj8Z2SEB/view" data-text="Pay Now" data-color="#528FF0" data-size="large">
  <script>

  </script>
</div> */}
                  </div>
                  <button
                    type="submit"
                    defaultValue="Place My Order"
                    className="btn"
                    onClick={displayRazorpay}
                  >
                    Place My Order
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-md-last block-footer-classic">
            <div className="block-footer-classic-wrap">
              <div className="container">
                <div className="row row-50 justify-content-lg-between">
                  <div className="col-md-6 col-lg-6 wow clipInLeft">
                    <p className="heading heading-alternate-1 text-white">
                      Subscribe to Get Notified!
                    </p>
                    <p className="big text-white-50">
                      Sign up to receive updates and fresh news from us.
                    </p>
                    <form
                      className="rd-form rd-mailform form-inline form-shadow block-11 ot30"
                      data-form-output="form-output-global"
                      data-form-type="subscribe"
                      method="post"
                      action="bat/rd-mailform.php"
                    >
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="subscribe-form-email-11"
                          type="email"
                          name="email"
                          data-constraints="@Email @Required"
                        />
                        <label
                          className="form-label"
                          htmlFor="subscribe-form-email-11"
                        >
                          Enter Your E-mail
                        </label>
                      </div>
                      <div className="form-button">
                        <button
                          className="button button-secondary button-winona"
                          type="submit"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-xl-5 wow clipInLeft">
                    <p className="heading heading-alternate-1 text-white">
                      Time to Get Started
                    </p>
                    <p className="big text-white-50">
                      Upgrade your home with MIBAiO!
                    </p>
                    <div className="group ot30">
                      <a
                        className="button button-secondary button-winona"
                        href="#"
                      >
                        Get a Quote
                      </a>
                      <a
                        className="button button-default-outline button-winona text-white"
                        href="about-us.html"
                      >
                        More About MIBAiO
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Page Footer*/}
              <footer className="section footer-classic footer-classic_boxed text-white-50 text">
                <div className="hr container">
                  <hr />
                </div>
                <div className="footer-classic-main">
                  <div className="container">
                    <div className="row row-50 justify-content-lg-between">
                      <div className="col-sm-7 col-lg-3 col-xl-2">
                        <a className="brand" href="index.html">
                          <img
                            src="images/logo-default-96x32.png"
                            alt=""
                            width={96}
                            height={32}
                            srcSet="images/logo-default-96x32.png 2x"
                          />
                        </a>
                        <p>
                          <span className="text" style={{ maxWidth: "250px" }}>
                            MIBAiO is the leading provider of the best
                            automation system for your smarthome.
                          </span>
                        </p>
                        <a
                          className="button button-color-8 button-winona text-black wow fadeIn"
                          href="login.php"
                        >
                          Sign In
                        </a>
                      </div>
                      <div className="col-sm-5 col-lg-3 col-xl-2">
                        <h4 className="footer-classic-title text-white">
                          About
                        </h4>
                        <ul className="list footer-classic-list text-white">
                          <li>
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li>
                            <a href="our-team">Our Team</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-7 col-lg-5 col-xl-3">
                        <h4 className="footer-classic-title text-white">
                          Useful Links
                        </h4>
                        <ul className="list footer-classic-list footer-classic-list_2-cols text-white">
                          <li>
                            <a href="login.php">Sign Up</a>
                          </li>
                          <li>
                            <a href="careers.html">Careers</a>
                          </li>
                          <li>
                            <a href="login.php">Log In</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-5 col-lg-9 col-xl-2">
                        <h4 className="footer-classic-title text-white">
                          Contact info
                        </h4>
                        <div className="row row-20 row-sm-35">
                          <div className="col-6 col-sm-12 col-lg-8 col-xl-12">
                            <div className="row row-10 text-white-50">
                              <div className="col-lg-6 col-xl-12">
                                <a href="mailto:info@mibaio.xyz">
                                  info@mibaio.xyz
                                </a>
                              </div>
                              <div className="col-lg-6 col-xl-12">
                                <a className="big" href="tel:+91-9673660515">
                                  +91-9673660515
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-sm-12 col-lg-4 col-xl-12 text-right text-sm-left">
                            <div className="group group-xs">
                              <a
                                className="link link-social-1 mdi mdi-twitter"
                                href="#"
                              />
                              <a
                                className="link link-social-1 mdi mdi-facebook"
                                href="#"
                              />
                              <a
                                className="link link-social-1 mdi mdi-instagram"
                                href="#"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hr container">
                  <hr />
                </div>
                <div className="footer-classic-aside">
                  <div className="container">
                    <p className="text-white-50 rights">
                      <span>©&nbsp;</span>
                      <span className="copyright-year" />
                      <span>&nbsp;</span>
                      <span>MIBAiO</span>
                      <span>.&nbsp;</span>
                      <a href="privacy-policy.html"> Privacy Policy</a>
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </section>
        </div>
        <div className="snackbars" id="form-output-global" />
        {/* script validate js */}
      </div>
    </>
  );
};

export default Checkout;
