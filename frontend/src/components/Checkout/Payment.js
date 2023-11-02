import React, { Fragment, useEffect, useRef, useState } from "react";
//  import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../Layout/MetaData";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import "./Payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
// import { createOrder, clearErrors } from "../../actions/orderAction";
import { useNavigate } from "react-router";

const Payment = () => {

  const [payableAmount, setPayableAmount] = useState("");
  const [billingDetails, setBillingDetails] = useState("");

  const payBtn = useRef(null);
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);


  useEffect(() => {
    const storedPayableAmount = localStorage.getItem("payableAmount");

    if (storedPayableAmount) {
      setPayableAmount(storedPayableAmount);
    }

    const storedBillingDetails = localStorage.getItem("shippingData");

    if (storedBillingDetails) {
      setBillingDetails(storedBillingDetails);
    }

  }, []);

  const paymentData = {
    amount: (payableAmount * 100),
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/v1/payment/process/card",
        paymentData,
        config,
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: billingDetails.address,
              city: billingDetails.city,
              state: billingDetails.state,
              postal_code: billingDetails.pinCode,
              country: billingDetails.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;
        alert.error(result.error.message);
        console.log(result.error.message)
      } else {
        if (result.paymentIntent.status === "succeeded") {
          navigate("/success");
        } else {
          alert.error("There's some issue while processing payment")
        }
      }

    } catch (error) {
      payBtn.current.disabled = false;
      alert.error(error.response.data.message);
    }

  }


  return (
    <Fragment>
      <MetaData title="Payment" />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div>
          <input
            type="submit"
            value={`Pay - ₹${payableAmount}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  )
}

export default Payment;

