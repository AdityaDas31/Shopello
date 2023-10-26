import React, { Fragment } from 'react';
import Header from '../miscellaneous/Header/Header';
import Footer from '../miscellaneous/Footer/Footer';
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useCart } from '../../CartContext';
import { Typography } from "@material-ui/core";
import MetaData from "../Layout/MetaData";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart } = useCart();

    // const item ={
    //     product: "sdfasfasfas",
    //     price: 1200,
    //     name: "Tshirt",
    //     image: ["https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/u/n/a/l-half-latter-one-nb-nicky-boy-original-imagk2gr6ngwxgft.jpeg?q=70" ],
    //     quantity: 9,
    // }

    const decreaseQuantity = () => {
    };

    const increaseQuantity = () => {
    };


    return (
        <Fragment>
            <MetaData title={"Shopping Cart"} />
            <Header />
            {cart.length === 0 ? (
                <div className="emptyCart">
                    <RemoveShoppingCartIcon />

                    <Typography>No Product in Your Cart</Typography>
                    <Link to="/">View Products</Link>
                </div>
            ) : (
                <div className='cartPage'>
                    <div className='cartHeader'>
                        <p>Product</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    {cart && cart.map((item) => (
                        <div className='cartContainer'>
                            <CartItemCard item={item} />
                            <div className='cartInput'>
                                <button onClick={() => decreaseQuantity(item)}>-</button>
                                <input type='number' readOnly value={item.quantity} />
                                <button onClick={() => increaseQuantity(item)}>+</button>
                            </div>
                            <p className='cartSubtotal'>{`₹${item.price * item.quantity}`}</p>
                        </div>

                    ))}

                    <div className="cartGrossProfit">
                        <div></div>
                        <div className="cartGrossProfitBox">
                            <p>Gross Total</p>
                            <p>{`₹${cart.reduce(
                                (acc, item) => acc + item.quantity * item.price,
                                0
                            )}`}</p>
                        </div>
                        <div></div>
                        <div className="checkOutBtn">
                            <button>Check Out</button>
                        </div>
                    </div>

                </div>
            )
            }
            <Footer />
        </Fragment>
    )
}

export default Cart;