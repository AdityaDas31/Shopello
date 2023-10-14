import React from 'react';
import cat1 from '../../../images/category-1.jpg';
import cat2 from '../../../images/category-2.jpg';
import cat3 from '../../../images/category-3.jpg';
import cat4 from '../../../images/category-4.jpg';
import cat5 from '../../../images/category-5.jpg';
import cat6 from '../../../images/category-6.jpg';
import './Categories.css';
import { Link } from "react-router-dom";

function Categories() {
    return (
        <>
            <section className="categories">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            {/* <div className="categories__item categories__large__item set-bg" style={{ backgroundImage: `url(${cat1})` }}>
                                <div className="categories__text">
                                    <h1>Women's fashion</h1>
                                    <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</p>
                                    <Link to="#">Shop now</Link>
                                </div>
                            </div> */}
                            <div className='flip-container '>
                                <div className='flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front'>
                                            <div className="categories__item categories__large__item set-bg" style={{ backgroundImage: `url(${cat1})` }}>
                                                <div className="categories__text">
                                                    <h1>Women's fashion</h1>
                                                    <p className='col-md-11'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, repudiandae doloribus doloremque recusandae similique possimus soluta voluptatibus id nobis eos vel eligendi minus corporis voluptas molestiae, est excepturi! Accusantium, molestiae</p>
                                                    <Link to="#">Shop now</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flip-card-back'>
                                            <div className="categories__item categories__large__item set-bg" style={{ backgroundImage: `url(${cat6})` }}>
                                                <div className="categories__text">
                                                    <h1 className='text-white'>Men's fashion</h1>
                                                    <p className='text-white col-md-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, repudiandae doloribus doloremque </p>
                                                    <Link to="#" className='text-white'>Shop now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 ">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" style={{ backgroundImage: `url(${cat2})` }}>
                                        <div className="categories__text">
                                            <h4>Men's fashion</h4>
                                            <p>358 items</p>
                                            <Link to="#">Shop now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" style={{ backgroundImage: `url(${cat3})` }}>
                                        <div className="categories__text">
                                            <h4>Kid's fashion</h4>
                                            <p>273 items</p>
                                            <Link to="#">Shop now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" style={{ backgroundImage: `url(${cat4})` }}>
                                        <div className="categories__text">
                                            <h4>Cosmetics</h4>
                                            <p>159 items</p>
                                            <Link to="#">Shop now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" style={{ backgroundImage: `url(${cat5})` }}>
                                        <div className="categories__text">
                                            <h4>Accessories</h4>
                                            <p>792 items</p>
                                            <Link to="#">Shop now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Categories;