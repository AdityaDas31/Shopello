import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import Categories from './Components/Layouts/Categories';
import Header from './Components/Layouts/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Layouts/Footer/Footer';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import LoginWithOpt from './Components/User/LoginWithOpt';
import { loadUser } from './actions/userActions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Account from './Components/User/Account';
import NotFound from './Components/NotFound';
import Dashboard from './Components/Admin/Dashboard';
import MainData from './Components/Admin/MainData';
import OrderTable from './Components/Admin/OrderTable';
import UpdateOrder from './Components/Admin/UpdateOrder';
import ProductTable from './Components/Admin/ProductTable';
import UserTable from './Components/Admin/UserTable';
import NewProduct from './Components/Admin/NewProduct';
import About from './Components/Layouts/About/About';
import Products from './Components/Products/Products'
import Contact from './Components/Layouts/Contact/Contact';
import Cart from './Components/Cart/Cart';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Wishlist from './Components/Wishlist/Wishlist';
import ProtectedRoute from './Routes/ProtectedRoute';
import Shipping from "./Components/Cart/Shipping";
import UpdateUser from "./Components/Admin/UpdateUser";
import OrderConfiem from './Components/Cart/OrderConfirm'
import Payment from './Components/Cart/Payment';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import OrderSuccess from './Components/Cart/OrderSuccess';
import ReviewsTable from './Components/Admin/ReviewsTable';
import MyOrders from './Components/Order/MyOrders';
import OrderDetails from './Components/Order/OrderDetails';
import UpdateProfile from './Components/User/UpdateProfile';
import UpdateProduct from './Components/Admin/UpdateProduct';
import ForgotPassword from './Components/User/ForgotPassword';
import ResetPassword from './Components/User/ResetPassword';
import UpdatePassword from './Components/User/UpdatePassword';





function App() {
  const { isAuthenticated } = useSelector(state => state.user)
  const [stripeApiKey, setStriprApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStriprApiKey(data.stripeApiKey);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    getStripeApiKey();
    window.scrollTo(0, 0);
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>

      <Header />

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route path="/process/payment" element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }></Route>
          </Routes>
        </Elements>
      )}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/getotp" element={<LoginWithOpt />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/account" element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        } ></Route>
        <Route path="/cart" element={<Cart />} />

        <Route path="/password/update" element={
          <ProtectedRoute>
            <UpdatePassword />
          </ProtectedRoute>
        } ></Route>

        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />

        <Route path="/wishlist" element={

          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>

        } ></Route>

        <Route path="/shipping" element={
          <ProtectedRoute>
            <Shipping />
          </ProtectedRoute>
        } ></Route>

        <Route path="/order/confirm" element={
          <ProtectedRoute>
            <OrderConfiem />
          </ProtectedRoute>
        } ></Route>

        <Route path="/orders" element={
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
        }></Route>

        <Route path="/order_details/:id" element={
          <ProtectedRoute>
            <OrderDetails />
          </ProtectedRoute>
        }></Route>

        <Route path="/account/update" element={
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        } ></Route>
        

        <Route path="/success" element={<OrderSuccess success={true} />} />


        <Route path="/admin/dashboard" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={0}>
              <MainData />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>

        <Route path="/admin/orders" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={1}>
              <OrderTable />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>

        <Route path="/admin/order/:id" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={1}>
              <UpdateOrder />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>

        <Route path="/admin/products" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={2}>
              <ProductTable />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>

        <Route path="/admin/new_product" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={3}>
              <NewProduct />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>

        <Route path="/admin/product/:id" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={2}>
              <UpdateProduct />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>

        <Route path="/admin/users" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={4}>
              <UserTable />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>

        <Route path="/admin/user/:id" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={4}>
              <UpdateUser />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>

        <Route path="/admin/order/:id" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={1}>
              <UpdateOrder />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>

        <Route path="/admin/reviews" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard activeTab={5}>
              <ReviewsTable />
            </Dashboard>
          </ProtectedRoute>
        } ></Route>

        {/* <Route path='/*' element={<NotFound />} /> */}

        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
