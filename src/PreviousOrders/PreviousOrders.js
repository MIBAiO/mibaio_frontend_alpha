import React, { useEffect } from "react";
import { useState } from "react";
import CustomFooter from "../components/customfooter";
import NavigationBar from "../components/navigationbar";
import { getAllOrders } from "../http/apis";

const PreviousOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getAllOrders();
            console.log(response.data);
            setOrders(response.data);
        })();
    }, []);
    return (
        <>
            <div className="page">
                <NavigationBar />
                {orders.map((order) => (
                    <section id="cart-page">
                        <form>
                            <section className="section section-md mycart">
                                <section className="cart_wrapper ml-lg-5">
                                    <div className="cart_lists">
                                        <div className="cart_title">
                                            <span className="material-icons-outlined"></span>
                                            {new Date(
                                                order.date
                                            ).toDateString()}
                                        </div>
                                        <div className="cart_list_wrap">
                                            <div className="cart_responsive">
                                                {order.orderData.map(
                                                    (val, idx) => (
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
                                                                    {
                                                                        val.modelName
                                                                    }{" "}
                                                                    ({val.color}
                                                                    )
                                                                </label>
                                                            </div>
                                                            <div className="td_item  w-100 d-flex justify-center align-items-center">
                                                                <label>
                                                                    Rs.
                                                                    <strong className="bold_price">
                                                                        {
                                                                            val.pricePerPiece
                                                                        }{" "}
                                                                    </strong>
                                                                </label>
                                                                x {val.count}
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
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart_details">
                                        <div className="cart_title">
                                            Order Summary
                                        </div>
                                        <div
                                            className="form_row"
                                            style={{ paddingBottom: 50 }}
                                        >
                                            <table
                                                style={{ background: "#eee" }}
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <table
                                                                width="620px"
                                                                style={{
                                                                    float: "right",
                                                                }}
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
                                                                            {(
                                                                                order.amount -
                                                                                order.amount *
                                                                                    0.18
                                                                            ).toFixed(
                                                                                2
                                                                            )}
                                                                            {/* {model1_qty *
                                                                    model1_price} */}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <strong>
                                                                                Promotion(
                                                                                {
                                                                                    order.discount
                                                                                }
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
                                                                            Rs.{" "}
                                                                            {order.amount *
                                                                                (order.discount /
                                                                                    100)}
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>
                                                                            <strong>
                                                                                Tax
                                                                                (18%):
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
                                                                            RS.{" "}
                                                                            {(
                                                                                order.amount *
                                                                                0.18
                                                                            ).toFixed(
                                                                                2
                                                                            )}
                                                                        </td>
                                                                    </tr>

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
                                                                            Rs.
                                                                            {
                                                                                order.transportFees
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <strong>
                                                                                Grand
                                                                                total:
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
                                                                            RS.{" "}
                                                                            {order.amount -
                                                                                order.amount *
                                                                                    (order.discount /
                                                                                        100) +
                                                                                order.transportFees}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <button
                                                className="btn-checkout"
                                                name="check"
                                                id="check"
                                            >
                                                Track your order
                                            </button>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </form>
                    </section>
                ))}

                {/* ==================================================== */}
                {/* <section id="cart-page">
                    <form>
                        <section className="section section-md mycart">
                            <section className="cart_wrapper ml-lg-5">
                                <div className="cart_lists">
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
                                    <hr />
                                </div>
                            </section>
                        </section>
                    </form>
                </section> */}
                <CustomFooter />
            </div>
        </>
    );
};

export default PreviousOrders;
