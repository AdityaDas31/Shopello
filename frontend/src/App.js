import './App.css';
import 'react-tooltip/dist/react-tooltip.css' 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Product/Products';
import  LoginSignUp from './components/User/LoginSingup'
import Profile from './components/User/Profile';
import { loadUser } from './actions/userAction';
import { useEffect } from 'react';
import store from './store';
import { useSelector } from 'react-redux';
import LoginWithOtp from './components/User/LoginWithOtp';





function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  },[])
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route extact path='/login' element={<LoginSignUp/>}/>
        <Route extact path='/getOtp' element={<LoginWithOtp/>}/>




        <Route extact path="/" element={<Home />} />
        <Route extact path="/products" element={<Products />} />




        {/* <Route extact path='/profile' element={<Profile/>}/> */}


        <Route extact path='/profile' element={isAuthenticated ? <Profile/> : <LoginSignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
