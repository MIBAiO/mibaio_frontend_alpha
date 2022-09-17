import axios from "axios";
import temp from "./temp.svg";

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

export const displayRazorpay = async (e) => {
    //   e.preventDefaults();
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // creating a new order
    // const result = await axios.post("http://15.206.27.190:5500/payment/orders");
    const result = await axios.post("http://localhost:5500/payment/orders");

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    console.log(result.data);

    const options = {
        key: "rzp_test_Fw6XKjiJcW8be2", // Enter the Key ID generated from the Dashboard
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
            };

            // const result = await axios.post(
            //     "http://15.206.27.190:5000/payment/success",
            //     data
            // );
            const result = await axios.post(
                "http://localhost:5000/payment/success",
                data
            );

            alert(result.data.msg);
        },
        prefill: {
            name: "Soumya Dey",
            email: "SoumyaDey@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};
