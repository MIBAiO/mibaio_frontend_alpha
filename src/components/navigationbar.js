import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faIdCard, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
library.add(faIdCard, fas);

const NavigationBar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        if(Cookies.get("accessToken")) {
            setIsLoggedIn(true);
        }
    }, [])
    function updateLanguage(value) {
        console.log(value);
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
                        {/* <NavDropdown title="Account" id="collasible-nav-dropdown" className="rd-nav-link nav-font">
                        <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">View Dashboard</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">Log Out</Link></NavDropdown.Item>

                    </NavDropdown> */}
                        {!isLoggedIn && (
                            <Nav.Link>
                            <Link className="rd-nav-link nav-font" to="/login">
                                Login
                            </Link>
                        </Nav.Link>
                        )}
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
                        {/* <Nav.Link>
                        <Link
                        className="rd-nav-link more-navbar" href="#" id="more-tab">
                            <FontAwesomeIcon icon={faArrowDown}  /> More
                        </Link>
                    </Nav.Link>
                     */}
                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <ul className="rd-navbar-megamenu-inner">
                                    <li className="rd-megamenu-item">
                                        <ul className="rd-megamenu-list">
                                            <li className="rd-megamenu-list-item">
                                                <a
                                                    className="rd-megamenu-list-link"
                                                    href="careers.html"
                                                >
                                                    Careers
                                                </a>
                                            </li>
                                            <li className="rd-megamenu-list-item">
                                                <a
                                                    className="rd-megamenu-list-link"
                                                    href="#FAQ"
                                                >
                                                    FAQ
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="rd-megamenu-item">
                                        <ul className="rd-megamenu-list">
                                            <li className="rd-megamenu-list-item">
                                                <a
                                                    className="rd-megamenu-list-link"
                                                    href="#"
                                                >
                                                    Privacy policy
                                                </a>
                                            </li>
                                            <li className="rd-megamenu-list-item">
                                                <a
                                                    className="rd-megamenu-list-link"
                                                    href="our-team.html"
                                                >
                                                    Our Team
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <li classNames="rd-megamenu-item">
                                        <ul className="rd-megamenu-list">
                                            <li className="rd-megamenu-list-item">
                                                <a
                                                    className="rd-megamenu-list-link"
                                                    href="login.php"
                                                >
                                                    Login
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                                </ul>
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
                                <label
                                    onClick={(e) => {
                                        updateLanguage("mr");
                                    }}
                                >
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
                                <label
                                    onClick={(e) => {
                                        updateLanguage("en");
                                    }}
                                >
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
                                    <span className="label-text">English</span>
                                </label>
                            </li>
                            <li>
                                <label
                                    onClick={(e) => {
                                        updateLanguage("hi");
                                    }}
                                >
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
    );
};

export default NavigationBar;
