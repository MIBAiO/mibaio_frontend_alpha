import React from "react";
import { HashRouter, Route } from "react-router-dom";

export default (
    // <BrowserRouter>

    <HashRouter basename="/">
        {/* <Model_copy/> */}
        <Route path="/" exact />

        <Route path="/about_us" exact />

        <Route path="/Xtension4C"></Route>
        <Route path="/SmartRemote"></Route>
        <Route path="/MotionSensor"></Route>

        <Route path="/careers" exact></Route>

        <Route path="/register"></Route>

        <Route path="/login"></Route>

        <Route path="/our_team"></Route>

        <Route path="/contact_us"></Route>

        <Route path="/request_reset_password"></Route>

        <Route path="/view"></Route>

        <Route path="/passwordReset"></Route>

        <Route path="/validate"></Route>

        <Route path="/validate"></Route>

        <Route path="/review"></Route>

        <Route path="/success"></Route>

        <Route path="/cart"></Route>

        <Route path="/checkout"></Route>
        <Route path="/product_details"></Route>
        <Route path="/orders"></Route>
    </HashRouter>
    // </BrowserRouter>
);
