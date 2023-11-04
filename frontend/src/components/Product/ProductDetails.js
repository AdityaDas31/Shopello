import React, { Fragment, useEffect, useState } from 'react';
import './ProductDetails.css';
import MetaData from '../Layout/MetaData';
import Rating from '@material-ui/lab/Rating'
// import { Button } from '@material-ui/core';
import Header from '../miscellaneous/Header/Header';
import Footer from '../miscellaneous/Footer/Footer';
// import { Tooltip as ReactTooltip } from 'react-tooltip';
// import Tooltip from '@material-ui/core';
// import Tooltip from '@mui/material/Tooltip';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ShareSocial } from 'react-share-social';
import { useCart } from '../../CartContext';
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';
import products from '../../ProductData';

const ProductDetails = () => {
    // const product = {
    //     name: "Tshirt",
    //     images: [{ url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/u/n/a/l-half-latter-one-nb-nicky-boy-original-imagk2gr6ngwxgft.jpeg?q=70" }],
    //     price: "1200",
    //     _id: "sdfasfasfas",
    //     rating: 2.7,
    //     stock: 10,
    //     description: "This is the best tshirt in the world",
    //     sizes: ["M", "L", "XL", "XXL"],
    // };

    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    // const [urlToCopy, setUrlToCopy] = useState(`http://localhost:3000/product/${product._id}`);
    // const [open, setOpen] = React.useState(false);
    const [show, setShow] = useState(false);
    const { addToCart } = useCart();
    const alert = useAlert();
    const { id } = useParams();
    const product = products.find(product => product.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    const options = {
        value: product.rating,
        readOnly: true,
        precision: 0.5,
    };
    const decreaseQuantity = () => {
        if (1 >= quantity) return;

        const qty = quantity - 1;
        setQuantity(qty);
    }

    const increaseQuantity = () => {
        if (product.stock <= quantity) return;

        const qty = quantity + 1;
        setQuantity(qty);
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const shareUrl = `localhost:3000/product/${product._id}`;\

    const shareUrl = window.location.href

    // const handleTooltipClose = () => {
    //     setOpen(false);
    // };

    // const handleTooltipOpen = () => {
    //     setOpen(true);
    //     navigator.clipboard.writeText(urlToCopy);
    // };

    const handleAddToCart = () => {
        addToCart({ ...product, quantity, size: selectedSize });
        alert.success("Item Added to Cart")
    };

    return (
        <Fragment>
            <MetaData title={`${product.name} -- Shopello`} />
            <Header />
            <div className='ProductDetails'>
                <div className='img'>
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
                        {product.sizes != null ? <p>Size
                            <select
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                            >
                                {/* <option value="">Select a size</option> */}
                                {product.sizes.map((size, index) => (
                                    <option key={index} value={size}>{size}</option>
                                ))}
                            </select> </p> : ' '}
                        <div className='detailsBlock-3-1'>
                            <div className='detailsBlock-3-1-1'>
                                <button className='decrease' onClick={decreaseQuantity}>-</button>
                                <input readOnly value={quantity} type="number" />
                                <button className='increase' onClick={increaseQuantity}>+</button>
                            </div>
                            {product.stock < 1 ? <Button disabled variant="danger">Add To Cart</Button> : <Button onClick={handleAddToCart}>Add To Cart</Button>}
                            {/* <Button onClick={handleAddToCart}>Add To Cart</Button> */}
                            <Button onClick={handleShow}><i className="fa-solid fa-share"></i></Button>
                            <Modal show={show} onHide={handleShow}>
                                <Modal.Header>
                                    <Modal.Title>Share Product Link</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ShareSocial
                                        url={shareUrl}
                                        socialTypes={['facebook', 'twitter', 'whatsapp', 'telegram']}
                                        onSocialButtonClicked={data => console.log(data)}
                                    />
                                </Modal.Body>
                                <Modal.Footer >
                                    <Button variant="danger" onClick={handleClose}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </Button>
                                </Modal.Footer>
                            </Modal>
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
            <Footer />
        </Fragment>
    )
}

export default ProductDetails;
