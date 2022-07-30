// import favicon from '/images/favicon.png';
//import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hamburger from 'hamburger-react'
import React, { useState } from "react";
import styled from "styled-components";
import Loader from '../Loader/Loader';
import { useLoadingWithRefresh } from '../hooks/useLoadingWithRefresh';
const ContactUs = () => {
  const {loading}=useLoadingWithRefresh();
  return loading ?(
    <Loader/>
  ):(
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
        <section className="section page-header-3 header-section">
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
        </section>
        <section className="breadcrumbs-custom section-gray">
          <div className="breadcrumbs-custom-main bg-default">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-9">
                  <h3 className="text-white breadcrumbs-custom-title">Contact Us</h3>
                </div>
              </div>
            </div>
            <div className="breadcrumbs-custom-aside">
              <ul className="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li className="active">Contact Us</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section section-md">
          <div className="container">
            <div className="row row-50">
              <div className="col-xl-5">
                <div className="inset-1">
                  <h2>Our Location</h2>
                  <p className="big text-gray-900">If you are living nearby, come visit us at one of our comfortable offices.</p>
                  <div className="row row-50">
                    <div className="col-sm-6 col-xl-12">
                      <p className="heading-7">Corporate office</p>
                      <ul className="list list-style-1">
                        <li className="unit"><span className="unit-left icon icon-sm text-primary mdi mdi-map-marker" />
                          <div className="unit-body"><a href="#">1st floor H-Building, PICT college, Dhankawadi, Pune, MH, India 411043</a></div>
                        </li>
                        <li className="unit"><span className="unit-left icon icon-sm text-primary mdi mdi-cellphone" />
                          <div className="unit-body"><a href="tel:+91-9673660515">+91 967 366 0515</a></div>
                        </li>
                        <li className="unit"><span className="unit-left icon icon-sm text-primary mdi mdi-email-outline" />
                          <div className="unit-body"><a className="text-primary" href="mailto:info@mibaio.xyz">info@mibaio.xyz</a></div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-xl-12">
                      <p className="heading-7">Registered office</p>
                      <ul className="list list-style-1">
                        <li className="unit"><span className="unit-left icon icon-sm text-primary mdi mdi-map-marker" />
                          <div className="unit-body"><a href="#">278 Mahatma society, Kothrud, Pune, MH, India 411038</a></div>
                        </li>
                        <li className="unit"><span className="unit-left icon icon-sm text-primary mdi mdi-cellphone" />
                          <div className="unit-body"><a href="tel:+91 9673660515">+91 967 366 0515</a></div>
                        </li>
                        <li className="unit"><span className="unit-left icon icon-sm text-primary mdi mdi-email-outline" />
                          <div className="unit-body"><a className="text-primary" href="mailto:support@mibaio.xyz">support@mibaio.xyz</a></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="google-map-container" data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45." data-zoom={5} data-styles="[{&quot;featureType&quot;:&quot;administrative&quot;,&quot;elementType&quot;:&quot;labels.text.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#444444&quot;}]},{&quot;featureType&quot;:&quot;administrative.locality&quot;,&quot;elementType&quot;:&quot;labels.text.fill&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;simplified&quot;}]},{&quot;featureType&quot;:&quot;administrative.land_parcel&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#a6ce39&quot;}]},{&quot;featureType&quot;:&quot;administrative.land_parcel&quot;,&quot;elementType&quot;:&quot;labels.text.fill&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;simplified&quot;},{&quot;color&quot;:&quot;#73a533&quot;}]},{&quot;featureType&quot;:&quot;landscape&quot;,&quot;elementType&quot;:&quot;all&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f2f2f2&quot;}]},{&quot;featureType&quot;:&quot;landscape.natural.landcover&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#73a533&quot;}]},{&quot;featureType&quot;:&quot;landscape.natural.landcover&quot;,&quot;elementType&quot;:&quot;labels.text.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#a6ce39&quot;}]},{&quot;featureType&quot;:&quot;poi&quot;,&quot;elementType&quot;:&quot;all&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;off&quot;}]},{&quot;featureType&quot;:&quot;poi.park&quot;,&quot;elementType&quot;:&quot;labels.text.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#73a533&quot;}]},{&quot;featureType&quot;:&quot;road&quot;,&quot;elementType&quot;:&quot;all&quot;,&quot;stylers&quot;:[{&quot;saturation&quot;:-100},{&quot;lightness&quot;:45}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;all&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;simplified&quot;}]},{&quot;featureType&quot;:&quot;road.arterial&quot;,&quot;elementType&quot;:&quot;labels.icon&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;off&quot;}]},{&quot;featureType&quot;:&quot;transit&quot;,&quot;elementType&quot;:&quot;all&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;off&quot;}]},{&quot;featureType&quot;:&quot;water&quot;,&quot;elementType&quot;:&quot;all&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#46bcec&quot;},{&quot;visibility&quot;:&quot;on&quot;}]},{&quot;featureType&quot;:&quot;water&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#009fc3&quot;}]},{&quot;featureType&quot;:&quot;water&quot;,&quot;elementType&quot;:&quot;labels.text.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#009fc3&quot;}]}]" data-icon="images/gmap_marker.png" data-icon-active="images/gmap_marker_active.png">
                  <div className="google-map"> </div>
                  <ul className="google-map-markers">
                    <li data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45." data-description="9870 St Vincent Place, Glasgow" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Get in Touch*/}
        <section className="section section-md bg-gray-100">
          <div className="container">
            <h3 className="text-center">Get in Touch</h3>
            <div className="row justify-content-center">
              <div className="col-lg-11 col-xl-9">
                {/* RD Mailform*/}
                <form className="rd-mailform rd-form" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                  <div className="row row-x-16 row-20">
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input className="form-input" id="contact-name" type="text" name="name" data-constraints="@Required" />
                        <label className="form-label" htmlFor="contact-name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input className="form-input" id="contact-email" type="email" name="email" data-constraints="@Required @Email" />
                        <label className="form-label" htmlFor="contact-email">Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-wrap">
                        <label className="form-label" htmlFor="contact-message">Message</label>
                        <textarea className="form-input" id="contact-message" name="message" data-constraints="@Required" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input className="form-input" id="contact-phone" type="text" name="phone" data-constraints="@PhoneNumber" />
                        <label className="form-label" htmlFor="contact-phone">Phone</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap form-button">
                        <button className="button button-block button-secondary" type="submit">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-md-last block-footer-classic section-gray-2">
          <div className="block-footer-classic-wrap">
            <div className="container">
              <div className="row row-50 justify-content-lg-between">
                <div className="col-md-6 col-lg-6 wow clipInLeft">
                  <p className="heading heading-alternate-1 text-white">Subscribe to Get Notified!</p>
                  <p className="big text-white-50">Sign up to receive updates and fresh news from us.</p>
                  <form className="rd-form rd-mailform form-inline form-shadow block-11 ot30" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php">
                    <div className="form-wrap">
                      <input className="form-input" placeholder="Enter Your E-mail" id="subscribe-form-email-8" type="email" name="email" data-constraints="@Email @Required" />
                    </div>
                    <div className="form-button">
                      <button className="button button-secondary button-winona" type="submit">Subscribe</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-6 col-xl-5 wow clipInLeft">
                  <p className="heading heading-alternate-1 text-white">Time to Get Started</p>
                  <p className="big text-white-50">Improve your home experience with MIBAiO!</p>
                  <div className="group ot30"><a className="button button-secondary button-winona" href="#">Get a Quote</a><Link className="button button-default-outline button-winona text-white" to="/about_us">More About MIBAiO</Link></div>
                </div>
              </div>
            </div>
            {/* Page Footer*/}
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
          </div>
        </section>
      </div>
      <div className="snackbars" id="form-output-global" />
    </div>
  );
}

export default ContactUs;
