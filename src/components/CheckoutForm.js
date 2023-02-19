import React from "react";

const CheckoutForm = ({
    formData,
    setFormData,
    title,
    lordIcon,
    isDisabled = false,
    setIsInvalid,
    errors,
    setErrors,
}) => {
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const validateZip = (zip) => {
        return String(zip)
            .toLowerCase()
            .match(/^[1-9][0-9]{5}$/);
    };
    const validatePhone = (phone) => {
        return String(phone)
            .toLowerCase()
            .match(/^[789]\d{9}$/);
    };

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
                            <div class="input-group has-validation">
                                <label className="l-check" htmlFor="fname">
                                    <i className="fa fa-user" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="fullname"
                                    placeholder="Name"
                                    required
                                    style={formStyle}
                                    value={formData.name}
                                    className={
                                        "form-cotnrol " +
                                        (errors.name && "is-invalid")
                                    }
                                    onChange={(e) => {
                                        if (e.target.value.length <= 2) {
                                            setErrors({
                                                ...errors,
                                                name: true,
                                            });
                                        } else {
                                            setErrors({
                                                ...errors,
                                                name: false,
                                            });
                                        }
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        });
                                    }}
                                    disabled={isDisabled}
                                />
                                <div
                                    id="validationServerUsernameFeedback"
                                    class="invalid-feedback"
                                >
                                    min 2 characters required
                                </div>
                            </div>
                            <div class="input-group has-validation">
                                <label className="l-check" htmlFor="email">
                                    <i className="fa fa-envelope" /> Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className={
                                        "form-cotnrol " +
                                        (errors.email && "is-invalid")
                                    }
                                    required
                                    style={formStyle}
                                    value={formData.email}
                                    onChange={(e) => {
                                        if (!validateEmail(e.target.value)) {
                                            setErrors({
                                                ...errors,
                                                email: true,
                                            });
                                        } else {
                                            setErrors({
                                                ...errors,
                                                email: false,
                                            });
                                        }
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        });
                                    }}
                                    disabled={isDisabled}
                                />
                                <div
                                    id="validationServerUsernameFeedback"
                                    class="invalid-feedback"
                                >
                                    Please enter a valid email
                                </div>
                            </div>
                            <div class="input-group has-validation">
                                <label className="l-check" htmlFor="adr">
                                    <i className="fa fa-address-card-o" />
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="adr"
                                    name="address"
                                    placeholder="Address"
                                    className={
                                        "form-cotnrol " +
                                        (errors.address && "is-invalid")
                                    }
                                    required
                                    style={formStyle}
                                    value={formData.address}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 5) {
                                            setErrors({
                                                ...errors,
                                                address: true,
                                            });
                                        } else {
                                            setErrors({
                                                ...errors,
                                                address: false,
                                            });
                                        }
                                        setFormData({
                                            ...formData,
                                            address: e.target.value,
                                        });
                                    }}
                                    disabled={isDisabled}
                                />
                                <div
                                    id="validationServerUsernameFeedback"
                                    class="invalid-feedback"
                                >
                                    min 5 characters required
                                </div>
                            </div>
                            <div class="input-group has-validation">
                                <label className="l-check" htmlFor="city">
                                    <i className="fa fa-institution" /> City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="City"
                                    className={
                                        "form-cotnrol " +
                                        (errors.city && "is-invalid")
                                    }
                                    required
                                    style={formStyle}
                                    value={formData.city}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 2) {
                                            setErrors({
                                                ...errors,
                                                city: true,
                                            });
                                        } else {
                                            setErrors({
                                                ...errors,
                                                city: false,
                                            });
                                        }
                                        setFormData({
                                            ...formData,
                                            city: e.target.value,
                                        });
                                    }}
                                    disabled={isDisabled}
                                />
                                <div
                                    id="validationServerUsernameFeedback"
                                    class="invalid-feedback"
                                >
                                    min 2 characters required
                                </div>
                            </div>
                            <div class="input-group has-validation">
                                <label className="l-check" htmlFor="state">
                                    <i className="fa fa-map" /> State
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    placeholder="State"
                                    required
                                    className={
                                        "form-cotnrol " +
                                        (errors.state && "is-invalid")
                                    }
                                    style={formStyle}
                                    value={formData.state}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 2) {
                                            setErrors({
                                                ...errors,
                                                state: true,
                                            });
                                        } else {
                                            setErrors({
                                                ...errors,
                                                state: false,
                                            });
                                        }
                                        setFormData({
                                            ...formData,
                                            state: e.target.value,
                                        });
                                    }}
                                    disabled={isDisabled}
                                />
                                <div
                                    id="validationServerUsernameFeedback"
                                    class="invalid-feedback"
                                >
                                    min 2 characters required
                                </div>
                            </div>
                            <div class="input-group has-validation">
                                <label className="l-check" htmlFor="zip">
                                    <i className="fa fa-map-pin mr-1" />
                                    Zip
                                </label>
                                <input
                                    type="text"
                                    id="zip"
                                    name="pin"
                                    placeholder="Pincode"
                                    className={
                                        "form-cotnrol " +
                                        (errors.zip && "is-invalid")
                                    }
                                    required
                                    style={formStyle}
                                    value={formData.zip}
                                    onChange={(e) => {
                                        if (!validateZip(e.target.value)) {
                                            setErrors({
                                                ...errors,
                                                zip: true,
                                            });
                                        } else {
                                            setErrors({
                                                ...errors,
                                                zip: false,
                                            });
                                        }
                                        setFormData({
                                            ...formData,
                                            zip: e.target.value,
                                        });
                                    }}
                                    disabled={isDisabled}
                                />
                                <div
                                    id="validationServerUsernameFeedback"
                                    class="invalid-feedback"
                                >
                                    Enter Valid PIN
                                </div>
                            </div>
                            <div class="input-group has-validation">
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
                                    className={
                                        "form-cotnrol " +
                                        (errors.phoneNo && "is-invalid")
                                    }
                                    style={formStyle}
                                    value={formData.phoneNo}
                                    onChange={(e) => {
                                        if (!validatePhone(e.target.value)) {
                                            setErrors({
                                                ...errors,
                                                phoneNo: true,
                                            });
                                        } else {
                                            setErrors({
                                                ...errors,
                                                phoneNo: false,
                                            });
                                        }
                                        setFormData({
                                            ...formData,
                                            phoneNo: e.target.value,
                                        });
                                    }}
                                    disabled={isDisabled}
                                />
                                <div
                                    id="validationServerUsernameFeedback"
                                    class="invalid-feedback"
                                >
                                    Enter Valid phone
                                </div>
                            </div>
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
