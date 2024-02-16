import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './Components/Layouts/Categories';
import Header from './Components/Layouts/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Layouts/Footer/Footer';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import LoginWithOpt from './Components/User/LoginWithOpt';
import { loadUser } from './actions/userActions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Account from './Components/User/Account';





function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  },[dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/getotp" element={<LoginWithOpt />} />
        <Route path='/account' element={<Account />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
