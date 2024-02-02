import React, { useState, useEffect, Fragment } from 'react';
import './AdminPage.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const AdminPage = () => {

    const storedDarkMode = localStorage.getItem('darkMode');
    const [isDarkMode, setIsDarkMode] = useState(storedDarkMode ? JSON.parse(storedDarkMode) : false);
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);

    const handleThemeToggleChange = () => {
        setIsDarkMode((prev) => !prev);
    };

    useEffect(() => {
        const toggler = document.getElementById('theme-toggle');
        toggler.checked = isDarkMode; // Set checkbox state based on isDarkMode

        const menuBar = document.querySelector('.content nav .fa-solid.fa-bars');

        const handleMenuBarClick = () => {
            setIsSidebarClosed((prev) => !prev);
        };

        toggler.addEventListener('change', handleThemeToggleChange);
        menuBar.addEventListener('click', handleMenuBarClick);

        return () => {
            toggler.removeEventListener('change', handleThemeToggleChange);
            menuBar.removeEventListener('click', handleMenuBarClick);
        };
    }, [isDarkMode]);

    useEffect(() => {
        // Toggle dark mode class on body
        document.body.classList.toggle('dark', isDarkMode);

        // Save dark mode preference to local storage
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);


    return (
        <Fragment>
            {/* <!-- Sidebar --> */}
            <div className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
                <Link to="/" className="logo">
                    {/* <i className='bx bx-code-alt'></i> */}
                    <i className="fa-solid fa-shop"></i>
                    <div className="logo-name">Shopello</div>
                </Link>
                <ul className="side-menu">
                    <li><Link to="/admin"><i className="fa-regular fa-life-ring"></i>Dashboard</Link></li>
                    <li><Link to="/admin/analytics"><i className="fa-solid fa-chart-line"></i>Analytics</Link></li>
                    <li><Link to="/admin/shop"><i className="fa-solid fa-shop"></i>Shop</Link></li>
                    <li><Link to="/admin/products"><i class="fa-brands fa-elementor"></i>Product</Link></li>
                    <li><Link to="/admin/users"><i className="fa-solid fa-users"></i>Users</Link></li>
                    <li><Link to="/admin/sellers"><i className="fa-solid fa-image-portrait"></i>Sellers</Link></li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <Link to="#" className="logout">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <!-- End of Sidebar --> */}

            {/* <!-- Main Content --> */}
            <div className="content">
                {/* <!-- Navbar --> */}
                <nav>
                    <i className="fa-solid fa-bars"></i>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Search..." />
                            <button className="search-btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="theme-toggle" hidden />
                    <label htmlFor="theme-toggle" className="theme-toggle"></label>
                    <Link to="#" className="notif">
                        <i className="fa-regular fa-bell"></i>
                        <span className="count">12</span>
                    </Link>
                    <Link to="#" className="profile">
                        <img src={logo} />
                    </Link>
                </nav>

                {/* <!-- End of Navbar --> */}

            </div>
        </Fragment>
    )
}

export default AdminPage
