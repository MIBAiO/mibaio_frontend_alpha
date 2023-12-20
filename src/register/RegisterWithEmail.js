// import './bootstrap.css';
// import './fonts.css';
// import './style.css';
import { register } from "../http/apis";
import { Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/navigationbar";
import "../login/login.css";
import { Toaster, toast } from "react-hot-toast";
const RegisterWithEmail = () => {
    const [name, setname] = useState("");
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [redirected, setRedirected] = useState(false);
    const [error, setError] = useState(null);

    const [invalid, setInvalid] = useState(false);

    const [eye, setEye] = useState("eye");
    const [ceye, setCEye] = useState("eye");

    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleCPassword, setIsVisibleCPassword] = useState(false);

    //Active Input Handlers
    const [isActiveEmail, setisActiveEmail] = useState(false);
    const [isActiveFname, setisActiveFname] = useState(false);
    const [isActiveLname, setisActiveLname] = useState(false);
    const [isActivePassword, setisActivePassword] = useState(false);
    const [isActiveConfirmPassword, setisActiveConfirmPassword] = useState(false);

    const handleEmailActivation = (e) => {
        setisActiveEmail(e.target.value !== "");
        setEmail(e.target.value);

    };
    const handleFnameActivation = (e) => {
        setisActiveFname(e.target.value !== "");

        setFname(e.target.value);
        setname(Fname + " " + Lname);
    };
    const handleLnameActivation = (e) => {
        setisActiveLname(e.target.value !== "");
        setLname(e.target.value);
        setname(Fname + " " + Lname);
    };
    const handlePasswordActivation = (e) => {
        setisActivePassword(e.target.value !== "");
        setPassword(e.target.value);
    };
    const handleConfirmPasswordActivation = (e) => {
        setisActiveConfirmPassword(e.target.value !== "");
        setConfirmPassword(e.target.value);
    };


    const togglePasswordVisibility = () => {
        setIsVisible(!isVisible);
        setEye(isVisible ? 'eye' : 'eye-slash');
    };
    const toggleCPasswordVisibility = () => {
        setIsVisibleCPassword(!isVisibleCPassword);
        setCEye(isVisibleCPassword ? 'eye' : 'eye-slash');
    };




    async function handleRegister(e) {
        e.preventDefault();

        //Validations
        if (!name || !email || !password || !confirmPassword) {
            toast.error("Please fill all the fields");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        if (!checkEmail(email)) {
            toast.error("Invalid Email");
            return;
        }
        const userData = { name, email, password };
        console.log(userData);




        console.log(userData);
        if (!error) {
            try {
                const { data } = await register(userData);
                console.log("Data: " + data);
                // const { data } = await register(userData);
                if (data) {
                    // this.props.history.push('/login');
                    // history.push({ pathname: "/validate", state: { email } });
                    toast.success("Account Created Successfully");
                    setRedirected(true);
                }
            } catch (e) {
                console.log(e.response.data.message);
                toast.error(e.response.data.message);
            }
        }
    }

    function checkEmail(email) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
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
            {/* <NavigationBar /> */}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="section-layout-3-main">

                <div className="section text-center mt-4">
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
                                className="oauth-button-cont  m-md-5 mt-4"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <p className="auth-heading">
                                    Create Your Account
                                </p>

                                {/* Old SignUp Form */}
                                <form
                                    className="rd-form rd-mailform mt-0 w-100"
                                    style={{
                                        maxWidth: 600,
                                    }}
                                >

                                    <div className="form-wrap">
                                        <div className="container px-0">
                                            <div className="form-group position-relative">
                                                <input
                                                    type="text"
                                                    className="auth-form-input activate-input"
                                                    id="exampleInput"
                                                    style={{
                                                        border: `1.5px solid ${isActiveFname ? '#007bff' : '#ced4da'}`,
                                                        borderRadius: '0.25rem',
                                                        padding: '1rem',
                                                        paddingTop: '1.5rem',
                                                        borderRadius: '10px',
                                                        paddingBottom: '0.75rem',
                                                        outline: 'none',
                                                        fontWeight: 600,
                                                        transition: 'border-color 0.2s',
                                                    }}
                                                    onChange={handleFnameActivation}
                                                    onFocus={() => setisActiveFname(true)}
                                                    onBlur={handleFnameActivation}
                                                    required
                                                />
                                                <label
                                                    htmlFor="exampleInput"
                                                    style={{
                                                        position: 'absolute',
                                                        top: isActiveFname ? '5px' : '1.2rem',
                                                        left: '1rem',
                                                        fontSize: isActiveFname ? '0.75rem' : '1rem',
                                                        pointerEvents: 'none',
                                                        transition: 'all 0.2s',
                                                        color: isActiveFname ? '#007bff' : '#ced4da',
                                                        fontWeight: isActiveFname ? '600' : '400',
                                                    }}
                                                >
                                                    First Name
                                                </label>
                                            </div>
                                            <div className="form-group  position-relative">
                                                <input
                                                    type="text"
                                                    className="auth-form-input activate-input"
                                                    id="exampleInput"
                                                    style={{
                                                        border: `1.5px solid ${isActiveLname ? '#007bff' : '#ced4da'}`,
                                                        borderRadius: '0.25rem',
                                                        padding: '1rem',
                                                        paddingTop: '1.5rem',
                                                        borderRadius: '10px',
                                                        paddingBottom: '0.75rem',
                                                        outline: 'none',
                                                        fontWeight: 600,
                                                        transition: 'border-color 0.2s',
                                                    }}
                                                    onChange={handleLnameActivation}
                                                    onFocus={() => setisActiveLname(true)}
                                                    onBlur={handleLnameActivation}
                                                    required
                                                />
                                                <label
                                                    htmlFor="exampleInput"
                                                    style={{
                                                        position: 'absolute',
                                                        top: isActiveLname ? '5px' : '1.2rem',
                                                        left: '1rem',
                                                        fontSize: isActiveLname ? '0.75rem' : '1rem',
                                                        pointerEvents: 'none',
                                                        transition: 'all 0.2s',
                                                        color: isActiveLname ? '#007bff' : '#ced4da',
                                                        fontWeight: isActiveLname ? '600' : '400',
                                                    }}
                                                >
                                                    Last Name
                                                </label>
                                            </div>
                                            <div className="form-group  position-relative">
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
                                                    Email Address
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-wrap">
                                        <div className="container mt-2 px-0">
                                            <div className="form-group position-relative">
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
                                        <div className="container mt-2 px-0">
                                            <div className="form-group position-relative">
                                                <input
                                                    type={isVisibleCPassword ? "text" : "password"}
                                                    className="auth-form-input activate-input"
                                                    id="exampleInput"
                                                    data-constraints="@Required"

                                                    style={{
                                                        border: `1.5px solid ${isActiveConfirmPassword ? '#007bff' : '#ced4da'}`,
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
                                                    onChange={handleConfirmPasswordActivation}
                                                    onFocus={() => setisActiveConfirmPassword(true)}
                                                    onBlur={handleConfirmPasswordActivation}
                                                    required
                                                />
                                                <label
                                                    htmlFor="exampleInput"
                                                    style={{
                                                        position: 'absolute',
                                                        top: isActiveConfirmPassword ? '5px' : '1.2rem',
                                                        left: '1rem',
                                                        fontSize: isActiveConfirmPassword ? '0.75rem' : '1rem',
                                                        pointerEvents: 'none',
                                                        transition: 'all 0.2s',
                                                        color: isActiveConfirmPassword ? '#007bff' : '#ced4da',
                                                        fontWeight: isActiveConfirmPassword ? '600' : '400',
                                                    }}
                                                >
                                                    ConfirmPassword
                                                </label>
                                                <i
                                                    className={`fa fa-${eye}`}
                                                    id="eye"
                                                    aria-hidden="true"
                                                    onClick={toggleCPasswordVisibility}
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
                                    {/* <div className="form-wrap">
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
                                        // onChange={handleEmailChange}
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
                                    </div> */}
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
                </div >
            </div >
        </div >
    );
};

export default RegisterWithEmail;
