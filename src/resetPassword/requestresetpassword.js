import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomFooter from "../components/customfooter";
import NavigationBar from "../components/navigationbar";
import { requestResetPassword } from "../http/apis";

const RequestResetPassword = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(null);
	const [invalid, setInvalid] = useState(true);
	const [alertType, setAlertType] = useState("alert-warning");

	function checkEmail(email) {
		return email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	}

	async function handleResetPassword(e) {
		e.preventDefault();
		try {
			const { data } = await requestResetPassword({ email });
			console.log(data);
			setAlertType("alert-success");
			setError("Email has been successfully sent");
		} catch (err) {
			console.log(err.response.data.err);
			setError(err.response.data.err);
		}
	}

	useEffect(() => {
		if (!checkEmail(email)) {
			setAlertType("alert-warning");
			setError("Email is not valid");
			setInvalid(true);
		} else {
			setError(null);
			setInvalid(false);
		}
	}, [email]);
	return (
		<>
			<NavigationBar />
			<div className="layout-2 ">
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
			</div>
			<div className="section-layout-3-main">
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
								{/* RD Mailform */}
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
											onChange={(e) =>
												setEmail(e.target.value)
											}
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
			<CustomFooter />
		</>
	);
};

export default RequestResetPassword;
