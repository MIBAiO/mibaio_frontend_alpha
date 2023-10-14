import React, { useEffect, useState } from 'react'
import Input from './Input';

const CheckoutAddressForm = ({
    formData,
    setFormData,
    title,
    lordIcon,
    isDisabled = false,
    setIsInvalid,
    errors,
    setErrors,
}) => {

    console.log(formData)

    useEffect(() => {
        console.log("hi")
        console.log(formData);
    }, [formData]);

    //Validation Methods: 
    //Validate Name 
    const validateName = (name) => {
        if (name.length < 3) {
            setIsInvalid(true);
            setErrors({ ...errors, name: "Name must be atleast 3 characters long" })
        }
        else {
            setIsInvalid(false);
            setErrors({ ...errors, name: "" })
        }
    }
    //Validate Email
    const validateEmail = (email) => {
        return String(email).match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    }
    //Validate Phone Number
    const validatePhone = (phone) => {
        return String(phone)
            .toLowerCase()
            .match(/^[789]\d{9}$/)
    }

    //Validate Pin/Zip Code
    const validatePin = (pin) => {
        return String(pin)
            .toLowerCase()
            .match(/^[1-9][0-9]{5}$/)
    }



    //Methods: Set Form Data
    const setFullName = (e) => {
        const fullName = e.target.value;

        if (fullName.length < 2) {
            setErrors({ ...errors, full_name: true });
        } else {
            setErrors({ ...errors, full_name: false });
            setFormData({ ...formData, full_name: fullName })
        }
    }
    //SetAddress
    const setAddress1 = (e) => {
        const address1 = e.target.value;
        if (address1.length > 5) {
            setErrors({ ...errors, address1: false });
            setFormData({ ...formData, address1: address1 })
        } else {
            setErrors({ ...errors, address1: true });
        }
    }
    const setAddress2 = (e) => {
        const address2 = e.target.value;
        if (address2.length > 3) {
            setErrors({ ...errors, address2: false });
            setFormData({ ...formData, address2: address2 })
        } else {
            setErrors({ ...errors, address2: true });
        }
    }
    const setLandmark = (e) => {
        const landmark = e.target.value;
        if (landmark.length > 5) {
            setErrors({ ...errors, landmark: false });
            setFormData({ ...formData, landmark: landmark })
        } else {
            setErrors({ ...errors, landmark: true });
        }
    }
    //Set Pincode
    const setPincode = (pincode) => {
        if (!validatePin(pincode)) {
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

    }
    //Set City : 
    const setCity = (city) => {
        if (city.length < 3) {
            setErrors({
                ...errors,
                city: true,
            });
        } else {
            setFormData({ ...formData, city: city })
            setErrors({
                ...errors,
                city: false,
            })
        }
    }
    //Set State:
    const setState = (state) => {
        if (state.length < 3) {
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
    }

    //Set Email
    const setEmail = (email) => {
        if (validateEmail(email)) {
            setErrors({
                ...errors,
                email: false,
            });
            setFormData({ ...formData, email: email })
        } else {
            setErrors({
                ...errors,
                email: true,
            });
        }
    }

    //set Phone
    const setPhone = (phone) => {
        if (validatePhone(phone)) {
            setErrors({
                ...errors,
                phone: false,
            });
            setFormData({ ...formData, phoneNo: phone })
        } else {
            setErrors({
                ...errors,
                phone: true,
            });
        }
    }
    return (
        <div className="new-address-fields">
            <Input
                label="Full Name"
                simple={true}
                initialValue={formData.full_name}
                onChange={(e) => setFullName(e)}
            />
            {
                errors.full_name ? <div className='text-danger mb-2 mt-0 ml-1' style={{ fontSize: ".8rem", fontWeight: "500" }}>Please enter a valid name</div> : ''
            }
            {/* <Input label="Last Name" initialValue={""} simple={true} onChange={(value) => setFirstName(value)} /> */}
            <Input
                label="Address Line 1"
                initialValue={formData.address1}
                simple={true}
                value={formData.address1}
                onChange={(e) => { setAddress1(e); }} />
            {
                errors.address1 ? <div className='text-danger mb-2 mt-0 ml-1' style={{ fontSize: ".8rem", fontWeight: "500" }}>Please enter a valid Address!</div> : ''
            }
            <Input
                label="Address Line 2"
                initialValue={formData.address2}
                simple={true}
                value={formData.address2}
                onChange={(e) => { setAddress2(e); }} />
            {
                errors.address2 ? <div className='text-danger mb-2 mt-0 ml-1' style={{ fontSize: ".8rem", fontWeight: "500" }}>Please enter a valid address line 2</div> : ''
            }
            <Input
                label="Landmark"
                initialValue={formData.landmark}
                simple={true}
                value={formData.landmark}
                onChange={(e) => { setLandmark(e); }} />
            {
                errors.landmark ? <div className='text-danger mb-2 mt-0 ml-1' style={{ fontSize: ".8rem", fontWeight: "500" }}>Please enter a valid Landmark</div> : ''
            }
            <Input
                label="Pin Code"
                initialValue={formData.zip}
                simple={true}
                value={formData.zip}
                onChange={(e) => setPincode(e.target.value)} />
            {
                errors.zip ? <div className='text-danger mb-2 mt-0 ml-1' style={{ fontSize: ".8rem", fontWeight: "500" }}>Please enter a valid pincode</div> : ''
            }
            <Input
                label="City"
                initialValue={formData.city}
                simple={true}
                value={formData.city}
                onChange={(e) => setCity(e.target.value)} />
            {
                errors.city ? <div className='text-danger mb-2 mt-0 ml-1' style={{ fontSize: ".8rem", fontWeight: "500" }}>Please enter valid city</div> : ''
            }
            <Input
                label="State"
                initialValue={formData.state}
                simple={true}
                value={formData.state}
                onChange={(e) => setState(e.target.value)} />
            {
                errors.state ? <div className='text-danger mb-2 mt-0 ml-1' style={{ fontSize: ".8rem", fontWeight: "500" }}>Please enter valid state</div> : ''
            }

            <h6 className="mt-5">What is Your Contact Information?</h6>
            <Input label="Email Address"
                initialValue={formData.email}
                simple={true} value={formData.email}
                onChange={(e) => setEmail(e.target.value)} />
            {
                errors.email ? <div className='text-danger mb-2 mt-0 ml-1' style={{ fontSize: ".8rem", fontWeight: "500" }}>Please enter valid email</div> : ''
            }
            <Input label="Mobile Number"
                initialValue={formData.phoneNo}
                simple={true} value={formData.phoneNo}
                onChange={(e) => setPhone(e.target.value)} />

            {
                errors.phone ? <div className='text-danger mb-2 mt-0 ml-1' style={{ fontSize: ".8rem", fontWeight: "500" }}>Please enter valid phone</div> : ''
            }

        </div>
    )
}

export default CheckoutAddressForm