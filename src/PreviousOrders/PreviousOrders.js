import React, { useEffect } from "react";
import { useState } from "react";
import CustomFooter from "../components/customfooter";
import NavigationBar from "../components/navigationbar";

const PreviousOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {}, []);
    return (
        <>
            <div className="page">
                <section id="cart-page">
                    <form>
                        <section className="section section-md mycart">
                            <section className="cart_wrapper ml-lg-5">
                                <div className="cart_lists">
                                    <div className="cart_title">
                                        <span className="material-icons-outlined"></span>
                                        Your Shopping Cart
                                    </div>
                                    <div className="cart_list_wrap">
                                        <div className="cart_responsive">
                                            {orders.map((val, idx) => (
                                                <div
                                                    className="tr_item"
                                                    key={"#key" + idx}
                                                >
                                                    <div className="td_item item_img">
                                                        <img
                                                            className="model_pic"
                                                            src="/images/product1/Sample1.png"
                                                        />
                                                    </div>
                                                    <div className="td_item item_name">
                                                        <label className="main">
                                                            {val.modelName} (
                                                            {val.color})
                                                        </label>
                                                        <label className="sub">
                                                            Ref. 007891987
                                                        </label>
                                                    </div>
                                                    <div className="td_item item_qty">
                                                        <span>{val.count}</span>
                                                    </div>
                                                    <div className="td_item item_price">
                                                        <label>
                                                            Rs.
                                                            <strong className="bold_price_1">
                                                                {
                                                                    val.pricePerPiece
                                                                }
                                                            </strong>
                                                        </label>
                                                    </div>
                                                    <div className="td_item item_price">
                                                        <label>
                                                            Rs.
                                                            <strong className="bold_price">
                                                                {val.count *
                                                                    val.pricePerPiece}
                                                            </strong>
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div
                                            className="footer"
                                            style={{
                                                marginTop: "40px",
                                            }}
                                        >
                                            <div className="back_cart">
                                                <a href="model_copy.php">
                                                    <span className="material-icons-outlined">
                                                        west
                                                    </span>
                                                    Back to Shop
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </form>
                </section>
            </div>
        </>
    );
};

export default PreviousOrders;
