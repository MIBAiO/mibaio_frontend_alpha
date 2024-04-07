import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import team1 from "./team1.jpg";
import NavigationBar from "../components/navigationbar";
import CustomFooter from "../components/customfooter";
import WOW from "wowjs";

const OurTeam = () => {

    useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init();
	});

    return (
        <div>
            {/* <div className="preloader" id="loading"> */}
            {/* <div className="preloader-body">
            <div id="loading-center-object">
              <div className="object" id="object_four" />
              <div className="object" id="object_three" />
              <div className="object" id="object_two" />
              <div className="object" id="object_one" />
            </div>
          </div>
        </div> */}
            <div className="page">
                <section className="section page-header-3 header-section">
                    {/* RD Navbar*/}
                    <NavigationBar />
                </section>
                <section className="breadcrumbs-custom section-gray wow fadeInDown">
                    <div className="breadcrumbs-custom-main bg-default">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-9">
                                    <h3 className="text-white breadcrumbs-custom-title">
                                        Meet our team
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="breadcrumbs-custom-aside text-white">
                            <ul className="breadcrumbs-custom-path">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="about-us.html">About</a>
                                </li>
                                <li className="active text-white">Our Team</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="section section-lg wow fadeInUp">
                    <div class="container">
                        <div class="row designTextContainer row-50 row-xl-70">
                            <div class="col-sm-6 col-lg-4 col-xl-3">
                                <article class="profile-modern">
                                    <figure class="profile-modern-figure">
                                        <img
                                            class="profile-modern-image"
                                            src="images/profile-pic(9).png"
                                            alt=""
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
                                                Managing Director
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
                                                        href="https://www.facebook.com/Im.vedantmane"
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
                                                        href="https://www.instagram.com/vedant_suryakant_mane/"
                                                    ></a>
                                                </li>
                                            </ul>
                                            <div class="profile-modern-toggle mdi mdi-arrow-top-right"></div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-xl-3">
                                <article class="profile-modern">
                                    <figure class="profile-modern-figure">
                                        <img
                                            class="profile-modern-image"
                                            src="images/profile-pic(7).png"
                                            alt=""
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
                                                Get in touch
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
                            </div>
{/*                             <div class="col-sm-6 col-lg-4 col-xl-3">
                                <article class="profile-modern">
                                    <figure class="profile-modern-figure">
                                        <img
                                            class="profile-modern-image"
                                            src="images/team-3-369x315.jpg"
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
                                                Get in touch
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
                            </div>
                            <div class="col-sm-6 col-lg-4 col-xl-3">
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
                                                Get in touch
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
                            </div>
                            <div class="col-sm-6 col-lg-4 col-xl-3">
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
                                                Get in touch
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
                            </div>
                            <div class="col-sm-6 col-lg-4 col-xl-3">
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
                                                Get in touch
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
                            </div>
                            <div class="col-sm-6 col-lg-4 col-xl-3">
                                <article class="profile-modern">
                                    <figure class="profile-modern-figure">
                                        <img
                                            class="profile-modern-image"
                                            src="images/profile-pic(8).png"
                                            alt=""
                                            width="369"
                                            height="315"
                                        />
                                    </figure>
                                    <div class="profile-modern-main">
                                        <div class="profile-modern-main-item profile-modern-main-item_primary">
                                            <h4 class="profile-modern-name">
                                                Harshwardhan Atkare
                                            </h4>
                                            <p class="profile-modern-position">
                                                App Developer
                                            </p>
                                        </div>
                                        <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 class="profile-modern-main-title extra-lighter">
                                                Get in touch
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
                            </div>
                            <div class="col-sm-6 col-lg-4 col-xl-3">
                                <article class="profile-modern">
                                    <figure class="profile-modern-figure">
                                        <img
                                            class="profile-modern-image"
                                            src="images/team-8-369x315.jpg"
                                            alt=""
                                            width="369"
                                            height="315"
                                        />
                                    </figure>
                                    <div class="profile-modern-main">
                                        <div class="profile-modern-main-item profile-modern-main-item_primary">
                                            <h4 class="profile-modern-name">
                                                Anirudh Bala Chowdhury
                                            </h4>
                                            <p class="profile-modern-position">
                                                Graphic Design
                                            </p>
                                        </div>
                                        <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 class="profile-modern-main-title extra-lighter">
                                                Get in touch
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
                            </div>
                            <div class="col-sm-6 col-lg-4 col-xl-3">
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
                                                Get in touch
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
                            </div>

                            <div class="col-sm-6 col-lg-4 col-xl-3">
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
                                                Gaurav Chawda
                                            </h4>
                                            <p class="profile-modern-position">
                                                Web Developer
                                            </p>
                                        </div>
                                        <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 class="profile-modern-main-title extra-lighter">
                                                Get in touch
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
                            </div>
                            <div class="col-sm-6 col-lg-4 col-xl-3">
                                <article class="profile-modern">
                                    <figure class="profile-modern-figure">
                                        <img
                                            class="profile-modern-image"
                                            src="images/team-8-369x315.jpg"
                                            alt=""
                                            width="369"
                                            height="315"
                                        />
                                    </figure>
                                    <div class="profile-modern-main">
                                        <div class="profile-modern-main-item profile-modern-main-item_primary">
                                            <h4 class="profile-modern-name">
                                                Siddhesh Kotkar
                                            </h4>
                                            <p class="profile-modern-position">
                                                Web Developer
                                            </p>
                                        </div>
                                        <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 class="profile-modern-main-title extra-lighter">
                                                Get in touch
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
                            </div>
                            <div class="col-sm-6 col-lg-4 col-xl-3">
                                <article class="profile-modern">
                                    <figure class="profile-modern-figure">
                                        <img
                                            class="profile-modern-image"
                                            src="images/team-8-369x315.jpg"
                                            alt=""
                                            width="369"
                                            height="315"
                                        />
                                    </figure>
                                    <div class="profile-modern-main">
                                        <div class="profile-modern-main-item profile-modern-main-item_primary">
                                            <h4 class="profile-modern-name">
                                                Aryan Sonsale
                                            </h4>
                                            <p class="profile-modern-position">
                                                Copy Writer
                                            </p>
                                        </div>
                                        <div class="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 class="profile-modern-main-title extra-lighter">
                                                Get in touch
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
                            </div>*/}
                        </div>
                    </div>
                </section>
                <CustomFooter />
            </div>
            <div className="snackbars" id="form-output-global" />
        </div>
        // </div>
    );
};

export default OurTeam;
