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
    const [couponCode, setCouponCode] = useState("");
    const [couponData, setCouponData] = useState(false);
    const [pinCode, setPinCode] = useState("");
    const [cartCalculation, setCartCalculation] = useState({
        total: false,
        couponDiscount: false,
        discountedValue: false,
        toPay: false,
    });



    // Change Data
    const [openShip, setOpenShip] = useState(false);

    //Fetch Cart Itemmes, Coupons and Pincode
    useEffect(async () => {

        const { data } = await getProductsInCart();
        console.log(data);
        setCartItems(data);

        let total = 0;
        data.forEach((val) => {
            total += val.pricePerPiece * val.count;
        });
        const couponCode = localStorage.getItem("coupon");
        setCouponCode(couponCode);

        try {
            const response = await getCouponData(couponCode);
            if (response.error) {
                toast.error(response.error);
                console.log("ERROR: ", response.error)
                return false;
            }
            setCouponData(response.data);
            setCartCalculation({
                ...cartCalculation,
                total,
                toPay: total - total * (response.data.discount / 100),
                couponDiscount: response.data.discount,
                discountedValue: total * (response.data.discount / 100),
            });
            localStorage.setItem("coupon", couponCode);
        } catch (err) {
            setCartCalculation({
                ...cartCalculation,
                total,
                toPay: total,
            });
            setCouponData(false);
            localStorage.removeItem("coupon");
            //console.log("ERROR: ", err.response.data.error)
        }



    }, []);


    // Check For Applied Coupons Validity
    const validateCoupon = async () => {

    };


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

    //2. Shipping and Billing Same Details =================================================================================================
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

    //Fectch Tbe billing Details
    useEffect(() => {
        (async () => {
            try {
                const billingDetails = await getBillingDetails();
                console.log("Fetched Billing")
                console.log(billingDetails);
                setBillingDetails({
                    ...billingDetails.data,
                });
                console.log("Billing Found: ", billingDetails.data);
                if (billingDetails.data != null && billingDetails.data.length > 0) {
                    setIsNewBillingDetails(false);
                }
            } catch (err) {
                console.log(err.response.status);
                if (err.response.status === 404) {
                    setIsNewBillingDetails(true);
                }
            }
        })();
    }, []);

    // If Shipping Billing Same Triggers
    useEffect(() => {
        console.log("Same: ", isShippingAndBillingSame)
        if (isShippingAndBillingSame && shippingId != "") {
            setBillingDetails({
                full_name: shippingDetails.full_name,
                email: shippingDetails.email,
                address1: shippingDetails.address1,
                address2: shippingDetails.address2,
                landmark: shippingDetails.landmark,
                city: shippingDetails.city,
                state: shippingDetails.state,
                zip: shippingDetails.zip,
                phoneNo: shippingDetails.phoneNo,
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
        coupon: couponData ? couponData.code : "",
        paymentMethod: payViaCash ? "COD" : "Prepaid",
    });
    //update order
    useEffect(() => {
        console.log("Order: ", order);
        setOrder({
            shippingId: shippingId,
            billingId: billingId,
            coupon: couponData ? couponData.code : "",
            paymentMethod: payViaCash ? "COD" : "Prepaid",

        })
    }, [shippingId, billingId, couponData, payViaCash]);


    const [orderSuccess, setOrderSuccess] = useState(false);

    //Review Order : [Billing, Payment Option Selection] =================================================================================================
    const [reviewOrderData, setReviewOrderData] = useState({});
    const [openReview, setOpenReview] = useState(false);

    const openReviewOrder = async () => {
        console.log("Open Review Order:")
        //Check if Billing Address is present or not
        if (Object.values(billingErrors).every((val) => !val)) {
            try {
                if (isNewBillingDetails) {
                    await uploadBillingDetails(
                        billingDetails
                    ).then((res) => {
                        console.log("Res ID", res);
                        setBillingId(res.data._id)
                    }).catch((err) => {
                        console.log(err);
                        toast.error("Invalid Data");
                        return;
                    });
                } else {
                    const res = await updateBillingDetails(
                        billingDetails
                    ).then((res) => {
                        console.log("Res ID", res);
                        setBillingId(res.data._id);
                    }).catch((err) => {
                        console.log(err);
                        toast.error("Invalid Data");
                        return;
                    });
                }
            } catch (err) {
                toast.error("Invalid Data");
                return;
            }
        } else {
            toast.error("Invalid Data");
            return;
        }

        console.log('Billing ID: ', billingId);
        console.log('Shipping ID: ', shippingId);
        //set Review Open
        setOpenReview(true);

    }

    //Save Order:  =====================================================================================================================================
    const saveData = async () => {
        console.log("SaveData");
        console.log("Shipping Id", shippingId);
        console.log("Billing Id", billingId);

        //Check if Billing Address is present or not
        if (billingId == "" || billingId == null || shippingId == "" || shippingId == null) {
            toast.error("Please Select Shipping and Billing Address");
            return;
        }
        setIsPaymentInProgress(true);
        if (!isInvalid) {
            setIsPaymentInProgress(true);
            //If Billing Address Present and Shipping Address Present then add it
            if (shippingId != "" && billingId != "") {

                console.log("Order: IN ORDER")
                console.log(order);

                //Create Order
                const response = await addOrder(order);

                console.log("Order Response: ", response.data)

                //Chash Flow 
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
    };

    //RAZORPAY Payment Related Functions ========================================================================================================================
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

        //Production
        // const result = await axios.post(
        //     `https://mibaio.in:5500/payment/orders/${orderId}`
        // );

        //Development
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
                        console.log("OnCancelled!!!!");

                        // Assuming `deleteOrder` is an asynchronous function, you should await it.
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
                        <p>Order Summary: ₹{cartCalculation.toPay}</p>
                    </div>
                    <hr />



                    {/* Display Addresss Section:  */}
                    {

                        (shippingId == "" || openShip) ?
                            <AddressPage
                                shippingId={shippingId}
                                setShippingId={setShippingId}
                                shippingDetails={shippingDetails}
                                setShippingDetails={setShippingDetails}
                                setOpenShip={setOpenShip}

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
                        openReview &&
                        <ReviewOrder
                            cartCalculation={cartCalculation}
                            shippingDetails={shippingDetails}
                            billingDetails={billingDetails}
                            saveData={saveData}
                            payViaCash={payViaCash}
                            displayRazorpay={displayRazorpay}
                            isPaymentInProgress={isPaymentInProgress}
                            setOpenShip={setOpenShip}
                            setOpenReview={setOpenReview}

                        />
                    }
                </div>
            </div >
        </>
    );
}

export default CheckoutNew;
