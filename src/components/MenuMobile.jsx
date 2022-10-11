import React from 'react';
import styles from '@styles/MenuMobile.module.scss';

function MenuMobile() {
  return (
    <div className={styles['mobile-menu']}>

      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
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

      <ul>
        <li>
          <a href="/orders">My orders</a>
        </li>
        <li>
          <a href="/account">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/" className={styles.email}>
            mail@example.com
          </a>
        </li>
        <li>
          <a href="/" className={styles["sign-out"]}>
            Sign out
          </a>
        </li>
      </ul>

    </div>
  )
}

export default MenuMobile;