import React from 'react';
import "./CartItemCard.css";
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext';

const CartItemCard = () => {
  const { cart, removeFromCart } = useCart();
  return (
    <>
    {cart.map((item) => (
      <div className='CartItemCard'>
      <img src={item.images[0].url} alt={item.name}/>
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={() => removeFromCart(item)}>Remove</p>
      </div>
    </div>
    ))}
    </>
    
  )
}

export default CartItemCard;
