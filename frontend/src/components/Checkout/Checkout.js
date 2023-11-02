import React, { Fragment } from "react";
import "./Checkout.css";
import Header from "../miscellaneous/Header/Header";
import Footer from "../miscellaneous/Footer/Footer";
import { useCart } from "../../CartContext";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Country, State } from 'country-state-city';
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { FormControlLabel, Radio, RadioGroup, Typography } from "@material-ui/core";
import Loader from "../Layout/Loader/Loader";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import MetaData from "../Layout/MetaData";

const Checkout = () => {
    const { cart } = useCart();

    const navigate =  useNavigate()

    const [show, setShow] = useState(false);


    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [states, setStates] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [selectedOption, setSelectedOption] = useState(null);

    const [formData, setFormData] = useState({
        address: '',
        city: '',
        pinCode: '',
        phoneNumber: '',
        country: '',
        state: '',
    });

  const alert = useAlert();

    const countries = Country.getAllCountries();

    const handleCountryChange = (event) => {
        const countryId = event.target.value;
        setSelectedCountry(countryId);
        const countryStates = State.getStatesOfCountry(countryId);
        setStates(countryStates);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const payableAmount = `${cart.reduce((acc, item) => acc + item.quantity * item.price,0 )}`;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formValues = {
            address: e.target.address.value,
            city: e.target.city.value,
            pinCode: e.target.pinCode.value,
            phoneNumber: e.target.phoneNumber.value,
            country: selectedCountry,
            state: selectedState,
        };
        if (formValues) {
            localStorage.setItem('shippingData', JSON.stringify(formValues));
        }
        setFormData(formValues);
        setShow(false)
    };


    const handleEditClick = () => {
        const savedFormData = JSON.parse(localStorage.getItem('shippingData'));

        if (savedFormData && typeof savedFormData === 'object') {
            setFormData(savedFormData);
            setSelectedCountry(savedFormData.country);
            setSelectedState(savedFormData.state);
        }

        setIsEditing(true);
        setShow(true);
    };


    const savedFormData = JSON.parse(localStorage.getItem('shippingData'));

    const fullAddress = savedFormData ? `${savedFormData.address}, ${savedFormData.city}, ${savedFormData.state}, ${savedFormData.pinCode}, ${savedFormData.country}`: '';

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const placeOrder = () => {
        localStorage.setItem('payableAmount', payableAmount);
        if (selectedOption === 'upi') {
            alert.success("this is a test alert for upi");
        }

        if (selectedOption === 'card') {
            navigate("/process/card");
        }        

        if (selectedOption === 'netBanking') {
            alert.success("this is a test alert for netBanking");
        }

        if (selectedOption === 'cod') {
            navigate("/success");
        }        


        // localStorage.removeItem('cart');
        // setIsLoading(true);

        // setTimeout(() => {
        //     window.location.reload();
        // }, 1000);
    }

    // useEffect(() => {
    //     if (isLoading) {
    //         const loadingTimer = setTimeout(() => {
    //             setIsLoading(false);
    //         }, 1000);

    //         return () => {
    //             clearTimeout(loadingTimer);
    //         };
    //     }
    // }, [isLoading]);






    return (
        <Fragment>
            <MetaData title="Checkout"/>

            {isLoading ? <Loader /> : <>
                <Header />
                <div className="untree_co-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-12">
                                {/* <div className="border p-4 rounded" role="alert">
		            Returning customer? <a href="#">Click here</a> to login
		          </div> */}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-5 mb-md-0">
                                <h2 className="h3 mb-3 text-black">Billing Details</h2>
                                <div className="p-3 p-lg-5 border bg-white">

                                    {/* <Button variant="primary" onClick={handleShow}>
                                    <i class="fa-solid fa-plus"></i> Add Shipping Address
                                </Button> */}

                                    {savedFormData && typeof savedFormData === 'object' ? (
                                        // <div>
                                        //     <p>Address: {savedFormData.address}</p>
                                        //     <p>City: {savedFormData.city}</p>
                                        //     <p>Pin Code: {savedFormData.pinCode}</p>
                                        //     <p>Phone Number: {savedFormData.phoneNumber}</p>
                                        //     <p>Country: {savedFormData.country}</p>
                                        //     <p>State: {savedFormData.state}</p>
                                        // <Button variant="primary" onClick={handleEditClick}>
                                        //     <i class="fa-solid fa-pen-to-square"></i> Edit Shipping Address
                                        // </Button>
                                        // </div>
                                        <div>
                                            <div className="confirmOrderPage">
                                                <div>
                                                    <div className="confirmshippingArea">
                                                        <Typography>Shipping Info</Typography>
                                                        <div className="confirmshippingAreaBox">
                                                            <div>
                                                                <p>Phone:</p>
                                                                <span>{savedFormData.phoneNumber}</span>
                                                            </div>
                                                            <div>
                                                                <p>Address:</p>
                                                                <span>{fullAddress}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button variant="primary" onClick={handleEditClick} className="edit_btn">
                                                <i class="fa-solid fa-pen-to-square"></i> Edit Shipping Address
                                            </Button>
                                        </div>

                                    ) : (
                                        <Button variant="primary" onClick={handleShow}>
                                            <i class="fa-solid fa-plus"></i> Add Shipping Address
                                        </Button>
                                    )}

                                    {/* <div className="confirmOrderPage">
                                    <div>
                                        <div className="confirmshippingArea">
                                            <Typography>Shipping Info</Typography>
                                            <div className="confirmshippingAreaBox">
                                                <div>
                                                    <p>Phone:</p>
                                                    <span>{savedFormData.phoneNumber}</span>
                                                </div>
                                                <div>
                                                    <p>Address:</p>
                                                    <span>{fullAddress}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}




                                </div>
                            </div>



                            <div className="col-md-6">
                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                                        <div className="p-3 p-lg-5 border bg-white">
                                            <label for="c_code" className="text-black mb-3">
                                                Enter your coupon code if you have one
                                            </label>
                                            <div className="input-group w-75 couponcode-wrap">
                                                <input
                                                    type="text"
                                                    className="form-control me-2"
                                                    id="c_code"
                                                    placeholder="Coupon Code"
                                                    aria-label="Coupon Code"
                                                    aria-describedby="button-addon2"
                                                />
                                                <div className="input-group-append">
                                                    <button
                                                        className="btn btn-style-1 btn-primary btn-block"
                                                        type="button"
                                                        id="button-addon2"
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        <h2 className="h3 mb-3 text-black">Your Order</h2>
                                        <div className="p-3 p-lg-5 border bg-white">
                                            <table className="table site-block-order-table mb-5">
                                                <thead>
                                                    <th>Product</th>
                                                    <th>Total</th>
                                                </thead>
                                                {cart &&
                                                    cart.map((item) => (
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    {item.name} <strong className="mx-2">x</strong>{" "}
                                                                    {item.quantity}
                                                                </td>
                                                                <td>{`₹${item.price * item.quantity}`}</td>
                                                            </tr>
                                                        </tbody>
                                                    ))}
                                                <tbody>
                                                    <tr>
                                                        <td className="text-black font-weight-bold">
                                                            <strong>Cart Gross Total</strong>
                                                        </td>
                                                        <td className="text-black">{`₹${cart.reduce(
                                                            (acc, item) => acc + item.quantity * item.price,
                                                            0
                                                        )}`}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-black font-weight-bold">
                                                            <strong>Total Payable Amount</strong>
                                                        </td>
                                                        <td className="text-black">₹{payableAmount}</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <RadioGroup>
                                                <div className="border p-3 mb-3">
                                                    <h3 className="h6 mb-0">
                                                        <span
                                                            className="d-block"
                                                            data-bs-toggle="collapse"
                                                            href="#collapsebank"
                                                            role="button"
                                                            aria-expanded="false"
                                                            aria-controls="collapsebank"
                                                        >
                                                            <FormControlLabel value="upi" control={<Radio />} label="UPI" labelPlacement="start" onChange={handleOptionChange} />
                                                        </span>
                                                    </h3>
                                                </div>

                                                <div className="border p-3 mb-3">
                                                    <h3 className="h6 mb-0">
                                                        <span
                                                            className="d-block"
                                                            data-bs-toggle="collapse"
                                                            href="#collapsecheque"
                                                            role="button"
                                                            aria-expanded="false"
                                                            aria-controls="collapsecheque"
                                                        >
                                                            <FormControlLabel value="card" control={<Radio />} label="Credit / Debit / ATM Card" labelPlacement="start" onChange={handleOptionChange} />
                                                        </span>
                                                    </h3>
                                                </div>

                                                <div className="border p-3 mb-4">
                                                    <h3 className="h6 mb-0">
                                                        <span
                                                            className="d-block"
                                                            data-bs-toggle="collapse"
                                                            href="#collapsepaypal"
                                                            role="button"
                                                            aria-expanded="false"
                                                            aria-controls="collapsepaypal"
                                                        >
                                                            <FormControlLabel value="netBanking" control={<Radio />} label="Net Banking" labelPlacement="start" onChange={handleOptionChange} />
                                                        </span>
                                                    </h3>
                                                </div>

                                                <div className="border p-3 mb-5">
                                                    <h3 className="h6 mb-0">
                                                        <span
                                                            className="d-block"
                                                            data-bs-toggle="collapse"
                                                            href="#collapsepaypal"
                                                            role="button"
                                                            aria-expanded="false"
                                                            aria-controls="collapsepaypal"
                                                        >
                                                            <FormControlLabel value="cod" control={<Radio />} label="Cash On Delivery" labelPlacement="start" onChange={handleOptionChange} />
                                                        </span>
                                                    </h3>
                                                </div>
                                            </RadioGroup>

                                            <div className="form-group">
                                                <button
                                                    className="btn btn-style-1 btn-primary btn-block "
                                                    onClick={placeOrder}
                                                >
                                                    Place Order
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title >Shipping Address</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <div className="shippingContainer">
                        <div className="shippingBox">
                            <form className="shippingForm" onSubmit={handleFormSubmit}>
                                <div>
                                    <HomeIcon />
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        name="address"
                                        id="address"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <LocationCityIcon />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        name="city"
                                        id="city"
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <PinDropIcon />
                                    <input
                                        type="number"
                                        placeholder="Pin Code"
                                        name="pinCode"
                                        id="pinCode"
                                        value={formData.pinCode}
                                        onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <PhoneIcon />
                                    <input
                                        type="number"
                                        placeholder="Phone Number"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        required
                                    />
                                </div>

                                <div>
                                    <PublicIcon />
                                    <select
                                        id="countrySelect"
                                        value={selectedCountry}
                                        onChange={handleCountryChange}
                                    >
                                        <option value="">Country</option>
                                        {Country &&
                                            Country.getAllCountries().map((item) => (
                                                <option key={item.isoCode} value={item.isoCode}>
                                                    {item.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                {selectedCountry && (

                                    <div>
                                        <TransferWithinAStationIcon />
                                        <select
                                            id="stateSelect"
                                            value={selectedState}
                                            onChange={(e) => setSelectedState(e.target.value)}
                                        >
                                            <option value="">State</option>
                                            {State &&
                                                State.getStatesOfCountry(selectedCountry).map((item) => (
                                                    <option key={item.isoCode} value={item.isoCode}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                )}

                                <input
                                    type="submit"
                                    value="Continue"
                                    className="shippingBtn"
                                    disabled={selectedState ? false : true}
                                />
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
};

export default Checkout;
