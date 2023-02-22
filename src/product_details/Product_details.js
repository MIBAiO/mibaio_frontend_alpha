const Product_details = () => {
    return (
        <div>
         {/* RD Navbar*/}
         <div className="rd-navbar-wrap" style={{ height: '76px' }}>
         <nav className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static rd-navbar--is-stuck" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="0px" data-xl-stick-up-offset="0px" data-xxl-stick-up-offset="0px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
             <div className="rd-navbar-main">
                 {/* RD Navbar Panel*/}
                 <div className="rd-navbar-panel">
                     {/* RD Navbar Toggle*/}
                     <button className="rd-navbar-toggle toggle-original" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span /></button>
                     {/* RD Navbar Brand*/}
                     <div className="rd-navbar-brand"><a className="brand" href="https://mibaio.in/index.php"><img className="brand-logo-dark" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /><img className="brand-logo-light" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /></a></div>
                 </div>
                 <div className="rd-navbar-nav-wrap toggle-original-elements"><a href="https://mibaio.in/index.php">
                     <p className="rd-navbar-slogan rd-navbar-slogan-2 text-white-50 wow clipInLeft animated" style={{ visibility: 'visible', animationName: 'clipInLeft' }}>Cool IoT
                         Company</p>
                 </a>
                     {/* RD Navbar Nav*/}
                     <ul className="rd-navbar-nav ">
                         <li className="rd-nav-item active">
                             <a className="rd-nav-link" href="https://mibaio.in/index.php" id="home-tab">
                                 <i className="fa fa-fw fa-home" id="icon-view-home" />Home
                             </a>
                         </li>
                         <li className="rd-nav-item"><a className="rd-nav-link" href="https://mibaio.in/about-us.html">
                             <i className="fa fa-fw fa-drivers-license-o mr-3 ml-3" id="icon-view" />About
                             Us</a>
                         </li>
                         <li className="rd-nav-item"><a className="rd-nav-link" href="https://mibaio.in/careers.html">
                             <i className="fa fa-fw fa-graduation-cap mr-3" id="icon-view" />Careers</a>
                         </li>
                         <li className="rd-nav-item rd-navbar--has-megamenu rd-navbar-submenu"><a className="rd-nav-link" href="https://mibaio.in/#">
                             <i className="fa fa-fw fa-user-circle-o mr-3" id="icon-view" />Account</a><span className="rd-navbar-submenu-toggle" />
                             <div className="rd-menu rd-navbar-megamenu rd-navbar-open-right">
                                 <ul className="rd-navbar-megamenu-inner-acc">
                                     <li className="rd-megamenu-item">
                                         <ul className="rd-megamenu-list">
                                             <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="https://mibaio.in/our-team.html">View Dashboard</a>
                                             </li>
                                             <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="https://mibaio.in/#">Logout</a></li>
                                         </ul>
                                     </li>
                                 </ul>
                             </div>
                         </li>
                         <li className="rd-nav-item"><a className="rd-nav-link" href="https://mibaio.in/contact-us.html"><i className="fa fa-fw fa-phone mr-3 ml-4" id="icon-view" />Contact Us</a>
                         </li>
                         <li className="rd-nav-item rd-navbar--has-megamenu rd-navbar-submenu">
                             <a className="rd-nav-link more-navbar" href="https://mibaio.in/#" id="more-tab">
                                 <i className="fa fa-fw fa-server" id="icon-view-more" />More
                             </a><span className="rd-navbar-submenu-toggle" />
                             <div className="rd-menu rd-navbar-megamenu rd-navbar-open-right">
                                 <ul className="rd-navbar-megamenu-inner">
                                     <li className="rd-megamenu-item">
                                         <ul className="rd-megamenu-list">
                                             <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="https://mibaio.in/our-team.html">Our
                                                 Team</a></li>
                                             <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="https://mibaio.in/#FAQ">FAQ</a></li>
                                         </ul>
                                     </li>
                                     <li className="rd-megamenu-item">
                                         <ul className="rd-megamenu-list">
                                             <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="https://mibaio.in/#">Privacy policy</a>
                                             </li>
                                             <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="https://mibaio.in/our-team.html">Our
                                                 Team</a></li>
                                         </ul>
                                     </li>
                                     <li className="rd-megamenu-item">
                                         <ul className="rd-megamenu-list">
                                             <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="https://mibaio.in/login.php">Login</a>
                                             </li>
                                             <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="https://mibaio.in/register.php">Register</a></li>
                                         </ul>
                                     </li>
                                 </ul>
                             </div>
                         </li>
                         <hr style={{ height: '2px' }} />
                     </ul>
                     {/* RD Navbar Search*/}
                     <div className="rd-navbar-element rd-navbar-element_centered">
                         <div className="group-xs">
                             <a className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon" id="cart-size-1" href="https://mibaio.in/cart.php"><span className="add-xs" id="cart-no">
                                 0
                             </span></a>
                         </div>
                         <div>
                             <a className="icon icon-sm link-social-2 mdi mdi-facebook" href="https://mibaio.in/#" id="handle-view" />
                             <a className="icon icon-sm link-social-2 mdi mdi-twitter" href="https://mibaio.in/#" id="handle-view" />
                             <a className="icon icon-sm link-social-2 mdi mdi-instagram" href="https://mibaio.in/#" id="handle-view" />
                         </div>
                     </div>
                 </div>
                 <div className="rd-navbar-element rd-navbar-element_right">
                     <div id="google_translate_element" style={{ display: 'none' }}>
                         <div className="skiptranslate goog-te-gadget" dir="ltr" style={{}}>
                             <div id=":0.targetLanguage" className="goog-te-gadget-simple" style={{ whiteSpace: 'nowrap' }}><img src="./MIBAiO Home_files/cleardot.gif" className="goog-te-gadget-icon" alt="" style={{ backgroundImage: 'url("https://translate.googleapis.com/translate_static/img/te_ctrl3.gif")', backgroundPosition: '-65px 0px' }} /><span style={{ verticalAlign: 'middle' }}><a aria-haspopup="true" className="goog-te-menu-value" href="javascript:void(0)"><span>Select
                                 Language</span><img src="./MIBAiO Home_files/cleardot.gif" alt="" width={1} height={1} /><span style={{ borderLeft: '1px solid rgb(187, 187, 187)' }}>​</span><img src="images/cleardot.gif" alt="" width={1} height={1} /><span aria-hidden="true" style={{ color: 'rgb(118, 118, 118)' }}>▼</span></a></span></div>
                         </div>
                     </div>
                     <ul className="list-localization">
                         <li>
                             <a className="icon icon-sm link-social-2 mdi mdi-cart-outline mr-2" id="cart-size" href="https://mibaio.in/cart.php"><span className="add-xs" id="cart-no">
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
                 <div className="rd-navbar-dummy" />
             </div>
         </nav>
     </div>


     
        <div className="tabs">
            <h3 style={{ fontWeight: 'bold', color: '#0accbe', textAlign: 'center', marginBottom: '10px' }}>What the Manufacturer has
                to say?</h3>
            <input type="radio" name="tabs" id="tab1" defaultChecked />
            <label htmlFor="tab1" id="tab-l1">
                <i className="fas fa-book" /><span>Overview</span>
            </label>
            <input type="radio" name="tabs" id="tab2" />
            <label htmlFor="tab2" id="tab-l2">
                <i className="fas fa-microchip" /><span>Specifications</span>
            </label>
            <input type="radio" name="tabs" id="tab3" />
            <label htmlFor="tab3" id="tab-l3">
                <i className="fas fa-comments" /><span>Reviews</span>
            </label>
            <div id="tab-content1" className="tab-content">
                <p style={{ textAlign: 'center' }}>
                </p><div className="container">
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
                                <blockquote className="quote-light">
                                    <div className="quote-light-mark linearicons-quote-open" />
                                    <div className="quote-light-text">
                                        <p>Forgot to switch off the fan of your room before going out? No worries!
                              <br />Get
                              the best home automation experience at MIBAiO which provides a truely
                              hands-free
                              control of your home appliances from anywhere
                            </p>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern" id="Voice">
                            <div className="slick-slider slick-slider-phone-frame-2 slick-style-1" data-focus-behaviour="true" data-arrows="true" data-loop="false" data-dots="false" data-swipe="false" data-speed={700} data-initial-slide={1} data-items={2} data-sm-items={2} data-md-items={2} data-lg-items={2} data-xl-items={2} data-xxl-items={2}>
                                <div className="item">
                                    <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/VoiceControliphone-frame-3-inner-8-300x650.png)' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="phone-frame-2 feature"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-1-300x650.png)' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-50 justify-content-xl-between align-items-center flex-md-row-reverse">
                        <div className="col-md-8 col-lg-7 col-xl-6 wow fadeInRightSmall">
                            <div className="unit unit-spacing-1 align-items-center">
                                <div className="unit-left">
                                    <div className="icon icon-style-1 mdi mdi-plus-network" />
                                </div>
                                <div className="unit-body">
                                    <h4 style={{ fontSize: '32px' }}>Self-reliant lifestyle</h4>
                                </div>
                            </div>
                            <div className="block-4 offset-top-4">
                                <p className="big">With inspiration from "आत्मनिर्भर भारत अभियान", we are comitted to
                                provide
                                our customers a
                          truely self-reliant (आत्मनिर्भर) experience using MIBAiO.</p>
                                <ul className="list-marked list-marked_secondary">
                                    <li>Easily manage home appliances without struggling to move from your position</li>
                                    <li>Hands-free experience with voice control feature</li>
                                    <li>Establish a reliable network with our secure IoT cloud and your existing
                                    appliances
                          </li>
                                </ul>
                                <div className="group-buttons-responsive group-middle" />
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-5 wow fadeInLeftSmall left-pattern">
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
                                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-1-300x650.png)' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <p className="big">Design your mobile application according to your choice of colors.
                                Improve
                                your lifestyle
                          routines and manage it better.</p>
                                <blockquote className="quote-light">
                                    <div className="quote-light-mark linearicons-quote-open" />
                                    <div className="quote-light-text">
                                        <p>Customize your App preferences by going to Settings -&gt; Personalization. And
                                        get
                                        the best home
                              automation experience you truely deserve!</p>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern">
                            <div className="slick-slider slick-slider-phone-frame-2 slick-style-1" data-focus-behaviour="true" data-arrows="true" data-loop="false" data-dots="false" data-swipe="false" data-speed={700} data-initial-slide={1} data-items={2} data-sm-items={2} data-md-items={2} data-lg-items={2} data-xl-items={2} data-xxl-items={2}>
                                <div className="item">
                                    <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-1-300x650.png)' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="phone-frame-2"><img className="phone-frame-2-outer" src="images/iphonex-mockup-1-261x520.png" alt="" width={261} height={520} />
                                        <div className="phone-frame-2-inner" style={{ backgroundImage: 'url(images/iphone-frame-3-inner-1-300x650.png)' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p />
            </div>
            <div id="tab-content2" className="tab-content">
                <p style={{ textAlign: 'center' }}>Cascading Style Sheets (CSS) is a style sheet language used for
                describing the look and formatting of a
                  document written in a markup language.</p>
            </div>
            <div id="tab-content3" className="tab-content">
                <p style={{ textAlign: 'center' }}>jQuery is a fast, small, and feature-rich JavaScript library. It makes
                things like HTML document traversal
                and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that
                works across
                  a multitude of browsers.</p>
            </div>
        </div>
        </div>
    );
}

export default Product_details;