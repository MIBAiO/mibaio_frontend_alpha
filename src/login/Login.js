import { login } from "../http/apis";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import NavigationBar from "../components/navigationbar";
import "./login.css";
import GoogleIcon from "../assets/svg/GoogleIcon";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [didRedirect, setDidRedirect] = useState(false);
    const [validated, setValidated] = useState(true);
    const [error, setError] = useState(null);
    const [alertType, setAlertType] = useState("alert-danger");
    const [eye, setEye] = useState("eye");

    const [invalid, setInvalid] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    //Input Field Activation
    const [isActiveEmail, setisActiveEmail] = useState(false);
    const [isActivePassword, setisActivePassword] = useState(false);

    const handleEmailActivation = (e) => {
        setisActiveEmail(e.target.value !== "");
        setEmail(e.target.value);
    };
    const handlePasswordActivation = (e) => {
        setisActivePassword(e.target.value !== "");
        setPassword(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setIsVisible(!isVisible);
        setEye(isVisible ? 'eye' : 'eye-slash');
    };


    function checkEmail(email) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    const handleEmailChange = (e) => {
        if (e.target.value.length !== 0) {
            setEmail(e.target.value);
            if (!checkEmail(e.target.value)) {
                console.log("FROM CHANGE");
                setAlertType("alert-danger");
                setError("Email is not valid");
                setInvalid(true);
            } else {
                setError(null);
                setInvalid(false);
            }
        }
    };

    async function handleLogin(e) {
        e.preventDefault();

        const loginData = { email, password };
        if (error) {
            console.log(error);
            toast.error(error);
            return;
        }
        //console.log(loginData)

        try {
            console.log(loginData);
            const { data } = await login(loginData);
            // dispatch(setUser({ data }));
            console.log(data);
            if (data) {
                console.log("HEREEEEEEE", data);
                // history.push("/");
                setDidRedirect(true);
                console.log(data);
            }
        } catch (e) {
            setAlertType("alert-danger");
            if (e.response.data.message === "user not verified") {
                setValidated(false);
            }
            setError(e.response.data.message);
            console.log(e.response.data.message);
        }
    }

    return (
        <>
            {/* RD Navbar*/}
            {/* <NavigationBar /> */}
            {!validated && (
                <Redirect to={{ pathname: "/validate", state: { email } }} />
            )}
            {didRedirect && <Redirect to="/" />}

            <div>
                <div className="section-layout-3-main">
                    <div className="section-1 text-center">
                        <div className="container">
                            <div className="p-2 pb-5 w-100 h-100">
                                <div className="d-flex p-0 m-0 justify-content-between ">
                                    <div className="layout-2-item back-home-btn">
                                        <Link
                                            className="link link-icon link-icon-left sffont"
                                            to="/"
                                        >
                                            <span className="icon mdi mdi-arrow-left" />
                                            <span className="fw-bold" style={{ fontWeight: "bold" }}>Back</span>
                                        </Link>
                                    </div>
                                    <div className="layout-2-item create-acc-btn d-flex p-0 m-0 justify-content-between align-items-center">
                                        <div className="layout-2-group">
                                            <Link
                                                className="sffont"
                                                to="/register"
                                                style={{ fontWeight: "bold" }}
                                            >
                                                Create Account
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* {error && (
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
                                )} */}

                                <div
                                    className="row h-100"
                                    style={{ flexDirection: "unset" }}
                                >
                                    <div
                                        className="col-md-6 inputs-cont align-items-center align-items-sm-start"
                                        style={{
                                            maxWidth: "100%",
                                            display: "flex",
                                            justifyContent: "center",

                                            flexDirection: "column",
                                            // flexWrap: "wrap-reverse",
                                        }}
                                    >
                                        <p className="d-none d-sm-block auth-heading text-center mt-3">
                                            Sign in using Mail ID
                                        </p>
                                        <p className="d-block d-sm-none auth-heading  mt-3">
                                            Sign into MIBAiO
                                        </p>

                                        <form
                                            onSubmit={handleLogin}
                                            className="rd-form rd-mailform w-100 mt-0"
                                        >
                                            {/* <div className="form-wrap">
                                                {/* <input
                                                    className="auth-form-input"
                                                    type="text"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    required
                                                    onChange={handleEmailChange}
                                                /> 

                                            <div className="container mt-5">
                                                {/* <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="auth-form-input activate-input"
                                                            id="exampleInput"
                                                            style={{
                                                                border: '1.5px solid ' + (isActive ? '#007bff' : '#ced4da'),
                                                                borderRadius: '0.25rem',
                                                                padding: '1rem',
                                                                paddingTop: '1.5rem',
                                                                borderRadius: '10px',
                                                                outline: 'none',
                                                                fontWeight: 600,
                                                                transition: 'border-color 0.2s',
                                                            }}
                                                            onChange={handleActivation}
                                                            onFocus={() => setIsActive(true)}
                                                            onBlur={handleActivation}
                                                            required
                                                        />
                                                        <label htmlFor="exampleInput" style={{
                                                            position: 'absolute',
                                                            top: isActive ? '5px' : '1.2rem',
                                                            left: '2rem',
                                                            fontSize: isActive ? '0.75rem' : '1rem',
                                                            pointerEvents: 'none',
                                                            transition: 'all 0.2s',
                                                            color: isActive ? '#007bff' : '#ced4da',
                                                            fontWeight: isActive ? '600' : '400',
                                                        }}>
                                                            Email
                                                        </label>
                                                    </div> 
                                                </div>

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
                                                        isVisible
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    name="password"
                                                    placeholder="Password"
                                                    data-constraints="@Required"
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    style={{
                                                        marginRight: "-10%",
                                                    }}
                                                />
                                                <label className={isActivePassword ? "Active" : ""} htmlFor="email" >
                                                    E-mail
                                                </label>
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
                                            {/* Form */}
                                            <div className="form-wrap">
                                                <div className="container px-0">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="auth-form-input activate-input"
                                                            id="exampleInput"
                                                            style={{
                                                                border: `1.5px solid ${isActiveEmail ? '#007bff' : '#ced4da'}`,
                                                                borderRadius: '0.25rem',
                                                                padding: '1rem',
                                                                paddingTop: '1.5rem',
                                                                borderRadius: '10px',
                                                                paddingBottom: '0.75rem',
                                                                outline: 'none',
                                                                fontWeight: 600,
                                                                transition: 'border-color 0.2s',
                                                            }}
                                                            onChange={handleEmailActivation}
                                                            onFocus={() => setisActiveEmail(true)}
                                                            onBlur={handleEmailActivation}
                                                            required
                                                        />
                                                        <label
                                                            htmlFor="exampleInput"
                                                            style={{
                                                                position: 'absolute',
                                                                top: isActiveEmail ? '5px' : '1.2rem',
                                                                left: '1rem',
                                                                fontSize: isActiveEmail ? '0.75rem' : '1rem',
                                                                pointerEvents: 'none',
                                                                transition: 'all 0.2s',
                                                                color: isActiveEmail ? '#007bff' : '#ced4da',
                                                                fontWeight: isActiveEmail ? '600' : '400',
                                                            }}
                                                        >
                                                            Email
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-wrap">
                                                <div className="container mt-2 px-0">
                                                    <div className="form-group">
                                                        <div className="form-group">
                                                            <input
                                                                type={isVisible ? "text" : "password"}
                                                                className="auth-form-input activate-input"
                                                                id="exampleInput"
                                                                data-constraints="@Required"

                                                                style={{
                                                                    border: `1.5px solid ${isActivePassword ? '#007bff' : '#ced4da'}`,
                                                                    borderRadius: '0.25rem',
                                                                    padding: '1rem',
                                                                    paddingRight: '2.5rem', // Adjusted paddingRight to accommodate the eye icon
                                                                    paddingTop: '1.5rem',
                                                                    paddingBottom: '0.75rem',
                                                                    borderRadius: '10px',
                                                                    outline: 'none',
                                                                    fontWeight: 600,
                                                                    transition: 'border-color 0.2s',
                                                                }}
                                                                onChange={handlePasswordActivation}
                                                                onFocus={() => setisActivePassword(true)}
                                                                onBlur={handlePasswordActivation}
                                                                required
                                                            />
                                                            <label
                                                                htmlFor="exampleInput"
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: isActivePassword ? '5px' : '1.2rem',
                                                                    left: '1rem',
                                                                    fontSize: isActivePassword ? '0.75rem' : '1rem',
                                                                    pointerEvents: 'none',
                                                                    transition: 'all 0.2s',
                                                                    color: isActivePassword ? '#007bff' : '#ced4da',
                                                                    fontWeight: isActivePassword ? '600' : '400',
                                                                }}
                                                            >
                                                                Password
                                                            </label>
                                                            <i
                                                                className={`fa fa-${eye}`}
                                                                id="eye"
                                                                aria-hidden="true"
                                                                onClick={togglePasswordVisibility}
                                                                style={{
                                                                    position: 'absolute',
                                                                    cursor: 'pointer',
                                                                    right: '0.8rem', // Adjusted right positioning to align the eye icon properly
                                                                    top: '1.7rem', // Adjusted top positioning to align the eye icon properly
                                                                    transition: 'all 0.2s',
                                                                    zIndex: 99,
                                                                }}
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>



                                            <div className="form-wrap">
                                                <button
                                                    className="auth-btn sffont w-100"
                                                    name="btnsignin"
                                                    type="submit"
                                                // onClick={handleLogin}
                                                // disabled={invalid}
                                                >
                                                    Continue
                                                </button>
                                            </div>



                                        </form>
                                    </div>

                                    <div className="col-md-1 hor-cont">
                                        <div className="vertical-ruler-h">
                                            OR
                                        </div>
                                        <div className="vertical-ruler-v">
                                            OR
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-5 oauth-button-cont"
                                        style={{
                                            maxWidth: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <form className="rd-form rd-mailform w-100 mt-0">
                                            <div className="form-wrap">
                                                <button
                                                    className="oauth-btn sffont w-100"
                                                    name="btnsignin"
                                                    onClick={handleLogin}
                                                    disabled={invalid}
                                                >
                                                    <img
                                                        src="assets/img/google.png"
                                                        className="img-fluid "
                                                        alt="Google"
                                                        width={"35px"}
                                                        style={{
                                                            left: 20,
                                                            position:
                                                                "absolute",
                                                        }}
                                                    />{" "}
                                                    {/* <GoogleIcon /> */}
                                                    Continue with Google
                                                </button>
                                            </div>
                                            <div className="form-wrap">
                                                <button
                                                    className="oauth-btn sffont w-100"
                                                    name="btnsignin"
                                                    onClick={handleLogin}
                                                    disabled={invalid}
                                                >
                                                    <img
                                                        src="assets/img/apple.png"
                                                        className="img-fluid "
                                                        alt="Apple"
                                                        width={"35px"}
                                                        style={{
                                                            left: 20,
                                                            position:
                                                                "absolute",
                                                        }}
                                                    />{" "}
                                                    {/* <GoogleIcon /> */}
                                                    Continue with Apple
                                                </button>
                                            </div>
                                            <div className="form-wrap">
                                                <button
                                                    className="oauth-btn sffont w-100"
                                                    name="btnsignin"
                                                    onClick={handleLogin}
                                                    disabled={invalid}
                                                >
                                                    <img
                                                        src="assets/img/facebook.png"
                                                        className="img-fluid "
                                                        alt="Facebook"
                                                        width={"35px"}
                                                        style={{
                                                            left: 20,
                                                            position:
                                                                "absolute",
                                                        }}
                                                    />{" "}
                                                    {/* <GoogleIcon /> */}
                                                    Continue with Facebook
                                                </button>
                                            </div>
                                            {/* <div className="form-wrap">
                                                <button
                                                    className="oauth-btn sffont w-100 bg-dark text-light fs-2"
                                                    name="btnsignin"
                                                    onClick={handleLogin}
                                                    disabled={invalid}
                                                >

                                                    {/* <GoogleIcon /> 
                                            Continue as Guest
                                        </button>
                                    </div> */}
                                        </form>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-md-5 inputs-cont">
                                        .
                                    </div>
                                    <div className="text-uppercase">
                                        <Link to="/request_reset_password">
                                            <span style={{ cursor: "pointer" }}>
                                                Cant Sign in?
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="col-md-4"></div>
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

export default Login;
