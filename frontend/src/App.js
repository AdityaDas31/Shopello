import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './Components/Layouts/Categories';
import Header from './Components/Layouts/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Layouts/Footer/Footer';
import Login from './Components/User/Login';
import Register from './Components/User/Register';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
