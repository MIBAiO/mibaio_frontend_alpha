import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import { useLoadingWithRefresh } from "../hooks/useLoadingWithRefresh";
import NavigationBar from "../components/navigationbar";
import CustomFooter from "../components/customfooter";
import Lottie from "react-lottie";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/style.css";

import * as aboutusAnimation from "../assets/lottie/aboutus.json";

const AboutUs = () => {
    const { loading } = useLoadingWithRefresh();

    const [lottieState, setLottieState] = useState({
        isStopped: false,
        isPaused: false,
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: aboutusAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return loading ? (
        <Loader />
    ) : (
        <div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `.ie-panel {
                        display: none;            
                        background: #212121;            
                        padding: 10px 0;            
                        box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, .3);            
                        clear: both;            
                        text-align: center;            
                        position: relative;            
                        z-index: 1;        
                    }        
                    html.ie-10 .ie-panel,        
                    html.lt-ie-10 .ie-panel {            
                        display: block;        
                    }`,
                }}
            />

            <div className="page">
                {/* Page Header*/}
                <section className="section page-header-3 header-section">
                    <NavigationBar />
                </section>
                <section className="breadcrumbs-custom">
                    <div className="breadcrumbs-custom-main bg-default">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-9">
                                    <h3 className="text-white breadcrumbs-custom-title">
                                        A Few Words About Us
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="breadcrumbs-custom-aside text-white">
                            <ul className="breadcrumbs-custom-path">
                                <li>
                                    <a href="index.php">Home</a>
                                </li>
                                <li className="active text-white">About Us</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* Who we Are*/}
                <section class="section section-md">
                    <div class="container">
                        <div class="row row-50 align-items-center">
                            <div class="col-md-8 col-lg-7">
                                <h3>We're a Passionate Team of Innovators!</h3>
                                <p class="text-gray-900">
                                    MIBAiO was conceptualized in 2019 to
                                    simplify everyday living.
                                    <br />
                                    We want homes, offices, restaurants and
                                    other institutions to get smarter where
                                    functions like safety, energy efficiency &
                                    convenience could be managed by smart,
                                    space-saving automation solutions.
                                </p>
                                <br />
                                <p class="text-gray-900">
                                    Using intensive research and developing
                                    products based on futuristic tech, we have
                                    engineered products that can
                                    transform/upgrade residential & commercial
                                    properties across India.
                                    <br />
                                    <br /> From scheduling appliances to
                                    controlling devices from anywhere in the
                                    world, our product has been carefully
                                    crafted to ensure that you can easily
                                    upgrade to a comfortable, smarter and
                                    luxurious lifestyle!
                                </p>
                            </div>
                            <div class="col-md-4 col-lg-5">
                                <Lottie
                                    options={defaultOptions}
                                    isStopped={lottieState.isStopped}
                                    isPaused={lottieState.isPaused}
                                />
                                {/* <lottie-player
                                    className="lottie-animate"
                                    src="https://assets6.lottiefiles.com/packages/lf20_qbmtrbg9.json"
                                    // background="transparent"
                                    speed={1}
                                    hover
                                    loop
                                    autoPlay
                                ></lottie-player> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* About*/}
                <section class="section section-md bg-gray-100">
                    <div class="container">
                        <div class="isotope row row-30">
                            <div class="col-12 col-sm-6 col-md-4 isotope-item">
                                <div class="block-ratio block-ratio-1">
                                    <div class="block-ratio-dummy"></div>
                                    <div class="block-ratio-content">
                                        <div class="box-custom-1">
                                            <h2>12+</h2>
                                            <h4 class="extra-lighter">
                                                Team <br /> Members
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-8 isotope-item">
                                <div class="block-ratio block-ratio-3">
                                    <div class="block-ratio-dummy"></div>
                                    <div
                                        class="block-ratio-content bg-image"
                                        style={{
                                            backgroundImage:
                                                "url(/assets/img/about-1-770x426.jpg)",
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 isotope-item">
                                <div class="block-ratio block-ratio-2">
                                    <div class="block-ratio-dummy"></div>
                                    <div
                                        class="block-ratio-content bg-image"
                                        style={{
                                            backgroundImage:
                                                "url(/assets/img/about-2-369x432.jpg)",
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 isotope-item">
                                <div class="block-ratio block-ratio-1">
                                    <div class="block-ratio-dummy"></div>
                                    <div
                                        class="block-ratio-content bg-image"
                                        style={{
                                            backgroundImage:
                                                "url(/assets/img/about-3-370x251.jpg)",
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 isotope-item">
                                <div class="block-ratio block-ratio-1">
                                    <div class="block-ratio-dummy"></div>
                                    <div
                                        class="block-ratio-content bg-image"
                                        style={{
                                            backgroundImage:
                                                "url(/assets/img/about-4-370x251.jpg)",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section oh">
                    <div class="container">
                        <div class="row justify-content-center justify-content-lg-between">
                            <div class="col-md-10 col-lg-5 col-xl-4">
                                <div class="section-md">
                                    <span class="normal-2 text-primary font-weight-bold text-uppercase wow fadeIn">
                                        Our History
                                    </span>
                                    <h3>Our Path to Global Success</h3>
                                    <p class="big offset-top-3">
                                        Our Research paper has been published in
                                        IEEE Xplore® Journal.
                                    </p>
                                    <a
                                        class="button button-secondary button-winona"
                                        href="https://ieeexplore.ieee.org/document/9410775"
                                    >
                                        Read Research
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-10 col-lg-7">
                                <div class="timeline-classic timeline-classic_1">
                                    <div class="timeline-classic-item">
                                        <div class="timeline-classic-item-inner">
                                            <div class="timeline-classic-item-decoration"></div>
                                            <p class="timeline-classic-title">
                                                <span class="text-primary">
                                                    February 2020.
                                                </span>
                                                <span>The Early Days</span>
                                            </p>
                                            <div class="timeline-classic-text">
                                                <p>
                                                    MIB-AIO was in the ideation
                                                    stage where our founder was
                                                    doing his research on it as
                                                    a final year BE project.
                                                    This is when we realised our
                                                    project could be made into a
                                                    commercial product.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-classic-item">
                                        <div class="timeline-classic-item-inner">
                                            <div class="timeline-classic-item-decoration"></div>
                                            <p class="timeline-classic-title">
                                                <span class="text-primary">
                                                    April 2021.
                                                </span>
                                                <span>Establishment</span>
                                            </p>
                                            <div class="timeline-classic-text">
                                                <p>
                                                    On the Auspicious day of
                                                    Gudhi Padwa (New Year), Our
                                                    Company was incorporated
                                                    officially by Govt of India.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-classic-item">
                                        <div class="timeline-classic-item-inner">
                                            <div class="timeline-classic-item-decoration"></div>
                                            <p class="timeline-classic-title">
                                                <span class="text-primary">
                                                    August 2021.
                                                </span>
                                                <span>Startup Incubation</span>
                                            </p>
                                            <div class="timeline-classic-text">
                                                <p>
                                                    Our company, Mibaio Elmec
                                                    Smart Automation Pvt Ltd got
                                                    incubated at PICT-EDC and we
                                                    started our offline
                                                    operations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-classic-item">
                                        <div class="timeline-classic-item-inner">
                                            <div class="timeline-classic-item-decoration"></div>
                                            <p class="timeline-classic-title">
                                                <span class="text-primary">
                                                    March 2022.
                                                </span>
                                                <span>
                                                    Worldwide Recognition
                                                </span>
                                            </p>
                                            <div class="timeline-classic-text">
                                                <p>
                                                    Some nice text needs to be
                                                    added over here.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section section-md bg-gray-100 text-center">
                    <div class="container">
                        <span class="normal text-primary font-weight-bold text-uppercase wow fadeIn">
                            meet our team
                        </span>
                        <h3
                            class="offset-top-7 font-weight-regular typed-text-heading wow fadeIn"
                            data-wow-delay=".1s"
                        >
                            People that Shape Our Success
                        </h3>
                        <OwlCarousel
                            dots={true}
                            nav={false}
                            stagePadding={0}
                            loop={true}
                            margin={30}
                            mouseDrag={false}
                            items={3}
                            className="owl-theme"
                        >
                            {/* <div
                            class="owl-carousel owl-carousel_profile-modern"
                            data-items="1"
                            data-sm-items="2"
                            data-lg-items="3"
                            data-xl-items="4"
                            data-dots="true"
                            data-nav="false"
                            data-stage-padding="0"
                            data-loop="true"
                            data-margin="30"
                            data-mouse-drag="false"
                        > */}
                            <article class="profile-modern">
                                <figure class="profile-modern-figure">
                                    <img
                                        class="profile-modern-image"
                                        src="images/profile-pic(9).png"
                                        alt="Picture of CEO"
                                        width="369"
                                        height="315"
                                    />
                                </figure>
                                <div class="profile-modern-main">
                                    <div class="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 class="profile-modern-name">
                                            Vedant S. Mane
                                        </h4>
                                        <p class="profile-modern-position">
                                            Founder & CEO
                                        </p>
                                    </div>
                                    <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 class="profile-modern-main-title extra-lighter">
                                            Get in Touch
                                        </h4>
                                        <ul class="list-inline list-inline-xs">
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-facebook"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-twitter"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-instagram"
                                                    href="#"
                                                ></a>
                                            </li>
                                        </ul>
                                        <div class="profile-modern-toggle mdi mdi-arrow-top-right"></div>
                                    </div>
                                </div>
                            </article>
                            <article class="profile-modern">
                                <figure class="profile-modern-figure">
                                    <img
                                        class="profile-modern-image"
                                        src="images/profile-pic(7).png"
                                        alt="Picture of Dr. Bansod"
                                        width="369"
                                        height="315"
                                    />
                                </figure>
                                <div class="profile-modern-main">
                                    <div class="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 class="profile-modern-name">
                                            Dr. Gaurav Bansod
                                        </h4>
                                        <p class="profile-modern-position">
                                            Mentor
                                        </p>
                                    </div>
                                    <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 class="profile-modern-main-title extra-lighter">
                                            Get in Touch
                                        </h4>
                                        <ul class="list-inline list-inline-xs">
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-facebook"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-twitter"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-instagram"
                                                    href="#"
                                                ></a>
                                            </li>
                                        </ul>
                                        <div class="profile-modern-toggle mdi mdi-arrow-top-right"></div>
                                    </div>
                                </div>
                            </article>
                            <article class="profile-modern">
                                <figure class="profile-modern-figure">
                                    <img
                                        class="profile-modern-image"
                                        src="images/profile-pic(15).png"
                                        alt=""
                                        width="369"
                                        height="315"
                                    />
                                </figure>
                                <div class="profile-modern-main">
                                    <div class="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 class="profile-modern-name">
                                            Anagh Mirji
                                        </h4>
                                        <p class="profile-modern-position">
                                            UI/UX Designer
                                        </p>
                                    </div>
                                    <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 class="profile-modern-main-title extra-lighter">
                                            Get in Touch
                                        </h4>
                                        <ul class="list-inline list-inline-xs">
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-facebook"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-twitter"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-instagram"
                                                    href="#"
                                                ></a>
                                            </li>
                                        </ul>
                                        <div class="profile-modern-toggle mdi mdi-arrow-top-right"></div>
                                    </div>
                                </div>
                            </article>
                            <article class="profile-modern">
                                <figure class="profile-modern-figure">
                                    <img
                                        class="profile-modern-image"
                                        src="images/profile-pic(14).png"
                                        alt=""
                                        width="369"
                                        height="315"
                                    />
                                </figure>
                                <div class="profile-modern-main">
                                    <div class="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 class="profile-modern-name">
                                            Disha Gaikwad
                                        </h4>
                                        <p class="profile-modern-position">
                                            Hardware Developer
                                        </p>
                                    </div>
                                    <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 class="profile-modern-main-title extra-lighter">
                                            Get in Touch
                                        </h4>
                                        <ul class="list-inline list-inline-xs">
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-facebook"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-twitter"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-instagram"
                                                    href="#"
                                                ></a>
                                            </li>
                                        </ul>
                                        <div class="profile-modern-toggle mdi mdi-arrow-top-right"></div>
                                    </div>
                                </div>
                            </article>
                            <article class="profile-modern">
                                <figure class="profile-modern-figure">
                                    <img
                                        class="profile-modern-image"
                                        src="images/profile-pic(13).png"
                                        alt=""
                                        width="369"
                                        height="315"
                                    />
                                </figure>
                                <div class="profile-modern-main">
                                    <div class="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 class="profile-modern-name">
                                            Shikhar Singh
                                        </h4>
                                        <p class="profile-modern-position">
                                            Firmware Developer
                                        </p>
                                    </div>
                                    <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 class="profile-modern-main-title extra-lighter">
                                            Get in Touch
                                        </h4>
                                        <ul class="list-inline list-inline-xs">
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-facebook"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-twitter"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-instagram"
                                                    href="#"
                                                ></a>
                                            </li>
                                        </ul>
                                        <div class="profile-modern-toggle mdi mdi-arrow-top-right"></div>
                                    </div>
                                </div>
                            </article>
                            <article class="profile-modern">
                                <figure class="profile-modern-figure">
                                    <img
                                        class="profile-modern-image"
                                        src="images/profile-pic(10).png"
                                        alt=""
                                        width="369"
                                        height="315"
                                    />
                                </figure>
                                <div class="profile-modern-main">
                                    <div class="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 class="profile-modern-name">
                                            Yash Kalavadiya
                                        </h4>
                                        <p class="profile-modern-position">
                                            Web Developer
                                        </p>
                                    </div>
                                    <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 class="profile-modern-main-title extra-lighter">
                                            Get in Touch
                                        </h4>
                                        <ul class="list-inline list-inline-xs">
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-facebook"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-twitter"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-instagram"
                                                    href="#"
                                                ></a>
                                            </li>
                                        </ul>
                                        <div class="profile-modern-toggle mdi mdi-arrow-top-right"></div>
                                    </div>
                                </div>
                            </article>
                            <article class="profile-modern">
                                <figure class="profile-modern-figure">
                                    <img
                                        class="profile-modern-image"
                                        src="images/profile-pic(6).png"
                                        alt=""
                                        width="369"
                                        height="315"
                                    />
                                </figure>
                                <div class="profile-modern-main">
                                    <div class="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 class="profile-modern-name">
                                            Vedant Kulkarni
                                        </h4>
                                        <p class="profile-modern-position">
                                            App Developer
                                        </p>
                                    </div>
                                    <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 class="profile-modern-main-title extra-lighter">
                                            Get in Touch
                                        </h4>
                                        <ul class="list-inline list-inline-xs">
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-facebook"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-twitter"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-instagram"
                                                    href="#"
                                                ></a>
                                            </li>
                                        </ul>
                                        <div class="profile-modern-toggle mdi mdi-arrow-top-right"></div>
                                    </div>
                                </div>
                            </article>
                            <article class="profile-modern">
                                <figure class="profile-modern-figure">
                                    <img
                                        class="profile-modern-image"
                                        src="images/profile-pic(15).png"
                                        alt=""
                                        width="369"
                                        height="315"
                                    />
                                </figure>
                                <div class="profile-modern-main">
                                    <div class="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 class="profile-modern-name">
                                            Anagh Mirji
                                        </h4>
                                        <p class="profile-modern-position">
                                            Design Head
                                        </p>
                                    </div>
                                    <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 class="profile-modern-main-title extra-lighter">
                                            Get in Touch
                                        </h4>
                                        <ul class="list-inline list-inline-xs">
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-facebook"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-twitter"
                                                    href="#"
                                                ></a>
                                            </li>
                                            <li>
                                                <a
                                                    class="icon icon-md mdi mdi-instagram"
                                                    href="#"
                                                ></a>
                                            </li>
                                        </ul>
                                        <div class="profile-modern-toggle mdi mdi-arrow-top-right"></div>
                                    </div>
                                </div>
                            </article>
                            {/* </div> */}
                        </OwlCarousel>
                    </div>
                </section>

                <section
                    class="parallax-container section-lg bg-accent text-center"
                    style={{
                        background:
                            "linear-gradient(to bottom,#4a80f0, transparent)",
                    }}
                >
                    <div class="parallax-content">
                        <div class="container">
                            <span class="normal text-white font-weight-bold text-uppercase wow fadeIn">
                                Testimonials
                            </span>
                            <h3
                                class="offset-top-7 wow fadeIn"
                                data-wow-delay=".1s"
                            >
                                What our customers feel about us
                            </h3>
                            <OwlCarousel
                                items={1}
                                mouseDrag={false}
                                margin={30}
                                loop
                                nav
                                dots
                                className="owl-theme owl-carousel owl-carousel_type-1"
                                stagePadding={0}
                            >
                                {/* <div
                                class="owl-carousel owl-carousel_type-1"
                                data-items="1"
                                data-dots="true"
                                data-nav="true"
                                data-stage-padding="0"
                                data-loop="true"
                                data-margin="30"
                                data-mouse-drag="false"
                            > */}
                                <blockquote class="quote-classic">
                                    <img
                                        class="quote-classic-avatar"
                                        src="images/testimonials-1-102x102.jpg"
                                        alt=""
                                        width="102"
                                        height="102"
                                    />
                                    <div class="quote-classic-text">
                                        <p>
                                            With MIBAiO installed at my house, I
                                            am tension free of all the
                                            appliances as I have the real time
                                            status on my phone screen and can
                                            control it from anywhere in the
                                            world!.
                                        </p>
                                    </div>
                                    <div class="quote-classic-meta">
                                        <cite class="quote-classic-cite">
                                            Mr. Prasad S
                                        </cite>
                                        <p class="quote-classic-position">
                                            Regular Customer
                                        </p>
                                    </div>
                                </blockquote>

                                <blockquote class="quote-classic">
                                    <img
                                        class="quote-classic-avatar"
                                        src="images/testimonials-2-102x102.jpg"
                                        alt=""
                                        width="102"
                                        height="102"
                                    />
                                    <div class="quote-classic-text">
                                        <p>
                                            The Voice control feature is really
                                            cool! Setting up lights and scenes
                                            whenever guests arrives puts an
                                            impression.
                                        </p>
                                    </div>
                                    <div class="quote-classic-meta">
                                        <cite class="quote-classic-cite">
                                            Ms. Swati K
                                        </cite>
                                        <p class="quote-classic-position">
                                            Regular Customer
                                        </p>
                                    </div>
                                </blockquote>

                                <blockquote class="quote-classic">
                                    <img
                                        class="quote-classic-avatar"
                                        src="images/testimonials-3-102x102.jpg"
                                        alt=""
                                        width="102"
                                        height="102"
                                    />
                                    <div class="quote-classic-text">
                                        <p>
                                            As promised, MIBAiO has upgraded my
                                            lifestyle and my appliances. I like
                                            the automatic scheduling feature
                                            which runs exactly at time set which
                                            delivers me an delightful
                                            experience!. Kudos to MIBAiO team!!
                                        </p>
                                    </div>
                                    <div class="quote-classic-meta">
                                        <cite class="quote-classic-cite">
                                            Ms. Ankita R
                                        </cite>
                                        <p class="quote-classic-position">
                                            Regular Customer
                                        </p>
                                    </div>
                                </blockquote>
                                {/* </div> */}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>

                {/* Welcome to Team*/}
                <section className="section text-center">
                    <div className="container">
                        <div className="list-blocks-outer">
                            <div className="list-blocks">
                                <div className="list-blocks-item">
                                    <div className="list-blocks-item-inner">
                                        <div className="list-blocks-counter" />
                                        <p className="list-blocks-title">
                                            Creative Space
                                        </p>
                                        <p>
                                            Our office is a creative space for
                                            you to work seamlessly, without any
                                            interruptions!
                                        </p>
                                    </div>
                                </div>
                                <div className="list-blocks-item">
                                    <div className="list-blocks-item-inner">
                                        <div className="list-blocks-counter" />
                                        <p className="list-blocks-title">
                                            Cookies
                                        </p>
                                        <p>
                                            We are well experienced with the
                                            fact that "Hunger achhe achho ko
                                            badal deta hai". Don't worry, we've
                                            got your snacks covered!
                                        </p>
                                    </div>
                                </div>
                                <div className="list-blocks-item list-blocks-item_caption">
                                    <div className="list-blocks-item-inner">
                                        <h3>
                                            Join Our{" "}
                                            <br className="d-none d-sm-block" />{" "}
                                            Team
                                        </h3>
                                        <a
                                            className="button button-secondary button-winona"
                                            href="careers.html"
                                        >
                                            Browse Vacancies
                                        </a>
                                    </div>
                                </div>
                                <div className="list-blocks-item">
                                    <div className="list-blocks-item-inner">
                                        <div className="list-blocks-counter" />
                                        <p className="list-blocks-title">
                                            Growing Career
                                        </p>
                                        <p>
                                            As a start-up we have a huge career
                                            lined up in front of us. Various
                                            positions are open. Grab the
                                            opportunity!
                                        </p>
                                    </div>
                                </div>
                                <div className="list-blocks-item">
                                    <div className="list-blocks-item-inner">
                                        <div className="list-blocks-counter" />
                                        <p className="list-blocks-title">
                                            Benefits
                                        </p>
                                        <p>
                                            "Experience is the only teacher we
                                            have" -Swami Vivekananda <br />
                                            You'll gain a lot of experience
                                            working <strong>with </strong>MIBAiO
                                            team to enhance your career.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="list-blocks-item">
                                    <div className="list-blocks-item-inner">
                                        <div className="list-blocks-counter" />
                                        <p className="list-blocks-title">
                                            Collaboration
                                        </p>
                                        <p>
                                            Career at MIBAiO is beneficial for
                                            you as we have collaborations with
                                            government as well as private firms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* People Ready to Change the World */}

                {/* Testimonials*/}

                {/* Our Investors*/}

                <CustomFooter />
            </div>
            <div className="snackbars" id="form-output-global" />
        </div>
    );
};

export default AboutUs;
