import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import './Navbar.css';
import Modal from 'react-bootstrap/Modal';
import { useCart } from '../../../CartContext';

const Header = () => {


    const [show, setShow] = useState(false);

    const [canvas, setCanvas] = useState("");
    const canvas__open = () => {
        if (canvas === "") {
            setCanvas("active");
        } else {
            setCanvas("");
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { cart } = useCart();

    const inputRef = useRef(null);
    const searchBtnRef = useRef(null);

    const [isClose, setIsClose] = useState(false);
    const [isSquare, setIsSquare] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showOpenButton, setShowOpenButton] = useState(true);

    const expand = () => {
        setIsClose((prev) => !prev);
        setIsSquare((prev) => !prev);
        setIsOn((prevIsOn) => !prevIsOn);
    };

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
          setShowOpenButton(window.innerWidth > 768); // Adjust the threshold as needed
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);




    return (
        <Fragment>

            
                <div id="sidebar" style={{ width: sidebarOpen ? '250px' : '0' }}>
                    <div className="close-btn" onClick={closeSidebar}><i class="fa-solid fa-xmark"></i></div>
                    <li><Link to='/profile' ><i class="fa-regular fa-user option"></i> Profile</Link></li>
                    <li><Link to='/cart'><i className="fas fa-shopping-cart option"></i> Cart ({cart.length < 1 ? ' ' : <span>{cart.length}</span>})</Link></li>
                    {/* Add more options as needed */}
                </div>

                <div id="main-content">
                    {/* <button id="open-btn" onClick={openSidebar} style={{ display: sidebarOpen ? 'none' : 'none' }}>Open Sidebar</button> */}
                    {/* Your main content goes here */}
                </div>


            <div className="navbar">
                <div className="logo">
                    <Link to='/'><img src={logo} alt="Logo" style={{ width: 120 }} /></Link>
                </div>
                <ul className="nav-menu">
                    <li>
                        <form id="content" className={isOn ? 'on' : ''}>
                            <input
                                type="text"
                                name="input"
                                className={`input ${isSquare ? 'square' : ''}`}
                                id="search-input"
                                ref={inputRef}
                            />
                            <button
                                type="reset"
                                className={`search ${isClose ? 'close' : ''}`}
                                id="search-btn"
                                ref={searchBtnRef}
                                onClick={expand}
                            ></button>
                        </form>
                    </li>
                    <li><Link to='/profile' ><i class="fa-regular fa-user option"></i></Link></li>
                    <li><Link to='/cart'><i className="fas fa-shopping-cart option"></i>{cart.length < 1 ? ' ' : <span>{cart.length}</span>}</Link></li>
                    <li><i class="fa-solid fa-bars hum" onClick={openSidebar}></i></li>
                    
                </ul>

            </div>
        </Fragment>
    );
}

export default Header;