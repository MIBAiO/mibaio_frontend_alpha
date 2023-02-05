import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import styled from "styled-components";
import team1 from "./team1.jpg";
import NavigationBar from "../components/navigationbar";
import CustomFooter from "../components/customfooter";
const OurTeam = () => {
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
                <section className="breadcrumbs-custom section-gray">
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
                <section className="section section-lg">
                    <div className="container">
                        <div className="row row-50 row-xl-70">
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                {/* Profile Modern*/}
                                <article className="profile-modern">
                                    <figure className="profile-modern-figure">
                                        <img
                                            className="profile-modern-image"
                                            src={team1}
                                            alt=""
                                            width={369}
                                            height={315}
                                        />
                                    </figure>
                                    <div className="profile-modern-main">
                                        <div className="profile-modern-main-item profile-modern-main-item_primary">
                                            <h4 className="profile-modern-name">
                                                Vedant S. Mane
                                            </h4>
                                            <p className="profile-modern-position">
                                                Founder &amp; CEO
                                            </p>
                                        </div>
                                        <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 className="profile-modern-main-title extra-lighter">
                                                Get in Touch
                                            </h4>
                                            <ul className="list-inline list-inline-xs">
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-facebook"
                                                        href="https://www.facebook.com/Im.vedantmane"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-twitter"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-instagram"
                                                        href="https://www.instagram.com/vedant_suryakant_mane/"
                                                    />
                                                </li>
                                            </ul>
                                            <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                {/* Profile Modern*/}
                                <article className="profile-modern">
                                    <figure className="profile-modern-figure">
                                        <img
                                            className="profile-modern-image"
                                            src={team1}
                                            alt=""
                                            width={369}
                                            height={315}
                                        />
                                    </figure>
                                    <div className="profile-modern-main">
                                        <div className="profile-modern-main-item profile-modern-main-item_primary">
                                            <h4 className="profile-modern-name">
                                                Want your name here?
                                            </h4>
                                            <p className="profile-modern-position">
                                                Chief Financial Officer
                                            </p>
                                        </div>
                                        <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 className="profile-modern-main-title extra-lighter">
                                                Apply for position
                                            </h4>
                                            <ul className="list-inline list-inline-xs">
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-facebook"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-twitter"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-instagram"
                                                        href="#"
                                                    />
                                                </li>
                                            </ul>
                                            <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                {/* Profile Modern*/}
                                <article className="profile-modern">
                                    <figure className="profile-modern-figure">
                                        <img
                                            className="profile-modern-image"
                                            src={team1}
                                            alt=""
                                            width={369}
                                            height={315}
                                        />
                                    </figure>
                                    <div className="profile-modern-main">
                                        <div className="profile-modern-main-item profile-modern-main-item_primary">
                                            <h4 className="profile-modern-name">
                                                Want your name here?
                                            </h4>
                                            <p className="profile-modern-position">
                                                Project Manager
                                            </p>
                                        </div>
                                        <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 className="profile-modern-main-title extra-lighter">
                                                Apply for position
                                            </h4>
                                            <ul className="list-inline list-inline-xs">
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-facebook"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-twitter"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-instagram"
                                                        href="#"
                                                    />
                                                </li>
                                            </ul>
                                            <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                {/* Profile Modern*/}
                                <article className="profile-modern">
                                    <figure className="profile-modern-figure">
                                        <img
                                            className="profile-modern-image"
                                            src={team1}
                                            alt=""
                                            width={369}
                                            height={315}
                                        />
                                    </figure>
                                    <div className="profile-modern-main">
                                        <div className="profile-modern-main-item profile-modern-main-item_primary">
                                            <h4 className="profile-modern-name">
                                                Want your name here?
                                            </h4>
                                            <p className="profile-modern-position">
                                                Senior Developer
                                            </p>
                                        </div>
                                        <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 className="profile-modern-main-title extra-lighter">
                                                Apply for position
                                            </h4>
                                            <ul className="list-inline list-inline-xs">
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-facebook"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-twitter"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-instagram"
                                                        href="#"
                                                    />
                                                </li>
                                            </ul>
                                            <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                {/* Profile Modern*/}
                                <article className="profile-modern">
                                    <figure className="profile-modern-figure">
                                        <img
                                            className="profile-modern-image"
                                            src={team1}
                                            alt=""
                                            width={369}
                                            height={315}
                                        />
                                    </figure>
                                    <div className="profile-modern-main">
                                        <div className="profile-modern-main-item profile-modern-main-item_primary">
                                            <h4 className="profile-modern-name">
                                                Want your name here?
                                            </h4>
                                            <p className="profile-modern-position">
                                                QA Engineer
                                            </p>
                                        </div>
                                        <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 className="profile-modern-main-title extra-lighter">
                                                Apply for position
                                            </h4>
                                            <ul className="list-inline list-inline-xs">
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-facebook"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-twitter"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-instagram"
                                                        href="#"
                                                    />
                                                </li>
                                            </ul>
                                            <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                {/* Profile Modern*/}
                                <article className="profile-modern">
                                    <figure className="profile-modern-figure">
                                        <img
                                            className="profile-modern-image"
                                            src={team1}
                                            alt=""
                                            width={369}
                                            height={315}
                                        />
                                    </figure>
                                    <div className="profile-modern-main">
                                        <div className="profile-modern-main-item profile-modern-main-item_primary">
                                            <h4 className="profile-modern-name">
                                                Want your name here?
                                            </h4>
                                            <p className="profile-modern-position">
                                                Interface Designer
                                            </p>
                                        </div>
                                        <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 className="profile-modern-main-title extra-lighter">
                                                Apply for position
                                            </h4>
                                            <ul className="list-inline list-inline-xs">
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-facebook"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-twitter"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-instagram"
                                                        href="#"
                                                    />
                                                </li>
                                            </ul>
                                            <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                {/* Profile Modern*/}
                                <article className="profile-modern">
                                    <figure className="profile-modern-figure">
                                        <img
                                            className="profile-modern-image"
                                            src={team1}
                                            alt=""
                                            width={369}
                                            height={315}
                                        />
                                    </figure>
                                    <div className="profile-modern-main">
                                        <div className="profile-modern-main-item profile-modern-main-item_primary">
                                            <h4 className="profile-modern-name">
                                                Want your name here?
                                            </h4>
                                            <p className="profile-modern-position">
                                                Head of Marketing
                                            </p>
                                        </div>
                                        <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 className="profile-modern-main-title extra-lighter">
                                                Apply for position
                                            </h4>
                                            <ul className="list-inline list-inline-xs">
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-facebook"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-twitter"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-instagram"
                                                        href="#"
                                                    />
                                                </li>
                                            </ul>
                                            <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                {/* Profile Modern*/}
                                <article className="profile-modern">
                                    <figure className="profile-modern-figure">
                                        <img
                                            className="profile-modern-image"
                                            src={team1}
                                            alt=""
                                            width={369}
                                            height={315}
                                        />
                                    </figure>
                                    <div className="profile-modern-main">
                                        <div className="profile-modern-main-item profile-modern-main-item_primary">
                                            <h4 className="profile-modern-name">
                                                Want your name here?
                                            </h4>
                                            <p className="profile-modern-position">
                                                Business Analyst
                                            </p>
                                        </div>
                                        <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                            <h4 className="profile-modern-main-title extra-lighter">
                                                Apply for position
                                            </h4>
                                            <ul className="list-inline list-inline-xs">
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-facebook"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-twitter"
                                                        href="#"
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        className="icon icon-md mdi mdi-instagram"
                                                        href="#"
                                                    />
                                                </li>
                                            </ul>
                                            <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                        </div>
                                    </div>
                                </article>
                            </div>
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
