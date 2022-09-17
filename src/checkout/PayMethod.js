import React from "react";
import "./PayMethod.css";

export default function PayMethod({ payViaCash, setPayViaCash, saveData }) {
    return (
        <div class="payment">
            <div class="payment-tabs">
                <a class="active">Payment</a>
            </div>
            <div class="payment-customer">
                <h2>Ivan Yew</h2>
            </div>
            <div class="payment-method">
                <h2>Choose your payment method</h2>
                <div class="pm-item">
                    <input
                        id="mpp"
                        type="radio"
                        name="payment-method"
                        checked={payViaCash}
                        onChange={(e) => {
                            setPayViaCash(e.target.value);
                        }}
                    />
                    <label class="pm-label" for="mpp">
                        <div class="pm-text">
                            <h5>Cash On Delivery</h5>
                            <p>
                                Pay when you receive your order either by Cash
                                or by UPI (GPay, PhonePe, ...)
                            </p>
                        </div>
                        <div class="pm-thumb">
                            <i class="fa fa-money col" aria-hidden="true"></i>
                        </div>
                    </label>
                </div>
                <div class="pm-item">
                    <input
                        id="mcc"
                        type="radio"
                        name="payment-method"
                        checked={!payViaCash}
                        onChange={(e) => {
                            setPayViaCash(!e.target.value);
                        }}
                    />
                    <label class="pm-label" for="mcc">
                        <div class="pm-text">
                            <h5>Online</h5>
                            <p>
                                Safe money transfer using your bank account.
                                Safe payment online. Payment methods included
                                are: BHIM/UPI, Credit Card, Debit Card, Net
                                Banking
                            </p>
                        </div>
                        <div className="pm-thumb">
                            <i
                                class="fa fa-cc-visa col"
                                style={{
                                    color: "navy",
                                }}
                            ></i>
                            <i
                                class="fa fa-cc-amex col"
                                style={{
                                    color: "blue",
                                }}
                            ></i>
                            <i
                                class="fa fa-cc-mastercard col"
                                style={{
                                    color: "red",
                                }}
                            ></i>
                            <i
                                class="fa fa-cc-discover col"
                                style={{
                                    color: "orange",
                                }}
                            ></i>
                            <i class="fa fa-paypal"></i>
                            {/* <i class="fa-brands fa-google-pay"></i> */}
                        </div>
                        {/* <div class="pm-thumb">
                            <img src="data:image/png;base64,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" />
                        </div>
                        <div class="pm-thumb">
                            <img src="data:image/png;base64,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" />
                        </div> */}
                    </label>
                </div>
            </div>

            <div class="payment-actions">
                <a class="return" data-dismiss="modal">
                    Return to Shipping
                </a>
                <a class="finish" onClick={saveData} data-dismiss="modal">
                    Finish Order{" "}
                    <img
                        class="ml-2"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAICAYAAADjoT9jAAAABGdBTUEAALGPC/xhBQAAAM9JREFUKBVjZKACaDsZJ/yd4ftlhv8MM5jNtdsaGBv+wIxlgjEooX8xfpcFGi4JNKPx36mrp5tOhuvDzGOsOxmezsj4XwUmQA79//9/8///GWzhehkZfzMyMLRJMwu0MtaeDP0HtB3Ipwk4wMT4n/EnTYwGGsrIyHCahYmF0frfH0ZZiixh+u/6/9//bCQzHjIzM6Y0mK7aQ5WgaToTqvv7D8MlYED/Z2RgnMXNz1NarjHvM8hCFiRbyWbyiDPc+fCMcTUDI9PMJrMVe5ENAgA1Az2KBN0ubgAAAABJRU5ErkJggg=="
                    />
                </a>
            </div>
        </div>
    );
}
