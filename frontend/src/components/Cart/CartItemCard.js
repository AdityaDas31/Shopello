import React, { Fragment } from 'react';
import "./CartItemCard.css";
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext';

const CartItemCard = ({item}) => {
  const {removeFromCart } = useCart();
  return (
    <Fragment>
      <div className='CartItemCard'>
      <img src={item.images[0].url} alt={item.name}/>
      <div>
        <Link to={`/product/${item.product}`}>{item.name} {item.size && <> ({item.size})</>}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={() => removeFromCart(item)}>Remove</p>
      </div>
    </div>
    </Fragment>
    
  )
}

export default CartItemCard;
