import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

const ProductsCard = ({ product }) => {
    const options = {
        value: product.rating,
        readOnly: true,
        precision: 0.5,
    };
    return (
        <Link className='productsCard' to={product._id}>
            <img src={product.images[0].url} alt={product.name} />
            <div className='divTwo'>
                <p>{product.name}</p>
                <div>
                    <Rating {...options} /> <span className='productCards-span'>(100 Reviews)</span>
                </div>
            </div>
            <span>{product.price}</span>
        </Link>
    )
}

export default ProductsCard;
