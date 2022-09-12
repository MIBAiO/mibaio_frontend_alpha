import logo from "./logo.svg";
import Copy from "./home/Copy";
import ContactUs from "./contact_us/contact_us";
import OurTeam from "./our_team/our_team";
import Register from "./register/register";
import Cart from "./cart/Cart";
import Login from "./login/Login";
import ViewProduct from "./viewProduct/ViewProduct";
import { useState, useEffect } from "react";
import Loader from "./Loader/Loader";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Checkout from "./checkout/Checkout";
import Product_details from "./product_details/Product_details";
import Home from "./home/Home";
import AboutUs from "./about_us/about_us";
import Careers from "./careers/Careers";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Cookies from "js-cookie";

import "./index.css";
// import "./App.css";
import "./bootstrap.css";
import "./cart_details.css";
import "./cart.css";
import "./cart1.css";
import "./model.css";
import "./cart_qty.css";
import "./cart_details.css";
import "./from_man.css";
import "./services.css";
import "./steps.css";
import "./validate.css";

import "./vission.css";
import "./video.css";
// import "./rd-navbar.css";
import "./checkout.css";
import "./fonts.css";
import "./style.css";
import "./index.css";
import "./assets/css/style.css";

import "../src/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff";
import "../src/assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2";
import RequestResetPassword from "./resetPassword/requestresetpassword";
import PasswordReset from "./resetPassword/passwordreset";
import Temp from "./product_details/Temp";
import BasicExample from "./viewProduct/BasicExample";
import { Validate } from "./validate/Validate";
import Review from "./review/Review";
import { refresh } from "./http/apis";
import PreviousOrders from "./PreviousOrders/PreviousOrders";
import OrderSuccess from "./OrderSuccess/OrderSuccess";


function App() {
    // const [loading, setLoading] = useState(false);

    const { loading } = useLoadingWithRefresh();
    return loading ? (
        <Loader />
    ) : (
        <BrowserRouter>
            <Switch>
                {/* <Model_copy/> */}
                <GuestRoute path="/" exact>
                    <Home />
                    {/* <Copy/> */}
                </GuestRoute>

                <GuestRoute path="/about_us" exact>
                    <AboutUs />
                </GuestRoute>

                <GuestRoute path="/careers" exact>
                    <Careers />
                </GuestRoute>

                <GuestRoute path="/register">
                    <Register />
                </GuestRoute>

                <GuestRoute path="/login">
                    <Login />
                </GuestRoute>

                <GuestRoute path="/our_team">
                    <OurTeam />
                </GuestRoute>

                <GuestRoute path="/contact_us">
                    <ContactUs />
                </GuestRoute>

                <GuestRoute path="/request_reset_password">
                    <RequestResetPassword />
                </GuestRoute>

                <GuestRoute path="/view">
                    {/* <BasicExample /> */}
                    <ViewProduct />
                    {/* <Temp /> */}
                </GuestRoute>

                <GuestRoute path="/passwordReset">
                    <PasswordReset />
                </GuestRoute>

                <GuestRoute path="/validate">
                    <Validate />
                </GuestRoute>

                <GuestRoute path="/validate">
                    <Validate />
                </GuestRoute>
                <GuestRoute path="/review">
                    <Review />
                </GuestRoute>
                <GuestRoute path="/success">
                    <OrderSuccess />
                </GuestRoute>

                

                <ProtectedRoute path="/cart">
                    <Cart />
                </ProtectedRoute>

                {/* <GuestRoute path="/navbar">
=======
				<ProtectedRoute path="/cart">
					<Cart />
				</ProtectedRoute>

				{/* <GuestRoute path="/navbar">
>>>>>>> a66c319 (viewProduct completed)
          <Navbar />
        </GuestRoute> */}

                <ProtectedRoute path="/checkout">
                    <Checkout />
                </ProtectedRoute>
                <ProtectedRoute path="/product_details">
                    <Product_details />
                </ProtectedRoute>
                <ProtectedRoute path="/orders">
                    <PreviousOrders />
                </ProtectedRoute>
            </Switch>
        </BrowserRouter>
    );
}

const GuestRoute = ({ children, ...rest }) => {
    const { login } = useSelector((state) => state.auth);

    return (
        <Route
            {...rest}
            render={({ location }) => {
                // return login ? (
                //     <Redirect
                //         to={{
                //             pathname: "/",
                //             state: { from: location },
                //         }}
                //     />
                // ) : return ( children )
                return children;
            }}
        ></Route>
    );
};

const ProtectedRoute = ({ children, ...rest }) => {
    const [isUnauthorized, setIsUnauthorized] = useState(false);
    useEffect(() => {
        if (!Cookies.get("accessToken")) {
            (async () => {
                try {
                    await refresh();
                } catch (err) {
                    console.log(err);
                    setIsUnauthorized(true);
                }
            })();
        }
    }, []);
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return isUnauthorized ? (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                ) : (
                    children
                );
            }}
        ></Route>
    );
};

export default App;
