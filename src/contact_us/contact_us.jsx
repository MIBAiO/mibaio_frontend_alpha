// import favicon from '/images/favicon.png';
//import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import { useLoadingWithRefresh } from "../hooks/useLoadingWithRefresh";

import { saveContactData } from "../http/apis";
import CustomFooter from "../components/customfooter";
import NavigationBar from "../components/navigationbar";
import PageHeadder from "../components/PageHeadder";
import WOW from "wowjs";
import AOS from "aos";
const ContactUs = () => {
    const { loading } = useLoadingWithRefresh();

    useEffect(() => {
		new WOW.WOW({}).init();
	});

    useEffect(() => {
		AOS.init();
	}, []);

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    });

    const submitContactForm = async (e) => {
        try {
            e.preventDefault();
            await saveContactData(contactData);

            setContactData({
                name: "",
                phone: "",
                message: "",
                email: "",
            });
        } catch (err) {
            console.log(err);
        }
    };
    return loading ? (
        <Loader />
    ) : (
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

                {/* Old Format
                    <section className="section page-header-1 header-section">
                    <NavigationBar />
                    <PageHeadder quote="Contact Us" showYouAre={false} />
                </section> */}
                {/* <section className="breadcrumbs-custom section-gray">
                    <div className="breadcrumbs-custom-main bg-default">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-9">
                                    <h3 className="text-white breadcrumbs-custom-title">
                                        Contact Us
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="breadcrumbs-custom-aside">
                            <ul className="breadcrumbs-custom-path">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="active">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </section> */}
                <section className="section page-header-3 header-section">
                    <NavigationBar />
                </section>
                <section className="breadcrumbs-custom wow fadeInDown">
                    <div className="breadcrumbs-custom-main bg-default">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-9">
                                    <h3 className="text-white breadcrumbs-custom-title">
                                        Contact Us
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="breadcrumbs-custom-aside text-white">
                            <ul className="breadcrumbs-custom-path">
                                <li>
                                    <a href="index.php">Home</a>
                                </li>
                                <li className="active text-white">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="section section-md"
                    data-aos="fade-up" data-aos-delay="200">
                    <div className="container">
                        <div className="row row-50">
                            <div className="col-xl-5">
                                <div className="inset-1">
                                    <h2>Our Location</h2>
                                    <p className="big text-gray-900">
                                        If you are living nearby, come visit us
                                        at one of our comfortable offices.
                                    </p>
                                    <div className="row row-50">
                                        <div className="col-sm-6 col-xl-12">
                                            <p className="heading-7">
                                                Corporate office
                                            </p>
                                            <ul className="list list-style-1">
                                                <li className="unit">
                                                    <span className="unit-left icon icon-sm text-primary mdi mdi-map-marker" />
                                                    <div className="unit-body">
                                                        <a href="#">
                                                            1st floor
                                                            H-Building, PICT
                                                            college, Dhankawadi,
                                                            Pune, MH, India
                                                            411043
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="unit">
                                                    <span className="unit-left icon icon-sm text-primary mdi mdi-cellphone" />
                                                    <div className="unit-body">
                                                        <a href="tel:+91-9673660515">
                                                            +91 967 366 0515
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="unit">
                                                    <span className="unit-left icon icon-sm text-primary mdi mdi-email-outline" />
                                                    <div className="unit-body">
                                                        <a
                                                            className="text-primary"
                                                            href="mailto:info@mibaio.xyz"
                                                        >
                                                            info@mibaio.xyz
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6 col-xl-12">
                                            <p className="heading-7">
                                                Registered office
                                            </p>
                                            <ul className="list list-style-1">
                                                <li className="unit">
                                                    <span className="unit-left icon icon-sm text-primary mdi mdi-map-marker" />
                                                    <div className="unit-body">
                                                        <a href="#">
                                                            278 Mahatma society,
                                                            Kothrud, Pune, MH,
                                                            India 411038
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="unit">
                                                    <span className="unit-left icon icon-sm text-primary mdi mdi-cellphone" />
                                                    <div className="unit-body">
                                                        <a href="tel:+91 9673660515">
                                                            +91 967 366 0515
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="unit">
                                                    <span className="unit-left icon icon-sm text-primary mdi mdi-email-outline" />
                                                    <div className="unit-body">
                                                        <a
                                                            className="text-primary"
                                                            href="mailto:support@mibaio.xyz"
                                                        >
                                                            support@mibaio.xyz
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div
                                    className="google-map-container"
                                    data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                                    data-zoom={5}
                                    data-styles='[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"color":"#a6ce39"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"visibility":"simplified"},{"color":"#73a533"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#73a533"}]},{"featureType":"landscape.natural.landcover","elementType":"labels.text.fill","stylers":[{"color":"#a6ce39"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#73a533"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#009fc3"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#009fc3"}]}]'
                                    data-icon="images/gmap_marker.png"
                                    data-icon-active="images/gmap_marker_active.png"
                                >
                                    <div className="google-map"> </div>
                                    <ul className="google-map-markers">
                                        <li
                                            data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                                            data-description="9870 St Vincent Place, Glasgow"
                                        />
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
                                <form
                                    className="rd-mailform rd-form"
                                    data-form-output="form-output-global"
                                    data-form-type="contact"
                                    onSubmit={submitContactForm}
                                >
                                    <div className="row row-x-16 row-20 flex-column flex-md-row">
                                        <div className="col-md-6">
                                            <div className="form-wrap">
                                                <input
                                                    className="form-input bg-white"
                                                    id="contact-name"
                                                    name="name"
                                                    //adding placeholder instead of label
                                                    placeholder="Your Name*"
                                                    data-constraints="@Required"
                                                    value={contactData.name}
                                                    onChange={(e) => {
                                                        setContactData({
                                                            ...contactData,
                                                            name: e.target
                                                                .value,
                                                        });
                                                    }}
                                                    required
                                                />
                                                {/* <label
                                                    className="form-label"
                                                    htmlFor="contact-name"
                                                >
                                                    Your Name
                                                </label> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-wrap">
                                                <input
                                                    className="form-input"
                                                    id="contact-email"
                                                    type="email"
                                                    name="email"
                                                    //adding placeholder instead of label
                                                    placeholder="Email*"
                                                    data-constraints="@Required @Email"
                                                    value={contactData.email}
                                                    onChange={(e) => {
                                                        setContactData({
                                                            ...contactData,
                                                            email: e.target
                                                                .value,
                                                        });
                                                    }}
                                                    required
                                                />
                                                {/* <label
                                                    className="form-label"
                                                    htmlFor="contact-email"
                                                >
                                                    Email
                                                </label> */}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-wrap">
                                                {/* <label
                                                    className="form-label"
                                                    htmlFor="contact-message"
                                                >
                                                    Message
                                                </label> */}
                                                <textarea
                                                    className="form-input"
                                                    id="contact-message"
                                                    name="message"
                                                    //adding placeholder instead of label
                                                    placeholder="Message*"
                                                    data-constraints="@Required"
                                                    value={contactData.message}
                                                    onChange={(e) => {
                                                        setContactData({
                                                            ...contactData,
                                                            message:
                                                                e.target.value,
                                                        });
                                                    }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-wrap">
                                                <input
                                                    className="form-input bg-white"
                                                    id="contact-phone"
                                                    name="phone"
                                                    //adding placeholder instead of label
                                                    placeholder="Phone*"
                                                    data-constraints="@PhoneNumber"
                                                    value={contactData.phone}
                                                    onChange={(e) => {
                                                        setContactData({
                                                            ...contactData,
                                                            phone: e.target
                                                                .value,
                                                        });
                                                    }}
                                                    required
                                                />
                                                {/* <label
                                                    className="form-label"
                                                    htmlFor="contact-phone"
                                                >
                                                    Phone
                                                </label> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-wrap form-button">
                                                <button
                                                    className="button button-block button-secondary"
                                                    type="submit"
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <CustomFooter />

                {/* <section className="section section-md-last block-footer-classic section-gray-2">
                    <div className="block-footer-classic-wrap"> */}
                {/* <div className="container">
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
                                        action="bat/rd-mailform.php"
                                    >
                                        <div className="form-wrap">
                                            <input
                                                className="form-input"
                                                placeholder="Enter Your E-mail"
                                                id="subscribe-form-email-8"
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
                                        Improve your home experience with
                                        MIBAiO!
                                    </p>
                                    <div className="group ot30">
                                        <a
                                            className="button button-secondary button-winona"
                                            href="#"
                                        >
                                            Get a Quote
                                        </a>
                                        <Link
                                            className="button button-default-outline button-winona text-white"
                                            to="/about_us"
                                        >
                                            More About MIBAiO
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                {/* Page Footer*/}
                {/* Page Footer*/}
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
                        </footer> */}
                {/* </div>
                </section> */}
            </div>
            <div className="snackbars" id="form-output-global" />
        </div>
    );
};

export default ContactUs;
