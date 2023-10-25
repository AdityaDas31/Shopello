import './App.css';
import 'react-tooltip/dist/react-tooltip.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Product/Products';
import LoginSignUp from './components/User/LoginSingup'
import Profile from './components/User/Profile';
import { loadUser } from './actions/userAction';
import { Fragment, useEffect } from 'react';
import store from './store';
import { useSelector } from 'react-redux';
import LoginWithOtp from './components/User/LoginWithOtp';
import UpdatePassword from './components/User/UpdatePassword';
import ProductDetails from './components/Product/ProductDetails';
import Cart from './components/Cart/Cart';
import About from './components/miscellaneous/About/About';
import { CartProvider } from './CartContext';





function App() {

  const { isAuthenticated } = useSelector((state) => state.user);


  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
    <CartProvider>

      <Fragment className="App">
        <Router>
          <Routes>

            <Route extact path="/" element={<Home />} />
            <Route extact path='/about' element={<About />} />

            <Route extact path='/login' element={<LoginSignUp />} />
            <Route extact path='/getOtp' element={<LoginWithOtp />} />


            <Route extact path="/products" element={<Products />} />


            <Route extact path='/product/:id' element={<ProductDetails />} />
            <Route exact path='/cart' element={<Cart />} />




            {/* <Route extact path='/profile' element={<Profile/>}/> */}


            <Route extact path='/profile' element={isAuthenticated ? <Profile /> : <LoginSignUp />} />
            <Route extact path='/password/update' element={isAuthenticated ? <UpdatePassword /> : <LoginSignUp />} />
          </Routes>
        </Router>
      </Fragment>
    </CartProvider>
  );
}

export default App;
