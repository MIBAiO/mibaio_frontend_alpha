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

import { Switch, Route, Redirect } from "react-router-dom";

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
import { Validate } from "./validate/Validate";
import Review from "./review/Review";
import { refresh } from "./http/apis";
import PreviousOrders from "./PreviousOrders/PreviousOrders";
import OrderSuccess from "./OrderSuccess/OrderSuccess";
import { HashRouter } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import FAQ from "./FAQ/FAQ";
import ReturnNRefund from "./ReturnNRefund/ReturnNRefund";
import ScrollToTop from "./components/ScrollToTop";
import RegisterWithEmail from "./register/RegisterWithEmail";
import ViewProductNew from "./viewProduct/ViewProductNew";
import CartNew from "./cart/CartNew";

function App() {
	const { loading } = useLoadingWithRefresh();
	return loading ? (
		<Loader />
	) : (
		// <BrowserRouter>
		<HashRouter basename="/">
			{/* added ScrollToTop so that page scrolls to top on changing pages */}
			<ScrollToTop />
			<Switch>
				<GuestRoute path="/" exact>
					<Home />
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

				<GuestRoute path="/emailreg">
					<RegisterWithEmail />
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
				<GuestRoute path="/viewnew">
					{/* <BasicExample /> */}
					<ViewProductNew />
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

				<ProtectedRoute path="/review">
					<Review />
				</ProtectedRoute>

				<GuestRoute path="/success">
					<OrderSuccess />
				</GuestRoute>

				<GuestRoute path="/privacyPolicy">
					<PrivacyPolicy />
				</GuestRoute>
				<GuestRoute path="/faq">
					<FAQ />
				</GuestRoute>

				<GuestRoute path="/returnnrefund">
					<ReturnNRefund />
				</GuestRoute>

				<GuestRoute path="/cartnew">
					<CartNew />
				</GuestRoute>

				<ProtectedRoute path="/cart">
					<Cart />
				</ProtectedRoute>


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
		</HashRouter>
		// </BrowserRouter>
	);
}

const GuestRoute = ({ children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) => {
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
					console.log("Calling in Protected Route.....");
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
