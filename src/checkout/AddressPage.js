// import { displayRazorpay } from "./helpers/paymentHelper";
import { Toaster, toast } from "react-hot-toast";
import { Redirect } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import NavigationBar from "../components/navigationbar";
import {
    getShippingDetails,
    getAllShippingDetails,
    uploadShippingDetails,
    updateShippingDetails,
    createOrder,
} from "../http/apis";
import "./style.css";
import * as checkoutAnimation from "../assets/lottie/checkout.json";
import Input from "../components/Input";
import CheckoutAddressForm from "../components/CheckoutAddressForm";
import { addOrder } from "../http/checkoutCalls";

const AddressPage = ({ shippingDetails, setShippingDetails, shippingId, setShippingId }) => {

    const [prevAddress, setPrevAddress] = useState([]);
    //Status of Form Submission
    const [savesuccess, setSavesuccess] = useState(null)

    //Add New Addresss
    const [newAddress, setNewAddress] = useState(false);
    //Update Address
    const [updateAddress, setUpdateAddress] = useState(false);

    //Selected Index
    const [selectedIndex, setSelectedIndex] = useState(0);

    //Shipping Address:


    //Handle errors in shipping
    const [shippingErrors, setShippingErrors] = useState({
        full_name: false,
        email: false,
        address1: false,
        address2: false,
        landmark: false,
        city: false,
        state: false,
        zip: false,
        phoneNo: false,
    });

    //Test
    useEffect(() => {
        console.log(shippingDetails);
        console.log("Prev Address");
        console.log(prevAddress)
    }, [shippingDetails, prevAddress])


    //Method to handle new address 
    useEffect(() => {
        if (newAddress) {
            setShippingDetails({
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
        }

        setSelectedIndex(-1);

        console.log(shippingDetails)
    }, [newAddress])

    //Edit Previous Address 
    const editAddress = (index) => {
        console.log("Edit");
        if (prevAddress.length > 0) {
            setShippingDetails(prevAddress[index]);
            setSelectedIndex(index);
            setUpdateAddress(true);
        }
        console.log(shippingDetails);
    }

    //Method to handle the selection of address
    const selectAddress = (index) => {
        console.log("Index: " + index);
        setSelectedIndex(index);
        setUpdateAddress(false);
        setNewAddress(false);
        setShippingDetails(prevAddress[index]);
        //make selected field active of the address

    }

    //Method: To handle the saving of the Address
    const saveShippingAddress = async () => {
        console.log(Object.values(shippingErrors).every(error => error === false));
        //Chec is shipping details are filled up
        if (selectedIndex === -1 || shippingDetails.full_name === "" || shippingDetails.email === "" || shippingDetails.address1 === "" || shippingDetails.address2 === "" || shippingDetails.landmark === "" || shippingDetails.city === "" || shippingDetails.state === "" || shippingDetails.zip === "" || shippingDetails.phoneNo === "") {
            if (!newAddress) {
                toast.error("Please select a shipping address");
                return;
            }
        }
        if (Object.values(shippingErrors).every(error => error == !false)) {
            console.log("error");
            console.log(Object.values(shippingErrors));
            console.log(shippingDetails);
            toast.error("Please fill all the fields correctly");
            return;
        } else {
            //Save the shipping details
            let shippingResponse;
            if (newAddress) {
                uploadShippingDetails(shippingDetails)
                    .then((res) => {
                        console.log("Success");
                        console.log(res);
                        shippingResponse = res.data;
                        console.log("New Address Uploaded:", res.data._id)
                        setShippingId(res.data._id);
                        toast.success("Address Selected!")
                    }).catch((err) => {
                        console.log("Error: ");
                        console.log(err);

                    })
            } else {
                //Update the shipping details
                updateShippingDetails(shippingDetails)
                    .then((res) => {
                        console.log("Success Update");
                        console.log(res);
                        shippingResponse = res.data;
                        console.log(res.data._id)
                        setShippingId(res.data._id);
                        console.log("Address Updated:", res.data._id);
                        toast.success("Address Selected!")
                    }).catch((err) => {
                        console.log("Error: ");
                        console.log(err);
                    })
            }
        }

    };
    useEffect(() => {
        (async () => {
            try {
                const shippingDetails = await getAllShippingDetails();
                // console.log(shippingDetails);
                // console.log("Addr: ");
                setPrevAddress(shippingDetails.data);
                if (shippingDetails.data.length > 0) {
                    setShippingDetails(shippingDetails.data[0])
                }
                console.log("Adderess: Fetched!")
                console.log(prevAddress);
            } catch (err) {
                console.log(err.response.status);
                setNewAddress(true);
                if (err.response.status === 404) {
                    console.log("No Address Found");
                }
            }
        })();
    }, []);


    return (
        <>
            <div className="row checkout-container flex-column flex-md-row">
                <div className="col-md-6 col-12 pr-5 pr-0-md">
                    <h6>Where should we ship your order?</h6>
                    <h6 className="mt-4">Select an Address</h6>
                    <div className="select-address">

                        {/* Show the previous address feilds only if the address is available */}
                        {
                            prevAddress && prevAddress.length > 0 ?
                                prevAddress.map((item, index) => {

                                    return (
                                        <div className={`checkout-option-item py-0  d-flex align-items-center flex-row ${selectedIndex == index ? 'active-item' : ''}`}>
                                            <div onClick={() => selectAddress(index)} className="checkout-option-address py-2">
                                                <p className="title">{item.full_name}</p>
                                                <p className="des">{item.address1}, {item.address2}, {item.city}, {item.state}</p>
                                            </div>
                                            <span className="fs-1 text-primary" onClick={() => editAddress(index)}>Edit</span>
                                        </div>
                                    )
                                })
                                :
                                ''
                        }
                    </div>
                    {
                        prevAddress && prevAddress.length < 3 ?
                            <div className={`checkout-option-item py-3 d-flex flex-row ${newAddress ? 'active-item' : ''} `} onClick={() => setNewAddress(true)}>
                                <p className="title">Add New Address</p>
                            </div>
                            :
                            ''
                    }

                    {
                        (newAddress || updateAddress) ?

                            <>
                                <CheckoutAddressForm
                                    formData={shippingDetails}
                                    setFormData={setShippingDetails}
                                    errors={shippingErrors}
                                    setErrors={setShippingErrors} />

                            </>
                            :
                            ''
                    }



                </div>
                <div className="checkout-notice col-md-4 mr-auto col-10 d-flex flex-column justify-content-end">
                    <p>We'll email you a receipt and send order
                        updates to your mobile phone via SMS</p>
                    <h5 >For a successful delivery, make sure your
                        phone number is correct:</h5>
                    <ul>
                        <li>The courier will send a One-Time Password (OTP) to this number.
                        </li>
                        <li>
                            To receive your goods, you must supply
                            the OTP to the courier at the time of
                            delivery. Be sure you have access to the
                            phone at that time.
                        </li>
                    </ul>
                </div>
            </div>

            <hr />

            {/* Uncomment in next version */}
            {/* <div className="row checkout-container flex-column flex-md-row">
                        <div className="col-md-6 col-12 ">
                            <h6>Share shopping updates with someone else:</h6>
                            <Input label="Email (Optional)" initialValue={""} simple={true} onChange={(value) => setFirstName(value)} />
                        </div>
                        <div className="col-md-4 mr-auto align-items-end d-flex col-12">
                            <p>Shipping notifications will be sent to the email address you enter.</p>
                        </div>
                    </div> 
                    
                    <hr/>
                    */}
            <div className="row checkout-container flex-column flex-md-row">

                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-3">
                    <button onClick={saveShippingAddress} className="checkout-btn text-center ">Continue to Payment</button>
                </div>
                <div className="col-12 col-md-6">
                    <div className="d-flex align-items-end  mt-3">Need some help? Chat now
                        or call +91 12345 67890
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddressPage;


//Method: To handle the saving of the Address REMOVE in Next iteration
// const saveDataOLD = async () => {
//     console.log(Object.values(shippingErrors).every(error => error === false));
//     if (Object.values(shippingErrors).every(error => error == !false)) {
//         console.log("error");
//         console.log(Object.values(shippingErrors));
//         console.log(shippingDetails);
//         toast.error("Please fill all the fields correctly");
//         return;
//     } else {
//         //Save the shipping details
//         let shippingResponse;
//         if (newAddress) {
//             uploadShippingDetails(shippingDetails)
//                 .then((res) => {
//                     console.log("Success");
//                     console.log(res);
//                     shippingResponse = res.data;
//                     setOrder({ shippingId: res.data._id });
//                     console.log(res.data._id)
//                     addOrder(order).then((res) => {
//                         console.log("Success");
//                         console.log(res.data);
//                         shippingResponse = res.data;
//                         setSavesuccess(true);
//                     }).catch((err) => {
//                         console.log("Order Error: ");
//                         console.log(err);
//                     })
//                 }).catch((err) => {
//                     console.log("Error: ");
//                     console.log(err);
//                 })
//         } else {
//             //Update the shipping details
//             updateShippingDetails(shippingDetails)
//                 .then((res) => {
//                     console.log("Success Update");
//                     console.log(res);
//                     shippingResponse = res.data;
//                     console.log(res.data._id)
//                     setOrder({ shippingId: res.data._id });

//                 }).catch((err) => {
//                     console.log("Error: ");
//                     console.log(err);
//                 })
//         }

//         //Save Order
//         if (order.shippingId !== "") {
//             addOrder(order).then((res) => {
//                 console.log("Success");
//                 console.log(res.data);
//                 shippingResponse = res.data;
//                 setSavesuccess(true);
//             }).catch((err) => {
//                 console.log("Order Error: ");
//                 console.log(err);
//             })
//         }


//     }

// };

//Fetch Preious Address
