import React, { Fragment } from 'react';
import Header from '../miscellaneous/Header/Header';
import Footer from '../miscellaneous/Footer/Footer';
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useCart } from '../../CartContext';
import { Typography } from "@material-ui/core";
import MetaData from "../Layout/MetaData";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link, useNavigate } from 'react-router-dom';


const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

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

    const checkoutHandler = () => { 
        navigate('/login?redirect=checkout'); 
    }


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
            <div class="container pb-5 mb-2">
                {cart && cart.map((item) => (

                    <div class="cart-item d-md-flex justify-content-between mt-5"><span class="remove-item"><i class="fa fa-times" onClick={() => removeFromCart(item)}></i></span>
                        <div class="px-3 my-3">
                            <CartItemCard item={item} />
                        </div>
                        <div class="px-3 my-3 text-center">
                            <div class="cart-item-label">Quantity</div>
                            <div class="count-input">
                                <button onClick={() => decreaseQuantity(item)}>-</button>
                                <input type='number' readOnly value={item.quantity} />
                                <button onClick={() => increaseQuantity(item)}>+</button>
                            </div>
                        </div>
                        <div class="px-3 my-3 text-center">
                            <div class="cart-item-label">Subtotal</div><span class="text-xl font-weight-medium">₹${item.price}</span>
                        </div>
                    </div>
                ))}


                <div class="d-sm-flex justify-content-between align-items-center text-center text-sm-left">

                    <div class="py-2"><span class="d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2">Gross Total:</span><span class="d-inline-block align-middle text-xl font-weight-medium">{`₹${cart.reduce(
                                (acc, item) => acc + item.quantity * item.price,
                                0
                            )}`}</span></div>
                </div>

                {/* <hr class="my-2"> */}
                <div class="row pt-3 pb-5 mb-2 ">
                    <div class="col-sm-6 mb-3 "><button class="btn btn-style-1 btn-primary btn-block " onClick={checkoutHandler}>Checkout</button></div>
                </div>
            </div>
            )}
            <Footer />
        </Fragment>
    )
}

export default Cart;