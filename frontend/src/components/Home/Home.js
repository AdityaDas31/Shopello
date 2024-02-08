import React, { Fragment, useEffect } from 'react';
import Navbar from '../miscellaneous/Header/Header';
// import Navbar from '../miscellaneous/Header/Header';
import Footer from '../miscellaneous/Footer/Footer';
import './Home.css';
import Product from './ProductCard';
import MetaData from '../Layout/MetaData';
import Carousel from '../miscellaneous/Carosel/Carousel';
import Categories from '../miscellaneous/CategoriBox/Categories';
// import About from '../miscellaneous/About/About';
// import products from '../../ProductData';
import { getAllProducts, clearErrors } from '../../actions/productActions';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Layout/Loader/Loader';





const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getAllProducts());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
          <MetaData title="Shopello" />
          <Navbar />
          <Carousel />
          <Categories />
          <h2 className='homeHeading'>Featured Product</h2>
          <div className='home-container' id='home-container'>
            {/* <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} /> */}


            {products && products.map(product => (
              <Product product={product} />
            ))}

          </div>
          <Footer />
        </Fragment>
      )}

    </Fragment>
  )
}

export default Home;
