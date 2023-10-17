import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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


    return (
        <>
            <div className={`offcanvas-menu-overlay ${canvas}`} onClick={canvas__open}></div>
            <div className={`offcanvas-menu-wrapper ${canvas}`} >
                <div className="offcanvas__close" onClick={canvas__open}><i class="fa-solid fa-xmark"></i></div>
                <ul className="offcanvas__widget">
                    <li><i className="fas fa-search" onClick={handleShow}></i></li>
                    <li><Link to="/Profile"><i class="fa-regular fa-user"></i>
                    </Link></li>
                    <li><Link to="/Cart"><i className="fas fa-shopping-cart"></i>
                    </Link></li>
                </ul>
                <div className="offcanvas__logo">
                    <Link to="/"><img src={logo} alt="" style={{ width: 100 }} /></Link>
                </div>
                {/* <div id="mobile-menu-wrap"></div> */}

                {/* <div id="mobile-menu-wrap"><div class="slicknav_menu"><Link to="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" ><span class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></Link><nav class="slicknav_nav slicknav_hidden d-none" aria-hidden="true" role="menu" >
                    <ul>
                        <li class="active"><Link to="/" role="menuitem">Home</Link></li>
                        <li><Link to="#" role="menuitem">Women's</Link></li>
                        <li><Link to="#" role="menuitem">Men's</Link></li>
                        <li><Link to="#" role="menuitem">Shop</Link></li>
                        <li class="slicknav_parent slicknav_collapsed"><Link to="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" ><Link to="/Products">Products</Link>
                        </Link><ul class="dropdown slicknav_hidden d-none" role="menu" aria-hidden="true" >

                            </ul>
                        </li>

                    </ul>
                </nav></div></div> */}

                {/* <div className="offcanvas__auth">
                    <Link to="#">Login</Link>
                    <Link to="#">Register</Link>
                </div> */}
            </div>

            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <Link to="/"><img src={logo} alt="" style={{ width: 100 }} /></Link>
                            </div>
                        </div>
                        {/* <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu ">
                                <ul>
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li><Link to="#">Women's</Link></li>
                                    <li><Link to="#">Men's</Link></li>
                                    <li><Link to="#">Shop</Link></li>
                                    <li><Link to="/Products">Products</Link></li>
                                </ul>
                            </nav>
                        </div> */}
                        <div className="col-xl-6 header__right_con">
                            <div className="header__right">
                                {/* <div className="header__right__auth">
                                    <Link to="#">Login</Link>
                                    <Link to="#">Register</Link>
                                </div> */}
                                <ul className="header__right__widget">
                                    <li><i className="fas fa-search" onClick={handleShow}></i></li>
                                    <li><Link to="/Profile"><i class="fa-regular fa-user"></i></Link></li>
                                    <li><Link to="/Cart"><i className="fas fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open" onClick={canvas__open}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>

            <Modal show={show} onHide={handleClose} className="modal">
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header> */}
                <Modal.Body className="modal_body"><input type="text" placeholder="Search Product"/><button><i className="fas fa-search"></i></button></Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>

        </>
    );
}

export default Header;