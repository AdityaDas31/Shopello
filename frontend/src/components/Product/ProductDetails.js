import React, { Fragment, useState } from 'react';

import './ProductDetails.css';
import MetaData from '../Layout/MetaData';
import Rating from '@material-ui/lab/Rating'
import { Button } from '@material-ui/core';
import Header from '../miscellaneous/Header/Header';
import Footer from '../miscellaneous/Footer/Footer';

const ProductDetails = () => {
    const product = {
        name: "Tshirt",
        images: [{ url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/u/n/a/l-half-latter-one-nb-nicky-boy-original-imagk2gr6ngwxgft.jpeg?q=70" }],
        price: "1200",
        _id: "sdfasfasfas",
        rating: 2.5,
        stock: 10,
        description: "This is the best tshirt in the world",
    };

    const options = {
        value: product.rating,
        readOnly: true,
        precision: 0.5,
    };

   const [quantity, setQuantity]=  useState(1);

   const decreaseQuantity = () =>{
    if(1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
   }

   const increaseQuantity = () =>{
    if (product.stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
   }



    return (
        <Fragment>
            <MetaData title={`${product.name} -- Shopello`} />
            <Header/>
            <div className='ProductDetails'>
                <div>
                    <img src={product.images[0].url} alt={product.name} />
                </div>
                <div>
                    <div className='detailsBlock-1'>
                        <h1>{product.name}</h1>
                    </div>
                    <div className='detailsBlock-2'>
                        <Rating {...options} />
                        <span className='detailsBlock-2-span'>(100 Reviews)</span>
                    </div>
                    <div className='detailsBlock-3'>
                        <h1>{`₹${product.price}`}</h1>
                        <div className='detailsBlock-3-1'>
                            <div className='detailsBlock-3-1-1'>
                                <button className='decrease' onClick={decreaseQuantity}>-</button>
                                <input readOnly value={quantity} type="number" />
                                <button className='increase' onClick={increaseQuantity}>+</button>
                            </div>
                            <Button>Add To Cart</Button>
                        </div>
                        <p>
                            Status:
                            <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                                {product.stock < 1 ? "OutOfStock" : "InStock"}
                            </b>
                        </p>
                    </div>
                    <div className='detailsBlock-4'>
                    Description: <p>{product.description}</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default ProductDetails;
