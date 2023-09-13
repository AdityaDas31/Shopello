import React, { Fragment } from 'react';
import Header from '../miscellaneous/Header/Header';
import Footer from '../miscellaneous/Footer/Footer';
import './Profile.css';
import ProfileImg from '../../images/Profile.png';
import { Link } from 'react-router-dom';
// import MetaData from '../Layout/MetaData';
// import { useSelector } from 'react-redux';

const Profile = () => {
    // const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    return (
        <Fragment>
            {/* <MetaData title={`${user.name}'s Profile`} /> */}
            <Header />
            <div className='profile_container'>
                <div className='img_container'>
                    {/* <img src={user.avatar.url} alt={ProfileImg}/> */}
                    <img src={ProfileImg} alt={ProfileImg} />
                    <Link className='edit_profile'>Edit Profile</Link>
                    <Link className='change_password'>Change Password</Link>
                    <Link className='logout'>Logout</Link>
                </div>
                <div className='other'>
                    <h2>Profile Information</h2>
                    <div className='other_info'>
                        {/* <p>Name: <span>{user.name}</span></p>
                        <p>Email: <span>{user.email}</span></p>
                        <p>Joined On: <span>{String(user.createdAt).substr(0, 10)}</span></p> */}
                        <table>
                            <tr>
                                <th>Name</th>
                                <td>:</td>
                                <td>Aditya Das</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>:</td>
                                <td>4adityadas39@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Joined On</th>
                                <td>:</td>
                                <td>26.05.2023</td>
                            </tr>
                        </table>
                    </div>
                    <Link>Order</Link>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Profile;
