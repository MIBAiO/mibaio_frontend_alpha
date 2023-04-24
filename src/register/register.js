import { login } from "../http/apis";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import NavigationBar from "../components/navigationbar";
import "../login/login.css";
import GoogleIcon from "../assets/svg/GoogleIcon";

const Register = () => {
    return (
        <>
            {/* RD Navbar*/}
            <NavigationBar />
            {/* {!validated && (
                <Redirect to={{ pathname: "/validate", state: { email } }} />
            )}
            {didRedirect && <Redirect to="/" />} */}

            <div>
                <div className="section-layout-3-main">
                    <div className="section-1 text-center">
                        <div className="container">
                            <div className="signup-cont box-shadow-1 p-2 pb-5 w-100 h-100">
                                <div className="d-flex p-0 m-0 justify-content-between">
                                    <div className="layout-2-item back-home-btn">
                                        <Link
                                            className="link link-icon link-icon-left sffont"
                                            to="/"
                                        >
                                            <span className="icon mdi mdi-arrow-left" />
                                            <span>Back to Home</span>
                                        </Link>
                                    </div>
                                    <div className="layout-2-item create-acc-btn d-flex p-0 m-0 justify-content-between align-items-center">
                                        <div className="layout-2-group">
                                            <Link
                                                className="sffont signin-btn"
                                                to="/login"
                                            >
                                                Sign In
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="oauth-button-cont m-5"
                                    style={{
                                        maxWidth: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <form className="rd-form rd-mailform w-100 mt-0 d-flex justify-content-center align-items-center flex-column">
                                        <div className="form-wrap w-100 d-flex justify-content-center align-items-center flex-column">
                                            <button
                                                className="signup-oauth-btn oauth-btn sffont w-100 row"
                                                name="btnsignin"
                                                onClick={() => {}}
                                            >
                                                <div className="col-4 w-100">
                                                    <img
                                                        src="assets/img/google.png"
                                                        className="img-fluid "
                                                        alt="Google"
                                                        width={"40px"}
                                                        style={{
                                                            left: 20,
                                                            marginRight: 30,
                                                        }}
                                                    />{" "}
                                                </div>
                                                <div className="col-8 w-100 signin-btn-text">
                                                    Continue with Google
                                                </div>
                                            </button>
                                        </div>
                                        <div className="form-wrap w-100 d-flex justify-content-center align-items-center flex-column">
                                            <button
                                                className="signup-oauth-btn oauth-btn sffont w-100 row"
                                                name="btnsignin"
                                            >
                                                <div className="col-4 w-100">
                                                    <img
                                                        src="assets/img/apple.png"
                                                        className="img-fluid "
                                                        alt="Apple"
                                                        width={"40px"}
                                                        style={{
                                                            left: 20,
                                                            marginRight: 30,
                                                        }}
                                                    />{" "}
                                                </div>
                                                {/* <GoogleIcon /> */}
                                                <div className="col-8 w-100 signin-btn-text">
                                                    Continue with Apple
                                                </div>
                                            </button>
                                        </div>
                                        <div className="form-wrap w-100 d-flex justify-content-center align-items-center flex-column">
                                            <button
                                                className="signup-oauth-btn oauth-btn sffont w-100 row"
                                                name="btnsignin"
                                            >
                                                <div className="col-4 w-100">
                                                    <img
                                                        src="assets/img/facebook.png"
                                                        className="img-fluid "
                                                        alt="Facebook"
                                                        width={"40px"}
                                                        style={{
                                                            left: 20,
                                                            marginRight: 30,
                                                        }}
                                                    />{" "}
                                                </div>
                                                <div className="col-8 w-100 signin-btn-text">
                                                    {/* <GoogleIcon /> */}
                                                    Continue with Facebook
                                                </div>
                                            </button>
                                        </div>
                                        <div className="form-wrap w-100 d-flex justify-content-center align-items-center flex-column">
                                            <Link
                                                to="/emailreg"
                                                className="signup-oauth-btn oauth-btn sffont w-100 row"
                                                name="btnsignin"
                                                style={{
                                                    color: "#000",
                                                }}
                                                // onClick={() =>
                                                //     setGoToEmailSignup(true)
                                                // }
                                                // disabled={invalid}
                                            >
                                                <div className="col-4 w-100">
                                                    <img
                                                        src="assets/img/mail.png"
                                                        className="img-fluid "
                                                        alt="Facebook"
                                                        width={"40px"}
                                                        height={"40px"}
                                                        style={
                                                            {
                                                                // left: 20,
                                                                // marginRight: 30,
                                                            }
                                                        }
                                                    />{" "}
                                                </div>
                                                <div className="col-8 w-100 signin-btn-text">
                                                    {/* <GoogleIcon /> */}
                                                    Continue with Email
                                                </div>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="snackbars" id="form-output-global" />
            </div>
        </>
    );
};

export default Register;
