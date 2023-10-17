import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import pay1 from '../../../images/icon-pay-01.png';
import pay2 from '../../../images/icon-pay-02.png';
import pay3 from '../../../images/icon-pay-03.png';
import pay4 from '../../../images/icon-pay-04.png';
import pay5 from '../../../images/icon-pay-05.png';

import { Link } from "react-router-dom";

const Footer = () => {

    const subscribeSubmit = () =>{

    }
    
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <Link to="/"><img src={logo} alt='logo' /></Link>
                                </div>
                                <p>
                                    Thank you for choosing Shopello as your go-to destination. Join us in creating memories through shopping, and let's embark on this journey together.</p>
                                <div className="footer__payment">
                                    <Link to="#"><img src={pay1} alt="" /></Link>
                                    <Link to="#"><img src={pay2} alt="" /></Link>
                                    <Link to="#"><img src={pay3} alt="" /></Link>
                                    <Link to="#"><img src={pay4} alt="" /></Link>
                                    <Link to="#"><img src={pay5} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                       <div className='col-lg-4 col-md-6 col-sm-12 row d-flex justify-content-center flex-row'>
                       <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="footer__widget">
                                <h6>Quick links</h6>
                                <ul className='p-0'>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="footer__widget">
                                <h6>Account</h6>
                                <ul className='p-0'>
                                    <li><Link to="/profile">My Account</Link></li>
                                    <li><Link to="#">Orders Tracking</Link></li>
                                    <li><Link to="#">Checkout</Link></li>
                                    <li><Link to="#">Wishlist</Link></li>
                                </ul>
                            </div>
                        </div>
                       </div>
                        <div className="col-lg-4 col-md-8 col-sm-8">
                            <div className="footer__newslatter">
                                <h6>NEWS LETTER</h6>
                                <form action="#" onSubmit={subscribeSubmit}>
                                    <input type="text" placeholder="Email"/>
                                    <button type="submit" className="site-btn">Subscribe</button>
                                </form>
                                <div className="footer__social">
                                    <Link to="#" className='facebook'><i className="fa fa-facebook"></i></Link>
                                    <Link to="#" className='twitter'><i className="fa fa-twitter"></i></Link>
                                    <Link to="#" className='youtube'><i className="fa fa-youtube-play"></i></Link>
                                    <Link to="#" className='instagram'><i className="fa fa-instagram"></i></Link>
                                    {/* <Link to="#" className='pinterest'><i className="fa fa-pinterest"></i></Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer_copyright_text">
                                <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                                    <a href="#/action-1"> Shopello</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;