// import './bootstrap.css';
// import './fonts.css';
// import './style.css';
import { register } from "../http/apis";
import { Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/navigationbar";
import "../login/login.css";
const RegisterWithEmail = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [redirected, setRedirected] = useState(false);
    const [error, setError] = useState(null);

    const [invalid, setInvalid] = useState(false);

    const [eye, setEye] = useState("eye");

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    async function handleRegister(e) {
        e.preventDefault();
        const userData = { name, email, password };
        console.log(userData);
        if (!error) {
            try {
                const { data } = await register(userData);
                console.log("Data: ");
                console.log(data);

                if (data) {
                    // this.props.history.push('/login');
                    // history.push({ pathname: "/validate", state: { email } });
                    setRedirected(true);
                }
            } catch (e) {
                console.log(e.response.data.message);
                setError(e.response.data.message);

                setTimeout(() => {
                    setError(null);
                }, 5000);
            }
        }
    }

    function containsAnyLetter(str) {
        const status = /[a-zA-Z]/.test(str);
        // setInvalid(!status);
        return status;
    }

    function isUpper(str) {
        const status = /[A-Z]/.test(str);
        // setInvalid(!status);
        return status;
    }

    function containsAnyNumber(str) {
        const status = /[0-9]/.test(str);

        // setInvalid(!status);

        return status;
    }

    function checkLength(str) {
        const status = str.length >= 8;
        // setInvalid(!status);
        return status;
    }
    function comfirmPassMatch() {
        return confirmPassword === password;
    }

    useEffect(() => {
        if (
            !(
                containsAnyLetter(password) &&
                containsAnyNumber(password) &&
                isUpper(password) &&
                checkLength(password) &&
                comfirmPassMatch()
            )
        ) {
            setInvalid(true);
        } else {
            setInvalid(false);
        }
    }, [password]);

    return (
        <div>
            {redirected && (
                <Redirect to={{ pathname: "/validate", state: { email } }} />
            )}
            {/* Navgation Bar -------------------------- */}
            {/* <NavigationBar /> */}

            <div className="section-layout-3-main">
                <div className="section-1 text-center">
                    <div className="container">
                        <div className="signup-cont p-2 pb-5 w-100 h-100">
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
                                        <Link className="sffont" to="/register">
                                            Create Account
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {error && (
                                <div
                                    className={
                                        "alert alert-warning alert-dismissible fade" +
                                        (error ? " show" : "")
                                    }
                                    role="alert"
                                >
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="alert"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">×</span>
                                        <span className="sr-only">Close</span>
                                    </button>
                                    <strong>WARNING!</strong> {error}
                                </div>
                            )}

                            <div
                                className="oauth-button-cont  m-5"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <p className="auth-heading">
                                    Sign in using Mail ID
                                </p>

                                <form
                                    className="rd-form rd-mailform mt-0 w-100"
                                    style={{
                                        maxWidth: 600,
                                    }}
                                >
                                    <div className="form-wrap">
                                        <input
                                            className="auth-form-input"
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            required
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-wrap">
                                        <input
                                            className="auth-form-input"
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            required
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div
                                        className="form-wrap"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <input
                                            className="auth-form-input"
                                            id="register-password"
                                            type={
                                                isVisible ? "text" : "password"
                                            }
                                            name="password"
                                            placeholder="Password"
                                            data-constraints="@Required"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            style={{
                                                marginRight: "-10%",
                                            }}
                                        />
                                        <i
                                            className={`fa fa-${eye}`}
                                            id="eye"
                                            aria-hidden="true"
                                            style={{
                                                cursor: "pointer",
                                            }}
                                            onClick={() => {
                                                if (eye === "eye") {
                                                    setIsVisible(true);
                                                    setEye("eye-slash");
                                                } else {
                                                    setIsVisible(false);
                                                    setEye("eye");
                                                }
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="form-wrap"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <input
                                            className="auth-form-input"
                                            id="register-password"
                                            type={
                                                isVisible2 ? "text" : "password"
                                            }
                                            name="Conform-Password"
                                            placeholder="Confirm Password"
                                            data-constraints="@Required"
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value
                                                )
                                            }
                                            style={{
                                                marginRight: "-10%",
                                            }}
                                        />
                                        <i
                                            className={`fa fa-${eye}`}
                                            id="eye"
                                            aria-hidden="true"
                                            style={{
                                                cursor: "pointer",
                                            }}
                                            onClick={() => {
                                                if (eye === "eye") {
                                                    setIsVisible2(true);
                                                    setEye("eye-slash");
                                                } else {
                                                    setIsVisible2(false);
                                                    setEye("eye");
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="form-wrap">
                                        <button
                                            className="auth-btn sffont w-100"
                                            name="btnsignin"
                                            onClick={handleRegister}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterWithEmail;
