import { useEffect } from "react";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { logUserOut, subscribeToNewsletter } from "../http/apis";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { ToastContainer } from "react-bootstrap";

const CustomFooter = () => {
	const [email, setEmail] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [didRedirect, setDidRedirect] = useState(false);

	const handleSubscribe = async (e) => {
		toast.success("Subscribed to newsletter", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		try {
			e.preventDefault();
			// await subscribeToNewsletter(email);
			setEmail("");
		} catch (err) {
			toast.error("Check your internet connection", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	const handleLogOut = async () => {
		await logUserOut();
		setDidRedirect(true);
	};

	useEffect(() => {
		if (Cookies.get("accessToken")) {
			setIsLoggedIn(true);
		}
	}, []);
	return (
		<section className="section section-md-last block-footer-classic">
			{didRedirect && <Redirect to="/" />}

			<div className="block-footer-classic-wrap">
				<div className="container">
					<div className="row row-50 justify-content-lg-between">
						<div
							className="col-md-6 col-lg-6 wow clipInLeft"
							style={{ animationName: "none" }}
						>
							<p className="heading heading-alternate-1 text-white">
								Subscribe to Get Notified!
							</p>
							<p className="big text-white-50">
								Sign up to receive updates and fresh news from
								us.
							</p>
							<form
								className="rd-form rd-mailform form-inline form-shadow block-11 ot30"
								data-form-output="form-output-global"
								data-form-type="subscribe"
								onSubmit={handleSubscribe}
							>
								<div className="form-wrap">
									<input
										className="form-input form-control-has-validation"
										id="subscribe-form-email-11"
										type="email"
										name="email"
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										value={email}
										placeholder="Enter Your
                                                    E-mail"
										data-constraints="@Email @Required"
									/>
									<span className="form-validation" />
								</div>
								<div className="form-button">
									<button
										className="button button-secondary button-winona"
										type="submit"
									>
										<div className="content-original">
											Subscribe
										</div>
										<div className="content-dubbed">
											Subscribe
										</div>
									</button>
								</div>
							</form>
						</div>
						<div
							className="col-md-6 col-xl-5 wow clipInLeft"
							style={{ animationName: "none" }}
						>
							<p className="heading heading-alternate-1 text-white">
								Time to Get Started
							</p>
							<p className="big text-white-50">
								Upgrade your home to a smart home with MIBAiO!
							</p>
							<div className="group ot30">
								<a
									className="button button-secondary button-winona"
									href="https://mibaio.in/#"
								>
									<div className="content-original">
										Get a Quote
									</div>
									<div className="content-dubbed">
										Get a Quote
									</div>
								</a>
								<Link
									className="button button-default-outline button-winona text-white"
									to="/about_us"
									style={{marginLeft:"13px"}}
								>
									<div className="content-original" style={{marginLeft:"13px"}}>
										More About MIBAiO
									</div>
									<div className="content-dubbed">
										More About MIBAiO
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				{/* Page Footer*/}
				<footer className="section footer-classic footer-classic_boxed text-white-50 text">
					<div className="hr container">
						<hr />
					</div>
					<div className="footer-classic-main">
						<div className="container">
							<div className="row row-50 justify-content-lg-between">
								<div className="col-sm-7 col-lg-3 col-xl-2">
									<a
										className="brand"
										href="https://mibaio.in/index.html"
									>
										<img
											src="images/logo-default-96x32.png"
											alt=""
											width={96}
											height={32}
											srcSet="images/logo-default-96x32.png 2x"
										/>
									</a>
									<p>
										<span
											className="text"
											style={{
												maxWidth: "250px",
											}}
										>
											MIBAiO is the leading provider of
											the best automation system for your
											smarthome.
										</span>
									</p>
									{!isLoggedIn && (
										<Link
											to="/login"
											className="button button-color-8 button-winona text-black wow fadeIn"
											style={{
												animationName: "none",
											}}
										>
											<div className="content-original">
												Sign In
											</div>
											<div className="content-dubbed">
												Sign In
											</div>
										</Link>
									)}
									{isLoggedIn && (
										<div
											className="button button-color-8 button-winona text-black wow fadeIn"
											style={{
												animationName: "none",
											}}
										>
											<div className="content-original">
												Log Out
											</div>
											<div className="content-dubbed">
												Log Out
											</div>
										</div>
									)}
								</div>
								<div className="col-sm-5 col-lg-3 col-xl-2">
									<h4 className="footer-classic-title text-white">
										About
									</h4>
									<ul className="list footer-classic-list text-white">
										<li>
											<Link
												to="/about_us"
												className="footer-anchor"
											>
												About Us
											</Link>
										</li>
										<li>
											<Link
												to="/our_team"
												className="footer-anchor"
											>
												Our Team
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-sm-7 col-lg-5 col-xl-3">
									<h4 className="footer-classic-title text-white">
										Useful Links
									</h4>
									<ul className="list footer-classic-list footer-classic-list_2-cols text-white">
										<li>
											<Link
												to="/careers"
												className="footer-anchor"
											>
												Careers
											</Link>
										</li>
										<li>
											<Link
												to="/view"
												className="footer-anchor"
											>
												Products
											</Link>
										</li>
										<li>
											<Link
												to="/faq"
												className="footer-anchor"
											>
												FAQ
											</Link>
										</li>
										<li>
											<Link
												to="/contact_us"
												className="footer-anchor"
											>
												Contact Us
											</Link>
										</li>
										<li>
											<Link
												to="/returnnrefund"
												className="footer-anchor"
											>
												Return & Refund
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-sm-5 col-lg-9 col-xl-2">
									<h4 className="footer-classic-title text-white">
										Contact info
									</h4>
									<div className="row row-20 row-sm-35">
										<div className="col-6 col-sm-12 col-lg-8 col-xl-12">
											<div className="row row-10 text-white-50">
												<div className="col-lg-6 col-xl-12">
													<a
														className="footer-anchor"
														href="mailto:info@mibaio.xyz"
													>
														info@mibaio.xyz
													</a>
												</div>
												<div className="col-lg-6 col-xl-12">
													<a
														className="big footer-anchor"
														href="tel:+91-9673660515"
													>
														+91-9673660515
													</a>
												</div>
											</div>
										</div>
										<div className="col-6 col-sm-12 col-lg-4 col-xl-12 text-right text-sm-left">
											<div className="group group-xs">
												<a
													className="link link-social-1 mdi mdi-twitter"
													href="https://mibaio.in/#"
												/>
												<a
													className="link link-social-1 mdi mdi-facebook"
													href="https://mibaio.in/#"
												/>
												<a
													className="link link-social-1 mdi mdi-instagram"
													href="https://mibaio.in/#"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hr container">
						<hr />
					</div>
					<div className="footer-classic-aside">
						<div className="container">
							<p className="text-white-50 rights">
								<span>©&nbsp;</span>
								<span className="copyright-year">2023</span>
								<span>&nbsp;</span>
								<span>MIBAiO</span>
								<span>.&nbsp;</span>
								{/* <a href="https://mibaio.in/privacy-policy.html"> */}
								<Link to="/privacyPolicy">
									{" "}
									Privacy Policy
								</Link>
							</p>
						</div>
					</div>
				</footer>
				{/* <a
                                style={{
                                    position: "fixed",
                                    bottom: "30px",
                                    right: "30px",
                                    zIndex: 1000,
                                    backgroundColor: "#4e83f1",
                                    color: "white",
                                    padding: "10px",
                                    borderRadius: "50%",
                                }}
                                href="#"
                            >
                                <img
                                    src="https://img.icons8.com/ios-glyphs/60/000000/long-arrow-up.png"
                                    height="32px"
                                    width="32px"
                                />
                            </a> */}
				{/* <a href="#" id="ui-to-top" className="ui-to-top mdi mdi-chevron-up"></a> */}
			</div>
		</section>
	);
};

export default CustomFooter;
