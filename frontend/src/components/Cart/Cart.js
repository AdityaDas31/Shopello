import React, { Fragment } from 'react';
import Header from '../miscellaneous/Header/Header';
import Footer from '../miscellaneous/Footer/Footer';
import "./Cart.css";
import CartItemCard from "./CartItemCard";


const Cart = () => {

    const item ={
        product: "sdfasfasfas",
        price: 1200,
        name: "Tshirt",
        image: ["https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/u/n/a/l-half-latter-one-nb-nicky-boy-original-imagk2gr6ngwxgft.jpeg?q=70" ],
        quantity: 9,
    }
  return (
    <Fragment>
        <Header/>
        <div className='cartPage'>
            <div className='cartHeader'>
                <p>Product</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>

            <div className='cartContainer'>
                <CartItemCard item={item}/>
                <div className='cartInput'>
                    <button>-</button>
                    <input type='number' readOnly value={item.quantity}/>
                    <button>+</button>
                </div>
                <p className='cartSubtotal'>{`₹${item.price * item.quantity}`}</p>
            </div>

        </div>
        <Footer/>
    </Fragment>
  )
}

export default Cart;