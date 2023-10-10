import { useState } from "react";
import "./PayMethod.css";
import NavigationBar from "../components/navigationbar";
import "./style.css";
import Input from "../components/Input";
import CheckoutAddressForm from "../components/CheckoutAddressForm";

export default function PayMethodNew({ shippingDetails, billingDetails, setBillingDetails, billingErrors, setBillingErrors, isShippingAndBillingSame, setIsShippingAndBillingSame, openReviewOrder, payViaCash, setPayViaCash, amount }) {

    return (
        <div class="paymnetPage">
            {/* Select Payment Mode */}
            <div className="row payment-page checkout-container flex-column flex-md-row">
                <div className="col-md-6 col-12 pr-5 pr-0-md">
                    <h5 className="check-heading">How would Like to Pay?</h5>
                    <h6 className="mt-4">Select Your Payment Method</h6>
                    <div onClick={() => setPayViaCash(true)} className={`checkout-option-item d-flex flex-column py-3 ${payViaCash ? 'active-item' : ''}`}>
                        <p className="title">Cash on Delivery</p>
                        {/* <p className="title mt-0">Visa, Mastercard, Rupay, AMEX</p> */}
                    </div>
                    <div onClick={() => setPayViaCash(false)} className={`checkout-option-item d-flex flex-column py-3  ${payViaCash ? '' : 'active-item'}`}>
                        <p className="title">UPI / Net Banking</p>
                    </div>

                    {/* Impliment Later 
                                <h6 className="mt-4c">Pay over time:</h6>
                                        <div className={`checkout-option-item d-flex flex-column py-3`}>
                                            <p className="title">Credit Card EMI</p>
                                            <p className="des">FREE</p> 
                                        </div> */}
                    {/* Billing Address */}
                    <hr />
                    <h5 className="check-heading">Billing Address</h5>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" value={isShippingAndBillingSame} id="shippingSameAs" onClick={() => setIsShippingAndBillingSame(!isShippingAndBillingSame)} />
                        <label class="form-check-label" htmlFor="exampleCheck1">Use my shipping address</label>
                    </div>
                    {
                        !isShippingAndBillingSame ?
                            <CheckoutAddressForm
                                formData={billingDetails}
                                setFormData={setBillingDetails}
                                errors={billingErrors}
                                setErrors={setBillingErrors} /> :

                            // Set Shipping as billing
                            <div className="displayBilling">
                                <p>{shippingDetails.full_name}</p>
                                <p>{shippingDetails.address1}, {shippingDetails.address2}</p>
                                <p>{shippingDetails.city}, {shippingDetails.state} - {shippingDetails.zip}</p>
                            </div>
                    }
                </div>
            </div>

            {/* Invoice */}
            {
                amount > 200000 &&
                <>
                    <div className="row checkout-container flex-column flex-md-row">
                        <div className="col-md-6 col-12">

                            <h5 className="check-heading">What kind of invoice do you want?</h5>

                            <div className={`checkout-option-item d-flex flex-column py-3`}>
                                <p className="title">Consumer Invoice</p>
                                {/* <p className="des">FREE</p> */}
                            </div>

                            <div className={`checkout-option-item d-flex flex-column py-3`}>
                                <p className="title">Bussiness Invoice</p>
                                {/* <p className="des">FREE</p> */}
                            </div>
                        </div>
                        <div className="col-md-4 mr-auto me-auto col-12 d-flex align-items-end">
                            <p>Select and enter your GS TIN to have it added
                                to your invoice.</p>
                        </div>
                    </div>
                    <hr className="col-12" />
                    <div className="row checkout-container flex-column flex-md-row">

                        <div className="col-12 col-md-6 ">
                            <h5 className="check-heading">Enter Your tax information:</h5>
                            <Input label="PAN Number" initialValue={""} simple={true} />
                        </div>
                        <div className="col-12 col-md-4 mr-auto">
                            <p>A Permanent Account Number is required for orders of
                                200000 or more. It will be included on your electronic
                                receipt for tax purposes.</p>
                            <p>If you're buying for a business, please switch to business
                                invoice and enter GSTIN instead of PAN.</p>
                        </div>
                    </div>
                </>
            }

            <div className="row checkout-container flex-column flex-md-row">
                <hr className="col-12" />

                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-3">
                    <button className="checkout-btn" onClick={openReviewOrder}>Review Your Order</button>
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center  mt-3">Need some help? Chat now
                    or call +91 12345 67890
                </div>
            </div>
        </div>


    );
}
