import React, { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import NavigationBar from "../components/navigationbar";
import { passwordReset } from "../http/apis";

const PasswordReset = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [invalid, setInvalid] = useState(true);
	const [eye, setEye] = useState("eye-slash");
	const [type, setType] = useState("password");
	const [borderC, setBorderC] = useState("");
	const [redirect, setRedirect] = useState(false);
	const [error, setError] = useState(null);
	const [alertType, setAlertType] = useState("alert-danger");
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);
	useEffect(() => {
		if (!queryParams.get("token") && !queryParams.get("id")) {
			setRedirect(true);
		}
	}, []);

	function containsAnyLetter(str) {
		return /[a-zA-Z]/.test(str);
	}

	function isUpper(str) {
		return /[A-Z]/.test(str);
	}

	function containsAnyNumber(str) {
		return /[0-9]/.test(str);
	}

	function checkLength(str) {
		return str.length >= 8;
	}

	function togglePassword() {
		if (eye === "eye") {
			setEye("eye-slash");
			setType("password");
		} else {
			setEye("eye");
			setType("text");
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const { data } = await passwordReset({
				id: queryParams.get("id"),
				token: queryParams.get("token"),
				password: password,
			});
			console.log(data);
			setAlertType("alert-success");
			setError("Password Reset Successfully");
		} catch (err) {
			setAlertType("alert-danger");
			console.log(err.response.data.err);
			setError(err.response.data.err);
		}
	}

	useEffect(() => {
		if (
			!(
				containsAnyLetter(password) &&
				containsAnyNumber(password) &&
				isUpper(password) &&
				checkLength(password)
			)
		) {
			setInvalid(true);
		} else {
			setInvalid(false);
		}
	}, [password]);

	useEffect(() => {
		if (confirmPassword === password) {
			setInvalid(false);
			setBorderC("");
			setError(null);
		} else {
			setInvalid(true);
			if (confirmPassword) {
				setError("Password does not match");
				setBorderC("red");
			}
		}
	}, [confirmPassword, password]);

	return (
		<>
			{redirect && <Redirect to="/" />}
			<NavigationBar />
			<div className="section-layout-3-main">
				<div className="section-1 text-center">
					<div className="container">
						<div className="box-shadow-1">
							<h3>Reset Password</h3>
							<br />
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

							<p className="text-gray-900"></p>
							<div className="box-shadow-1-main">
								{/* RD Mailform */}
								<form
									className="rd-form rd-mailform"
									method="post"
									id="sign-up"
									onSubmit={handleSubmit}
								>
									<div
										className="form-wrap"
										style={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<input
											className="form-input"
											id="register-password"
											type={`${type}`}
											name="password"
											placeholder="Password"
											data-constraints="@Required"
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
											style={{ marginRight: "-10%" }}
										/>
										<i
											className={`fa fa-${eye}`}
											id="eye"
											aria-hidden="true"
											style={{
												cursor: "pointer",
											}}
											onClick={togglePassword}
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
											className="form-input"
											id="confirm-password"
											type={`${type}`}
											name="password"
											placeholder="Confirm Password"
											data-constraints="@Required"
											value={confirmPassword}
											onChange={(e) =>
												setConfirmPassword(
													e.target.value
												)
											}
											style={{
												marginRight: "-10%",
												borderColor: `${borderC}`,
											}}
										/>
										<i
											className={`fa fa-${eye}`}
											id="eye"
											aria-hidden="true"
											style={{
												cursor: "pointer",
											}}
											onClick={togglePassword}
										/>
									</div>

									<div className="form-wrap">
										<div
											id="pwd_valid"
											className="hide"
											style={{ position: "relative" }}
										>
											<br />
											<h6 className="text_info">
												Password Must Contain:
											</h6>
											<br />
											<ul>
												<li
													id="letter"
													className="invalid"
												>
													<i
														className={
															"fa" +
															(containsAnyLetter(
																password
															)
																? " fa-check text-success"
																: " fa-times text-danger")
														}
														aria-hidden="true"
													/>{" "}
													Atleast{" "}
													<strong>one letter</strong>
												</li>
												<li
													id="capital"
													className="invalid"
												>
													<i
														className={
															"fa" +
															(isUpper(password)
																? " fa-check text-success"
																: " fa-times text-danger")
														}
														aria-hidden="true"
													/>{" "}
													Atleast{" "}
													<strong>
														one capital letter
													</strong>
												</li>
												<li
													id="number"
													className="invalid"
												>
													<i
														className={
															"fa" +
															(containsAnyNumber(
																password
															)
																? " fa-check text-success"
																: " fa-times text-danger")
														}
														aria-hidden="true"
													/>{" "}
													Atleast{" "}
													<strong>one number</strong>
												</li>
												<li
													id="length"
													className="invalid"
												>
													<i
														className={
															"fa" +
															(checkLength(
																password
															)
																? " fa-check text-success"
																: " fa-times text-danger")
														}
														aria-hidden="true"
													/>{" "}
													Atleast{" "}
													<strong>
														8 characters
													</strong>
												</li>
											</ul>
										</div>
									</div>
									<div className="form-wrap">
										<button
											className="button button-block button-secondary button-shadow button-winona"
											type="submit"
											name="btnsign"
											id="btnsign"
											disabled={invalid}
										>
											Change Password
										</button>
									</div>
									<div className="form-wrap text-center">
										<a
											className="link link-underline small"
											href="privacy-policy.html"
										>
											Privacy Policy
										</a>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PasswordReset;
