import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>FlowerSh/</div>
        </Link>
        <div className={styles.menu}>
          <Link to="/delivery">
            <div className={styles.item}>Доставка</div>
          </Link>
          <Link to="/pay">
            <div className={styles.item}>Оплата</div>
          </Link>
          <Link to="/feedback">
            <div className={styles.item}>Отзывы</div>
          </Link>
          <Link to="/login">
            <div className={styles.item}>Войти</div>
          </Link>
          <Link to="/cart">
            <div className={styles.item}>Корзина</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
