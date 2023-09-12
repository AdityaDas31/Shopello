import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Product/Products';
import  LoginSignUp from './components/User/LoginSingup'
import { useSelector } from 'react-redux';





function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route extact path='/login' element={<LoginSignUp/>}/>



        <Route extact path="/" element={<Home />} />
        <Route extact path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
