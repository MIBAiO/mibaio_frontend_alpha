import { REACT_APP_API_URL, login, loginGoogleOAuth } from "../http/apis";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import NavigationBar from "../components/navigationbar";
import "./login.css";
import { useGoogleLogin } from "@react-oauth/google";
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
		//console.log(loginData)

		try {
			const { data } = await login(loginData);
			// dispatch(setUser({ data }));
			console.log(data);
			if (data) {
				console.log("HEREEEEEEE", data);
				// history.push("/");
				setDidRedirect(true);
				// console.log(data);
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

	const handleGoogleSignIn = useGoogleLogin({
		onSuccess: async (codeResponse) => {
			try {
				const codeData = {
					code: codeResponse.code
				}
				const { data } = await loginGoogleOAuth(codeData)
				if (data) {
					console.log("Logged in")
					setDidRedirect(true)
				}
			} catch (e) {
				setAlertType("alert-danger");
				if (e.response) {
					setError(e.response.data.message)
					console.error(e.response.data.message)
				} else {
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
			<NavigationBar />
			{!validated && (
				<Redirect to={{ pathname: "/validate", state: { email } }} />
			)}
			{didRedirect && <Redirect to="/" />}

			<div>
				{/* <div className="layout-2 section-layout-3-header">
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
                </div> */}
				<div className="section-layout-3-main">
					<div className="section-1 text-center">
						<div className="container">
							<div className="box-shadow-1 p-2 pb-5 w-100 h-100">
								<div className="layout-2-inner">
									<div className="layout-2-item">
										<Link
											className="link link-icon link-icon-left sffont"
											to="/"
										>
											<span className="icon mdi mdi-arrow-left" />
											<span>Back to Home</span>
										</Link>
									</div>
									<div className="layout-2-item">
										<div className="layout-2-group">
											<Link
												className="sffont"
												to="/register"
											>
												Create Account
											</Link>
										</div>
									</div>
								</div>
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

								<div
									className="row m-4 h-100"
									style={{ flexDirection: "unset" }}
								>
									<div
										className="col-md-6"
										style={{
											maxWidth: "100%",
											display: "flex",
											justifyContent: "center",
											alignItems: "flex-start",
											flexDirection: "column",
											// flexWrap: "wrap-reverse",
										}}
									>
										<p className="auth-heading">
											Sign in using Mail ID
										</p>

										<form className="rd-form rd-mailform w-100 mt-0">
											<div className="form-wrap">
												<input
													className="auth-form-input"
													type="email"
													name="email"
													placeholder="Email Address"
													required
													onChange={handleEmailChange}
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
											<div className="form-wrap">
												<button
													className="auth-btn sffont w-100"
													name="btnsignin"
													onClick={handleLogin}
													disabled={invalid}
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
										className="col-md-5"
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
													onClick={(e) => {
														e.preventDefault();
														handleGoogleSignIn();
													}}
													disabled={invalid}
												>
													<img
														src="assets/img/google.png"
														className="img-fluid "
														alt="Google"
														width={"40px"}
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
														width={"40px"}
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
														width={"40px"}
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
										</form>
									</div>
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

export default Login;
