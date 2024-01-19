import React, { useState, useEffect, Fragment } from 'react';
import './AdminPage.css';
import logo from '../../images/logo.png';

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
                <a href="#" className="logo">
                    {/* <i className='bx bx-code-alt'></i> */}
                    <i className="fa-solid fa-shop"></i>
                    <div className="logo-name">Shopello</div>
                </a>
                <ul className="side-menu">
                    <li><a href="/dashboard"><i className="fa-regular fa-life-ring"></i>Dashboard</a></li>
                    <li><a href="/admin/analytics"><i className="fa-solid fa-chart-line"></i>Analytics</a></li>
                    <li><a href="#"><i className="fa-solid fa-shop"></i>Shop</a></li>
                    <li><a href="#"><i className="fa-solid fa-users"></i>Users</a></li>
                    <li><a href="#"><i className="fa-solid fa-image-portrait"></i>Sellers</a></li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <a href="#" className="logout">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                            Logout
                        </a>
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
                    <a href="#" className="notif">
                        <i className="fa-regular fa-bell"></i>
                        <span className="count">12</span>
                    </a>
                    <a href="#" className="profile">
                        <img src={logo} />
                    </a>
                </nav>

                {/* <!-- End of Navbar --> */}

            </div>
        </Fragment>
    )
}

export default AdminPage
