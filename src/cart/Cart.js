//import React from "react";
// import './bootstrap.css';
// import './cart.css';

import { useState } from "react";
//import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
// import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";


import {
    deleteCartItem,
    getCouponData,
    getProductsInCart,
    updateCartItem,
} from "../http/apis";


import NavigationBar from "../components/navigationbar";
import CustomFooter from "../components/customfooter";
import PageHeadder from "../components/PageHeadder";
import { toast } from "react-toastify";

const Cart = () => {
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemPrice, setItemPrice] = useState(5499);

    const [cartCalculation, setCartCalculation] = useState({
        total: null,
        couponDiscount: null,
        discountedValue: null,
        toPay: null,
    });

    const [couponDiscount, setCouponDiscount] = useState(0);

    const [cartItems, setCartItems] = useState([]);

    const [couponCode, setCouponCode] = useState("");

    const [didRedirect, setDidRedirect] = useState(false);

    const validateCoupon = async (e) => {
        e.preventDefault();

        try {
            const response = await getCouponData(couponCode);
            // console.log(response);
            setCouponDiscount(response.data.discount);
            localStorage.setItem("coupon", couponCode);
        } catch (err) {
            console.log(err);
            toast.error("Invalid Coupon Code");
            localStorage.removeItem("coupon");
        }
    };

    useEffect(() => {
        (async () => {
            const { data } = await getProductsInCart();
            console.log(data);
            setCartItems(data);
            let total = 0;
            data.forEach((val) => {
                total += val.pricePerPiece * val.count;
            });
            setCartCalculation({
                ...cartCalculation,
                total,
                toPay: total,
            });
        })();
    }, []);

    useEffect(() => {
        let total = 0;
        cartItems.forEach((val) => {
            total += val.pricePerPiece * val.count;
        });
        setCartCalculation({
            ...cartCalculation,
            total,
            toPay: total,
        });
    }, [cartItems]);

    useEffect(() => {
        let total = 0;
        cartItems.forEach((val) => {
            console.log(val);
            total += val.pricePerPiece * val.count;
        });
        setCartCalculation({
            ...cartCalculation,
            total,
            toPay: total - (couponDiscount / 100) * total,
        });
    }, [couponDiscount]);

    const updateCount = async (idx, by) => {
        if (cartItems[idx].count === 1 && by === -1) {
            await deleteCartItem(cartItems[idx]._id);
            setCartItems([
                ...cartItems.slice(0, idx),
                ...cartItems.slice(idx + 1),
            ]);
            return;
        }
        try {
            const response = await updateCartItem(
                {
                    modelName: cartItems[idx].modelName,
                    count: cartItems[idx].count + by,
                },
                cartItems[idx]._id
            );
            console.log(response);
            let temp = cartItems;
            // console.log(temp.slice(0, idx));
            // console.log(temp.splice(idx + 1));

            setCartItems([
                ...cartItems.slice(0, idx),
                {
                    ...cartItems[idx],
                    modelName: cartItems[idx].modelName,
                    count: cartItems[idx].count + by,
                },
                ...cartItems.slice(idx + 1),
            ]);
        } catch (err) {
            console.log(err);
        }
    };

    // const [itemTotalPrice, setItemTotalPrice] = useState(itemPrice*itemQuantity);

    return (
        <>
            {/* <div className="preloader" id="loading">
        <div className="preloader-body">
          <div id="loading-center-object">
            <div className="object" id="object_four" />
            <div className="object" id="object_three" />
            <div className="object" id="object_two" />
            <div className="object" id="object_one" />
          </div>
        </div>
      </div> */}
            {didRedirect && <Redirect to="/checkout" />}

            <div>
                <div className="page">
                    {/* FScreen*/}

                    <PageHeadder
                        // quote={`
                        // just a
                        // <strong style="color:#0accbe">
                        //     few
                        // </strong>
                        // steps away from having a Smart Home!
                        // `}
                        showYouAre={false}
                        showPath={true}
                        path={[
                            {
                                label: "Home",
                                href: "",
                            },
                            {
                                label: "Cart",
                                href: "cart",
                            },
                        ]}
                    // info="abcd"
                    />

                    {cartItems.length === 0 ? (
                        <section className="section section-md container">
                            <div className="container my-5">
                                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border-2 shadow-lg">
                                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                                        <h3
                                            className="display-4 fw-bold lh-1"
                                            style={{ color: "#03a59a" }}
                                        >
                                            Oops! Your cart is empty!
                                        </h3>
                                        <p className="lead">
                                            Looks like you haven't added
                                            anything to your cart yet
                                        </p>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                            {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
                                            <Link
                                                to="/view"
                                                className="button button-icon button-icon-right button-secondary button-winona wow clipInLeft wow fadeInUp"
                                                data-wow-delay="0.3s"
                                                href="model_copy.php"
                                                data-wow-duration=".5s"
                                                style={{ fontSize: "18px" }}
                                            >
                                                Back To Shopping
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <img
                                            className="img-svg animated-1"
                                            style={{
                                                transition:
                                                    "all 0.3s ease-in-out",
                                                height: "auto",
                                                width: "590px",
                                            }}
                                            src="images/svg2.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <section id="cart-page">
                            <form>
                                <section className="section section-md mycart">
                                    <section className="cart_wrapper ml-lg-5">
                                        <div className="cart_lists">
                                            <div className="cart_title">
                                                <span className="material-icons-outlined"></span>
                                                Your Shopping Cart
                                            </div>
                                            <div className="cart_list_wrap">
                                                <div className="cart_responsive">
                                                    {cartItems.map(
                                                        (val, idx) => (
                                                            <div
                                                                className="tr_item"
                                                                key={
                                                                    "#key" + idx
                                                                }
                                                            >
                                                                <div className="td_item item_img">
                                                                    <img
                                                                        className="model_pic"
                                                                        src="/images/product1/Sample1.png"
                                                                    />
                                                                </div>
                                                                <div className="td_item item_name">
                                                                    <label className="main">
                                                                        {
                                                                            val.modelName
                                                                        }{" "}
                                                                        (
                                                                        {
                                                                            val.color
                                                                        }
                                                                        )
                                                                    </label>
                                                                    <label className="sub">
                                                                        Ref.
                                                                        007891987
                                                                    </label>
                                                                </div>
                                                                <div
                                                                    className="td_item item_qty"
                                                                    style={{
                                                                        display:
                                                                            "flex",
                                                                        flexDirection:
                                                                            "column",
                                                                        justifyContent:
                                                                            "center",
                                                                        alignItems:
                                                                            "center",
                                                                    }}
                                                                >
                                                                    <button
                                                                        className="plus-btn"
                                                                        type="button"
                                                                        name="button"
                                                                        onClick={
                                                                            () => {
                                                                                if (
                                                                                    val.count <
                                                                                    3
                                                                                ) {
                                                                                    updateCount(
                                                                                        idx,
                                                                                        1
                                                                                    );
                                                                                }
                                                                            }
                                                                            // setItemQuantity(
                                                                            //     itemQuantity +
                                                                            //         1
                                                                            // )
                                                                        }
                                                                    >
                                                                        <img
                                                                            src="./images/plus.svg"
                                                                            alt=""
                                                                        />
                                                                    </button>
                                                                    {/* <input type="text" name="number" id="cart_cnt" defaultValue /> */}
                                                                    <span>
                                                                        {
                                                                            val.count
                                                                        }
                                                                    </span>

                                                                    <button
                                                                        className="minus-btn"
                                                                        type="button"
                                                                        name="button"
                                                                        onClick={() => {
                                                                            if (
                                                                                val.count >
                                                                                0
                                                                            )
                                                                                updateCount(
                                                                                    idx,
                                                                                    -1
                                                                                );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src="./images/minus.svg"
                                                                            alt=""
                                                                        />
                                                                    </button>
                                                                </div>
                                                                <div className="td_item item_price">
                                                                    <label>
                                                                        Rs.
                                                                        <strong className="bold_price_1">
                                                                            {
                                                                                val.pricePerPiece
                                                                            }
                                                                        </strong>
                                                                    </label>
                                                                </div>
                                                                <div className="td_item item_price">
                                                                    <label>
                                                                        Rs.
                                                                        <strong className="bold_price">
                                                                            {val.count *
                                                                                val.pricePerPiece}
                                                                        </strong>
                                                                    </label>
                                                                </div>
                                                                <div
                                                                    className="td_item item_remove"
                                                                    onClick={async () => {
                                                                        await deleteCartItem(
                                                                            val._id
                                                                        );
                                                                        setCartItems(
                                                                            [
                                                                                ...cartItems.slice(
                                                                                    0,
                                                                                    idx
                                                                                ),
                                                                                ...cartItems.slice(
                                                                                    idx +
                                                                                    1
                                                                                ),
                                                                            ]
                                                                        );
                                                                    }}
                                                                >
                                                                    <span className="material-icons-outlined">
                                                                        close
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                <div
                                                    className="footer"
                                                    style={{
                                                        marginTop: "40px",
                                                    }}
                                                >
                                                    <div className="back_cart">
                                                        <a href="model_copy.php">
                                                            <span className="material-icons-outlined">
                                                                west
                                                            </span>
                                                            Back to Shop
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart_details">
                                            <div className="cart_title">
                                                Cart Details
                                            </div>
                                            <div className="form_row">
                                                <div className="form_group">
                                                    <label className="input_label">
                                                        <strong>
                                                            Cart Total
                                                        </strong>
                                                    </label>
                                                    <label
                                                        type="text"
                                                        className="input"
                                                        id="card_number"
                                                        style={{
                                                            color: "#0accbe",
                                                        }}
                                                    >
                                                        Rs.{" "}
                                                        {cartCalculation.total}
                                                        <strong
                                                            className="total_bold"
                                                            style={{
                                                                fontWeight:
                                                                    "normal",
                                                                color: "#0accbe",
                                                            }}
                                                        ></strong>
                                                    </label>
                                                </div>
                                                <div className="d-flex flex-row flex-wrap align-items-center justify-content-between">
                                                    <div
                                                        className="form_group col-6"
                                                    // style={{ width: "100%" }}
                                                    >
                                                        <label className="input_label">
                                                            Coupon (If Any)
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="input"
                                                            id="card_number"
                                                            onChange={(e) => {
                                                                setCouponCode(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                            style={{
                                                                fontWeight:
                                                                    "normal",
                                                                color: "#0accbe",
                                                            }}
                                                        />
                                                    </div>
                                                    <button
                                                        className="btn btn-success m-0 w-auto p-3"
                                                        name="coupon"
                                                        style={{ height: 60 }}
                                                        onClick={validateCoupon}
                                                    >
                                                        {couponDiscount
                                                            ? "Applied"
                                                            : "APPLY"}
                                                    </button>
                                                </div>
                                                <div
                                                    className="form_group"
                                                    style={{
                                                        marginBottom: "45px",
                                                    }}
                                                >
                                                    <label className="input_label">
                                                        Payable Amount
                                                    </label>
                                                    <label
                                                        type="text"
                                                        className="input"
                                                        id="card_number"
                                                        style={{
                                                            color: "#0accbe",
                                                        }}
                                                    >
                                                        {couponDiscount ? (
                                                            <>
                                                                <strike>
                                                                    Rs.{" "}
                                                                    {
                                                                        cartCalculation.total
                                                                    }
                                                                </strike>
                                                                Rs.{" "}
                                                                {
                                                                    cartCalculation.toPay
                                                                }
                                                            </>
                                                        ) : (
                                                            <>
                                                                Rs.{" "}
                                                                {
                                                                    cartCalculation.toPay
                                                                }
                                                            </>
                                                        )}
                                                        <strong
                                                            className="pay_bold"
                                                            style={{
                                                                fontWeight:
                                                                    "normal",
                                                                color: "#0accbe",
                                                            }}
                                                        ></strong>
                                                    </label>
                                                </div>
                                                <button
                                                    className="btn-checkout"
                                                    name="check"
                                                    id="check"
                                                    onClick={() => {
                                                        if (
                                                            cartItems.length > 0
                                                        ) {
                                                            setDidRedirect(
                                                                true
                                                            );
                                                        } else {
                                                            setDidRedirect(
                                                                false
                                                            );
                                                        }
                                                    }}
                                                >
                                                    Checkout
                                                </button>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                            </form>
                        </section>
                    )}
                    {/* </section> */}
                    {/* Subscribe to Get Notified!*/}
                    <CustomFooter />
                </div>
                <div className="snackbars" id="form-output-global" />
            </div>
        </>
    );
};

export default Cart;
