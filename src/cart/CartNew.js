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
import { toast } from "react-toastify";
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
import "./style.css"
import { IoTrashBin, IoTrashSharp } from "react-icons/io5";
import { HiOutlineTruck } from "react-icons/hi";



const CartNew = () => {
    const [itemQuantity, setItemQuantity] = useState(1);
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


    // Quantity
    const incrementQuantity = () => {
        setItemQuantity(itemQuantity + 1);
    };

    const decrementQuantity = () => {
        if (itemQuantity > 1) {
            setItemQuantity(itemQuantity - 1);
        }
    };

    // Price
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
            {didRedirect && <Redirect to="/checkout" />}
            <div>
                <NavigationBar />
                {cartItems.length === 0 ? (
                    <section className="section section-md container">
                        <div className="container">
                            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border-2 ">
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
                ) : (<div className="page">
                    {/* FScreen*/}
                    <div className="cart-page container py-4">
                        <div className="cart-header">
                            <h5>Your Cart Total is ₹  {cartCalculation.total}.0</h5>
                            <button onClick={() => {
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
                            }}>Checkout</button>
                        </div>
                        <hr />
                        {/* Row1 - cart-items */}
                        {cartItems.map(
                            (val, idx) => (
                                <div className="row mt-3 flex-column flex-md-row "
                                    key={"#key" + idx}>
                                    <div className="col-lg-2 col-12 order-md-first ">
                                        <img className="img-fluid" src="images/product2/white-front.png" alt="cartproduct" />
                                    </div>
                                    <div className="col-lg-10 col-12 pt-4 order-md-last">
                                        <div className="d-flex flex-column justify-content-center flex-md-row align-items-center justify-content-between">
                                            <div className="cart-product-name w-100">
                                                <h5>{val.modelName}</h5>
                                                <p>{val.color}</p>
                                            </div>
                                            <div className="d-flex w-100 justify-content-between">
                                                <div className="cart-product-qty d-flex align-items-center ">
                                                    <button
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
                                                    >-</button>
                                                    <p>{val.count}</p>
                                                    <button
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
                                                        }
                                                    >+</button>
                                                </div>
                                                <div className="cart-product-price">
                                                    <h6>₹{itemPrice}.00</h6>
                                                    <p>Inclusive of all taxes</p>
                                                    <div className="cursor-pointer"
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
                                                        }}>
                                                        <IoTrashSharp size={28} color="#ef4444" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                        <hr />
                        <div className="row mt-3 flex-column flex-md-row ">
                            <div className="col-lg-10 col-12 pt-4 order-md-last">
                                {/* Row2 - getdeal */}
                                <div className="cart-deal">
                                    <div className="cart-deal-text">
                                        <h5>Get Deal</h5>
                                        <p>Upgrade your Purchase and Enjoy Great Deals</p>
                                    </div>
                                    <div className="cart-deal-btn rounded-pill  ">
                                        Get Deal
                                    </div>
                                </div>

                                <hr />
                                {/* delivery */}
                                <div className="cart-delivery">
                                    <h6><HiOutlineTruck size={24} />Delivery</h6>
                                    <p>Order by 5:00 pm. Delivers to 411043</p>
                                    <b>Tomorrow - Free  </b>
                                </div>
                            </div>
                            <hr />
                        </div>                         <hr />
                        <div className="row mt-1 flex-column flex-md-row">
                            <div className="col-lg-10 ml-md-auto">
                                <div className="cart-subtotal d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <p>Subtotal</p>
                                        <p>Shipping</p>
                                    </div>
                                    <div className="cart-subtotal-price">
                                        <p >₹ {cartCalculation.total}.0</p>
                                        <p >FREE</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="cart-total d-flex justify-content-between align-items-start">
                                    <h5>Total</h5>
                                    <div className="cart-total-price">
                                        <h5>₹{cartCalculation.total}.00</h5>
                                        <p>Inclusive of all taxes</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ml-auto">
                                <button className="cart-checkout-btn"
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
                                    }}>Checkout</button>
                            </div>
                        </div>
                    </div>


                    {/* Subscribe to Get Notified!*/}
                    <CustomFooter />
                </div>)}

                <div className="snackbars" id="form-output-global" />
            </div >
        </>
    );
};

export default CartNew;
