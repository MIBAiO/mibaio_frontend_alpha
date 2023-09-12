// import { displayRazorpay } from "./helpers/paymentHelper";
import axios from "axios";
import temp from "./helpers/temp.svg";
import React, { useEffect, useRef, useState } from "react";
import NavigationBar from "../components/navigationbar";
import {
    CODPaymentCall,
    createOrder,
    getBillingDetails,
    getCouponData,
    getProductsInCart,
    getShippingDetails,
    updateBillingAndShippingAsSame,
    updateBillingDetails,
    updateShippingDetails,
    uploadBillingDetails,
    uploadShippingDetails,
} from "../http/apis";
import CheckoutForm from "../components/CheckoutForm";
import CustomFooter from "../components/customfooter";
import {
    deleteOrder,
    paymentSuccessCallback,
    uploadBillingAndShippingAsSame,
} from "../http/checkoutCalls";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PayMethod from "./PayMethod";
import "./style.css";
import Lottie from "react-lottie";
import * as checkoutAnimation from "../assets/lottie/checkout.json";
import { HiOutlineTruck } from "react-icons/hi";
import Input from "../components/Input";

const CheckoutNew = () => {
    //Refrence for custom input
    // const [isActiveEmail, setisActiveEmail] = useState(false);
    // const [email, setEmail] = useState("");


    // const handleEmailActivation = (e) => {
    //     setisActiveEmail(e.target.value !== "");
    //     setEmail(e.target.value);
    // };

    const [selectedIndex, setSelectedIndex] = useState(1);

    const [cartCalculation, setCartCalculation] = useState({
        total: false,
        couponDiscount: false,
        discountedValue: false,
        toPay: false,
    });
    const [cartItems, setCartItems] = useState([]);

    const [isInvalid, setIsInvalid] = useState(false);

    const [orderSuccess, setOrderSuccess] = useState(false);

    const [payViaCash, setPayViaCash] = useState(false);

    const closeModal = useRef(false);

    const [shippingDetails, setShippingDetails] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phoneNo: "",
    });
    const [billingDetails, setBillingDetails] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phoneNo: "",
    });

    const [isPaymentInProgress, setIsPaymentInProgress] = useState(false);

    const [isNewData, setIsNewData] = useState({
        isNewShippingDetails: false,
        isNewBillingDetails: false,
    });

    const [couponData, setCouponData] = useState(false);

    const [lottieState, setLottieState] = useState({
        isStopped: false,
        isPaused: false,
    });

    const [isShippingAndBillingSame, setIsShippingAndBillingSame] =
        useState(false);

    const [shippingErrors, setShippingErrors] = useState({
        name: false,
        email: false,
        address: false,
        city: false,
        state: false,
        zip: false,
        phoneNo: false,
    });

    const [billingErrors, setBillingErrors] = useState({
        name: false,
        email: false,
        address: false,
        city: false,
        state: false,
        zip: false,
        phoneNo: false,
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: checkoutAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const saveData = async () => {
        if (!isInvalid) {
            setIsPaymentInProgress(true);
            const shipping = {
                ...shippingDetails,
                full_name: shippingDetails.name,
            };
            delete shipping.name;

            const billing = {
                ...billingDetails,
                full_name: billingDetails.name,
            };
            delete billing.name;

            if (Object.values(billingErrors))
                if (isShippingAndBillingSame) {
                    if (Object.values(billingErrors).every((val) => !val)) {
                        try {
                            if (isNewData.isNewBillingDetails) {
                                const response =
                                    await uploadBillingAndShippingAsSame(
                                        billing
                                    );
                                console.log(response);
                            } else {
                                const response =
                                    await updateBillingAndShippingAsSame(
                                        billing
                                    );
                                console.log(response);
                            }
                        } catch (err) {
                            console.log(err.message);
                        }
                    } else {
                        toast.error("Invalid Data");
                        setIsPaymentInProgress(false);
                        return;
                    }
                } else {
                    if (
                        Object.values(billingErrors).every((val) => !val) &&
                        Object.values(shippingErrors).every((val) => !val)
                    ) {
                        try {
                            console.log(isNewData);
                            if (isNewData.isNewBillingDetails) {
                                const response = await uploadBillingDetails(
                                    billing
                                );
                                console.log(response);
                            } else {
                                const response = await updateBillingDetails(
                                    billing
                                );
                                console.log(response);
                            }
                            if (isNewData.isNewShippingDetails) {
                                const response = await uploadShippingDetails(
                                    shipping
                                );
                                console.log(response);
                            } else {
                                const response = await updateShippingDetails(
                                    shipping
                                );
                                console.log(response);
                            }
                        } catch (err) {
                            console.log(err.message);
                        }
                    } else {
                        toast.error("Invalid Data");
                        setIsPaymentInProgress(false);
                        return;
                    }
                }

            let couponCode = "";
            if (couponData) {
                couponCode = couponData.code;
            }
            const response = await createOrder(
                couponCode,
                payViaCash ? "COD" : "Prepaid"
            );
            console.log(response.data);
            if (payViaCash) {
                console.log(response.data);
                const cashData = {
                    ourOrderId: response.data._id,
                };
                const res = await CODPaymentCall(cashData);
                console.log("RESPONSE: ", res);
                localStorage.removeItem("coupon");
                setOrderSuccess(true);
                setIsPaymentInProgress(false);
            } else {
                displayRazorpay(response.data._id);
            }
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const shippingDetails = await getShippingDetails();
                // console.log(shippingDetails);
                setShippingDetails({
                    ...shippingDetails.data,
                    name: shippingDetails.data.full_name,
                });
            } catch (err) {
                console.log(err.response.status);
                if (err.response.status === 404) {
                    setIsNewData({
                        isNewBillingDetails: true,
                        isNewShippingDetails: true,
                    });
                }
            }
            try {
                const billingDetails = await getBillingDetails();
                console.log(billingDetails);
                setBillingDetails({
                    ...billingDetails.data,
                    name: billingDetails.data.full_name,
                });
            } catch (err) {
                console.log(err.response.status);
                if (err.response.status === 404) {
                    setIsNewData({
                        isNewShippingDetails: true,
                        isNewBillingDetails: true,
                    });
                }
            }
        })();
    }, []);
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    useEffect(() => {
        (async () => {
            const { data } = await getProductsInCart();
            console.log(data);
            setCartItems(data);
            let total = 0;
            data.forEach((val) => {
                total += val.pricePerPiece * val.count;
            });
            const couponCode = localStorage.getItem("coupon");
            console.log(couponCode);
            if (couponCode) {
                const discountData = await getCouponData(couponCode);
                setCouponData(discountData.data);
                setCartCalculation({
                    ...cartCalculation,
                    total,
                    toPay: total - total * (discountData.data.discount / 100),
                });
            } else {
                setCartCalculation({
                    ...cartCalculation,
                    total,
                    toPay: total,
                });
                setCouponData(false);
            }
        })();
    }, []);

    const displayRazorpay = async (orderId) => {
        //   e.preventDefaults();
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order

        // `http://15.206.27.190:5500/payment/orders/${orderId}`
        const result = await axios.post(
            `https://mibaio.in:5500/payment/orders/${orderId}`
        );
        // const result = await axios.post(
        //     `http://localhost:5500/payment/orders/${orderId}`
        // );

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        console.log(result.data);

        const options = {
            key: "rzp_test_IKPoQkTkzar9Zh", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "MIBAIO.",
            description: "Test Transaction",
            order_id: order_id,
            image: { temp },
            handler: async function (response) {
                console.log(response);
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                    ourOrderId: orderId,
                };

                const result = await paymentSuccessCallback(data);
                localStorage.removeItem("coupon");
                setOrderSuccess(true);
                setIsPaymentInProgress(false);
            },
            theme: {
                color: "#61dafb",
            },
            modal: {
                ondismiss: () => {
                    (async () => {
                        console.log("CANCELLED");
                        await deleteOrder(orderId);
                        setIsPaymentInProgress(false);
                    })();
                },
            },
        };

        const paymentObject = new window.Razorpay(options);
        console.log(paymentObject);
        paymentObject.open();
    };

    return (
        <>
            {/* TODO: Change redirect to success page after it is built */}
            {orderSuccess && <Redirect to="/success" />}
            <div>
                <NavigationBar />
                <div className="container mx-auto py-3 checkout-page-1">
                    <div className="checkout-header  mt-3 mb-2 d-flex flex-column flex-md-row justify-content-between">
                        <h5>Checkout</h5>
                        <p>Order Summary: ₹5499.00</p>
                    </div>
                    <hr />
                    <div className="row checkout-container flex-column flex-md-row">
                        <div className="col-md-6 col-12 pr-5 pr-0-md">
                            <p><HiOutlineTruck size={24} />Delivers to: 411043</p>
                            <h6>Select your Delivery Method</h6>
                            <p>Choose prefered date of delivery</p>
                            <div onClick={() => setSelectedIndex(1)} className={`checkout-option-item d-flex flex-column ${selectedIndex == 1 ? 'active-item' : ''}`}>
                                <p className="title">Delivers Monday 29 May</p>
                                <p className="des">FREE</p>
                            </div>
                            <div onClick={() => setSelectedIndex(2)} className={`checkout-option-item d-flex flex-column ${selectedIndex == 2 ? 'active-item' : ''}`}>
                                <p className="title">Delivers Monday 29 May</p>
                                <p className="des">FREE</p>
                            </div>
                            <div onClick={() => setSelectedIndex(3)} className={`checkout-option-item d-flex flex-column ${selectedIndex == 3 ? 'active-item' : ''}`}>
                                <p className="title">Delivers Monday 29 May</p>
                                <p className="des">FREE</p>
                            </div>
                        </div>
                        <div className="checkout-notice col-md-6 col-10 d-flex flex-column justify-content-center">
                            <h5 >Important Note:</h5>
                            <ul>
                                <li>Standard deliveries are made between
                                    8:00 a.m. and 6:00 p.m., Monday-
                                    Saturday.
                                </li>
                                <li>
                                    Drivers may ask for verbal confirmation
                                    from a safe distance to satisfy the
                                    signature requirement, or may leave
                                    lower-cost shipments at your door with
                                    no signature required.
                                </li>
                            </ul>
                        </div>
                        <hr className="col-12" />

                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-3">
                            <Link to="/address" className="checkout-btn text-center ">Continue to Shipping Address</Link>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center  mt-3">Need some help? Chat now
                            or call +91 12345 67890
                        </div>
                    </div>
                </div>
                {/* <div className="snackbars" id="form-output-global" /> */}
            </div>
        </>
    );
};

export default CheckoutNew;
