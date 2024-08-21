import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import Typewriter from "typewriter-effect";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import "aos/dist/aos.css";
import "../css/selection.css";
import "../style.css";
import "../css/newcss.css";
import sample1 from "./MIBAiO-Xtension-4C.png";
import WOW from "wowjs";
import extensionphonevid from "./extensionphone.mp4";
import alexaphone from "./alexaphone.gif";
import appdemo from "./appdemo.mp4";
import extensionvid from "./Event-new.mp4";
import alexagif from "./Hi-Alexa.gif";
import surgeproof from "./X4S-Commercial-2.png";
import feature1 from "./prominent-features-mobile-1.png";
import feature2 from "./prominent-features-mobile-2.png";
import modeposter from "./Multi-Mode.png";
import gplay from "./google-play-badge.png";
import apstore from "./App_Store_Badge.svg";
import Chevron from "react-chevron";
import { faArrowDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "../components/navigationbar";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import MyOwlCarousel from "./owlCarousel";
import CustomFooter from "../components/customfooter";
import blueTheme from "./Home-screen.mp4";

const Home = (props) => {
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

    const [frameSize, setFrameSize] = useState(3);

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    const [src, setSrc] = useState("big");
    useEffect(() => {
        window.addEventListener("resize", (e) => {
            if (window.innerWidth <= 990) {
                setFrameSize(1);
            } else {
                setFrameSize(3);
            }

            if (window.innerWidth >= 800) {
                setSrc("big");
            } else {
                setSrc("small");
            }
        });
    }, []);

    // const getVideoSrc = width => {
    //     if (width >= 800)
    //         return extensionvid;
    //     return extensionphonevid;

    // };

    // const src = getVideoSrc(window.innerWidth);

    const servicesRef = useRef(null);
    const readMoreClick = () => {
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
    };

    //----------- Playing / Pausing the features video on scroll-------------------------------------------------------------
    const videoRef = useRef(null);
    const appVideoRef = useRef(null);
    const appScreenRef = useRef(null);

    useEffect(() => {
        let options = {
            rootMargin: "70px",
            // threshold: [0.5, 0.75]
            threshold: 0.5,
        };

        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
    });

    // App Video
    useEffect(()=>{
        let options = {
            rootMargin: "50px",
            // threshold: [0.5, 0.75]
            threshold: 0.5,
        };
        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    appVideoRef.current.play();
                } else {
                    appVideoRef.current.pause();
                }
            });
        };
        const observer = new IntersectionObserver(handlePlay,options);
        observer.observe(appVideoRef.current);
        console.log("Observer");
    },[])
    // ----------------------------------------------------------------------------------
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

                        <div
                            id="belownavbar"
                            className="box-custom-4 bg-default wow fadeInDown"
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
                                                    autoPlay
                                                    muted
                                                    loop true
                                                    style={{
                                                        alignContent: "center",
                                                        maxWidth:500,
                                                        borderRadius: "10px",
                                                    }}
                                                >
                                                    <source
                                                        src={blueTheme}
                                                        type="video/mp4"
                                                    />
                                                </video>

                                                {/* <div className="carousel-item">
                                  <img className="d-block" src={offset} alt="Third slide" style={{backgroundPosition: "center",backgroundRepeat: "no-repeat", backgroundSize: "cover"}}/>
                                </div> */}
                                            </div>
                                        </div>
                                        <div className="iphone-frame-4-next element-process brochureText">
                                            <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/wxnxiano.json"
                                                trigger="loop-on-hover"
                                                delay="175"
                                                speed=".01"
                                                colors="primary:#ffffff,secondary:#0accbe"
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                }}
                                            ></lord-icon>
                                            {/* <span className="icon icon-lg linearicons-envelope" /> */}
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
                                        className="font-weight-bold heading-decoration wow fadeInUp"
                                        data-wow-delay=".4s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.4s",
                                            animationName: "fadeInUp",
                                        }}
                                    >
                                        <span className="text-white">
                                            Transform the way you control your
                                        </span>
                                    </h2>
                                    <h2
                                        className="text-white heading-decoration wow fadeInUp"
                                        data-wow-delay=".4s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.4s",
                                            animationName: "fadeInUp",
                                        }}
                                    >
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    "home",
                                                    "office",
                                                    "lifestyle",
                                                    "devices",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                wrapperClassName:
                                                    "text-primary notranslate",
                                                cursorClassName:
                                                    "typed-cursor typed-cursor--blink",
                                            }}
                                            initDelay={800}
                                        />
                                        {/* <span className="typed-cursor typed-cursor--blink">
                                            |
                                        </span> */}
                                    </h2>
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
                                            Experience smart living. Upgrade your existing appliances.  <br />
                                            Control & monitor from any part of the world with your
                                            App!
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
                                            // href="#services"
                                            data-wow-duration=".5s"
                                            data-wow-delay=".5s"
                                            style={{
                                                margin: "10px",
                                                color: "white",
                                            }}
                                            onClick={readMoreClick}
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

                    <section
                        id="services"
                        className="services section-md section-bg"
                        style={{
                            background:
                                "linear-gradient(180deg, #434343, #000000)",
                        }}
                        ref={servicesRef}
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
                                    Xtension 4C
                                </h2>
                                <h5
                                    className="text-center wow-animation wow fadeIn design-text"
                                    data-wow-delay=".4s"
                                    style={{
                                        marginBottom: "20px",
                                        color: "#f1f1f1",
                                    }}
                                >
                                    {/* Designed to simplify your life */}
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "Fits inside any switchboard",
                                                "Controls 4 individual devices",
                                                "Controls Fan speed"
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            wrapperClassName: "text-primary",
                                            cursorClassName:
                                                "typed-cursor typed-cursor--blink",
                                        }}
                                        initDelay={900}
                                    />
                                </h5>

                                <div
                                    className="row features-small mb-5 mt-3 wow fadeIn"
                                    data-wow-delay=".6s"
                                >
                                    <div className="col-md-4">
                                        <div className="row designTextContainer">
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
                                                    Works with any 2.4Ghz
                                                    compatible WiFi router.
                                                    Does not need any additional
                                                    hub.
                                                </p>
                                                <div
                                                    style={{ height: "15px" }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="row designTextContainer">
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

                                    <div
                                        className="col-md-4 flex-center"
                                    // data-aos="zoom-in"
                                    // data-duration="1000"
                                    >
                                        <img
                                            src={sample1}
                                            alt="MIBAiO Xtension 4C"
                                            className="z-depth-0 img-fluid wow fadeInUp"
                                            data-wow-delay=".5s"
                                        // style={{ transform: `scale(${scale})`, opacity }}
                                        />
                                    </div>

                                    <div className="col-md-4 mt-2">
                                        <div className="row designTextContainer">
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
                                                    internet. 🛜
                                                </p>
                                                <div
                                                    style={{ height: "15px" }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="row designTextContainer">
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
                                                    Energy monitoring
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
                                            Schedule devices to turn
                                            on/off automatically at desired
                                            timing. Individually or
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
                                         🎙️Relax ... Let
                                            your voice turn on your light.
                                            <br /> <br />{" "}
                                            <span
                                                style={{
                                                    fontSize: " 12px",
                                                    opacity: " .8",
                                                }}
                                            >
                                                (Works with Alexa)
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
                                            <a href="#MMC">Energy Savings</a>
                                        </h4>
                                        <p className="description">
                                            Save upto 26%* of
                                            your electricity bill! 💚{" "}
                                            Monitor electricity usage on App.
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
                                            <a href="#Surge">Share Access</a>
                                        </h4>
                                        <p className="description">
                                            Share device access with your family 👨‍👩‍👦,
                                            add timers to devices, set more
                                            smart scenes as per your need.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <picture id="next-section">
                        {src === "small" && (
                            <video
                                style={{
                                    width: "100%",
                                    transitionDelay: "1s",
                                    marginBottom: "-6%",
                                }}
                                // loop
                                // autoPlay
                                ref={videoRef}
                                muted
                                playsInline
                            >
                                <source
                                    src={extensionphonevid}
                                    type="video/mp4"
                                />
                            </video>
                        )}
                        {src === "big" && (
                            <video
                                style={{
                                    width: "100%",
                                    transitionDelay: "1s",
                                    marginBottom: "-6%",
                                }}
                                // loop
                                // autoPlay

                                ref={videoRef}
                                muted
                                playsInline
                            >
                                <source src={extensionvid} type="video/mp4" />
                            </video>
                        )}
                        {/* <video style={{
                                width: "100%",
                                transitionDelay: "1s",
                                marginBottom: "-6%",
                            }} autoplay playsInline muted>
                                <source 
                            src={extensionvid}
                            type="video/mp4"/>
                            </video> */}
                    </picture>
                    {/* <img src={alexagif} style={{minWidth:"100%"}} /> */}
                    {/* <img src={alexaphone} srcSet={`${alexaphone} 800w, ${alexagif} 1360w`} /> */}
                    <section className="section section-md bg-gray-100" style={{ background: "linear-gradient(180deg, rgba(0,0,0,1) 8%, rgba(50,54,50,1) 26%, rgba(123,133,121,1) 51%, rgba(255,255,255,1) 77%)" }} >
                        <div className="d-flex flex-column pt-5 pb-3 align-items-center justify-content-center">


                            <h3
                                className="wow fadeInUp"
                                data-aos-delay=".2s"
                                style={{
                                    textAlign: "center",
                                    paddingTop: "72px",
                                    color: "#fff",
                                }}
                            >
                                Hands-free control 🎙️
                            </h3>
                            <h4 style={{ textAlign: "center", color: "#fefefe", paddingBottom: "26", opacity: "0.7" }}>Supports your favourite voice assistants</h4>

                        </div>
                        <picture className="mt-4" data-aos-offset="-100"
                                    data-aos-duration="200"
                                    data-aos="fade-down">
                            <source
                                media="(min-width:800px)"
                                srcSet={alexagif}
                            ></source>
                            <img
                                src={alexaphone}
                                style={{
                                    width: "100%",
                                }}
                            />
                        </picture>
                    </section>
                    
                    {/* Section Ends */}

                    {/* <img src ={x4s} style={{width: "100%", marginTop: "-7%"}} data-aos-offset="100"
                                    data-aos-duration="900"
                                    data-aos="fade-up"></img> */}

                    <section className="section section-md bg-gray-100" style={{marginTop: "-5%"}}>
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
                            <div className="row row-50 designTextContainer justify-content-xl-between align-items-center">
                                <div className="col-md-5 col-lg-6 left-pattern" data-aos-offset="150" data-aos-duration="2000" data-aos="fade-right"
                                    // data-wow-delay=".5s" 
                                >
                                    {/* <div className="unit unit-spacing-1 align-items-center">
                                        <div className="unit-left">
                                            <div
                                                className="icon icon-style-1 mdi mdi-flash"
                                            // style={{ font: "normal 24px/2 Material Design Icons" }}
                                            ></div>
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
                                                    Xtension 4S is
                                                    equipped with a Positive
                                                    Temperature Coefficient
                                                    Thermister (PTC) to protect
                                                    your electrical appliances
                                                    from accidental voltage
                                                    spikes.
                                                </p>
                                            </div>
                                        </blockquote>
                                    </div> */}
                                    <div className="item">
                                        <img
                                            className="d-block w-100"
                                            src={feature1}
                                            alt="feature-1"
                                            width="456px"
                                            height="456px"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="col-md-5 col-lg-6 right-pattern"
                                    // data-wow-delay=".5s"
                                    data-aos-offset="150"
                                    data-aos-duration="1800"
                                    data-aos="fade-left"
                                // data-aos-anchor-placement="bottom-bottom"
                                >
                                    <div className="item">
                                        <img
                                            className="d-block w-100"
                                            src={feature2}
                                            alt="feature-2"
                                            width="456px"
                                            height="456px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container" id="MMC">
                            <div className="row row-50 designTextContainer justify-content-xl-between align-items-center flex-md-row-reverse">
                                <div
                                    className="col-md-4 col-lg-5 col-xl-6"
                                    // data-wow-delay=".5s"
                                    data-aos-offset="100"
                                    data-aos-duration="1500"
                                    data-aos="fade-left"
                                // data-aos-anchor-placement="bottom-bottom"
                                >
                                    <div className="unit unit-spacing-1 align-items-center">
                                        <div className="unit-left">
                                            <div
                                                className="icon icon-style-1 mdi mdi-access-point-network"
                                            // style={{ font: "normal 24px/2 Material Design Icons" }}
                                            ></div>
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
                                                    <div className="icon icon-style-1 mdi mdi-wifi" ></div>{" "}
                                                    Internet <br />
                                                    <br />
                                                    <div
                                                        className="icon icon-style-1 mdi mdi-bluetooth"
                                                    // style={{ font: "normal 24px/2 Material Design Icons" }}
                                                    ></div>{" "}
                                                    Bluetooth
                                                </p>
                                                <div className="group-buttons-responsive group-middle">
                                                    <Link
                                                        className="button button-secondary button-winona"
                                                        to="/view"
                                                    >
                                                        View All Features
                                                    </Link>
                                                    <Link
                                                        className="button button-default-outline button-winona"
                                                        style={{
                                                            color: "#0accbe",
                                                        }}
                                                        to="/view#specs-tabs"
                                                    >
                                                        Learn More
                                                    </Link>
                                                </div>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>

                                <div
                                    className="col-md-4 col-lg-5 left-pattern"
                                    // data-wow-delay=".5s"
                                    data-aos-offset="100"
                                    data-aos-duration="1500"
                                    data-aos="fade-right"
                                // data-aos-anchor-placement="bottom-bottom"
                                >
                                    <img
                                        className="d-block w-100"
                                        src={modeposter}
                                        alt="multi-mode-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

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
                                    About Us
                                    <br />
                                </span>
                                <br/>
                                <h3>MIBAiO</h3>
                                <p
                                    className="offset-top-7 font-weight-regular typed-text-heading wow fadeIn"
                                    data-wow-delay=".1s"
                                    style={{
                                        animationDelay: "0.1s",
                                        animationName: "none",
                                    }}
                                >
                                    {/* <span>MIBAiO</span> */}
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "is a startup",
                                                "upgrades your lifestyle",
                                                "delivers you delightful experiences",
                                                "Your smart choice..!",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            wrapperClassName: "text-primary",
                                            cursorClassName:
                                                "typed-cursor typed-cursor--blink",
                                        }}
                                        initDelay={1000}
                                    />
                                </p>
                                <p
                                    className="wow fadeIn"
                                    data-wow-delay=".2s"
                                    style={{
                                        animationDelay: "0.2s",
                                        animationName: "none",
                                    }}
                                >
                                    <h4 style={{ maxWidth: "800px" }}>
                                        We are on a mission to transform the
                                        Smart Home Ecosystem in India <br />
                                        And we invite you to take a front seat
                                        in this revolution
                                    </h4>
                                </p>
                                {/* <a className="button-play mdi mdi-play mdi-24px wow fadeIn" href="https://youtu.be/qxN6Cw6qgLk" data-lightgallery="item" data-wow-delay=".3s">
                            <svg className="button-play-shape" width="86" height="86" viewbox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
                                <rect x="1" y="1" width="86" height="86" rx="6" ry="6"></rect>
                            </svg></a>  */}
                                <br/>
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
                                                <h5 className="counter-classic-title text-black extra-lighter">
                                                    Modes <br /> of control
                                                </h5>
                                            </article>
                                        </div>
                                        <div className="layout-bordered-1-item">
                                            {/* Counter Classic */}
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
                                                        8
                                                    </div>
                                                    <span className="small text-primary">
                                                        +
                                                    </span>
                                                </div>
                                                <h5 className="counter-classic-title extra-lighter">
                                                    Devices supported
                                                </h5>
                                            </article>
                                        </div>
                                        <div className="layout-bordered-1-item">
                                            {/* Counter Classic */}
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
                                                        1
                                                    </div>
                                                    <span className="small text-primary">
                                                        yr
                                                    </span>
                                                </div>
                                                <h5 className="counter-classic-title extra-lighter">
                                                    replacement warranty <br /> No questions asked
                                                </h5>
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
                                            Xtension 4S truly{" "}
                                            <span style={{ color: "#4a80f0" }}>
                                                adds value
                                            </span>{" "}
                                            to your life!
                                        </h5>
                                    </div>
                                    <br />

                                    <br />

                                    <div className="accordion-list">
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
                                                            <span
                                                                style={{
                                                                    color: "#0accbe",
                                                                }}
                                                            >
                                                                01
                                                            </span>{" "}
                                                            &nbsp; Comfort & Convenience
                                                            <div className="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    className="collapse show"
                                                    id="app-accordion-collapse-4"
                                                    role="tabpanel"
                                                    aria-labelledby="app-accordion-heading-4"
                                                    data-parent="#why-us"
                                                >
                                                    <div className="card-body">
                                                        <p>
                                                            Control and keep an
                                                            eye on your smart home
                                                            devices from
                                                            anywhere
                                                            <br />
                                                            Do it with your
                                                            voice! or your
                                                            fingertips.
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
                                                            <span
                                                                style={{
                                                                    color: "#0accbe",
                                                                }}
                                                            >
                                                                02
                                                            </span>{" "}
                                                            &nbsp; Ease of usage
                                                            <div className="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    className="collapse"
                                                    id="app-accordion-collapse-1"
                                                    role="tabpanel"
                                                    aria-labelledby="app-accordion-heading-1"
                                                    data-parent="#why-us"
                                                >
                                                    <div className="card-body">
                                                        <p>
                                                            Works with any type of electrical wiring, No rewiring or Hub required. 
                                                            <br />Easy to install.
                                                            <br />
                                                            Easy to operate...
                                                            Makes life simple!
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
                                                            <span
                                                                style={{
                                                                    color: "#0accbe",
                                                                }}
                                                            >
                                                                03
                                                            </span>{" "}
                                                            &nbsp; 💸 Returns
                                                            <div className="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    className="collapse"
                                                    id="app-accordion-collapse-2"
                                                    role="tabpanel"
                                                    aria-labelledby="app-accordion-heading-2"
                                                    data-parent="#why-us"
                                                >
                                                    <div className="card-body">
                                                        <p>
                                                            Save upto 26%
                                                            on electricity
                                                            bill per month.<br />
                                                            Enjoy returns within 7*
                                                            months!
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                                    style={{
                                        backgroundImage:
                                            ' url("images/Picture1.jpg")',
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
                                        We've got you offers we're sure you
                                        wont resist. 😎
                                    </span>
                                </p>
                                {/* <div
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
                                        Xtension 4C+
                                    </div>
                                </div> */}
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
                                        <OwlCarousel
                                            className="owl-theme"
                                            margin={30}
                                            items={frameSize}
                                            autoplay={true}
                                        >
                                            <article
                                                className="pt-classic wow slideInRightLg item"
                                                data-wow-delay=".5s"
                                                style={{
                                                    animationDelay: "0.5s",
                                                    animationName: "none",
                                                    minWidth: "300px",
                                                }}
                                            >
                                                <h4 className="pt-classic-title">
                                                    Smart IR Remote
                                                </h4>
                                                <img src="images/Smart-remote.png"
                                                    style={{maxWidth : "200px"}}/>
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
                                                            1199
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
                                                            5499
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pt-classic-divider" />
                                                <ul className="pt-classic-list">
                                                    <li>All remotes in one App</li>
                                                    <li>Control TV, AC, Audio system, RGB LED any any other device controlled by IR remote</li>
                                                    <li>10m range</li>
                                                    <li>Set schedules and automations</li>
                                                    <li>Voice control with Alexa</li>
                                                </ul>
                                                <div className="pt-classic-footer">
                                                    <a
                                                        className="button button-default-outline button-icon button-icon-right button-winona font-weight-regular"
                                                        href="/#/SmartRemote"
                                                    >
                                                        <div className="content-original">
                                                            <span className="icon mdi mdi-arrow-right" />
                                                            Read more
                                                        </div>
                                                        <div className="content-dubbed">
                                                            <span className="icon mdi mdi-arrow-right" />
                                                            Read more
                                                        </div>
                                                    </a>
                                                </div>
                                            </article>
                                            <article
                                                className="pt-classic pt-classic_style-2 pt-classic_preferred wow scaleIn item"
                                                style={{
                                                    animationName: "none",
                                                    minWidth: "300px",
                                                }}
                                            >
                                                <div className="pt-classic-header">
                                                    <h4 className="pt-classic-title">
                                                        Xtension 4C+
                                                    </h4>
                                                    <img src="images/X4C.png"  style={{maxWidth : "100px",display : "inline-block"}} width={1000}
											        height={1000}/>
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
                                                                4699
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
                                                                15597
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
                                                    <li>Smart Control of upto 5 appliances</li>
                                                    <li>Fan-speed control</li>
                                                    <li>Set schedules and automations</li>
                                                    <li>Fits inside existing switch board</li>
                                                    <li>Voice control with Alexa</li>
                                                </ul>
                                                <div className="pt-classic-footer">
                                                    <a
                                                        className="button button-secondary button-shadow button-icon button-icon-right button-winona font-weight-regular"
                                                        href="/#/Xtension4C"
                                                    >
                                                        <div className="content-original">
                                                            <span className="icon mdi mdi-arrow-right" />
                                                            Read More
                                                        </div>

                                                        <div className="content-dubbed">
                                                            <span className="icon mdi mdi-arrow-right" />
                                                            Read More
                                                        </div>
                                                    </a>

                                                    <p className="pt-classic-note">
                                                        #Recommended
                                                    </p>
                                                </div>
                                            </article>
                                            <article
                                                className="pt-classic pt-classic_style-3 wow slideInLeftLg"
                                                data-wow-delay=".5s"
                                                style={{
                                                    animationDelay: "0.5s",
                                                    animationName: "none",
                                                }}
                                            >
                                                <h4 className="pt-classic-title">
                                                    Motion Sensor
                                                </h4>
                                                <img src="images/Motion-Sensor.png"  style={{maxWidth : "110px"}}  
                                                    />
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
                                                            499
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
                                                            499
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="pt-classic-divider" />
                                                <ul className="pt-classic-list">
                                                    <li>Converts normal light to motion sensor based light</li>
                                                    <li>Fits to any existing Tubelight or Bulb</li>
                                                    <li>No additional wiring</li>
                                                    <li>Covers 10ft distance and 120⁰ angle for detection</li>
                                                </ul>
                                                <div className="pt-classic-footer">
                                                    <a
                                                        className="button button-default-outline button-icon button-icon-right button-winona font-weight-regular"
                                                        href="/#/MotionSensor"
                                                    >
                                                        <div className="content-original">
                                                            <span className="icon mdi mdi-arrow-right" />
                                                            Read More
                                                        </div>
                                                        <div className="content-dubbed">
                                                            <span className="icon mdi mdi-arrow-right" />
                                                            Read More
                                                        </div>
                                                    </a>
                                                </div>
                                            </article>
                                        </OwlCarousel>

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



                    {/* ---------------------------------- FAQ Section ---------------------------------- */}
                    <section
                        id="FAQ"
                        className="section section-md bg-gray-100 text-center wow fadeInUp"
                        data-wow-delay=".3s">
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
                            {/* <div
								className="row row-30 justify-content-center justify-content-lg-start wow fadeIn"
								id="app-accordion"
								data-wow-delay=".2s"
							> */}
                            {/* --------------------------- */}
                            <div
                                className="accordion  row row-30 justify-content-center justify-content-lg-start flex-column flex-md-row"
                                id="faqAccordion"
                                data-wow-delay=".2s"
                            >
                                {/* FAQ Column - 1 */}
                                <div className="col-md-10 col-lg-6 wow fadeInLeft accordion-list">
                                    <div className="accordion-list">
                                        <div
                                            className="card-group-custom card-group-classic card-group-classic_1"
                                            role="tablist"
                                            aria-multiselectable="false"
                                        >
                                            <article className="card card-custom card-classic">
                                                <div
                                                    className="card-header"
                                                    id="faq-accordion-heading-4"
                                                    role="tab"
                                                >
                                                    <div className="card-title">
                                                        <a
                                                            className="card-link"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#faq-accordion-collapse-4"
                                                            aria-controls="faq-accordion-collapse-4"
                                                            aria-expanded="true"
                                                        >
                                                            What does "MIBAiO" mean?
                                                            <div className="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    className="collapse show"
                                                    id="faq-accordion-collapse-4"
                                                    role="tabpanel"
                                                    aria-labelledby="faq-accordion-heading-4"
                                                    data-parent="#faqAccordion"
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
                                                    id="faq-accordion-heading-1"
                                                    role="tab"
                                                >
                                                    <div className="card-title">
                                                        <a
                                                            className="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#faq-accordion-collapse-1"
                                                            aria-controls="faq-accordion-collapse-1"
                                                            aria-expanded="false"
                                                        > What are the key
                                                            features of your
                                                            product?
                                                            <div className="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    className="collapse"
                                                    id="faq-accordion-collapse-1"
                                                    role="tabpanel"
                                                    aria-labelledby="faq-accordion-heading-1"
                                                    data-parent="#faqAccordion"
                                                >
                                                    <div className="card-body">
                                                        <p>
                                                            Our product makes your existing devices Smart. You can control and monitor from anywhere in the world with
                                                            all-in-one functionality which includes
                                                            Voice control, Manual control along with App control Internet and
                                                            Bluetooth. 
                                                            Our hardware as well as software is 100% Made in INDIA. 
                                                            Our cloud servers are located in India to ensure data privacy and security unlike our competitors who use Chineese hardware and app platforms.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article className="card card-custom card-classic">
                                                <div
                                                    className="card-header"
                                                    id="faq-accordion-heading-2"
                                                    role="tab"
                                                >
                                                    <div className="card-title">
                                                        <a
                                                            className="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#faq-accordion-collapse-2"
                                                            aria-controls="faq-accordion-collapse-2"
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
                                                    id="faq-accordion-collapse-2"
                                                    role="tabpanel"
                                                    aria-labelledby="faq-accordion-heading-2"
                                                    data-parent="#faqAccordion"
                                                >
                                                    <div className="card-body">
                                                        <p>
                                                            The major advantage is Smart &
                                                            Easy life: You experience a #smarthome and other exciting features under ₹6000. <br />
                                                            Second advantage is
                                                            Modular Design: Our
                                                            products are carefully
                                                            designed to fit aesthethically with any existing electrical switchboard with no extra wiring. It can be at your house or at your workplace.
                                                            <br />
                                                            We are working towards the
                                                            #MakeInIndia, #DigitalIndia,
                                                            #AatmanirbharBharat initiatives.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                {/* FAQ Column - 2 */}
                                <div className="col-md-10 col-lg-6 wow fadeInRight">
                                    <div className="accordion-list">
                                        <div
                                            className="card-group-custom card-group-classic card-group-classic_1"
                                            role="tablist"
                                            aria-multiselectable="false"
                                        >


                                            <article className="card card-custom card-classic">
                                                <div
                                                    className="card-header"
                                                    id="faq-accordion-heading-3"
                                                    role="tab"
                                                >
                                                    <div className="card-title">
                                                        <a
                                                            className="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#faq-accordion-collapse-3"
                                                            aria-controls="faq-accordion-collapse-3"
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
                                                    id="faq-accordion-collapse-3"
                                                    role="tabpanel"
                                                    aria-labelledby="faq-accordion-heading-3"
                                                    data-parent="#faqAccordion"
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
                                                    id="faq-accordion-heading-5"
                                                    role="tab"
                                                >
                                                    <div className="card-title">
                                                        <a
                                                            className="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#faq-accordion-collapse-5"
                                                            aria-controls="faq-accordion-collapse-5"
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
                                                    id="faq-accordion-collapse-5"
                                                    role="tabpanel"
                                                    aria-labelledby="faq-accordion-heading-5"
                                                    data-parent="#faqAccordion"
                                                >
                                                    <div className="card-body">
                                                        <p>
                                                            Yes, with Xtension 4C+ you can regulate the speed of the fan with your app along with fan regulator<br /> And also with your voice!🎙️
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article className="card card-custom card-classic">
                                                <div
                                                    className="card-header"
                                                    id="faq-accordion-heading-6"
                                                    role="tab"
                                                >
                                                    <div className="card-title">
                                                        <a
                                                            className="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#faq-accordion-collapse-6"
                                                            aria-controls="faq-accordion-collapse-6"
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
                                                    id="faq-accordion-collapse-6"
                                                    role="tabpanel"
                                                    aria-labelledby="faq-accordion-heading-6"
                                                    data-parent="#faqAccordion"
                                                >
                                                    <div className="card-body">
                                                        <p>
                                                            Ask 🎙️ Alexa to turn off your hall light<br />
                                                            Set a routine to turn on outdoor light sharp at 6:45pm everyday ⏰ <br />
                                                            Monitor
                                                            electricity consumption
                                                            of your connected appliances
                                                            on your App 📊 And much more!
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >    
                    </section >

                    {/* ------------- FAQ Section End ----------*/}


                    {/* Upgrate To MIBAiO section */}
                    <section className="section section-md text-center">
                        <div className="container">
                            <span className="normal text-primary font-weight-bold text-uppercase wow fadeIn">
                                lifestyle 2.0
                            </span>
                            <h3
                                className="offset-top-7 wow fadeIn"
                                data-wow-delay=".1s"
                            >
                                One App {" "}
                                <span style={{ color: "#0accbe" }}>
                                    Versatile Control
                                </span>
                            </h3>

                            {/* New App Video Here */}
                            <div className="row" ref={appScreenRef}>
                                <div className="col-md-10 mx-auto">
                                    <video
                                        width="100%"
                                        playsInline={true}
                                        ref={appVideoRef}
                                        muted
                                        style={{
                                            alignContent: "center",
                                        }}
                                    >
                                        <source
                                            src={appdemo}
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>

                        </div>
                        <div className="group" style={{ padding: "15px" }}>
                            <a href="https://play.google.com/store/apps/details?id=com.MIBAiO.mibaio_alpha&pcampaignid=web_share">
                                <img
                                            src={gplay}
                                            alt="MIBAiO-app-play-store"
                                            className="z-depth-0 img-fluid wow fadeInUp"
                                            data-wow-delay=".5s"
                                            width={150}
                                        />
                            </a>
                            <a href="https://apps.apple.com/in/app/mibaio-smart-home/id6483760428">
                                <img
                                            src={apstore}
                                            alt="MIBAiO-app-store"
                                            className="z-depth-0 img-fluid wow fadeInUp"
                                            data-wow-delay=".5s"
                                        />
                            </a>
                        </div>
                    </section >

                    <CustomFooter />
                </div >
                <div className="snackbars" id="form-output-global" />
            </div >
            {/* </div> */}
        </>
    );
};

export default Home;
