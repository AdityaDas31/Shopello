import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from "../../../images/logo.png"
import OffcanvasMenu from './OffcanvasMenu';

function Header() {
    <OffcanvasMenu />
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-2">
                        <div className="header__logo">
                            <Link to="/"><img src={logo} alt="" style={{ width: 70 }} /></Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <nav className="header__menu">
                            <ul>
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="#">Women's</Link></li>
                                <li><Link to="#">Men's</Link></li>
                                <li><Link to="#">Shop</Link></li>
                                <li><Link to="#">Pages</Link>
                                    <ul className="dropdown">
                                        <li><Link to="./Products">Product Details</Link></li>
                                        <li><Link to="./Cart">Shop Cart</Link></li>
                                        <li><Link to="#">Checkout</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__right">
                            {/* <div className="header__right__auth">
                                <Link to="/Profile">Login</Link>
                                <Link to="/Profile">Register</Link>
                            </div> */}
                            <ul className="header__right__widget">
                                <li><span className="icon_search search-switch"><i className="fas fa-search"></i></span></li>
                                <li><Link to="/Profile"><i class="fa-regular fa-user"></i></Link></li>
                                <li><Link to="/Cart"><span className="icon_bag_alt"><i className="fas fa-shopping-cart"></i></span>
                                </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="canvas__open">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </header>
        
    );
}

export default Header;
