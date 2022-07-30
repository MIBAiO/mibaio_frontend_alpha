//import React from "react";
// import './bootstrap.css';
// import './cart.css';

import { useState } from 'react';
//import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hamburger from 'hamburger-react'
// import React, { useState } from "react";
import styled from "styled-components";

const Cart = () => {

  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemPrice, setItemPrice] = useState(2499);
  // const [itemTotalPrice, setItemTotalPrice] = useState(itemPrice*itemQuantity);


  return (

    <>
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


      <div>
        <div className="page">
          {/* FScreen*/}
          <section className="section page-header-3 header-section header-offset" id="header-id">
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

            {/* end of perfect nav  */}

                        {/* <div className="rd-navbar-wrap" style={{ height: '76px' }}>
                            <nav className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static rd-navbar--is-stuck" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="0px" data-xl-stick-up-offset="0px" data-xxl-stick-up-offset="0px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
                                <div className="rd-navbar-main">
                                    
                                    <div className="rd-navbar-panel">
                                        
                                        <button className="rd-navbar-toggle toggle-original" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span /></button>
                                        
                                        <div className="rd-navbar-brand"><Link className="brand" to="/"><img className="brand-logo-dark" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /><img className="brand-logo-light" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /></Link></div>
                                    </div>
                                    <div className="rd-navbar-nav-wrap toggle-original-elements"><Link href="/">
                                        <p className="rd-navbar-slogan rd-navbar-slogan-2 text-white-50 wow clipInLeft animated" style={{ visibility: 'visible', animationName: 'clipInLeft' }}>Cool IoT
                                            Company</p>
                                    </Link>
                                        
                                        <ul className="rd-navbar-nav">
                                            <li className="rd-nav-item active">
                                                <Link to="/" className="rd-nav-link" id="home-tab">
                                                    <i className="fa fa-fw fa-home" id="icon-view-home" />Home
                                                </Link>
                                            </li>
                                            <li className="rd-nav-item">
                                                <Link className="rd-nav-link" to="/about_us">
                                                    <i className="fa fa-fw fa-drivers-license-o mr-3 ml-3" id="icon-view" />About
                                                Us</Link>
                                            </li>
                                            <li className="rd-nav-item">
                                                <Link className="rd-nav-link" to="/careers">
                                                    <i className="fa fa-fw fa-graduation-cap mr-3" id="icon-view" />Careers</Link>
                                            </li>
                                            <li className="rd-nav-item rd-navbar--has-megamenu rd-navbar-submenu"><a className="rd-nav-link" href="#">
                                                <i className="fa fa-fw fa-user-circle-o mr-3" id="icon-view" />Account</a><span className="rd-navbar-submenu-toggle" />
                                                <div className="rd-menu rd-navbar-megamenu rd-navbar-open-right">
                                                    <ul className="rd-navbar-megamenu-inner-acc">
                                                        <li className="rd-megamenu-item">
                                                            <ul className="rd-megamenu-list">
                                                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">View Dashboard</a>
                                                                </li>
                                                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">Logout</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="rd-nav-item">
                                                <Link className="rd-nav-link" to="/contact_us"><i className="fa fa-fw fa-phone mr-3 ml-4" id="icon-view" />Contact Us</Link>
                                            </li>
                                            <li className="rd-nav-item rd-navbar--has-megamenu rd-navbar-submenu">
                                                <a className="rd-nav-link more-navbar" href="#" id="more-tab">
                                                    <i className="fa fa-fw fa-server" id="icon-view-more" />More
                                                </a><span className="rd-navbar-submenu-toggle" />
                                                <div className="rd-menu rd-navbar-megamenu rd-navbar-open-right">
                                                    <ul className="rd-navbar-megamenu-inner">
                                                        <li className="rd-megamenu-item">
                                                            <ul className="rd-megamenu-list">
                                                                <li className="rd-megamenu-list-item"><Link className="rd-megamenu-list-link" to="/our_team">Our
                                                                    Team</Link></li>
                                                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">FAQ</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="rd-megamenu-item">
                                                            <ul className="rd-megamenu-list">
                                                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">Privacy policy</a>
                                                                </li>
                                                                <li className="rd-megamenu-list-item"><Link className="rd-megamenu-list-link" to="/our_team">Our
                                                                    Team</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="rd-megamenu-item">
                                                            <ul className="rd-megamenu-list">
                                                                <li className="rd-megamenu-list-item"><Link className="rd-megamenu-list-link" to="/login">Login</Link>
                                                                </li>
                                                                <li className="rd-megamenu-list-item"><Link className="rd-megamenu-list-link" href="/register">Register</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <hr style={{ height: '2px' }} />
                                        </ul>
                                       
                                        <div className="rd-navbar-element rd-navbar-element_centered">
                                            <div className="group-xs">
                                                <Link className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon" id="cart-size-1" to="/cart"><span className="add-xs" id="cart-no">
                                                    0
                                                </span></Link>
                                            </div>
                                            <div>
                                                <a className="icon icon-sm link-social-2 mdi mdi-facebook" href="#" id="handle-view" />
                                                <a className="icon icon-sm link-social-2 mdi mdi-twitter" href="#" id="handle-view" />
                                                <a className="icon icon-sm link-social-2 mdi mdi-instagram" href="#" id="handle-view" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rd-navbar-element rd-navbar-element_right">
                                        <div id="google_translate_element" style={{ display: 'none' }}>
                                            <div className="skiptranslate goog-te-gadget" dir="ltr" style={{}}>
                                                <div id=":0.targetLanguage" className="goog-te-gadget-simple" style={{ whiteSpace: 'nowrap' }}><img src="./MIBAiO Home_files/cleardot.gif" className="goog-te-gadget-icon" alt="" style={{ backgroundImage: 'url("https://translate.googleapis.com/translate_static/img/te_ctrl3.gif")', backgroundPosition: '-65px 0px' }} /><span style={{ verticalAlign: 'middle' }}><a aria-haspopup="true" className="goog-te-menu-value" href="javascript:void(0)"><span>Select
                                                    Language</span><img src="./MIBAiO Home_files/cleardot.gif" alt="" width={1} height={1} /><span style={{ borderLeft: '1px solid rgb(187, 187, 187)' }}>​</span><img src="images/cleardot.gif" alt="" width={1} height={1} /><span aria-hidden="true" style={{ color: 'rgb(118, 118, 118)' }}>▼</span></a></span></div>
                                            </div>
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
                                    <div className="rd-navbar-dummy" />
                                </div>
                            </nav>
                        </div> */}
            {/* Box Custom 4*/}
            <div id="belownavbar" className="box-custom-4 bg-default">
              <div className="box-custom-4-aside bg-accent">
                <div className="box-custom-4-aside-decoration">
                  <div className="box-custom-4-aside-decoration-bg wow clipInLeft" />
                  <div className="box-custom-4-icon-outer"><span className="box-custom-4-icon" /></div>
                </div>
                <div className="box-custom-4-aside-content wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                  <img className="img-svg animated" style={{ margin: '0 auto 20px auto', paddingTop: '90px', display: 'inline-block', textAlign: 'center', transition: 'all 0.3s ease-in-out', height: 'auto', width: '550px' }} src="images/cart_p.svg" alt="" />
                </div>
              </div>
              <div className="box-custom-4-main">
                <div className="block-10">
                  <h1 className="font-weight-bold heading-decoration-2 wow clipInLeft"><span className="text-white">You
                        are</span>
                  </h1>
                  <h1 className="extra-light text-white heading-decoration-3"><span>just a <strong style={{ color: '#0accbe' }}>few </strong>steps away from having a Smart Home!</span>
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className="section page-header-3 header-section header-offset">
            {/* RD Navbar*/}
            <div className="rd-navbar-wrap">
              <nav className="rd-navbar rd-navbar-classic" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="0px" data-xl-stick-up-offset="0px" data-xxl-stick-up-offset="0px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
                <div className="rd-navbar-main">
                  {/* RD Navbar Panel*/}
                  <div className="rd-navbar-panel">
                    {/* RD Navbar Toggle*/}
                    <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span /></button>
                    {/* RD Navbar Brand*/}
                    <div className="rd-navbar-brand"><a className="brand" href="index.html"><img className="brand-logo-dark" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /><img className="brand-logo-light" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /></a></div>
                  </div>
                  <div className="rd-navbar-nav-wrap"><a href="index.html" id="nav-1-id">
                    <p className="rd-navbar-slogan rd-navbar-slogan-2 text-white-50 wow clipInLeft">Cool IoT
                          Company</p>
                  </a>
                    {/* RD Navbar Nav*/}
                    <ul className="rd-navbar-nav ">
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="index.html" id="home-tab">
                          <i className="fa fa-fw fa-home" id="icon-view-home" />Home
                          </a>
                      </li>
                      <li className="rd-nav-item"><a className="rd-nav-link" href="about-us.html">
                        <i className="fa fa-fw fa-drivers-license-o mr-3 ml-3" id="icon-view" />About
                            Us</a>
                      </li>
                      <li className="rd-nav-item"><a className="rd-nav-link" href="careers.html">
                        <i className="fa fa-fw fa-graduation-cap mr-3" id="icon-view" />Careers</a>
                      </li>
                      <li className="rd-nav-item"><a className="rd-nav-link" href="#">
                        <i className="fa fa-fw fa-user-circle-o mr-3" id="icon-view" />Account</a>
                        {/* RD Navbar Megamenu*/}
                        <div className="rd-menu rd-navbar-megamenu">
                          <ul className="rd-navbar-megamenu-inner">
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="our-team.html">View Dashboard</a></li>
                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">Logout</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="rd-nav-item"><a className="rd-nav-link" href="contact-us.html"><i className="fa fa-fw fa-phone mr-3 ml-4" id="icon-view" />Contact Us</a>
                      </li>
                      <li className="rd-nav-item">
                        {/* <a class="rd-nav-link more-navbar mr-5" href="#" id="more-tab">
                                          <i class="fa fa-fw fa-server ml-2 mr-3" id="icon-view"></i>More
                                      </a> */}
                        <a className="rd-nav-link more-navbar" href="#" id="more-tab">
                          <i className="fa fa-fw fa-server" id="icon-view-more" />More
                          </a>
                        {/* RD Navbar Megamenu*/}
                        <div className="rd-menu rd-navbar-megamenu">
                          <ul className="rd-navbar-megamenu-inner">
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="our-team.html">Our
                                      Team</a></li>
                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">FAQ</a></li>
                              </ul>
                            </li>
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">Privacy policy</a>
                                </li>
                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="our-team.html">Our
                                      Team</a></li>
                              </ul>
                            </li>
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="login.php">Login</a>
                                </li>
                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="register.php">Register</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <hr style={{ height: '2px' }} />
                    </ul>
                    {/* RD Navbar Search*/}
                    <div className="rd-navbar-element rd-navbar-element_centered">
                      <div className="group-xs">
                        {/* <a class="icon icon-sm link-social-2 mdi mdi-cart-plus" id="cart-size-1" href="#"></a> */}
                        <a className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon" id="cart-size-1" href="#"><span className="add-xs" id="cart-no">
                        </span></a>
                      </div>
                      <div>
                        <a className="icon icon-sm link-social-2 mdi mdi-facebook" href="#" id="handle-view" />
                        <a className="icon icon-sm link-social-2 mdi mdi-twitter" href="#" id="handle-view" />
                        <a className="icon icon-sm link-social-2 mdi mdi-instagram" href="#" id="handle-view" />
                      </div>
                    </div>
                  </div>
                  <div className="rd-navbar-element rd-navbar-element_right" id="nav-2-id">
                    <div id="google_translate_element" style={{ display: 'none' }} />
                    <ul className="list-localization">
                      <li>
                        {/* <a class="icon icon-sm link-social-2 mdi mdi-cart-plus mr-2" id="cart-size" href="#"></a> */}
                        <a className="icon icon-sm link-social-2 mdi mdi-cart-outline mr-2" id="cart-size" href="#"><span className="add-xs" id="cart-no">
                        </span></a>
                      </li>
                      <li>
                        <label>
                          <input id="Marathi" name="localization" defaultValue="Marathi" type="radio" autoComplete="Off" /><span className="label-text"><span className="notranslate">मराठी</span></span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input id="English" name="localization" defaultValue="English" type="radio" defaultChecked="checked" autoComplete="Off" /><span className="label-text">English</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input id="Hindi" name="localization" defaultValue="Hindi" type="radio" autoComplete="Off" /><span className="label-text"><span className="notranslate">हिंदी</span></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="rd-navbar-dummy" />
                </div>
              </nav>
            </div>
          </section>
          <section className="section section-md" id="cart-empty">
            <div className="container my-5">
              <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border-2 shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                  <h3 className="display-4 fw-bold lh-1" style={{ color: '#03a59a' }}>Oops! Your cart is empty!</h3>
                  <p className="lead">Looks like you haven't added anything to your cart yet</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
                    <a className="button button-icon button-icon-right button-secondary button-winona wow clipInLeft wow fadeInUp" data-wow-delay="0.3s" href="model_copy.php" data-wow-duration=".5s" style={{ fontSize: '18px' }}>Back To Shopping</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/* <img class="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720"> */}
                  <img className="img-svg animated-1" style={{ transition: 'all 0.3s ease-in-out', height: 'auto', width: '590px' }} src="images/svg2.svg" alt="" />
                </div>
              </div>
            </div>
          </section>
          {/* <section class="section section-md" id="cart-empty">
                  <div class="text-container">
                      <h1 class="font-weight-bold heading-decoration-2 wow clipInLeft"><span style="color:#0accbe">Your
                              Cart</span>
                      </h1>
                      <h1 class="extra-light heading-decoration-3"><span style="color:#0accbe"> is <strong style="color: #0accbe;">EMPTY</strong></span></h1>

                      <div class="fading-effect"></div>
                  </div>
              </div>
          </section> */}
          <section id="cart-page">
            <form action method="post">
              <section className="section section-md mycart">
                {/* <section id="cart-empty">

                  <lottie-player class="lottie-animate" src="https://assets3.lottiefiles.com/packages/lf20_lidbiuw6.json" background="transparent" speed="1" style="justify-content:center" loop autoplay>
                  </lottie-player>

              </section> */}
                <section className="cart_wrapper ml-lg-5">
                  <div className="cart_lists">
                    <div className="cart_title">
                      <span className="material-icons-outlined"></span>
                        Your Shopping Cart
                      </div>
                    <div className="cart_list_wrap">
                      <div className="cart_responsive">
                        <div className="tr_item">
                          <div className="td_item item_img">
                            <img className="model_pic" src="./images/product1/p2.png" />
                          </div>
                          <div className="td_item item_name">
                            <label className="main">Model 4S</label>
                            <label className="sub">Ref. 007891987</label>
                          </div>
                          <div className="td_item item_qty">
                            <button className="plus-btn" type="button" name="button"
                              onClick={() => setItemQuantity(itemQuantity + 1)}
                            >+
                                <img src="./images/plus.svg" alt="" />
                            </button>
                            {/* <input type="text" name="number" id="cart_cnt" defaultValue /> */}
                            <span>{itemQuantity}</span>

                            <button className="minus-btn" type="button" name="button"
                              onClick={() => {
                                if (itemQuantity > 0)
                                  setItemQuantity(itemQuantity - 1)
                              }}
                            >-
                                <img src="./images/minus.svg" alt="" />
                            </button>
                          </div>
                          <div className="td_item item_price">
                            <label>Rs.<strong className="bold_price_1">
                              {itemPrice}
                            </strong></label>
                          </div>
                          <div className="td_item item_price">
                            <label>Rs.<strong className="bold_price">{itemQuantity * itemPrice}
                            </strong></label>
                          </div>
                          <div className="td_item item_remove">
                            <span className="material-icons-outlined">close</span>
                          </div>
                        </div>
                      </div>
                      <div className="footer" style={{ marginTop: '40px' }}>
                        <div className="back_cart">
                          <a href="model_copy.php">
                            <span className="material-icons-outlined">west</span>
                              Back to Shop
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart_details">
                    <div className="cart_title">
                      Cart Details
                      </div>
                    <div className="form_row">
                      <div className="form_group">
                        <label className="input_label"><strong>Cart Total</strong></label>
                        <label type="text" className="input" id="card_number" style={{ color: '#0accbe' }}>
                          Rs. {itemPrice * itemQuantity}
                          <strong className="total_bold" style={{ fontWeight: 'normal', color: '#0accbe' }}>
                          </strong>
                        </label>
                      </div>
                      <div className="form_group" style={{ width: '40%' }}>
                        <label className="input_label">Taxes (GST)</label>
                        <label type="text" className="input" id="card_number" style={{ color: '#0accbe' }}>Rs.
                            <strong className="taxes" style={{ fontWeight: 'normal', color: '#0accbe' }}>100</strong>
                        </label>
                      </div>
                      <div className="form_group" style={{ width: '60%' }}>
                        <label className="input_label">Apply Coupon (If Any)</label>
                        <input type="text" className="input" id="card_number" />
                      </div>
                      <div className="form_group" style={{ marginBottom: '45px' }}>
                        <label className="input_label">Payable Amount</label>
                        <label type="text" className="input" id="card_number" style={{ color: '#0accbe' }}>
                          Rs. {itemPrice * itemQuantity + 100}
                          <strong className="pay_bold" style={{ fontWeight: 'normal', color: '#0accbe' }}>
                          </strong>
                        </label>
                      </div>
                      <button className="btn-checkout" name="check" id="check">Checkout</button>
                    </div>
                  </div>
                </section>
              </section>
            </form>
          </section>
          {/* </section> */}
          {/* Subscribe to Get Notified!*/}
          <section className="section section-md-last block-footer-classic">
                        <div className="block-footer-classic-wrap">
                            <div className="container">
                                <div className="row row-50 justify-content-lg-between">
                                    <div className="col-md-6 col-lg-6 wow clipInLeft" style={{ animationName: 'none' }}>
                                        <p className="heading heading-alternate-1 text-white">Subscribe to Get Notified!</p>
                                        <p className="big text-white-50">Sign up to receive updates and fresh news from us.</p>
                                        <form className="rd-form rd-mailform form-inline form-shadow block-11 ot30" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="https://mibaio.in/bat/rd-mailform.php" noValidate="novalidate">
                                            <div className="form-wrap">
                                                <input className="form-input form-control-has-validation" id="subscribe-form-email-11" type="email" name="email" placeholder="Enter Your
                                                    E-mail" data-constraints="@Email @Required" /><span className="form-validation" />
                                            </div>
                                            <div className="form-button">
                                                <button className="button button-secondary button-winona" type="submit">
                                                    <div className="content-original">Subscribe</div>
                                                    <div className="content-dubbed">Subscribe</div>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-6 col-xl-5 wow clipInLeft" style={{ animationName: 'none' }}>
                                        <p className="heading heading-alternate-1 text-white">Time to Get Started</p>
                                        <p className="big text-white-50">Upgrade your home to a smart home with MIBAiO!</p>
                                        <div className="group ot30"><a className="button button-secondary button-winona" href="https://mibaio.in/#">
                                            <div className="content-original">Get a
                                                Quote</div>
                                            <div className="content-dubbed">Get a
                                                Quote</div>
                                        </a><Link className="button button-default-outline button-winona text-white" to="/about_us">
                                                <div className="content-original">More About
                                                    MIBAiO</div>
                                                <div className="content-dubbed">More About
                                                    MIBAiO</div>
                                            </Link></div>
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
                                            <div className="col-sm-7 col-lg-3 col-xl-2"><a className="brand" href="https://mibaio.in/index.html"><img src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /></a>
                                                <p><span className="text" style={{ maxWidth: '250px' }}>MIBAiO is the leading provider of
                                                the best automation
                                                    system for your smarthome.</span></p><Link to="/login" className="button button-color-8 button-winona text-black wow fadeIn" style={{ animationName: 'none' }}>
                                                    <div className="content-original">Sign In</div>
                                                    <div className="content-dubbed">Sign In</div>
                                                </Link>
                                            </div>
                                            <div className="col-sm-5 col-lg-3 col-xl-2">
                                                <h4 className="footer-classic-title text-white">About</h4>
                                                <ul className="list footer-classic-list text-white">
                                                    <li><Link to="/about_us">About Us</Link></li>
                                                    <li><Link to="/our_team">Our Team</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-7 col-lg-5 col-xl-3">
                                                <h4 className="footer-classic-title text-white">Useful Links</h4>
                                                <ul className="list footer-classic-list footer-classic-list_2-cols text-white">
                                                    <li><Link to="/register">Sign Up</Link></li>
                                                    <li><Link to="/careers">Careers</Link></li>
                                                    <li><Link to="/login">Log In</Link></li>
                                                    <li><a href="https://mibaio.in/#FAQ">FAQ</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-5 col-lg-9 col-xl-2">
                                                <h4 className="footer-classic-title text-white">Contact info</h4>
                                                <div className="row row-20 row-sm-35">
                                                    <div className="col-6 col-sm-12 col-lg-8 col-xl-12">
                                                        <div className="row row-10 text-white-50">
                                                            <div className="col-lg-6 col-xl-12"><a href="mailto:info@mibaio.xyz">info@mibaio.xyz</a></div>
                                                            <div className="col-lg-6 col-xl-12"><a className="big" href="tel:+91-9673660515">+91-9673660515</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-12 col-lg-4 col-xl-12 text-right text-sm-left">
                                                        <div className="group group-xs"><a className="link link-social-1 mdi mdi-twitter" href="https://mibaio.in/#" /><a className="link link-social-1 mdi mdi-facebook" href="https://mibaio.in/#" /><a className="link link-social-1 mdi mdi-instagram" href="https://mibaio.in/#" /></div>
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
                                        <p className="text-white-50 rights"><span>©&nbsp;</span><span className="copyright-year">2022</span><span>&nbsp;</span><span>MIBAiO</span><span>.&nbsp;</span><a href="https://mibaio.in/privacy-policy.html"> Privacy Policy</a></p>
                                    </div>
                                </div>
                            </footer>
                            <a style={{position:"fixed", bottom:"30px", right:"30px", zIndex:1000, backgroundColor:"#4e83f1", color:"white", padding:"10px",borderRadius:"50%"}} href="#"><img src="https://img.icons8.com/ios-glyphs/60/000000/long-arrow-up.png" height="32px" width="32px"/></a>
                            {/* <a href="#" id="ui-to-top" class="ui-to-top mdi mdi-chevron-up"></a> */}
                        </div>
                    </section>
        </div>
        <div className="snackbars" id="form-output-global" />
      </div>
    </>

  )
}

export default Cart;
