import React, { Fragment } from 'react';
// import Navbar from '../miscellaneous/Header/Header';
import Navbar from '../miscellaneous/Header/Header';
import Footer from '../miscellaneous/Footer/Footer';
import './Home.css';
import Product from './ProductCard';
import MetaData from '../Layout/MetaData';
import Carousel from '../miscellaneous/Carosel/Carousel';



const Home = () => {
  const product = {
    name: "Tshirt",
    images: [{ url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/u/n/a/l-half-latter-one-nb-nicky-boy-original-imagk2gr6ngwxgft.jpeg?q=70" }],
    price: "₹1200",
    _id: "sdfasfasfas",
    rating:2.5, 
  };
  return (
    <Fragment>
      <MetaData title="Shopello" />
      <Navbar />
      <Carousel />
      <div className='home-container' id='home-container'>
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
      <Footer />
    </Fragment>
  )
}

export default Home;
