import React, { Fragment, useEffect, useState } from 'react';
import './OrderSuccess.css';
import Loader from '../Layout/Loader/Loader';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(5);

  const navigate = useNavigate()


  // useEffect(() => {
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false); 
  //     localStorage.removeItem('cart');

  //     setTimeout(() => {
  //       navigate('/');
  //       window.location.reload();
  //     }, 5000);

  //   }, 5000);

  // }, [navigate]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    } else if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else {
      setTimeout(() => {
        localStorage.removeItem('cart');
        navigate('/');
        window.location.reload();
      }, 1000);
    }
  }, [isLoading, countdown, navigate]);







  return (
    <Fragment>
      {isLoading ? <Loader /> : <Fragment>
        <div className="svg-container">
          <p>Redirecting to the home page in {countdown} seconds...</p>
          <svg className="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
            <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22" />
            <path className="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17" />
          </svg>
          {/* <p>Redirecting to the home page in {countdown} seconds...</p> */}
          <p>Your Order has been Placed successfully!!</p>
        </div>
      </Fragment>}
    </Fragment>
  )
}

export default OrderSuccess
