import { login } from "../http/apis";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
import { useHistory, Link, Redirect } from "react-router-dom";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";

import styled from "styled-components";
import NavigationBar from "../components/navigationbar";

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [didRedirect, setDidRedirect] = useState(false);

    const [error, setError] = useState(null);
    const [alertType, setAlertType] = useState("alert-danger");

    const [invalid, setInvalid] = useState(false);

    const dispatch = useDispatch();

    function checkEmail(email) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!checkEmail(email)) {
            setAlertType("alert-danger");
            setError("Email is not valid");
            setInvalid(true);
        } else {
            setError(null);
            setInvalid(false);
        }
    };

    async function handleLogin(e) {
        e.preventDefault();

        const loginData = { email, password };
        //console.log(loginData)

        try {
            const { data } = await login(loginData);
            dispatch(setUser({ data }));
            console.log(data);
            if (data) {
                // history.push("/");
                setDidRedirect(true);
            }
        } catch (e) {
            setAlertType("alert-danger");
            setError(e.response.data.message);
            console.log(e.response.data.message);
        }
    }

    return (
        <>
            {/* RD Navbar*/}
            <NavigationBar />

            {didRedirect && <Redirect to="/" />}

            <div>
                <div className="layout-2 section-layout-3-header">
                    <div className="layout-2-inner">
                        <div className="layout-2-item">
                            <Link
                                className="link link-icon link-icon-left"
                                to="/"
                            >
                                <span className="icon mdi mdi-arrow-left" />
                                <span>Back to Home</span>
                            </Link>
                        </div>
                        <div className="layout-2-item">
                            <div className="layout-2-group">
                                <p className="text-gray-900 ls-001">
                                    Don’t have an account?
                                </p>
                                <Link
                                    className="button button-sm button-primary-outline button-winona"
                                    to="/register"
                                >
                                    Register
                                </Link>
                                <a
                                    className="link link-underline"
                                    href="faq.html"
                                >
                                    Need help?{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-layout-3-main">
                    <div className="section-1 text-center">
                        <div className="container">
                            <div className="box-shadow-1">
                                {" "}
                                <a className="brand" href="index.html">
                                    <img
                                        className="brand-logo-dark"
                                        src="images/logo-default-inverse-96x32.png"
                                        alt=""
                                        width={96}
                                        height={32}
                                        srcSet="images/logo-default-inverse-96x32.png 2x"
                                    />
                                </a>
                                <p className="text-gray-900">
                                    <span style={{ maxWidth: "400px" }}>
                                        Enter your e-mail and password below to
                                        log in to your account and
                                        control/monitor your smarthome!
                                    </span>
                                </p>
                                {error && (
                                    <div
                                        className={
                                            `alert ${alertType} d-flex align-items-center alert-dismissible fade rounded-pill` +
                                            (error ? " show" : "")
                                        }
                                        role="alert"
                                        style={{
                                            width: "50%",
                                            margin: "auto",
                                            padding: "2% 5%",
                                        }}
                                    >
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="alert"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">×</span>
                                            <span className="sr-only">
                                                Close
                                            </span>
                                        </button>
                                        {error}
                                    </div>
                                )}
                                <div className="box-shadow-1-main">
                                    <form className="rd-form rd-mailform">
                                        <div className="form-wrap">
                                            <input
                                                className="form-input"
                                                type="email"
                                                name="email"
                                                placeholder="Email-ID"
                                                required
                                                value={email}
                                                onChange={handleEmailChange}
                                            />
                                        </div>
                                        <div className="form-wrap">
                                            <input
                                                className="form-input"
                                                type="password"
                                                id="register-password"
                                                name="pass"
                                                placeholder="Password"
                                                required
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                            <i
                                                className="fa fa-eye-slash"
                                                id="eye"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="form-wrap">
                                            <button
                                                className="button button-sm button-primary-outline button-winona"
                                                name="btnsignin"
                                                id="btnsignin"
                                                style={{ marginLeft: "30%" }}
                                                onClick={handleLogin}
                                                disabled={invalid}
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                    <div className="text-decoration-lines">
                                        <span className="text-decoration-lines-content">
                                            Or log in via social networks
                                        </span>
                                    </div>

                                    <div className="group group-xs">
                                        <a
                                            className="link link-social-3 mdi mdi-twitter"
                                            href="#"
                                            aria-label="Twitter"
                                        />
                                        <a
                                            className="link link-social-3 mdi mdi-facebook"
                                            href="#"
                                            aria-label="Facebook"
                                        />
                                        <a
                                            className="link link-social-3 mdi mdi-instagram"
                                            href="#"
                                            aria-label="Google+"
                                        />
                                        <a
                                            className="link link-social-3 mdi mdi-linkedin"
                                            href="#"
                                            aria-label="Linkedin"
                                        />
                                    </div>
                                    <div className="text mt-4">
                                        <span>
                                            <a href="/request_reset_password">
                                                Forgot Password ?
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="snackbars" id="form-output-global" />
                {/* <script>
					document.getElementById("eye").addEventListener("click", function() {'{'}
					var x = document.getElementById("register-password");
					if (x.type == "password") {'{'}
					x.type = "text";
					this.classList.add("fa-eye");
					this.classList.remove("fa-eye-slash");
					{'}'} else {'{'}
					x.type = "password";
					this.classList.remove("fa-eye");
					this.classList.add("fa-eye-slash");
					{'}'}
					{'}'});
          		</script> */}
            </div>
        </>
    );
};

export default Login;
