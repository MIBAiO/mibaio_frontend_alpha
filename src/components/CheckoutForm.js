import React from "react";

const CheckoutForm = ({
    formData,
    setFormData,
    title,
    lordIcon,
    isDisabled = false,
    setIsInvalid,
}) => {
    return (
        <div className="col-50">
            <div className="check container w-50">
                <form id="validate">
                    <div className="row-c">
                        <div className="col-50 billing-class">
                            {/*#4e83f1*/}
                            <div
                                style={{
                                    background: "#0accbe no-repeat",
                                    width: "50px",
                                    height: "50px",
                                    margin: "30px 0",
                                    marginRight: "10px",
                                    backgroundPosition: "center",
                                    backgroundSize: "25px",
                                    float: "left",
                                    marginBottom: "15px",
                                }}
                            >
                                <lord-icon
                                    src={`https://cdn.lordicon.com/${lordIcon}.json`}
                                    trigger="loop"
                                    colors="primary:#ffffff,secondary:#ffffff"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                    }}
                                ></lord-icon>
                            </div>
                            <h3
                                style={{
                                    marginBottom: "10px",
                                    margin: "35px 0",
                                }}
                            >
                                {title}
                            </h3>
                            {/* <h3 style="color: #0accbe;margin-bottom: 10px;margin: 30px 0;">Billing Address</h3> */}
                            <label className="l-check" htmlFor="fname">
                                <i className="fa fa-user" /> Full Name
                            </label>
                            <input
                                type="text"
                                id="fname"
                                name="fullname"
                                placeholder="Name"
                                required
                                className="form-cotnrol"
                                style={formStyle}
                                value={formData.name}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    });
                                }}
                                disabled={isDisabled}
                            />
                            <label className="l-check" htmlFor="email">
                                <i className="fa fa-envelope" /> Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                style={formStyle}
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    });
                                }}
                                disabled={isDisabled}
                            />
                            <label className="l-check" htmlFor="adr">
                                <i className="fa fa-address-card-o" />
                                Address
                            </label>
                            <input
                                type="text"
                                id="adr"
                                name="address"
                                placeholder="Address"
                                required
                                style={formStyle}
                                value={formData.address}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        address: e.target.value,
                                    });
                                }}
                                disabled={isDisabled}
                            />
                            <label className="l-check" htmlFor="city">
                                <i className="fa fa-institution" /> City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="City"
                                required
                                style={formStyle}
                                value={formData.city}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        city: e.target.value,
                                    });
                                }}
                                disabled={isDisabled}
                            />
                            <label className="l-check" htmlFor="state">
                                <i className="fa fa-map" /> State
                            </label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                placeholder="State"
                                required
                                style={formStyle}
                                value={formData.state}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        state: e.target.value,
                                    });
                                }}
                                disabled={isDisabled}
                            />
                            <label className="l-check" htmlFor="zip">
                                <i className="fa fa-map-pin mr-1" />
                                Zip
                            </label>
                            <input
                                type="text"
                                id="zip"
                                name="pin"
                                placeholder="Pincode"
                                required
                                style={formStyle}
                                value={formData.zip}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        zip: e.target.value,
                                    });
                                }}
                                disabled={isDisabled}
                            />
                            <label className="l-check" htmlFor="zip">
                                <i className="fa fa-phone mr-1" />
                                Phone No
                            </label>
                            <input
                                type="text"
                                id="zip"
                                name="phone"
                                placeholder="Phone No"
                                required
                                style={formStyle}
                                value={formData.phoneNo}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        phoneNo: e.target.value,
                                    });
                                }}
                                disabled={isDisabled}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

const formStyle = {
    background: "none",
    color: "#c6c6c6",
    fontSize: 18,
    display: "block",
    border: "none",
    borderBottom: "1px solid #c6c6c6",
    width: "100%",
};

export default CheckoutForm;
