import './App.css';
import 'react-tooltip/dist/react-tooltip.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Product/Products';
import LoginSignUp from './components/User/LoginSingup'
import Profile from './components/User/Profile';
import { loadUser } from './actions/userAction';
import { Fragment, useEffect, useState } from 'react';
import store from './store';
import { useSelector } from 'react-redux';
import LoginWithOtp from './components/User/LoginWithOtp';
import UpdatePassword from './components/User/UpdatePassword';
import ProductDetails from './components/Product/ProductDetails';
import Cart from './components/Cart/Cart';
import About from './components/miscellaneous/About/About';
import { CartProvider } from './CartContext';
import Loader from './components/Layout/Loader/Loader';
import Checkout from './components/Checkout/Checkout';
import axios from 'axios';
import Payment from './components/Checkout/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import OrderSuccess from './components/Checkout/OrderSuccess';
import Analytics from './components/Admin/Analytics';
import Shop from './components/Admin/Shop';
import Users from './components/Admin/Users';
import Sellers from './components/Admin/Sellers';
import Dashboard from './components/Admin/Dashboard';



function App() {

  const { isAuthenticated } = useSelector((state) => state.user);
  const [stripeApiKey, setStriprApiKey] = useState("");

  async function getStripeApiKey() {
    // const { data } = await axios.get("/api/v1/payment/stripeapikey");
    // setStriprApiKey(data.stripeApiKey);
  }


  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, [])
  return (
    <CartProvider>

      <Fragment className="App">
        <Router>
          {stripeApiKey && (
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Routes>
                <Route>
                  <Route exact path='/process/card' element={<Payment />} />
                </Route>
              </Routes>
            </Elements>
          )}
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path='/profile' element={isAuthenticated ? <Profile /> : <LoginSignUp />} />
            <Route exact path='/password/update' element={isAuthenticated ? <UpdatePassword /> : <LoginSignUp />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/loader' element={<Loader />} />

            <Route exact path='/login' element={<LoginSignUp />} />
            <Route exact path='/getOtp' element={<LoginWithOtp />} />


            <Route exact path="/products" element={<Products />} />


            <Route exact path='/product/:id' element={<ProductDetails />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
            <Route exact path='/success' element={<OrderSuccess />} />

            <Route exact path='/admin' element={<Dashboard/>}/>
            <Route exact path='/admin/analytics' element={<Analytics/>}/>
            <Route exact path='/admin/shop' element={<Shop/>}/>
            <Route exact path='/admin/users' element={<Users/>}/>
            <Route exact path='/admin/sellers' element={<Sellers/>}/>


            


            {/* <Elements stripe={loadStripe(stripeApiKey)}>
              <Route exact path='/process/payment' element={<Payment />} />
            </Elements> */}




            {/* <Route extact path='/profile' element={<Profile/>}/> */}


          </Routes>
        </Router>
      </Fragment>
    </CartProvider>
  );
}

export default App;
