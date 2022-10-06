import React, { useState, useContext } from "react";
import AppContext from "@context/AppContext";
import '@styles/Header.scss';
import Menu from '@components/Menu'
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MyOrder from '../containers/MyOrder.jsx';


function Header() {

  const { state } = useContext(AppContext);
  const [toogle, setToggle] = useState(false);
  const [toogleOrders, setToggleOrders] = useState(false);
  

  const handleToggle = () =>{
    setToggle(prevToggle => !prevToggle); //lo va a cambiar a su inversa
  };


  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
          
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toogleOrders)}>
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toogle && <Menu/>}      {/* si toogle es true entonces se muestra */}
      {toogleOrders && <MyOrder/>}
    </nav>
  );
}

export default Header;
