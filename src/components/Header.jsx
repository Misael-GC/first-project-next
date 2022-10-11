import React, { useState, useContext } from "react";
import Link from "next/link";
import AppContext from "@context/AppContext";
import Menu from '@components/Menu';
import MenuMobile from '@components/MenuMobile';
import MyOrder from '@containers/MyOrder.jsx';
import Image from "next/image";
import styles from '@styles/Header.module.scss';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';


function Header() {
  const { state } = useContext(AppContext);
  const [toogle, setToggle] = useState(false);
  const [toogleOrders, setToggleOrders] = useState(false);
  const [toogleMenuMobile, setToggleMenuMobile] = useState(false);
  

  const handleToggle = () =>{
    setToggle(prevToggle => !prevToggle); //lo va Link cambiar Link su inversa
  };

  const handleToggleMenuMobile = () => {
    setToggleMenuMobile(!toogleMenuMobile);
    console.log("entra");
  };


  return (
    <nav className={styles.Nav}>
    <div className={styles.menu}>
      <Image src={menu} alt="menu" onClick={handleToggleMenuMobile} width={25} height={25}/>
    </div>

      <div className={styles["navbar-left"]}>
        <Link href='/'>
          <Image src={logo} alt="logo" className={styles["nav-logo"]} />
        </Link>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>

      <div className={styles["navbar-right"]}>
        <ul>
          <button className={styles["navbar-email"]} onClick={handleToggle}>
            platzi@example.com
          </button>
          <bu className={styles["navbar-shopping-cart"]}onClick={() => setToggleOrders(!toogleOrders)}>
            <Image src={shoppingCart} alt="shopping cart" className={styles.pointer}/>
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </bu>
        </ul>
      </div>
      {toogle && <Menu/>}      {/* si toogle es true entonces se muestra */}
      {toogleOrders && <MyOrder  toogleOrders={toogleOrders} setToggleOrders={setToggleOrders}/>}
      {toogleMenuMobile && <MenuMobile handleToggleMenuMobile={handleToggleMenuMobile}/>}
    </nav>
  );
}

export default Header;
