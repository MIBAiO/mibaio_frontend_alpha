//import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addModel1, removeModel1 } from "../store/cartSlice";
import { Link, Redirect } from "react-router-dom";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
// import pic1 from "../../public/pic1.png";
import styled from "styled-components";
import Magnifier from "react-magnifier";
import Carousel from 'react-bootstrap/Carousel';
import {
    GlassMagnifier,
    MOUSE_ACTIVATION,
    PictureInPictureMagnifier,
    TOUCH_ACTIVATION,
} from "react-image-magnifiers";
import { addProductToCart } from "../http/apis";
import { createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";

const ViewProduct = () => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        previewHorizontalPos: "left",
        previewVerticalPos: "bottom",
        previewSizePercentage: 35,
        previewOpacity: 1,
        shadow: false,
        show: true,
    });

    const { model1_qty, model1_price } = useSelector((state) => state.cart);
    const [itemQuantity, setItemQuantity] = useState(model1_qty);
    const [itemPrice, setItemPrice] = useState(model1_price);

    const [productImages, setProductImages] = useState([
        "pic1.png",
        "pic2.png",
        "pic3.png",
    ]);

    const [currentlyViewing, setCurrentlyViewing] = useState("pic1.png");

    const [didRedrirect, setDidRedirect] = useState(false);

    const cartHandler = async () => {
        try {
            const res = await addProductToCart({
                modelName: "MIBAiO Xtension 4S",
                count: itemQuantity,
            });
            setDidRedirect(true);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        // <div className="preloader" id="loading">
        //   <div className="preloader-body">
        //     <div id="loading-center-object">
        //       <div className="object" id="object_four" />
        //       <div className="object" id="object_three" />
        //       <div className="object" id="object_two" />
        //       <div className="object" id="object_one" />
        //     </div>
        //   </div>
        // </div>

        <div>
            <div className="page">
                {/* FScreen*/}

                {didRedrirect && <Redirect to="/cart" />}
                <section className="myclass section page-header-3 header-section header-offset">
                    {/* RD Navbar*/}
                    {/* RD Navbar*/}
                    <Navbar
                        collapseOnSelect
                        expand="lg"
                        className="rd-navbar-nav-wrap toggle-original-elements active color-nav "
                        variant="dark"
                    >
                        <Container>
                            <Navbar.Brand
                                href="#home"
                                className="order-md-0 mx-auto order-1"
                            >
                                <img
                                    className=" brand-logo-dark"
                                    src="images/logo-default-96x32.png"
                                    alt=""
                                    width={96}
                                    height={32}
                                    srcSet="images/logo-default-96x32.png 2x"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle
                                aria-controls="responsive-navbar-nav"
                                className="order-md-1 order-0"
                            />

                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav
                                    className="me-auto nav-font nav-menu"
                                    style={{ marginLeft: "20%" }}
                                >
                                    <Nav.Link>
                                        <Link
                                            className="rd-nav-link nav-font"
                                            to="/"
                                        >
                                            Home
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link
                                            className="rd-nav-link nav-font"
                                            to="/about_us"
                                        >
                                            <FontAwesomeIcon icon="fa-solid fa-id-card" />
                                            About Us
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link
                                            className="rd-nav-link nav-font"
                                            to="/careers"
                                        >
                                            Careers
                                        </Link>
                                    </Nav.Link>
                                    <NavDropdown
                                        title="Account"
                                        id="collasible-nav-dropdown"
                                        className="rd-nav-link nav-font"
                                    >
                                        <NavDropdown.Item>
                                            <Link
                                                className="rd-nav-link"
                                                to="/about_us"
                                            >
                                                View Dashboard
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link
                                                className="rd-nav-link"
                                                to="/about_us"
                                            >
                                                Log Out
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link>
                                        <Link
                                            className="rd-nav-link nav-font"
                                            to="/contact_us"
                                        >
                                            Contact Us
                                        </Link>
                                    </Nav.Link>
                                </Nav>
                                <Nav className="me-auto nav-font">
                                    <NavDropdown
                                        title="More"
                                        id="collasible-nav-dropdown"
                                    >
                                        <NavDropdown.Item>
                                            <Link
                                                className="rd-nav-link "
                                                to="/"
                                            >
                                                View Dashboard
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link
                                                className="rd-nav-link"
                                                to="/"
                                            >
                                                Log Out
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item>
                                            <Link
                                                className="rd-nav-link"
                                                to="/about_us"
                                            >
                                                Privacy Policy
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link
                                                className="rd-nav-link"
                                                to="/our_team"
                                            >
                                                Our Team
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item>
                                            <Link
                                                className="rd-nav-link"
                                                to="/login"
                                            >
                                                Login
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link
                                                className="rd-nav-link"
                                                to="/register"
                                            >
                                                Register
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                            <Nav>
                                <div className="rd-navbar-element rd-navbar-element_centered">
                                    <div
                                        className="group-xs"
                                        style={{ marginRight: "15px" }}
                                    >
                                        <Link
                                            className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon"
                                            id="cart-size-1"
                                            to="/cart"
                                        >
                                            <span
                                                className="add-xs"
                                                id="cart-no"
                                            >
                                                0
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </Nav>
                            <Nav>
                                <div className="rd-navbar-element rd-navbar-element_right">
                                    <div id="google_translate_element"></div>
                                    <ul className="list-localization">
                                        <li>
                                            <a
                                                className="icon icon-sm link-social-2 mdi mdi-cart-outline mr-2"
                                                id="cart-size"
                                                href="#"
                                            >
                                                <span
                                                    className="add-xs"
                                                    id="cart-no"
                                                >
                                                    0
                                                </span>
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
                                                    className="radio-custom"
                                                />
                                                <span className="radio-custom-dummy" />
                                                <span className="label-text">
                                                    <span className="notranslate">
                                                        मराठी
                                                    </span>
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
                                                    className="radio-custom"
                                                />
                                                <span className="radio-custom-dummy" />
                                                <span className="label-text">
                                                    English
                                                </span>
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
                                                    className="radio-custom"
                                                />
                                                <span className="radio-custom-dummy" />
                                                <span className="label-text">
                                                    <span className="notranslate">
                                                        हिंदी
                                                    </span>
                                                </span>
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
                    {/* <div className="box-custom-4 bg-default">
                <div className="box-custom-4-aside bg-accent">
                  <div className="box-custom-4-aside-decoration">
                    <div className="box-custom-4-aside-decoration-bg wow clipInLeft" />
                    <div className="box-custom-4-icon-outer"><span className="box-custom-4-icon" /></div>
                  </div>
                  <div className="box-custom-4-aside-content">
                    <div className="iphone-frame-4-group">
                      <div className="iphone-frame-4 wow clipInLeft" data-wow-duration="1.5s" data-wow-delay=".5s">
                        <div className="iphone-frame-4-outer center-pattern"><img className="iphone-frame-4-inner" src="images/iphone-frame-3-404x745.png" alt="" width={404} height={600} />
                          <div className="owl-carousel" data-items={1} data-dots="false" data-nav="false" data-custom-next="#oc-iphone-frame-4-nav" data-stage-padding={0} data-loop="true" data-margin={0} data-easing="linear" data-autoplay="true" data-mouse-drag="true">
                            <div className="item" style={{backgroundImage: 'url(images/iphone-frame-3-inner-1-300x650.png)'}}>
                            </div>
                            <div onclick="openFullscreen()">
                              <video id="myvideo" src="https://www.robmillsarchitects.com/files/land/city/RMA_Web_land_city_1.mp4" loop muted autoPlay playsInline />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wow fadeIn" id="oc-iphone-frame-4-nav" data-wow-duration=".5s" data-wow-delay="1s" />
                    </div>
                  </div>
                </div>
                <div className="box-custom-4-main">
                  <div className="block-10">
                    <h1 className="font-weight-bold heading-decoration-2 wow clipInLeft"><span className="text-white">Do
                        more</span>
                    </h1>
                    <h1 className="extra-light text-white heading-decoration-3"><span>with your home with <strong style={{color: '#0accbe'}}>Model 4S</strong></span></h1>
                    <div className="group wow clipInLeft" style={{paddingLeft: '50px'}}><a className="button button-icon button-icon-right button-secondary button-winona" href="#" data-wow-duration=".5s" data-wow-delay=".5s">
                        <div className="content-original">Read More</div>
                        <div className="content-dubbed">Read More</div>
                      </a></div>
                  </div>
                </div>
              </div> */}
                </section>

                <section className="sproduct container my-5 pt-5 pl-5 rounded-3">
                    <div className="row d-flex mt-2">
                        <div className="col-md-5 product-img">
                            {/* <Link to="/product_details">
                                <img
                                    className="img-fluid"
                                    src="pic1.png"
                                    id="main-img"
                                    alt="Image To Zoom"
                                    data-title="MIBAiO IoT"
                                    data-help="Zoom it for better experience +/-"
                                />
                            </Link> */}
                            {/* <ReactImageMagnify
                                {...{
                                    smallImage: {
                                        alt: "Wristwatch by Ted Baker London",
                                        src: "pic3.png",
                                        isFluidWidth: true,
                                    },
                                    largeImage: {
                                        src: "pic3small.png",
                                    },
                                    enlargedImageContainerStyle: {
                                        maxWidth: 400,
                                        maxHeight: 400,
                                        overflow: "clip",
                                    },
                                    style: {
                                        zIndex: 100,
                                    },
                                }}
                            /> */}
                        </div>
                        <div
                            // style={{
                            //     display: "flex",
                            //     justifyContent: "center",
                            //     flexDirection: "row",
                            //     flexWrap: "wrap",
                            // }}
                            className="row d-flex mt-2"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                }}
                            >
                                {/* <PictureInPictureMagnifier
                                    imageSrc="https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg"
                                    previewHorizontalPos={previewHorizontalPos}
                                    previewVerticalPos={previewVerticalPos}
                                    previewSizePercentage={
                                        previewSizePercentage
                                    }
                                    previewOpacity={previewOpacity}
                                    shadow={shadow}
                                ></PictureInPictureMagnifier> */}
                                {/* <input type="checkbox" name="" id=""/> */}
                                <Magnifier
                                    src={currentlyViewing}
                                    mgShape="square"
                                    zoomFactor={2}
                                    width={500}
                                    mgWidth={150}
                                    mgHeight={150}
                                />
                                <div className="col-md-2 product-small d-flex flex-md-column order-md-first">
                                    {productImages.map((val, idx) => (
                                        <div
                                            className="small-img-col"
                                            style={{
                                                border: "1px solid #000",
                                                borderRadius: 20,
                                                padding: 10,
                                                marginTop: "5px",
                                            }}
                                            onClick={() =>
                                                setCurrentlyViewing(val)
                                            }
                                            key={idx}
                                        >
                                            <img
                                                src={val}
                                                alt={val}
                                                className="img-fluid mb-3 small-img"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="col-md-5">
                                    <h2
                                        style={{
                                            fontWeight: "bold",
                                            color: "#0accbe",
                                            display: "inline-block",
                                            marginLeft: "5px",
                                        }}
                                    >
                                        Model 4S{" "}
                                        <small style={{ fontSize: "15px" }}>
                                            Product by
                                            <a href="javascript:void(0);">
                                                MIBAiO
                                            </a>
                                        </small>{" "}
                                    </h2>
                                    <hr />
                                    <h4
                                        className="mt-5"
                                        style={{ fontWeight: "bold" }}
                                    >
                                        ₹2499.00
                                    </h4>
                                    <div className="quantity">
                                        <button
                                            className="plus-btn"
                                            type="button"
                                            name="button"
                                            onClick={() => {
                                                setItemQuantity(
                                                    itemQuantity + 1
                                                );
                                                dispatch(addModel1());
                                                // const {model1_qty} = useSelector((state) => state.auth);
                                                // setItemQuantity(model1_qty);
                                            }}
                                            style={{
                                                padding: 2,
                                                backgroundColor: "#c1c1c1",
                                            }}
                                        >
                                            <img
                                                src="./images/plus.svg"
                                                alt="+"
                                            />
                                        </button>
                                        {/* <input type="text" name="name" defaultValue={1} /> */}
                                        <span style={{ marginLeft: 15 }}>
                                            {" "}
                                            {itemQuantity}{" "}
                                        </span>
                                        <button
                                            className="minus-btn"
                                            type="button"
                                            name="button"
                                            style={{
                                                padding: 2,
                                                backgroundColor: "#c1c1c1",
                                            }}
                                            onClick={() => {
                                                if (itemQuantity > 0) {
                                                    setItemQuantity(
                                                        itemQuantity - 1
                                                    );
                                                    dispatch(removeModel1());
                                                }
                                                // const {model1_qty} = useSelector((state) => state.auth);
                                                // setItemQuantity(model1_qty);
                                            }}
                                        >
                                            <img
                                                src="./images/minus.svg"
                                                alt="-"
                                            />
                                        </button>
                                    </div>
                                    <div className="group wow clipInLeft mb-2 add">
                                        <div
                                            className="button button-icon button-icon-right button-secondary button-winona"
                                            onClick={cartHandler}
                                            data-wow-duration=".5s"
                                            data-wow-delay=".5s"
                                        >
                                            <div className="content-original">
                                                Add to Cart
                                            </div>
                                            <div className="content-dubbed">
                                                Add to Cart
                                            </div>
                                        </div>
                                    </div>
                                    <h4
                                        className="py-2"
                                        style={{ fontWeight: "bold" }}
                                    >
                                        Product Details
                                    </h4>
                                    <hr className="hr-pro" />
                                    <p
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        <strong>
                                            MIBAiO is India's 1st Hybrid
                                            WiFi+Bluetooth{" "}
                                        </strong>
                                        enabled smart device, which can be
                                        easily installed outside any existing
                                        switchboard. Turn your electronics
                                        on/off, and schedule the same from any
                                        part of the world, via MIBAiO app.
                                        <br />
                                        <strong>Works in sync</strong> with your
                                        existing electrical connections and
                                        switches with NO additional wiring
                                        required.
                                        <br />
                                        Operate with a touch or hands-free with
                                        your voice.
                                        <br />
                                        <strong>
                                            Works smoothly Online & Offline
                                        </strong>
                                        , Even when your internet is down, you
                                        can still operate your devices
                                        wirelessly with Bluetooth.
                                        <br />
                                    </p>
                                </div>

                                {/* <div
                                    className="row"
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        overflow: "scroll",
                                        flexWrap: "nowrap",
                                    }}
                                > */}
                                {/* <div class="small-img-col">
                                        <img
                                            src="pic3.png"
                                            alt=""
                                            class="img-fluid mb-3 small-img"
                                        />
                                    </div>

                                    <div class="small-img-col">
                                        <img
                                            src="pic3.png"
                                            alt=""
                                            class="img-fluid mb-3 small-img"
                                        />
                                    </div>

                                    <div class="small-img-col">
                                        <img
                                            src="pic3.png"
                                            alt=""
                                            class="img-fluid mb-3 small-img"
                                        />
                                    </div>

                                    <div class="small-img-col">
                                        <img
                                            src="pic3.png"
                                            alt=""
                                            class="img-fluid mb-3 small-img"
                                        />
                                    </div>
                                    <div class="small-img-col">
                                        <img
                                            src="pic3.png"
                                            alt=""
                                            class="img-fluid mb-3 small-img"
                                        />
                                    </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================================================================================================ */}

                <div class="tabs">
                    <h3
                        style={{
                            fontWeight: "bold",
                            color: "#0accbe",
                            textAlign: "center",
                            marginBottom: "10px",
                        }}
                    >
                        What the Manufacturer has to say?
                    </h3>
                    <input type="radio" name="tabs" id="tab1" checked />
                    <label for="tab1" id="tab-l1">
                        <i class="fas fa-book"></i>
                        <span>Features</span>
                    </label>

                    <input type="radio" name="tabs" id="tab2" />
                    <label for="tab2" id="tab-l2">
                        <i class="fas fa-microchip"></i>
                        <span>Specifications</span>
                    </label>

                    <input type="radio" name="tabs" id="tab3" />
                    <label for="tab3" id="tab-l3">
                        <i class="fas fa-comments"></i>
                        <span>Reviews</span>
                    </label>
                
                    <div id="tab-content1" className="tab-content">
                    <video id="myvideo" src="images/SummarySlide.mp4" style={{width: "100%", marginBottom: "-5%", transitionDelay:" 1s"}} loop="true" autoPlay="true" muted="true"></video>
                    <div class="container">
                        <div class="row row-50 justify-content-xl-between align-items-center">
                            <div class="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall" data-wow-delay=".5s">
                                <div class="unit unit-spacing-1 align-items-center">
                                    <div class="unit-left">
                                        <div class="icon icon-style-1 mdi mdi-clock"></div>
                                    </div>
                                    <div class="unit-body">
                                    <h4>Schedule On/Off</h4>
                                </div>
                    
                    </div>
                    <div class="block-4 offset-top-4">
                                <div class="quote-light-text">
                                    <p class="big">Automate your daily routine tasks by scheduling your appliance(s) to run at a specified time or set a timer to turn on/off your appliance(s) automatically.
                                        eg:</p>
                                </div>
                                <blockquote class="quote-light">
                                    <div class="quote-light-text">
                                        <ul class="list-marked list-marked_secondary">
                                            <li>Switch ON your Mandir/outdoor lights every eveing at 6:15pm and switch OFF at 11:00pm</li>
                                            <li>Switch OFF TV/STB every night at 11:00pm</li>
                                            <li>Set up timings of light and fan in kids/elderly rooms
                                            </li>
                                        </ul>
                                    </div>
                                </blockquote>
                            </div>
                        </div>

                        <div class="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern" data-wow-delay=".5s" id="Schedule">
                                <div class="item">
                                    <img class="d-block w-100" src="images/product1/Feature1.png" alt="Appliance-scheduling-feature" />
                                </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                <div class="row row-50 justify-content-xl-between align-items-center flex-md-row-reverse">
                <div class="col-md-8 col-lg-7 col-xl-6 wow fadeInRightSmall" data-wow-delay=".5s">
                <div class="unit unit-spacing-1 align-items-center">
                                <div class="unit-left">
                                    <div class="icon icon-style-1 mdi mdi-plus-network"></div>
                                </div>
                                <div class="unit-body">
                                    <h4 >Self-reliant lifestyle</h4>
                                </div>
                            </div>
                            <div class="block-4 offset-top-4">
                                <p class="big">With inspiration from "आत्मनिर्भर भारत अभियान", we are comitted to
                                    provide
                                    our customers a
                                    truely self-reliant (आत्मनिर्भर) experience using MIBAiO.</p>
                                    <blockquote class="quote-light">
                                        <div class="quote-light-text">
                                        <ul class="list-marked list-marked_secondary">
                                            <li>Easily manage home appliances without struggling to move from your position</li>
                                            <li>Hands-free experience with voice control feature</li>
                                            <li>Establish a reliable network with our secure IoT cloud and your existing
                                                appliances
                                            </li>
                                        </ul>
                                    </div>
                                </blockquote>
                                <div class="group-buttons-responsive group-middle"></div>
                            </div>  
                    </div>
                    <div class="col-md-4 col-lg-5 wow fadeInLeftSmall left-pattern" data-wow-delay=".5s">
                    <div class="item">
                                    <img src="images/Smart guy.png" alt="smart-guy-using-app" style={{width: "100%"}} />
                                </div>
                        </div>
                </div>    
                </div>
                <div class="container">
                <div class="row row-50 justify-content-xl-between align-items-center">
                <div class="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall" data-wow-delay=".5s"> 
                <div class="unit unit-spacing-1 align-items-center">
                                <div class="unit-left">
                                    <div class="icon icon-style-1 mdi mdi-microphone"></div>
                                </div>
                                <div class="unit-body">
                                    <h4>Voice Control</h4>
                                </div>
                            </div>
                            <div class="block-4 offset-top-4">
                                <p class="big">🗣 "जो हुकूम मेरे आका" Let your voice assistant be your Genie! </p>
                                <blockquote class="quote-light">
                                    <div class="quote-light-text">
                                        <ul class="list-marked list-marked_secondary">
                                            <li>Connect your voice assistant(s) skills with MIBAiO app to enjoy a truely hands-free experience!</li>
                                            <li>Works with leading voice assistants like Alexa, Siri and Google vooice assistant</li>
                                        </ul>
                                    </div>
                                </blockquote>
                            </div>
                </div>
                <div class="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern" data-wow-delay=".5s">
                                <div class="item">
                                     <img src="images/VoiceControliphone-548x793.png" alt="Voice control feature" width="90%;"/>
                                </div>
                        </div>
                    </div> 
                </div>
                </div>
                <div id="tab-content2" class="tab-content">
                <p style={{float:"left"}}>
                    <ul>
                        <li><strong>Product Dimensions ‏ :</strong> ‎ 9 x 9 x 3 cm</li>
                        <li><strong>Date First Available ‏ :</strong> ‎ 1 July 2022</li>
                        <li><strong>Manufacturer ‏ :</strong> ‎ MIBAiO Elmec Smart Automations Pvt. Ltd.</li>
                        <li><strong>Operating frequency ‏ :</strong> ‎ 50Hz-60Hz</li>
                        <li><strong>Operating voltage ‏ :</strong> ‎ 110-240 VAC</li>
                        <li><strong>Communication protocol ‏ :</strong> ‎ WiFi 2.4GHz + Bluetooth 5.0</li>
                        <li><strong>ASIN ‏ :</strong> ‎ B097HF97XP</li>
                        <li><strong>Item model number ‏ :</strong> ‎ MX4S10XX</li>
                        <li><strong>Country of Origin ‏ :</strong> ‎ India</li>
                        <li><strong>Item Weight ‏ :</strong> ‎ 200 g</li>
                        <li><strong>Included Components ‏ :</strong> ‎ 1 x MIBAiO Xtension, Instruction manual</li>
                    </ul>
                </p>
            </div>
            <div id="tab-content3" class="tab-content">
            <Carousel controls={false} indicators = {false} interval ={2000} draggable={true} slide={true} >
                <Carousel.Item>
            <blockquote class="quote-classic"><img class="quote-classic-avatar" src="images/testimonials-1-102x102.jpg" alt="Customer profile image" width="102" height="102"/>
                <div class="quote-classic-text">
                  <p>With MIBAiO installed at my restaurant, I am tension free of all the hassels as I have the real time status of my connected appliances on my phone screen. Best part is, I can control my restaurant lights and fans without replacing them from anywhere in the world!</p>
                </div>
                
                
                <div class="quote-classic-meta">
                  <cite class="quote-classic-cite">Mr. Prasad S</cite>
                  <p class="quote-classic-position">Restaurant Owner</p>
                </div>
                
              </blockquote>
            </Carousel.Item>
            <Carousel.Item>
            <blockquote class="quote-classic"><img class="quote-classic-avatar" src="images/testimonials-2-102x102.jpg" alt="Customer profile image" width="102" height="102"/>
            
                <div class="quote-classic-text">
                  <p>The Voice control feature is really helpful for my mother-in-law who is on a wheelchair! Setting up lights and scenes  with 1 tap whenever guests arrive at my house puts a futuristic tech impression! 😎</p>
                </div>
                
                <div class="quote-classic-meta">
                  <cite class="quote-classic-cite">Mrs. Swati K</cite>
                  <p class="quote-classic-position">House Maker</p>
                </div>
                
              </blockquote>
              </Carousel.Item>
              <Carousel.Item>
              <blockquote class="quote-classic"><img class="quote-classic-avatar" src="images/testimonials-3-102x102.jpg" alt="Customer profile image" width="102" height="102"/>
                <div class="quote-classic-text">
                  <p>As promised, Xtension 4S has upgraded my lifestyle. I like the automatic scheduling feature which runs exactly at time set which reduces my effort and delivers me a delightful experience!<br/>Kudos to MIBAiO team!!</p>
                </div>
                
                <div class="quote-classic-meta">
                  <cite class="quote-classic-cite">Ms. Ankita R</cite>
                  <p class="quote-classic-position">Working Professional</p>
                </div>
              
              </blockquote>
              </Carousel.Item>
              </Carousel>
             
            </div>
                </div>
                   
                {/* ================================================================================================ */}

                {/* Subscribe to Get Notified!*/}
                <section className="section section-md-last block-footer-classic">
                    <div className="block-footer-classic-wrap">
                        <div className="container">
                            <div className="row row-50 justify-content-lg-between">
                                <div className="col-md-6 col-lg-6 wow clipInLeft">
                                    <p className="heading heading-alternate-1 text-white">
                                        Subscribe to Get Notified!
                                    </p>
                                    <p className="big text-white-50">
                                        Sign up to receive updates and fresh
                                        news from us.
                                    </p>
                                    <form
                                        className="rd-form rd-mailform form-inline form-shadow block-11 ot30"
                                        data-form-output="form-output-global"
                                        data-form-type="subscribe"
                                        method="post"
                                    >
                                        {/* action="bat/rd-mailform.php"> */}
                                        <div className="form-wrap">
                                            <input
                                                className="form-input"
                                                placeholder="Enter Your E-mail"
                                                id="subscribe-form-email-11"
                                                type="email"
                                                name="email"
                                                data-constraints="@Email @Required"
                                            />
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
                        {/* Page Footer*/}
                        <footer className="section footer-classic footer-classic_boxed text-white-50 text">
                            <div className="hr container">
                                <hr />
                            </div>
                            <div className="footer-classic-main">
                                <div className="container">
                                    <div className="row row-50 justify-content-lg-between">
                                        <div className="col-sm-7 col-lg-3 col-xl-2">
                                            <a
                                                className="brand"
                                                href="https://mibaio.in/index.html"
                                            >
                                                <img
                                                    src="images/logo-default-96x32.png"
                                                    alt=""
                                                    width={96}
                                                    height={32}
                                                    srcSet="images/logo-default-96x32.png 2x"
                                                />
                                            </a>
                                            <p>
                                                <span
                                                    className="text"
                                                    style={{
                                                        maxWidth: "250px",
                                                    }}
                                                >
                                                    MIBAiO is the leading
                                                    provider of the best
                                                    automation system for your
                                                    smarthome.
                                                </span>
                                            </p>
                                            <Link
                                                to="/login"
                                                className="button button-color-8 button-winona text-black wow fadeIn"
                                                style={{
                                                    animationName: "none",
                                                }}
                                            >
                                                <div className="content-original">
                                                    Sign In
                                                </div>
                                                <div className="content-dubbed">
                                                    Sign In
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-5 col-lg-3 col-xl-2">
                                            <h4 className="footer-classic-title text-white">
                                                About
                                            </h4>
                                            <ul className="list footer-classic-list text-white">
                                                <li>
                                                    <Link to="/about_us">
                                                        About Us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/our_team">
                                                        Our Team
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-7 col-lg-5 col-xl-3">
                                            <h4 className="footer-classic-title text-white">
                                                Useful Links
                                            </h4>
                                            <ul className="list footer-classic-list footer-classic-list_2-cols text-white">
                                                <li>
                                                    <Link to="/register">
                                                        Sign Up
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/careers">
                                                        Careers
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/login">
                                                        Log In
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="https://mibaio.in/#FAQ">
                                                        FAQ
                                                    </a>
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
                                                            <a
                                                                className="big"
                                                                href="tel:+91-9673660515"
                                                            >
                                                                +91-9673660515
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-12 col-lg-4 col-xl-12 text-right text-sm-left">
                                                    <div className="group group-xs">
                                                        <a
                                                            className="link link-social-1 mdi mdi-twitter"
                                                            href="https://mibaio.in/#"
                                                        />
                                                        <a
                                                            className="link link-social-1 mdi mdi-facebook"
                                                            href="https://mibaio.in/#"
                                                        />
                                                        <a
                                                            className="link link-social-1 mdi mdi-instagram"
                                                            href="https://mibaio.in/#"
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
                                        <span className="copyright-year">
                                            2022
                                        </span>
                                        <span>&nbsp;</span>
                                        <span>MIBAiO</span>
                                        <span>.&nbsp;</span>
                                        <a href="https://mibaio.in/privacy-policy.html">
                                            {" "}
                                            Privacy Policy
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </section>
            </div>
            <div className="snackbars" id="form-output-global" />
        </div>
        
    );
};

export default ViewProduct;
