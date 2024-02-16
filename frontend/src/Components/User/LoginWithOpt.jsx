import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import BackdropLoader from '../Layouts/BackdropLoader';
import { clearErrors, sendOtp, loginOtp } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import MetaData from '../Layouts/MetaData';

const LoginWithOpt = () => {

    const [otpLoginEmail, setOtpLoginEmail] = useState("");
    const [otpLoginPassword, setOtpLoginPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [countdown, setCountdown] = useState(60);// 15
    const [timerId, setTimerId] = useState(null);
    const [showFirstForm, setShowFirstForm] = useState(true);
    const [showSecondForm, setShowSecondForm] = useState(false);

    const { error, loading, isAuthenticated } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();

    const showFirst = () => {
        setShowFirstForm(true);
        setShowSecondForm(false);

        setIsButtonDisabled(false);
        // setButtonColor('green');
        clearInterval(timerId);
    };

    const sendotp = (e) => {
        e.preventDefault();
        dispatch(sendOtp(otpLoginEmail));
        setShowFirstForm(false);
        setShowSecondForm(true);
        setIsButtonDisabled(true);
        setCountdown(60);//15

        const id = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 1) {
                    setIsButtonDisabled(false);
                    clearInterval(id);
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);

        setTimerId(id);

        setTimeout(() => {
            setIsButtonDisabled(false);
            // setButtonColor('green');
            clearInterval(timerId);
        }, 60000);
    }

    const otploginsubmit = (e) => {
        e.preventDefault();
        dispatch(loginOtp(otpLoginEmail, otpLoginPassword));
        alert.success("Welcome Back")
    }

    useEffect(() =>{

        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

        if(isAuthenticated){
            navigate("/")
        }

        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
},[dispatch, error, alert, navigate, isAuthenticated, timerId]);

    return (
        <>
            <MetaData title="Login | Flipkart" />

            {loading && <BackdropLoader />}
            <main className="w-full mt-12 sm:pt-20 sm:mt-0">

                {/* <!-- row --> */}
                <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
                    {/* <!-- sidebar column  --> */}
                    <div className="loginSidebar bg-primary-blue p-10 pr-12 hidden sm:flex flex-col gap-4 w-2/5">
                        <h1 className="font-medium text-white text-3xl">Login</h1>
                        <p className="text-gray-200 text-lg">Get access to your Orders, Wishlist and Recommendations</p>
                    </div>
                    {/* <!-- sidebar column  --> */}

                    {/* <!-- login column --> */}
                    <div className="flex-1 overflow-hidden">

                        {/* <!-- edit info container --> */}
                        <div className="text-center py-10 px-4 sm:px-14">

                            {/* <!-- input container --> */}
                            {/* <form onSubmit={handleLogin}> */}

                            {showFirstForm && (
                                <form>
                                    <div className="flex flex-col w-full gap-4">

                                        <TextField
                                            fullWidth
                                            id="email"
                                            label="Email"
                                            type="email"
                                            value={otpLoginEmail}
                                            onChange={(e) => setOtpLoginEmail(e.target.value)}
                                            required
                                        />
                                        {/* <span className="text-xxs text-red-500 font-medium text-left mt-0.5">Please enter valid Email ID/Mobile number</span> */}

                                        {/* <!-- button container --> */}
                                        <div className="flex flex-col gap-2.5 mt-2 mb-32">
                                            <p className="text-xs text-primary-grey text-left">Login With Password <Link to='/login' className="text-primary-blue"> Click Here</Link></p>
                                            <button type="submit" className="text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium" onClick={sendotp} disabled={isButtonDisabled}>Get OTP</button>
                                        </div>
                                        {/* <!-- button container --> */}

                                    </div>
                                </form>
                            )}

                            {showSecondForm && (
                                <form onSubmit={otploginsubmit}>
                                    <div className="flex flex-col w-full gap-4">
                                        <p className='text-base text-primary-grey text-left'>Email: {otpLoginEmail} <span className='text-primary-blue cursor-pointer hover:underline' onClick={showFirst} disabled={!isButtonDisabled}>Change</span></p>
                                        <TextField
                                            fullWidth
                                            id="email"
                                            label="Enter Your OTP"
                                            type="text"
                                            value={otpLoginPassword}
                                            onChange={(e) => setOtpLoginPassword(e.target.value)}
                                            required
                                        />
                                        {/* <span className="text-xxs text-red-500 font-medium text-left mt-0.5">Please enter valid Email ID/Mobile number</span> */}

                                        {/* <!-- button container --> */}
                                        <div className="flex flex-col gap-2.5 mt-2 mb-32">
                                            <button
                                                type="submit"
                                                className={`text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium ${isButtonDisabled ? 'cursor-not-allowed' : ''}`}
                                                onClick={sendotp}
                                                disabled={isButtonDisabled}
                                            >
                                                {isButtonDisabled ? `Resend OTP in 00:${countdown} sec` : `Resend OTP`}
                                            </button>
                                            <button type="submit" className="text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium">Login</button>
                                        </div>
                                        {/* <!-- button container --> */}

                                    </div>
                                </form>
                            )}
                            {/* <!-- input container --> */}
                        </div>
                        {/* <!-- edit info container --> */}

                    </div>
                    {/* <!-- login column --> */}
                </div>
                {/* <!-- row --> */}

            </main>
        </>
    )
}

export default LoginWithOpt
