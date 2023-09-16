import React, { useState } from 'react';
import './Navbar.css';
//import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../../images/logo.png';
//import Products from '../../Product/Products';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Tooltip as ReactTooltip } from 'react-tooltip';



const Header = () => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <>
            <nav>
                <div className='s1'>
                    <Link to='/'> <img src={logo} alt='logo' className='logo' /></Link>
                    <div className='searchbar'>
                        <input type='text' placeholder='Search Product' className='search' />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                    <div className='right'>
                        <div className='cart'>
                            <Link to='/cart' data-tooltip-id='cart' data-tooltip-content="Cart" data-tooltip-place='left'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg></Link>
                            <ReactTooltip id='cart'/>
                        </div>
                        <Link to='/profile' data-tooltip-id='profile' data-tooltip-content="Profile" data-tooltip-place='left'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg></Link>
                        <ReactTooltip id='profile'/>

                    </div>
                </div>
                <div className='lower'>
                    <div className='searchbar_toggle'>
                        <input type='text' placeholder='Search Product' className='search_toggle' />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                    <div className={showOptions ? "s2 toggle_menu" : "s2"}>
                        {/* <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic" className='dropdown'>
                                Categories
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='dropdown-menu'>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                        <Link to='/products' className='other-a toggle_menu_other-a'>Explore</Link>
                        <Link href='#/action-1' className='other-a toggle_menu_other-a'>About Us</Link>
                        <Link href='#/action-2' className='other-a toggle_menu_other-a'>Contact Us</Link>
                    </div>
                    <div className='toggle_btn'>
                        <Link onClick={() => setShowOptions(!showOptions)}><GiHamburgerMenu /></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
