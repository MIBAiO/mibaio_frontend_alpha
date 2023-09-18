import { useState } from "react";
import "./PayMethod.css";
import NavigationBar from "../components/navigationbar";
import "./style.css";
import Input from "../components/Input";

export default function PayMethodNew({ payViaCash, setPayViaCash, saveData }) {

    const [PAN, setPAN] = useState('');
    return (
        <div class="payment-page">
            <div>
                <NavigationBar />
                <div className="container mx-auto py-3 checkout-page-1">
                    <div className="checkout-header  mt-3 mb-0 d-flex flex-column flex-md-row justify-content-between">
                        <h5>Checkout</h5>
                        <p>Order Summary: ₹5499.00</p>
                    </div>
                    <hr />

                    <div className="row checkout-container flex-column flex-md-row">
                        <div className="col-md-6 col-12 pr-5 pr-0-md">
                            <h5 className="check-heading">How would Like to Pay?</h5>
                            <h6 className="mt-4">Pay in full</h6>
                            <div className={`checkout-option-item d-flex flex-column `}>
                                <p className="title">Credit or Debit card</p>
                                <p className="title mt-0">Visa, Mastercard, Rupay, AMEX</p>
                            </div>
                            <div className={`checkout-option-item d-flex flex-column py-3`}>
                                <p className="title">Net Banking</p>
                            </div>
                            <h6 className="mt-4c">Pay over time:</h6>
                            <div className={`checkout-option-item d-flex flex-column py-3`}>
                                <p className="title">Credit Card EMI</p>
                                {/* <p className="des">FREE</p> */}
                            </div>

                        </div>
                    </div>



                    <div className="row checkout-container flex-column flex-md-row">
                        <hr className="col-12" />
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
                            <Input label="PAN Number" initialValue={""} simple={true} onChange={(value) => setPAN(value)} />
                        </div>

                        <div className="col-12 col-md-4 mr-auto">
                            <p>A Permanent Account Number is required for orders of
                                200000 or more. It will be included on your electronic
                                receipt for tax purposes.</p>
                            <p>If you're buying for a business, please switch to business
                                invoice and enter GSTIN instead of PAN.</p>
                        </div>


                        <hr className="col-12" />

                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-3">
                            <button className="checkout-btn">Continue to Shipping Address</button>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center  mt-3">Need some help? Chat now
                            or call +91 12345 67890
                        </div>
                    </div>


                </div>
            </div >
        </div>

    );
}
