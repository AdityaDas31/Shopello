import React, { Fragment, useEffect, useState } from 'react';
import './LoginWithOtp.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp, clearErrors, loginOtp } from '../../actions/userAction';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import Loader from '../Layout/Loader/Loader';


const LoginWithOtp = () => {
    const [otpLoginEmail, setOtpLoginEmail] = useState("");
    const [otpLoginPassword, setOtpLoginPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [countdown, setCountdown] = useState(60);// 15
    const [timerId, setTimerId] = useState(null);
    const [buttonColor, setButtonColor] = useState('green');
    const [showFirstForm, setShowFirstForm] = useState(true);
    const [showSecondForm, setShowSecondForm] = useState(false);



    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const { error, loading, isAuthenticated } = useSelector((state) => state.user);


    const showFirst = () => {
        setShowFirstForm(true);
        setShowSecondForm(false);

        setIsButtonDisabled(false);
        setButtonColor('green');
        clearInterval(timerId);
    };

    const sendotp = (e) => {
        e.preventDefault();

        dispatch(sendOtp(otpLoginEmail));

        setShowFirstForm(false);
        setShowSecondForm(true);

        setIsButtonDisabled(true);

        setCountdown(60);//15

        setButtonColor('red');

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
            setButtonColor('green');
            clearInterval(timerId);
        }, 60000);
    }

    const otploginsubmit = (e) => {
        e.preventDefault();
        dispatch(loginOtp(otpLoginEmail, otpLoginPassword));
        alert.success("Welcome Back")
    }


    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isAuthenticated) {
            navigate("/profile")
        }

        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
    }, [dispatch, error, alert, navigate, isAuthenticated, timerId]);



    return (
        <Fragment>
            {loading ? <Loader /> : <Fragment>
                <div className='LoginContainer'>
                    <div className='LoginBox'>
                        <h1>Login With OTP</h1>
                        {showFirstForm && (
                            <form className='loginOtpForm'>
                                <div className='loginOtpEmail'>
                                    <MailOutlineIcon />
                                    <input
                                        type='email'
                                        placeholder="Enter your email"
                                        required
                                        value={otpLoginEmail}
                                        onChange={(e) => setOtpLoginEmail(e.target.value)}
                                    />
                                </div>
                                <input type='submit' value='Get OTP' onClick={sendotp} disabled={isButtonDisabled} className={buttonColor} />
                            </form>
                        )}

                        {showSecondForm && (
                            <form className='loginOtpForm' onSubmit={otploginsubmit}>
                                <div className='changeEmail'>
                                    Email: {otpLoginEmail}
                                    <span onClick={showFirst} disabled={!isButtonDisabled}>Change</span>
                                </div>
                                <div className='loginPassword'>
                                    <LockOpenIcon />
                                    <input
                                        type='text'
                                        placeholder='Enter your OTP'
                                        required
                                        value={otpLoginPassword}
                                        onChange={(e) => setOtpLoginPassword(e.target.value)}
                                    />
                                </div>
                                {/* <div className='resendOtp'>{isButtonDisabled ? `Resend OTP in (${countdown} sec)` : ' '}</div> */}
                                <input type='submit' value={isButtonDisabled ? `Resend OTP in 00:${countdown} sec` : `Resend OTP`} onClick={sendotp} disabled={isButtonDisabled} className={buttonColor} />
                                <input type='submit' value="Login" className='loginOtpBtn' />
                            </form>
                        )}

                    </div>
                </div>
            </Fragment>}
        </Fragment>
    )
}

export default LoginWithOtp;
