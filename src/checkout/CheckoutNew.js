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
    updateBillingAndShippingAsSame,
    updateBillingDetails,
    uploadBillingDetails,
} from "../http/apis";
import CheckoutForm from "../components/CheckoutForm";
import CustomFooter from "../components/customfooter";
import {
    addOrder,
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
import AddressPage from "./AddressPage";
import { Toaster } from "react-hot-toast";
import PayMethodNew from "./PayMethodNew";
import CheckoutAddressForm from "../components/CheckoutAddressForm";
import ReviewOrder from "./ReviewOrder";

const CheckoutNew = () => {

    //0.  PreFetch All The Cart related Details ==============================================================================
    const [cartItems, setCartItems] = useState([]);
    const [couponData, setCouponData] = useState(false);
    const [cartCalculation, setCartCalculation] = useState({
        total: false,
        couponDiscount: false,
        discountedValue: false,
        toPay: false,
    });

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

    //1. Shipping Details =================================================================================================
    const [shippingId, setShippingId] = useState("");
    const [shippingDetails, setShippingDetails] = useState({
        full_name: "",
        email: "",
        address1: "",
        address2: "",
        landmark: "",
        city: "",
        state: "",
        zip: "",
        phoneNo: "",
    });

    //2. Shipping Details =================================================================================================
    const [isShippingAndBillingSame, setIsShippingAndBillingSame] =
        useState(false);
    const [billingId, setBillingId] = useState("");
    const [billingDetails, setBillingDetails] = useState({
        full_name: "",
        email: "",
        address1: "",
        address2: "",
        landmark: "",
        city: "",
        state: "",
        zip: "",
        phoneNo: "",
    });

    const [billingErrors, setBillingErrors] = useState({
        full_name: false,
        email: false,
        address: false,
        city: false,
        state: false,
        zip: false,
        phoneNo: false,
    });
    const [isNewBillingDetails, setIsNewBillingDetails] = useState(true);


    useEffect(() => {
        (async () => {
            try {
                const billingDetails = await getBillingDetails();
                console.log(billingDetails);
                setBillingDetails({
                    ...billingDetails.data,
                });
                console.log("Billing Found: ", billingDetails.data);
                setIsNewBillingDetails(false);
            } catch (err) {
                console.log(err.response.status);
                if (err.response.status === 404) {
                    setIsNewBillingDetails(true);
                }
            }
        })();
    }, []);

    useEffect(() => {
        console.log("Smae: ", isShippingAndBillingSame)

        if (isShippingAndBillingSame && shippingId != "") {
            setBillingDetails({
                ...shippingDetails
            });
        }
    }, [isShippingAndBillingSame])

    useEffect(() => {
        console.log("Billing Details: ", billingDetails);
    }, [billingDetails])

    //3. Payment Related Details =================================================================================================
    const [PAN, setPAN] = useState('');
    const [reviewOrder, setReviewOrder] = useState(false)
    const [payViaCash, setPayViaCash] = useState(false);

    const [isPaymentInProgress, setIsPaymentInProgress] = useState(false);

    const [isInvalid, setIsInvalid] = useState(false);

    const closeModal = useRef(false);

    useEffect(() => {
        console.log("pay", payViaCash);
    }, [payViaCash])


    //4. Order Related Details =================================================================================================
    const [order, setOrder] = useState({
        shippingId: shippingId,
        billingId: billingId,
        coupon: "",
        paymentMethod: payViaCash ? "COD" : "Prepaid",
    });
    //update order
    useEffect(() => {
        console.log("Order: ", order);
        setOrder({
            shippingId: shippingId,
            billingId: billingId,
            coupon: "",
            paymentMethod: payViaCash ? "COD" : "Prepaid",

        })
    }, [shippingId, billingId, couponData, payViaCash]);


    const [orderSuccess, setOrderSuccess] = useState(false);

    //Review Order : =================================================================================================
    const [reviewOrderData, setReviewOrderData] = useState({});
    const [openReview, setOpenReview] = useState(false);

    const openReviewOrder = async () => {
        console.log("Open Review Order:")
        //Check if Billing Address is present or not
        if (Object.values(billingErrors).every((val) => !val)) {
            try {
                if (isNewBillingDetails) {
                    console.log("New Billing?", isNewBillingDetails)
                    const res = await uploadBillingDetails(
                        billingDetails
                    );
                    if (res.status == 200) {
                        setBillingId(res.data._id)
                        if (shippingId != "" && billingId != "") {
                            setOpenReview(true);
                        }
                    }
                    console.log(openReview);

                } else {
                    console.log("Update Billing Address!!!")
                    console.log(billingDetails)
                    const res = await updateBillingDetails(
                        billingDetails
                    ).then((res) => {
                        if (res.status == 200) {
                            setBillingId(res.data._id)
                            setOpenReview(true);
                            // if (shippingId != "" && billingId != "") {
                            // }
                        }
                    }).catch((err) => {
                        console.log(err);
                    });

                    console.log(openReview);

                }
            } catch (err) {
                console.log("Something went wrong");
            }
        } else {
            toast.error("Invalid Data");
        }

        console.log("Review ID: ", billingId);

    }

    //Save the Order:-------------------------------------------------
    const saveData = async () => {
        console.log("SaveDATA", billingDetails);
        console.log("SaveDATA", isNewBillingDetails);
        if (!isInvalid) {
            setIsPaymentInProgress(true);
            //If Billing Address Present and Shipping Address Present then add it
            if (shippingId != "" && billingId != "") {
                try {
                    await addOrder(order).then(
                        (res) => {
                            console.log("Order Added: ");
                            console.log(res);
                            displayRazorpay(res.data._id);
                        }
                    ).catch((err) => {
                        console.log("Error: ");
                        console.log(err);
                    });
                } catch (err) {
                    console.log(err.message);
                }
            } else {
                toast.error("Invalid Shipping Address and Billing Address");
            }
            console.log("Billing ID: ", billingId);

            let couponCode = "";
            if (couponData) {
                couponCode = couponData.code;
            }
            console.log("Coupon")
            console.log(couponCode);
            const response = await createOrder(
                couponCode,

            );
            console.log(response.data);
            console.log(response.data?._id);
            console.log("PayType Data:", payViaCash);

            //COD will be completed later
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

                console.log("Payment Via Razorpay")
                displayRazorpay(response.data?._id);
            }
        }

    }

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
            `http://localhost:5500/payment/orders/${orderId}`
        );
        console.log("****/*/*/*//*Order Data: ")
        console.log(result.data);
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
    }

    return (
        <>
            {/* TODO: Change redirect to success page after it is built */}
            {orderSuccess && <Redirect to="/success" />}

            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <NavigationBar />
                <div className="container mx-auto py-3 checkout-page-1">
                    <div className="checkout-header  mt-3 mb-2 d-flex flex-column flex-md-row justify-content-between">
                        <h5 className="check-headline">Checkout</h5>
                        <p>Order Summary: ₹{cartCalculation.total}</p>
                    </div>
                    <hr />



                    {/* Display Addresss Section:  */}
                    {

                        (shippingId == "") ?
                            <AddressPage
                                shippingId={shippingId}
                                setShippingId={setShippingId}
                                shippingDetails={shippingDetails}
                                setShippingDetails={setShippingDetails}

                            /> :
                            !openReview && <PayMethodNew
                                shippingDetails={shippingDetails}
                                billingDetails={billingDetails}
                                setBillingDetails={setBillingDetails}
                                billingErrors={billingErrors}
                                setBillingErrors={setBillingErrors}
                                isShippingAndBillingSame={isShippingAndBillingSame}
                                setIsShippingAndBillingSame={setIsShippingAndBillingSame}
                                openReviewOrder={openReviewOrder}
                                payViaCash={payViaCash}
                                setPayViaCash={setPayViaCash}
                                saveData={saveData}
                                amount={cartCalculation.total}
                            />
                    }

                    {
                        openReview && <ReviewOrder shippingDetails={shippingDetails}
                            billingDetails={billingDetails}
                            saveData={saveData}
                            payViaCash={payViaCash}
                            displayRazorpay={displayRazorpay}
                        />
                    }
                </div>
            </div >
        </>
    );
}

export default CheckoutNew;
