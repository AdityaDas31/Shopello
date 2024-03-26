import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, login } from '../../actions/userActions'
// import { useSnackbar } from 'notistack';
import BackdropLoader from '../Layouts/BackdropLoader';
import { useAlert } from 'react-alert';
import MetaData from '../Layouts/MetaData';


const Login = () => {

    const inlineStyles = {
        background: 'conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();
    // const { enqueueSnackbar } = useSnackbar();
    const location = useLocation();
    const { error, loading, isAuthenticated } = useSelector((state) => state.user);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    const loginwithgoogle = ()=>{
        window.open("http://localhost:5000/auth/google/callback","_self")
    }


    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            // navigate(`/${redirect}`)
            navigate("/")
        }
    }, [dispatch, error, isAuthenticated, navigate, alert]);

    return (
        <>
            <MetaData title="Login | Flipkart" />

            {loading && <BackdropLoader />}
            <main className="w-full mt-12 sm:pt-20 sm:mt-0">

                {/* <!-- row --> */}
                <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
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
                            <form onSubmit={handleLogin}>
                                <div className="flex flex-col w-full gap-4">

                                    <TextField
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <TextField
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    {/* <span className="text-xxs text-red-500 font-medium text-left mt-0.5">Please enter valid Email ID/Mobile number</span> */}

                                    {/* <!-- button container --> */}
                                    <div className="flex flex-col gap-2.5 mt-2 mb-32">
                                        <p className="text-xs text-primary-grey text-left">By continuing, you agree to Flipkart's <a href="https://www.flipkart.com/pages/terms" className="text-primary-blue"> Terms of Use</a> and <a href="https://www.flipkart.com/pages/privacypolicy" className="text-primary-blue"> Privacy Policy.</a></p>
                                        <p className="text-xs text-primary-grey text-left">Login With OTP <Link to='/getotp' className="text-primary-blue"> Click Here</Link></p>
                                        <button type="submit" className="text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium">Login</button>
                                        <Link to="/password/forgot" className="hover:bg-gray-50 text-primary-blue text-center py-3 w-full shadow border rounded-sm font-medium">Forgot Password?</Link>
                                    </div>
                                    {/* <!-- button container --> */}

                                </div>
                            </form>
                            {/* <!-- input container --> */}

                            <Link to="/register" className="font-medium text-sm text-primary-blue">New to Flipkart? Create an account</Link>
                        </div>
                        {/* <!-- edit info container --> */}

                    </div>
                    {/* <!-- login column --> */}
                </div>
                {/* <!-- row --> */}

            </main>
        </>
    );
};

export default Login;
