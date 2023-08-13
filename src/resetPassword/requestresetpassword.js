import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomFooter from "../components/customfooter";
import NavigationBar from "../components/navigationbar";
import { requestResetPassword } from "../http/apis";
import "../login/login.css";

const RequestResetPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [invalid, setInvalid] = useState(true);
    const [alertType, setAlertType] = useState("alert-danger");
    const [isActiveEmail, setisActiveEmail] = useState(false);

    function checkEmail(email) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    async function handleResetPassword(e) {
        e.preventDefault();
        try {
            await requestResetPassword({ email });
            setAlertType("alert-success");
            setError("Email has been successfully sent");
        } catch (err) {
            console.log(err.response.data.err);
            setError(err.response.data.err);
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!checkEmail(e.target.value)) {
            setAlertType("alert-danger");
            setError("Email is not valid");
            setInvalid(true);
        } else {
            setError(null);
            setInvalid(false);
        }
        setisActiveEmail(e.target.value !== "");
    };

    return (
        <>
            {/* <NavigationBar /> */}
            <div className="section-layout-3-main">
                <div className="section-1 text-center">
                    <div className="container">
                        <div className="signup-con p-2 pb-5 w-100 h-100">
                            <div className="d-flex p-0 m-0 justify-content-between">
                                <div className="layout-2-item back-home-btn">
                                    <Link
                                        className="link  link-icon link-icon-left sffont"
                                        to="/"
                                    >
                                        <span className="icon mdi mdi-arrow-left" />
                                        <span className="fw-bold">Back</span>
                                    </Link>
                                </div>
                                <div className="layout-2-item create-acc-btn d-flex p-0 m-0 justify-content-between align-items-center">
                                    <div className="layout-2-group">
                                        <Link className="sffont" to="/login">
                                            Sign In
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
                                className="oauth-button-cont  m-md-5"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <p className="auth-heading">Forgot Password</p>
                                <span
                                    className=""
                                    style={{
                                        color: "#000",
                                        maxWidth: "350px",
                                    }}
                                >
                                    Enter your account's email and we'll send
                                    you an email to reset the password
                                </span>
                                <form
                                    className="rd-form mt-5 rd-mailform mt-0 w-100"
                                    style={{
                                        maxWidth: 600,
                                    }}
                                    onSubmit={handleResetPassword}
                                >
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="auth-form-input activate-input"
                                            id="exampleInput"
                                            style={{
                                                border: `1.5px solid ${isActiveEmail ? '#007bbb' : '#ced4da'}`,
                                                borderRadius: '0.25rem',
                                                padding: '1rem',
                                                paddingTop: '1.5rem',
                                                borderRadius: '10px',
                                                paddingBottom: '0.75rem',
                                                outline: 'none',
                                                fontWeight: 600,
                                                transition: 'border-color 0.2s',
                                            }}
                                            onChange={handleEmailChange}
                                            onFocus={() => setisActiveEmail(true)}
                                            value={email}
                                            onBlur={handleEmailChange}
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
                                    <div className="form-wrap">
                                        <button
                                            className="auth-btn sffont w-100 mt-3"
                                            name="btnsignin"
                                            disabled={invalid}
                                        >
                                            Send Email
                                        </button>
                                    </div>

                                </form>
                                <a href="" className="text-center my-3 fw-bold text-uppercase mt-3">FORGOT THE EMAIL ADDRESS?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="layout-2 ">
				<div className="layout-2-inner">
					<div className="layout-2-item">
						<Link className="link link-icon link-icon-left" to="/">
							<span className="icon mdi mdi-arrow-left" />
							<span>Back to Home</span>
						</Link>
					</div>
					<div className="layout-2-item">
						<div className="layout-2-group">
							<p className="text-gray-900 ls-001">
								Already have an account?
							</p>
							<Link
								className="button button-sm button-primary-outline button-winona"
								to="/login"
							>
								Log In
							</Link>
							<a className="link link-underline" href="faq.html">
								Need help?{" "}
							</a>
						</div>
					</div>
				</div>
			</div> */}
            {/* <div className="section-layout-3-main">
				<div className="section-1 text-center">
					<div className="container">
						<div className="box-shadow-1">
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
									Tell us the email address associated with
									your MIBAiO account, and we’ll send you an
									email with a link to reset your password.
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
										<span className="sr-only">Close</span>
									</button>
									{error}
								</div>
							)}
							<div className="box-shadow-1-main">
								<form
									className="rd-form rd-mailform"
									method="post"
									id="sign-up"
									onSubmit={handleResetPassword}
								>
									<div className="form-wrap">
										<input
											className="form-input"
											id="register-email"
											type="email"
											name="email"
											placeholder="E-Mail"
											required={true}
											value={email}
											onChange={handleChange}
										/>
									</div>
									<div className="form-wrap">
										<button
											className="button button-block button-secondary button-shadow button-winona"
											type="submit"
											name="btnsign"
											id="btnsign"
											disabled={invalid}
										>
											Reset Password
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
                {/* <CustomFooter /> */ }
        </>
    );
};

export default RequestResetPassword;
