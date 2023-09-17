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
    const [otpLoginPassword, setOtpLoginPassword] = useState("")
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const { error, loading, isAuthenticated } = useSelector((state) => state.user);

    const sendotp = (e) => {
        e.preventDefault();
        dispatch(sendOtp(otpLoginEmail));
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
    }, [dispatch, error, alert, navigate, isAuthenticated])


    return (
        <Fragment>
            {loading ? <Loader /> : <Fragment>
                <div className='LoginContainer'>
                    <div className='LoginBox'>
                        <h1>Login With OTP</h1>
                        <form className='loginOtpForm' onSubmit={otploginsubmit}>
                            <div className='loginOtpEmail'>
                                <MailOutlineIcon />
                                <input
                                    type='email'
                                    placeholder="Enter your email"
                                    required
                                    value={otpLoginEmail}
                                    onChange={(e) => setOtpLoginEmail(e.target.value)}
                                />
                                <input type='submit' value='Get OTP' onClick={sendotp} />
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
                            <input type='submit' value="Login" className='loginOtpBtn' />
                        </form>

                    </div>
                </div>
            </Fragment>}
        </Fragment>
    )
}

export default LoginWithOtp;
