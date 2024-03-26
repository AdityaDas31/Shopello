import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Categories from './Components/Layouts/Categories';
import Header from './Components/Layouts/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Layouts/Footer/Footer';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import LoginWithOpt from './Components/User/LoginWithOpt';
import { loadUser } from './actions/userActions';
import { useEffect } from 'react';
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
import Products from './Components/Products/Products'





function App() {

  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/getotp" element={<LoginWithOpt />} />
        <Route path="/products" element={<Products />} />
        <Route path='/account' element={isAuthenticated ? <Account /> : <Login />} />
  

        <Route path="/admin/dashboard" element={
          <Dashboard activeTab={0}>
            <MainData />
          </Dashboard>
        } ></Route>

        <Route path="/admin/orders" element={
          <Dashboard activeTab={1}>
            <OrderTable />
          </Dashboard>
        } ></Route>

        <Route path="/admin/orders/:id" element={
          <Dashboard activeTab={1}>
            <UpdateOrder />
          </Dashboard>
        } ></Route>

        <Route path="/admin/products" element={
          <Dashboard activeTab={2}>
            <ProductTable />
          </Dashboard>
        } ></Route>

        <Route path='/admin/new_product' element={ 
          <Dashboard>
            <NewProduct/>
          </Dashboard>
         }></Route>

        <Route path="/admin/users" element={
            <Dashboard activeTab={4}>
              <UserTable />
            </Dashboard>
        } ></Route>

        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
