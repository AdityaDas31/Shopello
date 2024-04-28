import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PriceSidebar from './PriceSidebar';
import Stepper from './Stepper';
// import {
//     CardNumberElement,
//     CardCvcElement,
//     CardExpiryElement,
//     useStripe,
//     useElements,
// } from '@stripe/react-stripe-js';
import { clearErrors } from '../../actions/orderAction';
import { useSnackbar } from 'notistack';
import { post } from '../../utils/paytmForm';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MetaData from '../Layouts/MetaData';
import { useAlert } from 'react-alert';
import QRCode from 'qrcode.react';
import ReCAPTCHA from 'react-google-recaptcha';

const Payment = () => {

    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const alert = useAlert();
    // const stripe = useStripe();
    // const elements = useElements();
    // const paymentBtn = useRef(null);

    const [payDisable, setPayDisable] = useState(false);
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const { error } = useSelector((state) => state.newOrder);

    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const paymentData = {
        amount: Math.round(totalPrice),
        email: user.email,
        phoneNo: shippingInfo.phoneNo,
    };

    const order = {
        shippingInfo,
        orderItems: cartItems,
        totalPrice,
    }

    const handleCaptchaChange = (value) => {
        setIsCaptchaVerified(true); // Set captcha verification status to true
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        // paymentBtn.current.disabled = true;
        setPayDisable(true);
    };

    const renderAdditionalContent = () => {
        if (selectedPaymentMethod === 'upi') {
            return (
                <div>
                    {/* Render your QR code component here */}
                    <QRCode value={`UPI:${totalPrice}`} />
                    <p>Scan this QR code to make payment through UPI</p>
                </div>
            );
        }

        // Add conditions for other payment methods if needed
        return null;
    };

    const renderPaymentForm = () => {
        if (selectedPaymentMethod === 'card') {
            return (
                <div className="container mx-auto mt-10">
                    <form className="max-w-xl mx-auto bg-white p-8 rounded shadow-lg">
                        <div className="mb-4">
                            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Enter Card Number:</label>
                            <input
                                type="text"
                                id="card-number"
                                placeholder="1234 5678 9012 3456"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md h-12 px-3 py-2 focus:ring-red-500 focus:border-blue-500 outline-none"
                            // value={cardNumber}
                            // onChange={(e) => setCardNumber(e.target.value)}
                            />
                        </div>


                        <div className="grid grid-cols-3 gap-4 mb-4">

                            <div className="col-span-2">
                                <label htmlFor="expiry-month" className="block text-sm font-medium text-gray-700">Valid thru:</label>
                                <div className="flex">
                                    <div className="block w-full border border-gray-300 rounded-l-md h-12 px-3 py-2 focus:ring-red-500 focus:border-blue-500 outline-none">
                                        <select
                                            id="expiry-month"
                                            required
                                            className="block w-full bg-white border-0"
                                        // value={expiryMonth}
                                        // onChange={(e) => setExpiryMonth(e.target.value)}
                                        >
                                            {/* Month options */}
                                        </select>
                                    </div>
                                    <div className="block w-full border-t border-b border-r border-gray-300 rounded-r-md h-12 px-3 py-2 focus:ring-red-500 focus:border-blue-500 outline-none">
                                        <select
                                            id="expiry-year"
                                            required
                                            className="block w-full bg-white border-0"
                                        // value={expiryYear}
                                        // onChange={(e) => setExpiryYear(e.target.value)}
                                        >
                                            {/* Year options */}
                                        </select>
                                    </div>
                                </div>
                            </div>


                            {/* CVV Input */}
                            <div>
                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV:</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    placeholder="123"
                                    required
                                    className="block w-full border border-gray-300 rounded-md h-12 px-3 py-2 focus:ring-red-500 focus:border-blue-500 outline-none"
                                //   value={cvv}
                                //   onChange={(e) => setCvv(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-primary-orange text-white p-3 rounded hover:bg-orange-600">PAY ₹899</button>
                    </form>
                </div>
            );
        }
        return null;
    };

    const renderCaptcha = () => {
        if (selectedPaymentMethod === 'cod') {
            return (
                <div className="mt-4">
                    <ReCAPTCHA
                        sitekey="YOUR_SITE_KEY"
                        onChange={handleCaptchaChange}
                    />
                </div>
            );
        }
        return null;
    };
    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
            alert.error(error);
        }
    }, [dispatch, error, alert]);


    return (
        <>
            <MetaData title="Flipkart: Secure Payment | Paytm" />

            <main className="w-full mt-20">

                {/* <!-- row --> */}
                <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">

                    {/* <!-- cart column --> */}
                    <div className="flex-1">

                        <Stepper activeStep={3}>
                            <div className="w-full bg-white">

                                <form onSubmit={(e) => submitHandler(e)} autoComplete="off" className="flex flex-col justify-start gap-2 w-full mx-8 my-4 overflow-hidden">
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="payment-radio-group"
                                            defaultValue="paytm"
                                            name="payment-radio-button"
                                            value={selectedPaymentMethod}
                                            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                                        >
                                            {/* <FormControlLabel
                                                value="paytm"
                                                control={<Radio />}
                                                label={
                                                    <div className="flex items-center gap-4">
                                                        <img draggable="false" className="h-6 w-6 object-contain" src="https://rukminim1.flixcart.com/www/96/96/promos/01/09/2020/a07396d4-0543-4b19-8406-b9fcbf5fd735.png" alt="Paytm Logo" />
                                                        <span>Paytm</span>
                                                    </div>
                                                }
                                            /> */}
                                            <FormControlLabel
                                                value="upi"
                                                control={<Radio />}
                                                label={
                                                    <div className="flex items-center gap-4">
                                                        <img draggable="false" className="h-6 w-6 object-contain" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif" alt="Paytm Logo" />
                                                        <span>UPI</span>
                                                        {renderAdditionalContent()}
                                                    </div>
                                                }
                                            />
                                            <FormControlLabel
                                                value="wallets"
                                                control={<Radio />}
                                                label={
                                                    <div className="flex items-center gap-4">
                                                        <img draggable="false" className="h-6 w-6 object-contain" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/Wallets.gif" alt="Paytm Logo" />
                                                        <span>Wallets</span>
                                                    </div>
                                                }
                                            />
                                            <FormControlLabel
                                                value="card"
                                                control={<Radio />}
                                                label={
                                                    <div className="flex items-center gap-4">
                                                        {/* <img draggable="false" className="h-6 w-6 object-contain" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/Wallets.gif" alt="Paytm Logo" /> */}
                                                        <span>Credit / Debit / ATM Card</span>
                                                        {renderPaymentForm()}
                                                    </div>
                                                }
                                            />
                                            <FormControlLabel
                                                value="netbanking"
                                                control={<Radio />}
                                                label={
                                                    <div className="flex items-center gap-4">
                                                        {/* <img draggable="false" className="h-6 w-6 object-contain" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/Wallets.gif" alt="Paytm Logo" /> */}
                                                        <span>Net Banking</span>
                                                    </div>
                                                }
                                            />
                                            <FormControlLabel
                                                value="cod"
                                                control={<Radio />}
                                                label={
                                                    <div className="flex items-center gap-4">
                                                        {/* <img draggable="false" className="h-6 w-6 object-contain" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/Wallets.gif" alt="Paytm Logo" /> */}
                                                        <span>Cash on Delivery</span>
                                                        {renderCaptcha()}
                                                    </div>
                                                }
                                            />
                                        </RadioGroup>
                                    </FormControl>

                                    <input type="submit" value={`Pay ₹${totalPrice.toLocaleString()}`} disabled={payDisable ? true : false} className={`${payDisable ? "bg-primary-grey cursor-not-allowed" : "bg-primary-orange cursor-pointer"} w-1/2 sm:w-1/4 my-2 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none`} />

                                </form>

                                {/* stripe form */}
                                {/* <form onSubmit={(e) => submitHandler(e)} autoComplete="off" className="flex flex-col justify-start gap-3 w-full sm:w-3/4 mx-8 my-4">
                                <div>
                                    <CardNumberElement />
                                </div>
                                <div>
                                    <CardExpiryElement />
                                </div>
                                <div>
                                    <CardCvcElement />
                                </div>
                                <input ref={paymentBtn} type="submit" value="Pay" className="bg-primary-orange w-full sm:w-1/3 my-2 py-3.5 text-sm font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none cursor-pointer" />
                            </form> */}
                                {/* stripe form */}

                            </div>
                        </Stepper>
                    </div>

                    <PriceSidebar cartItems={cartItems} />
                </div>
            </main>
        </>
    );
};

export default Payment;