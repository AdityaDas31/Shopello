import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Product/Products';





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route extact path="/" element={<Home />} />
        <Route extact path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
