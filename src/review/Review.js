import { login } from "../http/apis";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
import { useHistory, Link, Redirect } from "react-router-dom";
import { Dropdown, Form } from "react-bootstrap";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import "./reviewstyle.css";
import styled from "styled-components";
import NavigationBar from "../components/navigationbar";
import { getUserOrders, postReview } from "../http/reviewCalls";

const Review = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [Review, setReview] = useState("");
	const [didRedirect, setDidRedirect] = useState(false);

	const [error, setError] = useState(null);
	const [alertType, setAlertType] = useState("alert-danger");

	const [invalid, setInvalid] = useState(false);

	const [orderList, setOrderList] = useState([]);

	const [currentlySelected, setCurrentlySelected] =
		useState("Select a Product");

	const [OrderId, setOrderID] = useState("");

	const dispatch = useDispatch();

	async function handleSubmit(e) {
		e.preventDefault();
		const data = {
			feedback: Review,
			orderId: OrderId,
			rating,
		};
		try {
			const resp = await postReview(data);
			console.log(resp);
		} catch (err) {
			console.log("err", err);
		}
	}

	useEffect(() => {
		async function fetchData() {
			const userOrders = await getUserOrders();
			const eles = userOrders.data.map((ele) => {
				return {
					orderId: ele._id,
					modelName: ele.orderData[0].modelName,
				};
			});
			setOrderList([...eles]);
		}
		fetchData();
	}, []);

	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	return (
		<>
			{/* RD Navbar*/}
			<NavigationBar />

			{didRedirect && <Redirect to="/" />}

			<div>
				<div className="layout-2 section-layout-3-header">
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
							{/* <div className="layout-2-group">
                                
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
                            </div> */}
						</div>
					</div>
				</div>
				<div className="section-layout-3-main">
					<div className="section-1 text-center">
						<div className="container">
							<div className="box-shadow-1">
								{" "}
								{/* <a className="brand" href="index.html"> */}
								{/* <img
                                        className="brand-logo-dark"
                                        src={"images/logo-default-inverse-96x32.png"}
                                        alt=""
                                        width={96}
                                        height={32}
                                        srcSet="images/logo-default-inverse-96x32.png 2x"
                                    /> */}
								<h3>Review &#10024;</h3>
								{/* </a> */}
								<p className="text-gray-900">
									<span
										style={{
											maxWidth: "400px",
											fontSize: "24px",
										}}
									>
										We would appreciate your review!
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
											<span className="sr-only">
												Close
											</span>
										</button>
										{error}
									</div>
								)}
								<div className="box-shadow-1-main">
									<form className="rd-form rd-mailform">
										{/* <div className="form-wrap">
                                            <input
                                                className="form-input"
                                                type="email"
                                                name="email"
                                                placeholder="Email-ID"
                                                required
                                                value={email}
                                                onChange={handleEmailChange}
                                            />
                                        </div> */}
										<div className="form-wrap">
											<Dropdown
												onSelect={(e, eve) => {
													const obj = JSON.parse(e);
													setCurrentlySelected(
														obj.modelName
													);
													setOrderID(obj.orderId);
												}}
												style={{ minWidth: "100%" }}
											>
												<Dropdown.Toggle
													variant="success"
													id="dropdown-basic"
													style={{
														minWidth: "100%",
														background: "white",
														color: "#0accbe",
													}}
												>
													{currentlySelected}
												</Dropdown.Toggle>
												<Dropdown.Menu
													style={{ minWidth: "100%" }}
												>
													{orderList.map((ele) => (
														<Dropdown.Item
															eventKey={JSON.stringify(
																{
																	modelName:
																		ele.modelName,
																	orderId:
																		ele.orderId,
																}
															)}
															// href="#/action-1"
														>
															<div>
																{ele.modelName}
																<br />
																<div
																	style={{
																		fontSize:
																			"10px",
																	}}
																>
																	{
																		ele.orderId
																	}
																</div>
															</div>
														</Dropdown.Item>
													))}

													{/* <Dropdown.Item
														eventKey="Extension 8S"
														href="#/action-2"
													>
														Extension 8S
													</Dropdown.Item> */}
												</Dropdown.Menu>
											</Dropdown>
										</div>
										{/* <div className="form-wrap">
                                            <input
                                                className="form-input"
                                                type="Review"
                                                id="register-Review"
                                                name="pass"
                                                placeholder="Review"
                                                required
                                                value={Review}
                                                onChange={(e) =>
                                                    setReview(e.target.value)
                                                }
                                            />
                                            <i
                                                className="fa fa-eye-slash"
                                                id="eye"
                                                aria-hidden="true"
                                            /> */}
										{/* </div> */}
										<div className="form-wrap">
											<textarea
												className="form-input"
												type="text"
												rows="4"
												cols="40"
												placeholder="Your Valuable Feedback here !"
												// style={{height:"145px"}}
												onChange={(e) =>
													setReview(e.target.value)
												}
											/>
										</div>
										<h5 style={{ marginLeft: "26%" }}>
											Please rate us <br />
										</h5>
										<div
											className="star-rating"
											style={{ marginLeft: "26%" }}
										>
											{[...Array(5)].map(
												(star, index) => {
													index += 1;
													return (
														<button
															type="button"
															key={index}
															className={
																index <=
																(hover ||
																	rating)
																	? "on"
																	: "off"
															}
															onClick={() =>
																setRating(index)
															}
															onMouseEnter={() =>
																setHover(index)
															}
															onMouseLeave={() =>
																setHover(rating)
															}
														>
															<span className="star">
																&#9733;
															</span>
														</button>
													);
												}
											)}
										</div>
										<br />
										<div className="form-wrap">
											<button
												className="button button-sm button-primary-outline button-winona"
												name="btnsignin"
												id="btnsignin"
												style={{ marginLeft: "30%" }}
												onClick={handleSubmit}
												disabled={invalid}
											>
												Submit
											</button>
										</div>
									</form>
									{/* <div className="text-decoration-lines">
                                        <span className="text-decoration-lines-content">
                                            Or log in via social networks
                                        </span>
                                    </div> */}

									{/* <div className="group group-xs">
                                        <a
                                            className="link link-social-3 mdi mdi-twitter"
                                            href="#"
                                            aria-label="Twitter"
                                        />
                                        <a
                                            className="link link-social-3 mdi mdi-facebook"
                                            href="#"
                                            aria-label="Facebook"
                                        />
                                        <a
                                            className="link link-social-3 mdi mdi-instagram"
                                            href="#"
                                            aria-label="Google+"
                                        />
                                        <a
                                            className="link link-social-3 mdi mdi-linkedin"
                                            href="#"
                                            aria-label="Linkedin"
                                        />
                                    </div> */}
									{/* <div className="text mt-4">
                                        <span>
                                            <a href="/request_reset_Review">
                                                Forgot Review ?
                                            </a>
                                        </span>
                                    </div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="snackbars" id="form-output-global" />
				{/* <script>
					document.getElementById("eye").addEventListener("click", function() {'{'}
					var x = document.getElementById("register-Review");
					if (x.type == "Review") {'{'}
					x.type = "text";
					this.classList.add("fa-eye");
					this.classList.remove("fa-eye-slash");
					{'}'} else {'{'}
					x.type = "Review";
					this.classList.remove("fa-eye");
					this.classList.add("fa-eye-slash");
					{'}'}
					{'}'});
          		</script> */}
			</div>
		</>
	);
};

export default Review;
