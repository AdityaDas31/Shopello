import React, { Fragment } from 'react';
// import "./CartItemCard.css";
import "./Cart.css"
import { Link } from 'react-router-dom';

const CartItemCard = ({ item }) => {
  return (
    <Fragment>
      <Link class="cart-item-product" to={`/product/${item.id}`}>
        <div class="cart-item-product-thumb"><img src={item.images[0].url} alt={item.name} /></div>
        <div class="cart-item-product-info">
          <h4 class="cart-item-product-title">{item.name}</h4><span>{item.size && <> Size: ({item.size})</>}</span><span>Color: Black</span>
        </div>
      </Link>
    </Fragment>

  )
}

export default CartItemCard;
