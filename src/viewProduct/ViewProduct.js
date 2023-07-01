//import React from "react";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addModel1, removeModel1 } from "../store/cartSlice";
import { Link, Redirect, useLocation } from "react-router-dom";
import "./reviews.css";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import Hamburger from "hamburger-react";
// import pic1 from "../../public/pic1.png";
import styled from "styled-components";
import Magnifier from "react-magnifier";
import Carousel from "react-bootstrap/Carousel";
// import Magnifier from "react-magnifier";
import ReactImageMagnify from "react-image-magnify";
import {
	GlassMagnifier,
	MOUSE_ACTIVATION,
	PictureInPictureMagnifier,
	TOUCH_ACTIVATION,
} from "react-image-magnifiers";
import { addProductToCart } from "../http/apis";
import { createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";

import { faPlus, fas, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import NavigationBar from "../components/navigationbar";
import CustomFooter from "../components/customfooter";
import { toast } from "react-toastify";
import WOW from "wowjs";
library.add(fas, faPlus, faMinus);

const ViewProduct = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init();
	});

	const [state, setState] = useState({
		previewHorizontalPos: "left",
		previewVerticalPos: "bottom",
		previewSizePercentage: 35,
		previewOpacity: 1,
		shadow: false,
		show: true,
	});
	const [itemQuantity, setItemQuantity] = useState(1);
	const [itemPrice, setItemPrice] = useState(5499);
	const [color, setColor] = useState("white");

	const [productImages, setProductImages] = useState([
		"images/product1/whiteFront600x600.png",
		"images/product1/whiteLeft600x600.png",
		"images/product1/whiteRight600x600.png",
		"images/product1/white600x600.png",
	]);

	const [currentlyViewing, setCurrentlyViewing] = useState(
		"images/product1/whiteFront600x600.png"
	);

	const [didRedrirect, setDidRedirect] = useState(false);

	const [isNotLoggedIn, setIsNotLoggedIn] = useState(false);

	const cartHandler = async () => {
		if (itemQuantity === 0) {
			toast.error("Minimum 1 item has to be purchased");
		}
		try {
			const res = await addProductToCart({
				modelName: "MIBAiO Xtension 4S",
				count: itemQuantity,
				color,
			});
			setDidRedirect(true);
		} catch (err) {
			console.log("hi -> ", err);
			setIsNotLoggedIn(true);
		}
	};

	function changeColor(clr) {
		setColor(clr);
	}

	useEffect(() => {
		switch (color) {
			case "white":
				setProductImages((_) => [
					"images/product1/whiteFront600x600.png",
					"images/product1/whiteLeft600x600.png",
					"images/product1/whiteRight600x600.png",
					"images/product1/white600x600.png",
					"https://warylums.sirv.com/White/White%20360.spin?zoom=10",
				]);
				setCurrentlyViewing("images/product1/whiteFront600x600.png");
				break;
			case "blue":
				setProductImages((_) => [
					"images/product1/BlueFront600x600.png",
					"images/product1/BlueLeft600x600.png",
					"images/product1/BlueRight600x600.png",
					"images/product1/Blue600x600.png",
				]);
				setCurrentlyViewing("images/product1/BlueFront600x600.png");
				break;
			case "black":
				setProductImages((_) => [
					"images/product1/BlackFront600x600.png",
					"images/product1/BlackLeft600x600.png",
					"images/product1/BlackRight600x600.png",
					"images/product1/Black600x600.png",
					"https://warylums.sirv.com/Black/Black%20360.spin?zoom=10",
				]);
				setCurrentlyViewing("images/product1/BlackFront600x600.png");
				break;

			default:
				break;
		}
	}, [color]);

	//----------- Playing / Pausing the features video on scroll-------------------------------------------------------------
	const videoRef = useRef(null);

	useEffect(() => {
		let options = {
			rootMargin: "100px",
			threshold: [0.5, 0.75],
		};

		let handlePlay = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					videoRef.current.play();
				} else {
					videoRef.current.pause();
				}
			});
		};

		let observer = new IntersectionObserver(handlePlay, options);

		observer.observe(videoRef.current);
	});

	const specsRef = useRef();

	useEffect(() => {
		if (window.location.href.includes("specs-tabs")) {
			specsRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		// <div className="preloader" id="loading">
		//   <div className="preloader-body">
		//     <div id="loading-center-object">
		//       <div className="object" id="object_four" />
		//       <div className="object" id="object_three" />
		//       <div className="object" id="object_two" />
		//       <div className="object" id="object_one" />
		//     </div>
		//   </div>
		// </div>

		<div>
			<div className="page">
				{/* FScreen*/}

				{didRedrirect && <Redirect to="/cart" />}
				{isNotLoggedIn && <Redirect to="/login" />}
				<section
					className="myclass section page-header-3 header-section header-offset"
					style={{ marginBottom: "50px" }}
				>
					{/* RD Navbar*/}
					{/* RD Navbar*/}
					<NavigationBar />
				</section>

				<section
					className="sproduct container-fluid rounded-3"
					style={{
						flexWrap: "wrap",
					}}
				>
					{/* <div className="row d-flex mt-2">
						<div
							// style={{
							//     display: "flex",
							//     justifyContent: "center",
							//     flexDirection: "row",
							//     flexWrap: "wrap",
							// }}
							className="row d-flex mt-2"
						> */}
					<div
						className="fluid"
						style={{
							display: "flex",
							justifyContent: "center",
							flexDirection: "row",
							flexWrap: "wrap",
						}}
					>
						{/* <PictureInPictureMagnifier
                                    imageSrc="https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg"
                                    previewHorizontalPos={previewHorizontalPos}
                                    previewVerticalPos={previewVerticalPos}
                                    previewSizePercentage={
                                        previewSizePercentage
                                    }
                                    previewOpacity={previewOpacity}
                                    shadow={shadow}
                                ></PictureInPictureMagnifier> */}
						{/* <input type="checkbox" name="" id=""/> */}
						{/* <Magnifier
                                    src={currentlyViewing}
                                    mgShape="square"
                                    zoomFactor={2}
                                    width={500}
                                    mgWidth={150}
                                    mgHeight={150}
                                /> */}
						<div
							className="fluid__image-container wow fadeIn"
							style={{ margin: "10px" }}
						>
							{currentlyViewing.search("spin") !== -1 ? (
								<>
									<iframe
										src={currentlyViewing}
										title="360 image"
										frameborder="0"
										allowfullscreen
										style={{
											height: "60vh",
											width: "70vw",
											maxWidth: "600px",
										}}
									></iframe>
								</>
							) : (
								<ReactImageMagnify
									{...{
										smallImage: {
											alt: "Xtension 4S",
											isFluidWidth: true,
											src: currentlyViewing,
										},
										largeImage: {
											src: currentlyViewing,
											width: 1200,
											height: 1200,
										},

										enlargedImageContainerDimensions: {
											width: "110%",
											height: "110%",
										},
										isActivatedOnTouch: true,
										enlargedImageContainerClassName:
											"customEnlargedContainer",
									}}
								/>
							)}
						</div>
						<div
							className="col-md-1 product-small d-flex flex-md-column order-md-first smallProducts"
							style={
								{
									// maxWidth: "160px",
								}
							}
						>
							{productImages.map((val, idx) => (
								<div
									className="small-img-col"
									style={{
										border: "1px solid #000",
										borderRadius: 20,
										padding: 10,
										marginTop: "5px",
										maxWidth: "150px",
									}}
									onClick={() => setCurrentlyViewing(val)}
									key={idx}
								>
									<img
										src={
											val.search("spin") !== -1
												? "images/360-degrees.png"
												: val
										}
										alt={val}
										className="img-fluid small-img"
									/>
								</div>
							))}
						</div>

						<div
							className="col-md-5 ml-5 wow fadeInRightSmall"
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								maxWidth: "500px",
							}}
						>
							<h2
								className="xtension4s"
								style={{
									fontWeight: "400",
									color: "#262f3c",
									fontFamily: "samsung",
									display: "inline-block",
									marginTop: "3%",
								}}
							>
								Xtension 4S{" "}
							</h2>
							<p
								style={{
									fontFamily: "Avenir",
									fontWeight: "400",
									lineHeight: "1.6",
									color: "#8491a5",
									textAlign: "left",
								}}
							>
								Smart switch controller | Dual mode WiFi +
								Bluetooth with manual control | Upto 4 appliance
								control | Works with Google, Alexa and Siri{" "}
							</p>
							<p>Made with ❤ in India</p>

							<hr />
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									height: "40%",
									justifyContent: "space-evenly",
									// gap: "1rem",
								}}
							>
								<div
									style={{
										display: "flex",
										// justifyContent: "space-evenly",
										gap: "0.5rem",
										margin: "2% 0",
										// marginTop: "5%",
										// height: "16%",
										marginRight: "70%",
									}}
								>
									<div
										style={{
											aspectRatio: "1 / 1",
											backgroundColor: "#e5e5e5",
											borderRadius: "20px",
											width: "35px",
											borderStyle: "solid",
											borderWidth:
												color === "white"
													? "3px"
													: "0px",
											borderColor: "rgb(10, 204, 190)",
											cursor: "pointer",
										}}
										onClick={() => changeColor("white")}
									></div>
									<div
										style={{
											aspectRatio: "1 / 1",
											backgroundColor: "#3f4b66",
											borderRadius: "20px",
											width: "35px",
											borderStyle: "solid",
											borderWidth:
												color === "blue"
													? "3px"
													: "0px",
											borderColor: "rgb(10, 204, 190)",
											cursor: "pointer",
										}}
										onClick={() => changeColor("blue")}
									></div>
									<div
										style={{
											aspectRatio: "1 / 1",
											backgroundColor: "#1a1a1a",
											borderRadius: "20px",
											width: "35px",
											borderStyle: "solid",
											borderWidth:
												color === "black"
													? "3px"
													: "0px",
											borderColor: "rgb(10, 204, 190)",
											cursor: "pointer",
										}}
										onClick={() => changeColor("black")}
									></div>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-around",
										alignItems: "center",
										margin: "2% 0",
										marginRight: "46%",
									}}
								>
									<div
										className="_5499"
										style={{
											width: "30%",
											display: "flex",
											justifyContent: "center",
										}}
									>
										<h4
											className="ml-2"
											style={{
												fontWeight: "bold",
												fontSize: "25px",
											}}
										>
											₹5499.00{" "}
											<small
												style={{
													fontSize: "10px",
													color: "#0accbe",
												}}
											>
												GST Included
											</small>
										</h4>
									</div>
									<div
										className="quantity justify-content-md-evenly"
										style={{
											width: "30%",
											display: "flex",
											// justifyContent: "space-evenly",
											alignItems: "center",
										}}
									>
										<button
											className="minus-btn"
											type="button"
											name="button"
											style={{
												aspectRatio: "1 / 1",
												backgroundColor:
													"rgb(10, 204, 190)",
												borderRadius: "50px",
												margin: "0 10px",
											}}
											onClick={() => {
												if (itemQuantity > 0) {
													setItemQuantity(
														itemQuantity - 1
													);
													dispatch(removeModel1());
												}
											}}
										>
											<FontAwesomeIcon icon="fa-solid fa-minus" />
										</button>

										{/* <input type="text" name="name" defaultValue={1} /> */}
										<div>
											<span>{itemQuantity}</span>
										</div>

										<button
											className="plus-btn"
											type="button"
											name="button"
											onClick={() => {
												setItemQuantity(
													itemQuantity + 1
												);
												dispatch(addModel1());
											}}
											style={{
												aspectRatio: "1 / 1",
												backgroundColor:
													"rgb(10, 204, 190)",
												borderRadius: "50px",
												margin: "0 10px",
											}}
										>
											<FontAwesomeIcon icon="fa-solid fa-plus" />
										</button>
									</div>
								</div>
								<div
									className="group wow clipInLeft add"
									style={{
										// margin: "auto",
										// width: "auto",
										display: "flex",
										justifyContent: "center",
										margin: "2% 0",
										marginRight: "65%",
									}}
								>
									<div
										className="button button-icon button-icon-right button-secondary button-winona"
										onClick={cartHandler}
										data-wow-duration=".5s"
										data-wow-delay=".5s"
									>
										<div className="content-original">
											Add to Cart
										</div>
										<div className="content-dubbed">
											Add to Cart
										</div>
									</div>
								</div>
							</div>
							<h4 className="py-2" style={{ fontWeight: "bold" }}>
								Product Description
							</h4>
							<hr className="hr-pro" />
							<p
								style={{
									fontSize: 16,
									fontFamily: "Avenir",
									lineHeight: "1.6",
									fontWeight: "400",
								}}
							>
								MIBAiO 4S is a IoT smart device which upgrades
								the abilities of upto 4 pre-existing electrical
								appliances eg. lights, fan etc to be fully
								operated & automated using our App across the
								world!
							</p>
						</div>

						{/* <div
                                    className="row"
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        overflow: "scroll",
                                        flexWrap: "nowrap",
                                    }}
                                > */}
						{/* <div className="small-img-col">
                                        <img
                                            src="pic3.png"
                                            alt=""
                                            className="img-fluid mb-3 small-img"
                                        />
                                    </div>

                                    <div className="small-img-col">
                                        <img
                                            src="pic3.png"
                                            alt=""
                                            className="img-fluid mb-3 small-img"
                                        />
                                    </div>

                                    <div className="small-img-col">
                                        <img
                                            src="pic3.png"
                                            alt=""
                                            className="img-fluid mb-3 small-img"
                                        />
                                    </div>

                                    <div className="small-img-col">
                                        <img
                                            src="pic3.png"
                                            alt=""
                                            className="img-fluid mb-3 small-img"
                                        />
                                    </div>
                                    <div className="small-img-col">
                                        <img
                                            src="pic3.png"
                                            alt=""
                                            className="img-fluid mb-3 small-img"
                                        />
                                    </div> */}
						{/* </div> */}
						{/* </div>
						</div> */}
					</div>
				</section>

				{/* ================================================================================================ */}

				<div className="tabs" ref={specsRef}>
					<h3
						style={{
							fontWeight: "bold",
							color: "#0accbe",
							textAlign: "center",
							marginBottom: "10px",
						}}
					>
						What the Manufacturer has to say?
					</h3>
					<input type="radio" name="tabs" id="tab1" defaultChecked />
					<label for="tab1" id="tab-l1">
						<i className="fas fa-book"></i>
						<span>Features</span>
					</label>

					<input type="radio" name="tabs" id="tab2" />
					<label for="tab2" id="tab-l2">
						<i className="fas fa-microchip"></i>
						<span>Specifications</span>
					</label>

					<input type="radio" name="tabs" id="tab3" />
					<label for="tab3" id="tab-l3">
						<i className="fas fa-comments"></i>
						<span>Reviews</span>
					</label>

					<div id="tab-content1" className="tab-content">
						<video
							id="myvideo"
							src="images/SummarySlide.mp4"
							style={{
								width: "100%",
								marginBottom: "-5%",
								// transitionDelay: " 1s",
							}}
							ref={videoRef}
							// autoPlay="true"
							muted="true"
						></video>
						<div className="container">
							<div className="row row-50 justify-content-xl-between align-items-center">
								<div
									className="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall"
									data-wow-delay=".5s"
								>
									<div className="unit unit-spacing-1 align-items-center">
										<div className="unit-left">
											<div className="icon icon-style-1 mdi mdi-clock"></div>
										</div>
										<div className="unit-body">
											<h4>Schedule On/Off</h4>
										</div>
									</div>
									<div className="block-4 offset-top-4">
										<div className="quote-light-text">
											<p className="big">
												Automate your daily routine
												tasks by scheduling your
												appliance(s) to run at a
												specified time or set a timer to
												turn on/off your appliance(s)
												automatically. eg:
											</p>
										</div>
										<blockquote className="quote-light">
											<div className="quote-light-text">
												<ul className="list-marked list-marked_secondary">
													<li>
														Switch ON your
														Mandir/outdoor lights
														every eveing at 6:15pm
														and switch OFF at
														11:00pm
													</li>
													<li>
														Switch OFF TV/STB every
														night at 11:00pm
													</li>
													<li>
														Set up timings of light
														and fan in kids/elderly
														rooms
													</li>
												</ul>
											</div>
										</blockquote>
									</div>
								</div>

								<div
									className="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern"
									data-wow-delay=".5s"
									id="Schedule"
								>
									<div className="item">
										<img
											className="d-block w-100"
											src="images/product1/Feature1.png"
											alt="Appliance-scheduling-feature"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row row-50 justify-content-xl-between align-items-center flex-md-row-reverse">
								<div
									className="col-md-8 col-lg-7 col-xl-6 wow fadeInRightSmall"
									data-wow-delay=".5s"
								>
									<div className="unit unit-spacing-1 align-items-center">
										<div className="unit-left">
											<div className="icon icon-style-1 mdi mdi-plus-network"></div>
										</div>
										<div className="unit-body">
											<h4>Self-reliant lifestyle</h4>
										</div>
									</div>
									<div className="block-4 offset-top-4">
										<p className="big">
											With inspiration from "आत्मनिर्भर
											भारत अभियान", we are comitted to
											provide our customers a truely
											self-reliant (आत्मनिर्भर) experience
											using MIBAiO.
										</p>
										<blockquote className="quote-light">
											<div className="quote-light-text">
												<ul className="list-marked list-marked_secondary">
													<li>
														Easily manage home
														appliances without
														struggling to move from
														your position
													</li>
													<li>
														Hands-free experience
														with voice control
														feature
													</li>
													<li>
														Establish a reliable
														network with our secure
														IoT cloud and your
														existing appliances
													</li>
												</ul>
											</div>
										</blockquote>
										<div className="group-buttons-responsive group-middle"></div>
									</div>
								</div>
								<div
									className="col-md-4 col-lg-5 wow fadeInLeftSmall left-pattern"
									data-wow-delay=".5s"
								>
									<div className="item">
										<img
											src="images/Smart guy.png"
											alt="smart-guy-using-app"
											style={{ width: "100%" }}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row row-50 justify-content-xl-between align-items-center">
								<div
									className="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall"
									data-wow-delay=".5s"
								>
									<div className="unit unit-spacing-1 align-items-center">
										<div className="unit-left">
											<div className="icon icon-style-1 mdi mdi-microphone"></div>
										</div>
										<div className="unit-body">
											<h4>Voice Control</h4>
										</div>
									</div>
									<div className="block-4 offset-top-4">
										<p className="big">
											🗣 "जो हुकूम मेरे आका" Let your voice
											assistant be your Genie!{" "}
										</p>
										<blockquote className="quote-light">
											<div className="quote-light-text">
												<ul className="list-marked list-marked_secondary">
													<li>
														Connect your voice
														assistant(s) skills with
														MIBAiO app to enjoy a
														truely hands-free
														experience!
													</li>
													<li>
														Works with leading voice
														assistants like Alexa,
														Siri and Google vooice
														assistant
													</li>
												</ul>
											</div>
										</blockquote>
									</div>
								</div>
								<div
									className="col-md-4 col-lg-5 wow fadeInRightSmall"
									data-wow-delay=".5s"
								>
									<div className="item">
										<img
											src="images/VoiceControliphone-548x793.png"
											alt="Voice control feature"
											width="90%;"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="tab-content2" className="tab-content">
						<p style={{ float: "left" }}>
							<ul>
								<li>
									<strong>Product Dimensions ‏ :</strong> ‎ 9
									x 9 x 3 cm
								</li>
								<li>
									<strong>Date First Available ‏ :</strong> ‎
									1 July 2022
								</li>
								<li>
									<strong>Manufacturer ‏ :</strong> ‎ MIBAiO
									Elmec Smart Automations Pvt. Ltd.
								</li>
								<li>
									<strong>Operating frequency ‏ :</strong> ‎
									50Hz-60Hz
								</li>
								<li>
									<strong>Operating voltage ‏ :</strong> ‎
									110-240 VAC
								</li>
								<li>
									<strong>Communication protocol ‏ :</strong>{" "}
									‎ WiFi 2.4GHz + Bluetooth 5.0
								</li>
								<li>
									<strong>ASIN ‏ :</strong> ‎ B097HF97XP
								</li>
								<li>
									<strong>Item model number ‏ :</strong> ‎
									MX4S10XX
								</li>
								<li>
									<strong>Country of Origin ‏ :</strong> ‎
									India
								</li>
								<li>
									<strong>Item Weight ‏ :</strong> ‎ 200 g
								</li>
								<li>
									<strong>Included Components ‏ :</strong> ‎ 1
									x MIBAiO Xtension, Instruction manual
								</li>
							</ul>
						</p>
					</div>

					<div id="tab-content3" className="tab-content">
						<div className="._2wzgFH">
							<div className="d-flex justify-content-between align-items-center">
								<div>
									<div className="_3LWZlK _1BLPMq">
										5
										<img
											src="images/star.svg"
											className="_1wB99o"
										/>
									</div>
									&nbsp; ABC &nbsp;{" "}
									<svg
										width="14"
										height="14"
										viewBox="0 0 12 12"
										xmlns="http://www.w3.org/2000/svg"
										className="_2a1p_T"
									>
										<g>
											<circle
												cx="6"
												cy="6"
												r="6"
												fill="#878787"
											></circle>
											<path
												stroke="#FFF"
												stroke-width="1.5"
												d="M3 6l2 2 4-4"
												fill="#878787"
											></path>
										</g>
									</svg>
									&nbsp; Verified Buyer
								</div>
								<span className="rev-btn">Add Review</span>
							</div>
							<div className="review_row">
								<div className="t-ZTKy">
									<div>
										<div className="">
											Excellent cycle in this price range.
											Value for money.. excellent build
											quality.. nice looking.. ideal for
											men.. satisfied...
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <Carousel
							controls={false}
							indicators={false}
							interval={2000}
							draggable={true}
							slide={true}
						>
							<Carousel.Item>
								<blockquote className="quote-classic">
									<img
										className="quote-classic-avatar"
										src="images/testimonials-1-102x102.jpg"
										alt="Customer profile image"
										width="102"
										height="102"
									/>
									<div className="quote-classic-text">
										<p>
											With MIBAiO installed at my
											restaurant, I am tension free of all
											the hassels as I have the real time
											status of my connected appliances on
											my phone screen. Best part is, I can
											control my restaurant lights and
											fans without replacing them from
											anywhere in the world!
										</p>
									</div>

									<div className="quote-classic-meta">
										<cite className="quote-classic-cite">
											Mr. Prasad S
										</cite>
										<p className="quote-classic-position">
											Restaurant Owner
										</p>
									</div>
								</blockquote>
							</Carousel.Item>
							<Carousel.Item>
								<blockquote className="quote-classic">
									<img
										className="quote-classic-avatar"
										src="images/testimonials-2-102x102.jpg"
										alt="Customer profile image"
										width="102"
										height="102"
									/>

									<div className="quote-classic-text">
										<p>
											The Voice control feature is really
											helpful for my mother-in-law who is
											on a wheelchair! Setting up lights
											and scenes with 1 tap whenever
											guests arrive at my house puts a
											futuristic tech impression! 😎
										</p>
									</div>

									<div className="quote-classic-meta">
										<cite className="quote-classic-cite">
											Mrs. Swati K
										</cite>
										<p className="quote-classic-position">
											House Maker
										</p>
									</div>
								</blockquote>
							</Carousel.Item>
							<Carousel.Item>
								<blockquote className="quote-classic">
									<img
										className="quote-classic-avatar"
										src="images/testimonials-3-102x102.jpg"
										alt="Customer profile image"
										width="102"
										height="102"
									/>
									<div className="quote-classic-text">
										<p>
											As promised, Xtension 4S has
											upgraded my lifestyle. I like the
											automatic scheduling feature which
											runs exactly at time set which
											reduces my effort and delivers me a
											delightful experience!
											<br />
											Kudos to MIBAiO team!!
										</p>
									</div>

									<div className="quote-classic-meta">
										<cite className="quote-classic-cite">
											Ms. Ankita R
										</cite>
										<p className="quote-classic-position">
											Working Professional
										</p>
									</div>
								</blockquote>
							</Carousel.Item>
						</Carousel> */}
					</div>
				</div>

				{/* ================================================================================================ */}

				{/* Subscribe to Get Notified!*/}
				<CustomFooter />
			</div>
			<div className="snackbars" id="form-output-global" />
		</div>
	);
};

export default ViewProduct;
