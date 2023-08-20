import React, { Fragment, useState } from 'react';
import './Products.css';
import Navbar from '../miscellaneous/Header/header';
import Footer from '../miscellaneous/Footer/Footer';
import Product from '../Home/ProductCard';
import Typography from '@material-ui/core/Typography';
import Slider from "@material-ui/core/Slider";
import MetaData from "../Layout/MetaData"

const categories = [
    "All",
    "Women's Clothing",
    "Men's Clothing",
    "Kids' Wear",
    "Women's Footwear",
    "Men's Footwear",
    "Kids' Footwear",
    "Electronics",
    "Laptop",
    "SmartPhones",
    "Camera",
];

const Products = () => {
    const product = {
        name: "Tshirt",
        images: [{ url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/u/n/a/l-half-latter-one-nb-nicky-boy-original-imagk2gr6ngwxgft.jpeg?q=70" }],
        price: "₹1200",
        _id: "sdfasfasfas",
    };

    const [price, setPrice] = useState([0, 25000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);

    const priceHandler = () => { }
    return (
        <Fragment>
             <MetaData title="Shopello--Products"/>
            <Navbar />
            <div className='products' >
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>
            <div className='filterBox'>
                <Typography>Price</Typography>
                <Slider
                    value={price}
                    onChange={priceHandler}
                    aria-labelledby="continuous-slider"
                    valueLabelDisplay="auto"
                    min={0}
                    max={25000}
                />
                <Typography>Categories</Typography>
                <ul className='categoryBox'>
                    {categories.map((category) =>
                        <li className='category-link'
                            key={category}
                            onClick={() => setCategory(category)}
                        >
                            {category}
                        </li>
                    )}
                </ul>
                <fieldset>
                    <Typography component="legend">Rating</Typography>
                    <Slider
                        value={ratings}
                        onChange={(e, newRating) => {
                            setRatings(newRating);
                        }}
                        aria-labelledby="continuous-slider"
                        valueLabelDisplay="auto"
                        min={0}
                        max={5}
                    />
                </fieldset>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Products
