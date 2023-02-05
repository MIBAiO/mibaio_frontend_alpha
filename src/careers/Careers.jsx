//import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import styled from "styled-components";
import { useLoadingWithRefresh } from "../hooks/useLoadingWithRefresh";
import Loader from "../Loader/Loader";
import NavigationBar from "../components/navigationbar";
import CustomFooter from "../components/customfooter";
const Careers = () => {
    const { loading } = useLoadingWithRefresh();
    return loading ? (
        <Loader />
    ) : (
        <>
            <div>
                <div className="ie-panel">
                    <a href="http://windows.microsoft.com/en-US/internet-explorer/">
                        <img
                            src="images/ie8-panel/warning_bar_0000_us.jpg"
                            height={42}
                            width={820}
                            alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."
                        />
                    </a>
                </div>
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
                        <NavigationBar />
                    </section>
                    <section className="breadcrumbs-custom">
                        <div className="breadcrumbs-custom-main bg-default">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-9">
                                        <h3 className="text-white breadcrumbs-custom-title">
                                            Careers
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
                                        <a href="#">Pages</a>
                                    </li>
                                    <li className="active text-white">Careers</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* Your Career Starts Here!*/}
                    <section className="section section-md">
                        <div className="container">
                            <div className="row row-50 flex-lg-row-reverse align-items-center">
                                <div className="col-md-10 col-lg-6">
                                    <div className="inset-1">
                                        <h3>Your Career Starts Here!</h3>
                                        <p className="big">
                                            We seek individuals who share our
                                            values as a means of reinforcing and
                                            furthering the company's successful
                                            philosophy. Our mission is{" "}
                                            <strong>
                                                "To make India known for quality
                                                design and technology"
                                            </strong>
                                            <br />
                                            We can offer you lots of bonuses:
                                        </p>
                                        <ul className="list-style-2 list-style-2_2-cols block-1">
                                            <li>Creative Space</li>
                                            <li>Cookies</li>
                                            <li>Growing Career</li>
                                            <li>Benefits</li>
                                        </ul>
                                        <Link
                                            className="button button-secondary button-winona"
                                            to="/our_team"
                                        >
                                            Join Our Team Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img
                                        className="image-responsive"
                                        src="images/careers-1-598x384.jpg"
                                        alt=""
                                        width={598}
                                        height={384}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Available Vacancies*/}
                    <section className="section section-md bg-gray-100">
                        <div className="container">
                            <h3 className="text-center">Available Vacancies</h3>
                            <div className="row row-30">
                                <div className="col-md-6">
                                    {/* Post Vacancy*/}
                                    <a className="post-vacancy" href="#">
                                        <p className="post-vacancy-title">
                                            iOS Developer
                                        </p>
                                        <div className="post-vacancy-meta">
                                            <ul className="list-objects-inline">
                                                <li>
                                                    <span className="icon text-primary mdi mdi-map-marker" />
                                                    <span>Pune</span>
                                                </li>
                                                <li>
                                                    <span className="icon text-primary mdi mdi-clock" />
                                                    <span>Full Time</span>
                                                </li>
                                                <li>
                                                    <span className="icon text-primary mdi mdi-calendar" />
                                                    <time dateTime="2021-08-01">
                                                        6 hours ago
                                                    </time>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    {/* Post Vacancy*/}
                                    <a className="post-vacancy" href="#">
                                        <p className="post-vacancy-title">
                                            Digital Marketing Manager
                                        </p>
                                        <div className="post-vacancy-meta">
                                            <ul className="list-objects-inline">
                                                <li>
                                                    <span className="icon text-primary mdi mdi-map-marker" />
                                                    <span>Pune</span>
                                                </li>
                                                <li>
                                                    <span className="icon text-primary mdi mdi-clock" />
                                                    <span>Full Time</span>
                                                </li>
                                                <li>
                                                    <span className="icon text-primary mdi mdi-calendar" />
                                                    <time dateTime="2018-01-01">
                                                        6 hours ago
                                                    </time>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    {/* Post Vacancy*/}
                                    <a className="post-vacancy" href="#">
                                        <p className="post-vacancy-title">
                                            UI/UX Designer
                                        </p>
                                        <div className="post-vacancy-meta">
                                            <ul className="list-objects-inline">
                                                <li>
                                                    <span className="icon text-primary mdi mdi-map-marker" />
                                                    <span>Pune</span>
                                                </li>
                                                <li>
                                                    <span className="icon text-primary mdi mdi-clock" />
                                                    <span>Full Time</span>
                                                </li>
                                                <li>
                                                    <span className="icon text-primary mdi mdi-calendar" />
                                                    <time dateTime="2018-01-01">
                                                        6 hours ago
                                                    </time>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    {/* Post Vacancy*/}
                                    <a className="post-vacancy" href="#">
                                        <p className="post-vacancy-title">
                                            Graphic designer
                                        </p>
                                        <div className="post-vacancy-meta">
                                            <ul className="list-objects-inline">
                                                <li>
                                                    <span className="icon text-primary mdi mdi-map-marker" />
                                                    <span>Pune</span>
                                                </li>
                                                <li>
                                                    <span className="icon text-primary mdi mdi-clock" />
                                                    <span>Full Time</span>
                                                </li>
                                                <li>
                                                    <span className="icon text-primary mdi mdi-calendar" />
                                                    <time dateTime="2018-01-01">
                                                        6 hours ago
                                                    </time>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-md text-center">
                        <div className="container">
                            <span className="normal text-primary font-weight-bold text-uppercase wow fadeIn">
                                Join Us
                            </span>
                            <h3
                                className="offset-top-7 wow fadeIn"
                                data-wow-delay=".1s"
                            >
                                We’ll Be Glad To See You In Our Team
                            </h3>
                            <p className="wow fadeIn" data-wow-delay=".2s">
                                <span
                                    style={{
                                        maxWidth: "720px",
                                        opacity: ".85",
                                    }}
                                >
                                    Work and grow <strong>with </strong>us
                                    towards making India a developed nation.
                                    <br />
                                    Together, we can make it!
                                </span>
                            </p>
                        </div>
                        <div className="group">
                            <a
                                className="button button-secondary button-winona wow fadeIn"
                                href="mailto:info@mibaio.xyz"
                                data-wow-delay=".1s"
                            >
                                <span />
                                Send Your CV
                            </a>
                        </div>
                    </section>
                    <CustomFooter />
                </div>
                <div className="snackbars" id="form-output-global" />
            </div>
        </>
    );
};

export default Careers;
