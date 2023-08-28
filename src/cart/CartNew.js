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
            {/* {didRedirect && <Redirect to="/checkout" />} */}

            <div>
                <NavigationBar />
                <div className="page">
                    {/* FScreen*/}
                    <div className="cart-page container py-4">
                        <div className="cart-header">
                            <h5>Your Cart Total is ₹5499.00</h5>
                            <button>Checkout</button>
                        </div>
                        <hr />
                        <div className="row mt-3">
                            <div className="col-lg-2">
                                <img className="img-fluid" src="images/product2/white-front.png" alt="cartproduct" />
                            </div>
                            <div className="col-lg-10 pt-4">

                                {/* Row1 - productname, qty, price */}
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="cart-product-name">
                                        <h5>Xtension 4S</h5>
                                        <p>Graphite</p>
                                    </div>
                                    <div className="cart-product-qty d-flex align-items-center ">
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                    <div className="cart-product-price">
                                        <h6>₹5499.00</h6>
                                        <p>Inclusive of all taxes</p>
                                        <div className="cursor-pointer">

                                            <IoTrashSharp size={28} color="#ef4444" />
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                {/* Row2 - getdeal */}
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="cart-deal">
                                        <h5>Get Deal</h5>
                                        <p>Upgrade your Purchase and Enjoy Great Deals</p>

                                    </div>
                                    <div className="cart-deal-btn rounded-pill  ">
                                        Get Deal
                                    </div>
                                </div>

                                <hr />
                                {/* delivery */}
                                <div className=" cart-delivery">
                                    <h6><HiOutlineTruck size={24} />Delivery</h6>
                                    <p>Order by 5:00 pm. Delivers to 411043</p>
                                    <b>Tomorrow - Free  </b>
                                </div>
                            </div>
                            <hr />
                        </div>                         <hr />
                        <div className="row mt-1">
                            <div className="col-lg-10 ml-md-auto">
                                <div className="cart-subtotal d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <p>Subtotal</p>
                                        <p>Shipping</p>
                                    </div>
                                    <div className="cart-subtotal-price">
                                        <p >₹5499.00</p>
                                        <p >FREE</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="cart-total d-flex justify-content-between align-items-start">
                                    <h5>Total</h5>
                                    <div className="cart-total-price">
                                        <h5>₹54999.00</h5>
                                        <p>Inclusive of all taxes</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ml-auto">
                                <button className="cart-checkout-btn">Checkout</button>
                            </div>
                        </div>
                    </div>


                    {/* Subscribe to Get Notified!*/}
                    <CustomFooter />
                </div>
                <div className="snackbars" id="form-output-global" />
            </div >
        </>
    );
};

export default CartNew;
