import { useState } from "react";
//import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
// import React, { useState } from "react";
import styled from "styled-components";
import { Toaster, toast } from "react-hot-toast";
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
import { HiOutlineTruck, HiOutlineReceiptTax, HiOutlineTag } from "react-icons/hi";
import { getShippingServiablity } from "../http/checkoutCalls";

const CartNew = () => {

    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemPrice, setItemPrice] = useState(5499);
    const [cartItems, setCartItems] = useState([]);
    const [didRedirect, setDidRedirect] = useState(false);
    const [esitimatingDate, setEstimatingDate] = useState(false);

    const [couponCode, setCouponCode] = useState("");
    const [isCouponValid, setIsCouponValid] = useState(false);
    const [editCoupon, setEditCoupon] = useState(false);
    const [couponDiscount, setCouponDiscount] = useState(0);


    const [cartCalculation, setCartCalculation] = useState({
        total: null,
        couponDiscount: null,
        discountedValue: null,
        toPay: null,
    });


    /************ Fetch The CART ***************/
    useEffect(() => {
        (async () => {
            const { data } = await getProductsInCart();
            setCartItems(data);

            let total = 0;
            data.forEach((val) => {
                total += val.pricePerPiece * val.count;
            });
            const couponCode = localStorage.getItem("coupon");
            console.log("Coupon Code: ", couponCode);
            console.log(couponCode);
            if (couponCode) {
                const discountData = await getCouponData(couponCode);
                setCouponDiscount(discountData.data.discount);
                setCartCalculation({
                    ...cartCalculation,
                    total,
                    toPay: total - total * (couponDiscount / 100),
                    couponDiscount: discountData.data.discount,
                    discountedValue: total * (couponDiscount / 100),
                });
            } else {
                setCartCalculation({
                    ...cartCalculation,
                    total,
                    toPay: total,
                });
                setCouponDiscount(0);
            }
        })();
    }, []);

    // Calculate the total and toPay
    useEffect(() => {
        let total = 0;
        cartItems.forEach((val) => {
            total += val.pricePerPiece * val.items.length;
        });
        setCartCalculation({
            ...cartCalculation,
            total,
            toPay: total,
        });
    }, [cartItems]);


    /************ Set Pincode ***************/
    const [pincode, setPincode] = useState('');
    const [editPin, setEditPin] = useState(false);
    const savePin = () => {
        setEditPin(false);
        localStorage.setItem("pincode", pincode);
        getEstDate();
    }
    useEffect(() => {
        const pin = localStorage.getItem("pincode");
        if (pin) {
            setPincode(pin);
            getEstDate();
        } else {
            setPincode("411043");
        }
    }, []);


    const getEstDate = async () => {
        const res = await getShippingServiablity({ pincode });

        console.log(res.data.data.data.available_courier_companies[0].etd);

        setEstimatingDate(res.data.data.data.available_courier_companies[0].etd);
    }


    /************ Apply Coupon  **************/



    // Validate Coupon From Database
    const validateCoupon = async (e) => {
        e.preventDefault();
        try {
            const response = await getCouponData(couponCode);
            if (response.error) {
                toast.error(response.error);
                console.log("ERROR: ", response.error)
                return;
            }
            setCouponDiscount(response.data.discount);
            localStorage.setItem("coupon", couponCode);
            setIsCouponValid(true);
            toast.success("Coupon Applied")
        } catch (err) {
            setIsCouponValid(false);
            toast.error(err.response.data.error);
            localStorage.removeItem("coupon");

            console.log("ERROR: ", err.response.data.error)
        }
    };

    //CLEAR COUPON
    const clearCoupon = () => {
        console.log("CLEAR")
        toast.success("Coupon Removed!!", {
            icon: '🗑️'
        })
        setCouponCode("");
        setCouponDiscount(0);
        setIsCouponValid(false);
        localStorage.removeItem("coupon");
    }

    useEffect(() => {
        console.log("CART Calculation")
        console.log(cartCalculation)
        console.log("ITEMS")
        console.log(cartItems)


    }, [cartCalculation])

    //Calculate the total and toPay
    useEffect(() => {
        console.log("TO PAY: ")

        let total = 0;
        cartItems.forEach((val) => {
            console.log(val);
            total += val.pricePerPiece * val.items.length;
        });
        setCartCalculation({
            ...cartCalculation,
            total,
            toPay: total - (couponDiscount / 100) * total,
        });
        console.log("Coupon Discount: ")
        console.log(couponDiscount)
        console.log()
    }, [couponDiscount]);

    /*************** Update Cart Items *****************/
    const updateCount = async (idx, by) => {

        console.log("UPDATE CART")
        console.log(cartItems)
        console.log(cartItems[idx].count)
        if (cartItems[idx].count === 1 && by === -1) {
            await deleteCartItem(cartItems[idx]._id);
            setCartItems([
                ...cartItems.slice(0, idx),
                ...cartItems.slice(idx + 1),
            ]);
            return;
        }
        try {

            //Modify Cart Item According to the count
            let modifyItems = cartItems[idx].items;
            let countItems = cartItems[idx].count;

            if (by > 0) {
                for (let i = 0; i < by; i++) {
                    modifyItems.push({
                        id: modifyItems.length + 1,
                        color: "white",
                    });
                    countItems++;
                }
            }
            if (by < 0 && countItems > 0) {
                for (let i = 0; i < Math.abs(by); i++) {
                    modifyItems.pop();
                    countItems--;
                }
            }

            const response = await updateCartItem(
                {
                    modelName: cartItems[idx].modelName,
                    count: countItems,
                    items: modifyItems,
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
                    count: countItems,
                    items: modifyItems,
                },
                ...cartItems.slice(idx + 1),
            ]);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            {didRedirect && <Redirect to="/checkoutnew" />}
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <NavigationBar />
                {cartItems.length === 0 ? (
                    <section className="section section-md container pt-4">
                        <div className="container">
                            <div className="row p-4 pb-0 pe-lg-0 align-items-center rounded-3 border-2 ">
                                <div className="col-lg-7 p-3">
                                    <h3
                                        className="display-4 fw-bold lh-1"
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
                                            className="btn-cart-empty"
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
                                            // transition:
                                            // "all 0.3s ease-in-out",
                                            height: "auto",
                                            width: "500px",
                                        }}
                                        src="images/cart_empty.gif"
                                        alt="cart empty"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (<div className="cart-page">
                    {/* Cart Header - Checkout Amount Details*/}
                    <div className="cart-page container py-4">
                        <div className="cart-header">
                            <h5>Your Cart Total is ₹  {cartCalculation.toPay}</h5>
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
                        {/* Rows - Cart Items in Row */}

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
                                                <p>Varients: {val.items.map((data) => <span>{data.color},  </span>)}</p>
                                            </div>
                                            <div className="d-flex w-100 justify-content-between">
                                                <div className="cart-product-qty d-flex align-items-center ">
                                                    <button
                                                        className="cart-product-qty-btn"
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
                                                        className="cart-"
                                                        onClick={
                                                            () => {
                                                                if (
                                                                    val.count <=
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
                        {/* Sections - */}
                        <div className="row mt-3 flex-column flex-md-row ">
                            <div className="col-lg-10 col-12 pt-4 order-md-last">
                                {/* Section 2 Get Deals */}
                                <div className="cart-deal">
                                    <div className="cart-deal-text">
                                        <h5>  <HiOutlineTag size={24} /> Get Deal</h5>
                                        <p>Upgrade your Purchase and Enjoy Great Deals</p>
                                    </div>
                                    <div className="cart-deal-btn rounded-pill  ">
                                        Get Deal
                                    </div>
                                </div>
                                <hr />
                                {/* Section - 3 Apply Coupon */}
                                <div className="cart-deal">
                                    <div className="cart-deal-text">
                                        <h5><HiOutlineReceiptTax size={24} />Apply Coupon</h5>
                                        <p>Apply Coupon to avail discount and offers!</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end flex-column">
                                        {
                                            isCouponValid ? <div onClick={() => clearCoupon()} className="cart-coupon-pill flex items-center justify-between rounded-pill cart-coupon-btn tracking-wide">
                                                {couponCode}
                                                <span className="w-4 h-4 fw-bold pl-3">✕</span>

                                            </div> :

                                                editCoupon ? <div className="cart-delivery-input rounded-pill  ">
                                                    <input className="coupon-input" value={couponCode} type="text" placeholder="Enter Coupon Code" onChange={(e) => setCouponCode(e.target.value)} />
                                                    <button className="pin-btn mt-2  " onClick={validateCoupon}>Apply</button>
                                                </div> :
                                                    <div className=" rounded-pill cart-coupon-btn " onClick={() => setEditCoupon(!editCoupon)}>
                                                        Apply Coupon
                                                    </div>
                                        }

                                    </div>

                                </div>
                                <hr />
                                {/* delivery */}
                                <div className="cart-delivery   d-flex justify-content-between align-items-center ">
                                    <div className="">
                                        <h5><HiOutlineTruck size={24} />Delivery</h5>
                                        <p>Order by 5:00 pm. Delivers to  {pincode}</p>
                                        <b>Get by {esitimatingDate} - Free  </b>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-end flex-column">

                                        {editPin ? <div className="cart-delivery-input rounded-pill  d-flex ">
                                            <input className="pin-input" value={pincode} type="text" placeholder="Enter Pincode" onChange={(e) => setPincode(e.target.value)} />
                                            <button className="pin-btn mt-2" onClick={savePin}>Save</button>
                                        </div> :
                                            <button onClick={() => setEditPin(!editPin)} className="cart-delivery-btn rounded-pill">
                                                Change
                                            </button>
                                        }

                                    </div>

                                </div>

                            </div>
                            <hr />
                        </div>
                        <hr className="col-12" />
                        <div className="row mt-1 flex-column flex-md-row">
                            <div className="col-lg-10 col-12 ml-md-auto">
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
                                        <h5>₹{cartCalculation.toPay}</h5>
                                        <p>Inclusive of all taxes</p>
                                        {
                                            isCouponValid ? <p className="text-success">{couponCode} Coupon Applied {couponDiscount}% OFF </p> : null

                                        }
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
