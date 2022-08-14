//import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import home1 from "./home1.png";
import home2 from "./home2.png";
import home3 from "./home3.png";
import home4 from "./home4.png";
import AOS from "aos";
import Typewriter from "typewriter-effect";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import "aos/dist/aos.css";
import "../css/selection.css";
import "../style.css";
// import "../finalcss.css";
import "../css/newcss.css";
import sample1 from "./Sample1.png";
import WOW from "wowjs";
import alpha1 from "./Alpha-Concept_1-black-front.png";
import offset from "./Alpha-Concept_1-offset.png";
import girlvideo from "./girl-using-smart-home-app.mp4";
// import black from "./images/blue.png"
import extensionvid from "./Event.mp4";
import alexagif from "./Hi-Alexa.gif";
import surgeproof from "./Surge-proof.png";
import modeposter from "./3Modeposter.png";
import Chevron from "react-chevron";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "../components/navigationbar";
import CustomFooter from "../components/customfooter";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        defineLordIconElement(loadAnimation);
    }, []);

    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init();
    }, []);

    const [selected, setSelected] = useState(null);

    const [toggleState, setToggleState] = useState(false);

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="qxN6Cw6qgLk"
                onClose={() => setIsOpen(false)}
            />
            <div>
                {/* <div className="preloader loaded" id="loading">
                    <div className="preloader-body">
                        <div id="loading-center-object">
                            <div className="object" id="object_four" />
                            <div className="object" id="object_three" />
                            <div className="object" id="object_two" />
                            <div className="object" id="object_one" />
                        </div>
                    </div>
                </div> */}
                <div className="page ">
                    <section
                        className="section page-header-1 header-section"
                        style={{ background: "#434343" }}
                    >
                        {/* current almost perfect navbar */}

                        <NavigationBar />

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
                                                    Language</span><img src="./MIBAiO Home_files/cleardot.gif" alt="" width={1} height={1} /><span style={{ borderLeft: '1px solid rgb(187, 187, 187)' }}>​</span><img src="images/cleardot.gif" alt="" width={1} height={1} /><span aria-hidden={toggleState ? "true" : "false"} style={{ color: 'rgb(118, 118, 118)' }}>▼</span></a></span></div>
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
                        <div
                            id="belownavbar"
                            className="box-custom-4 bg-default"
                        >
                            <div className="box-custom-4-aside bg-accent">
                                <div className="box-custom-4-aside-decoration">
                                    <div className="box-custom-4-aside-decoration-bg wow clipInLeft"></div>
                                    <div className="box-custom-4-icon-outer">
                                        <span className="box-custom-4-icon"></span>
                                    </div>
                                </div>
                                <div
                                    className="box-custom-4-aside-content wow fadeInRightSmall"
                                    data-wow-delay=".8s"
                                >
                                    <div className="iphone-frame-4-group">
                                        <div
                                            id="carouselExampleSlidesOnly"
                                            className="carousel slide"
                                            data-ride="carousel"
                                            data-easing="ease-in-out"
                                            data-autoplay="true"
                                            data-autoplay-timeout="3500"
                                            data-mouse-drag="true"
                                        >
                                            <div className="carousel-inner">
                                                {/* <div className="carousel-item active">
                                  <img className="d-block w-100" style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} src={alpha1} alt="First slide"/>
                                </div> */}

                                                <video
                                                    width="100%"
                                                    loop
                                                    autoPlay
                                                    muted
                                                >
                                                    <source
                                                        src={girlvideo}
                                                        type="video/mp4"
                                                    />
                                                </video>

                                                {/* <div className="carousel-item">
                                  <img className="d-block" src={offset} alt="Third slide" style={{backgroundPosition: "center",backgroundRepeat: "no-repeat", backgroundSize: "cover"}}/>
                                </div> */}
                                            </div>
                                        </div>
                                        <div className="iphone-frame-4-next element-process">
                                            <span className="icon icon-lg linearicons-envelope" />
                                            <a
                                                href="MIBAiO Brochure.pdf"
                                                target="_blank"
                                            >
                                                <h5 className="text-white iphone-frame-4-next-text">
                                                    Brochure
                                                </h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-custom-4-main">
                                <div className="block-10">
                                    <h2
                                        className="font-weight-bold heading-decoration-2 wow fadeInUp"
                                        data-wow-delay=".4s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.4s",
                                            animationName: "fadeInUp",
                                        }}
                                    >
                                        <span className="text-white">
                                            Automate Your
                                        </span>
                                    </h2>
                                    <h1
                                        className="extra-light text-white heading-decoration-3 wow fadeInUp"
                                        data-wow-delay=".4s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.4s",
                                            animationName: "fadeInUp",
                                        }}
                                    >
                                        {/* <span
                                            className="typed-text text-primary"
                                            data-strings='["phone", "home", " electrical appliances", "lifestyle", "smartphone", "fingers"]'
                                            data-type-speed={60}
                                        >
                                            home
                                        </span> */}
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    "home",
                                                    "routine tasks",
                                                    "appliances",
                                                    "lifestyle",
                                                    "office",
                                                    "fingers",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                wrapperClassName:
                                                    "text-primary notranslate",
                                                cursorClassName:
                                                    "typed-cursor typed-cursor--blink",
                                            }}
                                            initDelay={1000}
                                        />
                                        {/* <span className="typed-cursor typed-cursor--blink">
                                            |
                                        </span> */}
                                    </h1>
                                    <br />
                                    <div
                                        className="wow fadeInUp"
                                        data-wow-delay=".9s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.9s",
                                            animationName: "fadeInUp",
                                        }}
                                    >
                                        <p
                                            className="text-white-50 big wow clipInLeft"
                                            data-wow-delay="1.0s"
                                            style={{
                                                visibility: "visible",
                                                animationDelay: "1s",
                                                animationName: "clipInLeft",
                                            }}
                                        >
                                            Upgrade your existing conventional
                                            electrical appliances to a set of
                                            smart appliances! Control & monitor
                                            from any part of the world with your
                                            smartphone!
                                        </p>
                                    </div>
                                    <br />
                                    <div
                                        className="group wow clipInLeft wow fadeInUp"
                                        data-wow-delay="1.3s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "1.3s",
                                            animationName: "clipInLeft",
                                        }}
                                    >
                                        <a
                                            className="button button-default-outline button-winona"
                                            href="#"
                                            data-wow-duration=".5s"
                                            data-wow-delay=".5s"
                                            style={{
                                                margin: "10px",
                                            }}
                                        >
                                            <div className="content-original">
                                                <div className="content-original">
                                                    Read More
                                                </div>
                                                <div className="content-dubbed">
                                                    Read More
                                                </div>
                                            </div>
                                            <div className="content-dubbed">
                                                <div className="content-original">
                                                    Read More
                                                </div>
                                                <div className="content-dubbed">
                                                    Read More
                                                </div>
                                            </div>
                                        </a>
                                        <Link
                                            to="/view"
                                            className="button button-icon button-icon-right button-secondary button-winona wow clipInLeft wow fadeInUp"
                                            data-wow-delay="1.3s"
                                            href="#"
                                            data-wow-duration=".5s"
                                            style={{
                                                visibility: "visible",
                                                animationDuration: "0.5s",
                                                animationDelay: "1.3s",
                                                animationName: "clipInLeft",
                                                margin: "10px",
                                            }}
                                        >
                                            <div className="content-original">
                                                Buy Now
                                            </div>
                                            <div className="content-dubbed">
                                                Buy Now
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*
                            <div className="container text-center">
                                <span
                                    className="normal text-primary font-weight-bold text-uppercase wow fadeIn"
                                    style={{
                                        visibility: "visible",
                                        animationName: "fadeIn",
                                    }}
                                >
                                    Our Product
                                </span>
                                
                                <h3
                                    className="offset-top-7 font-weight-regular wow fadeIn"
                                    style={{
                                        visibility: "visible",
                                        animationName: "fadeIn",
                                    }}
                                >
                                    Introducing MIBAiO S series
                                </h3>
                                
                               <div className="introducing_4s">
                                   
                                    <button className="elipse_20"></button>
                                    <button className="elipse_24"></button>
                                    <button className="elipse_25"></button>
                                    <button className="elipse_26"></button>                                  
                               
                            </div> 
                                */}

                    <section
                        id="services"
                        className="services section-md section-bg"
                        style={{
                            background:
                                "linear-gradient(180deg, #434343, #000000)",
                        }}
                    >
                        <div className="container">
                            {/* <section> */}

                            <section>
                                <h2
                                    className="offset-top-7 text-center font-weight-regular wow fadeInUp"
                                    style={{
                                        background:
                                            "linear-gradient(270deg, #63DDD1 0%, #1F2EB1 137.5%)",

                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                    data-wow-delay=".4s"
                                >
                                    Xtension 4S
                                </h2>
                                <h5
                                    className="text-center wow-animation wow fadeIn"
                                    data-wow-delay=".4s"
                                    style={{
                                        marginBottom: "20px",
                                        color: "#f1f1f1",
                                    }}
                                >
                                    Designed to simplify your life
                                </h5>

                                <div
                                    className="row features-small mb-5 mt-3 wow fadeIn"
                                    data-wow-delay=".6s"
                                >
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-2">
                                                <i
                                                    className="fas mdi mdi-router-wireless"
                                                    style={{ fontSize: "20px" }}
                                                ></i>
                                            </div>
                                            <div className="col-10">
                                                <h6
                                                    className="feature-title"
                                                    style={{ color: "#BDD4E7" }}
                                                >
                                                    No Hub required
                                                </h6>
                                                <p className="grey-text">
                                                    Does not need any additional
                                                    hub to connect to internet,
                                                    works with any 2.4Ghz
                                                    compatible WiFi router.
                                                </p>
                                                <div
                                                    style={{ height: "15px" }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-2">
                                                <i
                                                    className="mdi mdi-repeat-off"
                                                    style={{ fontSize: "20px" }}
                                                ></i>
                                            </div>
                                            <div className="col-10">
                                                <h6
                                                    className="feature-title"
                                                    style={{ color: "#BDD4E7" }}
                                                >
                                                    No rewiring
                                                </h6>
                                                <p className="grey-text">
                                                    Does not need additional
                                                    rewiring. Easy to install,
                                                    plug and play!
                                                </p>
                                                <div
                                                    style={{ height: "15px" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 flex-center">
                                        <img
                                            src={sample1}
                                            alt="MIBAiO Xtension 4S white"
                                            className="z-depth-0 img-fluid wow fadeInUp"
                                            data-wow-delay=".5s"
                                        />
                                    </div>

                                    <div className="col-md-4 mt-2">
                                        <div className="row">
                                            <div className="col-2">
                                                <i
                                                    className="fas mdi 2x mdi-bluetooth-audio"
                                                    style={{ fontSize: "20px" }}
                                                ></i>
                                            </div>
                                            <div className="col-10">
                                                <h6
                                                    className="feature-title"
                                                    style={{ color: "#BDD4E7" }}
                                                >
                                                    Dual Connectivity
                                                </h6>
                                                <p className="grey-text">
                                                    Bluetooth + WiFi hybrid mode
                                                    ensures that it works
                                                    flawlessly with and without
                                                    internet.
                                                </p>
                                                <div
                                                    style={{ height: "15px" }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-2">
                                                <i
                                                    className="fas mdi 2x mdi-chart-line"
                                                    style={{ fontSize: "20px" }}
                                                ></i>
                                            </div>
                                            <div className="col-10">
                                                <h6
                                                    className="feature-title"
                                                    style={{ color: "#BDD4E7" }}
                                                >
                                                    Enerygy monitoring
                                                </h6>
                                                <p className="grey-text">
                                                    Monitor your energy
                                                    consumption and estimate the
                                                    cost of electricity bills.
                                                </p>
                                                <div
                                                    style={{ height: "15px" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="row" style={{ marginTop: "-10%;" }}>
                                <div
                                    className="col-md-6 col-lg-3 wow fadeInUp"
                                    data-aos="fade-up"
                                    data-wow-delay=".3s"
                                >
                                    <div className="icon-box">
                                        <div className="icon">
                                            <a href="#Security">
                                                {/* <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script> */}
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/kbtmbyzy.json"
                                                    trigger="loop"
                                                    colors="primary:#ffffff,secondary:#4af0ba"
                                                    speed=".7"
                                                    style={{
                                                        width: "50px",
                                                        height: "50px",
                                                    }}
                                                ></lord-icon>
                                            </a>
                                        </div>
                                        <h4 style={{ color: "#BDD4E7" }}>
                                            <a href="#Security">Automation</a>
                                        </h4>
                                        <p className="description">
                                            Schedule your appliances to turn
                                            on/off automatically at desired
                                            timing. Indivisually or
                                            simultaneously!🕖{" "}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-3 wow fadeInUp"
                                    data-aos="fade-up"
                                    data-wow-delay=".4s"
                                >
                                    <div className="icon-box">
                                        <div className="icon">
                                            <a href="#Voice">
                                                <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/fpipqhrr.json"
                                                    trigger="loop"
                                                    colors="primary:#ffffff,secondary:#4af0ba"
                                                    speed=".7"
                                                    stroke={58}
                                                    style={{
                                                        width: "50px",
                                                        height: "50px",
                                                    }}
                                                ></lord-icon>
                                            </a>
                                        </div>
                                        <h4 style={{ color: "#BDD4E7" }}>
                                            <a href="#Voice">Voice Control</a>
                                        </h4>
                                        <p className="description">
                                            Relax yourself completely, 🗣 Let
                                            your voice do the job!
                                            <br /> <br />{" "}
                                            <span
                                                style={{
                                                    fontSize: " 12px",
                                                    opacity: " .8",
                                                }}
                                            >
                                                (PS: Works with Alexa, Siri &
                                                Google)
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-3 wow fadeInUp"
                                    data-aos="fade-up"
                                    data-wow-delay=".5s"
                                >
                                    <div className="icon-box">
                                        <div className="icon">
                                            <a href="#MMC">
                                                <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
                                                <lord-icon
                                                    className="lord"
                                                    src="https://cdn.lordicon.com/gaqzgxto.json"
                                                    trigger="loop"
                                                    colors="primary:#ffffff,secondary:#4af0ba"
                                                    speed=".8"
                                                    style={{
                                                        width: "50px",
                                                        height: "50px",
                                                    }}
                                                ></lord-icon>
                                            </a>
                                        </div>
                                        <h4 style={{ color: "#BDD4E7" }}>
                                            <a href="#MMC">Energy Efficient</a>
                                        </h4>
                                        <p className="description">
                                            Energy savings and advancements you
                                            never imagined! Save upto 26% of
                                            your energy biils! 💚{" "}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-3 wow fadeInUp"
                                    data-aos="fade-up"
                                    data-wow-delay=".6s"
                                >
                                    <div className="icon-box">
                                        <div className="icon">
                                            <a href="#Surge">
                                                <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/iswjnpyk.json"
                                                    trigger="loop"
                                                    colors="primary:#ffffff,secondary:#4af0ba"
                                                    state="hover"
                                                    speed=".5"
                                                    style={{
                                                        width: "50px",
                                                        height: "50px",
                                                    }}
                                                ></lord-icon>
                                            </a>
                                        </div>
                                        <h4 style={{ color: "#BDD4E7" }}>
                                            <a href="#Surge">Shared Access</a>
                                        </h4>
                                        <p className="description">
                                            Share devices with your family 👨‍👩‍👦,
                                            sync state of devices, set more
                                            smart scenes for any space.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <picture>
                        <video
                            style={{
                                width: "100%",
                                transitionDelay: "1s",
                                marginBottom: "-6%",
                            }}
                            loop
                            autoPlay
                            muted
                            playsInline
                        >
                            <source src={extensionvid} type="video/mp4" />
                        </video>
                    </picture>
                    <img src={alexagif} style={{ minWidth: "100%" }} />
                    <section className="section section-md bg-gray-100">
                        <h3
                            className="wow fadeInUp"
                            data-wow-delay=".4s"
                            style={{
                                textAlign: "center",
                                marginBottom: "50px",
                                color: "#697484",
                            }}
                        >
                            Our{" "}
                            <span style={{ color: "#0accbe" }}>
                                most prominent{" "}
                            </span>
                            features
                        </h3>

                        <div className="container" id="Surge">
                            <div className="row row-50 justify-content-xl-between align-items-center">
                                <div
                                    className="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall"
                                    data-wow-delay=".5s"
                                >
                                    <div className="unit unit-spacing-1 align-items-center">
                                        <div className="unit-left">
                                            <div className="icon icon-style-1 mdi mdi-flash"></div>
                                        </div>
                                        <div className="unit-body">
                                            <h3>Surge Proof</h3>
                                        </div>
                                    </div>
                                    <div className="block-4 offset-top-4">
                                        <p className="big"></p>
                                        <blockquote className="quote-light">
                                            <div className="quote-light-text">
                                                <p>
                                                    MIBAiO Xtension 4S is
                                                    equipped with a Positive
                                                    Temperature Coefficient
                                                    Thermister (PTC) to protect
                                                    your electrical appliances
                                                    from accidental voltage
                                                    spikes in alternating
                                                    current (AC) circuits
                                                </p>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                                <div
                                    className="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern"
                                    data-wow-delay=".6s"
                                >
                                    <div className="item">
                                        <img
                                            className="d-block w-100"
                                            src={surgeproof}
                                            alt="Surge-proof-Xtension4S"
                                            width="456"
                                            height="456"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container" id="MMC">
                            <div className="row row-50 justify-content-xl-between align-items-center flex-md-row-reverse">
                                <div className="col-md-8 col-lg-7 col-xl-6 wow fadeInRightSmall">
                                    <div className="unit unit-spacing-1 align-items-center">
                                        <div className="unit-left">
                                            <div className="icon icon-style-1 mdi mdi-access-point-network"></div>
                                        </div>
                                        <div className="unit-body">
                                            <h3>Multi-Mode Control</h3>
                                        </div>
                                    </div>
                                    <div className="block-4 offset-top-4">
                                        <p className="big"></p>
                                        <blockquote className="quote-light">
                                            <div className="quote-light-text">
                                                <p>
                                                    In addition to the
                                                    conventional physical button
                                                    switching, MIBAiO Smart app
                                                    additionally enables you to
                                                    remotely control your smart
                                                    appliances with:
                                                    <br />
                                                    <br />
                                                    <div className="icon icon-style-1 mdi mdi-wifi"></div>{" "}
                                                    Internet <br />
                                                    <br />
                                                    <div className="icon icon-style-1 mdi mdi-bluetooth"></div>{" "}
                                                    Bluetooth
                                                </p>
                                                <div className="group-buttons-responsive group-middle">
                                                    <a
                                                        className="button button-secondary button-winona"
                                                        href="product.php"
                                                    >
                                                        View All Features
                                                    </a>
                                                    <a
                                                        className="button button-default-outline button-winona"
                                                        style={{
                                                            color: "#0accbe",
                                                        }}
                                                        href="product.php"
                                                    >
                                                        Learn More
                                                    </a>
                                                </div>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>

                                <div className="col-md-4 col-lg-5 wow fadeInLeftSmall left-pattern">
                                    <img
                                        className="d-block w-100"
                                        src={modeposter}
                                        alt="AI Chip image"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* About our Company
                    <section className="section section-md bg-gray-100">
                        {/* Custom Software Development
                        {/*Cloud & Network Consulting Services
                        <div className="container" id="Security">
                            <div className="row row-50 justify-content-xl-between align-items-center flex-md-row-reverse">
                                <div
                                    className="col-md-8 col-lg-7 col-xl-6 wow fadeInRightSmall"
                                    style={{
                                        visibility: "visible",
                                        animationName: "fadeInRightSmall",
                                    }}
                                    data-aos="fade-left"
                                >
                                    <div className="unit unit-spacing-1 align-items-center">
                                        <div className="unit-left">
                                            <div className="icon icon-style-1 mdi mdi-security" />
                                        </div>
                                        <div className="unit-body">
                                            <h3>Security</h3>
                                        </div>
                                    </div>
                                    <div className="block-4 offset-top-4">
                                        <p className="big" />
                                        <blockquote className="quote-light">
                                            <div className="quote-light-mark linearicons-quote-open" />
                                            <div className="quote-light-text">
                                                <p>
                                                    MIBAiO regards security of
                                                    your home one of it's top
                                                    priorities and we maintain a
                                                    vigilant stance against
                                                    intruders by keeping our
                                                    security systems up to date.
                                                </p>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                                <div
                                    className="col-md-4 col-lg-5 wow fadeInLeftSmall left-pattern"
                                    style={{
                                        visibility: "visible",
                                        animationName: "fadeInLeftSmall",
                                    }}
                                    data-aos="fade-right"
                                >
                                    {/* Slick Carousel
                                    <div
                                        className="slick-slider-phone-frame-2 slick-style-1 slick-initialized slick-slider"
                                        data-focus-behaviour="true"
                                        data-arrows="true"
                                        data-loop="false"
                                        data-dots="false"
                                        data-swipe="false"
                                        data-speed={700}
                                        data-initial-slide={0}
                                        data-items={2}
                                        data-sm-items={2}
                                        data-md-items={2}
                                        data-lg-items={2}
                                        data-xl-items={2}
                                        data-xxl-items={2}
                                    >
                                        {/* <div className="item">
                                <div className="phone-frame-2"><img className="phone-frame-2-outer"
                                        src="images/iphonex-mockup-1-261x520.png" alt="" width="261" height="520" />
                                    <div className="phone-frame-2-inner"
                                        style="background-image: url(images/SecuritySectioniphone-frame-3-inner-5-300x650.png);">
                                    </div>
                                </div>
                            </div> 
                                        <div
                                            aria-live="polite"
                                            className="slick-list draggable"
                                        >
                                            <div
                                                className="slick-track"
                                                role="listbox"
                                                style={{
                                                    opacity: 1,
                                                    width: "219px",
                                                    transform:
                                                        "translate3d(0px, 0px, 0px)",
                                                }}
                                            >
                                                <div
                                                    className="item slick-slide slick-current slick-active"
                                                    style={{ width: "219px" }}
                                                    tabIndex={-1}
                                                    role="option"
                                                    aria-describedby="slick-slide00"
                                                    data-slick-index={0}
                                                    aria-hidden={toggleState ? "false" : "true"}
                                                >
                                                    <div className="phone-frame-2 feature">
                                                        <img
                                                            className="phone-frame-2-outer"
                                                            src="images/iphonex-mockup-1-261x520.png"
                                                            alt=""
                                                            width={261}
                                                            height={520}
                                                        />
                                                        <div
                                                            className="phone-frame-2-inner"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(images/iphone-frame-3-inner-1-300x650.png)",
                                                            }}
                                                        >
                                                            <video
                                                                id="myvideo"
                                                                src="images/security.mp4"
                                                                loop
                                                                muted
                                                                autoPlay
                                                                playsInline
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container" id="Surge">
                            <div className="row row-50 justify-content-xl-between align-items-center">
                                <div
                                    className="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall"
                                    style={{ animationName: "none" }}
                                    data-aos="fade-left"
                                >
                                    <div className="unit unit-spacing-1 align-items-center">
                                        <div className="unit-left">
                                            <div className="icon icon-style-1 mdi mdi-flash" />
                                        </div>
                                        <div className="unit-body">
                                            <h3>Surge Proof</h3>
                                        </div>
                                    </div>
                                    <div className="block-4 offset-top-4">
                                        <p className="big" />
                                        <blockquote className="quote-light">
                                            <div className="quote-light-mark linearicons-quote-open" />
                                            <div className="quote-light-text">
                                                <p>
                                                    Forgot to switch off the fan
                                                    of your room before going
                                                    out? No worries! <br />
                                                    Get the best home automation
                                                    experience at MIBAiO which
                                                    provides a truely hands-free
                                                    control of your home
                                                    appliances from anywhere{" "}
                                                </p>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                                <div
                                    className="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern"
                                    style={{
                                        visibility: "visible",
                                        animationName: "fadeInRightSmall",
                                    }}
                                    data-aos="fade-right"
                                >
                                    <div
                                        className="slick-slider-phone-frame-2 slick-style-1 slick-initialized slick-slider"
                                        data-focus-behaviour="true"
                                        data-arrows="true"
                                        data-loop="false"
                                        data-dots="false"
                                        data-swipe="false"
                                        data-speed={700}
                                        data-initial-slide={1}
                                        data-items={2}
                                        data-sm-items={2}
                                        data-md-items={2}
                                        data-lg-items={2}
                                        data-xl-items={2}
                                        data-xxl-items={2}
                                    >
                                        {/* <div className="item">
                                <div className="phone-frame-2"><img className="phone-frame-2-outer"
                                        src="images/iphonex-mockup-1-261x520.png" alt="" width="261" height="520" />
                                    <div className="phone-frame-2-inner"
                                        style="background-image:url(images/iphone-frame-3-inner-1-300x650.png);"></div>
                                </div>
                            </div> 
                                        <div
                                            aria-live="polite"
                                            className="slick-list draggable"
                                        >
                                            <div
                                                className="slick-track"
                                                role="listbox"
                                                style={{
                                                    opacity: 1,
                                                    width: "219px",
                                                    transform:
                                                        "translate3d(0px, 0px, 0px)",
                                                }}
                                            >
                                                <div
                                                    className="item slick-slide slick-current slick-active"
                                                    style={{ width: "219px" }}
                                                    tabIndex={-1}
                                                    role="option"
                                                    aria-describedby="slick-slide10"
                                                    data-slick-index={0}
                                                    aria-hidden={toggleState ? "false" : "true"}
                                                >
                                                    <div className="phone-frame-2 feature">
                                                        <img
                                                            className="phone-frame-2-outer"
                                                            src="images/iphonex-mockup-1-261x520.png"
                                                            alt=""
                                                            width={261}
                                                            height={520}
                                                        />
                                                        <div className="phone-frame-2-inner">
                                                            <video
                                                                id="myvideo"
                                                                src="images/surgeproof.mp4"
                                                                loop
                                                                muted
                                                                autoPlay
                                                                playsInline
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container" id="MMC">
                            <div className="row row-50 justify-content-xl-between align-items-center flex-md-row-reverse">
                                <div
                                    className="col-md-8 col-lg-7 col-xl-6 wow fadeInRightSmall"
                                    style={{ animationName: "none" }}
                                    data-aos="fade-left"
                                >
                                    <div className="unit unit-spacing-1 align-items-center">
                                        <div className="unit-left">
                                            <div className="icon icon-style-1 mdi mdi-access-point-network" />
                                        </div>
                                        <div className="unit-body">
                                            <h3>Multi-Mode Control</h3>
                                        </div>
                                    </div>
                                    <div className="block-4 offset-top-4">
                                        <p className="big" />
                                        <blockquote className="quote-light">
                                            <div className="quote-light-mark linearicons-quote-open" />
                                            <div className="quote-light-text">
                                                <p>
                                                    In addition to the classic
                                                    manual control feature,
                                                    MIBAiO enables you to remote
                                                    control your smart home
                                                    through
                                                    <br />
                                                    <br />
                                                </p>
                                                <div className="icon icon-style-1 mdi mdi-wifi" />{" "}
                                                Internet <br />
                                                <br />
                                                <div className="icon icon-style-1 mdi mdi-bluetooth" />
                                                Bluetooth.
                                                <p />
                                                {/* <div className="group-buttons-responsive group-middle"><a className="button button-secondary button-winona" href="model_copy.php">View All
                                            Features</a><a className="button button-default-outline button-winona" style="color:#0accbe" href="about-us.html">Learn More</a></div> 
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                                <div
                                    className="col-md-4 col-lg-5 wow fadeInLeftSmall left-pattern"
                                    style={{ animationName: "none" }}
                                    data-aos="fade-right"
                                >
                                    <div
                                        className="slick-slider-phone-frame-2 slick-style-1 slick-initialized slick-slider"
                                        data-focus-behaviour="true"
                                        data-arrows="true"
                                        data-loop="false"
                                        data-dots="false"
                                        data-swipe="false"
                                        data-speed={700}
                                        data-initial-slide={1}
                                        data-items={2}
                                        data-sm-items={2}
                                        data-md-items={2}
                                        data-lg-items={2}
                                        data-xl-items={2}
                                        data-xxl-items={2}
                                    >
                                        <div
                                            aria-live="polite"
                                            className="slick-list draggable"
                                        >
                                            <div
                                                className="slick-track"
                                                role="listbox"
                                                style={{
                                                    opacity: 1,
                                                    width: "219px",
                                                    transform:
                                                        "translate3d(0px, 0px, 0px)",
                                                }}
                                            >
                                                <div
                                                    className="item slick-slide slick-current slick-active"
                                                    style={{ width: "219px" }}
                                                    tabIndex={-1}
                                                    role="option"
                                                    aria-describedby="slick-slide20"
                                                    data-slick-index={0}
                                                    aria-hidden={toggleState ? "false" : "true"}
                                                >
                                                    <div className="phone-frame-2 feature">
                                                        <img
                                                            className="phone-frame-2-outer"
                                                            src="images/iphonex-mockup-1-261x520.png"
                                                            alt=""
                                                            width={261}
                                                            height={520}
                                                        />
                                                        <div
                                                            className="phone-frame-2-inner"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(images/iphone-frame-3-inner-1-300x650.png)",
                                                            }}
                                                        >
                                                            <video
                                                                id="myvideo"
                                                                src="images/mmc.mp4"
                                                                loop
                                                                muted
                                                                autoPlay
                                                                playsInline
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row row-50 justify-content-xl-between align-items-center">
                                <div
                                    className="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall"
                                    style={{ animationName: "none" }}
                                    data-aos="fade-left"
                                >
                                    <div className="unit unit-spacing-1 align-items-center">
                                        <div className="unit-left">
                                            <div className="icon icon-style-1 mdi mdi-microphone" />
                                        </div>
                                        <div className="unit-body">
                                            <h3>Voice Control</h3>
                                        </div>
                                    </div>
                                    <div className="block-4 offset-top-4">
                                        <p className="big" />
                                        <blockquote className="quote-light">
                                            <div className="quote-light-mark linearicons-quote-open" />
                                            <div className="quote-light-text">
                                                <p>
                                                    Forgot to switch off the fan
                                                    of your room before going
                                                    out? No worries!
                                                    <br />
                                                    Get the best home automation
                                                    experience at MIBAiO which
                                                    provides a truely hands-free
                                                    control of your home
                                                    appliances from anywhere
                                                </p>
                                                <div className="group-buttons-responsive group-middle">
                                                    <a
                                                        className="button button-secondary button-winona"
                                                        href="https://mibaio.in/model_copy.php"
                                                    >
                                                        <div className="content-original">
                                                            View All Features
                                                        </div>
                                                        <div className="content-dubbed">
                                                            View All Features
                                                        </div>
                                                    </a>
                                                    <a
                                                        className="button button-default-outline button-winona"
                                                        style={{
                                                            color: "#0accbe",
                                                        }}
                                                        href="https://mibaio.in/about-us.html"
                                                    >
                                                        <div className="content-original">
                                                            Learn More
                                                        </div>
                                                        <div className="content-dubbed">
                                                            Learn More
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                                <div
                                    className="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern"
                                    id="Voice"
                                    style={{ animationName: "none" }}
                                    data-aos="fade-right"
                                >
                                    <div
                                        className="slick-slider-phone-frame-2 slick-style-1 slick-initialized slick-slider"
                                        data-focus-behaviour="true"
                                        data-arrows="true"
                                        data-loop="false"
                                        data-dots="false"
                                        data-swipe="false"
                                        data-speed={700}
                                        data-initial-slide={1}
                                        data-items={2}
                                        data-sm-items={2}
                                        data-md-items={2}
                                        data-lg-items={2}
                                        data-xl-items={2}
                                        data-xxl-items={2}
                                    >
                                        {/* <div className="item">
                                    <div className="phone-frame-2"><img className="phone-frame-2-outer"
                                            src="images/iphonex-mockup-1-261x520.png" alt="" width="261" height="520" />
                                        <div className="phone-frame-2-inner"
                                            style="background-image: url(images/VoiceControliphone-frame-3-inner-8-300x650.png);">
                                        </div>
                                    </div>
                                </div> 
                                        <div
                                            aria-live="polite"
                                            className="slick-list draggable"
                                        >
                                            <div
                                                className="slick-track"
                                                role="listbox"
                                                style={{
                                                    opacity: 1,
                                                    width: "219px",
                                                    transform:
                                                        "translate3d(0px, 0px, 0px)",
                                                }}
                                            >
                                                <div
                                                    className="item slick-slide slick-current slick-active"
                                                    style={{ width: "219px" }}
                                                    tabIndex={-1}
                                                    role="option"
                                                    aria-describedby="slick-slide30"
                                                    data-slick-index={0}
                                                    aria-hidden={toggleState ? "false" : "true"}
                                                >
                                                    <div className="phone-frame-2 feature">
                                                        <img
                                                            className="phone-frame-2-outer"
                                                            src="images/iphonex-mockup-1-261x520.png"
                                                            alt=""
                                                            width={261}
                                                            height={520}
                                                        />
                                                        <div
                                                            className="phone-frame-2-inner"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(images/iphone-frame-3-inner-1-300x650.png)",
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className="section section-box-custom-3-outer"
                        id="about-us"
                    >
                        {/* Simple and Clear steps*
                        <section
                            className="parallax-container section-lg section-box-custom-3 section-bottom-0 text-center"
                            data-parallax-img="images/bg-image-1.jpg"
                        >
                            <div className="material-parallax parallax">
                                <img
                                    src="images/bg-image-1.jpg"
                                    alt=""
                                    style={{ display: "block" }}
                                />
                            </div>
                            <div className="parallax-content">
                                <div className=" container context-dark">
                                    <span
                                        className="normal text-white font-weight-bold text-uppercase wow fadeIn"
                                        style={{ animationName: "none" }}
                                    >
                                        About Our Company
                                    </span>
                                    <h3
                                        className="offset-top-7 font-weight-regular typed-text-heading wow fadeIn"
                                        data-wow-delay=".1s"
                                        style={{
                                            animationDelay: "0.1s",
                                            animationName: "none",
                                        }}
                                    >
                                        <span>We</span>
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    "are a startup",
                                                    "strive towards innovation",
                                                    "automate your existing home appliances",
                                                    "help you upgrade your lifestyle",
                                                    "deliver you delightful experiences",
                                                    "design for you",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                wrapperClassName:
                                                    "text-primary",
                                                cursorClassName:
                                                    "typed-cursor typed-cursor--blink",
                                            }}
                                        />
                                    </h3>
                                    <p
                                        className="wow fadeIn"
                                        data-wow-delay=".2s"
                                        style={{
                                            animationDelay: "0.2s",
                                            animationName: "none",
                                        }}
                                    >
                                        <span style={{ maxWidth: "800px" }}>
                                            We are here to change the Smart Home
                                            Ecosystem in India <br />
                                            And we invite you to take a front
                                            seat in this revolution.
                                            <br />
                                            Video coming up soon!
                                        </span>
                                    </p>
                                    {/* <a className="button-play mdi mdi-play mdi-24px wow fadeIn" href="https://youtu.be/sJ4Ho9A_v_8" data-lightgallery="item" data-wow-delay=".3s">
                            <svg className="button-play-shape" width="86" height="86" viewbox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
                                <rect x="1" y="1" width="86" height="86" rx="6" ry="6"></rect>
                            </svg></a> 
                                    <div
                                        id="play-video"
                                        className="video-play-button"
                                        onClick={() => setIsOpen(true)}
                                        style={{
                                            cursor: "pointer",
                                        }}
                                    >
                                        <span />
                                    </div>
                                    {/* <div
                                        id="video-overlay"
                                        className="video-overlay-class"
                                    > */}
                    {/*<a className="video-overlay-close">&times;</a>
                                    {/* </div> 
                                </div>
                                <div
                                    className="box-custom-3-container container wow slideInUpSmall"
                                    style={{ animationName: "none" }}
                                >
                                    <div className="box-custom-3">
                                        <div className="layout-bordered-1">
                                            <div className="layout-bordered-1-item">
                                                {/* Counter Classic
                                                <article
                                                    className="counter-classic wow clipInLeft"
                                                    style={{
                                                        animationName: "none",
                                                    }}
                                                >
                                                    <div className="counter-classic-main">
                                                        <div className="counter">
                                                            3
                                                        </div>
                                                        <span className="small text-primary">
                                                            +
                                                        </span>
                                                    </div>
                                                    <h4 className="counter-classic-title text-black extra-lighter">
                                                        Modes <br /> of control
                                                    </h4>
                                                </article>
                                            </div>
                                            <div className="layout-bordered-1-item">
                                                {/* Counter Classic
                                                <article
                                                    className="counter-classic wow clipInLeft"
                                                    data-wow-delay=".1s"
                                                    style={{
                                                        animationDelay: "0.1s",
                                                        animationName: "none",
                                                    }}
                                                >
                                                    <div className="counter-classic-main">
                                                        <div className="counter">
                                                            14
                                                        </div>
                                                        <span className="small text-primary">
                                                            k
                                                        </span>
                                                    </div>
                                                    <h4 className="counter-classic-title extra-lighter">
                                                        Lines <br /> of code
                                                    </h4>
                                                </article>
                                            </div>
                                            <div className="layout-bordered-1-item">
                                                {/* Counter Classic
                                                <article
                                                    className="counter-classic wow clipInLeft"
                                                    data-wow-delay=".2s"
                                                    style={{
                                                        animationDelay: "0.2s",
                                                        animationName: "none",
                                                    }}
                                                >
                                                    <div className="counter-classic-main">
                                                        <div className="counter">
                                                            5
                                                        </div>
                                                        <span className="small text-primary">
                                                            yrs
                                                        </span>
                                                    </div>
                                                    <h4 className="counter-classic-title extra-lighter">
                                                        Of warranty <br />{" "}
                                                        MIBAiO guarantee
                                                    </h4>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                    
                    <section
                        id="more-services"
                        className="section section-md more-services"
                    >
                        <div className="container">
                            <h3
                                className="offset-top-7 font-weight-regular wow fadeIn text-center"
                                style={{ animationName: "none" }}
                            >
                                Our Vision and Mission
                            </h3>
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay=".3s"
                                        style={{
                                            backgroundImage:
                                                'url("images/vission.jpg")',
                                            animationDelay: "0.3s",
                                            animationName: "none",
                                        }}
                                    >
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a href="https://mibaio.in/">
                                                    Our Vision
                                                </a>
                                            </h4>
                                            <p className="card-text">
                                                To make India renowned for
                                                quality design and technology
                                            </p>
                                            <div className="read-more">
                                                <a href="https://mibaio.in/about-us.html">
                                                    <i className="bi bi-arrow-right" />{" "}
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                    <div
                                        className="card wow fadeInUp"
                                        data-wow-delay=".4s"
                                        style={{
                                            backgroundImage:
                                                'url("images/mission.jpg")',
                                            animationDelay: "0.4s",
                                            animationName: "none",
                                        }}
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a href="https://mibaio.in/">
                                                    Our Mission
                                                </a>
                                            </h4>
                                            <p className="card-text">
                                                To revolutionize the smart home
                                                ecosystem in India and make
                                                technology available to every
                                                household in the country
                                            </p>
                                            <div className="read-more">
                                                <a href="https://mibaio.in/about-us.html">
                                                    <i className="bi bi-arrow-right" />{" "}
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        id="services-1"
                        className="services-1 section section-md bg-gray-3 text-center"
                    >
                        <div className="container">
                            <div className="container">
                                <span
                                    className="normal text-primary font-weight-bold text-uppercase wow fadeIn"
                                    style={{ animationName: "none" }}
                                >
                                    Our Website
                                </span>
                                <h3
                                    className="offset-top-7 font-weight-regular wow fadeIn"
                                    style={{ animationName: "none" }}
                                >
                                    How It Works
                                </h3>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div
                                        className="icon-box wow fadeInRight"
                                        data-wow-delay=".4s"
                                        style={{
                                            animationDelay: "0.4s",
                                            animationName: "none",
                                        }}
                                    >
                                        <div className="icon">
                                            <img
                                                className="img-fluid"
                                                src="images/select.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="title">
                                            Select your favourite model
                                        </h4>
                                        <p className="description">
                                            Select the model that suits your
                                            needs from our collection of best
                                            price models
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div
                                        className="icon-box wow fadeInLeft"
                                        data-wow-delay=".55s"
                                        style={{
                                            animationDelay: "0.55s",
                                            animationName: "none",
                                        }}
                                    >
                                        <div className="icon">
                                            <img
                                                className="img-fluid"
                                                src="images/cart.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="title">
                                            Add it to your cart
                                        </h4>
                                        <p className="description">
                                            Add it to your cart to ponder over
                                            it
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div
                                        className="icon-box wow fadeInLeft"
                                        data-wow-delay=".7s"
                                        style={{
                                            animationDelay: "0.7s",
                                            animationName: "none",
                                        }}
                                    >
                                        <div className="icon">
                                            <img
                                                className="img-fluid"
                                                src="images/select.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="title">
                                            Click on the Checkout button to Buy
                                        </h4>
                                        <p className="description">
                                            Click on that Checkout button to buy
                                            yourself a smart home{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div
                                        className="icon-box wow fadeInLeft"
                                        data-wow-delay=".85s"
                                        style={{
                                            animationDelay: "0.85s",
                                            animationName: "none",
                                        }}
                                    >
                                        <div className="icon">
                                            <img
                                                className="img-fluid"
                                                src="images/home.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="title">
                                            Go to Your Home Dashboard
                                        </h4>
                                        <p className="description">
                                            <strong>Login</strong> and go to
                                            your Home's dashboard to start
                                            experiencing the feel of a truly
                                            smart home
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                    </section>*/}
                    {/* Pricing plans */}
                    {/* <section
                        className="parallax-container section-lg text-center"
                        data-parallax-img="images/bg-image-2.jpg"
                    >
                        <div className="material-parallax parallax">
                            <img
                                src="images/bg-image-2.jpg"
                                alt=""
                                style={{ display: "block" }}
                            />
                        </div>
                        <div className="parallax-content">
                            <div className="container context-dark">
                                <span
                                    className="normal text-white font-weight-bold text-uppercase wow fadeIn"
                                    style={{ animationName: "none" }}
                                >
                                    Pricing plans
                                </span>
                                <h3
                                    className="offset-top-7 wow fadeIn"
                                    data-wow-delay=".1s"
                                    style={{
                                        animationDelay: "0.1s",
                                        animationName: "none",
                                    }}
                                >
                                    Choose Your MIBAiO model
                                </h3>
                                <p
                                    className="wow fadeIn"
                                    data-wow-delay=".25s"
                                    style={{
                                        animationDelay: "0.25s",
                                        animationName: "none",
                                    }}
                                >
                                    <span style={{ maxWidth: "700px" }}>
                                        We offer three different models that
                                        cover you needs of home automation. They
                                        are provided via different modes of
                                        control to automate your aplliances
                                        according to your convenience.
                                    </span>
                                </p>
                                <div
                                    className="toggle-modern"
                                    aria-label="Pricing Switch Monthly/Yearly"
                                    id="pt-classic-toggle"
                                >
                                    <div className="toggle-modern-text toggle-modern-text_default">
                                        upto 10 outputs
                                    </div>
                                    <button
                                        className="toggle-modern-switch content-toggle"
                                        data-multitoggle="#pt-classic, #pt-classic-toggle"
                                    >
                                        <span className="toggle-modern-switch-element" />
                                    </button>
                                    <div className="toggle-modern-text toggle-modern-text_alternate">
                                        upto 30 outputs
                                    </div>
                                </div>
                            </div>
                            <div className="container ot50">
                                 {/* Pricing Table Classic */}
                    {/* <div
                                    className="pt-classic-group"
                                    id="pt-classic"
                                >
                                     Owl Carousel
                                    <div
                                        className="owl-carousel owl-carousel_type-2 owl-loaded"
                                        data-items={1}
                                        data-md-items={2}
                                        data-lg-items={3}
                                        data-dots="false"
                                        data-nav="true"
                                        data-stage-padding={0}
                                        data-loop="false"
                                        data-margin={30}
                                        data-lg-margin={20}
                                        data-xl-margin={30}
                                        data-mouse-drag="false"
                                        style={{}}
                                    >
                                        <div className="owl-stage-outer">
                                            <div
                                                className="owl-stage"
                                                style={{
                                                    transform:
                                                        "translate3d(0px, 0px, 0px)",
                                                    transition:
                                                        "all 0s ease 0s",
                                                    width: "1200px",
                                                }}
                                            >
                                                <div
                                                    className="owl-item active"
                                                    style={{
                                                        width: "370px",
                                                        marginRight: "30px",
                                                    }}
                                                    data-aos="fade-left"
                                                >
                                                    <article
                                                        className="pt-classic wow slideInRightLg"
                                                        data-wow-delay=".5s"
                                                        style={{
                                                            animationDelay:
                                                                "0.5s",
                                                            animationName:
                                                                "none",
                                                        }}
                                                    >
                                                        <h4 className="pt-classic-title">
                                                            Basic
                                                        </h4>
                                                        <div className="pt-classic-price-outer">
                                                            <div
                                                                className="pt-classic-price"
                                                                aria-hidden={toggleState ? "false" : "true"}
                                                            >
                                                                <div className="pt-classic-price-currency font-weight-regular">
                                                                    {" "}
                                                                    ₹
                                                                </div>
                                                                <div className="pt-classic-price-value extra-light">
                                                                    1499
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="pt-classic-price"
                                                                aria-hidden={toggleState ? "true" : "false"}
                                                            >
                                                                <div className="pt-classic-price-currency font-weight-regular">
                                                                    {" "}
                                                                    ₹
                                                                </div>
                                                                <div className="pt-classic-price-value extra-light">
                                                                    2499
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-classic-divider" />
                                                        <ul className="pt-classic-list">
                                                            <li>
                                                                Control upto 10
                                                                appliances
                                                            </li>
                                                            <li>
                                                                FREE
                                                                installation
                                                            </li>
                                                            <li>
                                                                Manual control
                                                            </li>
                                                            <li>
                                                                Bluetooth
                                                                control
                                                            </li>
                                                            <li aria-disabled="true">
                                                                Internet control
                                                            </li>
                                                            <li aria-disabled="true">
                                                                Voice control
                                                            </li>
                                                            <li aria-disabled="true">
                                                                Upgrade more
                                                                outputs
                                                            </li>
                                                        </ul>
                                                        <div className="pt-classic-footer">
                                                            <a
                                                                className="button button-default-outline button-icon button-icon-right button-winona font-weight-regular"
                                                                href="https://mibaio.in/#"
                                                            >
                                                                <div className="content-original">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                                <div className="content-dubbed">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </article>
                                                </div>
                                                <div
                                                    className="owl-item active"
                                                    style={{
                                                        width: "370px",
                                                        marginRight: "30px",
                                                    }}
                                                    data-aos="fade-up"
                                                >
                                                    <article
                                                        className="pt-classic pt-classic_style-2 pt-classic_preferred wow scaleIn"
                                                        style={{
                                                            animationName:
                                                                "none",
                                                        }}
                                                    >
                                                        <div className="pt-classic-header">
                                                            <h4 className="pt-classic-title">
                                                                Premium
                                                            </h4>
                                                            <div className="pt-classic-price-outer">
                                                                <div
                                                                    className="pt-classic-price"
                                                                    aria-hidden={toggleState ? "true" : "false"}
                                                                >
                                                                    <div className="pt-classic-price-currency font-weight-regular">
                                                                        {" "}
                                                                        ₹
                                                                    </div>
                                                                    <div className="pt-classic-price-value extra-light">
                                                                        4699
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="pt-classic-price"
                                                                    aria-hidden={toggleState ? "false" : "true"}
                                                                >
                                                                    <div className="pt-classic-price-currency font-weight-regular">
                                                                        {" "}
                                                                        ₹
                                                                    </div>
                                                                    <div className="pt-classic-price-value extra-light">
                                                                        2999
                                                                    </div>
                                                                </div>
                                                                <div className="badge badge-1">
                                                                    Save 20%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-classic-divider" />
                                                        <ul className="pt-classic-list">
                                                            <li>
                                                                Control upto 10
                                                                appliances
                                                            </li>
                                                            <li>
                                                                FREE
                                                                installation
                                                            </li>
                                                            <li>
                                                                Manual Control
                                                            </li>
                                                            <li>
                                                                Internet Control
                                                            </li>
                                                            <li>
                                                                Bluetooth
                                                                Control
                                                            </li>
                                                            <li>
                                                                Voice control
                                                            </li>
                                                            <li>
                                                                Upgrade more
                                                                outputs
                                                            </li>
                                                        </ul>
                                                        <div className="pt-classic-footer">
                                                            <a
                                                                className="button button-secondary button-shadow button-icon button-icon-right button-winona font-weight-regular"
                                                                href="https://mibaio.in/#"
                                                            >
                                                                <div className="content-original">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                                <div className="content-dubbed">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                            </a>
                                                            <p className="pt-classic-note text-transparent">
                                                                #Vedant
                                                                recommends
                                                            </p>
                                                        </div>
                                                    </article>
                                                </div>
                                                <div
                                                    className="owl-item active"
                                                    style={{
                                                        width: "370px",
                                                        marginRight: "30px",
                                                    }}
                                                    data-aos="fade-right"
                                                >
                                                    <article
                                                        className="pt-classic pt-classic_style-3 wow slideInLeftLg"
                                                        data-wow-delay=".5s"
                                                        style={{
                                                            animationDelay:
                                                                "0.5s",
                                                            animationName:
                                                                "none",
                                                        }}
                                                    >
                                                        <h4 className="pt-classic-title">
                                                            Standard
                                                        </h4>
                                                        <div className="pt-classic-price-outer">
                                                            <div
                                                                className="pt-classic-price"
                                                                aria-hidden={toggleState ? "false" : "true"}
                                                            >
                                                                <div className="pt-classic-price-currency font-weight-regular">
                                                                    {" "}
                                                                    ₹
                                                                </div>
                                                                <div className="pt-classic-price-value extra-light">
                                                                    2199
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="pt-classic-price"
                                                                aria-hidden={toggleState ? "true" : "false"}
                                                            >
                                                                <div className="pt-classic-price-currency font-weight-regular">
                                                                    {" "}
                                                                    ₹
                                                                </div>
                                                                <div className="pt-classic-price-value extra-light">
                                                                    5199
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-classic-divider" />
                                                        <ul className="pt-classic-list">
                                                            <li>
                                                                Control upto 10
                                                                appliances
                                                            </li>
                                                            <li>
                                                                FREE
                                                                installation
                                                            </li>
                                                            <li>
                                                                Manual control
                                                            </li>
                                                            <li>
                                                                Internet control
                                                            </li>
                                                            <li>
                                                                Voice control
                                                            </li>
                                                            <li aria-disabled="true">
                                                                Bluetooth
                                                                control
                                                            </li>
                                                            <li aria-disabled="true">
                                                                Upgrade more
                                                                outputs
                                                            </li>
                                                        </ul>
                                                        <div className="pt-classic-footer">
                                                            <a
                                                                className="button button-default-outline button-icon button-icon-right button-winona font-weight-regular"
                                                                href="https://mibaio.in/#"
                                                            >
                                                                <div className="content-original">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                                <div className="content-dubbed">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-nav disabled">
                                            <div className="owl-prev disabled" />
                                            <div className="owl-next disabled" />
                                        </div>
                                        <div className="owl-dots disabled" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* Popular Questions
                    <section
                        id="FAQ"
                        className="section section-md bg-gray-100 text-center wow fadeInUp"
                        data-wow-delay=".3s"
                        style={{
                            animationDelay: "0.3s",
                            animationName: "none",
                        }}
                    >
                        <div className=" container">
                            <span
                                className="normal text-primary font-weight-bold text-uppercase wow fadeIn"
                                style={{ animationName: "none" }}
                            >
                                Popular Questions
                            </span>
                            <h3
                                className="offset-top-7 wow fadeIn"
                                data-wow-delay=".1s"
                                style={{
                                    animationDelay: "0.1s",
                                    animationName: "none",
                                }}
                            >
                                Frequently Asked Questions
                            </h3>
                            <div
                                className="row row-30 justify-content-center justify-content-lg-start wow fadeIn"
                                id="app-accordion"
                                data-wow-delay=".2s"
                                style={{
                                    animationDelay: "0.2s",
                                    animationName: "none",
                                }}
                            >
                                <div className="col-md-10 col-lg-6">
                                    {/* Bootstrap Collapse
                                    <div
                                        className="card-group-custom card-group-classic card-group-classic_1"
                                        role="tablist"
                                        aria-multiselectable="false"
                                    >
                                        {/* Bootstrap card
                                        <article className="card card-custom card-classic active">
                                            <div
                                                className="card-header"
                                                id="app-accordion-heading-4"
                                                role="tab"
                                            >
                                                <div className="card-title">
                                                    <a
                                                        className="card-link"
                                                        role="button"
                                                        data-toggle="collapse"
                                                        href="#app-accordion-collapse-4"
                                                        aria-controls="app-accordion-collapse-4"
                                                        aria-expanded="true"
                                                    >
                                                        What does "MIBAiO" mean?
                                                        <div className="card-arrow" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse show"
                                                id="app-accordion-collapse-4"
                                                role="tabpanel"
                                                aria-labelledby="app-accordion-heading-4"
                                                data-parent="#app-accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        MIBAiO is an acronym for
                                                        Manual Internet
                                                        Bluetooth All In One.{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        {/* Bootstrap card
                                        <article className="card card-custom card-classic">
                                            <div
                                                className="card-header"
                                                id="app-accordion-heading-1"
                                                role="tab"
                                            >
                                                <div className="card-title">
                                                    <a
                                                        className="card-link collapsed"
                                                        role="button"
                                                        data-toggle="collapse"
                                                        href="https://mibaio.in/#app-accordion-collapse-1"
                                                        aria-controls="app-accordion-collapse-1"
                                                        aria-expanded="false"
                                                    >
                                                        What are the key
                                                        features of your
                                                        product?
                                                        <div className="card-arrow" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse"
                                                id="app-accordion-collapse-1"
                                                role="tabpanel"
                                                aria-labelledby="app-accordion-heading-1"
                                                data-parent="#app-accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Our product offers
                                                        Manual, Internet and
                                                        Bluetooth all-in-one
                                                        functionality along with
                                                        voice control. To know
                                                        more about key features,
                                                        please refer the product
                                                        brochure.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        {/* Bootstrap card
                                        <article className="card card-custom card-classic">
                                            <div
                                                className="card-header"
                                                id="app-accordion-heading-2"
                                                role="tab"
                                            >
                                                <div className="card-title">
                                                    <a
                                                        className="card-link collapsed"
                                                        role="button"
                                                        data-toggle="collapse"
                                                        href="https://mibaio.in/#app-accordion-collapse-2"
                                                        aria-controls="app-accordion-collapse-2"
                                                        aria-expanded="false"
                                                    >
                                                        Why should I purchase
                                                        your product?
                                                        <div className="card-arrow" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse"
                                                id="app-accordion-collapse-2"
                                                role="tabpanel"
                                                aria-labelledby="app-accordion-heading-2"
                                                data-parent="#app-accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        The major advantage is
                                                        price: You get a premium
                                                        model under ₹3000. You
                                                        don’t have to call an
                                                        electrician for
                                                        installation, we make it
                                                        very easy to install for
                                                        you. Second advantage is
                                                        Made in INDIA: Our
                                                        product is carefully
                                                        designed for a standard
                                                        Indian household of
                                                        world-class quality. We
                                                        are working under the
                                                        Make in India, Digital
                                                        India, Aatmanirbhar
                                                        Bharat initiatives.{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-md-10 col-lg-6">
                                    {/* Bootstrap Collapse 
                                    <div
                                        className="card-group-custom card-group-classic card-group-classic_1"
                                        role="tablist"
                                        aria-multiselectable="false"
                                    >
                                        {/* Bootstrap card
                                        <article
                                            className="card card-custom card-classic wow clipInLeft"
                                            style={{ animationName: "none" }}
                                        >
                                            <div
                                                className="card-header"
                                                id="app-accordion-heading-3"
                                                role="tab"
                                            >
                                                <div className="card-title">
                                                    <a
                                                        className="card-link collapsed"
                                                        role="button"
                                                        data-toggle="collapse"
                                                        href="https://mibaio.in/#app-accordion-collapse-3"
                                                        aria-controls="app-accordion-collapse-3"
                                                        aria-expanded="false"
                                                    >
                                                        Do you provide post
                                                        sales service?
                                                        <div className="card-arrow" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse"
                                                id="app-accordion-collapse-3"
                                                role="tabpanel"
                                                aria-labelledby="app-accordion-heading-3"
                                                data-parent="#app-accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Yes, we do. Our team is
                                                        ready for your support
                                                        24x7x365 with our
                                                        qualified Engineers.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        {/* Bootstrap card
                                        {/* Bootstrap card
                                        <article className="card card-custom card-classic">
                                            <div
                                                className="card-header"
                                                id="app-accordion-heading-6"
                                                role="tab"
                                            >
                                                <div className="card-title">
                                                    <a
                                                        className="card-link collapsed"
                                                        role="button"
                                                        data-toggle="collapse"
                                                        href="https://mibaio.in/#app-accordion-collapse-6"
                                                        aria-controls="app-accordion-collapse-6"
                                                        aria-expanded="false"
                                                    >
                                                        Does your product
                                                        control the speed of fan
                                                        digitally?
                                                        <div className="card-arrow" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse"
                                                id="app-accordion-collapse-6"
                                                role="tabpanel"
                                                aria-labelledby="app-accordion-heading-6"
                                                data-parent="#app-accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        No as of now. But you'll
                                                        get that funtion in the
                                                        upcoming versions of
                                                        MIBAiO.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="card card-custom card-classic">
                                            <div
                                                className="card-header"
                                                id="app-accordion-heading-5"
                                                role="tab"
                                            >
                                                <div className="card-title">
                                                    <a
                                                        className="card-link collapsed"
                                                        role="button"
                                                        data-toggle="collapse"
                                                        href="#app-accordion-collapse-5"
                                                        aria-controls="app-accordion-collapse-5"
                                                        aria-expanded="false"
                                                    >
                                                        What can I do with your
                                                        product?
                                                        <div className="card-arrow" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse"
                                                id="app-accordion-collapse-5"
                                                role="tabpanel"
                                                aria-labelledby="app-accordion-heading-5"
                                                data-parent="#app-accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Talk to your home
                                                        appliances with Alexa
                                                        and Google voice
                                                        assistant. Control your
                                                        exising appliances with
                                                        your smartphone and also
                                                        manually(like we do now
                                                        using the traditional
                                                        switches). Apart from
                                                        that, you can monitor
                                                        your electricity
                                                        consumption by wach
                                                        connected appliance via
                                                        your smartphone App.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Download our App
                    <section className="section section-md text-center">
                        <div className="container">
                            <span
                                className="normal text-primary font-weight-bold text-uppercase wow fadeIn"
                                style={{ animationName: "none" }}
                            >
                                Home 2.0
                            </span>
                            <h3
                                className="offset-top-7 wow fadeIn"
                                data-wow-delay=".1s"
                                style={{
                                    animationDelay: "0.1s",
                                    animationName: "none",
                                }}
                            >
                                Step into the future, Upgrade to MIBAiO
                            </h3>
                            <p
                                className="wow fadeIn"
                                data-wow-delay=".2s"
                                style={{
                                    animationDelay: "0.2s",
                                    animationName: "none",
                                }}
                            >
                                <span
                                    style={{
                                        maxWidth: "720px",
                                        opacity: ".65",
                                    }}
                                >
                                    It’s time to upgrade your home and
                                    experience the futuristic smart home!
                                    Contact us directly to enhance your smart
                                    home experience.
                                </span>
                            </p>
                        </div>
                        <div className="group">
                            <a
                                className="button button-default-outline button-winona text-black wow fadeIn"
                                href="https://mibaio.in/#"
                                data-wow-delay=".1s"
                                style={{
                                    animationDelay: "0.1s",
                                    animationName: "none",
                                }}
                            >
                                <div className="content-original">
                                    <span />
                                    View More
                                </div>
                                <div className="content-dubbed">
                                    <span />
                                    View More
                                </div>
                            </a>
                            <a
                                className="button button-secondary button-winona wow fadeIn"
                                href="https://mibaio.in/contact-us.html"
                                data-wow-delay=".1s"
                                style={{
                                    animationDelay: "0.1s",
                                    animationName: "none",
                                }}
                            >
                                <div className="content-original">
                                    <span />
                                    Contact Us
                                </div>
                                <div className="content-dubbed">
                                    <span />
                                    Contact Us
                                </div>
                            </a>
                        </div>
                        <div className="layer-01 section-decoration-4-decoration">
                            <img
                                className="layer"
                                src="./MIBAiO Home_files/landscape_1.svg"
                                alt=""
                                data-depth="0.15"
                            />
                            <img
                                className="layer"
                                src="images/landscape_2-3.svg"
                                alt=""
                                data-depth="0.3"
                            />
                        </div>
                    </section>
                    {/* Subscribe to Get Notified! */}

                    <section
                        className="parallax-container section-lg section-box-custom-3 section-bottom-0 text-center"
                        data-parallax-img="images/bg-image-1.jpg"
                    >
                        <div className="material-parallax parallax">
                            <img
                                src="images/bg-image-1.jpg"
                                alt=""
                                style={{ display: "block" }}
                            />
                        </div>
                        <div className="parallax-content">
                            <div className=" container context-dark">
                                <span
                                    className="normal text-white font-weight-bold text-uppercase wow fadeIn"
                                    style={{ animationName: "none" }}
                                >
                                    About MIBAiO
                                </span>
                                <h3
                                    className="offset-top-7 font-weight-regular typed-text-heading wow fadeIn"
                                    data-wow-delay=".1s"
                                    style={{
                                        animationDelay: "0.1s",
                                        animationName: "none",
                                    }}
                                >
                                    <span>MIBAiO</span>
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "is a startup",
                                                "strives towards innovation",
                                                "automates your existing home appliances",
                                                "upgrades your lifestyle",
                                                "delivers you delightful experiences",
                                                "is designed for you",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            wrapperClassName: "text-primary",
                                            cursorClassName:
                                                "typed-cursor typed-cursor--blink",
                                        }}
                                        initDelay={1000}
                                    />
                                </h3>
                                <p
                                    className="wow fadeIn"
                                    data-wow-delay=".2s"
                                    style={{
                                        animationDelay: "0.2s",
                                        animationName: "none",
                                    }}
                                >
                                    <span style={{ maxWidth: "800px" }}>
                                        We are on a mission to transform the
                                        Smart Home Ecosystem in India <br />
                                        And we invite you to take a front seat
                                        in this
                                    </span>
                                </p>
                                {/* <a className="button-play mdi mdi-play mdi-24px wow fadeIn" href="https://youtu.be/qxN6Cw6qgLk" data-lightgallery="item" data-wow-delay=".3s">
                            <svg className="button-play-shape" width="86" height="86" viewbox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
                                <rect x="1" y="1" width="86" height="86" rx="6" ry="6"></rect>
                            </svg></a>  */}
                                <div
                                    id="play-video"
                                    className="video-play-button"
                                    onClick={() => setIsOpen(true)}
                                    style={{
                                        cursor: "pointer",
                                    }}
                                >
                                    <span />
                                </div>
                                <div
                                    id="video-overlay"
                                    className="video-overlay-class"
                                >
                                    {/* <a className="video-overlay-close">&times;</a> */}
                                </div>
                            </div>
                            <div className="box-custom-3-container container wow slideInUpSmall">
                                <div className="box-custom-3">
                                    <div className="layout-bordered-1">
                                        <div className="layout-bordered-1-item">
                                            {/* Counter Classic */}
                                            <article
                                                className="counter-classic wow clipInLeft"
                                                style={{
                                                    animationName: "none",
                                                }}
                                            >
                                                <div className="counter-classic-main">
                                                    <div className="counter">
                                                        3
                                                    </div>
                                                    <span className="small text-primary">
                                                        +
                                                    </span>
                                                </div>
                                                <h4 className="counter-classic-title text-black extra-lighter">
                                                    Modes <br /> of control
                                                </h4>
                                            </article>
                                        </div>
                                        <div className="layout-bordered-1-item">
                                            Counter Classic
                                            <article
                                                className="counter-classic wow clipInLeft"
                                                data-wow-delay=".1s"
                                                style={{
                                                    animationDelay: "0.1s",
                                                    animationName: "none",
                                                }}
                                            >
                                                <div className="counter-classic-main">
                                                    <div className="counter">
                                                        14
                                                    </div>
                                                    <span className="small text-primary">
                                                        k
                                                    </span>
                                                </div>
                                                <h4 className="counter-classic-title extra-lighter">
                                                    Lines <br /> of code
                                                </h4>
                                            </article>
                                        </div>
                                        <div className="layout-bordered-1-item">
                                            Counter Classic
                                            <article
                                                className="counter-classic wow clipInLeft"
                                                data-wow-delay=".2s"
                                                style={{
                                                    animationDelay: "0.2s",
                                                    animationName: "none",
                                                }}
                                            >
                                                <div className="counter-classic-main">
                                                    <div className="counter">
                                                        5
                                                    </div>
                                                    <span className="small text-primary">
                                                        yrs
                                                    </span>
                                                </div>
                                                <h4 className="counter-classic-title extra-lighter">
                                                    Of warranty <br /> MIBAiO
                                                    guarantee
                                                </h4>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        id="why-us"
                        className="why-us section-bg1 wow fadeInUp"
                    >
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                                    <div className="content">
                                        <h3>
                                            How does MIBAiO{" "}
                                            <span style={{ color: "#0accbe" }}>
                                                benefit you?
                                            </span>
                                        </h3>
                                        <br />
                                        <h5 style={{ color: "#697484" }}>
                                            Here's where we tell how MIBAiO
                                            Xtension 4S truely{" "}
                                            <span style={{ color: "#4a80f0" }}>
                                                adds value
                                            </span>{" "}
                                            to your life!
                                        </h5>
                                    </div>
                                    <br />

                                    <h3>
                                        How does MIBAiO{" "}
                                        <span style={{ color: "#0accbe" }}>
                                            benefit you?
                                        </span>
                                    </h3>
                                    <br />
                                    <h5 style={{ color: "#697484" }}>
                                        Here's where we tell how MIBAiO Xtension
                                        4S truely{" "}
                                        <span style={{ color: "#4a80f0" }}>
                                            adds value
                                        </span>{" "}
                                        to your life!
                                    </h5>
                                    <br />
                                    <div className="wrapper">
                                        <div className="accordion">
                                            <div className="item">
                                                <div
                                                    className="title"
                                                    onClick={() => toggle(1)}
                                                >
                                                    <h4
                                                        style={{
                                                            fontSize: "20px",
                                                            paddingLeft: "20px",
                                                            paddingTop: "20px",
                                                        }}
                                                    >
                                                        {" "}
                                                        <span
                                                            style={{
                                                                color: "#0accbe",
                                                            }}
                                                        >
                                                            01&nbsp; &nbsp;
                                                        </span>
                                                        Comfort
                                                    </h4>
                                                    <span>
                                                        {selected == 1
                                                            ? "-"
                                                            : "+"}
                                                    </span>
                                                </div>

                                                <div
                                                    className={
                                                        selected == 1
                                                            ? "content show"
                                                            : "content"
                                                    }
                                                >
                                                    Control and keep an eye on
                                                    your electricals from
                                                    anywhere
                                                    <br />
                                                    Do it with your voice! or
                                                    your fingertips.
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div
                                                    className="title"
                                                    onClick={() => toggle(2)}
                                                >
                                                    <h4
                                                        style={{
                                                            fontSize: "20px",
                                                            paddingLeft: "20px",
                                                            paddingTop: "20px",
                                                        }}
                                                    >
                                                        {" "}
                                                        <span
                                                            style={{
                                                                color: "#0accbe",
                                                            }}
                                                        >
                                                            02&nbsp; &nbsp;
                                                        </span>
                                                        Convenience
                                                    </h4>
                                                    <span>
                                                        {selected == 2
                                                            ? "-"
                                                            : "+"}
                                                    </span>
                                                </div>
                                                <div
                                                    className={
                                                        selected == 2
                                                            ? "content show"
                                                            : "content"
                                                    }
                                                >
                                                    Easy to install.
                                                    <br />
                                                    Easy to operate... Makes
                                                    life simple!
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div
                                                    className="title"
                                                    onClick={() => toggle(3)}
                                                >
                                                    <h4
                                                        style={{
                                                            fontSize: "20px",
                                                            paddingLeft: "20px",
                                                            paddingTop: "20px",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                color: "#0accbe",
                                                            }}
                                                        >
                                                            03&nbsp; &nbsp;
                                                        </span>
                                                        ROI [Return on
                                                        Investment]?
                                                    </h4>
                                                    <span>
                                                        {selected == 3
                                                            ? "-"
                                                            : "+"}
                                                    </span>
                                                </div>
                                                <div
                                                    className={
                                                        selected == 3
                                                            ? "content show"
                                                            : "content"
                                                    }
                                                >
                                                    With uptp 26% savings on
                                                    energy bills per month,
                                                    you'll recover the amount
                                                    invested roughly in about 7
                                                    months*..!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                                    style={{
                                        backgroundImage:
                                            ' url("images/Picture1.png")',
                                    }}
                                    data-aos="zoom-in"
                                    data-aos-delay="150"
                                >
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="parallax-container section-lg text-center"
                        data-parallax-img="images/bg-image-2.jpg"
                    >
                        <div className="material-parallax parallax">
                            <img
                                src="images/bg-image-2.jpg"
                                alt=""
                                style={{ display: "block" }}
                            />
                        </div>
                        <div className="parallax-content">
                            <div className="container context-dark">
                                <span
                                    className="normal text-white font-weight-bold text-uppercase wow fadeIn"
                                    style={{ animationName: "none" }}
                                >
                                    Pricing plans
                                </span>
                                <h3
                                    className="offset-top-7 wow fadeIn"
                                    data-wow-delay=".1s"
                                    style={{
                                        animationDelay: "0.1s",
                                        animationName: "none",
                                    }}
                                >
                                    Grab your deal!🤑
                                </h3>
                                <p
                                    className="wow fadeIn"
                                    data-wow-delay=".25s"
                                    style={{
                                        animationDelay: "0.25s",
                                        animationName: "none",
                                    }}
                                >
                                    <span style={{ maxWidth: "700px" }}>
                                        We've got you an offer we're sure you
                                        wont resist. 😎
                                    </span>
                                </p>
                                <div
                                    className="toggle-modern"
                                    aria-label="Pricing Switch Monthly/Yearly"
                                    id="pt-classic-toggle"
                                >
                                    <div className="toggle-modern-text toggle-modern-text_default">
                                        Xtension 4S
                                    </div>
                                    <button
                                        className={
                                            "toggle-modern-switch content-toggle" +
                                            (toggleState && " active")
                                        }
                                        data-multitoggle="#pt-classic, #pt-classic-toggle"
                                        onClick={() => {
                                            setToggleState(!toggleState);
                                        }}
                                    >
                                        <span className="toggle-modern-switch-element" />
                                    </button>
                                    <div className="toggle-modern-text toggle-modern-text_alternate">
                                        Xtension 8S
                                    </div>
                                </div>
                            </div>
                            <div className="container ot50">
                                <div
                                    className="pt-classic-group"
                                    id="pt-classic"
                                >
                                    <div
                                        className="owl-carousel owl-carousel_type-2 owl-loaded"
                                        data-items={1}
                                        data-md-items={2}
                                        data-lg-items={3}
                                        data-dots="false"
                                        data-nav="true"
                                        data-stage-padding={0}
                                        data-loop="false"
                                        data-margin={30}
                                        data-lg-margin={20}
                                        data-xl-margin={30}
                                        data-mouse-drag="false"
                                        style={{}}
                                    >
                                        <div className="owl-stage-outer">
                                            <div
                                                className="owl-stage"
                                                style={{
                                                    transform:
                                                        "translate3d(0px, 0px, 0px)",
                                                    transition:
                                                        "all 0s ease 0s",
                                                    width: "1200px",
                                                }}
                                            >
                                                <div
                                                    className="owl-item active"
                                                    style={{
                                                        width: "370px",
                                                        marginRight: "30px",
                                                    }}
                                                    data-aos="fade-left"
                                                >
                                                    <article
                                                        className="pt-classic wow slideInRightLg"
                                                        data-wow-delay=".5s"
                                                        style={{
                                                            animationDelay:
                                                                "0.5s",
                                                            animationName:
                                                                "none",
                                                        }}
                                                    >
                                                        <h4 className="pt-classic-title">
                                                            Pack of 1
                                                        </h4>
                                                        <div className="pt-classic-price-outer">
                                                            <div
                                                                className="pt-classic-price"
                                                                aria-hidden={
                                                                    toggleState
                                                                        ? "true"
                                                                        : "false"
                                                                }
                                                            >
                                                                <div className="pt-classic-price-currency font-weight-regular">
                                                                    {" "}
                                                                    ₹
                                                                </div>
                                                                <div className="pt-classic-price-value extra-light">
                                                                    3433
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="pt-classic-price"
                                                                aria-hidden={
                                                                    toggleState
                                                                        ? "false"
                                                                        : "true"
                                                                }
                                                            >
                                                                <div className="pt-classic-price-currency font-weight-regular">
                                                                    {" "}
                                                                    ₹
                                                                </div>
                                                                <div className="pt-classic-price-value extra-light">
                                                                    6333
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-classic-divider" />
                                                        <ul className="pt-classic-list">
                                                            <li>
                                                                Control upto 4
                                                                appliances
                                                            </li>
                                                            <li>
                                                                Ideal for 1 room
                                                            </li>
                                                            <li>
                                                                Manual control
                                                            </li>
                                                            <li>
                                                                Bluetooth
                                                                control
                                                            </li>
                                                            <li>
                                                                Internet control
                                                            </li>
                                                            <li>
                                                                Voice control
                                                            </li>
                                                        </ul>
                                                        <div className="pt-classic-footer">
                                                            <a
                                                                className="button button-default-outline button-icon button-icon-right button-winona font-weight-regular"
                                                                href="https://mibaio.in/#"
                                                            >
                                                                <div className="content-original">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                                <div className="content-dubbed">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </article>
                                                </div>
                                                <div
                                                    className="owl-item active"
                                                    style={{
                                                        width: "370px",
                                                        marginRight: "30px",
                                                    }}
                                                    data-aos="fade-up"
                                                >
                                                    <article
                                                        className="pt-classic pt-classic_style-2 pt-classic_preferred wow scaleIn"
                                                        style={{
                                                            animationName:
                                                                "none",
                                                        }}
                                                    >
                                                        <div className="pt-classic-header">
                                                            <h4 className="pt-classic-title">
                                                                Pack of 3
                                                            </h4>
                                                            <div className="pt-classic-price-outer">
                                                                <div
                                                                    className="pt-classic-price"
                                                                    aria-hidden={
                                                                        toggleState
                                                                            ? "true"
                                                                            : "false"
                                                                    }
                                                                >
                                                                    <div className="pt-classic-price-currency font-weight-regular">
                                                                        {" "}
                                                                        ₹
                                                                    </div>
                                                                    <div className="pt-classic-price-value extra-light">
                                                                        9999
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="pt-classic-price"
                                                                    aria-hidden={
                                                                        toggleState
                                                                            ? "false"
                                                                            : "true"
                                                                    }
                                                                >
                                                                    <div className="pt-classic-price-currency font-weight-regular">
                                                                        {" "}
                                                                        ₹
                                                                    </div>

                                                                    <div className="pt-classic-price-value extra-light">
                                                                        17999
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            width: "70%",
                                                                            fontWeight:
                                                                                " 500",
                                                                            color: "#0accbe",
                                                                            background:
                                                                                " #d6f3f5",
                                                                            letterSpacing:
                                                                                "0.075em",
                                                                            fontSize:
                                                                                "20%",
                                                                            display:
                                                                                "flex",
                                                                            justifyContent:
                                                                                "center",
                                                                            alignItems:
                                                                                "center",
                                                                            height: "35px",
                                                                        }}
                                                                    >
                                                                        Save 20%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-classic-divider" />
                                                        <ul className="pt-classic-list">
                                                            <li>
                                                                Control upto 12
                                                                appliances
                                                            </li>
                                                            <li>
                                                                Ideal for 2 BHK
                                                            </li>
                                                            <li>
                                                                Manual Control
                                                            </li>
                                                            <li>
                                                                Internet Control
                                                            </li>
                                                            <li>
                                                                Bluetooth
                                                                Control
                                                            </li>
                                                            <li>
                                                                Voice control
                                                            </li>
                                                        </ul>
                                                        <div className="pt-classic-footer">
                                                            <a
                                                                className="button button-secondary button-shadow button-icon button-icon-right button-winona font-weight-regular"
                                                                href="https://mibaio.in/#"
                                                            >
                                                                <div className="content-original">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>

                                                                <div className="content-dubbed">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                            </a>
                                                            {/* <p className="pt-classic-note text-transparent">
                                                                #Vedant
                                                                recommends
                                                            </p> */}
                                                            <p className="pt-classic-note">
                                                                #Recommended
                                                            </p>
                                                        </div>
                                                    </article>
                                                </div>
                                                <div
                                                    className="owl-item active"
                                                    style={{
                                                        width: "370px",
                                                        marginRight: "30px",
                                                    }}
                                                    data-aos="fade-right"
                                                >
                                                    <article
                                                        className="pt-classic pt-classic_style-3 wow slideInLeftLg"
                                                        data-wow-delay=".5s"
                                                        style={{
                                                            animationDelay:
                                                                "0.5s",
                                                            animationName:
                                                                "none",
                                                        }}
                                                    >
                                                        <h4 className="pt-classic-title">
                                                            Pack of 2
                                                        </h4>
                                                        <div className="pt-classic-price-outer">
                                                            <div
                                                                className="pt-classic-price"
                                                                aria-hidden={
                                                                    toggleState
                                                                        ? "false"
                                                                        : "true"
                                                                }
                                                            >
                                                                <div className="pt-classic-price-currency font-weight-regular">
                                                                    {" "}
                                                                    ₹
                                                                </div>
                                                                <div className="pt-classic-price-value extra-light">
                                                                    13199
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="pt-classic-price"
                                                                aria-hidden={
                                                                    toggleState
                                                                        ? "true"
                                                                        : "false"
                                                                }
                                                            >
                                                                <div className="pt-classic-price-currency font-weight-regular">
                                                                    {" "}
                                                                    ₹
                                                                </div>
                                                                <div className="pt-classic-price-value extra-light">
                                                                    6833
                                                                </div>
                                                                <div className="badge badge-1">
                                                                    Save 12%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-classic-divider" />
                                                        <ul className="pt-classic-list">
                                                            <li>
                                                                Control upto 8
                                                                appliances
                                                            </li>
                                                            <li>
                                                                Ideal for 1 BHK
                                                            </li>
                                                            <li>
                                                                Manual control
                                                            </li>
                                                            <li>
                                                                Internet control
                                                            </li>
                                                            <li>
                                                                Voice control
                                                            </li>
                                                            <li>
                                                                Bluetooth
                                                                control
                                                            </li>
                                                            <li>
                                                                Upgrade more
                                                                outputs
                                                            </li>
                                                        </ul>
                                                        <div className="pt-classic-footer">
                                                            <a
                                                                className="button button-default-outline button-icon button-icon-right button-winona font-weight-regular"
                                                                href="https://mibaio.in/#"
                                                            >
                                                                <div className="content-original">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                                <div className="content-dubbed">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-nav disabled">
                                            <div className="owl-prev disabled" />
                                            <div className="owl-next disabled" />
                                        </div>
                                        <div className="owl-dots disabled" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        id="FAQ"
                        className="section section-md bg-gray-100 text-center wow fadeInUp"
                        data-wow-delay=".3s"
                    >
                        <div className=" container">
                            <span className="normal text-primary font-weight-bold text-uppercase wow fadeIn">
                                Popular Questions
                            </span>
                            <h3
                                className="offset-top-7 wow fadeIn"
                                data-wow-delay=".1s"
                            >
                                Frequently Asked Questions
                            </h3>
                            <div
                                className="row row-30 justify-content-center justify-content-lg-start wow fadeIn"
                                id="app-accordion"
                                data-wow-delay=".2s"
                            >
                                <div className="col-md-10 col-lg-6">
                                    <div
                                        className="card-group-custom card-group-classic card-group-classic_1"
                                        role="tablist"
                                        aria-multiselectable="false"
                                    >
                                        <article className="card card-custom card-classic">
                                            <div
                                                className="card-header"
                                                id="app-accordion-heading-4"
                                                role="tab"
                                            >
                                                <div className="card-title">
                                                    <a
                                                        className="card-link"
                                                        role="button"
                                                        data-toggle="collapse"
                                                        href="#app-accordion-collapse-4"
                                                        aria-controls="app-accordion-collapse-4"
                                                        aria-expanded="true"
                                                    >
                                                        What does "MIBAiO" mean?
                                                        <div className="card-arrow"></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse show"
                                                id="app-accordion-collapse-4"
                                                role="tabpanel"
                                                aria-labelledby="app-accordion-heading-4"
                                                data-parent="#app-accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        MIBAiO is an acronym for
                                                        Manual Internet
                                                        Bluetooth All In One.{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </article>

                                        <article className="card card-custom card-classic">
                                            <div
                                                className="card-header"
                                                id="app-accordion-heading-1"
                                                role="tab"
                                            >
                                                <div className="card-title">
                                                    <a
                                                        className="card-link collapsed"
                                                        role="button"
                                                        data-toggle="collapse"
                                                        href="#app-accordion-collapse-1"
                                                        aria-controls="app-accordion-collapse-1"
                                                        aria-expanded="false"
                                                    >
                                                        What are the key
                                                        features of your
                                                        product?
                                                        <div className="card-arrow"></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse"
                                                id="app-accordion-collapse-1"
                                                role="tabpanel"
                                                aria-labelledby="app-accordion-heading-1"
                                                data-parent="#app-accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Our product offers
                                                        Manual, Internet and
                                                        Bluetooth all-in-one
                                                        functionality along with
                                                        voice control. To know
                                                        more about key features,
                                                        please refer the product
                                                        brochure.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>

                                        <article className="card card-custom card-classic">
                                            <div
                                                className="card-header"
                                                id="app-accordion-heading-2"
                                                role="tab"
                                            >
                                                <div className="card-title">
                                                    <a
                                                        className="card-link collapsed"
                                                        role="button"
                                                        data-toggle="collapse"
                                                        href="#app-accordion-collapse-2"
                                                        aria-controls="app-accordion-collapse-2"
                                                        aria-expanded="false"
                                                    >
                                                        Why should I purchase
                                                        your product?
                                                        <div className="card-arrow"></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse"
                                                id="app-accordion-collapse-2"
                                                role="tabpanel"
                                                aria-labelledby="app-accordion-heading-2"
                                                data-parent="#app-accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        The major advantage is
                                                        price: You get a premium
                                                        model under ₹4000. You
                                                        don’t have to call an
                                                        electrician for
                                                        installation, we make it
                                                        very easy to install for
                                                        you. Second advantage is
                                                        Made in INDIA: Our
                                                        product is carefully
                                                        designed for a standard
                                                        Indian household of
                                                        world-class quality. We
                                                        are working under the
                                                        Make in India, Digital
                                                        India, Aatmanirbhar
                                                        Bharat initiatives.{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="col-md-10 col-lg-6">
                                    <div
                                        className="card-group-custom card-group-classic card-group-classic_1"
                                        role="tablist"
                                        aria-multiselectable="false"
                                    >
                                        <article className="card card-custom card-classic wow clipInLeft">
                                            <div
                                                className="card-header"
                                                id="app-accordion-heading-3"
                                                role="tab"
                                            >
                                                <div className="card-title">
                                                    <a
                                                        className="card-link collapsed"
                                                        role="button"
                                                        data-toggle="collapse"
                                                        href="#app-accordion-collapse-3"
                                                        aria-controls="app-accordion-collapse-3"
                                                        aria-expanded="false"
                                                    >
                                                        Do you provide post
                                                        sales service?
                                                        <div className="card-arrow"></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse"
                                                id="app-accordion-collapse-3"
                                                role="tabpanel"
                                                aria-labelledby="app-accordion-heading-3"
                                                data-parent="#app-accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Yes, we do. Our team is
                                                        ready for your support
                                                        24x7x365 with our
                                                        qualified Engineers.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>

                                        <article className="card card-custom card-classic">
                                            <div
                                                className="card-header"
                                                id="app-accordion-heading-6"
                                                role="tab"
                                            >
                                                <div className="card-title">
                                                    <a
                                                        className="card-link collapsed"
                                                        role="button"
                                                        data-toggle="collapse"
                                                        href="#app-accordion-collapse-6"
                                                        aria-controls="app-accordion-collapse-6"
                                                        aria-expanded="false"
                                                    >
                                                        Does your product
                                                        control the speed of fan
                                                        digitally?
                                                        <div className="card-arrow"></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse"
                                                id="app-accordion-collapse-6"
                                                role="tabpanel"
                                                aria-labelledby="app-accordion-heading-6"
                                                data-parent="#app-accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        No as of now. But you'll
                                                        get that funtion in the
                                                        upcoming versions of
                                                        MIBAiO.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="card card-custom card-classic">
                                            <div
                                                className="card-header"
                                                id="app-accordion-heading-5"
                                                role="tab"
                                            >
                                                <div className="card-title">
                                                    <a
                                                        className="card-link collapsed"
                                                        role="button"
                                                        data-toggle="collapse"
                                                        href="#app-accordion-collapse-5"
                                                        aria-controls="app-accordion-collapse-5"
                                                        aria-expanded="false"
                                                    >
                                                        What can I do with your
                                                        product?
                                                        <div className="card-arrow"></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse"
                                                id="app-accordion-collapse-5"
                                                role="tabpanel"
                                                aria-labelledby="app-accordion-heading-5"
                                                data-parent="#app-accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Talk to your electrical
                                                        appliances through Siri,
                                                        Alexa and Google voice
                                                        assistant. Control your
                                                        exising appliances with
                                                        your smartphone and also
                                                        manually(like we do now
                                                        using the conventional
                                                        switches). Monitor your
                                                        electricity consumption
                                                        of connected appliances
                                                        on your smartphone app.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section section-md text-center">
                        <div className="container">
                            <span className="normal text-primary font-weight-bold text-uppercase wow fadeIn">
                                lifestyle 2.0
                            </span>
                            <h3
                                className="offset-top-7 wow fadeIn"
                                data-wow-delay=".1s"
                            >
                                Step into the future,{" "}
                                <span style={{ color: "#0accbe" }}>
                                    Upgrade to MIBAiO
                                </span>
                            </h3>
                            <p className="wow fadeIn" data-wow-delay=".2s">
                                <span
                                    style={{
                                        maxWidth: "720px",
                                        opacity: " .85",
                                    }}
                                >
                                    It’s time to upgrade your
                                    home/office/workspace and experience the
                                    futuristic lifestyle! Contact us directly to
                                    enhance your lifestyle experience.
                                </span>
                            </p>
                        </div>
                        <div className="group">
                            <a
                                className="button button-default-outline button-winona text-black wow fadeIn"
                                href="contact-us.html"
                                data-wow-delay=".1s"
                            >
                                <span></span>Contact us
                            </a>
                            <a
                                className="button button-secondary button-winona wow fadeIn"
                                href="product.php"
                                data-wow-delay=".1s"
                            >
                                <span></span>Buy Now
                            </a>
                        </div>
                    </section>

                    <section className="section section-md-last block-footer-classic">
                        <div className="block-footer-classic-wrap">
                            <div className="container">
                                <div className="row row-50 justify-content-lg-between">
                                    <div
                                        className="col-md-6 col-lg-6 wow clipInLeft"
                                        style={{ animationName: "none" }}
                                    >
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
                                            action="https://mibaio.in/bat/rd-mailform.php"
                                            noValidate="novalidate"
                                        >
                                            <div className="form-wrap">
                                                <input
                                                    className="form-input form-control-has-validation"
                                                    id="subscribe-form-email-11"
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter Your
                                                    E-mail"
                                                    data-constraints="@Email @Required"
                                                />
                                                <span className="form-validation" />
                                            </div>
                                            <div className="form-button">
                                                <button
                                                    className="button button-secondary button-winona"
                                                    type="submit"
                                                >
                                                    <div className="content-original">
                                                        Subscribe
                                                    </div>
                                                    <div className="content-dubbed">
                                                        Subscribe
                                                    </div>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        className="col-md-6 col-xl-5 wow clipInLeft"
                                        style={{ animationName: "none" }}
                                    >
                                        <p className="heading heading-alternate-1 text-white">
                                            Time to Get Started
                                        </p>
                                        <p className="big text-white-50">
                                            Upgrade your home to a smart home
                                            with MIBAiO!
                                        </p>
                                        <div className="group ot30">
                                            <a
                                                className="button button-secondary button-winona"
                                                href="https://mibaio.in/#"
                                            >
                                                <div className="content-original">
                                                    Get a Quote
                                                </div>
                                                <div className="content-dubbed">
                                                    Get a Quote
                                                </div>
                                            </a>
                                            <Link
                                                className="button button-default-outline button-winona text-white"
                                                to="/about_us"
                                            >
                                                <div className="content-original">
                                                    More About MIBAiO
                                                </div>
                                                <div className="content-dubbed">
                                                    More About MIBAiO
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Page Footer*/}
                            <CustomFooter />
                            {/* <footer className="section footer-classic footer-classic_boxed text-white-50 text">
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
                                                        automation system for
                                                        your smarthome.
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
                            </footer> */}
                            {/* <a
                                style={{
                                    position: "fixed",
                                    bottom: "30px",
                                    right: "30px",
                                    zIndex: 1000,
                                    backgroundColor: "#4e83f1",
                                    color: "white",
                                    padding: "10px",
                                    borderRadius: "50%",
                                }}
                                href="#"
                            >
                                <img
                                    src="https://img.icons8.com/ios-glyphs/60/000000/long-arrow-up.png"
                                    height="32px"
                                    width="32px"
                                />
                            </a> */}
                            {/* <a href="#" id="ui-to-top" className="ui-to-top mdi mdi-chevron-up"></a> */}
                        </div>
                    </section>
                </div>
                <div className="snackbars" id="form-output-global" />
            </div>
            {/* </div> */}
        </>
    );
};

export default Home;
