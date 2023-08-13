import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Redirect, useLocation } from "react-router-dom";
import CustomFooter from "../components/customfooter";
import NavigationBar from "../components/navigationbar";
import { verifyUser } from "../http/authCalls";

export const Validate = () => {
	const location = useLocation();
	const email = location.state.email;
	const [otp, setOtp] = useState("");
	const [otpError, setOtpError] = useState("");
	const [verified, setVerified] = useState(false);

	useEffect(() => {
		if (otp.length !== 6) {
			setOtpError("Please enter valid OTP");
		} else {
			setOtpError("");
		}
	}, [otp]);

	async function handleVerification() {
		const data = { email, otp };
		try {
			const res = await verifyUser(data);
			setVerified(true);
			console.log(res.data.message);
		} catch (err) {
			console.log(err.response.data.message);
			setOtpError(err.response.data.message);
		}
	}

	return (
		<>
			{verified && <Redirect to={{ pathname: "/login" }} />}
			{/* <NavigationBar /> */}
			<div className="section-layout-3-main">
				<div className="section-1 text-center">
					<div className="container">
						<div className="validateContainer">
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
									Please Enter the OTP which has been sent to
									your registered Email Address
								</span>
							</p>
							{otpError && (
								<div
									className={
										`alert alert-danger d-flex align-items-center alert-dismissible fade rounded-pill` +
										(otpError ? " show" : "")
									}
									role="alert"
									style={{
										width: "50%",
										margin: "20px",
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
									{otpError}
								</div>
							)}
							<div
								style={{
									marginTop: "20px",
									display: "flex",
									justifyContent: "center",
								}}
							>
								<OtpInput
									value={otp}
									onChange={setOtp}
									numInputs={6}
									separator={<span>-</span>}
									inputStyle="otp-input"
									isInputNum="true"
									// isInputSecure="true"
									shouldAutoFocus="true"
									focusStyle="focussed-otp-input"
								/>
							</div>
							<button
								className="button button-block button-secondary button-shadow button-winona"
								name="btnsign"
								id="btnsign"
								onClick={handleVerification}
								disabled={otpError !== ""}
								style={{
									maxWidth: "200px",
								}}
							>
								Verify
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* <CustomFooter /> */}
		</>
	);
};
