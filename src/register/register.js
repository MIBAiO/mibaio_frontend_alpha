import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import NavigationBar from "../components/navigationbar";
import { REACT_APP_API_URL, login, loginGoogleOAuth } from "../http/apis";
import "../login/login.css";
import GoogleIcon from "../assets/svg/GoogleIcon";

const Register = () => {

    const [error, setError] = useState(null);
    const [didRedirect, setDidRedirect] = useState(false);
    const [alertType, setAlertType] = useState("alert-danger");
    const handleGoogleSignIn = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            console.log("Login Success:", codeResponse)
            try {
                const codeData = {
                    code: codeResponse.code
                }
                const { data } = await loginGoogleOAuth(codeData)
                if (data) {
                    console.log("Logged in")
                    toast.success("Logged in successfully!")
                    setDidRedirect(true)
                }
            } catch (e) {
                if (e.response) {
                    console.log("Account already exists!")
                    toast.error("Account already exists!")
                } else {
                    toast.error(`Something went wrong!!`)
                    console.log("Something went wrong");
                    console.error(e)
                }
            }
        },
        onError: (error) => {
            toast.error(error.error_description)
            console.log("Login Failed:", error)
        },
        flow: "auth-code",
        ux_mode: "popup",
        state: window.location.href,

    });

    return (
        <>
            {/* RD Navbar*/}
            {/* <NavigationBar /> */}
            {/* {!validated && (
                <Redirect to={{ pathname: "/validate", state: { email } }} />
            )} */}
            {didRedirect && <Redirect to="/" />}

            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="section-layout-3-main">
                    <div className="section mt-5 text-center">
                        <div className="container">
                            <div className="signup-cont p-2 w-100 h-100">
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
                                    className="oauth-button-cont mt-5 mx-md-5"
                                    style={{
                                        maxWidth: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <p className="d-none d-sm-block auth-heading text-center ">
                                        Create Your Account
                                    </p>
                                    <p className="fs-1 signup-description font-thin col-md-6 text-center text-dark">By creating an account, you agree to our <span className="underline">Terms of Service </span> and have
                                        read and understood the Privacy Policy</p>
                                    <form className="rd-form rd-mailform w-100 mt-0 d-flex justify-content-center align-items-center flex-column">
                                        <div className="form-wrap w-100 d-flex justify-content-center align-items-center flex-column">

                                            <button
                                                className="signup-oauth-btn mt-3 oauth-btn sffont w-100 row"
                                                name="btnsignin"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleGoogleSignIn();
                                                }}
                                            // disabled={invalid}
                                            >
                                                <div className="col-4 w-75 d-flex align-items-center justify-content-center">
                                                    <img
                                                        src="assets/img/google.png"
                                                        className="img-fluid signup-btn-logo"
                                                        alt="Google"


                                                    />
                                                </div>
                                                <div className="col-8 px-0 w-100  d-flex justify-content-start signin-btn-text">
                                                    Continue with Google
                                                </div>
                                            </button>
                                        </div>
                                        {/* YET to Impliment */}
                                        {/* <div className="form-wrap w-100 d-flex justify-content-center align-items-center flex-column">
                                            <button
                                                className="signup-oauth-btn oauth-btn sffont w-100 row"
                                                name="btnsignin"
                                            >
                                                <div className="col-4 w-100 d-flex align-items-center justify-content-center">
                                                    <img
                                                        src="assets/img/apple.png"
                                                        className="img-fluid signup-btn-logo"
                                                        alt="Apple"


                                                    />{" "}
                                                </div>
                                                
                                        <div className="col-8 px-0 signin-btn-text">
                                            Continue with Apple
                                        </div>
                                    </button>
                                </div>
                                <div className="form-wrap w-100 d-flex justify-content-center align-items-center flex-column">
                                    <button
                                        className="signup-oauth-btn oauth-btn sffont w-100 row"
                                        name="btnsignin"
                                    >
                                        <div className="col-4 w-100 d-flex align-items-center justify-content-center">
                                            <img
                                                src="assets/img/facebook.png"
                                                className="img-fluid signup-btn-logo"
                                                alt="Facebook"


                                            />{" "}
                                        </div>
                                        <div className="col-8 px-0 w-100 signin-btn-text">
                                            
                                            Continue with Facebook
                                        </div>
                                    </button>
                                </div> */}
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
                                                <div className="col-4 w-100 d-flex align-items-center justify-content-center">
                                                    <img
                                                        src="assets/img/mail.png"
                                                        className="img-fluid signup-btn-logo"
                                                        alt="Facebook"


                                                    />{" "}
                                                </div>
                                                <div className="col-8 px-0 w-100 signin-btn-text">
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
                </div >
                <div className="snackbars" id="form-output-global" />
            </div >
        </>
    );
};

export default Register;
