// import { displayRazorpay } from "./helpers/paymentHelper";
import axios from "axios";
import temp from "./helpers/temp.svg";
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/navigationbar";
import {
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
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
    const [cartCalculation, setCartCalculation] = useState({
        total: false,
        couponDiscount: false,
        discountedValue: false,
        toPay: false,
    });
    const [cartItems, setCartItems] = useState([]);

    const [isInvalid, setIsInvalid] = useState(false);

    const [orderSuccess, setOrderSuccess] = useState(false);

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
            const response = await createOrder(couponCode);
            console.log(response.data);
            displayRazorpay(response.data._id);
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
        const result = await axios.post(
            `http://15.206.27.190:5500/payment/orders/${orderId}`
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
            {orderSuccess && <Redirect to="/" />}
            <div>
                <div className="page">
                    {/* FScreen*/}
                    <section className="section page-header-3 header-section header-offset">
                        {/* RD Navbar*/}
                        <NavigationBar />
                        <div
                            id="belownavbar"
                            className="box-custom-4 bg-default"
                        >
                            <div className="box-custom-4-aside bg-accent">
                                <div className="box-custom-4-aside-decoration">
                                    <div className="box-custom-4-aside-decoration-bg wow clipInLeft" />
                                    <div className="box-custom-4-icon-outer">
                                        <span className="box-custom-4-icon" />
                                    </div>
                                </div>
                                <lottie-player
                                    className="lottie-animate"
                                    src="https://assets5.lottiefiles.com/private_files/lf30_wai6psec.json"
                                    background="transparent"
                                    speed={1}
                                    hover
                                    loop
                                    autoPlay
                                ></lottie-player>
                            </div>
                            <div className="box-custom-4-main">
                                <div className="block-10">
                                    <h1
                                        className="font-weight-bold heading-decoration-2 wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        <span className="text-white">
                                            You are
                                        </span>
                                    </h1>
                                    <h1
                                        className="extra-light text-white heading-decoration-3 wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        <span>
                                            really close to getting your own
                                            Smart Home
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-checkout">
                        <div
                            className="col-25 mr-5 ml-5 mt-5"
                            style={{ paddingBottom: "60px" }}
                        >
                            <div className="container-bill">
                                {/*#4e83f1*/}
                                <div
                                    style={{
                                        background: "#0accbe no-repeat",
                                        width: "50px",
                                        height: "50px",
                                        marginRight: "10px",
                                        backgroundPosition: "center",
                                        backgroundSize: "25px",
                                        float: "left",
                                        marginBottom: "15px",
                                    }}
                                >
                                    <lord-icon
                                        src="https://cdn.lordicon.com/dnoiydox.json"
                                        trigger="loop"
                                        colors="primary:#ffffff,secondary:#ffffff"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            fontWeight: 100,
                                        }}
                                    ></lord-icon>
                                </div>
                                <h3>Your articles</h3>
                                <div className="table-responsive-md">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td
                                                    width="30%"
                                                    className="column-header"
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Article
                                                </td>
                                                <td
                                                    width="20%"
                                                    className="column-header"
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Color
                                                </td>
                                                <td
                                                    width="10%"
                                                    className="column-header"
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Quantity
                                                </td>
                                                <td
                                                    width="20%"
                                                    className="column-header"
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Price
                                                </td>
                                                <td
                                                    width="20%"
                                                    className="column-header"
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Total
                                                </td>
                                            </tr>
                                            {cartItems.map((val, idx) => (
                                                <tr>
                                                    <td
                                                        className="row-b"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                color: "#777",
                                                                fontSize:
                                                                    "11px",
                                                            }}
                                                        >
                                                            #64000L
                                                        </span>
                                                        <br />
                                                        {val.modelName}
                                                    </td>
                                                    <td
                                                        className="row-b"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {val.color}
                                                    </td>
                                                    <td
                                                        className="row-b"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {val.count}
                                                    </td>
                                                    <td
                                                        className="row-b"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {" "}
                                                        <span
                                                            style={{
                                                                color: "#777",
                                                            }}
                                                        >
                                                            X
                                                        </span>{" "}
                                                        {val.pricePerPiece}
                                                    </td>
                                                    <td
                                                        className="row-b"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        Rs.{" "}
                                                        {(
                                                            val.pricePerPiece *
                                                            val.count
                                                        ).toFixed(2)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <br />
                                <table style={{ background: "#eee" }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table
                                                    width="620px"
                                                    style={{ float: "right" }}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    Total:
                                                                </strong>
                                                            </td>
                                                            <td
                                                                style={{
                                                                    textAlign:
                                                                        "right",
                                                                    paddingRight:
                                                                        "30px",
                                                                }}
                                                            >
                                                                Rs.
                                                                {
                                                                    cartCalculation.total
                                                                }
                                                                {/* {model1_qty *
                                                                    model1_price} */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    Promotion(
                                                                    {couponData
                                                                        ? couponData.discount
                                                                        : 0}
                                                                    %):
                                                                </strong>
                                                            </td>
                                                            <td
                                                                style={{
                                                                    textAlign:
                                                                        "right",
                                                                    paddingRight:
                                                                        "30px",
                                                                }}
                                                            >
                                                                Rs.
                                                                {couponData ? (
                                                                    <>
                                                                        {
                                                                            // cartCalculation.total *
                                                                            // (couponData.discount /
                                                                            //     100)
                                                                            (
                                                                                cartCalculation.total -
                                                                                cartCalculation.toPay
                                                                            ).toFixed(
                                                                                2
                                                                            )
                                                                        }
                                                                    </>
                                                                ) : (
                                                                    0
                                                                )}
                                                                {/* {model1_qty *
                                                                    model1_price} */}
                                                            </td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td>
                                                                <strong>
                                                                    Taxable
                                                                    Amount:
                                                                </strong>
                                                            </td>
                                                            <td
                                                                style={{
                                                                    textAlign:
                                                                        "right",
                                                                    paddingRight:
                                                                        "30px",
                                                                }}
                                                            >
                                                                Rs.
                                                                {(
                                                                    cartCalculation.toPay -
                                                                    cartCalculation.toPay *
                                                                        0.18
                                                                ).toFixed(2)}
                                                            </td>
                                                        </tr> */}

                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    Tax (18%):
                                                                </strong>
                                                            </td>
                                                            <td
                                                                style={{
                                                                    textAlign:
                                                                        "right",
                                                                    paddingRight:
                                                                        "30px",
                                                                }}
                                                            >
                                                                RS.
                                                                {(
                                                                    cartCalculation.toPay *
                                                                    0.18
                                                                ).toFixed(2)}
                                                            </td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td>
                                                                <strong>
                                                                    Sub-Total:
                                                                </strong>
                                                            </td>
                                                            <td
                                                                style={{
                                                                    textAlign:
                                                                        "right",
                                                                    paddingRight:
                                                                        "30px",
                                                                }}
                                                            >
                                                                Rs.{" "}
                                                                {
                                                                    cartCalculation.toPay
                                                                }
                                                            </td>
                                                        </tr> */}
                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    Shipping
                                                                    fee:
                                                                </strong>
                                                            </td>
                                                            <td
                                                                style={{
                                                                    textAlign:
                                                                        "right",
                                                                    paddingRight:
                                                                        "30px",
                                                                }}
                                                            >
                                                                Rs. 40
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    Grand total:
                                                                </strong>
                                                            </td>
                                                            <td
                                                                style={{
                                                                    textAlign:
                                                                        "right",
                                                                    paddingRight:
                                                                        "30px",
                                                                }}
                                                            >
                                                                RS.
                                                                {cartCalculation.toPay +
                                                                    40}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr
                                style={{
                                    marginTop: "40px",
                                    border: "0.1px solid rgba(0, 0, 0, 0.1)",
                                }}
                            />
                            <div
                                className=" row-c"
                                style={{
                                    paddingTop: "30px",
                                    justifyContent: "center",
                                }}
                            >
                                <CheckoutForm
                                    formData={billingDetails}
                                    setFormData={setBillingDetails}
                                    title="Billing Details"
                                    lordIcon="qhviklyi"
                                    setIsInvalid={setIsInvalid}
                                    errors={billingErrors}
                                    setErrors={setBillingErrors}
                                />
                                <CheckoutForm
                                    formData={
                                        isShippingAndBillingSame
                                            ? billingDetails
                                            : shippingDetails
                                    }
                                    setFormData={setShippingDetails}
                                    title="Shipping Details"
                                    lordIcon="slkvcfos"
                                    isDisabled={isShippingAndBillingSame}
                                    setIsInvalid={setIsInvalid}
                                    errors={shippingErrors}
                                    setErrors={setShippingErrors}
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "80%",
                                    }}
                                >
                                    <label className="l-check">
                                        <input
                                            type="checkbox"
                                            defaultChecked="checked"
                                            name="sameadr"
                                            checked={isShippingAndBillingSame}
                                            onChange={(e) => {
                                                setIsShippingAndBillingSame(
                                                    e.target.checked
                                                );
                                            }}
                                        />{" "}
                                        Shipping address same as billing
                                    </label>
                                    <button
                                        type="submit"
                                        defaultValue="Place My Order"
                                        className="btn w-40"
                                        onClick={saveData}
                                    >
                                        {isPaymentInProgress && (
                                            <div
                                                class="spinner-border"
                                                role="status"
                                            >
                                                <span class="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                        )}
                                        {!isPaymentInProgress &&
                                            "Place My Order"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CustomFooter />
                </div>
                {/* <div className="snackbars" id="form-output-global" /> */}
            </div>
        </>
    );
};

export default Checkout;
