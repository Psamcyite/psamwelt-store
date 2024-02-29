import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { psamwelt, cart } from '../../assets/icons';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
	<img src={psamwelt} alt="" />
      </div>
      <ul className="nav-menu">
	<li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
	<li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="shop"?<hr/>:<></>}</li>
	<li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="shop"?<hr/>:<></>}</li>
	<li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="shop"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
	<Link to='/login'><button>Login</button></Link>
	<Link to='/cart'><img src={cart} alt="" style={{ maxWidth: "25px" }} /></Link>
	<div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar;
