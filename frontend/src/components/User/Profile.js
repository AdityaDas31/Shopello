import React, { Fragment, useEffect } from 'react';
import Header from '../miscellaneous/Header/Header';
import Footer from '../miscellaneous/Footer/Footer';
import './Profile.css';
import ProfileImg from '../../images/Profile.png';
import { Link, useNavigate } from 'react-router-dom';
import MetaData from '../Layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Layout/Loader/Loader';
import { logout } from '../../actions/userAction';
import { useAlert } from 'react-alert';


const Profile = () => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();


    function logoutUser() {
        dispatch(logout());
        alert.success("Logout Successfully");
        navigate('/login');
    }

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate('/login');
        }
    }, [navigate, isAuthenticated]);
    return (
        <Fragment>
            <MetaData title={`${user.name}'s Profile`} />
            {loading ? <Loader /> : <Fragment>
                <Header />
                <div className='profile_container'>



                    <div className='img_container'>
                        <div className='block glow'>
                        <img src={user.avatar.url} alt={ProfileImg}/>
                        </div>
                        <Link className='edit_profile'>Edit Profile</Link>
                        <Link to="/password/update" className='change_password'>Change Password</Link>
                        <Link className='logout' onClick={logoutUser}>Logout</Link>
                    </div>



                    <div className='other'>
                        <h2>Profile Information</h2>
                        <div className='other_info'>
                            <table>
                                <tr>
                                    <th>Name</th>
                                    {/* <td>:</td> */}
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    {/* <td>:</td> */}
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <th>Joined On</th>
                                    {/* <td>:</td> */}
                                    <td>{String(user.createdAt).substr(0, 10)}</td>
                                </tr>
                            </table>
                        </div>
                        <Link>Order</Link>
                    </div>
                </div>
                <Footer />
            </Fragment>}
        </Fragment>
    )
}

export default Profile;
