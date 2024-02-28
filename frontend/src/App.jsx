import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';

function App() {

  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
	<Route path='/' element={<Shop/>} />
	<Route path='/mens' element={<ShopCategory category="men"/>} />
	<Route path='/womens' element={<ShopCategory category="women"/>} />
	<Route path='/kids' element={<ShopCategory category="kid"/>} />
	<Route path='/product' element={<Product/>}>
	  <Route path=':productId' element={<Product/>} />
	</Route>
	<Route path='/cart' element={<Cart/>}/>
	<Route path='/login' element={<LoginSignup/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App;
