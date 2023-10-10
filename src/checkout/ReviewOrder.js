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
import { FiChevronRight } from "react-icons/fi";
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



const ReviewOrder = ({ shippingDetails, billingDetails, saveData, payViaCash, displayRazorpay }) => {
    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemPrice, setItemPrice] = useState(5499);

    const [cartCalculation, setCartCalculation] = useState({
        total: null,
        couponDiscount: null,
        discountedValue: null,
        toPay: null,
    });

    console.log("Review Shipping")
    console.log(shippingDetails)

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
                if (val.items && Array.isArray(val.items)) {
                    total += val.pricePerPiece * val.count;
                }
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
            {/* {didRedirect && <Redirect to="/checkout" />} */}

            <div className="cart-page">
                {/* FScreen*/}
                <div className="cart-page container ">
                    <h5 className="check-heading pt-2 pb-0 mb-0">Let's make sure everything's right!</h5>
                    {/* Rows - cart-items */}
                    {console.log(cartItems)}
                    {cartItems.map(
                        (val, idx) => (
                            <div className="row mt-0 flex-column flex-md-row "
                                key={"#key" + idx}>
                                <div className="col-lg-2 col-12  px-3 order-md-first ">
                                    <img className="img-fluid" src="images/product2/white-front.png" alt="cartproduct" />
                                </div>
                                <div className="col-lg-10 col-12 pt-4 order-md-last">
                                    <div className="d-flex flex-column justify-content-center align-items-center flex-md-row align-items-center justify-content-between">
                                        <div className="cart-product-name w-100">
                                            <h5>{val.modelName}</h5>
                                            <p>{val.color}</p>
                                        </div>
                                        <div className="d-flex w-100 justify-content-between">
                                            <div className="cart-product-qty d-flex align-items-center ">
                                                <p>{val.count}</p>
                                            </div>
                                            <div className="cart-product-price">
                                                <h6>₹{itemPrice}.00</h6>
                                                <p>Inclusive of all taxes</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                    <hr className="m-0" />

                    {/* Shipping Details */}
                    <div className="row mt-4 flex-column flex-md-row ">
                        <div className="d-flex flex-column col-lg-2 col-12">
                            <h5 className="check-heading">Shipping Details</h5>
                            <p className="review-change-btn">Change<FiChevronRight /></p>
                        </div>
                        <div className="col-lg-5 review-text">
                            <h6 className="check-subheading">Delivers to:</h6>
                            <p>{shippingDetails.full_name}</p>
                            <p>{shippingDetails.address1}, {shippingDetails.address2}</p>
                            <p>{shippingDetails.city}, {shippingDetails.state} {shippingDetails.zip} </p>

                        </div>
                        <div className="col-lg-5  review-text">
                            <h6 className="check-subheading">Contact Information:</h6>
                            <p>{shippingDetails.email}</p>
                            <p>{shippingDetails.phoneNo}</p>
                        </div>
                    </div>
                    <hr className="" />
                    {/* Deivery Details */}
                    <div className="row mt-3 flex-column flex-md-row ">
                        <div className="d-flex flex-column col-lg-2 col-12">
                            <h5 className="check-heading">Delivery Details</h5>
                            <p className="review-change-btn">Change<FiChevronRight /></p>
                        </div>
                        <div className="col-lg-5">
                            <h6 className="check-subheading">Delivers on:</h6>
                            <p>Friday 19 Sept</p>
                        </div>
                    </div>
                    <hr className="" />
                    {/* Payment Details */}
                    <div className="row mt-3 flex-column flex-md-row ">
                        <div className="d-flex flex-column col-lg-2 col-12">
                            <h5 className="check-heading">Delivery Details</h5>
                            <p className="review-change-btn">Change<FiChevronRight /></p>
                        </div>
                        <div className="col-lg-5">
                            <h6 className="check-subheading">Payment Method:</h6>
                            <p>Paying with <span className="fw-bold">{payViaCash ? 'Cash on Delivery' : 'Online'}</span></p>
                        </div>
                        <div className="col-lg-5 review-text">
                            <h6 className="check-subheading ">Billing Address:</h6>
                            <p>{billingDetails.full_name}</p>
                            <p>{billingDetails.address1}, {billingDetails.address2}</p>
                            <p>{billingDetails.city}, {billingDetails.state} {billingDetails.zip} </p>

                        </div>
                    </div>
                    <hr />
                    <div className="row mt-1 flex-column flex-md-row">
                        <div className="col-lg-2 col-12">
                            <h5 className="check-heading">Your Total</h5>
                        </div>
                        <div className="col-lg-10 col-12 ml-md-auto">
                            <div className=" d-flex align-items-center justify-content-between">
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
                        <div className="col-md-4 ml-auto">
                            <button className="cart-checkout-btn py-2 fw-bold"
                                onClick={saveData}>Continue to Payment</button>
                            <p className="small mt-3">By clicking Continue to Payment, you agree that the
                                Terms and Conditions of Sale will govern your purchase and that
                                MIBAiO will email you an invoice.</p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ReviewOrder;
