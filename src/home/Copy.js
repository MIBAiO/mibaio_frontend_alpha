//import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hamburger from 'hamburger-react'
import React, { useState } from "react";
import styled from "styled-components";
// import ScriptTag from 'react-script-tag';
import "../bootstrap.css";
import "../style.css";
import "./home.css"


// const Nav = styled.nav`
//   padding: 0 20px;
//   min-height: 9vh;
//   background: linear-gradient(0deg, #5c8cf1 0%, #4a80f0 100%);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Logo = styled.h1`
//   font-size: 25px;
//   color: white;
// `;

// const Menu = styled.ul`
//   list-style: none;
//   display: flex;

//   li:nth-child(2) {
//     margin: 0px 20px;
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const Item = styled.li``;

// const Link = styled.a`
//   color: white;
//   text-decoration: none;

//   :hover {
//     text-decoration: underline;
//   }
// `;

// const NavIcon = styled.button`
//   background: none;
//   cursor: pointer;
//   border: none;
//   outline: none;

//   @media (min-width: 769px) {
//     display: none;
//   }
// `;

// const Line = styled.span`
//   display: block;
//   border-radius: 50px;
//   width: 25px;
//   height: 3px;
//   margin: 5px;
//   background-color: #fff;
//   transition: width 0.4s ease-in-out;

//   :nth-child(2) {
//     width: ${(props) => (props.open ? "40%" : "70%")};
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   height: ${(props) => (props.open ? "91vh" : 0)};
//   width: 100vw;
//   background: linear-gradient(0deg, #5c8cf1 0%, #4a80f0 100%);
//   transition: height 0.4s ease-in-out;
//   z-index: 2; & z-index: 1;
//   @media (min-width: 769px) {
//     display: none;
//   }
// `;

// const OverlayMenu = styled.ul`
//   list-style: none;
//   position: absolute;
//   left: 50%;
//   top: 45%;
//   transform: translate(-50%, -50%);
//   z-index: 2; & z-index: 1;

//   li {
//     opacity: ${(props) => (props.open ? 1 : 0)};
//     font-size: 25px;
//     margin: 50px 0px;
//     transition: opacity 0.4s ease-in-out;
//   }

//   li:nth-child(2) {
//     margin: 50px 0px;
//   }
// `;
const Copy = () => {
  // const [toggle, toggleNav] = useState(false);
  return (


    <>

      <div>

        <div className="page">
          {/* FScreen*/}
          <section className="section page-header-3 header-section header-offset">
            {/* RD Navbar*/}
            {/* <Nav  fixed="top">
        <Logo>CSS Tricks</Logo>
        <Menu>
          <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              Instagram
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
              Behance
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Github
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              Instagram
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
              Behance
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Github
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay> */}


            {/* current almost perfect navbar */}


            <Navbar collapseOnSelect expand="lg" className='rd-navbar-nav-wrap toggle-original-elements active color-nav ' variant="dark" >
              <Container >
                <Navbar.Brand href="#home" className='order-md-0 mx-auto order-1'>
                  <img  className=" brand-logo-dark" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="order-md-1 order-0" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto nav-font nav-menu" style={{marginLeft: '20%'}}>
                    <Nav.Link ><Link className="rd-nav-link nav-font" to="/">Home</Link></Nav.Link>
                    <Nav.Link ><Link className="rd-nav-link nav-font" to="/about_us"><FontAwesomeIcon icon="fa-solid fa-id-card" />About Us</Link></Nav.Link>
                    <Nav.Link ><Link className="rd-nav-link nav-font" to="/careers">Careers</Link></Nav.Link>
                    <NavDropdown title="Account" id="collasible-nav-dropdown" className="rd-nav-link nav-font">
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">View Dashboard</Link></NavDropdown.Item>
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">Log Out</Link></NavDropdown.Item>

                    </NavDropdown>
                    <Nav.Link ><Link className="rd-nav-link nav-font" to="/contact_us">Contact Us</Link></Nav.Link>
                  </Nav>
                  <Nav className="me-auto nav-font" >
                    <NavDropdown title="More" id="collasible-nav-dropdown">
                      <NavDropdown.Item ><Link className="rd-nav-link " to="/">View Dashboard</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/">Log Out</Link></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">Privacy Policy</Link></NavDropdown.Item>
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/our_team">Our Team</Link></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/login">Login</Link></NavDropdown.Item>
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/register">Register</Link></NavDropdown.Item>

                    </NavDropdown>
                  </Nav>

                </Navbar.Collapse>
                <Nav >
                  <div className="rd-navbar-element rd-navbar-element_centered">
                    <div className="group-xs" style={{marginRight:'15px'}}>
                      <Link className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon" id="cart-size-1" to="/cart"><span className="add-xs" id="cart-no">
                        0
                      </span></Link>
                    </div>

                  </div>
                </Nav>
                <Nav>
                  <div className="rd-navbar-element rd-navbar-element_right">
                    <div id="google_translate_element" >

                    </div>
                    <ul className="list-localization">
                      <li>
                        <a className="icon icon-sm link-social-2 mdi mdi-cart-outline mr-2" id="cart-size" href="#"><span className="add-xs" id="cart-no">
                          0
                        </span></a>
                      </li>
                      <li>
                        <label>
                          <input id="Marathi" name="localization" defaultValue="Marathi" type="radio" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text"><span className="notranslate">मराठी</span></span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input id="English" name="localization" defaultValue="English" type="radio" defaultChecked="checked" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text">English</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input id="Hindi" name="localization" defaultValue="Hindi" type="radio" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text"><span className="notranslate">हिंदी</span></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </Nav>
              </Container>
            </Navbar>

            {/* end of perfect nav  */}

            {/* try to fix old navbar */}

            {/* <div className="rd-navbar-wrap"  style={{ height: '76px' }}>
              <nav className="rd-navbar rd-navbar-classic" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="0px" data-xl-stick-up-offset="0px" data-xxl-stick-up-offset="0px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
                <div className="rd-navbar-main">
                  
                  <div className="rd-navbar-panel">
                   
                    <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span /></button>
                    
                    <div className="rd-navbar-brand"><Link className="brand" to="/"><img className="brand-logo-dark" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /><img className="brand-logo-light" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /></Link></div>
                  </div>
                  <div className="rd-navbar-nav-wrap"><Link href="/">
                    <p className="rd-navbar-slogan rd-navbar-slogan-2 text-white-50 wow clipInLeft">Cool IoT Company</p>
                  </Link>
                    
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active">

                        <Link to="/" className="rd-nav-link" id="home-tab">
                          <i className="fa fa-fw fa-home" id="icon-view-home" />Home
                        </Link>
                      </li>
                      <li className="rd-nav-item">
                        <Link className="rd-nav-link" to="/about_us">
                          <i className="fa fa-fw fa-drivers-license-o mr-3 ml-3" id="icon-view" />About
                          Us</Link>
                      </li>
                      <li className="rd-nav-item">
                        <Link className="rd-nav-link" to="/careers">
                          <i className="fa fa-fw fa-graduation-cap mr-3" id="icon-view" />Careers</Link>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#">
                        <i className="fa fa-fw fa-user-circle-o mr-3" id="icon-view" />Account</a>
                        
                        <div className="rd-menu rd-navbar-megamenu">
                          <ul className="rd-navbar-megamenu-inner-acc">
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a className="rd-megamenu-list-link" href="#">View Dashboard</a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a className="rd-megamenu-list-link" href="#">Logout</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="rd-nav-item">
                        <Link className="rd-nav-link" to="/contact_us">
                          <i className="fa fa-fw fa-phone mr-3 ml-4" id="icon-view" />Contact Us</Link>
                      </li>

                      <li className="rd-nav-item">
                        <a className="rd-nav-link more-navbar" href="#" id="more-tab">
                          <i className="fa fa-fw fa-server" id="icon-view-more" />More
                        </a>
                        
                        <div className="rd-menu rd-navbar-megamenu">
                          <ul className="rd-navbar-megamenu-inner">
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <Link className="rd-megamenu-list-link" to="/our_team">Our
                                  Team</Link></li>
                                <li className="rd-megamenu-list-item">
                                  <a className="rd-megamenu-list-link" href="#">FAQ</a></li>
                              </ul>
                            </li>
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a className="rd-megamenu-list-link" href="#">Privacy policy</a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <Link className="rd-megamenu-list-link" to="/our_team">Our
                                  Team</Link></li>
                              </ul>
                            </li>
                            <li className="rd-megamenu-item">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <Link className="rd-megamenu-list-link" to="/login">Login</Link>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <Link className="rd-megamenu-list-link" href="/register">Register</Link></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <hr style={{ height: '2px' }} />
                    </ul>
                    
                    <div className="rd-navbar-element rd-navbar-element_centered">
                      <div className="group-xs">
                        <Link className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon" id="cart-size-1" to="/cart">
                          <span className="add-xs" id="cart-no">
                          0
                        </span></Link>
                      </div>
                      <div>
                        <a className="icon icon-sm link-social-2 mdi mdi-facebook" href="#" id="handle-view" />
                        <a className="icon icon-sm link-social-2 mdi mdi-twitter" href="#" id="handle-view" />
                        <a className="icon icon-sm link-social-2 mdi mdi-instagram" href="#" id="handle-view" />
                      </div>
                    </div>
                  </div>
                  <div className="rd-navbar-element rd-navbar-element_right">
                    <div id="google_translate_element" style={{ display: 'none' }} />
                      
                    
                    <ul className="list-localization">
                      <li>
                        <a className="icon icon-sm link-social-2 mdi mdi-cart-outline mr-2" id="cart-size" href="#"><span className="add-xs" id="cart-no">
                          0
                        </span></a>
                      </li>
                      <li>
                        <label>
                          <input id="Marathi" name="localization" defaultValue="Marathi" type="radio" autoComplete="Off" />
                          <span className="label-text">
                            <span className="notranslate">मराठी</span></span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input id="English" name="localization" defaultValue="English" type="radio" defaultChecked="checked" autoComplete="Off" />
                      
                          <span className="label-text">English</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input id="Hindi" name="localization" defaultValue="Hindi" type="radio" autoComplete="Off"  />
                          
                          <span className="label-text">
                            <span className="notranslate">हिंदी</span></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="rd-navbar-dummy" />
                </div>
              </nav>
            </div> */}

            {/* Box Custom 4*/}
            <div id="belownavbar" className="box-custom-4 bg-default">
              <div className="box-custom-4-aside bg-accent">
                <div className="box-custom-4-aside-decoration">
                  <div className="box-custom-4-aside-decoration-bg wow clipInLeft" />
                  <div className="box-custom-4-icon-outer"><span className="box-custom-4-icon" /></div>
                </div>
                <div className="box-custom-4-aside-content">
                  <div className="iphone-frame-4-group">
                    <div className="iphone-frame-4 wow clipInLeft" data-wow-duration="1.5s" data-wow-delay=".5s" >
                      <div className="iphone-frame-4-outer center-pattern"><img className="iphone-frame-4-inner" src="images/iphone-frame-3-404x745.png" alt="" width={404} height={745} />
                        {/* Owl Carousel*/}
                        <div className="owl-carousel" data-items={1} data-dots="false" data-nav="false" data-custom-next="#oc-iphone-frame-4-nav" data-stage-padding={0} data-loop="true" data-margin={0} data-easing="linear" data-autoplay="true" data-autoplay-timeout={2500} data-mouse-drag="false">
                          <div className="item" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-1-300x650.png)' }} data-loop="true" />
                          <div className="item" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-2-300x650.png)' }} data-loop="true" />
                          <div className="item" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-3-300x650.png)' }} data-loop="true" />
                          <div className="item" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-4-300x650.png)' }} data-loop="true" />

                        </div>
                      </div>
                    </div>
                    <div className="wow fadeIn" id="oc-iphone-frame-4-nav" data-wow-duration=".5s" data-wow-delay="1s" />
                    <div className="iphone-frame-4-next element-process">
                      <span className="icon icon-lg linearicons-envelope" />
                      <a href="https://mibaio.in/contact-us.html">
                        <h5 className="text-white iphone-frame-4-next-text">Brochure</h5>
                      </a></div>
                  </div>
                </div>
              </div>
              <div className="box-custom-4-main">
                <div className="block-10">
                  <h1 className="font-weight-bold heading-decoration-2 wow fadeInUp" data-wow-delay=".4s" >
                    <span className="text-white">Do more with your</span>
                  </h1>
                  <h1 className="extra-light text-white heading-decoration-3 wow fadeInUp" data-wow-delay=".4s">
                    <span>with your home</span>
                  </h1>
                  <br />
                  <div className="wow fadeInUp" data-wow-delay=".9s">
                    <p className="text-white-50 big wow clipInLeft" data-wow-delay="1.0s">MIBAiO provides
                      extraordinary Smart Home
                      experience unlike any other you've ever imagined!</p>
                  </div>

                  <div className="group wow clipInLeft wow fadeInUp" data-wow-delay="1.3s">
                    <a className="button button-default-outline button-winona" href="https://mibaio.in/#" data-wow-duration=".5s" data-wow-delay=".5s">

                      <div className="content-original">Read More</div>
                      <div className="content-dubbed">Read More</div>
                    </a>
                    <a className="button button-icon button-icon-right button-secondary button-winona wow clipInLeft wow fadeInUp" data-wow-delay="1.3s" href="https://mibaio.in/Our_model" data-wow-duration=".5s">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About our Company*/}
          <section className="section section-md bg-gray-100">
            {/* Custom Software Development*/}
            {/*Cloud & Network Consulting Services*/}
            <div className="container" id="Security">
              <div className="row row-50 justify-content-xl-between align-items-center flex-md-row-reverse">
                <div className="col-md-8 col-lg-7 col-xl-6 wow fadeInRightSmall">
                  <div className="unit unit-spacing-1 align-items-center">
                    <div className="unit-left">
                      <div className="icon icon-style-1 mdi mdi-security" />
                    </div>
                    <div className="unit-body">
                      <h3>Security</h3>
                    </div>
                  </div>
                  <div className="block-4 offset-top-4">
                    <p className="big" />
                    <blockquote className="quote-light">
                      <div className="quote-light-mark linearicons-quote-open" />
                      <div className="quote-light-text">
                        <p>MIBAiO regards security of your home one of it's top priorities and we maintain a
                          vigilant stance against intruders by keeping our security systems up to date.
                        </p>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-4 col-lg-5 wow fadeInLeftSmall left-pattern">
                  {/* Slick Carousel*/}
                  <div className="slick-slider slick-slider-phone-frame-2 slick-style-1" data-focus-behaviour="true" data-arrows="true" data-loop="false" data-dots="false" data-swipe="false" data-speed={700} data-initial-slide={0} data-items={2} data-sm-items={2} data-md-items={2} data-lg-items={2} data-xl-items={2} data-xxl-items={2}>
                    <div className="item">
                      <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/phone-image-3-227x492.jpg)' }}>
                        </div>
                        <div className="tooltip-point" data-toggle="tooltip" data-placement="top" data-class="tooltip-light" title="Perfect smarthome solution" style={{ position: 'absolute', top: '47%', left: '35.9%' }} />
                      </div>
                    </div>
                    <div className="item">
                      <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-1-300x650.png)' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" id="Voice">
              <div className="row row-50 justify-content-xl-between align-items-center">
                <div className="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall">
                  <div className="unit unit-spacing-1 align-items-center">
                    <div className="unit-left">
                      <div className="icon icon-style-1 mdi mdi-microphone" />
                    </div>
                    <div className="unit-body">
                      <h3>Voice Control</h3>
                    </div>
                  </div>
                  <div className="block-4 offset-top-4">
                    <p className="big" />
                    {/* Quote Light*/}
                    <blockquote className="quote-light">
                      <div className="quote-light-mark linearicons-quote-open" />
                      <div className="quote-light-text">
                        <p>Forgot to switch off the fan of your room before going out? No worries! <br />Get
                          the best home automation experience at MIBAiO which provides a truely hands-free
                          control of your home appliances from anywhere </p>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern">
                  {/* Slick Carousel*/}
                  <div className="slick-slider slick-slider-phone-frame-2 slick-style-1" data-focus-behaviour="true" data-arrows="true" data-loop="false" data-dots="false" data-swipe="false" data-speed={700} data-initial-slide={1} data-items={2} data-sm-items={2} data-md-items={2} data-lg-items={2} data-xl-items={2} data-xxl-items={2}>
                    <div className="item">
                      <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-1-300x650.png)' }} />
                      </div>
                    </div>
                    <div className="item">
                      <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/phone-image-2-227x492.jpg)' }}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" id="MMC">
              <div className="row row-50 justify-content-xl-between align-items-center flex-md-row-reverse">
                <div className="col-md-8 col-lg-7 col-xl-6 wow fadeInRightSmall">
                  <div className="unit unit-spacing-1 align-items-center">
                    <div className="unit-left">
                      <div className="icon icon-style-1 mdi mdi-access-point-network" />
                    </div>
                    <div className="unit-body">
                      <h3>Multi-Mode Control</h3>
                    </div>
                  </div>
                  <div className="block-4 offset-top-4">
                    <p className="big" />
                    <blockquote className="quote-light">
                      <div className="quote-light-mark linearicons-quote-open" />
                      <div className="quote-light-text">
                        <p>In addition to the classic manual control feature, MIBAiO enables you to remote
                          control your smart home through
                          <br /><br />
                        </p><div className="icon icon-style-1 mdi mdi-wifi" /> Internet <br /><br />
                        <div className="icon icon-style-1 mdi mdi-bluetooth" />Bluetooth.<p />
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-4 col-lg-5 wow fadeInLeftSmall left-pattern">
                  {/* Slick Carousel*/}
                  <div className="slick-slider slick-slider-phone-frame-2 slick-style-1" data-focus-behaviour="true" data-arrows="true" data-loop="false" data-dots="false" data-swipe="false" data-speed={700} data-initial-slide={0} data-items={2} data-sm-items={2} data-md-items={2} data-lg-items={2} data-xl-items={2} data-xxl-items={2}>
                    <div className="item">
                      <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/phone-image-3-227x492.jpg)' }}>
                        </div>
                        <div className="tooltip-point" data-toggle="tooltip" data-placement="top" data-class="tooltip-light" title="Perfect smarthome solution" style={{ position: 'absolute', top: '47%', left: '35.9%' }} />
                      </div>
                    </div>
                    <div className="item">
                      <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-1-300x650.png)' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" id="Surge">
              <div className="row row-50 justify-content-xl-between align-items-center">
                <div className="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall">
                  <div className="unit unit-spacing-1 align-items-center">
                    <div className="unit-left">
                      <div className="icon icon-style-1 mdi mdi-flash" />
                    </div>
                    <div className="unit-body">
                      <h3>Surge Proof</h3>
                    </div>
                  </div>
                  <div className="block-4 offset-top-4">
                    <p className="big" />
                    {/* Quote Light*/}
                    <blockquote className="quote-light">
                      <div className="quote-light-mark linearicons-quote-open" />
                      <div className="quote-light-text">
                        <p>Forgot to switch off the fan of your room before going out? No worries! <br />Get
                          the best home automation experience at MIBAiO which provides a truely hands-free
                          control of your home appliances from anywhere </p>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern">
                  {/* Slick Carousel*/}
                  <div className="slick-slider slick-slider-phone-frame-2 slick-style-1" data-focus-behaviour="true" data-arrows="true" data-loop="false" data-dots="false" data-swipe="false" data-speed={700} data-initial-slide={1} data-items={2} data-sm-items={2} data-md-items={2} data-lg-items={2} data-xl-items={2} data-xxl-items={2}>
                    <div className="item">
                      <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-1-300x650.png)' }} />
                      </div>
                    </div>
                    <div className="item">
                      <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/phone-image-2-227x492.jpg)' }}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-box-custom-3-outer" id="about-us">
            {/* Simple and Clear steps*/}
            <section className="parallax-container section-lg section-box-custom-3 section-bottom-0 text-center" data-parallax-img="images/bg-image-1.jpg">
              <div className="parallax-content">
                <div className=" container context-dark"><span className="normal text-white font-weight-bold text-uppercase wow fadeIn">About Our
                  Company</span>
                  <h3 className="offset-top-7 font-weight-regular typed-text-heading wow fadeIn" data-wow-delay=".1s">
                    <span>We</span><span className="typed-text text-primary" data-strings="[&quot;are a startup&quot;, &quot;strive towards innovation&quot;, &quot;automate your existing home appliances&quot;, &quot;help you upgrade your lifestyle&quot;, &quot;deliver you delightful experiences&quot;, &quot;design for you&quot;]" data-type-speed={100}>are a startup</span>
                  </h3>
                  <p className="wow fadeIn" data-wow-delay=".2s"><span style={{ maxWidth: '800px' }}>We are here to change
                    the Smart
                    Home Ecosystem in India <br />And we invite you to take a front seat in this
                    revolution.<br />Video coming
                    up soon!</span></p>
                  {/*<a class="button-play mdi mdi-play mdi-24px wow fadeIn" href="https://youtu.be/sJ4Ho9A_v_8" data-lightgallery="item" data-wow-delay=".3s">
                              <svg class="button-play-shape" width="86" height="86" viewbox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
                                  <rect x="1" y="1" width="86" height="86" rx="6" ry="6"></rect>
                              </svg></a>*/}
                  <a id="play-video" className="video-play-button" href="#">
                    <span />
                  </a>
                  <div id="video-overlay" className="video-overlay-class">
                    {/*<a class="video-overlay-close">&times;</a>*/}
                  </div>
                </div>
                <div className="box-custom-3-container container wow slideInUpSmall">
                  <div className="box-custom-3">
                    <div className="layout-bordered-1">
                      <div className="layout-bordered-1-item">
                        {/* Counter Classic*/}
                        <article className="counter-classic wow clipInLeft">
                          <div className="counter-classic-main">
                            <div className="counter">3</div><span className="small text-primary">+</span>
                          </div>
                          <h4 className="counter-classic-title text-black extra-lighter">Modes <br /> of control
                          </h4>
                        </article>
                      </div>
                      <div className="layout-bordered-1-item">
                        {/* Counter Classic*/}
                        <article className="counter-classic wow clipInLeft" data-wow-delay=".1s">
                          <div className="counter-classic-main">
                            <div className="counter">14</div><span className="small text-primary">k</span>
                          </div>
                          <h4 className="counter-classic-title extra-lighter">Lines <br /> of code</h4>
                        </article>
                      </div>
                      <div className="layout-bordered-1-item">
                        {/* Counter Classic*/}
                        <article className="counter-classic wow clipInLeft" data-wow-delay=".2s">
                          <div className="counter-classic-main">
                            <div className="counter">5</div><span className="small text-primary">yrs</span>
                          </div>
                          <h4 className="counter-classic-title extra-lighter">Of warranty <br /> MIBAiO
                            guarantee</h4>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section id="more-services" className="section section-md more-services">
            <div className="container">
              <h3 className="offset-top-7 font-weight-regular wow fadeIn text-center">Our Vision and Mission</h3>
              <div className="row">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="card wow fadeInUp" data-wow-delay=".3s" style={{ backgroundImage: 'url("images/vission.jpg")' }}>
                    <div className="card-body">
                      <h4 className="card-title"><a href>Our Vision</a></h4>
                      <p className="card-text">To make India renowned for quality design and technology</p>
                      <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div className="card wow fadeInUp" data-wow-delay=".4s" style={{ backgroundImage: 'url("images/mission.jpg")' }} data-aos="fade-up" data-aos-delay={200}>
                    <div className="card-body">
                      <h4 className="card-title"><a href>Our Mission</a></h4>
                      <p className="card-text">To revolutionize the smart home ecosystem in India and make
                        technology available to every household in the country</p>
                      <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="services-1" className="services-1 section section-md bg-gray-3 text-center">
            <div className="container">
              <div className="container"><span className="normal text-primary font-weight-bold text-uppercase wow fadeIn">Our Website</span>
                <h3 className="offset-top-7 font-weight-regular wow fadeIn">How It Works</h3>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box wow fadeInRight" data-wow-delay=".4s">
                    <div className="icon">
                      <img className="img-fluid" src="images/steps/select.svg" alt="" />
                    </div>
                    <h4 className="title">Select your favourite model</h4>
                    <p className="description">Select the model that suits your needs from our collection of best price models</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box wow fadeInLeft" data-wow-delay=".55s">
                    <div className="icon">
                      <img className="img-fluid" src="images/steps/cart.svg" alt="" />
                    </div>
                    <h4 className="title">Add it to your cart</h4>
                    <p className="description">Add it to your cart to ponder over it</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box wow fadeInLeft" data-wow-delay=".7s">
                    <div className="icon">
                      <img className="img-fluid" src="images/steps/select.svg" alt="" />
                    </div>
                    <h4 className="title">Click on the Checkout button to Buy</h4>
                    <p className="description">Click on that Checkout button to buy yourself a smart home </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box wow fadeInLeft" data-wow-delay=".85s">
                    <div className="icon"><img className="img-fluid" src="images/steps/home.svg" alt="" /></div>
                    <h4 className="title">Go to Your Home Dashboard</h4>
                    <p className="description"><strong>Login</strong> and go to your Home's dashboard to start experiencing the feel of a truly smart home</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Features*/}
          <section className="section section-md bg-gray-100">
            {/* Custom Software Development*/}
            <div className="container">
              <div className="row row-50 justify-content-xl-between align-items-center">
                <div className="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall">
                  <div className="unit unit-spacing-1 align-items-center">
                    <div className="unit-left">
                      <div className="icon icon-style-1 mdi mdi-harddisk" />
                    </div>
                    <div className="unit-body">
                      <h3>Customize your App</h3>
                    </div>
                  </div>
                  <div className="block-4 offset-top-4">
                    <p className="big">Design your mobile application according to your choice of colors. Improve
                      your lifestyle
                      routines and manage it better.</p>
                    {/* Quote Light*/}
                    <blockquote className="quote-light">
                      <div className="quote-light-mark linearicons-quote-open" />
                      <div className="quote-light-text">
                        <p>Customize your App preferences by going to Settings -&gt; Personalization. And get
                          the best home
                          automation experience you truely deserve!</p>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern">
                  {/* Slick Carousel*/}
                  <div className="slick-slider slick-slider-phone-frame-2 slick-style-1" data-focus-behaviour="true" data-arrows="true" data-loop="false" data-dots="false" data-swipe="false" data-speed={700} data-initial-slide={1} data-items={2} data-sm-items={2} data-md-items={2} data-lg-items={2} data-xl-items={2} data-xxl-items={2}>
                    <div className="item">
                      <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-1-300x650.png)' }} />
                      </div>
                    </div>
                    <div className="item">
                      <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/phone-image-2-227x492.jpg)' }}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Cloud & Network Consulting Services*/}
            <div className="container">
              <div className="row row-50 justify-content-xl-between align-items-center flex-md-row-reverse">
                <div className="col-md-8 col-lg-7 col-xl-6 wow fadeInRightSmall">
                  <div className="unit unit-spacing-1 align-items-center">
                    <div className="unit-left">
                      <div className="icon icon-style-1 mdi mdi-plus-network" />
                    </div>
                    <div className="unit-body">
                      <h3>Self-reliant lifestyle</h3>
                    </div>
                  </div>
                  <div className="block-4 offset-top-4">
                    <p className="big">With inspiration from "आत्मनिर्भर भारत अभियान", we are comitted to provide
                      our customers a
                      truely self-reliant (आत्मनिर्भर) experience using MIBAiO.</p>
                    <ul className="list-marked list-marked_secondary">
                      <li>Easily manage home appliances without struggling to move from your position</li>
                      <li>Hands-free experience with voice control feature</li>
                      <li>Establish a reliable network with our secure IoT cloud and your existing appliances
                      </li>
                    </ul>
                    <div className="group-buttons-responsive group-middle"><a className="button button-secondary button-winona" href="services.html">View All
                      Features</a><a className="button button-default-outline button-winona" style={{ color: '#0accbe' }} href="about-us.html">Learn More</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-5 wow fadeInLeftSmall left-pattern">
                  {/* Slick Carousel*/}
                  <div className="slick-slider slick-slider-phone-frame-2 slick-style-1" data-focus-behaviour="true" data-arrows="true" data-loop="false" data-dots="false" data-swipe="false" data-speed={700} data-initial-slide={0} data-items={2} data-sm-items={2} data-md-items={2} data-lg-items={2} data-xl-items={2} data-xxl-items={2}>
                    <div className="item">
                      <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/phone-image-3-227x492.jpg)' }}>
                        </div>
                        <div className="tooltip-point" data-toggle="tooltip" data-placement="top" data-class="tooltip-light" title="Perfect smarthome solution" style={{ position: 'absolute', top: '47%', left: '35.9%' }} />
                      </div>
                    </div>
                    <div className="item">
                      <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-1-300x650.png)' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Pricing plans*/}
          <section className="parallax-container section-lg text-center" data-parallax-img="images/bg-image-2.jpg">
            <div className="parallax-content">
              <div className="container context-dark"><span className="normal text-white font-weight-bold text-uppercase wow fadeIn">Pricing plans</span>
                <h3 className="offset-top-7 wow fadeIn" data-wow-delay=".1s">Choose Your MIBAiO model</h3>
                <p className="wow fadeIn" data-wow-delay=".25s"><span style={{ maxWidth: '700px' }}>We offer three different
                  models
                  that cover you needs of home automation. They are provided via different modes of control to
                  automate your
                  aplliances according to your convenience.</span></p>
                <div className="toggle-modern" aria-label="Pricing Switch Monthly/Yearly" id="pt-classic-toggle">
                  <div className="toggle-modern-text toggle-modern-text_default">upto 10 outputs</div>
                  <button className="toggle-modern-switch content-toggle" data-multitoggle="#pt-classic, #pt-classic-toggle"><span className="toggle-modern-switch-element" /></button>
                  <div className="toggle-modern-text toggle-modern-text_alternate">upto 30 outputs</div>
                </div>
              </div>
              <div className="container ot50">
                {/* Pricing Table Classic*/}
                <div className="pt-classic-group" id="pt-classic">
                  {/* Owl Carousel*/}
                  <div className="owl-carousel owl-carousel_type-2" data-items={1} data-md-items={2} data-lg-items={3} data-dots="false" data-nav="true" data-stage-padding={0} data-loop="false" data-margin={30} data-lg-margin={20} data-xl-margin={30} data-mouse-drag="false">
                    <article className="pt-classic wow slideInRightLg" data-wow-delay=".5s">
                      <h4 className="pt-classic-title">Basic</h4>
                      <div className="pt-classic-price-outer">
                        <div className="pt-classic-price" aria-hidden="false">
                          <div className="pt-classic-price-currency font-weight-regular"> ₹</div>
                          <div className="pt-classic-price-value extra-light">1499</div>
                        </div>
                        <div className="pt-classic-price" aria-hidden="true">
                          <div className="pt-classic-price-currency font-weight-regular"> ₹</div>
                          <div className="pt-classic-price-value extra-light">2499</div>
                        </div>
                      </div>
                      <div className="pt-classic-divider" />
                      <ul className="pt-classic-list">
                        <li>Control upto 10 appliances</li>
                        <li>FREE installation</li>
                        <li>Manual control</li>
                        <li>Bluetooth control</li>
                        <li aria-disabled="true">Internet control</li>
                        <li aria-disabled="true">Voice control</li>
                        <li aria-disabled="true">Upgrade more outputs</li>
                      </ul>
                      <div className="pt-classic-footer"><a className="button button-default-outline button-icon button-icon-right button-winona font-weight-regular" href="#"><span className="icon mdi mdi-arrow-right" />Select Plan</a></div>
                    </article>
                    <article className="pt-classic pt-classic_style-2 pt-classic_preferred wow scaleIn">
                      <div className="pt-classic-header">
                        <h4 className="pt-classic-title">Premium</h4>
                        <div className="pt-classic-price-outer">
                          <div className="pt-classic-price" aria-hidden="true">
                            <div className="pt-classic-price-currency font-weight-regular"> ₹</div>
                            <div className="pt-classic-price-value extra-light">4699</div>
                          </div>
                          <div className="pt-classic-price" aria-hidden="false">
                            <div className="pt-classic-price-currency font-weight-regular"> ₹</div>
                            <div className="pt-classic-price-value extra-light">2999</div>
                          </div>
                          <div className="badge badge-1">Save 20%</div>
                        </div>
                      </div>
                      <div className="pt-classic-divider" />
                      <ul className="pt-classic-list">
                        <li>Control upto 10 appliances</li>
                        <li>FREE installation</li>
                        <li>Manual Control</li>
                        <li>Internet Control</li>
                        <li>Bluetooth Control</li>
                        <li>Voice control</li>
                        <li>Upgrade more outputs</li>
                      </ul>
                      <div className="pt-classic-footer"><a className="button button-secondary button-shadow button-icon button-icon-right button-winona font-weight-regular" href="#"><span className="icon mdi mdi-arrow-right" />Select Plan</a>
                        <p className="pt-classic-note text-transparent">#Vedant recommends</p>
                      </div>
                    </article>
                    <article className="pt-classic pt-classic_style-3 wow slideInLeftLg" data-wow-delay=".5s">
                      <h4 className="pt-classic-title">Standard</h4>
                      <div className="pt-classic-price-outer">
                        <div className="pt-classic-price" aria-hidden="false">
                          <div className="pt-classic-price-currency font-weight-regular"> ₹</div>
                          <div className="pt-classic-price-value extra-light">2199</div>
                        </div>
                        <div className="pt-classic-price" aria-hidden="true">
                          <div className="pt-classic-price-currency font-weight-regular"> ₹</div>
                          <div className="pt-classic-price-value extra-light">5199</div>
                        </div>
                      </div>
                      <div className="pt-classic-divider" />
                      <ul className="pt-classic-list">
                        <li>Control upto 10 appliances</li>
                        <li>FREE installation</li>
                        <li>Manual control</li>
                        <li>Internet control</li>
                        <li>Voice control</li>
                        <li aria-disabled="true">Bluetooth control</li>
                        <li aria-disabled="true">Upgrade more outputs</li>
                      </ul>
                      <div className="pt-classic-footer"><a className="button button-default-outline button-icon button-icon-right button-winona font-weight-regular" href="#"><span className="icon mdi mdi-arrow-right" />Select Plan</a></div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Popular Questions*/}
          <section className="section section-md bg-gray-100 text-center wow fadeInUp" data-wow-delay=".3s">
            <div className=" container"><span className="normal text-primary font-weight-bold text-uppercase wow fadeIn">Popular
              Questions</span>
              <h3 className="offset-top-7 wow fadeIn" data-wow-delay=".1s">Frequently Asked Questions</h3>
              <div className="row row-30 justify-content-center justify-content-lg-start wow fadeIn" id="app-accordion" data-wow-delay=".2s">
                <div className="col-md-10 col-lg-6">
                  {/* Bootstrap Collapse*/}
                  <div className="card-group-custom card-group-classic card-group-classic_1" role="tablist" aria-multiselectable="false">
                    {/* Bootstrap card*/}
                    <article className="card card-custom card-classic">
                      <div className="card-header" id="app-accordion-heading-4" role="tab">
                        <div className="card-title"><a className="card-link" role="button" data-toggle="collapse" href="#app-accordion-collapse-4" aria-controls="app-accordion-collapse-4" aria-expanded="true">What does "MIBAiO" mean?
                          <div className="card-arrow" />
                        </a></div>
                      </div>
                      <div className="collapse show" id="app-accordion-collapse-4" role="tabpanel" aria-labelledby="app-accordion-heading-4" data-parent="#app-accordion">
                        <div className="card-body">
                          <p>MIBAiO is an acronym for Manual Internet Bluetooth All In One. </p>
                        </div>
                      </div>
                    </article>
                    {/* Bootstrap card*/}
                    <article className="card card-custom card-classic">
                      <div className="card-header" id="app-accordion-heading-1" role="tab">
                        <div className="card-title"><a className="card-link collapsed" role="button" data-toggle="collapse" href="#app-accordion-collapse-1" aria-controls="app-accordion-collapse-1" aria-expanded="false">What are the
                          key features of your product?
                          <div className="card-arrow" />
                        </a></div>
                      </div>
                      <div className="collapse" id="app-accordion-collapse-1" role="tabpanel" aria-labelledby="app-accordion-heading-1" data-parent="#app-accordion">
                        <div className="card-body">
                          <p>Our product offers Manual, Internet and Bluetooth all-in-one functionality
                            along with voice
                            control. To know more about key features, please refer the product brochure.
                          </p>
                        </div>
                      </div>
                    </article>
                    {/* Bootstrap card*/}
                    <article className="card card-custom card-classic">
                      <div className="card-header" id="app-accordion-heading-2" role="tab">
                        <div className="card-title"><a className="card-link collapsed" role="button" data-toggle="collapse" href="#app-accordion-collapse-2" aria-controls="app-accordion-collapse-2" aria-expanded="false">Why should I
                          purchase your product?
                          <div className="card-arrow" />
                        </a></div>
                      </div>
                      <div className="collapse" id="app-accordion-collapse-2" role="tabpanel" aria-labelledby="app-accordion-heading-2" data-parent="#app-accordion">
                        <div className="card-body">
                          <p>The major advantage is price: You get a premium model under ₹3000. You don’t
                            have to call an
                            electrician for installation, we make it very easy to install for you.
                            Second advantage is Made in
                            INDIA: Our product is carefully designed for a standard Indian household of
                            world-class quality.
                            We are working under the Make in India, Digital India, Aatmanirbhar Bharat
                            initiatives. </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-md-10 col-lg-6">
                  {/* Bootstrap Collapse */}
                  <div className="card-group-custom card-group-classic card-group-classic_1" role="tablist" aria-multiselectable="false">
                    {/* Bootstrap card*/}
                    <article className="card card-custom card-classic wow clipInLeft">
                      <div className="card-header" id="app-accordion-heading-3" role="tab">
                        <div className="card-title"><a className="card-link collapsed" role="button" data-toggle="collapse" href="#app-accordion-collapse-3" aria-controls="app-accordion-collapse-3" aria-expanded="false">Do
                          you provide post sales service?
                          <div className="card-arrow" />
                        </a></div>
                      </div>
                      <div className="collapse" id="app-accordion-collapse-3" role="tabpanel" aria-labelledby="app-accordion-heading-3" data-parent="#app-accordion">
                        <div className="card-body">
                          <p>Yes, we do. Our team is ready for your support 24x7x365 with our qualified
                            Engineers.</p>
                        </div>
                      </div>
                    </article>
                    {/* Bootstrap card*/}
                    {/* Bootstrap card*/}
                    <article className="card card-custom card-classic">
                      <div className="card-header" id="app-accordion-heading-6" role="tab">
                        <div className="card-title"><a className="card-link collapsed" role="button" data-toggle="collapse" href="#app-accordion-collapse-6" aria-controls="app-accordion-collapse-6" aria-expanded="false">Does your
                          product control the speed of fan digitally?
                          <div className="card-arrow" />
                        </a></div>
                      </div>
                      <div className="collapse" id="app-accordion-collapse-6" role="tabpanel" aria-labelledby="app-accordion-heading-6" data-parent="#app-accordion">
                        <div className="card-body">
                          <p>No as of now. But you'll get that funtion in the upcoming versions of MIBAiO.
                          </p>
                        </div>
                      </div>
                    </article>
                    <article className="card card-custom card-classic">
                      <div className="card-header" id="app-accordion-heading-5" role="tab">
                        <div className="card-title"><a className="card-link collapsed" role="button" data-toggle="collapse" href="#app-accordion-collapse-5" aria-controls="app-accordion-collapse-5" aria-expanded="false">What can I do
                          with your product?
                          <div className="card-arrow" />
                        </a></div>
                      </div>
                      <div className="collapse" id="app-accordion-collapse-5" role="tabpanel" aria-labelledby="app-accordion-heading-5" data-parent="#app-accordion">
                        <div className="card-body">
                          <p>Talk to your home appliances with Alexa and Google voice assistant. Control
                            your exising
                            appliances with your smartphone and also manually(like we do now using the
                            traditional switches).
                            Apart from that, you can monitor your electricity consumption by wach
                            connected appliance via your
                            smartphone App.</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Download our App*/}
          <section className="section section-md text-center">
            <div className="container"><span className="normal text-primary font-weight-bold text-uppercase wow fadeIn">Home
              2.0</span>
              <h3 className="offset-top-7 wow fadeIn" data-wow-delay=".1s">Step into the future, Upgrade to MIBAiO</h3>
              <p className="wow fadeIn" data-wow-delay=".2s"><span style={{ maxWidth: '720px', opacity: '.65' }}>It’s time to
                upgrade
                your home and experience the futuristic smart home! Contact us directly to enhance your smart
                home
                experience.</span></p>
            </div>
            <div className="group"><a className="button button-default-outline button-winona text-black wow fadeIn" href="#" data-wow-delay=".1s"><span />View More</a><a className="button button-secondary button-winona wow fadeIn" href="contact-us.html" data-wow-delay=".1s"><span />Contact Us</a></div>
            <div className="layer-01 section-decoration-4-decoration"><img className="layer" src="images/landscape_1.svg" alt="" data-depth="0.15" /><img className="layer" src="images/landscape_2-3.svg" alt="" data-depth="0.3" /></div>
          </section>
          {/* Subscribe to Get Notified!*/}
          <section className="section section-md-last block-footer-classic">
            <div className="block-footer-classic-wrap">
              <div className="container">
                <div className="row row-50 justify-content-lg-between">
                  <div className="col-md-6 col-lg-6 wow clipInLeft">
                    <p className="heading heading-alternate-1 text-white">Subscribe to Get Notified!</p>
                    <p className="big text-white-50">Sign up to receive updates and fresh news from us.</p>
                    <form className="rd-form rd-mailform form-inline form-shadow block-11 ot30" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php">
                      <div className="form-wrap">
                        <input className="form-input" placeholder="Enter Your E-mail" id="subscribe-form-email-11" type="email" name="email" data-constraints="@Email @Required" />
                      </div>
                      <div className="form-button">
                        <button className="button button-secondary button-winona" type="submit">Subscribe</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-xl-5 wow clipInLeft">
                    <p className="heading heading-alternate-1 text-white">Time to Get Started</p>
                    <p className="big text-white-50">Upgrade your home with MIBAiO!</p>
                    <div className="group ot30"><a className="button button-secondary button-winona" href="#">Get a
                      Quote</a><a className="button button-default-outline button-winona text-white" href="about-us.html">More About
                        MIBAiO</a></div>
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
                      <div className="col-sm-7 col-lg-3 col-xl-2"><a className="brand" href="index.html"><img src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /></a>
                        <p><span className="text" style={{ maxWidth: '250px' }}>MIBAiO is the leading provider of
                          the best automation
                          system for your smarthome.</span></p><a className="button button-color-8 button-winona text-black wow fadeIn" href="login.php">Sign In</a>
                      </div>
                      <div className="col-sm-5 col-lg-3 col-xl-2">
                        <h4 className="footer-classic-title text-white">About</h4>
                        <ul className="list footer-classic-list text-white">
                          <li><a href="about-us.html">About Us</a></li>
                          <li><a href="our-team">Our Team</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-7 col-lg-5 col-xl-3">
                        <h4 className="footer-classic-title text-white">Useful Links</h4>
                        <ul className="list footer-classic-list footer-classic-list_2-cols text-white">
                          <li><a href="login.php">Sign Up</a></li>
                          <li><a href="careers.html">Careers</a></li>
                          <li><a href="login.php">Log In</a></li>
                          <li><a href="faq.html">FAQ</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-5 col-lg-9 col-xl-2">
                        <h4 className="footer-classic-title text-white">Contact info</h4>
                        <div className="row row-20 row-sm-35">
                          <div className="col-6 col-sm-12 col-lg-8 col-xl-12">
                            <div className="row row-10 text-white-50">
                              <div className="col-lg-6 col-xl-12"><a href="mailto:info@mibaio.xyz">info@mibaio.xyz</a></div>
                              <div className="col-lg-6 col-xl-12"><a className="big" href="tel:+91-9673660515">+91-9673660515</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-sm-12 col-lg-4 col-xl-12 text-right text-sm-left">
                            <div className="group group-xs"><a className="link link-social-1 mdi mdi-twitter" href="#" /><a className="link link-social-1 mdi mdi-facebook" href="#" /><a className="link link-social-1 mdi mdi-instagram" href="#" /></div>
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
                    <p className="text-white-50 rights"><span>©&nbsp;</span><span className="copyright-year" /><span>&nbsp;</span><span>MIBAiO</span><span>.&nbsp;</span><a href="privacy-policy.html"> Privacy Policy</a></p>
                  </div>
                </div>
              </footer>
            </div>
          </section>
        </div>
        <div className="snackbars" id="form-output-global" />
      </div>
    </>

  )
}

export default Copy