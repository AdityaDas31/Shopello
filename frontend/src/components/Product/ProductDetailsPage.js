import React, { Fragment, useEffect, useState } from 'react';
import './ProductDetailsPage.css';
import { clearErrors, getProductDetails } from '../../actions/productActions';
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import Loader from '../Layout/Loader/Loader';
import { Rating } from '@material-ui/lab';
// import { Magnifier, GlassMagnifier, SideBySideMagnifier, PictureInPictureMagnifier, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from 'react-image-magnifiers';
import { useDispatch, useSelector } from 'react-redux';



const ProductDetailsPage = () => {


    const alert = useAlert();
    const { id } = useParams();
    const dispatch = useDispatch();

    const { product, loading, error } = useSelector((state) => state.productDetails);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showLoader, setShowLoader] = useState(true);

    // const options = {
    //     value: product.ratings,
    //     readOnly: true,
    //     precision: 0.5,
    // }



    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        };

        // dispatch(getProductDetails(id));

        const fetchProductDetails = async () => {
            await dispatch(getProductDetails(id));
            setShowLoader(false);
        };

        const loadingDelay = setTimeout(() => {
            fetchProductDetails();
        }, 100);

        return () => {
            clearTimeout(loadingDelay);
            setSelectedImage(null);
        };
    }, [dispatch, alert, error, id]);


    useEffect(() => {
        if (product && product.images && product.images.length > 0) {
            setSelectedImage(product.images[0]);
        }

    }, [product]);


    const handleImageClick = (image) => {
        setSelectedImage(image);
        console.log(image)
    };


    return (
        <Fragment>
            {showLoader || loading ? <Loader /> : <Fragment>
                <div className="page">
                    <div className="img">
                        {product &&
                            product.images &&
                            product.images.length > 0 &&
                            product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.url}
                                    alt=""
                                    onClick={() => handleImageClick(image)}
                                />
                            ))}
                    </div>
                    <div className="left">
                        {/* {selectedImage && <img src={selectedImage.url} id="imgs" alt="" />} */}
                        {selectedImage && <img src={selectedImage.url} id="imgs" alt="" />}
                        <button>Add To Cart</button>
                        <button>Buy Now</button>
                    </div>
                    <div className="right">
                        <h3>Brand Name</h3>
                        <h1>{product.name}</h1>
                        <h1>₹{product.price}</h1>
                        {/* <Rating {...options}/> */}
                        <div>
                            <span className='rating'>{product.ratings} <i class="fa-solid fa-star"></i></span>
                            <span className='reviews'>{product.numOfReviews} Reviews</span>
                        </div>
                        <h6>Seller: {product.user.name}</h6>
                        <h4>Available Offer's</h4>
                        <p>: Special PriceGet extra 11% off (price inclusive of cashback/coupon)</p>
                        <p>: Partner OfferPurchase now & get a surprise cashback coupon for January / February 2023</p>
                        <p>: Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000*</p>
                        <p>: Bank Offer5% Cashback on Flipkart Axis Bank</p>
                    </div>
                </div>
            </Fragment>}
        </Fragment>
    )
}

export default ProductDetailsPage
