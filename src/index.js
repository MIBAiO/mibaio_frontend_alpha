import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
// import './css/bootstrap.css';
// import './css/fonts.css';
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.render(
	<GoogleOAuthProvider clientId="640213126047-mu94j9q46gbajonino9lcudcu2ha02ek.apps.googleusercontent.com">
		<React.StrictMode>
			<Provider store={store}>
				<App />
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
			</Provider>
		</React.StrictMode>
	</GoogleOAuthProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
