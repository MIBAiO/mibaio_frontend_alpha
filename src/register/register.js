// import './bootstrap.css';
// import './fonts.css';
// import './style.css';
import { register } from "../http/apis";
import { Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";

import styled from "styled-components";
import { faBookSkull } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
	const history = useHistory();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirected, setRedirected] = useState(false);
	const [error, setError] = useState(null);

	const [invalid, setInvalid] = useState(false);

	async function handleRegister(e) {
		e.preventDefault();
		const userData = { name, email, password };
		//console.log(userData);
		if (!error) {
			try {
				const { data } = await register(userData);
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

	return (
		<div>
			{redirected && (
				<Redirect to={{ pathname: "/validate", state: { email } }} />
			)}
			{/* RD Navbar*/}
			<Navbar
				collapseOnSelect
				expand="lg"
				className="rd-navbar-nav-wrap toggle-original-elements active color-nav "
				variant="dark"
			>
				<Container>
					<Navbar.Brand
						href="#home"
						className="order-md-0 mx-auto order-1"
					>
						<img
							className=" brand-logo-dark"
							src="images/logo-default-96x32.png"
							alt=""
							width={96}
							height={32}
							srcSet="images/logo-default-96x32.png 2x"
						/>
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls="responsive-navbar-nav"
						className="order-md-1 order-0"
					/>

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav
							className="me-auto nav-font nav-menu"
							style={{ marginLeft: "20%" }}
						>
							<Nav.Link>
								<Link className="rd-nav-link nav-font" to="/">
									Home
								</Link>
							</Nav.Link>
							<Nav.Link>
								<Link
									className="rd-nav-link nav-font"
									to="/about_us"
								>
									<FontAwesomeIcon icon="fa-solid fa-id-card" />
									About Us
								</Link>
							</Nav.Link>
							<Nav.Link>
								<Link
									className="rd-nav-link nav-font"
									to="/careers"
								>
									Careers
								</Link>
							</Nav.Link>
							<NavDropdown
								title="Account"
								id="collasible-nav-dropdown"
								className="rd-nav-link nav-font"
							>
								<NavDropdown.Item>
									<Link
										className="rd-nav-link"
										to="/about_us"
									>
										View Dashboard
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link
										className="rd-nav-link"
										to="/about_us"
									>
										Log Out
									</Link>
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link>
								<Link
									className="rd-nav-link nav-font"
									to="/contact_us"
								>
									Contact Us
								</Link>
							</Nav.Link>
						</Nav>
						<Nav className="me-auto nav-font">
							<NavDropdown
								title="More"
								id="collasible-nav-dropdown"
							>
								<NavDropdown.Item>
									<Link className="rd-nav-link " to="/">
										View Dashboard
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link className="rd-nav-link" to="/">
										Log Out
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item>
									<Link
										className="rd-nav-link"
										to="/about_us"
									>
										Privacy Policy
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link
										className="rd-nav-link"
										to="/our_team"
									>
										Our Team
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item>
									<Link className="rd-nav-link" to="/login">
										Login
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link
										className="rd-nav-link"
										to="/register"
									>
										Register
									</Link>
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
					<Nav>
						<div className="rd-navbar-element rd-navbar-element_centered">
							<div
								className="group-xs"
								style={{ marginRight: "15px" }}
							>
								<Link
									className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon"
									id="cart-size-1"
									to="/cart"
								>
									<span className="add-xs" id="cart-no">
										0
									</span>
								</Link>
							</div>
						</div>
					</Nav>
					<Nav>
						<div className="rd-navbar-element rd-navbar-element_right">
							<div id="google_translate_element"></div>
							<ul className="list-localization">
								<li>
									<a
										className="icon icon-sm link-social-2 mdi mdi-cart-outline mr-2"
										id="cart-size"
										href="#"
									>
										<span className="add-xs" id="cart-no">
											0
										</span>
									</a>
								</li>
								<li>
									<label>
										<input
											id="Marathi"
											name="localization"
											defaultValue="Marathi"
											type="radio"
											autoComplete="Off"
											className="radio-custom"
										/>
										<span className="radio-custom-dummy" />
										<span className="label-text">
											<span className="notranslate">
												मराठी
											</span>
										</span>
									</label>
								</li>
								<li>
									<label>
										<input
											id="English"
											name="localization"
											defaultValue="English"
											type="radio"
											defaultChecked="checked"
											autoComplete="Off"
											className="radio-custom"
										/>
										<span className="radio-custom-dummy" />
										<span className="label-text">
											English
										</span>
									</label>
								</li>
								<li>
									<label>
										<input
											id="Hindi"
											name="localization"
											defaultValue="Hindi"
											type="radio"
											autoComplete="Off"
											className="radio-custom"
										/>
										<span className="radio-custom-dummy" />
										<span className="label-text">
											<span className="notranslate">
												हिंदी
											</span>
										</span>
									</label>
								</li>
							</ul>
						</div>
					</Nav>
				</Container>
			</Navbar>

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
									Register a free account on our website to
									experience the amazing features of our apps.
								</span>
							</p>
							<div className="box-shadow-1-main">
								{/* RD Mailform */}
								<form
									className="rd-form rd-mailform"
									method="post"
									id="sign-up"
									onSubmit={handleRegister}
								>
									<div className="form-wrap">
										<input
											className="form-input"
											id="register-name"
											type="text"
											name="name"
											placeholder="Name"
											data-constraints="@Required"
											value={name}
											onChange={(e) =>
												setName(e.target.value)
											}
										/>
										{/*<label class="form-label" for="register-name">Name</label> */}
									</div>
									<div className="form-wrap">
										<input
											className="form-input"
											id="register-email"
											type="email"
											name="email"
											placeholder="E-Mail"
											data-constraints="@Email @Required"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
									</div>
									<div className="form-wrap">
										<input
											className="form-input"
											id="register-password"
											type="password"
											name="password"
											placeholder="Password"
											data-constraints="@Required"
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
										<div
											id="pwd_valid"
											className="hide"
											style={{ position: "relative" }}
										>
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
											Create My Free Account
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
		</div>
	);
};

export default Register;
