import React from 'react';
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
