import {
	Col,
	Container,
	Dropdown,
	Nav,
	Navbar,
	NavDropdown,
	Row,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { faIdCard, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import { getProductsInCart } from "../http/cartCalls";
import "./navstyle.css"
import { logUserOut, refresh } from "../http/apis";
import { toast } from "react-hot-toast";
library.add(faIdCard, fas);

const NavigationBar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [cartCount, setCartCount] = useState(0);

	const [didRedirect, setDidRedirect] = useState(false);
	// -----------------Sticky Navbar---------------------------------------
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset;
			const deviceWidth = window.innerWidth;
			const isMobile = deviceWidth < 768;
			if (isMobile && scrollTop > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);
	// ------------------------------------------------------------------------  

	useEffect(() => {
		if (Cookies.get("accessToken")) {
			setIsLoggedIn(true);
		} else {
			(async () => {
				try {
					await refresh();
					setIsLoggedIn(true);
				} catch (err) {
					setIsLoggedIn(false);
					console.log(err);
				}
			})();
		}
		(async () => {
			try {
				if (Cookies.get("accessToken")) {
					const cartItems = await getProductsInCart();
					setCartCount(cartItems.data.length);
				} else {
					setCartCount(0);
				}
			} catch (err) {
				setCartCount(0);
			}
		})();
	}, []);

	const handleLogOut = async () => {
		await logUserOut();
		toast.success("User Logged out successfully");
		setIsLoggedIn(false);
		setDidRedirect(true);
	};
	function updateLanguage(value) {
		// console.log(value);
		var selectIndex = 0;
		var a = document.querySelector("#google_translate_element select");
		switch (value) {
			case "en":
				selectIndex = 0;
				break;
			case "hi":
				selectIndex = 1;
				break;
			case "mr":
				selectIndex = 2;
				break;
			default:
		}
		a.selectedIndex = selectIndex;
		a.dispatchEvent(new Event("change"));

		var toolBar = document.getElementsByClassName(
			"goog-te-banner-frame skiptranslate"
		)[0];
		if (toolBar !== undefined) {
			toolBar.style.display = "none";
			document.body.style.top = "0px";
		}
	}

	return (
		<>
			{didRedirect && <Redirect to="/" />}
			<Navbar
				collapseOnSelect
				expand="lg"
				className="rd-navbar-nav-wrap toggle-original-elements active color-nav"
				variant="dark"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
				fixed={isSticky ? "top" : ""}
			>
				<Container
					style={{
						minWidth: "100%",
					}}
				>
					<Navbar.Brand
						// href="#home"
						className="order-0 ml-0 mr-auto mx-md-auto"
					>
						<Link to="/">
							<img
								className=" brand-logo-dark"
								src="images/logo-default-96x32.png"
								alt=""
								width={96}
								height={32}
								srcSet="images/logo-default-96x32.png 2x"
							/>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls="responsive-navbar-nav"
						className="order-md-1 order-4 border border-0"
					/>

					<Navbar.Collapse
						className="order-5 order-md-0"
						id="responsive-navbar-nav"
						style={{
							justifyContent: "center",
							alignItems: "center",
							width: "100%",
						}}
					>
						<Nav
							className="nav-font nav-menu"
							style={{
								flexWrap: "wrap",
								// width: "100%",
								justifyContent: "center",
							}}
						>
							<Nav.Link
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Link className="rd-nav-link nav-font" to="/">
									Home
								</Link>
							</Nav.Link>
							<Nav.Link
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Link className="rd-nav-link nav-font" to="/about_us">
									{/* <FontAwesomeIcon icon="fa-solid fa-id-card" /> */}
									About Us
								</Link>
							</Nav.Link>
							<Nav.Link
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Link className="rd-nav-link nav-font" to="/view">
									Product
								</Link>
							</Nav.Link>
							{/* <NavDropdown title="Account" id="collasible-nav-dropdown" className="rd-nav-link nav-font">
                        <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">View Dashboard</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">Log Out</Link></NavDropdown.Item>

                    </NavDropdown> */}

							<Nav.Link
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Link className="rd-nav-link nav-font" to="/contact_us">
									Contact Us
								</Link>
							</Nav.Link>

							<Nav.Link
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Link className="rd-nav-link nav-font">
									<NavDropdown
										title={<span className="text-white">More</span>}
										id="collasible-nav-dropdown"
										style={{
											minWidth: "100%",
											backgroundColor: "#0000",
											textAlign: "center",
										}}
									>
										<NavDropdown.Item
											style={{
												backgroundColor: "#0000",
											}}
										>
											<div
												style={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													flexDirection: "column",
													backgroundColor: "#0000",
												}}
											>
												<li class="rd-megamenu-list-item">
													<Link
														to="/careers"
														class="rd-megamenu-list-link text-dark"
													>
														Careers
													</Link>
												</li>
												<li class="rd-megamenu-list-item">
													<Link
														to="/faq"
														class="rd-megamenu-list-link text-dark"
													>
														FAQ
													</Link>
												</li>
												{/* <li class="rd-megamenu-list-item">
                                                    <Link
                                                        to="/"
                                                        class="rd-megamenu-list-link text-dark"
                                                    >
                                                        Privacy Policy
                                                    </Link>
                                                </li> */}
												<li class="rd-megamenu-list-item">
													<Link
														to="/our_team"
														class="rd-megamenu-list-link text-dark"
													>
														Our Team
													</Link>
												</li>
												<li class="rd-megamenu-list-item">
													<Link
														to="/privacyPolicy"
														class="rd-megamenu-list-link text-dark"
													>
														Privacy Policy
													</Link>
												</li>

												<li class="rd-megamenu-list-item">
													<Link
														to="/returnnrefund"
														class="rd-megamenu-list-link text-dark"
													>
														Return &amp; Refund
													</Link>
												</li>
											</div>
										</NavDropdown.Item>
									</NavDropdown>
								</Link>
							</Nav.Link>
							{/* {!isLoggedIn && (
                                <Nav.Link
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Link
                                        className="rd-nav-link nav-font"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                </Nav.Link>
                            )}
                            {isLoggedIn && (
                                <Nav.Link
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <div
                                        className="rd-nav-link nav-font"
                                        to="/login"
                                        onClick={handleLogOut}
                                    >
                                        Logout
                                    </div>
                                </Nav.Link>
                            )} */}
						</Nav>
						{/* <Nav className="me-auto nav-font"></Nav> */}
					</Navbar.Collapse>
					{/* Profile icon */}

					<Nav className="order-2 order-md-0">
						<div className="dropdown" style={{ marginRight: "15px" }}>
							<button
								className="icon icon-sm link-social-2 mdi mdi-account-circle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								id="cart-size-1"
							></button>
							{!isLoggedIn && (
								<ul className="dropdown-menu position-absolute">
									<li>
										<Link className="dropdown-item" to="/login">
											Login
										</Link>
									</li>
								</ul>
							)}
							{isLoggedIn && (
								<ul className="dropdown-menu position-absolute">
									<li>
										<Link className="dropdown-item" to="">
											My Account
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="">
											My Orders
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to="/login"
											onClick={handleLogOut}
										>
											Logout
										</Link>
									</li>
								</ul>
							)}
						</div>
					</Nav>

					<Nav className="order-3 order-md-0">
						<div className="rd-navbar-element rd-navbar-element_centered">
							<div className="group-xs" style={{ marginRight: "15px" }}>
								<Link
									className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon"
									id="cart-size-1"
									to="/cart"
								>
									<span className="add-xs" id="cart-no">
										{cartCount}
									</span>
								</Link>
							</div>
						</div>
					</Nav>
					<Nav>
						<div className="rd-navbar-element rd-navbar-element_right" >
							<div id="google_translate_element"></div>
							<ul className="list-localization">
								<div className="nav" >
									<li class="nav-item mt-2 dropdown">
										<a class="nav-link dropdown-toggle  text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Language
										</a>
										<ul class="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdown" style={{ maxWidth: "100px" }}>
											<li className="dropdown-item" onClick={(e) => {
												updateLanguage("mr");
											}}>
												<span className="label-text">
													<span className="notranslate text-dark">मराठी</span>
												</span>
											</li>
											<li className="dropdown-item" onClick={(e) => {
												updateLanguage("en");
											}}>
												<span className="label-text text-dark">English</span>
											</li>
											<li className="dropdown-item" onClick={(e) => {
												updateLanguage("hi");
											}}>
												<span className="label-text">
													<span className="notranslate text-dark">हिंदी</span>
												</span>
											</li>
										</ul>

									</li>
								</div>
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

							</ul>
						</div>
					</Nav>
				</Container >
			</Navbar >
			{/* <nav class="navbar navbar-expand-lg navbar-dark color-nav">
				<div class="container-fluid">
					<Link to="/">
						<img
							className=" brand-logo-dark"
							src="images/logo-default-96x32.png"
							alt=""
							width={96}
							height={32}
							srcSet="images/logo-default-96x32.png 2x"
						/>
					</Link>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="nav mx-auto  navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item ">
								<div className="nav-link">
									<Link class="nav-link text-white " href="/">
										Home
									</Link>
								</div>
							</li>
							<li class="nav-item">
								<div className="nav-link">
									<Link class="nav-link text-white" href="about_us">
										About Us
									</Link>
								</div>
							</li>
							<li class="nav-item">
								<div className="nav-link">
									<Link class="nav-link text-white" href="view">
										Product
									</Link>
								</div>
							</li>
							<li class="nav-item">
								<div className="nav-link">
									<Link class="nav-link text-white" href="contact_us">
										Contact Us
									</Link>
								</div>
							</li>
							<li class="nav-item">
								<div class="nav-link dropdown">
									<a
										class="nav-link dropdown-toggle text-white"
										href="#"
										id="collasible-nav-dropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										More
									</a>
									<ul class="dropdown-menu" aria-labelledby="collasible-nav-dropdown">
										<li>
											<a class="dropdown-item text-dark" href="/careers">Careers</a>
										</li>
										<li>
											<a class="dropdown-item text-dark" href="/faq">FAQ</a>
										</li>
										<li>
											<a class="dropdown-item text-dark" href="/our_team">Our Team</a>
										</li>
										<li>
											<a class="dropdown-item text-dark" href="/privacyPolicy">Privacy Policy</a>
										</li>
										<li>
											<a class="dropdown-item text-dark" href="/returnnrefund">Return &amp; Refund</a>
										</li>
									</ul>
								</div>
							</li>
						</ul>

					</div>
				</div>
			</nav> */}
		</>
	);
};

export default NavigationBar;
