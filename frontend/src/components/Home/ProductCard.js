import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating'




const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };



    return (
        <div>
            {product.approveStatus ? (
                <Link to={`/test/${product._id}`} className="card">

                    <div className="imgBox">
                        <img src={product.images[0].url} alt={product.name} className="mouse" />
                    </div>

                    <div className="contentBox">
                        <h3>{product.name}</h3>
                        <Rating {...options} /> <span className='productCard-span'>(100 Reviews)</span>
                        <h2 className="price">₹{product.price}</h2>
                        <a className="buy">Buy Now</a>
                    </div>

                </Link>
            ) : ' '}
        </div>
    )
}
// {/* <div>
    // {product.approved ? (

    //     <Link className='productCard' to={`/product/${product.id}`}>
    //     <img src={product.images[0].url} alt={product.name} />
    //     <p>{product.name}</p>
    //     <div>
    //         <Rating {...options} /> <span className='productCard-span'>(100 Reviews)</span>
    //     </div>
    //     <span>{product.price}</span>
    // </Link>
    //     ) : ' '}
// </div> */}
//     )
// }

export default ProductCard;
